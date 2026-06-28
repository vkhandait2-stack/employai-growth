import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { SERVICES, SERVICE_ICONS } from "../lib/site-data";
import { PageHero } from "../components/site/PageHero";
import { CTASection } from "../components/site/CTASection";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "AI Services — AI Employees for Every Business Function | Indu Divine" },
      {
        name: "description",
        content:
          "Explore Indu Divine's AI services: AI Voice Receptionist, AI Sales Employee, WhatsApp AI, AI Appointment Setter, Outbound Calling, Workflow Automation and CRM Automation.",
      },
      { property: "og:title", content: "AI Services | Indu Divine" },
      {
        property: "og:description",
        content:
          "AI Employees for voice, sales, WhatsApp, scheduling, outbound calling and workflow automation.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>An AI Employee for every part of your business.</>}
        description="Each service is a fully managed AI Employee — trained on your business, integrated with your systems, and live 24/7."
      />
      <section className="py-20 sm:py-28">
        <div className="container-page space-y-6">
          {SERVICES.map((s, i) => {
            const Icon = SERVICE_ICONS[s.slug];
            return (
              <article
                key={s.slug}
                className="surface-card grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.4fr_1fr]"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-xl bg-primary/15 text-primary-glow ring-1 ring-primary/20">
                      {Icon && <Icon className="size-5" />}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist">
                      0{i + 1} · {s.role}
                    </span>
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-bold text-foreground sm:text-3xl">
                    {s.name}
                  </h2>
                  <p className="mt-2 text-base text-mist">{s.tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-mist">{s.description}</p>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
                  >
                    Explore {s.name} <ArrowRight className="size-4" />
                  </Link>
                </div>
                <ul className="space-y-2 rounded-2xl border border-border bg-background/40 p-5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="size-4 text-primary-glow" /> {b}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>
      <CTASection />
    </>
  );
}
