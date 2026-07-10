#!/usr/bin/env python3
"""
Robots Exclusion Checker
Inspired by checkrobots.com by Sam Gipson
Checks: robots.txt per-bot, Meta Robots, X-Robots-Tag, Canonical.
"""

import urllib.robotparser
import urllib.request
import urllib.parse
import urllib.error
import re
import sys
from dataclasses import dataclass, field
from typing import Optional

# ─── Realistic browser UA so sites serve real HTML ────────────────────────────
BROWSER_UA = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/124.0.0.0 Safari/537.36"
)

# ─── Bot definitions ──────────────────────────────────────────────────────────
BOTS = {
    "Googlebot":     {"category": "Search Engines", "user_agent": "Googlebot",     "description": "Google web crawling"},
    "Bingbot":       {"category": "Search Engines", "user_agent": "bingbot",       "description": "Bing web crawling"},
    "Slurp":         {"category": "Search Engines", "user_agent": "Slurp",         "description": "Yahoo Search"},
    "DuckDuckBot":   {"category": "Search Engines", "user_agent": "DuckDuckBot",   "description": "DuckDuckGo"},
    "Baiduspider":   {"category": "Search Engines", "user_agent": "Baiduspider",   "description": "Baidu"},
    "GPTBot":        {"category": "A.I. Bots",      "user_agent": "GPTBot",        "description": "OpenAI training data"},
    "ChatGPT-User":  {"category": "A.I. Bots",      "user_agent": "ChatGPT-User",  "description": "OpenAI real-time browsing"},
    "OAI-SearchBot": {"category": "A.I. Bots",      "user_agent": "OAI-SearchBot", "description": "OpenAI search indexing"},
    "anthropic-ai":  {"category": "A.I. Bots",      "user_agent": "anthropic-ai",  "description": "Anthropic training"},
    "ClaudeBot":     {"category": "A.I. Bots",      "user_agent": "ClaudeBot",     "description": "Anthropic Claude browsing"},
    "CCBot":         {"category": "A.I. Bots",      "user_agent": "CCBot",         "description": "Common Crawl (AI datasets)"},
    "cohere-ai":     {"category": "A.I. Bots",      "user_agent": "cohere-ai",     "description": "Cohere AI training"},
    "PerplexityBot": {"category": "A.I. Bots",      "user_agent": "PerplexityBot", "description": "Perplexity AI"},
    "YouBot":        {"category": "A.I. Bots",      "user_agent": "YouBot",        "description": "You.com AI"},
}


# ─── Data classes ─────────────────────────────────────────────────────────────

@dataclass
class BotResult:
    name: str
    user_agent: str
    category: str
    description: str
    allowed: bool
    disallow_paths: list = field(default_factory=list)
    allow_paths: list = field(default_factory=list)
    crawl_delay: Optional[float] = None


@dataclass
class MetaRobotsResult:
    present: bool
    raw_value: Optional[str]
    noindex: bool
    nofollow: bool
    noarchive: bool
    nosnippet: bool
    noimageindex: bool
    none_directive: bool


@dataclass
class RobotsTagResult:
    present: bool
    raw_value: Optional[str]
    noindex: bool
    nofollow: bool
    noarchive: bool
    nosnippet: bool
    noimageindex: bool
    none_directive: bool


@dataclass
class CanonicalResult:
    present: bool
    canonical_url: Optional[str]
    is_self_referencing: bool
    source: str   # "http-header" | "html-link" | "none"


@dataclass
class CheckResult:
    url: str
    robots_txt_url: str
    robots_txt_fetched: bool
    robots_txt_status: Optional[int]
    page_status: Optional[int]
    page_fetch_error: Optional[str]
    bot_results: list
    meta_robots: MetaRobotsResult
    x_robots_tag: RobotsTagResult
    canonical: CanonicalResult


# ─── Fetch helper ─────────────────────────────────────────────────────────────

def fetch(url: str, ua: str = BROWSER_UA, timeout: int = 15):
    """Return (status, headers_dict, body_bytes, error_str). headers keys are lowercase."""
    try:
        req = urllib.request.Request(url, headers={"User-Agent": ua})
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            body = resp.read()
            hdrs = {k.lower(): v for k, v in resp.headers.items()}
            return resp.status, hdrs, body, None
    except urllib.error.HTTPError as e:
        try:
            hdrs = {k.lower(): v for k, v in e.headers.items()}
            body = e.read()
        except Exception:
            hdrs, body = {}, b""
        return e.code, hdrs, body, None
    except Exception as exc:
        return None, {}, b"", str(exc)


# ─── robots.txt parser ────────────────────────────────────────────────────────

