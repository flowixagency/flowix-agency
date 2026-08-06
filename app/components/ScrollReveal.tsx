"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    const observeAll = () => {
      document.querySelectorAll(".sr:not(.visible)").forEach((el) => observer.observe(el));
    };

    observeAll();
    const timer = setTimeout(observeAll, 300);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);
  return null;
}
