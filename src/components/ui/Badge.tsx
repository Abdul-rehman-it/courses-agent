import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  tone?: "default" | "teal" | "copper" | "gold" | "dark" | "cream";
};

const tones = {
  default: "bg-surface-2 text-ink-soft border-line",
  teal: "bg-teal-soft text-teal-ink border-teal/15",
  copper: "bg-copper-soft text-copper border-copper/15",
  gold: "bg-gold-soft text-[#6d5420] border-gold/25",
  dark: "bg-white/6 text-cream/80 border-white/10",
  cream: "bg-cream/10 text-cream border-cream/12",
};

export function Badge({
  children,
  className,
  tone = "default",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.7rem] font-medium uppercase tracking-[0.14em]",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
