import type { Metadata } from "next";

import {
  intramuralSports,
  servicePartners,
  traditions,
  varsitySports,
} from "@/data/activities";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/page-hero";
import { Placeholder } from "@/components/placeholder";
import { Section, SectionHeading } from "@/components/section";

export const metadata: Metadata = {
  title: "Activities",
  description:
    "Service, athletics, and traditions at Phi Kappa Psi, MIT — from Rosie's Place and Habitat for Humanity to varsity sports and house dinners.",
};

export default function ActivitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Life in the house"
        title="Activities"
        description="Service is one of our three guiding pillars, and it shows up on the calendar. So does everything else — varsity seasons, intramural championships, and the traditions that make a house feel like one."
      />

      <Section>
        <SectionHeading
          eyebrow="Philanthropy"
          title="Who we serve with"
          description="Coordinated by our service chairs. Brothers turn out for these throughout the year, not just once a semester."
        />
        <dl className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicePartners.map((partner) => (
            <div
              key={partner.name}
              className="rounded-xl border border-border bg-card p-6"
            >
              <dt className="font-heading text-lg font-semibold">
                {partner.name}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {partner.description}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section tone="parchment">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Varsity" title="Athletes in the house" />
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {varsitySports.map((sport) => (
                <li key={sport}>
                  <Badge className="bg-cardinal px-3 py-1.5 text-sm text-white">
                    {sport}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
          <div>
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
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Traditions"
          title="The things we actually do"
          description="Every house says it has traditions. These are ours, and they run on schedule."
        />
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {traditions.map((tradition) => (
            <div key={tradition.title}>
              <Placeholder label={`Photo — ${tradition.title}`} ratio="4/3" />
              <h3 className="mt-5 text-xl font-semibold">{tradition.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {tradition.body}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
