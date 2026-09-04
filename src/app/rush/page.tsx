import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";

import {
  rushChairs,
  rushStatus,
  rushVideoUrl,
  schedulePoster,
} from "@/data/rush";
import { InstagramEmbed } from "@/components/instagram-embed";
import { PageHero } from "@/components/page-hero";
import { Photo } from "@/components/photo";
import { RushBanner } from "@/components/rush-banner";
import { Section, SectionHeading } from "@/components/section";

export const metadata: Metadata = {
  title: "Rush",
  description: `${rushStatus.headline} at Phi Kappa Psi, MIT. ${rushStatus.detail} Barbecue and house tours, go karting, beach day, and more.`,
};

export default function RushPage() {
  return (
    <>
      <PageHero
        eyebrow="Recruitment"
        title={rushStatus.headline}
        description="We're looking forward to meeting you. Come to whatever you can — everything through Tuesday is open to everyone."
      />

      {/* Carries the dates, so the hero above doesn't repeat them. */}
      <RushBanner showAboutLink={false} />

      <Section tone="parchment">
        <SectionHeading eyebrow="The week" title="Schedule" />

        {/* Poster and rush video side by side — both are tall portrait
            formats, so they sit at roughly the same height. */}
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
          {schedulePoster && (
            <div className="mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end">
              {/* Opens the full-size file so it can be pinch-zoomed or saved. */}
              <a
                href={schedulePoster.src}
                target="_blank"
                rel="noreferrer"
                className="block transition-opacity hover:opacity-90"
              >
                <Photo
                  src={schedulePoster.src}
                  alt={schedulePoster.alt}
                  ratio="784/1360"
                  sizes="(min-width: 1024px) 40vw, (min-width: 640px) 60vw, 100vw"
                />
              </a>
              <p className="mt-3 text-xs text-muted-foreground">
                Tap the poster for the full-size version.
              </p>
            </div>
          )}

          {rushVideoUrl && (
            <div className="mx-auto w-full max-w-md lg:mx-0">
              <InstagramEmbed url={rushVideoUrl} />
            </div>
          )}
        </div>

      </Section>

      <Section>
        <SectionHeading
          eyebrow="Questions?"
          title="Talk to our rush chairs"
        />
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 md:max-w-3xl">
          {rushChairs.map((chair) => (
            <li
              key={chair.email}
              className="overflow-hidden rounded-xl border border-border bg-card"
            >
              <Photo
                src={chair.image}
                alt={chair.name}
                ratio="3/4"
                sizes="(min-width: 640px) 33vw, 100vw"
                className="rounded-none border-0"
              />
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold">
                  {chair.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-cardinal">
                  Rush Chair
                </p>

                <div className="mt-5 space-y-3 text-sm">
                  <a
                    className="flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-cardinal"
                    href={`mailto:${chair.email}`}
                  >
                    <Mail className="size-4 shrink-0" />
                    <span className="break-all">{chair.email}</span>
                  </a>
                  <a
                    className="flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-cardinal"
                    href={`tel:${chair.tel}`}
                  >
                    <Phone className="size-4 shrink-0" />
                    <span>{chair.phone}</span>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