def _parse_robots_for_agent(raw: str, path: str, user_agent: str):
    """
    Full robots.txt parser: handles specific-agent sections and wildcard (*).
    Specific-agent rules take priority over wildcard.
    Returns (allowed, disallow_paths, allow_paths, crawl_delay).
    """
    ua_lower = user_agent.lower()

    sections = []
    current = None

    for line in raw.splitlines():
        line = line.split("#")[0].strip()
        if not line:
            if current is not None:
                sections.append(current)
                current = None
            continue

        m_ua = re.match(r"(?i)^user-agent\s*:\s*(.+)", line)
        if m_ua:
            if current is None:
                current = {"agents": [], "rules": [], "crawl_delay": None}
            elif current.get("rules"):
                sections.append(current)
                current = {"agents": [], "rules": [], "crawl_delay": None}
            current["agents"].append(m_ua.group(1).strip().lower())
            continue

        if current is None:
            continue

        m_dis = re.match(r"(?i)^disallow\s*:\s*(.*)", line)
        m_all = re.match(r"(?i)^allow\s*:\s*(.*)", line)
        m_cd  = re.match(r"(?i)^crawl-delay\s*:\s*(.*)", line)
        if m_dis:
            current["rules"].append(("disallow", m_dis.group(1).strip()))
        elif m_all:
            current["rules"].append(("allow", m_all.group(1).strip()))
        elif m_cd:
            try:
                current["crawl_delay"] = float(m_cd.group(1).strip())
            except ValueError:
                pass

    if current is not None:
        sections.append(current)

    specific = next((s for s in sections if ua_lower in s["agents"]), None)
    wildcard = next((s for s in sections if "*" in s["agents"]), None)
    sec = specific or wildcard

    if sec is None:
        return True, [], [], None

    def path_matches(pattern: str, req: str) -> bool:
        if not pattern:
            return False
        escaped = re.escape(pattern).replace(r"\*", ".*").replace(r"\$", "$")
        if not escaped.endswith("$"):
            escaped += ".*"
        try:
            return bool(re.match(escaped, req))
        except re.error:
            return req.startswith(pattern)

    matched = [(t, p) for t, p in sec["rules"] if path_matches(p, path)]

    decision = True
    if matched:
        matched.sort(key=lambda x: len(x[1]), reverse=True)
        top_len = len(matched[0][1])
        top = [r for r in matched if len(r[1]) == top_len]
        decision = any(t == "allow" for t, _ in top)

    disallow_paths = [p or "/" for t, p in sec["rules"] if t == "disallow" and path_matches(p, path)]
    allow_paths    = [p       for t, p in sec["rules"] if t == "allow"    and path_matches(p, path)]

    return decision, disallow_paths, allow_paths, sec.get("crawl_delay")


# ─── HTML-level checks ────────────────────────────────────────────────────────

def _parse_directives(raw: str) -> dict:
    low = raw.lower()
    return {
        "noindex":      "noindex"      in low,
        "nofollow":     "nofollow"     in low,
        "noarchive":    "noarchive"    in low,
        "nosnippet":    "nosnippet"    in low,
        "noimageindex": "noimageindex" in low,
        "none":         bool(re.search(r'\bnone\b', low)),
    }


def check_meta_robots(html: str) -> MetaRobotsResult:
    """Parse <meta name="robots" content="..."> from HTML."""
    patterns = [
        r'<meta\s[^>]*name=["\']robots["\'][^>]*content=["\']([^"\']+)["\']',
        r'<meta\s[^>]*content=["\']([^"\']+)["\'][^>]*name=["\']robots["\']',
    ]
    raw_value = None
    for pat in patterns:
        m = re.search(pat, html, re.I | re.S)
        if m:
            raw_value = m.group(1).strip()
            break

    if not raw_value:
        return MetaRobotsResult(False, None, False, False, False, False, False, False)

    d = _parse_directives(raw_value)
    return MetaRobotsResult(
        present=True, raw_value=raw_value,
        noindex=d["noindex"], nofollow=d["nofollow"],
        noarchive=d["noarchive"], nosnippet=d["nosnippet"],
        noimageindex=d["noimageindex"], none_directive=d["none"],
    )


def check_x_robots_tag(headers: dict) -> RobotsTagResult:
    raw = headers.get("x-robots-tag", "")
    if not raw:
        return RobotsTagResult(False, None, False, False, False, False, False, False)
    d = _parse_directives(raw)
    return RobotsTagResult(
        present=True, raw_value=raw,
        noindex=d["noindex"], nofollow=d["nofollow"],
        noarchive=d["noarchive"], nosnippet=d["nosnippet"],
        noimageindex=d["noimageindex"], none_directive=d["none"],
    )


