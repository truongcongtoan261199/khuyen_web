"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // Memoized slides to prevent unnecessary re-renders
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
      <div  className="relative w-full overflow-hidden h-[280px] md:h-[560px] lg:h-[750px]">
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
          className="absolute inset-0"
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
              quality={100}
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

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {memoizedSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => changeSlide(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === current
                ? "bg-white scale-125"
                : "bg-white/60 hover:bg-white"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* PREV */}
      <button
        onClick={() =>
          changeSlide((current - 1 + memoizedSlides.length) % memoizedSlides.length)
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-11 h-11 rounded-full z-20 transition-colors"
        aria-label="Previous slide"
      >
        ‹
      </button>

      {/* NEXT */}
      <button
        onClick={() => changeSlide((current + 1) % memoizedSlides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-11 h-11 rounded-full z-20 transition-colors"
        aria-label="Next slide"
      >
        ›
      </button>
    </div>
  );
}