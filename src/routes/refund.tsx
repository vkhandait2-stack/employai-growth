import { createFileRoute } from "@tanstack/react-router";
import { buildLegalRoute } from "./privacy";

export const Route = createFileRoute("/refund")(
  buildLegalRoute({
    slug: "refund",
    title: "Refund & Cancellation Policy",
    metaTitle: "Refund & Cancellation Policy | Indu Divine AI Automation",
    description:
      "How refunds, cancellations and termination are handled for Indu Divine AI services.",
    sections: [
      {
        heading: "Service Engagements",
        body: (
          <p>
            Our engagements are scoped through individual service agreements. Refund and
            cancellation terms are defined in the agreement you sign for your project.
          </p>
        ),
      },
      {
        heading: "Cancellation",
        body: (
          <p>
            You may cancel ongoing services in accordance with the notice period defined in
            your service agreement. Any pre-paid fees for work not yet delivered may be
            refunded as applicable.
          </p>
        ),
      },
      {
        heading: "Contact",
        body: (
          <p>
            For refund or cancellation requests, email{" "}
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
