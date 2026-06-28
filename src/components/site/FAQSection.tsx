import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const FAQS = [
  {
    q: "How fast can we deploy AI Employees?",
    a: "Most clients go live within 2–4 weeks. We integrate with your CRM, telephony, WhatsApp Business and calendar systems, and train the AI on your knowledge base, tone of voice and workflows.",
  },
  {
    q: "Will customers know they are talking to AI?",
    a: "Our AI Employees are conversational, contextual and indistinguishable from your best human reps for most interactions. You decide the level of disclosure — many clients introduce them transparently as their AI assistant.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. Enterprise-grade encryption in transit and at rest, role-based access control, regional data residency and zero-retention modes are available. Your knowledge base is yours — never used to train third-party models.",
  },
  {
    q: "Which channels do you support?",
    a: "Voice (inbound and outbound), WhatsApp Business, SMS, web chat, email and any CRM or workflow tool via API. Everything orchestrated as one continuous customer journey.",
  },
  {
    q: "What does pricing look like?",
    a: "Pricing scales with conversation volume and the number of AI Employees you deploy. We benchmark with your actual data during discovery so you see ROI before committing.",
  },
  {
    q: "What if the AI can't handle a request?",
    a: "Every AI Employee has graceful human handoff. Complex cases are routed to the right person with full conversation context, so customers never repeat themselves.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-28 sm:py-36">
      <div className="container-page">
        <Reveal>
          <SectionHeader
            eyebrow="FAQ"
            title="Everything decision-makers ask before going live."
            description="Straight answers on deployment, security, channels and what it costs."
            align="center"
          />
        </Reveal>
        <Reveal delay={120}>
          <div className="mx-auto mt-16 max-w-3xl divide-y divide-border overflow-hidden rounded-[28px] border border-border bg-card">
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left transition hover:bg-surface/60"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-[17px] font-semibold tracking-tight text-foreground">
                      {item.q}
                    </span>
                    <span
                      className={`grid size-8 shrink-0 place-items-center rounded-full border border-border transition-transform duration-500 ${
                        isOpen ? "rotate-45 bg-foreground text-background" : "bg-white text-foreground"
                      }`}
                    >
                      <Plus className="size-4" />
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden px-7 transition-all duration-500 ${
                      isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <p className="min-h-0 max-w-2xl text-[14.5px] leading-relaxed text-mist">
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
