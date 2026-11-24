"use client";
import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { gallery } from "@/lib/data";
const labels = [
  "Facility management",
  "Service portfolio",
  "Security & housekeeping",
  "Patient care",
  "Housekeeping training",
  "Patient care services",
  "Team & operations",
  "Facility support",
  "Gardening & landscaping",
  "Single-disc floor cleaning",
  "Team training",
  "Glass cleaning",
  "Security services",
  "Housekeeping services",
  "Uniforms & manpower",
  "Complete solutions",
];
export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <>
      <section className="page-hero page-hero-photo">
        <Image
          src="/images/about.webp"
          alt="Facility services in action"
          fill
          priority
          sizes="100vw"
        />
        <div className="page-hero-shade" />
        <div className="container page-hero-content">
          <div className="eyebrow light">
            <span /> OUR GALLERY
          </div>
          <h1>
            Our work.
            <br />
            <em>Our service story.</em>
          </h1>
          <p>
            Explore the original SATYA brochures and service visuals covering
            security, housekeeping, patient care, gardening, glass cleaning,
            floor care and manpower — the complete facility services story
            presented in one visual gallery.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="gallery-intro">
            <div>
              <div className="eyebrow">
                <span /> VISUAL PORTFOLIO
              </div>
              <h2>
                16 visuals. One
                <br />
                <em>complete service story.</em>
              </h2>
            </div>
            <p>
              These are the original promotional materials provided by SATYA,
              presented in a clean gallery layout.
            </p>
          </div>
          <div className="gallery-grid">
            {gallery.map((src, i) => (
              <button
                className={`gallery-item gallery-item-${i % 5}`}
                key={src}
                onClick={() => setActive(i)}
              >
                <Image
                  src={src}
                  alt={`SATYA ${labels[i]} brochure`}
                  fill
                  sizes="(max-width:700px) 50vw,25vw"
                />
              </button>
            ))}
          </div>
          <p className="gallery-caption">
            Original SATYA Facility Services brochure images. Select any image
            to view it larger.
          </p>
        </div>
      </section>
      {active !== null && (
        <div className="lightbox" onClick={() => setActive(null)}>
          <button className="lightbox-close" aria-label="Close image">
            <X />
          </button>
          <button
            className="lightbox-prev"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              setActive((active + 15) % 16);
            }}
          >
            <ChevronLeft />
          </button>
          <div className="lightbox-image" onClick={(e) => e.stopPropagation()}>
            <Image
              src={gallery[active]}
              alt={labels[active]}
              fill
              sizes="90vw"
              style={{ objectFit: "contain" }}
            />
            <span>
              {String(active + 1).padStart(2, "0")} / 16 · {labels[active]}
            </span>
          </div>
          <button
            className="lightbox-next"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              setActive((active + 1) % 16);
            }}
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </>
  );
}
