import { createFileRoute } from "@tanstack/react-router";
import { buildLegalRoute } from "./privacy";

export const Route = createFileRoute("/cookies")(
  buildLegalRoute({
    slug: "cookies",
    title: "Cookie Policy",
    metaTitle: "Cookie Policy | Indu Divine AI Automation",
    description:
      "How we use cookies and similar technologies on the Indu Divine website to improve your experience.",
    sections: [
      {
        heading: "What Are Cookies",
        body: (
          <p>
            Cookies are small text files stored on your device that help websites work and
            improve user experience.
          </p>
        ),
      },
      {
        heading: "How We Use Cookies",
        body: (
          <p>
            We use essential cookies for site functionality and analytics cookies to
            understand how visitors use our site so we can improve it. We do not use
            advertising cookies.
          </p>
        ),
      },
      {
        heading: "Managing Cookies",
        body: (
          <p>
            You can control cookies through your browser settings. Disabling some cookies
            may affect site functionality.
          </p>
        ),
      },
    ],
  }),
);
