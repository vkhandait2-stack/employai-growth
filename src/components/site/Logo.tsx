import markAsset from "@/assets/indu-divine-mark.png.asset.json";

/**
 * Indu Divine AI brand mark. The source artwork has a built-in deep-navy
 * background, so we render it inside a rounded tile that reads correctly
 * on both light and dark surfaces.
 */
export function Logo({ className = "size-8" }: { className?: string }) {
  return (
    <span
      className={`relative inline-grid place-items-center overflow-hidden rounded-[28%] bg-[#05101f] ring-1 ring-black/5 shadow-[0_2px_6px_-2px_rgba(10,20,40,0.25)] ${className}`}
      aria-hidden
    >
      <img
        src={markAsset.url}
        alt=""
        className="h-full w-full object-contain p-[8%] select-none"
        draggable={false}
      />
    </span>
  );
}
