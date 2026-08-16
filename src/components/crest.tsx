import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * The Phi Kappa Psi coat of arms — the site's primary mark.
 *
 * Source file is `public/crest.png`, a transparent PNG, so it sits correctly on
 * both the light header and the dark footer. To replace it, overwrite that file
 * (keep the transparency and roughly the same 5:6 proportions) — the header and
 * footer pick the change up automatically.
 *
 * Sized by height: callers pass `h-9`, `h-10`, etc. and the width follows.
 */
export function Crest({ className }: { className?: string }) {
  return (
    <Image
      src="/crest.png"
      alt="Phi Kappa Psi coat of arms"
      width={374}
      height={447}
      className={cn("h-8 w-auto", className)}
      loading="eager"
    />
  );
}
