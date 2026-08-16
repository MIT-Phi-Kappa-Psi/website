import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import {
  houseEvents,
  intramuralSports,
  serviceIntro,
  servicePhotos,
  varsitySports,
} from "@/data/activities";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/page-hero";
import { Photo } from "@/components/photo";
import { PhotoCarousel } from "@/components/photo-carousel";
import { Section, SectionHeading } from "@/components/section";

export const metadata: Metadata = {
  title: "Activities",
  description:
    "Service, athletics, and traditions at Phi Kappa Psi, MIT — from the Margaret Fuller Neighborhood House to varsity seasons and the Christmas Roast.",
};

export default function ActivitiesPage() {
  const { partner } = serviceIntro;

  return (
    <>
      <PageHero eyebrow="Life in the house" title="Activities" />

      <Section>
        <SectionHeading eyebrow="The calendar" title="What a year looks like" />
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {houseEvents.map((event, i) => (
            <div key={event.title}>
              <PhotoCarousel
                photos={event.photos}
                ratio="4/3"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                // Stagger each card so the grid doesn't flip all at once.
                startDelay={i * 700}
              />
              <h3 className="mt-5 text-xl font-semibold">{event.title}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="parchment">
        <SectionHeading eyebrow="Philanthropy" title="Service" />

        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
          {serviceIntro.lead}
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {servicePhotos.map((photo) => (
            <Photo
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              ratio="4/3"
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            />
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-border bg-card p-7 md:p-9">
          <div className="flex flex-col gap-7 md:flex-row md:items-start md:gap-10">
            <a
              href={partner.url}
              target="_blank"
              rel="noreferrer"
              className="flex shrink-0 items-center justify-center rounded-lg bg-white p-5 transition-shadow hover:shadow-md"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={424}
                height={272}
                className="h-auto w-52 max-w-full"
              />
            </a>

            <div>
              <p className="text-base leading-relaxed text-muted-foreground">
                {partner.body}
              </p>
              <a
                href={partner.url}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 font-medium text-cardinal transition-colors hover:text-cardinal/80"
              >
                {partner.name}
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Varsity" title="Athletes in the house" />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {varsitySports.map((sport) => (
            <div key={sport.name}>
              <Photo
                src={sport.photo.src}
                alt={sport.photo.alt}
                ratio="4/3"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <h3 className="mt-4 font-heading text-lg font-semibold">
                {sport.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-10">
          <SectionHeading eyebrow="Intramurals" title="What we compete in" />
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {intramuralSports.map((sport) => (
              <li key={sport}>
                <Badge variant="secondary" className="px-3 py-1.5 text-sm">
                  {sport}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
