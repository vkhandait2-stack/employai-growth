import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { CTASection } from "../components/site/CTASection";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "AI Solutions That Solve Real Business Problems | Indu Divine" },
      {
        name: "description",
        content:
          "Solve real business problems with AI: never miss a call, convert more leads, automate WhatsApp, fill your calendar, reach customers, automate workflows and build a smarter sales process.",
      },
      { property: "og:title", content: "AI Solutions | Indu Divine" },
      {
        property: "og:description",
        content: "AI Employees solving specific business problems across functions.",
      },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});

const SOLUTIONS = [
  {
    title: "Never miss another customer call.",
    desc: "Our AI Voice Receptionist answers every incoming call, captures customer information, books appointments and routes intelligently.",
    outcomes: ["Higher customer satisfaction", "More qualified leads", "Zero missed opportunities"],
  },
  {
    title: "Convert more leads into customers.",
    desc: "Our AI Sales Employee instantly engages every lead, answers questions, qualifies prospects and books meetings automatically.",
    outcomes: ["Faster follow-up", "Higher conversion rates", "Better sales productivity"],
  },
  {
    title: "Automate WhatsApp communication.",
    desc: "Our AI WhatsApp Sales Agent handles conversations, shares information, recommends products and follows up automatically.",
    outcomes: ["Faster response time", "Better engagement", "More opportunities"],
  },
  {
    title: "Fill your calendar automatically.",
    desc: "Our AI Appointment Setter schedules meetings, sends reminders, reschedules bookings and reduces no-shows.",
    outcomes: ["More confirmed appointments", "Less manual work", "Better customer experience"],
  },
  {
    title: "Reach thousands of customers with AI calling.",
    desc: "Our AI Outbound Calling platform delivers personalized voice campaigns for promotions, reminders, admissions, surveys and announcements.",
    outcomes: ["Faster outreach", "Consistent communication", "Campaign analytics"],
  },
  {
    title: "Automate repetitive business work.",
    desc: "We automate CRM updates, follow-ups, notifications, approvals, calendars, emails and internal workflows.",
    outcomes: ["Save time", "Reduce operational cost", "Increase productivity"],
  },
  {
    title: "Build a smarter sales process.",
    desc: "CRM Automation keeps every lead organized, tracks conversations, schedules follow-ups and gives full pipeline visibility.",
    outcomes: ["Better pipeline management", "Higher close rates", "Improved forecasting"],
  },
];

function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="AI Solutions that solve real business problems."
        description="Every business faces operational challenges. We build AI Employees that eliminate repetitive work, improve customer experience and accelerate growth."
      />
      <section className="py-20 sm:py-28">
        <div className="container-page space-y-5">
          {SOLUTIONS.map((s, i) => (
            <article
              key={s.title}
              className="surface-card grid gap-6 p-8 sm:p-10 lg:grid-cols-[1.6fr_1fr] lg:items-center"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary-glow">
                  Solution 0{i + 1}
                </span>
                <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
                  {s.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-mist sm:text-base">{s.desc}</p>
              </div>
              <div className="rounded-2xl border border-border bg-background/40 p-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
                  Business Outcome
                </div>
                <ul className="mt-3 space-y-2">
                  {s.outcomes.map((o) => (
                    <li key={o} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="size-4 text-primary-glow" /> {o}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
