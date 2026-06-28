export function AINetwork({ className = "" }: { className?: string }) {
  // Premium AI network illustration: orbiting nodes + animated connections.
  const nodes = [
    { x: 200, y: 60, r: 7, label: "Voice" },
    { x: 360, y: 130, r: 6, label: "Sales" },
    { x: 100, y: 200, r: 6, label: "WhatsApp" },
    { x: 300, y: 260, r: 6, label: "Calendar" },
    { x: 60, y: 320, r: 5, label: "CRM" },
    { x: 380, y: 340, r: 5, label: "Workflow" },
    { x: 180, y: 380, r: 5, label: "Outbound" },
  ];
  const center = { x: 220, y: 220, r: 36 };

  return (
    <svg
      viewBox="0 0 440 440"
      className={className}
      aria-hidden
      role="img"
    >
      <defs>
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0A84FF" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#00D4FF" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="nodeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0A84FF" />
          <stop offset="100%" stopColor="#00D4FF" />
        </linearGradient>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0A84FF" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.15" />
        </linearGradient>
        <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      {/* Glow halo */}
      <circle cx={center.x} cy={center.y} r="180" fill="url(#coreGlow)" opacity="0.5" />

      {/* Orbit rings */}
      <g stroke="oklch(0.22 0.04 260 / 0.08)" fill="none" strokeWidth="1">
        <circle cx={center.x} cy={center.y} r="80" />
        <circle cx={center.x} cy={center.y} r="130" strokeDasharray="2 6" />
        <circle cx={center.x} cy={center.y} r="180" strokeDasharray="2 10" />
      </g>

      {/* Connections */}
      <g stroke="url(#lineGrad)" strokeWidth="1.25" fill="none">
        {nodes.map((n, i) => (
          <line
            key={i}
            x1={center.x}
            y1={center.y}
            x2={n.x}
            y2={n.y}
            strokeDasharray="600"
            className="animate-draw-line"
            style={{ animationDelay: `${i * 120}ms` }}
          />
        ))}
      </g>

      {/* Pulse traveling dots */}
      <g fill="#0A84FF">
        {nodes.slice(0, 4).map((n, i) => (
          <circle key={i} r="2" opacity="0.85">
            <animateMotion
              dur={`${4 + i * 0.6}s`}
              repeatCount="indefinite"
              path={`M${center.x},${center.y} L${n.x},${n.y}`}
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              dur={`${4 + i * 0.6}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </g>

      {/* Outer nodes */}
      {nodes.map((n, i) => (
        <g key={n.label}>
          <circle
            cx={n.x}
            cy={n.y}
            r={n.r + 6}
            fill="white"
            opacity="0.6"
            filter="url(#soft)"
          />
          <circle cx={n.x} cy={n.y} r={n.r} fill="url(#nodeGrad)" />
          <circle
            cx={n.x}
            cy={n.y}
            r={n.r + 2}
            fill="none"
            stroke="#0A84FF"
            strokeOpacity="0.18"
          />
          <text
            x={n.x}
            y={n.y - n.r - 8}
            textAnchor="middle"
            className="fill-current"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 8.5,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fill: "oklch(0.5 0.02 255)",
              opacity: 0.9,
            }}
          >
            {n.label.toUpperCase()}
          </text>
          <circle cx={n.x} cy={n.y} r={n.r + 4} fill="none" stroke="#0A84FF" strokeOpacity="0.3">
            <animate
              attributeName="r"
              values={`${n.r + 4};${n.r + 12};${n.r + 4}`}
              dur={`${3 + (i % 3)}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-opacity"
              values="0.3;0;0.3"
              dur={`${3 + (i % 3)}s`}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}

      {/* Core */}
      <g>
        <circle cx={center.x} cy={center.y} r={center.r + 14} fill="white" opacity="0.85" />
        <circle cx={center.x} cy={center.y} r={center.r} fill="url(#nodeGrad)" />
        <circle
          cx={center.x}
          cy={center.y}
          r={center.r + 4}
          fill="none"
          stroke="#0A84FF"
          strokeOpacity="0.25"
        />
        <text
          x={center.x}
          y={center.y + 4}
          textAnchor="middle"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 18,
            fontWeight: 600,
            fill: "white",
            letterSpacing: "-0.02em",
          }}
        >
          ID
        </text>
      </g>
    </svg>
  );
}
