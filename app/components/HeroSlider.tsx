"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import Link from "next/link";

const slides = [
  {
    src: "/images/slider/slide-001.png",
    title: "GIẢI PHÁP XỬ LÝ NƯỚC TỔNG",
    desc: "Tiện nghi hiện đại – tiết kiệm năng lượng tối ưu",
    link: "/danh-muc-san-pham/he-thong-loc-nuoc-tong",
  },
  {
    src: "/images/slider/slide-002.png",
    title: "GIẢI PHÁP NƯỚC NÓNG TỔNG",
    desc: "An toàn - Tiết kiệm điện năng",
    link: "/danh-muc-san-pham/he-thong-nuoc-nong-trung-tam",
  },
  {
    src: "/images/slider/slide-003.png",
    title: "GIẢI PHÁP LỌC NƯỚC TỔNG",
    desc: "Công nghệ tiên tiến - Giải pháp lọc nước tổng toàn diện - Bảo vệ sức khỏe toàn diện cho gia đình",
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
    }, 5000); // 3 giây
    return () => clearInterval(timer);
  }, [isPaused, memoizedSlides.length]);

  const changeSlide = useCallback((next: number) => {
    setDirection(next > current ? 1 : -1);
    setCurrent(next);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 4000);
  }, [current]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%" }),
    center: { x: 0 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%" }),
  };

  return (
    <div
      className="relative w-full overflow-hidden bg-[#1a1a1a]"
      style={{ aspectRatio: "2007 / 784" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ x: { type: "tween", ease: "easeInOut", duration: 0.6 } }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, { offset, velocity }: PanInfo) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) changeSlide((current + 1) % memoizedSlides.length);
            else if (swipe > swipeConfidenceThreshold) changeSlide((current - 1 + memoizedSlides.length) % memoizedSlides.length);
          }}
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
        >
          <div
            className="absolute inset-0 bg-cover bg-center blur-lg opacity-60 scale-110"
            style={{ backgroundImage: `url(${slides[current].src})` }}
          />

          <img
            src={slides[current].src}
            alt={slides[current].title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div className="max-w-2xl text-white">
              {/* <h2 className="text-3xl md:text-5xl font-bold mb-4">{slides[current].title}</h2>
              <p className="text-lg md:text-xl text-gray-200 mb-6">{slides[current].desc}</p> */}
              <Link href={slides[current].link} className="inline-block bg-[#e74c3c] px-8 py-3 rounded font-semibold hover:bg-[#c0392b] transition-colors">
                TÌM HIỂU NGAY
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {memoizedSlides.map((_, i) => (
          <button key={i} onClick={() => changeSlide(i)} className={`h-1.5 rounded-full transition-all ${i === current ? "bg-white w-8" : "bg-white/40 w-3"}`} />
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={() => changeSlide((current - 1 + memoizedSlides.length) % memoizedSlides.length)}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-11 h-11 rounded-full z-20 items-center justify-center"
      >‹</button>

      {/* Next Button */}
      <button
        onClick={() => changeSlide((current + 1) % memoizedSlides.length)}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-11 h-11 rounded-full z-20 items-center justify-center"
      >›</button>
    </div>
  );
}