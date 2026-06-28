import { useEffect, useRef, useState } from "react";

interface Props {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
}

export function Counter({ value, suffix = "", prefix = "", decimals = 0, duration = 1800 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(value * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {n.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
}
