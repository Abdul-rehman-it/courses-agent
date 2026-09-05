import { cn } from "@/lib/cn";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const variants = {
  primary:
    "bg-teal text-cream shadow-[0_1px_0_rgba(255,255,255,0.18)_inset] hover:bg-teal-bright hover:-translate-y-px",
  secondary:
    "bg-transparent text-ink border border-line-strong hover:border-ink/30 hover:bg-surface",
  ghost: "bg-transparent text-ink hover:bg-ink/5",
  "on-dark":
    "bg-cream text-ink hover:bg-white hover:-translate-y-px shadow-[0_1px_0_rgba(255,255,255,0.4)_inset]",
  "on-dark-ghost":
    "bg-transparent text-cream border border-cream/18 hover:border-cream/40 hover:bg-cream/5",
} as const;

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-12 px-6 text-[0.975rem]",
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

type Common = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
};

type ButtonAsButton = Common &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = Common & {
  href: string;
  type?: never;
  disabled?: never;
  onClick?: () => void;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-[12px] font-medium tracking-[-0.01em] transition-[transform,background-color,border-color,box-shadow,color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] active:translate-y-0 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50";

export function Button(props: ButtonProps) {
  const { children, className, variant = "primary", size = "md" } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes} onClick={props.onClick}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...rest } = props as ButtonAsButton;
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
