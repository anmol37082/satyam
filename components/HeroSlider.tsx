"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    src: "/images/homehero1.jpeg",
    label: "SATYA facility services",
  },
  {
    src: "/images/homehero2.jpeg",
    label: "Professional facility management",
  },
  {
    src: "/images/homehero3.jpeg",
    label: "SATYA professional service team",
  },
];

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(
      () => setActiveSlide((current) => (current + 1) % slides.length),
      5000,
    );
    return () => window.clearInterval(timer);
  }, []);

  const moveSlide = (direction: number) =>
    setActiveSlide(
      (current) => (current + direction + slides.length) % slides.length,
    );

  return (
    <section
      className="hero hero-home"
      aria-label="SATYA services highlights"
      aria-roledescription="carousel"
      onTouchStart={(event) => {
        touchStartX.current = event.touches.item(0)?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        const start = touchStartX.current;
        const end = event.changedTouches.item(0)?.clientX;
        touchStartX.current = null;
        if (start !== null && end !== undefined && Math.abs(start - end) > 48)
          moveSlide(start > end ? 1 : -1);
      }}
    >
      <div className="hero-photo" aria-hidden="true">
        {slides.map((slide, index) => (
          <div
            className={`hero-slide${index === activeSlide ? " is-active" : ""}`}
            aria-hidden={index !== activeSlide}
            key={slide.src}
          >
            <Image
              src={slide.src}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}
      </div>
      <div className="hero-shade" aria-hidden="true" />
      <div className="container hero-content">
        <h1>
          <em>One Partner for All</em>
          <br />
          Your Facility Needs.
        </h1>
        <p>
          From professional housekeeping, commercial and deep home cleaning to
          security, patient care and manpower services, we help keep your spaces
          clean, safe and well-managed.
        </p>
      </div>
      <div
        className="hero-slider-controls"
        role="group"
        aria-label="Hero slide controls"
      >
        <button
          className="hero-slider-arrow"
          type="button"
          aria-label="Previous slide"
          onClick={() => moveSlide(-1)}
        >
          <ArrowLeft size={16} />
        </button>
        <div className="hero-pagination">
          {slides.map((slide, index) => (
            <button
              className={`hero-pagination-dot${index === activeSlide ? " is-active" : ""}`}
              type="button"
              aria-label={`Show slide ${index + 1}: ${slide.label}`}
              aria-current={index === activeSlide ? "true" : undefined}
              onClick={() => setActiveSlide(index)}
              key={slide.src}
            />
          ))}
        </div>
        <button
          className="hero-slider-arrow"
          type="button"
          aria-label="Next slide"
          onClick={() => moveSlide(1)}
        >
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
