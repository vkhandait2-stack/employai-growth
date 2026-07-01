import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Check,
  MessageCircle,
  Phone,
  Mail,
  Target,
  Home,
  Stethoscope,
  ShoppingBag,
  Scissors,
  Wrench,
  Rocket,
  Sparkles,
  Zap,
  Clock,
  Shield,
  TrendingUp,
  Play,
  Star,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Reveal } from "../components/site/Reveal";
import { Counter } from "../components/site/Counter";
import { CTASection } from "../components/site/CTASection";
import { FAQSection } from "../components/site/FAQSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Indu Divine AI — AI Employees That Work 24/7" },
      { name: "description", content: "Premium AI automation for WhatsApp, Voice, Email and lead management. Never miss a customer message again. Join 1,000+ businesses saving $2,500+ monthly." },
      { property: "og:title", content: "Indu Divine AI — AI Employees That Work 24/7" },
      { property: "og:description", content: "Premium AI automation for WhatsApp, Voice, Email and lead management." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const CAL = "https://calendly.com/vaishk1212/30min";

function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ServicesSection />
      <ProcessTimeline />
      <IndustriesSection />
      <PricingPreview />
      <ROISection />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </>
  );
}

/* -------------------- HERO -------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-24">
      <div className="pointer-events-none absolute inset-0 -z-10 hero-glow" aria-hidden />
      <div className="pointer-events-none absolute inset-0 -z-10 grid-overlay opacity-30" aria-hidden />
      <Particles />

      <div className="container-page relative grid gap-14 pb-24 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-10 lg:pb-32">
        <Reveal>
          <p className="eyebrow">
            <span className="size-1.5 animate-pulse-dot rounded-full bg-success" />
            Powered by Indu Divine AI
          </p>
          <h1 className="mt-6 font-display text-[42px] font-bold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-[68px]">
            AI Employees That{" "}
            <span className="text-gradient-gold">Work 24/7</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist sm:text-xl">
            Automate customer support, lead qualification and sales follow-ups.
            Never miss a customer message again.
          </p>
          <p className="mt-3 text-sm font-medium text-white/70">
            Join <span className="text-[#FFD700]">1,000+ businesses</span> saving $2,500+ monthly.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={CAL} target="_blank" rel="noopener noreferrer" className="btn-primary group">
              Start Free Trial
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href={CAL} target="_blank" rel="noopener noreferrer" className="btn-outline-gold group">
              <Play className="size-4" />
              Watch Demo
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[13.5px] text-mist">
            {["99.9% Uptime", "No Credit Card Required", "24-Hour Setup"].map((t) => (
              <li key={t} className="inline-flex items-center gap-2">
                <span className="grid size-5 place-items-center rounded-full bg-success/15 text-success">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="relative">
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  );
}

function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        id: i,
        left: `${(i * 73) % 100}%`,
        top: `${(i * 41) % 100}%`,
        size: 3 + (i % 4) * 2,
        tx: `${((i * 17) % 60) - 30}px`,
        ty: `${-40 - ((i * 23) % 60)}px`,
        delay: `${(i * 0.7) % 5}s`,
        duration: `${8 + (i % 5) * 2}s`,
        gold: i % 3 === 0,
      })),
    [],
  );
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background: p.gold ? "rgba(255,215,0,0.7)" : "rgba(14,165,233,0.6)",
            boxShadow: p.gold ? "0 0 12px rgba(255,215,0,0.6)" : "0 0 12px rgba(14,165,233,0.5)",
            // @ts-expect-error CSS var
            "--tx": p.tx,
            "--ty": p.ty,
            animation: `particle-float ${p.duration} ease-in-out ${p.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      {/* Orbital ring */}
      <div
        className="absolute inset-8 rounded-full border border-white/6"
        style={{ background: "radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)" }}
        aria-hidden
      />
      <div className="absolute inset-16 rounded-full border border-[#FFD700]/12" aria-hidden />

      {/* Center dashboard card */}
      <div className="glass-panel absolute left-1/2 top-1/2 w-[78%] -translate-x-1/2 -translate-y-1/2 p-5 animate-float-slow">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-[#FFD700] to-[#FFB800] text-[#0F172A]">
              <Sparkles className="size-4" strokeWidth={2.5} />
            </span>
            <div>
              <p className="font-display text-[13px] font-semibold text-white">AI Dashboard</p>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-mist">Live</p>
            </div>
          </div>
          <span className="size-2 animate-pulse-dot rounded-full bg-success" />
        </div>
        <div className="mt-4 space-y-2">
          {[
            { label: "Calls handled today", value: "1,284", color: "#FFD700" },
            { label: "Response time", value: "1.2s", color: "#0EA5E9" },
            { label: "Satisfaction", value: "97%", color: "#10B981" },
          ].map((s) => (
            <div key={s.label} className="flex items-center justify-between rounded-lg bg-white/4 px-3 py-2">
              <span className="text-[11px] text-mist">{s.label}</span>
              <span className="font-display text-[13px] font-bold" style={{ color: s.color }}>
                {s.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating chips */}
      <FloatingChip
        icon={<MessageCircle className="size-4" />}
        label="WhatsApp"
        detail="New message from Priya"
        pos="top-4 left-2"
        accent="#25D366"
        delay="0s"
      />
      <FloatingChip
        icon={<Phone className="size-4" />}
        label="Voice Call"
        detail="Booking appointment"
        pos="bottom-8 left-0"
        accent="#0EA5E9"
        delay="1.2s"
      />
      <FloatingChip
        icon={<Mail className="size-4" />}
        label="Email"
        detail="Auto-reply sent"
        pos="top-8 right-0"
        accent="#FFD700"
        delay="0.6s"
      />
      <FloatingChip
        icon={<Target className="size-4" />}
        label="Lead qualified"
        detail="Score 92 · Hot"
        pos="bottom-4 right-2"
        accent="#A78BFA"
        delay="1.8s"
      />
    </div>
  );
}

function FloatingChip({
  icon,
  label,
  detail,
  pos,
  accent,
  delay,
}: {
  icon: React.ReactNode;
  label: string;
  detail: string;
  pos: string;
  accent: string;
  delay: string;
}) {
  return (
    <div
      className={`glass-panel absolute ${pos} flex items-center gap-3 p-3 pr-4 animate-float-medium`}
      style={{ animationDelay: delay, minWidth: "180px" }}
    >
      <span
        className="grid size-9 place-items-center rounded-xl"
        style={{ background: `${accent}22`, color: accent, boxShadow: `0 0 14px ${accent}44` }}
      >
        {icon}
      </span>
      <div>
        <p className="font-display text-[12px] font-semibold text-white">{label}</p>
        <p className="text-[10.5px] text-mist">{detail}</p>
      </div>
    </div>
  );
}

/* -------------------- STATS -------------------- */

function StatsSection() {
  const stats = [
    { icon: MessageCircle, value: 50, suffix: "M+", label: "Conversations Handled" },
    { icon: Zap, value: 1.2, decimals: 1, suffix: "s", label: "Average Response Time" },
    { icon: Shield, value: 99.9, decimals: 1, suffix: "%", label: "Uptime Guarantee" },
    { icon: Star, value: 94, suffix: "%", label: "Customer Satisfaction" },
  ];
  return (
    <section className="relative py-16 sm:py-20">
      <div className="container-page">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div
                className="glass-card glass-card-hover relative overflow-hidden p-6"
                style={{ borderLeft: "3px solid #FFD700" }}
              >
                <s.icon className="size-6 text-[#FFD700]" strokeWidth={1.75} />
                <div className="mt-4 font-display text-[42px] font-bold leading-none text-gradient-gold sm:text-[48px]">
                  <Counter value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </div>
                <p className="mt-2 text-[14px] text-mist">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- SERVICES -------------------- */

const SERVICES = [
  {
    icon: MessageCircle,
    accent: "#25D366",
    title: "WhatsApp Automation",
    what: "AI handles all your WhatsApp messages 24/7, instantly.",
    steps: [
      "Customer sends message → AI reads instantly",
      "AI understands intent (question, complaint, order)",
      "AI sends perfect response in seconds",
      "You review if needed, customer gets reply immediately",
    ],
    bestFor: "Ecommerce · Real Estate · Salons · Service Businesses",
    results: [
      "70% faster response times",
      "24/7 availability (even at 3am)",
      "Never miss a customer",
      "Handle 1000s simultaneously",
    ],
    minutes: "Unlimited messages",
    cta: "See WhatsApp Demo",
  },
  {
    icon: Phone,
    accent: "#0EA5E9",
    title: "Voice AI Calls",
    what: "AI answers calls, books appointments, transfers to you if needed.",
    steps: [
      "Phone rings → AI answers instantly",
      "AI listens to customer request",
      "AI books appointment, answers FAQ, takes message",
      "You get notification with call summary",
    ],
    bestFor: "Medical Offices · Salons · Restaurants · Service Businesses",
    results: [
      "Never miss another call",
      "80% of calls handled without human",
      "Self-book appointments 24/7",
      "Call recording & transcription",
    ],
    minutes: "5,000–100,000 per tier",
    cta: "Hear Voice Demo",
  },
  {
    icon: Mail,
    accent: "#FFD700",
    title: "Email Automation",
    what: "AI reads emails and sends smart replies automatically.",
    steps: [
      "Email arrives → AI reads it immediately",
      "AI understands the request/question",
      "AI writes and sends perfect response",
      "You review in dashboard, can edit before sending",
    ],
    bestFor: "B2B · Customer Support · Sales Teams · Agencies",
    results: [
      "90% emails answered in minutes",
      "Consistent professional tone",
      "No email falls through cracks",
      "Saves 15+ hours per week per person",
    ],
    minutes: "Unlimited emails",
    cta: "See Email Demo",
  },
  {
    icon: Target,
    accent: "#A78BFA",
    title: "Lead Management & Follow-up",
    what: "AI qualifies leads, schedules demos, sends follow-ups automatically.",
    steps: [
      "New lead arrives from website, ads, or email",
      "AI chats with lead (questions about needs, budget)",
      "AI scores lead quality (hot/warm/cold)",
      "AI schedules meeting directly in your calendar",
    ],
    bestFor: "Real Estate · Coaching · SaaS · Digital Agencies",
    results: [
      "3x more meetings booked automatically",
      "No lead forgotten or falls through",
      "Consistent follow-up every time",
      "Better lead quality (pre-qualified)",
    ],
    minutes: "Unlimited conversations",
    cta: "See Lead Gen Demo",
  },
];

function ServicesSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mx-auto">Services</p>
          <h2 className="mt-6 display-2 text-white">
            Four AI Superpowers for Your Business
          </h2>
          <p className="mt-5 lede">
            Pick one service or combine all four for maximum automation.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article
                className="glass-card glass-card-hover relative flex h-full flex-col overflow-hidden p-8"
                style={{ borderTop: `2px solid ${s.accent}` }}
              >
                <div className="flex items-start justify-between">
                  <span
                    className="grid size-12 place-items-center rounded-2xl"
                    style={{ background: `${s.accent}18`, color: s.accent, boxShadow: `0 0 24px ${s.accent}33` }}
                  >
                    <s.icon className="size-6" strokeWidth={1.75} />
                  </span>
                  <span className="rounded-full border border-[#FFD700]/30 bg-[#FFD700]/8 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#FFD700]">
                    {s.minutes}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-[24px] font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-[15px] text-mist">{s.what}</p>

                <div className="mt-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#FFD700]">How it works</p>
                  <ol className="mt-3 space-y-1.5 text-[13.5px] text-white/80">
                    {s.steps.map((step, idx) => (
                      <li key={step} className="flex gap-2.5">
                        <span className="font-display text-[12px] font-bold text-[#FFD700]">{idx + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="mt-6 rounded-xl border border-white/6 bg-white/3 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-mist">Results</p>
                  <ul className="mt-2.5 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                    {s.results.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-[13px] text-white/85">
                        <Check className="mt-0.5 size-3.5 shrink-0 text-success" strokeWidth={3} />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-5 text-[12px] text-mist">Best for: {s.bestFor}</p>

                <a
                  href={CAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#FFD700] transition hover:gap-2.5"
                >
                  {s.cta}
                  <ArrowUpRight className="size-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- TIMELINE -------------------- */

const STEPS = [
  {
    day: "Day 1",
    title: "Setup",
    emoji: "🚀",
    time: "4 hours",
    you: ["Business description", "Example conversations", "Integration details"],
    us: ["Set up AI environment", "Connect your systems", "Start initial training"],
    outcome: "AI ready for training",
  },
  {
    day: "Day 1–2",
    title: "Training",
    emoji: "📚",
    time: "16 hours",
    you: ["Provide response templates", "Answer training questions", "Review first responses"],
    us: ["Learn your brand voice", "Learn your products & FAQs", "Learn your policies"],
    outcome: "AI trained on your business",
  },
  {
    day: "Day 2–3",
    title: "Testing",
    emoji: "🧪",
    time: "8 hours",
    you: ["Monitor conversations", "Approve responses", "Provide feedback"],
    us: ["Run parallel with your team", "Test 100+ conversations", "Make final adjustments"],
    outcome: "AI performance perfected",
  },
  {
    day: "Day 4",
    title: "Go Live",
    emoji: "✨",
    time: "2 hours",
    you: ["Focus on your business", "Review important conversations", "Watch ROI increase"],
    us: ["AI fully takes over", "Handle all messages 24/7", "Send daily summaries"],
    outcome: "24/7 automation running",
  },
];

function ProcessTimeline() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40" aria-hidden>
        <div className="mesh-glow absolute inset-0 animate-gradient-drift" />
      </div>
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mx-auto">How it works</p>
          <h2 className="mt-6 display-2 text-white">From Signup to Live in 48 Hours</h2>
          <p className="mt-5 lede">
            A hands-on white-glove launch. Your AI Employee ships in days, not months.
          </p>
        </Reveal>

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-6 top-2 hidden h-[calc(100%-1rem)] w-px lg:left-1/2 lg:block"
            style={{
              background:
                "linear-gradient(180deg, transparent, rgba(255,215,0,0.5) 20%, rgba(14,165,233,0.5) 80%, transparent)",
            }}
          />

          <div className="space-y-8 lg:space-y-14">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div
                  className={`relative grid gap-6 lg:grid-cols-2 lg:gap-16 ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="glass-card glass-card-hover p-7">
                    <div className="flex items-center gap-3">
                      <span
                        className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-[#FFD700] to-[#FFB800] font-display text-lg font-bold text-[#0F172A]"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#FFD700]">
                          {s.day} · {s.time}
                        </p>
                        <h3 className="font-display text-xl font-bold text-white">
                          {s.emoji} {s.title}
                        </h3>
                      </div>
                    </div>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist">You do</p>
                        <ul className="mt-2 space-y-1.5">
                          {s.you.map((y) => (
                            <li key={y} className="flex items-start gap-1.5 text-[13px] text-white/80">
                              <Check className="mt-0.5 size-3 shrink-0 text-success" strokeWidth={3} />
                              {y}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist">We do</p>
                        <ul className="mt-2 space-y-1.5">
                          {s.us.map((u) => (
                            <li key={u} className="flex items-start gap-1.5 text-[13px] text-white/80">
                              <Sparkles className="mt-0.5 size-3 shrink-0 text-[#FFD700]" />
                              {u}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <p className="mt-5 rounded-lg border border-success/25 bg-success/8 px-3 py-2 text-[12.5px] text-success">
                      Outcome → {s.outcome}
                    </p>
                  </div>
                  <div className="hidden lg:block" />
                  <span
                    aria-hidden
                    className="absolute left-6 top-8 hidden size-3 -translate-x-1/2 rounded-full bg-[#FFD700] lg:left-1/2 lg:block"
                    style={{ boxShadow: "0 0 20px rgba(255,215,0,0.7)" }}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- INDUSTRIES -------------------- */

const INDUSTRIES = [
  {
    icon: Home,
    accent: "#0EA5E9",
    title: "Real Estate Agents",
    problem: "Calling 100 leads manually takes 8 hours/day",
    solution: "AI qualifies leads, schedules showings, sends follow-ups",
    results: ["3x more appointments booked", "0 missed leads", "Close rates increase 45%"],
    time: "30+ hours/week",
  },
  {
    icon: Stethoscope,
    accent: "#10B981",
    title: "Medical Practices",
    problem: "Receptionist answers same questions 100x/day, missed calls",
    solution: "AI books appointments, handles insurance & refill requests",
    results: ["50% fewer missed calls", "Instant availability", "Satisfaction up 60%"],
    time: "15+ hours/week",
  },
  {
    icon: ShoppingBag,
    accent: "#FFD700",
    title: "Ecommerce Stores",
    problem: "Support team responds to DMs next day, customers leave",
    solution: "AI replies to WhatsApp/Facebook instantly 24/7",
    results: ["70% higher conversion", "Higher AOV", "Support cost down 60%"],
    time: "20+ hours/week",
  },
  {
    icon: Scissors,
    accent: "#F472B6",
    title: "Salons & Spas",
    problem: "Phone rings constantly, missed bookings, cancellations",
    solution: "AI answers calls, books appointments, sends reminders",
    results: ["100% calls answered", "No-shows drop 80%", "Revenue up 40%"],
    time: "18+ hours/week",
  },
  {
    icon: Wrench,
    accent: "#A78BFA",
    title: "Service Businesses",
    problem: "Customer inquiries pile up, response delays lose customers",
    solution: "AI answers FAQs, quotes, schedules service calls",
    results: ["Same-day quotes", "Fewer cancellations", "New customers up 50%"],
    time: "25+ hours/week",
  },
  {
    icon: Rocket,
    accent: "#0EA5E9",
    title: "Digital Agencies",
    problem: "Client management, project updates, timely communication",
    solution: "AI provides 24/7 client support, updates and billing answers",
    results: ["24/7 client support", "Faster delivery", "Satisfaction 95%+"],
    time: "30+ hours/week",
  },
];

function IndustriesSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mx-auto">Industries</p>
          <h2 className="mt-6 display-2 text-white">AI Automation for Your Industry</h2>
          <p className="mt-5 lede">
            Purpose-built playbooks. Same platform. Different superpowers.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.title} delay={i * 60}>
              <article className="glass-card glass-card-hover relative flex h-full flex-col p-7" style={{ borderTop: `2px solid ${ind.accent}` }}>
                <span
                  className="grid size-11 place-items-center rounded-xl"
                  style={{ background: `${ind.accent}18`, color: ind.accent }}
                >
                  <ind.icon className="size-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 font-display text-[19px] font-bold text-white">{ind.title}</h3>
                <p className="mt-3 text-[13.5px] font-medium text-[#F87171]">
                  Problem: {ind.problem}
                </p>
                <p className="mt-2.5 text-[13.5px] text-white/85">
                  Solution: {ind.solution}
                </p>
                <ul className="mt-4 flex-1 space-y-1.5">
                  {ind.results.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-[13px] text-white/80">
                      <Check className="mt-0.5 size-3.5 shrink-0 text-success" strokeWidth={3} />
                      {r}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-[#FFD700]/12 px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.18em] text-[#FFD700]">
                  <Clock className="size-3" /> Saves {ind.time}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- PRICING PREVIEW -------------------- */

const PLANS = [
  {
    name: "Starter",
    price: 599,
    priceAnnual: 479,
    setup: 299,
    tag: "For small businesses",
    features: [
      "1 AI Agent (WhatsApp OR Email OR Voice)",
      "5,000 minutes/month for Voice",
      "Unlimited WhatsApp & Email",
      "Basic analytics dashboard",
      "48-hour implementation",
    ],
    highlight: false,
    cta: "Start 7-Day Free Trial",
  },
  {
    name: "Professional",
    price: 1499,
    priceAnnual: 1199,
    setup: 599,
    tag: "For growing businesses",
    features: [
      "3 AI Agents (WhatsApp + Voice + Email)",
      "25,000 voice minutes/month",
      "Advanced analytics & reporting",
      "Custom AI training",
      "Priority 24/7 support",
      "Weekly strategy calls",
    ],
    highlight: true,
    cta: "Start 7-Day Free Trial",
  },
  {
    name: "Enterprise",
    price: 3999,
    priceAnnual: 3199,
    setup: 1299,
    tag: "For large organizations",
    features: [
      "Unlimited AI Agents",
      "100,000+ voice minutes",
      "Custom integrations & API",
      "Dedicated account manager",
      "White-label options",
      "Same-day implementation",
    ],
    highlight: false,
    cta: "Schedule Enterprise Demo",
  },
];

function PricingPreview() {
  const [annual, setAnnual] = useState(false);
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mx-auto">Pricing</p>
          <h2 className="mt-6 display-2 text-white">Pricing That Grows With You</h2>
          <p className="mt-5 lede">
            No long-term contracts. Cancel anytime. All plans include 24/7 support.
          </p>

          <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={`rounded-full px-4 py-1.5 text-[13px] font-semibold transition ${
                !annual ? "bg-[#FFD700] text-[#0F172A]" : "text-white/70"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[13px] font-semibold transition ${
                annual ? "bg-[#FFD700] text-[#0F172A]" : "text-white/70"
              }`}
            >
              Annual
              <span className="rounded-full bg-success/25 px-1.5 text-[10px] font-bold text-success">–20%</span>
            </button>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {PLANS.map((p, i) => {
            const price = annual ? p.priceAnnual : p.price;
            return (
              <Reveal key={p.name} delay={i * 80}>
                <article
                  className={`glass-card relative flex h-full flex-col p-8 transition-all duration-500 ${
                    p.highlight ? "glow-gold" : ""
                  }`}
                  style={p.highlight ? { borderColor: "rgba(255,215,0,0.5)" } : undefined}
                >
                  {p.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFB800] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#0F172A]">
                      ⭐ Most Popular
                    </span>
                  )}
                  <h3 className="font-display text-2xl font-bold text-white">{p.name}</h3>
                  <p className="mt-1 text-[13px] text-mist">{p.tag}</p>
                  <div className="mt-6 flex items-baseline gap-1.5">
                    <span className="font-display text-[44px] font-bold text-gradient-gold">${price.toLocaleString()}</span>
                    <span className="text-[13px] text-mist">/mo</span>
                  </div>
                  <p className="text-[12px] text-mist">+ ${p.setup} one-time setup</p>

                  <ul className="mt-6 flex-1 space-y-2.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[13.5px] text-white/85">
                        <Check className="mt-0.5 size-4 shrink-0 text-success" strokeWidth={3} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={CAL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-8 inline-flex h-11 items-center justify-center rounded-full font-display text-[14px] font-semibold transition ${
                      p.highlight
                        ? "bg-gradient-to-r from-[#FFD700] to-[#FFB800] text-[#0F172A] shadow-[0_10px_28px_-8px_rgba(255,215,0,0.55)] hover:-translate-y-0.5"
                        : "border border-white/16 bg-white/5 text-white hover:bg-white/10"
                    }`}
                  >
                    {p.cta}
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link to="/pricing" className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#FFD700] hover:gap-2.5">
            See full pricing, add-ons & FAQ <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* -------------------- ROI CALCULATOR -------------------- */

function ROISection() {
  const [hours, setHours] = useState(20);
  const [rate, setRate] = useState(25);

  const monthlyCost = hours * 4 * rate;
  const yearlyCost = monthlyCost * 12;
  const aiYearly = 1499 * 12 + 599;
  const savings = yearlyCost - aiYearly;
  const savingsMonthly = Math.round(savings / 12);
  const roiPayback = Math.max(1, Math.round((1499 / (monthlyCost - 1499)) * 30));

  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mx-auto">ROI Calculator</p>
          <h2 className="mt-6 display-2 text-white">See Your Exact Savings</h2>
          <p className="mt-5 lede">How much can you save with AI automation?</p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
            <div className="glass-card p-8">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[#FFD700]">Your inputs</p>

              <label className="mt-6 block">
                <span className="text-[13.5px] text-mist">
                  Hours per week your team spends on customer support / follow-ups
                </span>
                <div className="mt-3 flex items-center justify-between">
                  <input
                    type="range"
                    min={5}
                    max={80}
                    value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                    className="w-full accent-[#FFD700]"
                  />
                  <span className="ml-4 font-display text-2xl font-bold text-gradient-gold w-16 text-right">{hours}h</span>
                </div>
              </label>

              <label className="mt-6 block">
                <span className="text-[13.5px] text-mist">Average hourly rate</span>
                <div className="mt-3 grid grid-cols-6 gap-2">
                  {[15, 20, 25, 30, 40, 50].map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRate(r)}
                      className={`rounded-lg border px-2 py-2 text-[13px] font-semibold transition ${
                        rate === r
                          ? "border-[#FFD700] bg-[#FFD700]/12 text-[#FFD700]"
                          : "border-white/10 bg-white/3 text-white/70 hover:bg-white/8"
                      }`}
                    >
                      ${r}
                    </button>
                  ))}
                </div>
              </label>
            </div>

            <div className="space-y-4">
              <div className="glass-card p-6">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[#F87171]">Without AI</p>
                <div className="mt-3 flex items-baseline justify-between">
                  <span className="text-[13px] text-mist">Monthly cost</span>
                  <span className="font-display text-2xl font-bold text-white">${monthlyCost.toLocaleString()}</span>
                </div>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-[13px] text-mist">Yearly cost</span>
                  <span className="font-display text-lg font-semibold text-white/80">${yearlyCost.toLocaleString()}</span>
                </div>
              </div>

              <div className="glass-card p-6">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[#0EA5E9]">With AI (Professional)</p>
                <div className="mt-3 flex items-baseline justify-between">
                  <span className="text-[13px] text-mist">Plan cost</span>
                  <span className="font-display text-2xl font-bold text-white">$1,499/mo</span>
                </div>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-[13px] text-mist">Yearly (incl. setup)</span>
                  <span className="font-display text-lg font-semibold text-white/80">${aiYearly.toLocaleString()}</span>
                </div>
              </div>

              <div
                className="glass-card relative overflow-hidden p-6"
                style={{ borderColor: "rgba(255,215,0,0.4)" }}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-40"
                  style={{
                    background: "radial-gradient(60% 100% at 50% 0%, rgba(255,215,0,0.25) 0%, transparent 60%)",
                  }}
                />
                <div className="relative">
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[#FFD700]">
                    Your annual savings 🎉
                  </p>
                  <div className="mt-3 font-display text-[48px] font-bold leading-none text-gradient-gold">
                    ${Math.max(0, savings).toLocaleString()}
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-[13px]">
                    <div className="rounded-lg bg-white/4 px-3 py-2">
                      <p className="text-mist">Monthly savings</p>
                      <p className="font-display text-lg font-bold text-white">
                        ${Math.max(0, savingsMonthly).toLocaleString()}
                      </p>
                    </div>
                    <div className="rounded-lg bg-white/4 px-3 py-2">
                      <p className="text-mist">Payback period</p>
                      <p className="font-display text-lg font-bold text-white">
                        {savings > 0 ? `~${roiPayback} days` : "—"}
                      </p>
                    </div>
                  </div>
                  <a href={CAL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 w-full">
                    Book Free Demo <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------- TESTIMONIALS -------------------- */

const TESTIMONIALS = [
  {
    quote:
      "Our WhatsApp response time dropped from 4 hours to 12 seconds. Conversion is up 68% in the first month.",
    name: "Aditi Rao",
    role: "Founder, Bloom Beauty Studio",
    metric: "+68% conversion",
  },
  {
    quote:
      "We haven't missed a single call in 3 months. The AI books 40+ appointments a week while we sleep.",
    name: "Dr. Rakesh Menon",
    role: "MD, Clearview Family Clinic",
    metric: "0 missed calls",
  },
  {
    quote:
      "Replaced a 3-person support team. Our customers can't tell the difference. Saving $18K/month.",
    name: "Vikram Singh",
    role: "CEO, NorthStar Realty",
    metric: "$18K/mo saved",
  },
];

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mx-auto">Customers</p>
          <h2 className="mt-6 display-2 text-white">Loved by 1,000+ businesses</h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12">
            <div className="mx-auto max-w-3xl">
              <div className="glass-card relative overflow-hidden p-10 sm:p-14">
                <div
                  className="pointer-events-none absolute inset-0 opacity-50"
                  style={{ background: "radial-gradient(60% 80% at 50% 0%, rgba(255,215,0,0.15), transparent 65%)" }}
                />
                <div className="relative">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="size-4 fill-[#FFD700] text-[#FFD700]" />
                    ))}
                  </div>
                  <p key={i} className="mt-5 animate-fade-in-up font-display text-2xl font-medium leading-snug text-white sm:text-3xl">
                    "{TESTIMONIALS[i].quote}"
                  </p>
                  <div className="mt-8 flex items-center justify-between border-t border-white/8 pt-6">
                    <div>
                      <p className="font-display text-base font-semibold text-white">{TESTIMONIALS[i].name}</p>
                      <p className="text-[13px] text-mist">{TESTIMONIALS[i].role}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-success/12 px-3 py-1.5 text-[12.5px] font-semibold text-success">
                      <TrendingUp className="size-3.5" />
                      {TESTIMONIALS[i].metric}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-center gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setI(idx)}
                    aria-label={`Testimonial ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === idx ? "w-8 bg-[#FFD700]" : "w-1.5 bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
