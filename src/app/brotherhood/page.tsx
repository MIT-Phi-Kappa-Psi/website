import type { Metadata } from "next";

import { initials, roster } from "@/data/members";
import { officers } from "@/data/chapter";
import { PageHero } from "@/components/page-hero";
import { Photo } from "@/components/photo";
import { Section, SectionHeading } from "@/components/section";

export const metadata: Metadata = {
  title: "Brotherhood",
  description:
    "The brothers of Massachusetts Beta — Phi Kappa Psi at MIT, by graduating class.",
};

export default function BrotherhoodPage() {
  return (
    <>
      <PageHero eyebrow="The chapter" title="Meet the Brothers" />

      <Section>
        <SectionHeading eyebrow="Leadership" title="Executive board" />
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
          <ul className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {classYear.members.map((member, memberIndex) => (
              <li
                key={`${member.name}-${memberIndex}`}
                className="overflow-hidden rounded-xl border border-border bg-card"
              >
                {member.image ? (
                  <Photo
                    src={member.image}
                    alt={`${member.name}, Class of ${classYear.year}`}
                    ratio="3/4"
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                    className="rounded-none border-0"
                  />
                ) : (
                  <div
                    style={{ aspectRatio: "3/4" }}
                    className="flex items-center justify-center bg-hunter-dark font-heading text-3xl text-white"
                  >
                    {initials(member.name)}
                  </div>
                )}
                <div className="p-4">
                  <p className="font-medium leading-snug">{member.name}</p>
                  {member.major && (
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {member.major}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Section>
      ))}
    </>
  );
}
