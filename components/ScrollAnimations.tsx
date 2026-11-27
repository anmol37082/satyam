"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const cardSelector = [
  "article",
  ".service-card",
  ".coverage-places > span",
  ".preview-grid > a",
  ".gallery-grid > button",
  ".contact-cards > a",
  ".contact-cards > div",
  ".footer-grid > div",
  ".footer-contact-item",
].join(",");

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const roots = [document.querySelector("main"), document.querySelector("footer")].filter(
      (root): root is HTMLElement => root instanceof HTMLElement,
    );
    const cards = roots.flatMap((root) => Array.from(root.querySelectorAll<HTMLElement>(cardSelector)));
    const cardSet = new Set(cards);
    const text = roots.flatMap((root) =>
      Array.from(root.querySelectorAll<HTMLElement>("h1, h2, h3, p, .eyebrow, .section-heading > a")),
    );
    const elements = [
      ...text.filter((element) => !element.closest(cardSelector) && !element.closest(".reveal-stagger")),
      ...cards.filter((element) => !element.closest(".reveal-stagger")),
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("scroll-is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    elements.forEach((element) => {
      const isCard = cardSet.has(element);
      element.classList.add(isCard ? "scroll-reveal-card" : "scroll-reveal-text");
      if (isCard && element.parentElement) {
        const siblingIndex = Array.from(element.parentElement.children).indexOf(element);
        element.style.setProperty("--scroll-stagger", `${(siblingIndex % 4) * 110}ms`);
      }
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
