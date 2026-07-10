"use client";
import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    src: "/images/slider/slide-11.png",
    title: "GIẢI PHÁP LỌC NƯỚC TỔNG",
    desc: "Nguồn nước sạch – bảo vệ sức khỏe toàn diện cho gia đình",
    link: "/danh-muc-san-pham/he-thong-loc-nuoc-tong",
  },
  {
    src: "/images/slider/slide-22.png",
    title: "HỆ THỐNG NƯỚC NÓNG TRUNG TÂM",
    desc: "Tiện nghi hiện đại – tiết kiệm năng lượng tối ưu",
    link: "/danh-muc-san-pham/he-thong-nuoc-nong-trung-tam",
  },
  {
    src: "/images/slider/slide-33.png",
    title: "HỆ THỐNG LỌC NƯỚC TỔNG CÔNG NGHỆ TỪ TRƯỜNG",
    desc: "Công nghệ tiên tiến – Giải pháp lọc nước toàn diện",
    link: "/danh-muc-san-pham/he-thong-loc-nuoc-tong",
  }
];

const swipeConfidenceThreshold = 10000;

function swipePower(offset: number, velocity: number) {
  return Math.abs(offset) * velocity;
}

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const memoizedSlides = useMemo(() => slides, []);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % memoizedSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, memoizedSlides.length]);

  const changeSlide = useCallback((next: number) => {
    setDirection(next > current ? 1 : -1);
    setCurrent(next);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  }, [current]);

  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);

  const handleDragEnd = useCallback(
    (_: unknown, { offset, velocity }: PanInfo) => {
      const swipe = swipePower(offset.x, velocity.x);
      if (swipe < -swipeConfidenceThreshold) {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % memoizedSlides.length);
      } else if (swipe > swipeConfidenceThreshold) {
        setDirection(-1);
        setCurrent((prev) => (prev - 1 + memoizedSlides.length) % memoizedSlides.length);
      }
      setIsPaused(true);
      setTimeout(() => setIsPaused(false), 8000);
    },
    [memoizedSlides.length]
  );

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
    }),
  };

  return (
    <div
      className="relative w-full overflow-hidden h-[280px] md:h-[560px] lg:h-[750px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* SLIDE */}
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.5}
          onDragEnd={handleDragEnd}
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
        >
          {/* IMAGE + PARALLAX ZOOM */}
          <motion.div
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "easeOut" }}
            className="w-full h-full relative"
          >
            <Image
              src={slides[current].src}
              alt={slides[current].title}
              fill
              priority={current === 0}
              sizes="100vw"
              className="object-cover object-center scale-[1.01]"
              quality={82}
            />
          </motion.div>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/40" />

          {/* TEXT */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
              className="max-w-2xl text-white"
            >
              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0 },
                }}
                className="text-3xl md:text-5xl font-bold mb-4"
              >
                {slides[current].title}
              </motion.h2>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
                className="text-lg md:text-xl text-gray-200 mb-6"
              >
                {slides[current].desc}
              </motion.p>

              <Link href={slides[current].link}>
                <motion.button
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#e74c3c] px-8 py-3 rounded font-semibold cursor-pointer hover:bg-[#c0392b] transition-colors"
                >
                  TÌM HIỂU NGAY
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* DOTS - Mobile: compact indicator, Desktop: dot row */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 md:gap-3">
        {memoizedSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => changeSlide(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-white w-6 md:w-8"
                : "bg-white/40 hover:bg-white/60 w-1.5 md:w-3"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* PREV - hidden on mobile */}
      <button
        onClick={() =>
          changeSlide((current - 1 + memoizedSlides.length) % memoizedSlides.length)
        }
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-11 h-11 rounded-full z-20 transition-colors items-center justify-center"
        aria-label="Previous slide"
      >
        ‹
      </button>

      {/* NEXT - hidden on mobile */}
      <button
        onClick={() => changeSlide((current + 1) % memoizedSlides.length)}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-11 h-11 rounded-full z-20 transition-colors items-center justify-center"
        aria-label="Next slide"
      >
        ›
      </button>
    </div>
  );
}
