import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Shield,
  Zap,
  Sparkles,
  Activity,
  Lock,
  Globe2,
  Clock4,
  Mic,
  PlayCircle,
  AlertCircle,
  Wand2,
  TrendingUp,
} from "lucide-react";
import {
  AI_EMPLOYEES,
  SERVICE_ICONS,
  INDUSTRIES,
  CASE_STUDIES,
} from "../lib/site-data";
import { CTASection } from "../components/site/CTASection";
import { SectionHeader } from "../components/site/SectionHeader";
import { Reveal } from "../components/site/Reveal";
import { Counter } from "../components/site/Counter";
import { InteractiveDemoSection } from "../components/site/InteractiveDemoSection";
import { ROICalculator } from "../components/site/ROICalculator";
import { DashboardPreview } from "../components/site/DashboardPreview";
import { FAQSection } from "../components/site/FAQSection";
import { TrustBar } from "../components/site/TrustBar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Indu Divine AI — Your AI Workforce Partner" },
      {
        name: "description",
        content:
          "Stop hiring more staff. Start hiring AI Employees that answer calls, qualify leads, automate WhatsApp, schedule appointments and streamline operations 24/7.",
      },
      { property: "og:title", content: "Indu Divine AI — Your AI Workforce Partner" },
      {
        property: "og:description",
        content:
          "Enterprise AI Employees for voice, sales, WhatsApp, appointments and workflow automation.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <AIEmployeesShowcase />
      <InteractiveDemoSection />
      <TrustBar />
      <PlatformSection />
      <IndustriesShowcase />
      <ROICalculator />
      <ProcessSection />
      <ResultsSection />
      <CaseStudiesPreview />
      <FAQSection />
      <CTASection />
    </>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden grain">
      <div className="pointer-events-none absolute inset-0 -z-10 hero-glow" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[820px] opacity-[0.55]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, oklch(0.22 0.04 260 / 0.055) 1px, transparent 0)",
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(60% 60% at 50% 10%, black 30%, transparent 100%)",
        }}
      />
      <div className="container-page relative grid items-center gap-14 pb-20 pt-16 sm:gap-20 sm:pb-32 sm:pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-40 lg:pt-40">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-3.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.22em] text-mist backdrop-blur-xl">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-success" />
              </span>
              Your AI Workforce Partner — Live
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-8 display-1 text-foreground">
              Hire AI Employees
              <br />
              <span className="text-gradient-aurora">that work 24/7.</span>
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-8 max-w-xl lede">
              AI Voice Receptionists, AI Sales Employees, AI WhatsApp Agents,
              AI Appointment Setters and Workflow Automation that help businesses
              respond faster, convert more leads and automate operations.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-12 flex flex-wrap items-center gap-3">
              <a
                href="https://calendly.com/vaishk1212/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                Book free demo
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <Link to="/contact" className="btn-glass group">
                <Mic className="size-4" />
                Talk to AI
              </Link>
              <a
                href="https://calendly.com/vaishk1212/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2 py-2 text-[13.5px] font-semibold text-foreground transition hover:text-primary"
              >
                <PlayCircle className="size-4" />
                Request proposal
              </a>
            </div>
          </Reveal>
          <Reveal delay={360}>
            <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-border pt-8 sm:mt-16 sm:gap-8 sm:pt-10">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist">
                  Conversations
                </dt>
                <dd className="mt-3 font-display text-[34px] font-semibold tracking-[-0.03em] text-foreground">
                  <Counter value={2.4} decimals={1} suffix="M" />
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist">
                  Avg. response
                </dt>
                <dd className="mt-3 font-display text-[34px] font-semibold tracking-[-0.03em] text-foreground">
                  <Counter value={0.4} decimals={1} suffix="s" />
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist">
                  Uptime
                </dt>
                <dd className="mt-3 font-display text-[34px] font-semibold tracking-[-0.03em] text-foreground">
                  <Counter value={99.99} decimals={2} suffix="%" />
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <DashboardPreview className="mx-auto w-full max-w-[620px]" />
        </Reveal>
      </div>
    </section>
  );
}


/* ---------------- LOGO MARQUEE / TRUST ---------------- */

