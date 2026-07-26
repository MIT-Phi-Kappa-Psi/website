/**
 * Rush status and recruitment content.
 *
 * THE MOST IMPORTANT FILE TO KEEP CURRENT. The old site sat on
 * "Spring Rush 2025 has closed" for over a year — don't repeat that.
 *
 * `rushStatus.state` drives the banner on both the homepage and /rush:
 *   "open"   → green banner, shows the signup CTA
 *   "closed" → muted banner, hides the CTA
 *   "soon"   → cardinal banner, hides the CTA
 */

type RushStatus = {
  state: "open" | "closed" | "soon";
  headline: string;
  detail: string;
  /** Where the "Sign up" button points. A Google Form URL works fine here. */
  signupUrl: string | null;
};

export const rushStatus: RushStatus = {
  state: "soon",
  headline: "Fall Rush 2026",
  detail: "Dates coming soon — follow us on Instagram for announcements.",
  signupUrl: null,
};

export const rushPillars = [
  {
    title: "Academic & Professional Development",
    body: "Brothers work at Morgan Stanley, Apple, Google, SpaceX, Tesla, NASA, and McKinsey. A dedicated professional development chair runs resume workshops and connects members to alumni in their field.",
  },
  {
    title: "Brotherhood",
    body: "BBLB, the Christmas Roast, the Endicott retreat, boat races, and golf outings. The traditions are the point — they're what turns a group of MIT students into a class you stay close to after graduation.",
  },
  {
    title: "Social Events",
    body: "Foam parties, toga, our Christmas party, and winter and spring formals. Well-planned events, run by brothers who care about doing them right.",
  },
  {
    title: "House Living",
    body: "526 Beacon Street — a five-story brownstone in Back Bay, a river crossing away from campus. Cheaper than the dorms, better food, and everyone you want to study with already lives there.",
  },
] as const;
