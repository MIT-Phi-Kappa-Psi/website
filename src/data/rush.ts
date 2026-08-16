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

/**
 * Rush chairs — the contact path for prospective members.
 *
 * `phone` is what gets shown; `tel` is the E.164 number the link dials, so a
 * recruit on a phone can tap once to call or text. Keep them in sync.
 *
 * Headshots are the same files the Brotherhood page uses — don't duplicate
 * them. When the chairs turn over, update this list *and* the "Rush Chairs"
 * entry in `src/data/chapter.ts`.
 */
export const rushChairs = [
  {
    name: "Victor Perez",
    image: "/photos/members/2027/victor-perez.jpg",
    phone: "+1 (305) 794-9444",
    tel: "+13057949444",
    email: "vaperez5@mit.edu",
  },
  {
    name: "Marc Baker",
    image: "/photos/members/2028/marc-baker.jpg",
    phone: "(864) 275-3812",
    tel: "+18642753812",
    email: "cmbaker3@mit.edu",
  },
] as const;

/**
 * PARKED — not rendered anywhere right now.
 *
 * The Rush page was cut back to just the chairs' contact details until the
 * Fall 2026 schedule is set. These four pillars are the old "Why rush Phi Psi?"
 * copy, kept here so they can go straight back on the page when rush opens.
 */
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
