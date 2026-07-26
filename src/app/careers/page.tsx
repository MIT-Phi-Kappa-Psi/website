import type { Metadata } from "next";

import { employers, majors, programs } from "@/data/careers";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "What brothers of Phi Kappa Psi at MIT study, where they work, and the alumni network behind it.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Professional development"
        title="Careers"
        description="Brothers come from across the Institute and end up all over the map. The connections that got them there get passed down to younger members who want to follow the same path."
      />

      <Section>
        <SectionHeading
          eyebrow="Course numbers"
          title="What brothers study"
          description="Nearly every school at MIT is represented in the house."
        />
        <ul className="mt-10 flex flex-wrap gap-2.5">
          {majors.map((major) => (
            <li key={major}>
              <Badge variant="secondary" className="px-3 py-1.5 text-sm">
                {major}
              </Badge>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="parchment">
        <SectionHeading
          eyebrow="Beyond the classroom"
          title="Programs brothers take part in"
        />
        <dl className="mt-10 grid gap-6 md:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.name}
              className="rounded-xl border border-border bg-card p-6"
            >
              <dt className="font-heading text-lg font-semibold">
                {program.name}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {program.description}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="The network"
          title="Where brothers have worked"
          description="Internships and full-time roles held by brothers and alumni. A dedicated professional development chair runs resume workshops and makes introductions."
        />
        <ul className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {employers.map((employer) => (
            <li
              key={employer}
              className="bg-card px-6 py-5 font-medium text-foreground/85"
            >
              {employer}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
