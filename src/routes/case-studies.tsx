import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { CASE_STUDIES } from "../lib/site-data";
import { PageHero } from "../components/site/PageHero";
import { CTASection } from "../components/site/CTASection";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — AI Automation Results | Indu Divine" },
      {
        name: "description",
        content:
          "See how businesses across Healthcare, Real Estate, Education, Finance and Manufacturing use Indu Divine AI Employees to automate communication and grow faster.",
      },
      { property: "og:title", content: "Case Studies | Indu Divine" },
      {
        property: "og:description",
        content: "Real businesses, real AI Employees, real outcomes.",
      },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Real businesses. Real AI Employees. Real outcomes."
        description="A look at how teams across industries deploy our AI Employees to transform customer communication and operations."
      />
      <section className="py-20 sm:py-28">
        <div className="container-page space-y-6">
          {CASE_STUDIES.map((cs) => (
            <article key={cs.slug} className="surface-card p-8 sm:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-primary-glow">
                  {cs.industry}
                </span>
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl">
                {cs.title}
              </h2>
              <div className="mt-8 grid gap-6 lg:grid-cols-3">
                <Block label="Challenge" body={cs.challenge} />
                <Block label="Solution" body={cs.solution} />
                <Block label="Implementation" body={cs.implementation} />
              </div>
              <div className="mt-6 rounded-2xl border border-border bg-background/40 p-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
                  Business Outcome
                </div>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {cs.outcomes.map((o) => (
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

function Block({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist">{label}</div>
      <p className="mt-2 text-sm leading-relaxed text-foreground">{body}</p>
    </div>
  );
}
