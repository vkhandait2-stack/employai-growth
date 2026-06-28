import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock } from "lucide-react";
import { BLOG_POSTS } from "../lib/site-data";
import { PageHero } from "../components/site/PageHero";
import { CTASection } from "../components/site/CTASection";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — AI Automation Insights | Indu Divine" },
      {
        name: "description",
        content:
          "Learn about AI Employees, voice AI, WhatsApp automation, CRM automation, and industry-specific AI for healthcare, real estate, finance and more.",
      },
      { property: "og:title", content: "Blog | Indu Divine" },
      {
        property: "og:description",
        content: "AI automation insights, guides and industry deep-dives.",
      },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="AI automation insights for modern businesses."
        description="Guides, frameworks and industry deep-dives on deploying AI Employees that deliver business outcomes."
      />
      <section className="py-20 sm:py-28">
        <div className="container-page grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((p) => (
            <article key={p.slug} className="surface-card surface-card-hover flex flex-col p-6">
              <div className="aspect-[16/10] rounded-xl border border-border bg-gradient-to-br from-primary/15 via-surface to-background" />
              <div className="mt-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-primary-glow">
                {p.category}
                <span className="flex items-center gap-1 text-mist">
                  <Clock className="size-3" /> {p.read}
                </span>
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-mist">
                A practical introduction to the topic with examples from real deployments.
              </p>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary-glow"
              >
                Read article →
              </Link>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
