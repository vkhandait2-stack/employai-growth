import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

interface Props {
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function CTASection({
  eyebrow = "Get started",
  title = "Hire your first AI Employee in days, not months.",
  description = "Talk to an automation strategist. We'll map your highest-leverage workflow and show you exactly how an AI Employee will run it 24/7.",
}: Props) {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <div
        className="pointer-events-none absolute inset-0 -z-10 mesh-glow animate-gradient-drift"
        aria-hidden
      />
      <div className="container-page relative">
        <div className="relative overflow-hidden rounded-[32px] border border-border bg-foreground px-8 py-20 text-center sm:px-16 sm:py-28">
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            aria-hidden
            style={{
              background:
                "radial-gradient(60% 80% at 50% 0%, color-mix(in oklab, var(--primary) 65%, transparent) 0%, transparent 70%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            aria-hidden
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative">
            <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/70">
              {eyebrow}
            </p>
            <h2 className="mx-auto mt-7 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
              {title}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
              {description}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href="https://calendly.com/vaishk1212/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-white hover:shadow-[0_20px_50px_-10px_rgba(255,255,255,0.4)]"
              >
                Book a demo
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <Link
                to="/pricing"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/10"
              >
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
