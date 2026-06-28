import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Clock,
  Shield,
  Zap,
  Sparkles,
  PhoneCall,
} from "lucide-react";
import {
  SERVICES,
  SERVICE_ICONS,
  INDUSTRIES,
  PROCESS_STEPS,
  CASE_STUDIES,
  TRUST_PILLARS,
} from "../lib/site-data";
import { CTASection } from "../components/site/CTASection";
import { SectionHeader } from "../components/site/SectionHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Indu Divine AI Automation — Hire AI Employees That Work 24/7" },
      {
        name: "description",
        content:
          "Hire AI Employees that answer calls, qualify leads, automate WhatsApp, schedule appointments and streamline workflows. Enterprise AI for healthcare, real estate, finance, education and more.",
      },
      { property: "og:title", content: "Indu Divine — AI Employees That Work 24/7" },
      {
        property: "og:description",
        content:
          "Enterprise AI Employees for voice, sales, WhatsApp, appointments, outbound calling, and workflow automation.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const HERO_STATS = [
  { label: "Availability", value: "24/7/365" },
  { label: "Response Time", value: "Instant" },
  { label: "Security", value: "Enterprise" },
  { label: "Conversation", value: "Human-Like" },
];

function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <IndustriesSection />
      <ProcessSection />
      <WhyChooseSection />
      <ResultsSection />
      <CaseStudiesPreview />
      <CTASection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 hero-glow" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-[600px] opacity-60"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, oklch(1 0 0 / 0.05) 1px, transparent 0)",
          backgroundSize: "32px 32px",
          maskImage: "linear-gradient(to bottom, black 30%, transparent 100%)",
        }}
      />
      <div className="container-page relative pb-20 pt-16 sm:pb-28 sm:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow mx-auto">
            <Sparkles className="size-3" /> Enterprise AI Workforce
          </p>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-gradient sm:text-6xl md:text-[64px]">
            Hire AI Employees That Work{" "}
            <span className="text-gradient-primary">24/7</span> So Your Business Never
            Stops.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
            Empower your business with AI Employees that answer calls, qualify leads,
            automate WhatsApp conversations, schedule appointments and streamline
            workflows — so your team can focus on closing more business.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
            >
              Book Free Demo <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border-strong bg-surface px-7 text-sm font-semibold text-foreground transition hover:bg-surface-elevated"
            >
              <PhoneCall className="size-4" /> Talk To Our AI
            </Link>
            <Link
              to="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full px-5 text-sm font-semibold text-mist transition hover:text-foreground"
            >
              Request Proposal →
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="bg-surface/90 p-5 text-center">
              <div className="font-display text-xl font-bold text-foreground sm:text-2xl">
                {stat.value}
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <HeroMockDashboard />
      </div>
    </section>
  );
}

