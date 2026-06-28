import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { CTASection } from "../components/site/CTASection";
import { TRUST_PILLARS } from "../lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — We Build AI Employees That Help Businesses Grow | Indu Divine" },
      {
        name: "description",
        content:
          "Indu Divine AI Automation helps organizations transform customer communication, sales and operations using intelligent AI Employees.",
      },
      { property: "og:title", content: "About | Indu Divine" },
      {
        property: "og:description",
        content: "Our mission, vision, values and why we build AI Employees.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  "Innovation",
  "Trust",
  "Transparency",
  "Reliability",
  "Business First",
  "Continuous Improvement",
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We build AI Employees that help businesses grow."
        description="Indu Divine AI Automation helps organizations transform customer communication, sales processes and operational workflows using intelligent AI Employees."
      />
      <section className="py-20 sm:py-28">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <Card title="Our Mission">
            Enable businesses to work smarter by deploying intelligent AI Employees that
            automate communication, sales and operations.
          </Card>
          <Card title="Our Vision">
            Become a trusted global provider of enterprise AI automation solutions.
          </Card>
        </div>

        <div className="container-page mt-16">
          <div className="surface-card p-8 sm:p-10">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary-glow">
              Our Values
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {VALUES.map((v) => (
                <div
                  key={v}
                  className="rounded-xl border border-border bg-background/40 p-4 text-sm font-medium text-foreground"
                >
                  {v}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container-page mt-16">
          <div className="surface-card p-8 sm:p-10">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary-glow">
              Why Choose Us
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {TRUST_PILLARS.map((v) => (
                <div
                  key={v}
                  className="rounded-xl border border-border bg-background/40 p-4 text-sm font-medium text-foreground"
                >
                  {v}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="surface-card p-8">
      <h3 className="font-display text-xl font-bold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-mist sm:text-base">{children}</p>
    </div>
  );
}
