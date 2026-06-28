interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Editorial section number, e.g. "01" */
  number?: string;
}

export function SectionHeader({ eyebrow, title, description, align = "left", number }: Props) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {number && (
        <div
          className={`flex items-center gap-3 ${
            isCenter ? "justify-center" : ""
          }`}
        >
          <span className="font-mono text-[10.5px] font-medium uppercase tracking-[0.28em] text-mist tabular-nums">
            {number}
          </span>
          <span
            className="h-px w-12 bg-gradient-to-r from-border-strong to-transparent"
            aria-hidden
          />
        </div>
      )}
      {eyebrow && (
        <p className={`${number ? "mt-5" : ""} ${isCenter ? "eyebrow mx-auto" : "eyebrow"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className="mt-6 display-2 text-foreground">{title}</h2>
      {description && <p className="mt-6 lede">{description}</p>}
    </div>
  );
}
