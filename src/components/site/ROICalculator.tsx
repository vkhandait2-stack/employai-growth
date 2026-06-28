import { useMemo, useState } from "react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { Calculator, TrendingUp, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

function Field({
  label,
  value,
  onChange,
  min,
  max,
  step,
  prefix,
  suffix,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-white/60 p-5 backdrop-blur">
      <div className="flex items-center justify-between">
        <label className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-mist">
          {label}
        </label>
        <div className="font-display text-base font-semibold tabular-nums text-foreground">
          {prefix}
          {value.toLocaleString()}
          {suffix}
        </div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-4 w-full accent-[color:var(--primary)]"
      />
    </div>
  );
}

function fmtCurrency(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${Math.round(n / 1000)}K`;
  return `$${Math.round(n)}`;
}

export function ROICalculator() {
  const [calls, setCalls] = useState(2500);
  const [employees, setEmployees] = useState(8);
  const [salary, setSalary] = useState(3500); // monthly per employee USD
  const [leads, setLeads] = useState(1200);

  const result = useMemo(() => {
    // Conservative model
    const automatedShare = 0.7;
    const staffSavings = employees * salary * automatedShare * 12;
    const missedCallRecovery = calls * 0.32 * 12 * 18; // recovered value per recovered call
    const leadLift = leads * 12 * 0.18 * 35; // 18% conversion lift × value
    const total = staffSavings + missedCallRecovery + leadLift;
    const hoursSavedWeekly = Math.round(employees * 12 * automatedShare);
    return {
      total,
      staffSavings,
      missedCallRecovery,
      leadLift,
      hoursSavedWeekly,
    };
  }, [calls, employees, salary, leads]);

  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 -z-10 mesh-glow animate-gradient-drift opacity-60" aria-hidden />
      <div className="container-page">
        <Reveal>
          <SectionHeader
            eyebrow="ROI Calculator"
            title="See what an AI Workforce returns."
            description="Move the sliders. We'll model the annual savings, recovered revenue and reclaimed team hours — instantly."
            align="center"
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-16 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="surface-card p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-[color-mix(in_oklab,var(--primary)_10%,white)] text-primary ring-1 ring-inset ring-[color-mix(in_oklab,var(--primary)_18%,transparent)]">
                  <Calculator className="size-5" strokeWidth={1.8} />
                </span>
                <div>
                  <div className="font-display text-lg font-semibold tracking-tight">Your business inputs</div>
                  <div className="text-[13px] text-mist">Drag to model your environment.</div>
                </div>
              </div>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <Field label="Monthly calls" value={calls} onChange={setCalls} min={200} max={50000} step={100} />
                <Field label="Customer-facing employees" value={employees} onChange={setEmployees} min={1} max={200} step={1} />
                <Field label="Avg. monthly salary" value={salary} onChange={setSalary} min={500} max={15000} step={100} prefix="$" />
                <Field label="Monthly leads" value={leads} onChange={setLeads} min={50} max={50000} step={50} />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[28px] bg-foreground p-7 text-background sm:p-9">
              <div
                className="pointer-events-none absolute inset-0 opacity-60"
                aria-hidden
                style={{
                  background:
                    "radial-gradient(60% 80% at 80% 0%, color-mix(in oklab, var(--primary) 55%, transparent) 0%, transparent 70%)",
                }}
              />
              <div className="relative">
                <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-white/60">
                  Estimated annual impact
                </div>
                <div className="mt-5 flex items-baseline gap-3">
                  <div className="font-display text-6xl font-semibold tracking-[-0.035em] text-white tabular-nums sm:text-7xl">
                    {fmtCurrency(result.total)}
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white/80">
                    <TrendingUp className="size-3" /> projected
                  </span>
                </div>

                <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-3">
                  {[
                    { k: "Staff capacity", v: fmtCurrency(result.staffSavings) },
                    { k: "Recovered revenue", v: fmtCurrency(result.missedCallRecovery) },
                    { k: "Lead conversion lift", v: fmtCurrency(result.leadLift) },
                  ].map((row) => (
                    <div key={row.k} className="bg-foreground p-5">
                      <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/55">{row.k}</dt>
                      <dd className="mt-2 font-display text-xl font-semibold text-white tabular-nums">{row.v}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-7 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                  <div>
                    <div className="text-[13px] text-white/65">Weekly hours reclaimed</div>
                    <div className="font-display text-2xl font-semibold text-white tabular-nums">{result.hoursSavedWeekly} hrs</div>
                  </div>
                  <Link
                    to="/contact"
                    className="group inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-white px-5 text-[13px] font-semibold text-foreground transition hover:-translate-y-px"
                  >
                    Get my custom ROI
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
                <p className="mt-4 text-[11.5px] text-white/45">
                  Modeled estimate. Real outcomes depend on workflow, channels and integrations — we benchmark with your data during discovery.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
