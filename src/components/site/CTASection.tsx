import { Link } from "@tanstack/react-router";

interface Props {
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function CTASection({
  eyebrow = "Get Started",
  title = "Ready To Build Your AI Workforce?",
  description = "Let's automate your business with intelligent AI Employees designed specifically for your industry.",
}: Props) {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface/60">
      <div
        className="pointer-events-none absolute inset-x-0 -top-32 h-64 hero-glow opacity-80"
        aria-hidden
      />
      <div className="container-page relative py-20 text-center sm:py-28">
        <p className="eyebrow mx-auto">{eyebrow}</p>
        <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl font-bold leading-tight text-gradient sm:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base text-mist sm:text-lg">{description}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
          >
            Book Free Demo
          </Link>
          <Link
            to="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border-strong bg-surface px-7 text-sm font-semibold text-foreground transition hover:bg-surface-elevated"
          >
            Request Proposal
          </Link>
          <Link
            to="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full px-5 text-sm font-semibold text-mist transition hover:text-foreground"
          >
            Talk To Our AI →
          </Link>
        </div>
      </div>
    </section>
  );
}
