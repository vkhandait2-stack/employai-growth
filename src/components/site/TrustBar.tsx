import { Shield, Lock, Clock4, Zap, LifeBuoy, Briefcase } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const PILLARS = [
  { icon: Shield, title: "Enterprise Ready", desc: "Built for regulated industries with audit-grade controls." },
  { icon: Lock, title: "Secure Infrastructure", desc: "Encryption in transit and at rest. Regional data residency." },
  { icon: Clock4, title: "24/7 Availability", desc: "Always-on coverage with 99.99% uptime SLA." },
  { icon: Zap, title: "Fast Deployment", desc: "Go live in 2–4 weeks with measurable outcomes." },
  { icon: LifeBuoy, title: "Dedicated Support", desc: "Named success engineer for every enterprise account." },
  { icon: Briefcase, title: "Business-Focused AI", desc: "Trained on your products, tone and customer journey." },
];

export function TrustBar() {
  return (
    <section className="py-28 sm:py-36">
      <div className="container-page">
        <Reveal>
          <SectionHeader
            eyebrow="Why teams choose us"
            title="The trust layer behind every conversation."
            description="Six commitments that make Indu Divine AI safe to deploy in customer-facing roles."
            align="center"
          />
        </Reveal>
        <div className="mt-16 grid gap-px overflow-hidden rounded-[28px] border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 50}>
              <div className="group h-full bg-card p-8 transition hover:bg-white">
                <span className="grid size-11 place-items-center rounded-2xl bg-[color-mix(in_oklab,var(--primary)_10%,white)] text-primary ring-1 ring-inset ring-[color-mix(in_oklab,var(--primary)_18%,transparent)] transition group-hover:scale-105">
                  <p.icon className="size-5" strokeWidth={1.8} />
                </span>
                <h3 className="mt-6 font-display text-lg font-semibold tracking-tight text-foreground">
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
