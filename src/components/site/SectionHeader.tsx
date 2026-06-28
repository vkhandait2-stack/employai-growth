interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({ eyebrow, title, description, align = "left" }: Props) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className={align === "center" ? "eyebrow mx-auto" : "eyebrow"}>{eyebrow}</p>
      )}
      <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-mist sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
