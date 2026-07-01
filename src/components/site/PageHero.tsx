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

const CAL = "https://calendly.com/vaishk1212/30min";

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta = { to: CAL, label: "Start Free Trial" },
  secondaryCta = { to: "/contact", label: "Talk to sales" },
}: Props) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 hero-glow" aria-hidden />
      <div className="pointer-events-none absolute inset-0 -z-10 grid-overlay opacity-40" aria-hidden />
      <div className="container-page relative pb-20 pt-20 sm:pb-28 sm:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow mx-auto">{eyebrow}</p>
          <h1 className="mt-7 font-display text-[38px] font-bold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-mist sm:text-xl">
            {description}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {primaryCta.to.startsWith("http") ? (
              <a href={primaryCta.to} target="_blank" rel="noopener noreferrer" className="btn-primary group">
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
              <a href={secondaryCta.to} target="_blank" rel="noopener noreferrer" className="btn-outline-gold">
                {secondaryCta.label}
              </a>
            ) : (
              <Link to={secondaryCta.to} className="btn-outline-gold">
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
