"use client";
import { useState, useEffect } from "react";

const slides = [
  { 
    src: "https://ldcompany.vn/wp-content/uploads/2024/07/3-1.png", 
    alt: "Giải pháp lọc nước tổng gia đình" 
  },
  { 
    src: "https://ldcompany.vn/wp-content/uploads/2024/07/5.png", 
    alt: "Hệ thống nước nóng trung tâm" 
  },
  { 
    src: "https://ldcompany.vn/wp-content/uploads/2024/07/2-5-scaled.jpg", 
    alt: "Giải pháp khí tươi và thông gió" 
  },
  { 
    src: "https://ldcompany.vn/wp-content/uploads/2024/07/4-2.png", 
    alt: "Hệ thống sưởi ấm dưới sàn" 
  },
  { 
    src: "https://ldcompany.vn/wp-content/uploads/2024/07/1-4.jpg", 
    alt: "Không gian sống hiện đại với Linh Dương Company" 
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto slide
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500); // 4.5 giây (có thể chỉnh thành 4000 hoặc 5000)

    return () => clearInterval(timer);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrent(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000); // Tạm dừng auto 8 giây sau khi click
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  };

  return (
    <div 
      className="relative w-full overflow-hidden"
      style={{ height: "560px" }}   // Giữ nguyên chiều cao như website gốc
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img 
            src={slide.src} 
            alt={slide.alt} 
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
          
          {/* Overlay tối nhẹ (tùy chọn - giúp chữ nổi nếu sau này thêm text) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
        </div>
      ))}

      {/* Dots navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current 
                ? "bg-white scale-125 shadow-md" 
                : "bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-11 h-11 rounded-full flex items-center justify-center transition-all z-20"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-11 h-11 rounded-full flex items-center justify-center transition-all z-20"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}