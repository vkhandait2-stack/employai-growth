import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const LINKS = {
  Platform: [
    { to: "/services", label: "Services" },
    { to: "/industries", label: "Industries" },
    { to: "/solutions", label: "Solutions" },
    { to: "/pricing", label: "Pricing" },
  ],
  Company: [
    { to: "/about", label: "About" },
    { to: "/case-studies", label: "Case Studies" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ],
  Legal: [
    { to: "/privacy", label: "Privacy Policy" },
    { to: "/terms", label: "Terms of Service" },
    { to: "/cookies", label: "Cookie Policy" },
    { to: "/refund", label: "Refund Policy" },
  ],
} as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_3fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5" aria-label="Indu Divine home">
              <Logo />
              <span className="font-display text-base font-bold tracking-tight">
                Indu Divine
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-mist">
              We don't sell software. We build AI Employees that help businesses grow —
              answering calls, qualifying leads, and automating workflows around the clock.
            </p>
            <div className="mt-6 space-y-1 text-sm">
              <div className="text-mist">
                Sales —{" "}
                <a
                  href="mailto:sales@indudivineai"
                  className="text-foreground hover:text-primary-glow"
                >
                  sales@indudivineai
                </a>
              </div>
              <div className="text-mist">
                Info —{" "}
                <a
                  href="mailto:info@indudivineai"
                  className="text-foreground hover:text-primary-glow"
                >
                  info@indudivineai
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {Object.entries(LINKS).map(([heading, items]) => (
              <div key={heading}>
                <h5 className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground">
                  {heading}
                </h5>
                <ul className="mt-4 space-y-2.5">
                  {items.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className="text-sm text-mist transition hover:text-foreground"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-mist">
            © {new Date().getFullYear()} Indu Divine AI Automation. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-mist">
            <span className="size-1.5 animate-pulse-dot rounded-full bg-success" />
            All AI Employees Operational
          </div>
        </div>
      </div>
    </footer>
  );
}