def check_canonical(url: str, headers: dict, html: str) -> CanonicalResult:
    canon = None
    source = "none"

    # 1. HTTP Link header
    link_hdr = headers.get("link", "")
    if link_hdr:
        m = re.search(r'<([^>]+)>\s*;\s*rel=["\']?canonical["\']?', link_hdr, re.I)
        if m:
            canon  = m.group(1).strip()
            source = "http-header"

    # 2. HTML <link rel="canonical">
    if not canon and html:
        pats = [
            r'<link\s[^>]*\brel=["\']canonical["\'][^>]*\bhref=["\']([^"\']+)["\']',
            r'<link\s[^>]*\bhref=["\']([^"\']+)["\'][^>]*\brel=["\']canonical["\']',
            r'<link\s[^>]*\brel=["\']canonical["\'][^>]*\bhref=([^\s>/"\']+)',
        ]
        for pat in pats:
            m = re.search(pat, html, re.I | re.S)
            if m:
                canon  = m.group(1).strip().strip("\"'")
                source = "html-link"
                break

    if not canon:
        return CanonicalResult(False, None, False, "none")

    canon_abs = urllib.parse.urljoin(url, canon)

    def norm(u):
        p = urllib.parse.urlparse(u)
        return p._replace(fragment="").geturl().rstrip("/")

    is_self = norm(canon_abs) == norm(url)
    return CanonicalResult(True, canon_abs, is_self, source)


# ─── Main checker ─────────────────────────────────────────────────────────────

def check_url(url: str) -> CheckResult:
    parsed = urllib.parse.urlparse(url)
    if not parsed.scheme:
        url    = "https://" + url
        parsed = urllib.parse.urlparse(url)

    robots_url = f"{parsed.scheme}://{parsed.netloc}/robots.txt"
    path       = parsed.path or "/"
    if parsed.query:
        path += "?" + parsed.query

    # Fetch robots.txt with a neutral UA
    robots_status, _, robots_body, _ = fetch(robots_url, ua="RobotsChecker/1.0")
    robots_fetched = robots_status == 200
    robots_raw     = robots_body.decode("utf-8", errors="replace") if robots_fetched else ""

    # Fetch target page with a browser UA so sites serve real HTML
    page_status, page_headers, page_body, page_err = fetch(url)
    html = page_body.decode("utf-8", errors="replace") if page_body else ""

    # Per-bot robots.txt check
    bot_results = []
    for name, info in BOTS.items():
        if robots_raw:
            allowed, disallows, allows, delay = _parse_robots_for_agent(
                robots_raw, path, info["user_agent"]
            )
        else:
            allowed, disallows, allows, delay = True, [], [], None

        bot_results.append(BotResult(
            name=name, user_agent=info["user_agent"],
            category=info["category"], description=info["description"],
            allowed=allowed, disallow_paths=disallows,
            allow_paths=allows, crawl_delay=delay,
        ))

    meta_robots = check_meta_robots(html)
    x_robots    = check_x_robots_tag(page_headers)
    canonical   = check_canonical(url, page_headers, html)

    return CheckResult(
        url=url, robots_txt_url=robots_url,
        robots_txt_fetched=robots_fetched, robots_txt_status=robots_status,
        page_status=page_status, page_fetch_error=page_err,
        bot_results=bot_results,
        meta_robots=meta_robots, x_robots_tag=x_robots, canonical=canonical,
    )


# ─── Pretty printer ───────────────────────────────────────────────────────────

RESET  = "\033[0m"
BOLD   = "\033[1m"
GREEN  = "\033[92m"
RED    = "\033[91m"
YELLOW = "\033[93m"
CYAN   = "\033[96m"
DIM    = "\033[2m"


def _ok(allowed: bool) -> str:
    return f"{GREEN}✔ ALLOWED{RESET}" if allowed else f"{RED}✘ BLOCKED{RESET}"


def _directives(obj) -> str:
    labels = []
    if getattr(obj, "none_directive", False): labels.append("none")
    if getattr(obj, "noindex",        False): labels.append("noindex")
    if getattr(obj, "nofollow",       False): labels.append("nofollow")
    if getattr(obj, "noarchive",      False): labels.append("noarchive")
    if getattr(obj, "nosnippet",      False): labels.append("nosnippet")
    if getattr(obj, "noimageindex",   False): labels.append("noimageindex")
    return ", ".join(labels) if labels else "—"


