import { createFileRoute } from "@tanstack/react-router";
import { buildLegalRoute } from "./privacy";

export const Route = createFileRoute("/terms")(
  buildLegalRoute({
    slug: "terms",
    title: "Terms of Service",
    metaTitle: "Terms of Service | Indu Divine AI Automation",
    description:
      "The terms and conditions that govern your use of Indu Divine's website and AI services.",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: (
          <p>
            By accessing our website or using our services, you agree to these terms. If
            you do not agree, please do not use the services.
          </p>
        ),
      },
      {
        heading: "Use of Services",
        body: (
          <p>
            You agree to use our services lawfully and in accordance with any service
            agreement signed with us. You are responsible for any data you provide to be
            processed by AI Employees deployed on your behalf.
          </p>
        ),
      },
      {
        heading: "Intellectual Property",
        body: (
          <p>
            All content, branding and software on this website are owned by Indu Divine or
            its licensors. AI configurations created for clients are owned per the
            applicable service agreement.
          </p>
        ),
      },
      {
        heading: "Limitations of Liability",
        body: (
          <p>
            To the maximum extent permitted by law, Indu Divine is not liable for indirect,
            incidental or consequential damages arising from use of the services.
          </p>
        ),
      },
      {
        heading: "Changes to Terms",
        body: (
          <p>
            We may update these terms from time to time. Continued use of the services
            after changes constitutes acceptance of the updated terms.
          </p>
        ),
      },
    ],
  }),
);
