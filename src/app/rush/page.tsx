import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";

import { rushChairs, rushStatus } from "@/data/rush";
import { PageHero } from "@/components/page-hero";
import { Photo } from "@/components/photo";
import { RushBanner } from "@/components/rush-banner";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Rush",
  description: `${rushStatus.headline} at Phi Kappa Psi, MIT. Schedule coming soon — reach out to our rush chairs with any questions.`,
};

export default function RushPage() {
  return (
    <>
      <PageHero
        eyebrow="Recruitment"
        title={rushStatus.headline}
        description="We're looking forward to meeting you. Reach out to either of our rush chairs with any questions at all."
      />

      {/* Carries the dates message, so the hero above doesn't repeat it. */}
      <RushBanner showAboutLink={false} />

      <Section>
        <ul className="grid gap-8 sm:grid-cols-2 md:max-w-3xl">
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
                <h2 className="font-heading text-xl font-semibold">
                  {chair.name}
                </h2>
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
