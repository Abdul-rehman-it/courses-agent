"use client";

import { cn } from "@/lib/cn";
import { motion, useReducedMotion } from "motion/react";

const chips = [
  { label: "Graphic Design", className: "-left-3 top-5 sm:-left-6" },
  { label: "Web Development", className: "-right-2 top-12 sm:-right-5" },
  { label: "UI/UX", className: "bottom-5 -left-3 sm:-left-7" },
  { label: "SEO", className: "bottom-6 -right-2 sm:-right-4" },
];

export function HeroVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      {chips.map((chip, index) => (
        <motion.div
          key={chip.label}
          className={cn(
            "absolute hidden rounded-full border border-cream/12 bg-dark-2/85 px-3 py-1.5 text-[0.68rem] text-cream/80 shadow-lg backdrop-blur-md sm:block",
            chip.className,
            index % 2 === 0 ? "float-slow" : "float-slower",
          )}
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + index * 0.08, duration: 0.45 }}
        >
          {chip.label}
        </motion.div>
      ))}
    </div>
  );
}
