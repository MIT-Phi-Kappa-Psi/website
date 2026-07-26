import type { Metadata } from "next";

import { addressLine } from "@/data/chapter";
import { PageHero } from "@/components/page-hero";
import { Placeholder } from "@/components/placeholder";
import { Section, SectionHeading } from "@/components/section";

export const metadata: Metadata = {
  title: "House",
  description:
    "526 Beacon Street — the Back Bay brownstone home of Phi Kappa Psi at MIT. Fourteen rooms, two common areas, a full kitchen, and a weight room.",
};

const stats = [
  { value: "14", label: "Rooms" },
  { value: "5", label: "Stories" },
  { value: "2", label: "Common areas" },
  { value: "1", label: "Bridge from campus" },
];

const spaces = [
  {
    title: "Common areas",
    body: "Two of them — one for the TV and the couch you will fall asleep on, one for actually getting work done.",
    label: "Common room, evening",
  },
  {
    title: "Kitchen and dining room",
    body: "House dinners every weeknight. Better food than a dining hall, and everyone eats together.",
    label: "Dining room set for house dinner",
  },
  {
    title: "Weight room",
    body: "In the house, free, and never a wait — which is more than the Z Center can say.",
    label: "Weight room",
  },
  {
    title: "Bedrooms",
    body: "Mostly doubles that can fit triples, plus a limited number of singles. Living in is optional but popular.",
    label: "Typical double bedroom",
  },
];

export default function HousePage() {
  return (
    <>
      <PageHero
        eyebrow={addressLine}
        title="Welcome home"
        description="An oasis in the desert of MIT. Our brownstone sits on the Boston side of the Charles — close enough to campus to make a 9am, far enough to feel like you left."
      />

      <Section size="tight">
        <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
          <Placeholder
            label="Exterior — 526 Beacon Street from the sidewalk"
            ratio="16/10"
          />
          <dl className="grid grid-cols-2 gap-5">
            {stats.map((stat) => (
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
        <SectionHeading
          eyebrow="Inside"
          title="The spaces"
          description="Five stories of brownstone, most of it shared."
        />
        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {spaces.map((space) => (
            <div key={space.title}>
              <Placeholder label={space.label} ratio="4/3" />
              <h3 className="mt-5 text-xl font-semibold">{space.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {space.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <SectionHeading
              eyebrow="The neighborhood"
              title="Back Bay, not a dorm"
              description="Fenway Park, the Prudential Center, and Boston Common are all walkable. The 1 bus and the Green Line get you to campus, and the Mass Ave bridge gets you there faster on foot than you'd think."
            />
          </div>
          <Placeholder
            label="Neighborhood — Beacon Street / Charles River"
            ratio="4/3"
          />
        </div>
      </Section>
    </>
  );
}
