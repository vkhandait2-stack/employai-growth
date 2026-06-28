import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, AlertCircle, Sparkles, TrendingUp, ArrowUpRight } from "lucide-react";
import { INDUSTRIES } from "../lib/site-data";
import { PageHero } from "../components/site/PageHero";
import { CTASection } from "../components/site/CTASection";
import { Reveal } from "../components/site/Reveal";

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
        title={<>AI built for the way <span className="text-gradient-aurora">your industry works.</span></>}
        description="Every industry has different challenges. Our AI Employees are trained to understand your business processes, customer interactions and operational workflows."
      />
      <section className="py-24 sm:py-32">
        <div className="container-page space-y-6">
          {INDUSTRIES.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <Reveal key={ind.slug} delay={i * 40}>
                <article className="surface-card surface-card-hover grid gap-10 p-8 sm:p-10 lg:grid-cols-[0.9fr_2.1fr] lg:p-12">
                  <div>
                    <span className="grid size-12 place-items-center rounded-2xl bg-[color-mix(in_oklab,var(--primary)_10%,white)] text-primary ring-1 ring-inset ring-[color-mix(in_oklab,var(--primary)_18%,transparent)]">
                      <Icon className="size-5" strokeWidth={1.8} />
                    </span>
                    <div className="mt-6 font-mono text-[10.5px] uppercase tracking-[0.2em] text-mist">
                      0{(i % 9) + 1} · Industry
                    </div>
                    <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.025em] text-foreground sm:text-4xl">
                      AI for {ind.name}
                    </h2>
                    <p className="mt-4 text-[15px] leading-relaxed text-mist">{ind.blurb}</p>
                    <Link
                      to="/contact"
                      className="group mt-7 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-primary"
                    >
                      Talk to a {ind.name.toLowerCase()} specialist
                      <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-3">
                    <Column
                      title="Business challenges"
                      tone="destructive"
                      icon={<AlertCircle className="size-3.5" />}
                      items={ind.challenges}
                    />
                    <Column
                      title="Recommended AI Employees"
                      tone="primary"
                      icon={<Sparkles className="size-3.5" />}
                      items={ind.solutions}
                    />
                    <Column
                      title="Expected outcomes"
                      tone="success"
                      icon={<TrendingUp className="size-3.5" />}
                      items={ind.benefits}
                      check
                    />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border bg-surface/50 py-24">
        <div className="container-page mx-auto max-w-3xl text-center">
          <p className="eyebrow mx-auto">Why industry-specific AI?</p>
          <h2 className="mt-6 display-2 text-foreground">
            Generic chatbots give generic answers.
          </h2>
          <p className="mt-6 lede">
            Our AI Employees are customized for your industry, business goals and customer
            journey. Each deployment is trained using your knowledge base for relevant,
            accurate responses.
          </p>
        </div>
      </section>

      <CTASection title="Let's build AI Employees for your industry." />
    </>
  );
}

function Column({
  title,
  items,
  tone,
  icon,
  check,
}: {
  title: string;
  items: string[];
  tone: "destructive" | "primary" | "success";
  icon: React.ReactNode;
  check?: boolean;
}) {
  const toneClass =
    tone === "destructive"
      ? "bg-destructive/10 text-destructive"
      : tone === "success"
        ? "bg-success/10 text-success"
        : "bg-primary/10 text-primary";
  return (
    <div className="rounded-2xl border border-border bg-white/70 p-5 backdrop-blur">
      <div className="flex items-center gap-2">
        <span className={`grid size-6 place-items-center rounded-full ${toneClass}`}>{icon}</span>
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist">{title}</div>
      </div>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-[13.5px] leading-relaxed text-foreground/85">
            {check ? (
              <Check className="mt-0.5 size-3.5 shrink-0 text-success" />
            ) : (
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-foreground/30" />
            )}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
