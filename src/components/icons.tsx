import { cn } from "@/lib/utils";

/**
 * Instagram glyph.
 *
 * Hand-rolled because `lucide-react` dropped its brand icons — importing
 * `Instagram` from lucide fails the build. Drawn to lucide's conventions
 * (24x24 box, `currentColor`, 2px stroke) so it sits correctly beside the
 * other icons on the site.
 */
export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("size-6", className)}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
