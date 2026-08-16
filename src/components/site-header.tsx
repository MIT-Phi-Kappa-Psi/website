import Link from "next/link";

import { chapter } from "@/data/chapter";
import { Crest } from "@/components/crest";
import { InstagramIcon } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5">
        <Link href="/" className="flex items-center gap-3">
          <Crest className="h-9" />
          <span className="flex flex-col leading-none">
            <span className="font-heading text-lg font-semibold">
              {chapter.name}
            </span>
            <span className="text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
              {chapter.school} &middot; {chapter.chapterName}
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-1">
          <MainNav />
          <a
            href={chapter.social.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Phi Kappa Psi MIT on Instagram"
            title="Instagram"
            className="flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-cardinal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cardinal"
          >
            <InstagramIcon className="size-5" />
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
