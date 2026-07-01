import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/solutions", label: "How It Works" },
  { to: "/pricing", label: "Pricing" },
  { to: "/case-studies", label: "Customers" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

const CAL = "https://calendly.com/vaishk1212/30min";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? "border-b border-white/8 bg-[#0F172A]/85 backdrop-blur-2xl backdrop-saturate-150"
          : "border-b border-transparent bg-[#0F172A]/40 backdrop-blur-md"
      }`}
    >
      <div
        className={`container-page flex items-center justify-between gap-6 transition-[height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled ? "h-14 sm:h-16" : "h-16 sm:h-[76px]"
        }`}
      >
        <Link to="/" className="flex items-center gap-2.5" aria-label="Indu Divine AI home">
          <Logo className={`${scrolled ? "size-7" : "size-8"} transition-all duration-500`} />
          <span className="font-display text-[15px] font-bold tracking-tight text-white">
            Indu Divine <span className="text-gradient-gold">AI</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-3 py-1.5 text-[13px] font-medium text-mist transition-colors duration-300 hover:text-white"
              activeProps={{ className: "text-white" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <a
            href={CAL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-9 items-center justify-center gap-1.5 rounded-full border border-[#FFD700]/50 bg-transparent px-4 text-[13px] font-semibold text-white transition-all duration-300 hover:-translate-y-px hover:bg-[#FFD700]/8 hover:shadow-[0_0_24px_-4px_rgba(255,215,0,0.5)]"
          >
            Start Free Trial
            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="xl:hidden">
          <div className="container-page border-t border-white/8 pb-8 pt-4">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-mist transition hover:bg-white/5 hover:text-white"
                  activeProps={{ className: "text-white bg-white/5" }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <a
              href={CAL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-primary mt-6 w-full"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
