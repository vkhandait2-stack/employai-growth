import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { CTASection } from "../components/site/CTASection";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Custom AI Solutions for Your Business | Indu Divine" },
      {
        name: "description",
        content:
          "Flexible AI plans customized for your business size, workflows and automation goals. Request pricing or book a free demo.",
      },
      { property: "og:title", content: "Pricing | Indu Divine" },
      {
        property: "og:description",
        content: "Starter, Growth and Enterprise plans — customized to your business.",
      },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

const PLANS = [
  {
    name: "Starter",
    description: "For small businesses beginning their AI journey.",
    features: ["AI Consultation", "Business Analysis", "Essential AI Automation", "Standard Support"],
    cta: "Request Quote",
    highlight: false,
  },
  {
    name: "Growth",
    description: "For growing companies automating customer comms and sales.",
    features: [
      "Multiple AI Employees",
      "CRM Integration",
      "WhatsApp Automation",
      "Workflow Automation",
      "Analytics",
    ],
    cta: "Talk To Sales",
    highlight: true,
  },
  {
    name: "Enterprise",
    description: "For organizations automating across multiple departments.",
    features: [
      "Custom AI Solutions",
      "Enterprise Integrations",
      "Dedicated Account Manager",
      "Advanced Security",
      "Ongoing Optimization",
    ],
    cta: "Book Strategy Call",
    highlight: false,
  },
];

function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Flexible AI solutions designed around your business."
        description="Every business has different requirements. Instead of fixed packages, we craft customized AI solutions based on your size, workflows and automation goals."
        primaryCta={{ to: "/contact", label: "Request Pricing" }}
      />
      <section className="py-20 sm:py-28">
        <div className="container-page grid gap-5 md:grid-cols-3">
          {PLANS.map((p) => (
            <article
              key={p.name}
              className={`surface-card relative flex flex-col p-8 ${
                p.highlight
                  ? "border-primary/50 shadow-glow"
                  : ""
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl font-bold text-foreground">{p.name}</h3>
              <p className="mt-2 text-sm text-mist">{p.description}</p>
              <div className="my-6 h-px bg-border" />
              <ul className="flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary-glow" /> {f}
                  </li>
                ))}
              </ul>
              {p.cta === "Talk To Sales" ? (
                <Link
                  to="/contact"
                  className={`mt-8 inline-flex h-11 items-center justify-center rounded-full text-sm font-semibold transition ${
                    p.highlight
                      ? "bg-primary text-primary-foreground shadow-glow hover:opacity-90"
                      : "border border-border-strong bg-surface text-foreground hover:bg-surface-elevated"
                  }`}
                >
                  {p.cta}
                </Link>
              ) : (
                <a
                  href="https://calendly.com/vaishk1212/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex h-11 items-center justify-center rounded-full text-sm font-semibold transition ${
                    p.highlight
                      ? "bg-primary text-primary-foreground shadow-glow hover:opacity-90"
                      : "border border-border-strong bg-surface text-foreground hover:bg-surface-elevated"
                  }`}
                >
                  {p.cta}
                </a>
              )}
            </article>
          ))}
        </div>

        <div className="container-page mt-20 max-w-3xl text-center">
          <p className="eyebrow mx-auto">Why no fixed prices?</p>
          <h2 className="mt-5 font-display text-2xl font-bold text-foreground sm:text-3xl">
            Every business has unique workflows and customer journeys.
          </h2>
          <p className="mt-4 text-base text-mist">
            We provide customized proposals after understanding your goals — so you pay for
            outcomes, not generic packages.
          </p>
        </div>
      </section>
      <CTASection />
    </>
  );
}
