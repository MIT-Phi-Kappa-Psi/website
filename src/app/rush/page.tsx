import type { Metadata } from "next";

import { chapter } from "@/data/chapter";
import { rushPillars, rushStatus } from "@/data/rush";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { Placeholder } from "@/components/placeholder";
import { RushBanner } from "@/components/rush-banner";
import { Section, SectionHeading } from "@/components/section";

export const metadata: Metadata = {
  title: "Rush",
  description:
    "Why rush Phi Kappa Psi at MIT — professional development, brotherhood, social events, and living at 526 Beacon Street.",
};

export default function RushPage() {
  return (
    <>
      <PageHero
        eyebrow="Recruitment"
        title="Why rush Phi Psi?"
        description="Rush is how you find out whether a house fits. Come to as much or as little as you like — the brothers you meet are the reason to join, not the events."
      />

      <RushBanner />

      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          {rushPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-xl border border-border bg-card p-7"
            >
              <h2 className="text-xl font-semibold">{pillar.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="parchment">
        <SectionHeading
          eyebrow="What it looks like"
          title="A week of rush, roughly"
          description="Exact events change each semester. TODO: replace this with the real schedule once rush chairs set dates — it lives in src/data/rush.ts."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <Placeholder label="Rush event — dinner at the house" ratio="16/10" />
          <Placeholder label="Rush event — brothers with rushees" ratio="16/10" />
        </div>
      </Section>

      <Section tone="hunter" size="tight">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-semibold">Questions about rush?</h2>
            <p className="mt-3 max-w-lg text-white/75">
              Reach out to our rush chairs, or message us on Instagram. We&rsquo;re
              happy to answer anything before you commit to showing up.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            {rushStatus.state === "open" && rushStatus.signupUrl && (
              <Button
                size="lg"
                variant="secondary"
                nativeButton={false}
                render={<a href={rushStatus.signupUrl} />}
              >
                Sign up for rush
              </Button>
            )}
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              render={
                <a
                  href={chapter.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                />
              }
            >
              Message us on Instagram
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
