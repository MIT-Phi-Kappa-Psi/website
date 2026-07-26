import { cn } from "@/lib/utils";

/**
 * Placeholder mark standing in for the Phi Kappa Psi coat of arms.
 *
 * TODO: Replace with the real crest. Drop an SVG at `public/crest.svg` and
 * swap this component's body for an <Image> — everything that uses it
 * (header, footer, hero) picks the change up automatically.
 */
export function Crest({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 48"
      aria-hidden="true"
      className={cn("h-8 w-auto", className)}
    >
      <path
        d="M2 2h36v26c0 9-8 14-18 18C10 42 2 37 2 28V2Z"
        className="fill-cardinal"
      />
      <path
        d="M20 2v44c8.5-3.6 18-8.6 18-18V2H20Z"
        className="fill-hunter-dark"
      />
      <text
        x="20"
        y="27"
        textAnchor="middle"
        className="fill-white font-heading"
        fontSize="15"
        letterSpacing="0.5"
      >
        ΦΚΨ
      </text>
    </svg>
  );
}
