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
    { to: "/case-studies", label: "Customers" },
    { to: "/blog", label: "Insights" },
    { to: "/contact", label: "Contact" },
  ],
  Legal: [
    { to: "/privacy", label: "Privacy" },
    { to: "/terms", label: "Terms" },
    { to: "/cookies", label: "Cookies" },
    { to: "/refund", label: "Refund" },
  ],
} as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background pb-24 lg:pb-0">
      <div className="container-page py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_3fr]">
          <div>
            <Link to="/" className="flex items-center gap-3" aria-label="Indu Divine AI home">
              <Logo className="size-10" />
              <span className="font-display text-base font-semibold tracking-tight">
                Indu Divine <span className="text-mist">AI</span>
              </span>
            </Link>
            <p className="mt-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-mist">
              Your AI Workforce Partner
            </p>
            <p className="mt-6 max-w-sm text-[14.5px] leading-relaxed text-mist">
              AI Employees that answer calls, qualify leads, automate WhatsApp and
              streamline operations — built for enterprises that measure success in outcomes.
            </p>
            <div className="mt-8 flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-mist">
              <span className="size-1.5 animate-pulse-dot rounded-full bg-success" />
              All systems operational
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {Object.entries(LINKS).map(([heading, items]) => (
              <div key={heading}>
                <h5 className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground">
                  {heading}
                </h5>
                <ul className="mt-5 space-y-3">
                  {items.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className="text-[14px] text-mist transition-colors duration-200 hover:text-foreground"
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

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-[12.5px] text-mist">
            © {new Date().getFullYear()} Indu Divine AI Automation. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-[12.5px] text-mist">
            <a href="mailto:sales@indudivineai" className="hover:text-foreground">sales@indudivineai</a>
            <span aria-hidden>·</span>
            <a href="mailto:info@indudivineai" className="hover:text-foreground">info@indudivineai</a>
          </div>
        </div>
      </div>

      {/* giant editorial wordmark */}
      <div
        aria-hidden
        className="container-page relative -mt-2 select-none overflow-hidden pb-10"
      >
        <div
          className="font-display font-semibold leading-[0.85] tracking-[-0.06em] text-transparent"
          style={{
            fontSize: "clamp(4rem, 18vw, 18rem)",
            WebkitTextStroke: "1px color-mix(in oklab, var(--foreground) 14%, transparent)",
            background:
              "linear-gradient(180deg, color-mix(in oklab, var(--foreground) 6%, transparent), transparent 85%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          INDU DIVINE AI
        </div>
      </div>
    </footer>
  );
}

