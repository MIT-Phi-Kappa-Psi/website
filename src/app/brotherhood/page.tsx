import type { Metadata } from "next";

import { initials, roster } from "@/data/members";
import { officers } from "@/data/chapter";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";

export const metadata: Metadata = {
  title: "Brotherhood",
  description:
    "The brothers of Massachusetts Beta — Phi Kappa Psi at MIT, by graduating class.",
};

export default function BrotherhoodPage() {
  return (
    <>
      <PageHero
        eyebrow="The chapter"
        title="Brotherhood"
        description="Massachusetts Beta is a small chapter by design. You will know everyone here, and they will know you."
      />

      <Section>
        <SectionHeading
          eyebrow="Leadership"
          title="Executive board"
          description="Officers are elected each year by the chapter."
        />
        <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {officers.map((officer) => (
            <div
              key={officer.role}
              className="rounded-xl border border-border bg-card p-6"
            >
              <dt className="text-xs font-semibold uppercase tracking-widest text-cardinal">
                {officer.role}
              </dt>
              <dd className="mt-2 font-heading text-lg">{officer.name}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {roster.map((classYear, index) => (
        <Section
          key={classYear.year}
          tone={index % 2 === 0 ? "parchment" : "default"}
        >
          <SectionHeading eyebrow="Class of" title={String(classYear.year)} />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {classYear.members.map((member, memberIndex) => (
              <li
                key={`${member.name}-${memberIndex}`}
                className="rounded-xl border border-border bg-card p-5"
              >
                <div className="flex size-14 items-center justify-center rounded-full bg-hunter-dark font-heading text-lg text-white">
                  {initials(member.name)}
                </div>
                <p className="mt-4 font-medium">{member.name}</p>
                {member.major && (
                  <p className="text-sm text-muted-foreground">{member.major}</p>
                )}
              </li>
            ))}
          </ul>
        </Section>
      ))}
    </>
  );
}
