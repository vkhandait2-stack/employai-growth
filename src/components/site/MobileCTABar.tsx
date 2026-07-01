import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";

const CAL = "https://calendly.com/vaishk1212/30min";

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
      className={`fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(env(safe-area-inset-bottom),12px)] pt-3 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] xl:hidden ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 pointer-events-none"
      }`}
      aria-hidden={!visible}
    >
      <div className="glass-panel flex items-center gap-2 p-2">
        <a
          href={CAL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-full text-[13.5px] font-semibold"
          style={{
            background: "linear-gradient(135deg, #FFD700, #FFB800)",
            color: "#0F172A",
            boxShadow: "0 10px 24px -6px rgba(255,215,0,0.5)",
          }}
        >
          Start Free Trial
          <ArrowUpRight className="size-3.5" />
        </a>
        <Link
          to="/contact"
          aria-label="Contact"
          className="grid size-11 place-items-center rounded-full border border-white/14 bg-white/5 text-white transition active:scale-[0.96]"
        >
          <MessageCircle className="size-4" />
        </Link>
      </div>
    </div>
  );
}
