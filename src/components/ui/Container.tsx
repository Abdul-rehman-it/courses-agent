import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "nav";
  id?: string;
};

export function Container({
  children,
  className,
  as: Tag = "div",
  id,
}: ContainerProps) {
  return (
    <Tag
      id={id}
      className={cn("mx-auto w-full min-w-0 max-w-[1180px] px-5 sm:px-6 lg:px-8", className)}
    >
      {children}
    </Tag>
  );
}
