import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * A real photo, in the same wrapper a <Placeholder> uses — so swapping one for
 * the other is a one-line change that doesn't disturb the surrounding layout.
 *
 * Files live in `public/photos/`. Images are cropped to fill `ratio`, so put
 * the subject near the centre of the frame.
 */
export function Photo({
  src,
  alt,
  className,
  ratio = "4/3",
  sizes = "(min-width: 768px) 50vw, 100vw",
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  /** Any valid CSS aspect-ratio, e.g. "16/9", "1/1", "3/4". */
  ratio?: string;
  /** Responsive width hint for Next's image optimizer. */
  sizes?: string;
  /** Set on above-the-fold images so they don't lazy-load. */
  eager?: boolean;
}) {
  return (
    <div
      style={{ aspectRatio: ratio }}
      className={cn(
        "relative w-full overflow-hidden rounded-lg border border-border bg-secondary",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover"
        {...(eager && { loading: "eager" as const, fetchPriority: "high" as const })}
      />
    </div>
  );
}
