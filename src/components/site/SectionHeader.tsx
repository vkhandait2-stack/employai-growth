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
      <h2 className="mt-6 display-2 text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-6 lede">
          {description}
        </p>
      )}
    </div>
  );
}
