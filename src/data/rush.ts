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
  state: "open",
  headline: "Fall Rush 2026",
  detail: "September 5–10 at 526 Beacon Street.",
  signupUrl: null,
};

/** One item on the schedule — a single event on a single night. */
export type RushEvent = {
  name: string;
  /** Shown as written. Keep the poster's formatting, e.g. "1pm-4pm". */
  time: string;
};

export type RushDay = {
  day: string;
  /** Human-readable date as it appears on the poster, e.g. "Sep 5". */
  date: string;
  /** ISO date backing the <time> element, so the dates are machine-readable. */
  iso: string;
  events: RushEvent[];
  /** The poster marks the last two nights "Invite Only". */
  inviteOnly?: boolean;
};

/**
 * PARKED — not rendered anywhere right now, same as `rushPillars` below.
 *
 * A transcription of the Fall Rush 2026 poster, kept because the poster is a
 * JPEG: a screen reader gets nothing from it, it can't be searched, and no one
 * can copy a time out of it. The chapter chose to run the graphic on its own
 * (Sep 2026), so this is here for whoever wants the accessible version back —
 * the markup to render it is in this file's git history.
 *
 * If you do put it back and the two disagree, the poster is the source of
 * truth; re-transcribe rather than editing one half.
 */
export const rushSchedule: RushDay[] = [
  {
    day: "Saturday",
    date: "Sep 5",
    iso: "2026-09-05",
    events: [
      { name: "Barbecue & House Tours", time: "1pm-4pm" },
      { name: "Pool, Poker, & Ice Cream", time: "10pm-2am" },
    ],
  },
  {
    day: "Sunday",
    date: "Sep 6",
    iso: "2026-09-06",
    events: [
      { name: "K1 Speed Go Karting", time: "11am-3pm" },
      { name: "Psi Phi Party", time: "10pm-1am" },
    ],
  },
  {
    day: "Monday",
    date: "Sep 7",
    iso: "2026-09-07",
    events: [
      { name: "Beach Day", time: "11am-3pm" },
      { name: "Canes Dinner", time: "9pm-11:30pm" },
    ],
  },
  {
    day: "Tuesday",
    date: "Sep 8",
    iso: "2026-09-08",
    events: [{ name: "Backlot Games & Jefes", time: "6pm-8:30pm" }],
  },
  {
    day: "Wednesday",
    date: "Sep 9",
    iso: "2026-09-09",
    inviteOnly: true,
    events: [{ name: "Brother Debates", time: "8pm-10pm" }],
  },
  {
    day: "Thursday",
    date: "Sep 10",
    iso: "2026-09-10",
    inviteOnly: true,
    events: [{ name: "Fogo De Chao", time: "7:30pm-9:30pm" }],
  },
];

/**
 * The rush poster graphic — and the ONLY place the schedule appears on the
 * site, since `rushSchedule` above is parked and rendered nowhere.
 *
 * To change the schedule, export a new poster and overwrite
 * `public/photos/rush/schedule.jpg`; nothing else needs to change. Set this to
 * `null` and the poster drops out cleanly rather than leaving a broken image.
 */
export const schedulePoster: { src: string; alt: string } | null = {
  src: "/photos/rush/schedule.jpg",
  alt: "Fall Rush 2026 schedule poster: a Boston skyline and palm trees over the Phi Kappa Psi letters, listing every rush event from Saturday September 5 to Thursday September 10.",
};

/**
 * Rush video, embedded from the chapter Instagram.
 *
 * NOTE: this pulls in Instagram's `embed.js` — the only third-party script on
 * the site. It also breaks silently if the post is deleted or the account goes
 * private. Prefer a self-hosted mp4 in `public/video/` if the original file
 * ever turns up; see `src/components/instagram-embed.tsx`.
 *
 * Set to `null` to remove the video section entirely.
 */
export const rushVideoUrl: string | null =
  "https://www.instagram.com/p/Dc3yGS4Romy/";

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
