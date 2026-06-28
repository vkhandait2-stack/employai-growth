import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageHero } from "../components/site/PageHero";

interface LegalSpec {
  slug: "privacy" | "terms" | "cookies" | "refund";
  title: string;
  metaTitle: string;
  description: string;
  sections: { heading: string; body: ReactNode }[];
}

export function buildLegalRoute(spec: LegalSpec) {
  return {
    head: () => ({
      meta: [
        { title: spec.metaTitle },
        { name: "description", content: spec.description },
        { property: "og:title", content: spec.metaTitle },
        { property: "og:description", content: spec.description },
        { property: "og:url", content: `/${spec.slug}` },
      ],
      links: [{ rel: "canonical", href: `/${spec.slug}` }],
    }),
    component: function LegalPage() {
      return (
        <>
          <PageHero
            eyebrow="Legal"
            title={spec.title}
            description={spec.description}
            primaryCta={{ to: "/contact", label: "Contact Us" }}
            secondaryCta={{ to: "/", label: "Back to Home" }}
          />
          <section className="py-20 sm:py-24">
            <div className="container-page max-w-3xl space-y-10">
              {spec.sections.map((s) => (
                <div key={s.heading}>
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    {s.heading}
                  </h2>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-mist">
                    {s.body}
                  </div>
                </div>
              ))}
              <p className="border-t border-border pt-6 text-xs text-mist">
                Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </p>
            </div>
          </section>
        </>
      );
    },
  };
}

// Default export consumed by Route below for the privacy page
export const Route = createFileRoute("/privacy")(
  buildLegalRoute({
    slug: "privacy",
    title: "Privacy Policy",
    metaTitle: "Privacy Policy | Indu Divine AI Automation",
    description:
      "How Indu Divine AI Automation collects, uses, stores and protects information when you use our website and services.",
    sections: [
      {
        heading: "Information We Collect",
        body: (
          <p>
            We collect information you provide directly (such as your name, email, phone
            number and company) when you contact us, request a demo or sign up for our
            services. We also collect basic technical information automatically (such as
            browser type and pages visited) to improve our website.
          </p>
        ),
      },
      {
        heading: "How We Use Information",
        body: (
          <p>
            We use information to respond to enquiries, provide and improve our services,
            communicate about products and updates, and meet legal obligations. We do not
            sell your personal information.
          </p>
        ),
      },
      {
        heading: "Data Storage & Security",
        body: (
          <p>
            We follow industry-standard security practices including encrypted storage,
            role-based access controls and audit logging. Data is stored with reputable
            cloud providers in secure infrastructure.
          </p>
        ),
      },
      {
        heading: "Sharing Information",
        body: (
          <p>
            We share information only with service providers that help us operate our
            business (e.g. hosting, analytics, communications), and only as necessary. We
            require these partners to handle information securely.
          </p>
        ),
      },
      {
        heading: "Your Rights",
        body: (
          <p>
            You can request access, correction or deletion of your personal information at
            any time by emailing{" "}
            <a className="text-primary-glow" href="mailto:info@indudivineai">
              info@indudivineai
            </a>
            .
          </p>
        ),
      },
      {
        heading: "Contact",
        body: (
          <p>
            Questions about this policy? Email{" "}
            <a className="text-primary-glow" href="mailto:info@indudivineai">
              info@indudivineai
            </a>
            .
          </p>
        ),
      },
    ],
  }),
);
