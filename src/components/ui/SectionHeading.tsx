import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-[40rem]",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 text-[0.72rem] font-medium uppercase tracking-[0.18em]",
            tone === "dark" ? "text-gold" : "text-teal",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={cn(
          "font-display text-[clamp(1.75rem,3.4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.035em]",
          tone === "dark" ? "text-cream" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-[1.05rem] leading-7",
            tone === "dark" ? "text-cream/65" : "text-muted",
            align === "center" && "mx-auto max-w-[34rem]",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
