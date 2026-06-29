import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

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
  primaryCta = { to: "https://calendly.com/vaishk1212/30min", label: "Book a demo" },
  secondaryCta = { to: "/contact", label: "Talk to sales" },
}: Props) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 hero-glow" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] opacity-50"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, oklch(0.22 0.04 260 / 0.06) 1px, transparent 0)",
          backgroundSize: "32px 32px",
          maskImage: "linear-gradient(to bottom, black 30%, transparent 100%)",
        }}
      />
      <div className="container-page relative pb-24 pt-24 sm:pb-32 sm:pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow mx-auto">{eyebrow}</p>
          <h1 className="mt-7 font-display text-[40px] font-semibold leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            {title}
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-mist sm:text-xl">
            {description}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {primaryCta.to.startsWith("http") ? (
              <a
                href={primaryCta.to}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                {primaryCta.label}
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ) : (
              <Link to={primaryCta.to} className="btn-primary group">
                {primaryCta.label}
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            )}
            {secondaryCta.to.startsWith("http") ? (
              <a
                href={secondaryCta.to}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass"
              >
                {secondaryCta.label}
              </a>
            ) : (
              <Link to={secondaryCta.to} className="btn-glass">
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
