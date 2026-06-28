export function Logo({ className = "size-8" }: { className?: string }) {
  return (
    <span className={`relative grid place-items-center ${className}`} aria-hidden>
      <svg viewBox="0 0 32 32" className="h-full w-full" fill="none">
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0A84FF" />
            <stop offset="1" stopColor="#00D4FF" />
          </linearGradient>
        </defs>
        <rect x="1" y="1" width="30" height="30" rx="9" fill="url(#logoGrad)" />
        <path
          d="M10 22V10h2.4l4.2 7.2V10H19v12h-2.4l-4.2-7.2V22H10z"
          fill="white"
        />
        <circle cx="23" cy="22" r="1.6" fill="white" />
      </svg>
    </span>
  );
}
