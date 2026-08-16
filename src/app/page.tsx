import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { chapter } from "@/data/chapter";
import { exteriorPhoto } from "@/data/house";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/photo";
import { Section } from "@/components/section";

const pillars = [
  {
    href: "/rush",
    title: "Rush",
    body: "How to meet us, what recruitment looks like, and when it happens.",
  },
  {
    href: "/careers",
    title: "Careers",
    body: "Where brothers study, where they end up, and the network that gets them there.",
  },
  {
    href: "/house",
    title: "House",
    body: "Five stories of Back Bay brownstone at 526 Beacon Street.",
  },
  {
    href: "/activities",
    title: "Activities",
    body: "Service, athletics, and the traditions that hold the house together.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-hunter-dark text-white">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-hunter),transparent_65%)] opacity-70"
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              {chapter.chapterName} &middot; {chapter.school}
            </p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.05] md:text-7xl">
              526 Beacon Street
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              {chapter.tagline}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button
                size="lg"
                nativeButton={false}
                render={<Link href="/rush" />}
              >
                Rush Phi Psi
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
                render={<Link href="/brotherhood" />}
              >
                Meet the brothers
              </Button>
            </div>
          </div>

          <Photo
            src={exteriorPhoto.src}
            alt={exteriorPhoto.alt}
            ratio="4/5"
            sizes="(min-width: 768px) 40vw, 100vw"
            className="border-white/15"
            eager
          />
        </div>
      </section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {pillars.map((pillar) => (
            <Link
              key={pillar.href}
              href={pillar.href}
              className="group rounded-xl border border-border bg-card p-7 transition-colors hover:border-cardinal/40 hover:bg-parchment"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-semibold">{pillar.title}</h3>
                <ArrowRight className="size-5 shrink-0 text-cardinal transition-transform group-hover:translate-x-1" />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {pillar.body}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="hunter" size="tight">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Thinking about rushing?
          </h2>
          <Button
            size="lg"
            variant="secondary"
            nativeButton={false}
            className="shrink-0"
            render={<Link href="/rush" />}
          >
            See rush details
          </Button>
        </div>
      </Section>
    </>
  );
}
