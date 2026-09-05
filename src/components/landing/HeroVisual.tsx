"use client";

import { cn } from "@/lib/cn";
import { motion, useReducedMotion } from "motion/react";

const chips = [
  { label: "Graphic Design", className: "left-2 top-3 sm:left-3" },
  { label: "Web Development", className: "right-2 top-10 sm:right-3" },
  { label: "UI/UX", className: "bottom-[4.75rem] left-2 sm:left-3" },
  { label: "SEO", className: "bottom-16 right-2 sm:right-3" },
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

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.42, duration: 0.5 }}
        className="gradient-border absolute right-3 bottom-3 w-[min(calc(100%-1.5rem),220px)] overflow-hidden rounded-[14px] bg-dark-2/92 shadow-[0_16px_40px_-20px_rgba(0,0,0,0.75)] backdrop-blur-md"
      >
        <div className="flex items-center justify-between border-b border-cream/8 px-3 py-2">
          <p className="text-[0.7rem] text-cream/60">Lumina Studio</p>
          <p className="flex items-center gap-1.5 text-[0.62rem] uppercase tracking-[0.12em] text-teal-bright">
            <span className="size-1.5 rounded-full bg-teal-bright pulse-dot" />
            Learning
          </p>
        </div>
        <div className="p-3">
          <div className="flex items-center justify-between">
            <p className="font-display text-xs text-cream">Weekly progress</p>
            <p className="font-display text-base text-gold">68%</p>
          </div>
          <div
            className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-cream/8"
            role="progressbar"
            aria-valuenow={68}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Weekly learning progress"
          >
            <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-teal to-gold" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
