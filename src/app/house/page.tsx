import type { Metadata } from "next";

import { addressLine } from "@/data/chapter";
import { amenities, exteriorPhoto, floors, houseStats } from "@/data/house";
import { PageHero } from "@/components/page-hero";
import { Photo } from "@/components/photo";
import { Section, SectionHeading } from "@/components/section";

export const metadata: Metadata = {
  title: "House",
  description:
    "526 Beacon Street — the Back Bay brownstone home of Phi Kappa Psi at MIT.",
};

export default function HousePage() {
  return (
    <>
      <PageHero eyebrow={addressLine} title="The house" />

      <Section size="tight">
        <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
          <Photo
            src={exteriorPhoto.src}
            alt={exteriorPhoto.alt}
            ratio="16/10"
            sizes="(min-width: 768px) 60vw, 100vw"
            eager
          />
          <dl className="grid grid-cols-2 gap-5">
            {houseStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card p-6"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-heading text-4xl font-semibold text-cardinal">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section tone="parchment">
        <SectionHeading eyebrow="Inside" title="The shared spaces" />
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((space) => (
            <div key={space.title}>
              <Photo
                src={space.photo.src}
                alt={space.photo.alt}
                ratio="4/3"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <h3 className="mt-5 text-xl font-semibold">{space.title}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="The tour" title="Every room has a name" />

        <div className="mt-14 space-y-16">
          {floors.map((floor) => (
            <div key={floor.name}>
              <div className="flex items-baseline gap-4 border-b border-border pb-4">
                <span
                  aria-hidden
                  className="font-heading text-2xl font-semibold text-cardinal"
                >
                  {floor.short}
                </span>
                <h3 className="text-xl font-semibold">{floor.name}</h3>
              </div>

              <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {floor.rooms.map((room) => (
                  <div key={room.name}>
                    <Photo
                      src={room.photo.src}
                      alt={room.photo.alt}
                      ratio="4/3"
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <h4 className="mt-4 font-heading text-lg font-semibold">
                      {room.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
