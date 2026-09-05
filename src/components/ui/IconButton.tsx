import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  children: ReactNode;
};

export function IconButton({
  label,
  children,
  className,
  type = "button",
  ...props
}: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      className={cn(
        "inline-flex size-11 cursor-pointer items-center justify-center rounded-[12px] border border-transparent text-current transition-colors duration-200 hover:bg-ink/6",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
