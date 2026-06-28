import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { INDUSTRIES } from "../lib/site-data";
import { PageHero } from "../components/site/PageHero";
import { CTASection } from "../components/site/CTASection";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — AI Built for Your Sector | Indu Divine" },
      {
        name: "description",
        content:
          "AI Employees trained for Healthcare, Real Estate, Finance, Education, Manufacturing, Insurance, Hospitality, Legal and more.",
      },
      { property: "og:title", content: "Industries We Serve | Indu Divine" },
      {
        property: "og:description",
        content:
          "Industry-specific AI Employees that understand your business processes and customer journeys.",
      },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="AI Solutions Built for Your Industry."
        description="Every industry has different challenges. Our AI Employees are trained to understand your business processes, customer interactions and operational workflows."
      />
      <section className="py-20 sm:py-28">
        <div className="container-page space-y-8">
          {INDUSTRIES.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <article
                key={ind.slug}
                className="surface-card grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_1fr_1fr]"
              >
                <div>
                  <span className="grid size-11 place-items-center rounded-xl bg-primary/15 text-primary-glow ring-1 ring-primary/20">
                    <Icon className="size-5" />
                  </span>
                  <div className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-mist">
                    0{(i % 9) + 1} · Industry
                  </div>
                  <h2 className="mt-2 font-display text-2xl font-bold text-foreground">
                    AI for {ind.name}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{ind.blurb}</p>
                </div>
                <Column title="Challenges" items={ind.challenges} dot="bg-destructive" />
                <Column title="AI Solutions" items={ind.solutions} dot="bg-primary" check />
                <Column
                  title="Business Benefits"
                  items={ind.benefits}
                  dot="bg-success"
                  check
                  className="lg:col-span-3"
                />
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border bg-surface/30 py-20">
        <div className="container-page max-w-3xl text-center">
          <p className="eyebrow mx-auto">Why Industry-Specific AI?</p>
          <h2 className="mt-5 font-display text-3xl font-bold text-gradient sm:text-4xl">
            Generic chatbots give generic answers.
          </h2>
          <p className="mt-4 text-base text-mist sm:text-lg">
            Our AI Employees are customized for your industry, business goals and customer
            journey. Each deployment is trained using your knowledge base for relevant,
            accurate responses.
          </p>
        </div>
      </section>

      <CTASection title="Let's Build AI Employees for Your Industry." />
    </>
  );
}

function Column({
  title,
  items,
  dot,
  check,
  className = "",
}: {
  title: string;
  items: string[];
  dot: string;
  check?: boolean;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border border-border bg-background/40 p-5 ${className}`}>
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
        {title}
      </div>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-foreground">
            {check ? (
              <Check className="mt-0.5 size-4 shrink-0 text-primary-glow" />
            ) : (
              <span className={`mt-2 size-1.5 shrink-0 rounded-full ${dot}`} />
            )}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
