import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, Mic } from "lucide-react";

/**
 * Premium sticky mobile CTA — appears after the user scrolls past the hero.
 * Glass surface, soft elevation, safe-area aware.
 */
export function MobileCTABar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(env(safe-area-inset-bottom),12px)] pt-3 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 pointer-events-none"
      }`}
      aria-hidden={!visible}
    >
      <div
        className="glass-panel flex items-center gap-2 p-2"
        style={{ boxShadow: "0 12px 40px -10px oklch(0.22 0.04 260 / 0.18)" }}
      >
        <Link
          to="/contact"
          className="inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-full bg-foreground text-[13.5px] font-semibold text-background transition active:scale-[0.98]"
        >
          Book free demo
          <ArrowUpRight className="size-3.5" />
        </Link>
        <Link
          to="/contact"
          aria-label="Talk to AI"
          className="grid size-11 place-items-center rounded-full border border-border bg-white text-foreground transition active:scale-[0.96]"
        >
          <Mic className="size-4" />
        </Link>
      </div>
    </div>
  );
}
