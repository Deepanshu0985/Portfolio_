"use client";

import { useEffect, useState } from "react";

export function RotatingWords({ words, interval = 2400 }: { words: string[]; interval?: number }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className="relative inline-grid align-bottom">
      {/* The longest word reserves the space so the headline doesn't jump. */}
      <span className="invisible col-start-1 row-start-1" aria-hidden>
        {words.reduce((a, b) => (b.length > a.length ? b : a))}
      </span>
      {words.map((word, i) => (
        <span
          key={word}
          aria-hidden={i !== index}
          className={`gradient-text col-start-1 row-start-1 transition-all duration-700 ${
            i === index ? "translate-y-0 opacity-100 blur-0" : "translate-y-4 opacity-0 blur-sm"
          }`}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
