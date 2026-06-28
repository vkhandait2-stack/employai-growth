export function Logo({ className = "size-7" }: { className?: string }) {
  return (
    <span
      className={`relative grid place-items-center rounded-lg bg-primary text-primary-foreground shadow-glow ${className}`}
      aria-hidden
    >
      <span className="size-2.5 rotate-45 rounded-[2px] bg-background/90" />
    </span>
  );
}
