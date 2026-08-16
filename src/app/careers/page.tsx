import type { Metadata } from "next";

import {
  alumniConnections,
  companies,
  courses,
  programs,
} from "@/data/careers";
import { Badge } from "@/components/ui/badge";
import { CompanyGrid } from "@/components/company-grid";
import { PageHero } from "@/components/page-hero";
import { Photo } from "@/components/photo";
import { Section, SectionHeading } from "@/components/section";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "What brothers of Phi Kappa Psi at MIT study, where they have worked, and the alumni network behind it.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero eyebrow="Professional development" title="Careers" />

      <Section>
        <SectionHeading eyebrow="Course numbers" title="What brothers study" />
        <ul className="mt-10 flex flex-wrap gap-2.5">
          {courses.map((course) => (
            <li key={course.number}>
              <Badge
                variant="secondary"
                className="gap-2 px-3 py-1.5 text-sm"
                title={course.name}
              >
                <span className="font-semibold text-cardinal">
                  {course.number}
                </span>
                <span className="text-muted-foreground">{course.name}</span>
              </Badge>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="parchment">
        <SectionHeading
          eyebrow="The network"
          title="Where brothers have worked"
          description="Through our alumni network we have a connection to virtually any company you might want to work at. These are the places current brothers have actually worked and researched."
        />
        <CompanyGrid companies={companies} />
      </Section>

      <Section>
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

      <Section tone="parchment">
        <SectionHeading eyebrow="Alumni" title="The network stays close" />
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {alumniConnections.map((item) => (
            <figure key={item.photo.src}>
              <Photo
                src={item.photo.src}
                alt={item.photo.alt}
                ratio="4/3"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <figcaption className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </>
  );
}
