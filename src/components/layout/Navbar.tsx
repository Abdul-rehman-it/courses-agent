"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IconButton } from "@/components/ui/IconButton";
import { cn } from "@/lib/cn";
import { navLinks, site, whatsappHref } from "@/lib/site";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [overDarkHero, setOverDarkHero] = useState(onHome);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const darkBar = onHome && overDarkHero && !open;

  useEffect(() => {
    if (!onHome) {
      setOverDarkHero(false);
      return;
    }

    const hero = document.getElementById("top");
    if (!hero) {
      setOverDarkHero(true);
      return;
    }

    const update = () => {
      setOverDarkHero(hero.getBoundingClientRect().bottom > 80);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [onHome]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <Container className="pt-3 sm:pt-4">
        <div
          className={cn(
            "pointer-events-auto flex h-[58px] items-center justify-between rounded-[16px] border px-3 transition-[background-color,border-color,box-shadow,color,backdrop-filter] duration-300 sm:h-[62px] sm:px-4",
            darkBar
              ? "border-white/10 bg-dark/35 text-white backdrop-blur-md"
              : "border-line/80 bg-paper/95 text-ink shadow-[0_10px_40px_-24px_rgba(20,18,16,0.45)] backdrop-blur-xl",
          )}
        >
          <Link
            href="/"
            className={cn(
              "flex cursor-pointer items-center gap-2.5 rounded-[10px] px-1.5 py-1",
              darkBar ? "text-cream" : "text-ink",
            )}
          >
            <span
              className="flex size-7 items-center justify-center rounded-[8px] bg-teal text-[0.7rem] font-semibold tracking-tight text-cream"
              aria-hidden
            >
              L
            </span>
            <span className="font-display text-[1.05rem] font-semibold tracking-[-0.04em]">
              {site.name}
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) => {
              const className = cn(
                "cursor-pointer rounded-[10px] px-3 py-2 text-sm transition-colors",
                darkBar
                  ? "text-cream hover:bg-white/6 hover:text-white"
                  : "text-ink-soft hover:bg-ink/5 hover:text-ink",
              );

              if (link.external) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <Link key={link.href} href={link.href} className={className}>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <Button
                href={whatsappHref()}
                size="sm"
                variant={darkBar ? "on-dark" : "primary"}
              >
                Contact
              </Button>
            </div>
            <IconButton
              label={open ? "Close menu" : "Open menu"}
              className={cn(
                "lg:hidden",
                darkBar
                  ? "text-white hover:bg-white/10"
                  : "text-ink hover:bg-ink/6",
              )}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? (
                <X size={20} strokeWidth={1.75} className="text-ink" />
              ) : (
                <Menu
                  size={20}
                  strokeWidth={1.75}
                  className={darkBar ? "text-white" : "text-ink"}
                />
              )}
            </IconButton>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            className="pointer-events-auto lg:hidden"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 1 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <Container className="pt-2">
              <nav
                aria-label="Mobile"
                className="rounded-[18px] border border-line bg-surface p-3 shadow-[var(--shadow-lift)]"
              >
                {navLinks.map((link) => {
                  const className =
                    "flex min-h-12 cursor-pointer items-center rounded-[12px] px-3 text-[1.02rem] text-ink hover:bg-paper";

                  if (link.external) {
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={className}
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </a>
                    );
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={className}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <div className="mt-2 border-t border-line pt-3">
                  <Button
                    href={whatsappHref()}
                    className="w-full"
                    onClick={() => setOpen(false)}
                  >
                    Contact
                  </Button>
                </div>
              </nav>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
