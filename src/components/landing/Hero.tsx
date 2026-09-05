"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { HeroVisual } from "./HeroVisual";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const item = reduce
    ? undefined
    : {
        hidden: { opacity: 0, y: 16 },
        show: (delay: number) => ({
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, delay, ease },
        }),
      };

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-dark bg-grid-dark bg-grain text-cream"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="orb -left-24 top-10 h-72 w-72 bg-teal/25" />
        <div className="orb right-[-6rem] top-32 h-80 w-80 bg-copper/18" />
      </div>

      <Container className="relative pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36">
        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <motion.p
              custom={0.05}
              initial={reduce ? false : "hidden"}
              animate="show"
              variants={item}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-cream/12 bg-white/4 px-3 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-cream/70"
            >
              <span className="size-1.5 rounded-full bg-teal-bright pulse-dot" />
              Digital skills studio
            </motion.p>

            <motion.h1
              custom={0.14}
              initial={reduce ? false : "hidden"}
              animate="show"
              variants={item}
              className="font-display max-w-[12ch] text-[clamp(2.35rem,6vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.048em]"
            >
              Learn skills you can actually use.
            </motion.h1>

            <motion.p
              custom={0.26}
              initial={reduce ? false : "hidden"}
              animate="show"
              variants={item}
              className="mt-5 max-w-[32rem] text-[1.05rem] leading-7 text-cream/64"
            >
              Graphic designing, web development, UI/UX, and SEO — practical
              courses with clear pricing. Open a course, then get in touch.
            </motion.p>

            <motion.div
              custom={0.38}
              initial={reduce ? false : "hidden"}
              animate="show"
              variants={item}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button href="/#courses" variant="on-dark" size="lg">
                View courses
                <ArrowRight size={16} strokeWidth={1.75} />
              </Button>
              <Button href="/#contact" variant="on-dark-ghost" size="lg">
                Contact
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.98, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: reduce ? 0 : 0.18, ease }}
            className="relative mx-auto w-full max-w-[460px] px-4 sm:px-6 lg:ml-auto"
          >
            <div className="relative overflow-hidden rounded-[20px]">
              <div className="relative h-[240px] sm:h-[280px] lg:h-[300px]">
                <Image
                  src="/images/hero-learning.jpg"
                  alt="Students learning digital skills together in a studio"
                  fill
                  priority
                  sizes="420px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-dark/10 to-transparent" />
              </div>
            </div>
            <HeroVisual />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