def print_result(r: CheckResult):
    W = 64
    print()
    print(f"{BOLD}{'═' * W}{RESET}")
    print(f"{BOLD}  Robots Exclusion Check{RESET}")
    print(f"  {CYAN}{r.url}{RESET}")
    print(f"{'═' * W}{RESET}")

    # robots.txt
    rs = (f"{GREEN}Fetched  HTTP {r.robots_txt_status}{RESET}"
          if r.robots_txt_fetched
          else f"{RED}Not found  HTTP {r.robots_txt_status}{RESET}")
    print(f"\n{BOLD}── Robots.txt{RESET}")
    print(f"   {r.robots_txt_url}")
    print(f"   Status : {rs}")
    if r.page_fetch_error:
        print(f"   Page   : {RED}fetch error — {r.page_fetch_error}{RESET}")
    elif r.page_status:
        print(f"   Page   : HTTP {r.page_status}")

    # Bot results
    categories: dict = {}
    for br in r.bot_results:
        categories.setdefault(br.category, []).append(br)

    for cat, bots in categories.items():
        blocked = sum(1 for b in bots if not b.allowed)
        colour  = RED if blocked else GREEN
        print(f"\n{BOLD}── {cat}{RESET}  {colour}{blocked}/{len(bots)} blocked{RESET}")
        for br in bots:
            paths = ""
            if not br.allowed and br.disallow_paths:
                paths = f"  {DIM}disallow: {', '.join(br.disallow_paths[:3])}{RESET}"
            delay = (f"  {DIM}crawl-delay: {br.crawl_delay}s{RESET}"
                     if br.crawl_delay else "")
            print(f"   {_ok(br.allowed)}  {BOLD}{br.name}{RESET} "
                  f"{DIM}({br.description}){RESET}{paths}{delay}")

    # Meta Robots
    mr = r.meta_robots
    print(f"\n{BOLD}── Meta Robots{RESET}")
    if mr.present:
        colour = RED if (mr.noindex or mr.none_directive) else YELLOW
        print(f"   {colour}PRESENT{RESET}  <meta name=\"robots\" content=\"{mr.raw_value}\">")
        print(f"   Directives : {_directives(mr)}")
        if mr.noindex or mr.none_directive:
            print(f"   {RED}⚠  noindex — search engines must not index this page{RESET}")
        if mr.nofollow:
            print(f"   {YELLOW}⚠  nofollow — links on this page should not be followed{RESET}")
    else:
        print(f"   {DIM}Not present{RESET}")

    # X-Robots-Tag
    xr = r.x_robots_tag
    print(f"\n{BOLD}── X-Robots-Tag{RESET}")
    if xr.present:
        colour = RED if (xr.noindex or xr.none_directive) else YELLOW
        print(f"   {colour}PRESENT{RESET}  {xr.raw_value}")
        print(f"   Directives : {_directives(xr)}")
    else:
        print(f"   {DIM}Not present{RESET}")

    # Canonical
    cn = r.canonical
    print(f"\n{BOLD}── Canonical{RESET}")
    if cn.present:
        self_lbl = (f"{GREEN}self-referencing ✔{RESET}"
                    if cn.is_self_referencing
                    else f"{YELLOW}points elsewhere ⚠{RESET}")
        print(f"   Source : {cn.source}")
        print(f"   URL    : {CYAN}{cn.canonical_url}{RESET}")
        print(f"   Status : {self_lbl}")
    else:
        print(f"   {DIM}Not present{RESET}")

    # Summary
    blocked_bots = [b for b in r.bot_results if not b.allowed]
    total        = len(r.bot_results)
    indexable    = not (mr.noindex or mr.none_directive or xr.noindex or xr.none_directive)

    print(f"\n{BOLD}── Summary{RESET}")
    bcolour = RED if blocked_bots else GREEN
    print(f"   Bots blocked  : {bcolour}{len(blocked_bots)}/{total}{RESET}")
    icolour = GREEN if indexable else RED
    print(f"   Indexable     : {icolour}{'Yes' if indexable else 'No  (noindex is set)'}{RESET}")
    if cn.present and not cn.is_self_referencing:
        print(f"   Canonical     : {YELLOW}Non-self → {cn.canonical_url}{RESET}")
    print(f"\n{'═' * 64}\n")


# ─── Entry point ──────────────────────────────────────────────────────────────

def main():
    urls = sys.argv[1:]
    if not urls:
        print("Usage: python robots_checker.py <url> [url2 ...]")
        print("Example: python robots_checker.py https://www.lissubito.com/author/xakeso/")
        sys.exit(1)

    for url in urls:
        print(f"\nChecking: {url} …")
        result = check_url(url)
        print_result(result)


if __name__ == "__main__":
    main()
