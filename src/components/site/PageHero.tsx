import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

interface Props {
  eyebrow: string;
  title: ReactNode;
  description: string;
  primaryCta?: { to: string; label: string };
  secondaryCta?: { to: string; label: string };
}

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta = { to: "/contact", label: "Book Free Demo" },
  secondaryCta = { to: "/contact", label: "Talk To Our AI" },
}: Props) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 hero-glow" aria-hidden />
      <div className="container-page relative pb-20 pt-20 sm:pb-28 sm:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mx-auto">{eyebrow}</p>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-gradient sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
            {description}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to={primaryCta.to}
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
            >
              {primaryCta.label}
            </Link>
            <Link
              to={secondaryCta.to}
              className="inline-flex h-12 items-center justify-center rounded-full border border-border-strong bg-surface px-7 text-sm font-semibold text-foreground transition hover:bg-surface-elevated"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