function LogoMarquee() {
  const verticals = [
    "Healthcare",
    "Real Estate",
    "Finance",
    "Education",
    "Manufacturing",
    "Insurance",
    "Hospitality",
    "Automotive",
    "Legal",
    "Construction",
  ];
  const loop = [...verticals, ...verticals];
  return (
    <section className="relative border-y border-border bg-surface/60">
      <div className="container-page py-14">
        <p className="text-center font-mono text-[10.5px] uppercase tracking-[0.24em] text-mist">
          Trusted across regulated, high-stakes industries
        </p>
        <div
          className="relative mt-8 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent 0, black 12%, black 88%, transparent 100%)",
          }}
        >
          <div className="flex w-max animate-marquee gap-14">
            {loop.map((v, i) => (
              <span
                key={`${v}-${i}`}
                className="font-display text-[17px] font-medium tracking-tight text-foreground/55 transition-colors duration-300 hover:text-foreground"
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


/* ---------------- AI EMPLOYEES ---------------- */

function AIEmployeesShowcase() {
  return (
    <section className="py-28 sm:py-36">
      <div className="container-page">
        <Reveal>
          <SectionHeader
            number="01"
            eyebrow="The AI Workforce"
            title="A complete AI team. Hired on day one."
            description="Each AI Employee owns one role end-to-end — with a real business problem to solve, and a measurable outcome to deliver."
          />
        </Reveal>
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AI_EMPLOYEES.map((emp, i) => {
            const Icon = SERVICE_ICONS[emp.slug];
            const featured = i === 0;
            return (
              <Reveal key={emp.slug} delay={i * 60}>
                <article
                  className={`surface-card surface-card-hover group relative flex h-full flex-col overflow-hidden p-7 ${
                    featured ? "sm:col-span-2 lg:col-span-2" : ""
                  }`}
                >
                  <div
                    className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden
                    style={{
                      background:
                        "radial-gradient(closest-side, color-mix(in oklab, var(--primary) 28%, transparent), transparent)",
                    }}
                  />
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid size-12 place-items-center rounded-2xl bg-[color-mix(in_oklab,var(--primary)_10%,white)] text-primary ring-1 ring-inset ring-[color-mix(in_oklab,var(--primary)_18%,transparent)]">
                      {Icon && <Icon className="size-5" strokeWidth={1.8} />}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
                      {emp.role}
                    </span>
                  </div>
                  <h3 className="mt-7 font-display text-[22px] font-semibold tracking-tight text-foreground">
                    {emp.name}
                  </h3>

                  <dl className="mt-6 space-y-4 text-[13.5px] leading-relaxed">
                    <div className="flex gap-3">
                      <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-destructive/10 text-destructive">
                        <AlertCircle className="size-3.5" />
                      </span>
                      <div>
                        <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist">Business problem</dt>
                        <dd className="mt-1 text-foreground/85">{emp.problem}</dd>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                        <Wand2 className="size-3.5" />
                      </span>
                      <div>
                        <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist">AI solution</dt>
                        <dd className="mt-1 text-foreground/85">{emp.solution}</dd>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-success/10 text-success">
                        <TrendingUp className="size-3.5" />
                      </span>
                      <div>
                        <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist">Business outcome</dt>
                        <dd className="mt-1 text-foreground/85">{emp.outcome}</dd>
                      </div>
                    </div>
                  </dl>

                  <div className="mt-auto pt-8">
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-1 text-[13.5px] font-semibold text-primary transition-all duration-300 group-hover:gap-2"
                    >
                      Hire this AI Employee <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PLATFORM PILLARS ---------------- */

function PlatformSection() {
  const pillars = [
    {
      icon: Shield,
      title: "Enterprise security",
      desc: "Encryption at rest and in transit. Role-based access. Regional data residency by default.",
    },
    {
      icon: Activity,
      title: "Always-on observability",
      desc: "Every conversation logged, scored and reviewable. Live dashboards for QA, intent and CSAT.",
    },
    {
      icon: Globe2,
      title: "Omnichannel by design",
      desc: "Voice, WhatsApp, web, SMS and CRM — orchestrated as one continuous customer journey.",
    },
    {
      icon: Lock,
      title: "Private by default",
      desc: "Your knowledge base is yours. No third-party training. Zero data retention modes available.",
    },
    {
      icon: Clock4,
      title: "Built to scale instantly",
      desc: "Handle 10 or 10,000 concurrent conversations without queues, throttling or extra hires.",
    },
    {
      icon: Sparkles,
      title: "Crafted for your business",
      desc: "Trained on your tone of voice, products and workflows. Indistinguishable from your best rep.",
    },
  ];
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface/50 py-28 sm:py-36">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40 animate-gradient-drift mesh-glow"
        aria-hidden
      />
      <div className="container-page">
        <Reveal>
          <SectionHeader
            number="02"
            eyebrow="The Platform"
            title="Built like infrastructure. Used like a teammate."
            description="The same engineering rigor you expect from Stripe, Linear or Vercel — applied to AI that talks to your customers."
          />
        </Reveal>
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 50}>
              <div className="surface-card surface-card-hover h-full p-7">
                <span className="grid size-10 place-items-center rounded-xl bg-foreground text-background">
                  <p.icon className="size-4.5" strokeWidth={1.8} />
                </span>
                <h3 className="mt-6 font-display text-lg font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-mist">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- INDUSTRIES ---------------- */

function IndustriesShowcase() {
  return (
    <section className="py-28 sm:py-36">
      <div className="container-page">
        <Reveal>
          <SectionHeader
            number="03"
            eyebrow="Industries"
            title="Pre-trained for the businesses we serve."
            description="Vertical-tuned AI Employees that speak your industry's language, follow its rules, and meet its outcomes."
          />
        </Reveal>
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.slice(0, 6).map((industry, i) => {
            const Icon = industry.icon;
            return (
              <Reveal key={industry.slug} delay={i * 60}>
                <Link
                  to="/industries"
                  className="surface-card surface-card-hover group relative flex h-full flex-col overflow-hidden p-7"
                >
                  <div
                    className="pointer-events-none absolute inset-x-0 -top-24 h-48 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden
                    style={{
                      background:
                        "radial-gradient(60% 80% at 50% 100%, color-mix(in oklab, var(--primary) 25%, transparent), transparent)",
                    }}
                  />
                  <Icon className="size-7 text-primary" strokeWidth={1.6} />
                  <h3 className="mt-7 font-display text-xl font-semibold tracking-tight">
                    {industry.name}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-mist">
                    {industry.blurb}
                  </p>
                  <div className="mt-6 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
                      Outcomes
                    </div>
                    <ul className="mt-2 space-y-1.5">
                      {industry.benefits.slice(0, 3).map((b) => (
                        <li key={b} className="flex items-center gap-2 text-[13px] text-foreground">
                          <Check className="size-3.5 text-primary" /> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto pt-8 inline-flex items-center gap-1 text-[13px] font-semibold text-primary">
                    View industry <ArrowRight className="size-3.5" />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */

function ProcessSection() {
  const steps = [
    { n: "01", title: "Discovery", desc: "Map your goals, channels and customer journey." },
    { n: "02", title: "Design", desc: "Architect the right AI Employees for your business." },
    { n: "03", title: "Deploy", desc: "Integrate with CRM, telephony, WhatsApp and calendars." },
    { n: "04", title: "Optimize", desc: "Iterate weekly on conversion, CSAT and unit economics." },
  ];
  return (
    <section className="relative border-y border-border bg-foreground py-28 text-background sm:py-36">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden
        style={{
          background:
            "radial-gradient(50% 60% at 50% 0%, color-mix(in oklab, #0A84FF 60%, transparent), transparent 70%)",
        }}
      />
      <div className="container-page relative">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/70">
            How it works
          </p>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl">
            From kickoff to a live AI workforce — in weeks.
          </h2>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div className="h-full bg-foreground p-8">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--accent-cyan)]">
                  Step {s.n}
                </div>
                <div className="mt-5 font-display text-xl font-semibold tracking-tight text-white">
                  {s.title}
                </div>
                <p className="mt-2 text-[14px] leading-relaxed text-white/65">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- RESULTS ---------------- */

function ResultsSection() {
  const stats = [
    { value: 87, suffix: "%", label: "Faster response", desc: "Median first-response time across voice and chat." },
    { value: 3.2, suffix: "×", label: "Lead conversion", desc: "Lift vs. legacy outbound and inbound funnels.", decimals: 1 },
    { value: 64, suffix: "%", label: "Less manual work", desc: "Hours returned to teams every week, on average." },
  ];
  return (
    <section className="py-28 sm:py-36">
      <div className="container-page">
        <Reveal>
          <SectionHeader
            number="05"
            eyebrow="Outcomes"
            title="Real numbers. Measured the way your CFO would."
            description="We optimise for revenue, response time and customer experience — not vanity metrics."
            align="center"
          />
        </Reveal>
        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="surface-card flex h-full flex-col p-10">
                <div className="font-display text-6xl font-semibold tracking-[-0.03em] text-foreground">
                  <Counter value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </div>
                <div className="mt-3 font-display text-base font-semibold tracking-tight text-foreground">
                  {s.label}
                </div>
                <p className="mt-2 text-[14px] leading-relaxed text-mist">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {["Enterprise-ready", "24×7 availability", "Custom integrations", "Dedicated support"].map(
            (label, i) => (
              <Reveal key={label} delay={i * 60}>
                <div className="surface-card flex items-center gap-3 p-5">
                  <Zap className="size-4 text-primary" />
                  <span className="text-[14px] font-medium text-foreground">{label}</span>
                </div>
              </Reveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CASE STUDIES ---------------- */

function CaseStudiesPreview() {
  return (
    <section className="border-t border-border bg-surface/50 py-28 sm:py-36">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHeader
              number="06"
              eyebrow="Customers"
              title="Real businesses. Real automation."
            />
          </Reveal>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1 text-[13.5px] font-semibold text-primary"
          >
            View all stories <ArrowRight className="size-3.5" />
          </Link>
        </div>
        <div className="mt-14 space-y-5">
          {CASE_STUDIES.slice(0, 3).map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 80}>
              <article className="surface-card surface-card-hover group grid items-start gap-8 p-8 lg:grid-cols-[1fr_2fr] lg:p-10">
                <div>
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-primary">
                    {cs.industry}
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    {cs.title}
                  </h3>
                </div>
                <div className="grid gap-6 sm:grid-cols-3">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
                      Challenge
                    </div>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-foreground/80">
                      {cs.challenge}
                    </p>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
                      Solution
                    </div>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-foreground/80">
                      {cs.solution}
                    </p>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
                      Impact
                    </div>
                    <ul className="mt-2 space-y-1.5">
                      {cs.outcomes.slice(0, 3).map((o) => (
                        <li key={o} className="flex items-start gap-2 text-[13px] text-foreground/85">
                          <Check className="mt-0.5 size-3.5 shrink-0 text-primary" /> {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
