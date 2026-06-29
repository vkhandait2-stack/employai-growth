import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/solutions", label: "Solutions" },
  { to: "/case-studies", label: "Customers" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "Company" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? "border-b border-border bg-background/75 backdrop-blur-2xl backdrop-saturate-150"
          : "border-b border-transparent bg-background/30 backdrop-blur-md"
      }`}
    >
      <div
        className={`container-page flex items-center justify-between gap-6 transition-[height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled ? "h-14 sm:h-16" : "h-16 sm:h-[76px]"
        }`}
      >
        <Link to="/" className="flex items-center gap-2.5" aria-label="Indu Divine AI home">
          <Logo className={`${scrolled ? "size-7" : "size-8"} transition-all duration-500`} />
          <span className="font-display text-[15px] font-semibold tracking-[-0.01em] text-foreground">
            Indu Divine <span className="text-mist">AI</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-3.5 py-1.5 text-[13px] font-medium text-mist transition-colors duration-300 hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            to="/contact"
            className="rounded-full px-3.5 py-1.5 text-[13px] font-medium text-mist transition hover:text-foreground"
          >
            Sign in
          </Link>
          <a
            href="https://calendly.com/vaishk1212/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-9 items-center justify-center gap-1.5 rounded-full bg-foreground px-4 text-[13px] font-semibold text-background transition-all duration-300 hover:-translate-y-px hover:bg-primary hover:shadow-[0_10px_28px_-10px_color-mix(in_oklab,var(--primary)_70%,transparent)]"
          >
            Book a demo
            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 place-items-center rounded-full border border-border bg-white/80 text-foreground backdrop-blur lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* scroll progress hairline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px overflow-hidden"
      >
        <div
          className="h-full origin-left transition-transform duration-150 ease-out"
          style={{
            transform: `scaleX(${progress})`,
            background:
              "linear-gradient(90deg, var(--primary), var(--accent-cyan))",
          }}
        />
      </div>




      {open && (
        <div className="lg:hidden">
          <div className="container-page border-t border-border pb-8 pt-4">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-mist transition hover:bg-surface hover:text-foreground"
                  activeProps={{ className: "text-foreground bg-surface" }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-6 w-full"
            >
              Book a demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