function HeroMockDashboard() {
  const rows = [
    { name: "Aria — Voice Receptionist", status: "Live", calls: "428", color: "success" },
    { name: "Marcus — Sales Employee", status: "Live", calls: "1,204", color: "success" },
    { name: "Nova — WhatsApp Agent", status: "Live", calls: "2,876", color: "success" },
    { name: "Atlas — Appointment Setter", status: "Live", calls: "612", color: "success" },
  ];
  return (
    <div className="relative mx-auto mt-16 max-w-5xl">
      <div className="absolute -inset-x-12 -inset-y-8 -z-0 hero-glow opacity-60" aria-hidden />
      <div className="surface-card relative overflow-hidden p-2 shadow-[0_20px_60px_-20px_oklch(0_0_0_/_0.7)]">
        <div className="rounded-[calc(var(--radius-2xl)-4px)] border border-border bg-background/60 p-5">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div className="flex items-center gap-3">
              <span className="size-2 animate-pulse-dot rounded-full bg-success" />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist">
                AI Workforce — Live
              </span>
            </div>
            <span className="font-mono text-[11px] text-mist">workspace.indudivine</span>
          </div>
          <div className="mt-4 divide-y divide-border">
            {rows.map((row) => (
              <div
                key={row.name}
                className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 sm:flex sm:items-center sm:justify-between"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary/15 text-primary-glow">
                    <span className="size-2 rounded-full bg-primary" />
                  </span>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-medium text-foreground">
                      {row.name}
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-mist">
                      {row.status}
                    </div>
                  </div>
                </div>
                <div className="text-right font-mono text-xs text-mist">
                  {row.calls}{" "}
                  <span className="text-[10px] uppercase tracking-widest">today</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProblemSection() {
  const items = [
    "Calls go unanswered",
    "Leads are never followed up",
    "Appointments are missed",
    "WhatsApp messages stay unread",
    "Manual tasks slow growth",
    "Response delays cost revenue",
  ];
  return (
    <section className="border-y border-border bg-background py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-2">
        <SectionHeader
          eyebrow="The Problem"
          title="Most businesses lose customers every single day."
          description="Your team is busy. Every unanswered call, late follow-up and ignored WhatsApp message is revenue walking out the door — to a competitor that responded faster."
        />
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <li
              key={item}
              className="surface-card flex items-start gap-3 p-4 text-sm text-foreground"
            >
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-destructive" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="The Solution"
          title="Meet your new AI workforce."
          description="Our AI Employees work around the clock to handle customer communication, sales conversations, appointment scheduling and repetitive operations. Unlike software, they interact naturally with customers and become an extension of your business."
          align="center"
        />
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="border-y border-border bg-surface/30 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="AI Employees"
          title="A complete team. Hired on day one."
          description="Each AI Employee is purpose-built for a specific role — and trained on your business knowledge."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.slug];
            return (
              <article
                key={service.slug}
                className="surface-card surface-card-hover group flex flex-col p-6"
              >
                <div className="flex items-start justify-between">
                  <span className="grid size-11 place-items-center rounded-xl bg-primary/15 text-primary-glow ring-1 ring-primary/20">
                    {Icon && <Icon className="size-5" />}
                  </span>
                  <span className="rounded-full border border-border bg-background/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-mist">
                    {service.role}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.bullets.slice(0, 4).map((b) => (
                    <li key={b} className="flex items-center gap-2 text-xs text-mist">
                      <Check className="size-3.5 text-primary-glow" /> {b}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary-glow transition group-hover:gap-2"
                >
                  Explore <ArrowRight className="size-3.5" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Industries"
          title="Built for the businesses we serve."
          description="Pre-trained AI Employees, customized for your industry's language, workflows and customer journeys."
        />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {INDUSTRIES.slice(0, 8).map((industry) => {
            const Icon = industry.icon;
            return (
              <Link
                key={industry.slug}
                to="/industries"
                className="surface-card surface-card-hover group flex flex-col gap-4 p-5"
              >
                <Icon className="size-6 text-primary-glow" />
                <div>
                  <div className="font-display text-base font-semibold text-foreground">
                    {industry.name}
                  </div>
                  <div className="mt-1 text-xs text-mist">{industry.blurb}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="border-y border-border bg-surface/30 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="How It Works"
          title="From kickoff to continuous optimization."
        />
        <ol className="relative mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step) => (
            <li key={step.n} className="bg-surface/90 p-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary-glow">
                Step {step.n}
              </div>
              <div className="mt-3 font-display text-base font-semibold text-foreground">
                {step.title}
              </div>
              <p className="mt-2 text-sm text-mist">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  const icons = [Shield, Clock, Zap, Sparkles];
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Why Indu Divine"
          title="An AI partner built for serious businesses."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_PILLARS.map((label, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={label} className="surface-card p-6">
                <Icon className="size-5 text-primary-glow" />
                <div className="mt-4 font-display text-base font-semibold text-foreground">
                  {label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ResultsSection() {
  const items = [
    "Increase Lead Conversion",
    "Reduce Response Time",
    "Automate Customer Communication",
    "Reduce Manual Work",
    "Improve Customer Experience",
    "Scale Faster",
  ];
  return (
    <section className="border-y border-border bg-surface/30 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Outcomes"
          title="Businesses choose us to grow."
          description="We don't replace people. We eliminate the repetitive work so your team focuses on growth."
        />
        <ul className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li
              key={item}
              className="surface-card flex items-center gap-3 p-5 text-sm font-medium text-foreground"
            >
              <Check className="size-4 text-primary-glow" /> {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CaseStudiesPreview() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Case Studies"
            title="Real businesses. Real automation."
          />
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary-glow"
          >
            View all <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.slice(0, 3).map((cs) => (
            <article key={cs.slug} className="surface-card surface-card-hover p-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary-glow">
                {cs.industry}
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                {cs.title}
              </h3>
              <p className="mt-3 text-sm text-mist">{cs.challenge}</p>
              <div className="mt-5 border-t border-border pt-4">
                <div className="font-mono text-[10px] uppercase tracking-widest text-mist">
                  Outcomes
                </div>
                <ul className="mt-2 space-y-1.5">
                  {cs.outcomes.slice(0, 3).map((o) => (
                    <li key={o} className="flex items-center gap-2 text-xs text-foreground">
                      <Check className="size-3.5 text-primary-glow" /> {o}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
