import {
  PhoneCall,
  MessageCircle,
  Database,
  BarChart3,
  CalendarCheck,
  Workflow,
  ArrowUpRight,
} from "lucide-react";

/**
 * Premium dashboard illustration for the hero.
 * Glass cards, soft gradients, animated waveform — no stock imagery, no robots.
 */
export function DashboardPreview({ className = "" }: { className?: string }) {
  const tiles = [
    { icon: PhoneCall, label: "Voice Calls", value: "1,284", delta: "+18%", tone: "primary" },
    { icon: MessageCircle, label: "WhatsApp", value: "2,876", delta: "+24%", tone: "success" },
    { icon: Database, label: "CRM", value: "542", delta: "synced", tone: "muted" },
    { icon: BarChart3, label: "Analytics", value: "92%", delta: "CSAT", tone: "primary" },
    { icon: CalendarCheck, label: "Appointments", value: "64", delta: "today", tone: "success" },
    { icon: Workflow, label: "Workflows", value: "37", delta: "active", tone: "muted" },
  ];

  return (
    <div className={`relative ${className}`}>
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute -inset-10 -z-10 rounded-[48px] opacity-70 blur-3xl"
        aria-hidden
        style={{
          background:
            "radial-gradient(45% 55% at 70% 20%, color-mix(in oklab, var(--primary) 35%, transparent), transparent 70%), radial-gradient(40% 50% at 20% 80%, color-mix(in oklab, var(--accent-cyan) 30%, transparent), transparent 70%)",
        }}
      />

      {/* main dashboard card */}
      <div className="glass-panel relative overflow-hidden p-5 sm:p-6">
        {/* top bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-[oklch(0.72_0.18_25)]" />
            <span className="size-2.5 rounded-full bg-[oklch(0.85_0.16_85)]" />
            <span className="size-2.5 rounded-full bg-[oklch(0.72_0.16_155)]" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist">
            indu-divine · live workspace
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-[10px] font-semibold text-success">
            <span className="size-1.5 animate-pulse-dot rounded-full bg-success" /> Online
          </span>
        </div>

        {/* hero stat row */}
        <div className="mt-5 grid gap-3 sm:grid-cols-[1.4fr_1fr]">
          <div
            className="relative overflow-hidden rounded-2xl p-5 text-white"
            style={{ background: "var(--gradient-primary)" }}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
              AI Workforce · this week
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <div className="font-display text-4xl font-semibold tracking-[-0.03em] tabular-nums">
                $128,420
              </div>
              <span className="rounded-full bg-white/15 px-2 py-0.5 text-[10.5px] font-semibold">
                +32%
              </span>
            </div>
            <div className="mt-1 text-[12px] text-white/75">Revenue influenced</div>

            {/* waveform */}
            <svg viewBox="0 0 240 56" className="mt-4 h-12 w-full" aria-hidden>
              <defs>
                <linearGradient id="wv" x1="0" x2="1">
                  <stop offset="0%" stopColor="white" stopOpacity="0.0" />
                  <stop offset="50%" stopColor="white" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="white" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              {Array.from({ length: 40 }).map((_, i) => {
                const h = 6 + Math.abs(Math.sin(i * 0.6) * 22 + Math.cos(i * 0.3) * 12);
                return (
                  <rect
                    key={i}
                    x={i * 6}
                    y={28 - h / 2}
                    width="3"
                    height={h}
                    rx="1.5"
                    fill="url(#wv)"
                    opacity={0.85}
                  >
                    <animate
                      attributeName="height"
                      values={`${h};${h * 0.5};${h}`}
                      dur={`${1.6 + (i % 5) * 0.2}s`}
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="y"
                      values={`${28 - h / 2};${28 - h / 4};${28 - h / 2}`}
                      dur={`${1.6 + (i % 5) * 0.2}s`}
                      repeatCount="indefinite"
                    />
                  </rect>
                );
              })}
            </svg>
          </div>

          <div className="rounded-2xl border border-border bg-white p-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist">
              Live conversation
            </div>
            <div className="mt-3 space-y-2">
              <div className="rounded-xl bg-surface px-3 py-2 text-[12px] text-foreground/85">
                Hi, I'd like to book a consultation.
              </div>
              <div className="ml-6 rounded-xl bg-primary px-3 py-2 text-[12px] text-primary-foreground">
                Of course. Tuesday 3pm works — shall I confirm?
              </div>
              <div className="flex items-center gap-1 text-[11px] text-mist">
                <span className="size-1.5 animate-pulse-dot rounded-full bg-primary" />
                AI typing…
              </div>
            </div>
          </div>
        </div>

        {/* tile grid */}
        <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          {tiles.map((t) => {
            const Icon = t.icon;
            const toneClass =
              t.tone === "primary"
                ? "bg-primary/10 text-primary"
                : t.tone === "success"
                  ? "bg-success/10 text-success"
                  : "bg-foreground/5 text-foreground";
            return (
              <div
                key={t.label}
                className="group rounded-2xl border border-border bg-white p-3.5 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="flex items-center justify-between">
                  <span className={`grid size-8 place-items-center rounded-lg ${toneClass}`}>
                    <Icon className="size-4" strokeWidth={1.8} />
                  </span>
                  <ArrowUpRight className="size-3.5 text-mist transition group-hover:text-foreground" />
                </div>
                <div className="mt-3 font-display text-lg font-semibold tabular-nums text-foreground">
                  {t.value}
                </div>
                <div className="flex items-center justify-between text-[11px] text-mist">
                  <span>{t.label}</span>
                  <span className="font-mono">{t.delta}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* floating side cards */}
      <div className="glass-panel absolute -left-4 top-24 hidden items-center gap-2.5 px-3.5 py-2.5 shadow-[var(--shadow-float)] animate-float-medium sm:flex">
        <span className="size-2 animate-pulse-dot rounded-full bg-success" />
        <div>
          <div className="text-[11.5px] font-semibold text-foreground">Call answered</div>
          <div className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-mist">
            0.4s · receptionist
          </div>
        </div>
      </div>
      <div className="glass-panel absolute -right-3 bottom-16 hidden items-center gap-2.5 px-3.5 py-2.5 shadow-[var(--shadow-float)] [animation-delay:1.4s] animate-float-medium sm:flex">
        <span className="size-2 animate-pulse-dot rounded-full bg-primary" />
        <div>
          <div className="text-[11.5px] font-semibold text-foreground">Meeting booked</div>
          <div className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-mist">
            calendar · synced
          </div>
        </div>
      </div>
    </div>
  );
}
