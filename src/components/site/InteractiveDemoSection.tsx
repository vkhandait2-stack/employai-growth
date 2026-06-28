import { useState } from "react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { Link } from "@tanstack/react-router";
import { HeartPulse, Building2, Landmark, GraduationCap, Factory, PhoneCall, Mic, ArrowUpRight } from "lucide-react";

const DEMOS = [
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: HeartPulse,
    greeting: "Hi, you've reached Bright Health Clinic — this is Maya, your AI assistant. Are you calling to book an appointment or check on a report?",
    use: "Patient intake · Appointment booking · Insurance verification",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: Building2,
    greeting: "Hi there, this is Ava from Skyline Properties. I can help you with project details, pricing, and book a site visit — what city are you looking in?",
    use: "Lead qualification · Site visit booking · Project info",
  },
  {
    slug: "finance",
    name: "Finance",
    icon: Landmark,
    greeting: "Hello, this is Liam from your relationship team. I can help with EMI status, policy renewal, or connect you with a loan specialist. How can I help?",
    use: "EMI reminders · Renewal calls · Loan qualification",
  },
  {
    slug: "education",
    name: "Education",
    icon: GraduationCap,
    greeting: "Hi, this is Noor — admissions counsellor for Northfield University. Which program are you considering, and shall I book a session with our advisor?",
    use: "Admissions · Counselling · Parent updates",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    greeting: "Hello, this is Kai from your dealer support line. I can pull up an order, raise a service ticket, or route you to the right product team — what do you need?",
    use: "Dealer support · Order updates · Service tickets",
  },
] as const;

export function InteractiveDemoSection() {
  const [active, setActive] = useState<(typeof DEMOS)[number]>(DEMOS[0]);
  const Icon = active.icon;

  return (
    <section className="relative overflow-hidden border-y border-border bg-surface/60 py-28 sm:py-36">
      <div className="container-page">
        <Reveal>
          <SectionHeader
            eyebrow="Interactive Demo"
            title="Choose your industry. Talk to your AI Employee."
            description="Pick a vertical and preview the exact opening conversation your AI Employee would have with a real customer."
            align="center"
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 flex flex-wrap justify-center gap-2">
            {DEMOS.map((d) => {
              const I = d.icon;
              const isActive = d.slug === active.slug;
              return (
                <button
                  key={d.slug}
                  onClick={() => setActive(d)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-medium transition-all duration-300 ${
                    isActive
                      ? "border-transparent bg-foreground text-background shadow-[0_10px_28px_-10px_color-mix(in_oklab,var(--foreground)_45%,transparent)]"
                      : "border-border bg-white/70 text-mist hover:text-foreground"
                  }`}
                >
                  <I className="size-3.5" />
                  {d.name}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div
              key={active.slug}
              className="surface-card animate-rise-in relative overflow-hidden p-7 sm:p-9"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-2xl bg-[color-mix(in_oklab,var(--primary)_10%,white)] text-primary ring-1 ring-inset ring-[color-mix(in_oklab,var(--primary)_18%,transparent)]">
                    <Icon className="size-5" strokeWidth={1.8} />
                  </span>
                  <div>
                    <div className="font-display text-lg font-semibold tracking-tight">{active.name}</div>
                    <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-mist">{active.use}</div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-[11px] font-semibold text-success">
                  <span className="size-1.5 animate-pulse-dot rounded-full bg-success" />
                  Live
                </span>
              </div>

              <div className="mt-7 rounded-2xl border border-border bg-background/60 p-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist">Opening line</div>
                <p className="mt-3 text-[15px] leading-relaxed text-foreground">
                  "{active.greeting}"
                </p>
                <div className="mt-5 flex items-center gap-2">
                  {[18, 26, 14, 32, 22, 28, 16, 24, 12, 30, 20, 18, 26, 14, 22].map((h, i) => (
                    <span
                      key={i}
                      className="w-1 rounded-full bg-primary/70"
                      style={{
                        height: `${h}px`,
                        animation: `pulse-dot ${1 + (i % 5) * 0.15}s ease-in-out infinite`,
                        animationDelay: `${i * 60}ms`,
                      }}
                    />
                  ))}
                  <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.18em] text-mist">Speaking</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary group">
                  <Mic className="size-4" />
                  Talk to AI
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link to="/industries" className="btn-glass">
                  See full playbook
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="surface-card relative h-full overflow-hidden p-7 sm:p-9">
              <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-mist">
                Behind the conversation
              </div>
              <ul className="mt-5 divide-y divide-border">
                {[
                  { k: "Intent detection", v: "Booking · Inquiry · Support" },
                  { k: "Languages", v: "EN · HI · AR · ES · FR" },
                  { k: "Integrations", v: "CRM · Calendar · WhatsApp · Telephony" },
                  { k: "Latency", v: "≈ 400ms voice round-trip" },
                  { k: "Handoff", v: "Warm transfer with full context" },
                  { k: "Compliance", v: "Region-locked data, full logging" },
                ].map((row) => (
                  <li key={row.k} className="flex items-center justify-between py-3.5">
                    <span className="text-[13.5px] text-mist">{row.k}</span>
                    <span className="text-[13.5px] font-medium text-foreground">{row.v}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl border border-border bg-background/60 p-5">
                <div className="flex items-center gap-3">
                  <PhoneCall className="size-4 text-primary" />
                  <div className="text-[13px] text-mist">Want it pointed at your live number?</div>
                </div>
                <Link to="/contact" className="mt-3 inline-flex items-center gap-1 text-[13.5px] font-semibold text-primary">
                  Request a live pilot →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
