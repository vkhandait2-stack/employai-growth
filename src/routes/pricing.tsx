import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowUpRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { PageHero } from "../components/site/PageHero";
import { CTASection } from "../components/site/CTASection";
import { FAQSection } from "../components/site/FAQSection";
import { Reveal } from "../components/site/Reveal";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Indu Divine AI" },
      {
        name: "description",
        content:
          "Simple, transparent pricing for AI Employees. Starter $599/mo, Professional $1,499/mo, Enterprise custom. No long-term contracts.",
      },
      { property: "og:title", content: "Pricing | Indu Divine AI" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

const CAL = "https://calendly.com/vaishk1212/30min";

const PLANS = [
  {
    name: "Starter",
    monthly: 599,
    annual: 479,
    setup: 299,
    tag: "Small businesses, freelancers, 1-person teams",
    features: [
      "1 AI Agent (WhatsApp OR Email OR Voice)",
      "5,000 minutes/month for Voice",
      "Unlimited WhatsApp & Email messages",
      "Basic analytics dashboard",
      "Email support (24-hour response)",
      "48-hour implementation",
      "Monthly updates & improvements",
    ],
    savings: {
      replaces: "1 part-time employee",
      normal: "$2,500/month",
      saves: "$1,901/month",
      payback: "8 days",
    },
    perfect: [
      "You handle 100–500 messages/month",
      "You want to start small",
      "Budget under $1,000/month for automation",
    ],
    cta: "Start 7-Day Free Trial",
    href: CAL,
    highlight: false,
  },
  {
    name: "Professional",
    monthly: 1499,
    annual: 1199,
    setup: 599,
    tag: "Growing businesses, teams, multiple departments",
    features: [
      "3 AI Agents (WhatsApp + Voice + Email)",
      "25,000 minutes/month for Voice",
      "Unlimited WhatsApp & Email messages",
      "Advanced analytics & reporting",
      "Priority 24/7 phone support",
      "Custom AI training for your business",
      "A/B testing for messages & responses",
      "24-hour implementation",
      "Weekly strategy calls with specialist",
    ],
    savings: {
      replaces: "3 full-time employees",
      normal: "$7,500/month",
      saves: "$6,001/month",
      payback: "9 days",
    },
    perfect: [
      "You handle 1,000–10,000 messages/month",
      "You want complete automation",
      "You have multiple customer channels",
      "You want dedicated support",
    ],
    cta: "Start 7-Day Free Trial",
    href: CAL,
    highlight: true,
    badge: "⭐ Most Popular",
  },
  {
    name: "Enterprise",
    monthly: 3999,
    annual: 3199,
    setup: 1299,
    tag: "Large companies, agencies, multi-location businesses",
    features: [
      "Unlimited AI Agents",
      "100,000+ minutes/month",
      "Unlimited messages on all channels",
      "Custom integrations (CRM, Zapier, payment, inventory)",
      "Dedicated account manager",
      "Custom AI model training",
      "White-label options (your branding everywhere)",
      "Multi-language support",
      "API access for custom integrations",
      "Same-day implementation",
      "24/7 phone + Slack support",
      "Quarterly business reviews",
    ],
    savings: {
      replaces: "10+ full-time employees",
      normal: "$25,000+/month",
      saves: "$21,000+/month",
      payback: "5 days",
    },
    perfect: [
      "You handle 50,000+ messages/month",
      "You need complete customization",
      "You have complex requirements",
    ],
    cta: "Schedule Enterprise Demo",
    href: CAL,
    highlight: false,
    badge: "Customizable",
  },
];

const MINUTE_PACKS = [
  { label: "+5,000 minutes/month", price: "$29/mo" },
  { label: "+20,000 minutes/month", price: "$79/mo" },
  { label: "+50,000 minutes/month", price: "$199/mo" },
  { label: "Pay-as-you-go overage", price: "$0.04/min" },
];

const ADDONS = [
  { label: "White-Label Branding", desc: "Your logo, colors, domain", price: "+$299/mo" },
  { label: "Advanced Analytics", desc: "Real-time dashboards & AI insights", price: "+$199/mo" },
  { label: "Custom AI Model", desc: "AI trained specifically for your niche", price: "+$499/mo" },
  { label: "CRM Integrations", desc: "Salesforce, HubSpot, Pipedrive, etc.", price: "+$199/mo" },
  { label: "24/7 Dedicated Support", desc: "Priority support & strategy calls", price: "+$99/mo" },
  { label: "Priority Implementation", desc: "24-hour setup instead of 48-hour", price: "+$149 one-time" },
];

function PricingPage() {
  const [annual, setAnnual] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Pricing That Grows With You"
        description="No long-term contracts. Cancel anytime. All plans include 24/7 support and a 30-day money-back guarantee."
      />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <Reveal className="flex justify-center">
            <div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur">
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

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {PLANS.map((p, i) => {
              const price = annual ? p.annual : p.monthly;
              return (
                <Reveal key={p.name} delay={i * 80}>
                  <article
                    className={`glass-card relative flex h-full flex-col p-8 ${p.highlight ? "glow-gold" : ""}`}
                    style={p.highlight ? { borderColor: "rgba(255,215,0,0.5)" } : undefined}
                  >
                    {p.badge && (
                      <span
                        className={`absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] ${
                          p.highlight
                            ? "bg-gradient-to-r from-[#FFD700] to-[#FFB800] text-[#0F172A]"
                            : "border border-[#0EA5E9]/40 bg-[#0EA5E9]/10 text-[#0EA5E9]"
                        }`}
                      >
                        {p.badge}
                      </span>
                    )}
                    <h3 className="font-display text-2xl font-bold text-white">{p.name}</h3>
                    <p className="mt-1 text-[13px] text-mist">{p.tag}</p>

                    <div className="mt-6 flex items-baseline gap-1.5">
                      <span className="font-display text-[46px] font-bold text-gradient-gold">
                        ${price.toLocaleString()}
                      </span>
                      <span className="text-[13px] text-mist">/mo</span>
                    </div>
                    <p className="text-[12px] text-mist">
                      + ${p.setup} one-time setup {annual && <span className="text-success">· billed annually</span>}
                    </p>

                    <ul className="mt-6 space-y-2.5">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-[13.5px] text-white/85">
                          <Check className="mt-0.5 size-4 shrink-0 text-success" strokeWidth={3} />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 rounded-xl border border-white/8 bg-white/3 p-4 text-[12.5px]">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FFD700]">What you save</p>
                      <div className="mt-2 space-y-1 text-white/80">
                        <p>Replaces {p.savings.replaces}</p>
                        <p>Normal cost <span className="text-white">{p.savings.normal}</span></p>
                        <p>Your savings <span className="font-bold text-success">{p.savings.saves}</span></p>
                        <p>ROI payback in <span className="text-white">{p.savings.payback}</span></p>
                      </div>
                    </div>

                    <div className="mt-4 text-[12px] text-mist">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist">Perfect if</p>
                      <ul className="mt-1.5 space-y-1">
                        {p.perfect.map((x) => (
                          <li key={x} className="flex items-start gap-1.5">
                            <Sparkles className="mt-0.5 size-3 shrink-0 text-[#0EA5E9]" />
                            {x}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-auto pt-8 ${
                        p.highlight ? "" : ""
                      }`}
                    >
                      <span
                        className={`inline-flex h-11 w-full items-center justify-center gap-1.5 rounded-full font-display text-[14px] font-semibold transition ${
                          p.highlight
                            ? "bg-gradient-to-r from-[#FFD700] to-[#FFB800] text-[#0F172A] shadow-[0_10px_28px_-8px_rgba(255,215,0,0.55)] hover:-translate-y-0.5"
                            : "border border-white/16 bg-white/5 text-white hover:bg-white/10"
                        }`}
                      >
                        {p.cta} <ArrowUpRight className="size-4" />
                      </span>
                    </a>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <p className="mt-8 text-center text-[13px] text-mist">
            No hidden fees. 30-day money-back guarantee. Prices in USD.
          </p>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mx-auto">Add-ons</p>
            <h2 className="mt-6 display-2 text-white">Extend your plan</h2>
            <p className="mt-4 lede">Extra minutes and premium capabilities you can add to any plan.</p>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <div className="glass-card p-7">
                <h3 className="font-display text-lg font-bold text-white">Extra Minute Packs</h3>
                <ul className="mt-4 divide-y divide-white/8">
                  {MINUTE_PACKS.map((m) => (
                    <li key={m.label} className="flex items-center justify-between py-3 text-[14px]">
                      <span className="text-white/85">{m.label}</span>
                      <span className="font-display font-bold text-[#FFD700]">{m.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="glass-card p-7">
                <h3 className="font-display text-lg font-bold text-white">Premium Add-ons</h3>
                <ul className="mt-4 divide-y divide-white/8">
                  {ADDONS.map((a) => (
                    <li key={a.label} className="flex items-start justify-between gap-4 py-3">
                      <div>
                        <p className="text-[14px] font-semibold text-white">{a.label}</p>
                        <p className="text-[12.5px] text-mist">{a.desc}</p>
                      </div>
                      <span className="whitespace-nowrap font-display font-bold text-[#FFD700]">{a.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="mt-10 text-center">
            <Link to="/contact" className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#FFD700] hover:gap-2.5">
              Talk to sales for custom bundles <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <FAQSection />
      <CTASection />
    </>
  );
}
