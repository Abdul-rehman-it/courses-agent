import { Container } from "@/components/ui/Container";
import { courses } from "@/lib/content";
import { site } from "@/lib/site";
import { Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="overflow-x-clip border-t border-dark-line bg-dark text-cream">
      <Container className="py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href="/" className="inline-flex cursor-pointer items-center gap-2.5">
              <span
                className="flex size-7 items-center justify-center rounded-[8px] bg-teal text-[0.7rem] font-semibold text-cream"
                aria-hidden
              >
                L
              </span>
              <span className="font-display text-lg font-semibold tracking-[-0.04em]">
                {site.name}
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-6 text-cream/58">
              Four practical digital skills courses. Clear pricing. Direct contact.
            </p>
          </div>
          <div>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-cream/40">
              Courses
            </p>
            <ul className="mt-4 space-y-2.5">
              {courses.map((course) => (
                <li key={course.id}>
                  <Link
                    href={`/courses/${course.id}`}
                    className="cursor-pointer text-sm text-cream/70 hover:text-cream"
                  >
                    {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-cream/40">
              Contact
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-flex max-w-full min-w-0 cursor-pointer items-center gap-2 text-sm text-cream/70 hover:text-cream"
            >
              <Mail size={15} strokeWidth={1.75} className="shrink-0" />
              <span className="min-w-0 break-all">{site.email}</span>
            </a>
            <p className="mt-2 text-sm text-cream/50">{site.phone}</p>
          </div>
        </div>
        <div className="mt-10 border-t border-cream/8 pt-5 text-xs text-cream/40">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
