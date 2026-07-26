import { ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Stand-in for a photo that doesn't exist yet.
 *
 * The chapter is shooting new photography, so every image slot on the site
 * renders one of these for now. Each carries a `label` describing the shot
 * it's waiting for, so the placeholders double as a shot list.
 *
 * To replace one: drop the file in `public/photos/`, then swap the
 * <Placeholder> for a Next <Image> with the same wrapper classes.
 */
export function Placeholder({
  label,
  className,
  ratio = "4/3",
  tone = "light",
}: {
  label: string;
  className?: string;
  /** Any valid CSS aspect-ratio, e.g. "16/9", "1/1", "3/4". */
  ratio?: string;
  /** Use "dark" when the placeholder sits on a dark section. */
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";

  return (
    <div
      style={{ aspectRatio: ratio }}
      className={cn(
        "relative flex w-full items-end overflow-hidden rounded-lg border",
        dark ? "border-white/15 bg-white/5" : "border-border bg-secondary",
        className,
      )}
    >
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 bg-[repeating-linear-gradient(135deg,transparent,transparent_11px,currentColor_11px,currentColor_12px)]",
          dark ? "text-white/15" : "text-border opacity-45",
        )}
      />
      <div
        className={cn(
          "relative flex items-center gap-2 p-4 text-xs",
          dark ? "text-white/65" : "text-muted-foreground",
        )}
      >
        <ImageIcon className="size-3.5 shrink-0" />
        <span>{label}</span>
      </div>
    </div>
  );
}
