import { ContactForm } from "@/components/contact/ContactForm";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { courses, getCourse, type Course } from "@/lib/content";
import { site, whatsappHref } from "@/lib/site";
import { Check, ChevronRight, Clock, Phone } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return { title: "Course not found" };

  return {
    title: `${course.title} Course`,
    description: `${course.short} ${course.priceLabel}. ${course.duration}.`,
    alternates: { canonical: `/courses/${course.id}` },
  };
}

function CourseJsonLd({ course }: { course: Course }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `${course.title} Course`,
    description: course.description,
    provider: {
      "@type": "EducationalOrganization",
      name: site.name,
      email: site.email,
    },
    offers: {
      "@type": "Offer",
      price: course.price,
      priceCurrency: "PKR",
      url: `${site.url}/courses/${course.id}`,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default async function CoursePage({ params }: PageProps) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const others = courses.filter((item) => item.id !== course.id);

  return (
    <main id="main" className="bg-paper pt-24 pb-16 sm:pt-28">
      <CourseJsonLd course={course} />
      <Container>
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-muted">
            <li>
              <Link href="/" className="cursor-pointer hover:text-ink">
                Home
              </Link>
            </li>
            <li aria-hidden>
              <ChevronRight size={14} />
            </li>
            <li>
              <Link href="/#courses" className="cursor-pointer hover:text-ink">
                Courses
              </Link>
            </li>
            <li aria-hidden>
              <ChevronRight size={14} />
            </li>
            <li className="text-ink" aria-current="page">
              {course.title}
            </li>
          </ol>
        </nav>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)] lg:items-start">
          <div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-[22px] bg-paper-deep">
              <Image
                src={course.image}
                alt={course.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>

            <Badge className="mt-8">{course.category}</Badge>
            <h1 className="mt-4 font-display text-[clamp(2rem,4vw,3.2rem)] font-semibold tracking-[-0.04em] text-ink">
              {course.title}
            </h1>
            <p className="mt-4 max-w-[40rem] text-[1.05rem] leading-7 text-muted">
              {course.description}
            </p>

            <h2 className="mt-10 font-display text-xl font-semibold tracking-[-0.03em] text-ink">
              What you will learn
            </h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {course.topics.map((topic) => (
                <li
                  key={topic}
                  className="rounded-[14px] border border-line bg-surface px-4 py-3 text-sm text-ink"
                >
                  {topic}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-display text-xl font-semibold tracking-[-0.03em] text-ink">
              Benefits
            </h2>
            <ul className="mt-4 space-y-3">
              {course.benefits.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink">
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-soft text-teal">
                    <Check size={12} strokeWidth={2.4} aria-hidden />
                  </span>
                  <span className="leading-6">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:sticky lg:top-28">
            <div className="rounded-[22px] border border-line bg-surface p-6 shadow-[var(--shadow-card)]">
              <p className="text-[0.7rem] uppercase tracking-[0.16em] text-muted-2">
                Pricing
              </p>
              <p className="mt-3 font-display text-3xl tracking-[-0.04em] text-ink">
                {course.priceLabel}
              </p>
              <p className="mt-1 text-sm text-muted">Dummy price for now.</p>
              <div className="mt-5 grid gap-2 text-sm text-ink-soft">
                <p className="flex items-center gap-2">
                  <Clock size={16} strokeWidth={1.75} />
                  {course.duration} · {course.level}
                </p>
              </div>
              <Button
                href={whatsappHref(
                  `Hi, I want to enquire about the ${course.title} course.`,
                )}
                className="mt-6 w-full"
              >
                Enquire now
              </Button>
              <a
                href={whatsappHref(
                  `Hi, I want to enquire about the ${course.title} course.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-[12px] border border-line py-2.5 text-sm text-ink hover:bg-paper"
              >
                <Phone size={16} strokeWidth={1.75} />
                {site.phone}
              </a>
            </div>
          </aside>
        </div>

        <section
          id="enroll"
          className="mt-14 scroll-mt-28 rounded-[24px] border border-line bg-surface p-5 sm:p-8"
          aria-labelledby="enroll-heading"
        >
          <h2
            id="enroll-heading"
            className="font-display text-2xl font-semibold tracking-[-0.03em] text-ink"
          >
            Get in touch about {course.title}
          </h2>
          <p className="mt-2 max-w-xl text-muted">
            Send a message and WhatsApp will open.
          </p>
          <div className="mt-6 max-w-xl">
            <ContactForm defaultCourse={course.id} />
          </div>
        </section>

        <section className="mt-14" aria-labelledby="other-heading">
          <h2
            id="other-heading"
            className="font-display text-xl font-semibold tracking-[-0.03em] text-ink"
          >
            Other courses
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {others.map((item) => (
              <Link
                key={item.id}
                href={`/courses/${item.id}`}
                className="cursor-pointer rounded-[16px] border border-line bg-surface p-4 hover:border-line-strong"
              >
                <p className="text-sm text-teal">{item.priceLabel}</p>
                <p className="mt-1 font-display text-lg tracking-[-0.03em] text-ink">
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
