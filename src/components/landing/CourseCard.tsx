import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";
import type { Course } from "@/lib/content";
import { Code2, LayoutTemplate, PenTool, Search } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const icons: Record<Course["icon"], LucideIcon> = {
  pen: PenTool,
  code: Code2,
  layout: LayoutTemplate,
  search: Search,
};

const accents: Record<Course["accent"], string> = {
  copper: "bg-copper-soft text-copper group-hover:-translate-y-0.5",
  teal: "bg-teal-soft text-teal group-hover:-translate-y-0.5",
  ink: "bg-ink/8 text-ink group-hover:-translate-y-0.5",
  gold: "bg-gold-soft text-[#6d5420] group-hover:-translate-y-0.5",
};

type CourseCardProps = {
  course: Course;
};

export function CourseCard({ course }: CourseCardProps) {
  const Icon = icons[course.icon];

  return (
    <Card
      as="article"
      hover
      className="group relative flex h-full flex-col overflow-hidden p-0"
    >
      <Link
        href={`/courses/${course.id}`}
        className="flex h-full cursor-pointer flex-col"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-paper-deep">
          <Image
            src={course.image}
            alt={course.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
          <span
            className={cn(
              "absolute top-4 right-4 inline-flex size-11 items-center justify-center rounded-[12px] backdrop-blur-md transition-transform duration-300",
              accents[course.accent],
            )}
          >
            <Icon size={18} strokeWidth={1.75} aria-hidden />
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center justify-between gap-3">
            <Badge>{course.category}</Badge>
            <p className="text-sm font-medium text-teal">{course.priceLabel}</p>
          </div>
          <h3 className="mt-4 font-display text-[1.4rem] font-semibold tracking-[-0.035em] text-ink">
            {course.title}
          </h3>
          <p className="mt-2 min-h-[3.2rem] text-[0.95rem] leading-6 text-muted">
            {course.short}
          </p>
          <p className="mt-auto pt-5 text-sm font-medium text-ink">
            View details →
          </p>
        </div>
      </Link>
    </Card>
  );
}
