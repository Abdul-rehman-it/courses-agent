import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
  hover?: boolean;
};

export function Card({
  children,
  className,
  as: Tag = "div",
  hover = false,
}: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-[18px] border border-line bg-surface shadow-[var(--shadow-card)]",
        hover &&
          "transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-line-strong hover:shadow-[var(--shadow-lift)]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
