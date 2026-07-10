"use client";
import Image, { ImageProps } from "next/image";
import { useState, useEffect, useRef } from "react";

interface OptimizedImageProps extends Omit<ImageProps, "alt"> {
  alt: string;
  fallbackSrc?: string;
  blur?: boolean;
}

export default function OptimizedImage({
  alt,
  fallbackSrc,
  blur = true,
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [src, setSrc] = useState(props.src);
  const [isLoading, setIsLoading] = useState(!priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoading(false);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "50px" }
    );

    if (imgRef.current && !priority) {
      observer.observe(imgRef.current);
    } else if (priority) {
      setIsLoading(false);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleError = () => {
    setHasError(true);
    if (fallbackSrc) {
      setSrc(fallbackSrc);
    }
  };

  if (!isLoading && !hasError) {
    return (
      <Image
        ref={imgRef}
        alt={alt}
        {...props}
        src={src}
        onError={handleError}
        loading={priority ? "eager" : "lazy"}
        placeholder={blur ? "blur" : "empty"}
        blurDataURL={
          blur
            ? "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23f3f4f6' width='400' height='300'/%3E%3C/svg%3E"
            : undefined
        }
      />
    );
  }

  if (hasError && fallbackSrc) {
    return (
      <Image
        ref={imgRef}
        alt={alt}
        {...props}
        src={fallbackSrc}
        loading={priority ? "eager" : "lazy"}
      />
    );
  }

  // Loading skeleton
  return (
    <div
      style={{
        width: props.width,
        height: props.height,
        backgroundColor: "#f3f4f6",
        borderRadius: "0.5rem",
        animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      }}
    />
  );
}
