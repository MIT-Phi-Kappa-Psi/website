"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * A cross-fading photo carousel that advances on its own and can be driven by
 * the arrows.
 *
 * One of the few client components on the site — it needs state and a timer.
 * The page it sits on is still statically prerendered; the first frame is in
 * the HTML and the rest hydrate in.
 *
 * Behaviour worth knowing:
 * - Auto-advance pauses while the pointer is over the card or focus is inside
 *   it, so it never yanks a photo away mid-look.
 * - `prefers-reduced-motion` disables auto-advance entirely. The arrows still
 *   work, so the photos stay reachable.
 * - `startDelay` staggers each carousel on the page, otherwise all seven flip
 *   in lockstep and the grid strobes.
 *
 * A single-photo set renders as a plain <Photo> with no controls.
 */
export type CarouselPhoto = {
  src: string;
  alt: string;
};

const INTERVAL = 5000;

export function PhotoCarousel({
  photos,
  ratio = "4/3",
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  startDelay = 0,
  className,
}: {
  photos: CarouselPhoto[];
  ratio?: string;
  sizes?: string;
  /** Milliseconds to offset this carousel's cycle from its neighbours. */
  startDelay?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = photos.length;

  const go = useCallback(
    (delta: number) => setIndex((i) => (i + delta + count) % count),
    [count],
  );

  useEffect(() => {
    if (count < 2 || paused) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;

    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      setIndex((i) => (i + 1) % count);
      interval = setInterval(() => setIndex((i) => (i + 1) % count), INTERVAL);
    }, INTERVAL + startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [count, paused, startDelay]);

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg border border-border bg-secondary",
        className,
      )}
      style={{ aspectRatio: ratio }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {photos.map((photo, i) => (
        <Image
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          // Only the first frame is worth fetching up front.
          loading={i === 0 ? "eager" : "lazy"}
          aria-hidden={i !== index}
          className={cn(
            "object-cover transition-opacity duration-700 ease-in-out",
            i === index ? "opacity-100" : "opacity-0",
          )}
        />
      ))}

      {count > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous photo"
            onClick={() => go(-1)}
            className="absolute left-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white opacity-0 transition-opacity hover:bg-black/70 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white group-hover:opacity-100"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={() => go(1)}
            className="absolute right-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white opacity-0 transition-opacity hover:bg-black/70 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white group-hover:opacity-100"
          >
            <ChevronRight className="size-5" />
          </button>

          <div className="pointer-events-none absolute inset-x-0 bottom-2 flex justify-center gap-1.5">
            {photos.map((photo, i) => (
              <span
                key={photo.src}
                className={cn(
                  "size-1.5 rounded-full transition-colors",
                  i === index ? "bg-white" : "bg-white/45",
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
