import Link from "next/link";

import { rushStatus } from "@/data/rush";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const tone = {
  open: "bg-hunter text-white",
  soon: "bg-cardinal text-white",
  closed: "bg-secondary text-foreground",
} as const;

/**
 * Rush status strip. Reads entirely from `src/data/rush.ts` — to change what
 * this says, edit that file, not this component.
 *
 * Lives on the Rush page. Pass `showAboutLink={false}` there so the fallback
 * CTA doesn't link the page to itself; anywhere else, leave it on.
 */
export function RushBanner({
  className,
  showAboutLink = true,
}: {
  className?: string;
  showAboutLink?: boolean;
}) {
  const showSignup = rushStatus.state === "open" && rushStatus.signupUrl;

  return (
    <div className={cn(tone[rushStatus.state], className)}>
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm">
          <span className="font-semibold">{rushStatus.headline}</span>
          <span
            className={cn(
              "ml-2",
              rushStatus.state === "closed"
                ? "text-muted-foreground"
                : "text-white/80",
            )}
          >
            {rushStatus.detail}
          </span>
        </p>

        {showSignup ? (
          <Button
            variant="secondary"
            size="sm"
            nativeButton={false}
            className="w-fit shrink-0"
            render={<a href={rushStatus.signupUrl!} />}
          >
            Sign up for rush
          </Button>
        ) : (
          showAboutLink && (
            <Link
              href="/rush"
              className="w-fit shrink-0 text-sm font-medium underline underline-offset-4"
            >
              About rush
            </Link>
          )
        )}
      </div>
    </div>
  );
}
