import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

interface Props {
  eyebrow?: string;
  title?: string;
  description?: string;
}

const CAL = "https://calendly.com/vaishk1212/30min";

export function CTASection({
  eyebrow = "Get started in 48 hours",
  title = "Your AI Employees are ready. Are you?",
  description = "Join 1,000+ businesses automating customer support, sales and follow-ups. 7-day free trial. No credit card required.",
}: Props) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 mesh-glow animate-gradient-drift" aria-hidden />
      <div className="container-page relative">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#131a35] to-[#0A0E27] px-8 py-20 text-center sm:px-16 sm:py-28">
          <div
            className="pointer-events-none absolute inset-0 opacity-80"
            aria-hidden
            style={{
              background: "radial-gradient(60% 80% at 50% 0%, rgba(255,215,0,0.16) 0%, transparent 70%)",
            }}
          />
          <div className="pointer-events-none absolute inset-0 grid-overlay opacity-40" aria-hidden />
          <div className="relative">
            <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#FFD700]/30 bg-[#FFD700]/8 px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.22em] text-[#FFD700]">
              {eyebrow}
            </p>
            <h2 className="mx-auto mt-7 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
              {title}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              {description}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href={CAL} target="_blank" rel="noopener noreferrer" className="btn-primary group">
                Start Free Trial
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <Link to="/pricing" className="btn-glass">See pricing</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
