import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You — We'll Be In Touch | Indu Divine" },
      { name: "description", content: "Thanks for reaching out. Our team will contact you shortly." },
      { name: "robots", content: "noindex" },
      { property: "og:url", content: "/thank-you" },
    ],
    links: [{ rel: "canonical", href: "/thank-you" }],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 hero-glow" aria-hidden />
      <div className="container-page relative grid place-items-center py-24 sm:py-32">
        <div className="surface-card max-w-xl p-10 text-center">
          <CheckCircle2 className="mx-auto size-12 text-success" />
          <h1 className="mt-6 font-display text-3xl font-bold text-gradient sm:text-4xl">
            Thank you!
          </h1>
          <p className="mt-4 text-base text-mist">
            Our AI Strategy Team has received your request. You'll receive a confirmation
            email and calendar invite shortly.
          </p>
          <ul className="mx-auto mt-6 max-w-sm space-y-2 text-left text-sm text-mist">
            <li>• Confirmation email</li>
            <li>• Calendar invite & meeting link</li>
            <li>• Reminder notification</li>
            <li>• Preparation guide</li>
          </ul>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-glow"
            >
              Back to Home
            </Link>
            <Link
              to="/services"
              className="inline-flex h-11 items-center justify-center rounded-full border border-border-strong bg-surface px-6 text-sm font-semibold text-foreground"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
