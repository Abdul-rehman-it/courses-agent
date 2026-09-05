import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Check } from "lucide-react";
import Image from "next/image";

const points = [
  "Practical work from the first week — not theory dumps",
  "Beginner-friendly structure with a clear finish line",
  "Each course has pricing, duration, and a direct way to enquire",
  "Design, web, UI/UX, and SEO taught as skills you can use",
];

export function WhyLumina() {
  return (
    <section
      className="bg-surface py-16 sm:py-20"
      aria-labelledby="why-heading"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="relative overflow-hidden rounded-[22px]">
              <div className="relative aspect-[5/4] w-full min-h-[280px] sm:min-h-[320px] lg:min-h-[360px]">
                <Image
                  src="/images/mentor-session.jpg"
                  alt="A mentor guiding a student through digital skills practice"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-teal">
              Why Lumina
            </p>
            <h2
              id="why-heading"
              className="mt-3 max-w-[14ch] font-display text-[clamp(1.85rem,3.6vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.04em] text-ink"
            >
              A studio for people who want to learn by making.
            </h2>
            <p className="mt-4 max-w-[34rem] text-[1.05rem] leading-7 text-muted">
              Pick one course, see what’s included, then get in touch. No fake
              stats — just a clear path from skill to finished work.
            </p>
            <ul className="mt-8 space-y-3.5">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-ink">
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-soft text-teal">
                    <Check size={12} strokeWidth={2.4} aria-hidden />
                  </span>
                  <span className="leading-6">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
