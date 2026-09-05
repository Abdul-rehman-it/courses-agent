import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/site";
import { Mail, Phone } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-paper py-16 sm:py-20"
      aria-labelledby="contact-heading"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-teal">
              Contact
            </p>
            <h2
              id="contact-heading"
              className="mt-3 font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold tracking-[-0.04em] text-ink"
            >
              Ask about a course.
            </h2>
            <p className="mt-4 max-w-sm text-muted">
              Dummy contact details for now — send a message and it will open an
              email to this inbox.
            </p>
            <div className="mt-8 grid gap-3">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex cursor-pointer items-center gap-3 rounded-[14px] border border-line bg-paper px-4 py-3 text-ink hover:border-line-strong"
              >
                <Mail size={18} strokeWidth={1.75} />
                {site.email}
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex cursor-pointer items-center gap-3 rounded-[14px] border border-line bg-paper px-4 py-3 text-ink hover:border-line-strong"
              >
                <Phone size={18} strokeWidth={1.75} />
                {site.phone}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-[22px] border border-line bg-paper p-5 sm:p-7">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
