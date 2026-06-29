import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Mail, Send } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { FAQ_ITEMS } from "../lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Book a Free AI Demo | Indu Divine" },
      {
        name: "description",
        content:
          "Book a free demo, request pricing, or talk to our team. We'll help you design an AI workforce that fits your business.",
      },
      { property: "og:title", content: "Contact | Indu Divine" },
      { property: "og:description", content: "Talk to our AI strategy team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_ITEMS.slice(0, 6).map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().min(1, "Company is required").max(120),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(4, "Phone is required").max(40),
  industry: z.string().trim().max(80),
  country: z.string().trim().max(80),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build your AI workforce."
        description="Tell us about your business and we'll design an AI workforce that fits. Most demos are booked within 1 business day."
        primaryCta={{ to: "https://calendly.com/vaishk1212/30min", label: "Book Free Demo" }}
      />
      <section className="py-20 sm:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <ContactDetails />
          <ContactForm />
        </div>
      </section>
      <FAQSection />
    </>
  );
}

function ContactDetails() {
  return (
    <aside className="space-y-6">
      <div className="surface-card p-6">
        <Mail className="size-5 text-primary-glow" />
        <div className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-mist">
          Email
        </div>
        <div className="mt-2 space-y-1 text-sm text-foreground">
          <div>
            Sales —{" "}
            <a className="text-primary-glow" href="mailto:sales@indudivineai">
              sales@indudivineai
            </a>
          </div>
          <div>
            Info —{" "}
            <a className="text-primary-glow" href="mailto:info@indudivineai">
              info@indudivineai
            </a>
          </div>
        </div>
      </div>
      <div className="surface-card p-6">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist">
          Business Hours
        </div>
        <div className="mt-2 text-sm text-foreground">Monday – Saturday</div>
      </div>
      <div className="surface-card p-6">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist">
          What to expect
        </div>
        <ul className="mt-3 space-y-2 text-sm text-mist">
          <li>• Confirmation email within minutes</li>
          <li>• Discovery call scheduled in 24 hours</li>
          <li>• Tailored AI workforce proposal</li>
          <li>• Live AI Employee demonstration</li>
        </ul>
      </div>
    </aside>
  );
}

function ContactForm() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const result = schema.safeParse(data);
    if (!result.success) {
      const out: Record<string, string> = {};
      for (const issue of result.error.issues) {
        out[String(issue.path[0])] = issue.message;
      }
      setErrors(out);
      return;
    }
    setErrors({});
    setSubmitting(true);
    setTimeout(() => navigate({ to: "/thank-you" }), 400);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="surface-card p-8 sm:p-10"
      noValidate
    >
      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary-glow">
        Book Your Demo
      </div>
      <h2 className="mt-3 font-display text-2xl font-bold text-foreground">
        Tell us about your business
      </h2>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="name" error={errors.name} />
        <Field label="Company" name="company" error={errors.company} />
        <Field label="Business Email" name="email" type="email" error={errors.email} />
        <Field label="Phone Number" name="phone" type="tel" error={errors.phone} />
        <Field label="Industry" name="industry" error={errors.industry} />
        <Field label="Country" name="country" error={errors.country} />
      </div>
      <div className="mt-5">
        <label className="block">
          <span className="text-sm font-medium text-foreground">Message</span>
          <textarea
            name="message"
            rows={5}
            className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
            placeholder="What would you like to automate?"
          />
          {errors.message && (
            <span className="mt-1 block text-xs text-destructive">{errors.message}</span>
          )}
        </label>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90 disabled:opacity-60 sm:w-auto"
      >
        {submitting ? "Sending…" : "Schedule My Demo"} <Send className="size-4" />
      </button>
      <p className="mt-3 text-xs text-mist">
        We respect your privacy. Your information is used only to contact you about this
        enquiry.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-foreground">{label}</span>
      <input
        name={name}
        type={type}
        className="mt-2 h-11 w-full rounded-xl border border-border bg-background/60 px-4 text-sm text-foreground outline-none transition focus:border-primary"
      />
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

function FAQSection() {
  return (
    <section className="border-t border-border bg-surface/30 py-20">
      <div className="container-page">
        <p className="eyebrow">FAQ</p>
        <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold text-gradient sm:text-4xl">
          Answers to common questions
        </h2>
        <div className="mt-10 grid gap-3 lg:grid-cols-2">
          {FAQ_ITEMS.map((f) => (
            <details
              key={f.q}
              className="surface-card group p-5 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-start justify-between gap-4 text-sm font-semibold text-foreground">
                {f.q}
                <span className="mt-1 size-4 shrink-0 rotate-0 text-mist transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-mist">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
