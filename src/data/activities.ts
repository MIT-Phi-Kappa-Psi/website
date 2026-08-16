/**
 * Activities page content: house events, service, athletics, and alumni.
 *
 * Photos come from the chapter's own albums (August 2026) and live in
 * `public/photos/{activities,service,sports,alumni}/`. To swap one, overwrite
 * the file at the same path — nothing else needs to change.
 */

export type Photo = {
  src: string;
  alt: string;
};

export type HouseEvent = {
  title: string;
  /**
   * Every frame the chapter supplied for this event, best one first — the
   * carousel opens on `photos[0]` and cycles from there. A single-entry array
   * renders as a plain photo with no controls.
   */
  photos: Photo[];
};

/** The recurring events that make up the chapter calendar. */
export const houseEvents: HouseEvent[] = [
  {
    title: "Every day",
    photos: [
      {
        src: "/photos/activities/every-day-1.jpg",
        alt: "The whole house crowded around the long dining table for house dinner.",
      },
      {
        src: "/photos/activities/every-day-2.jpg",
        alt: "Brothers serving themselves from trays of food at the dining table.",
      },
      {
        src: "/photos/activities/every-day-3.jpg",
        alt: "Brothers around the table mid-meal.",
      },
      {
        src: "/photos/activities/every-day-4.jpg",
        alt: "A ping-pong rally in Second Commons beside the Christmas tree.",
      },
      {
        src: "/photos/activities/every-day-5.jpg",
        alt: "Brothers sprawled across couches in a common room.",
      },
      {
        src: "/photos/activities/every-day-6.jpg",
        alt: "The house hanging out together in a common room at night.",
      },
    ],
  },
  {
    title: "Fall Hike",
    photos: [
      {
        src: "/photos/activities/fall-hike-1.jpg",
        alt: "Brothers lined up on a granite summit with autumn hills behind them.",
      },
      {
        src: "/photos/activities/fall-hike-2.jpg",
        alt: "Hikers crossing an open granite ledge above the treeline.",
      },
      {
        src: "/photos/activities/fall-hike-3.jpg",
        alt: "The group resting on a rocky outcrop, seen from across the ridge.",
      },
    ],
  },
  {
    title: "Pledge Retreat",
    photos: [
      {
        src: "/photos/activities/pledge-retreat-1.jpg",
        alt: "The pledge class gathered around a campfire after dark.",
      },
      {
        src: "/photos/activities/pledge-retreat-2.jpg",
        alt: "Brothers spread out across the floor of a timber-frame lodge.",
      },
      {
        src: "/photos/activities/pledge-retreat-3.jpg",
        alt: "Two canoes of brothers paddling down a wooded river.",
      },
    ],
  },
  {
    title: "Christmas Roast",
    photos: [
      {
        src: "/photos/activities/christmas-roast-1.jpg",
        alt: "The house packed into a common room decorated in wrapping paper for the Christmas Roast.",
      },
      {
        src: "/photos/activities/christmas-roast-2.jpg",
        alt: "A brother taking the floor to deliver a roast.",
      },
      {
        src: "/photos/activities/christmas-roast-3.jpg",
        alt: "Brothers watching the roast beneath the Phi Psi neon sign.",
      },
    ],
  },
  {
    title: "Fall Formal",
    photos: [
      {
        src: "/photos/activities/fall-formal-1.jpg",
        alt: "Brothers in suits at Fall Formal beside a decorated Christmas tree.",
      },
      {
        src: "/photos/activities/fall-formal-2.jpg",
        alt: "Brothers and dates at Fall Formal under the ballroom lights.",
      },
      {
        src: "/photos/activities/fall-formal-3.jpg",
        alt: "Dancing at Fall Formal.",
      },
    ],
  },
  {
    title: "Toga",
    photos: [
      {
        src: "/photos/activities/toga-1.jpg",
        alt: "Guests in togas at the annual Toga party.",
      },
      {
        src: "/photos/activities/toga-2.jpg",
        alt: "Brothers and guests in togas seated together at the party.",
      },
      {
        src: "/photos/activities/toga-3.jpg",
        alt: "A packed room of guests in togas.",
      },
    ],
  },
  {
    title: "Endicott Retreat",
    photos: [
      {
        src: "/photos/activities/endicott-retreat-1.jpg",
        alt: "Brothers around a fire pit outside the Endicott lodge.",
      },
      {
        src: "/photos/activities/endicott-retreat-2.jpg",
        alt: "Three brothers paddling a canoe across the lake.",
      },
    ],
  },
];

/**
 * Philanthropy.
 *
 * Two different things, deliberately kept separate:
 *  - `serviceIntro` — the standing commitment to the Margaret Fuller
 *    Neighborhood House in Cambridge, our one formal partnership.
 *  - `servicePhotos` — general campus philanthropy the house turns out for.
 *
 * The chapter is NOT affiliated with Rosie's Place, Habitat for Humanity, the
 * Greater Boston Food Bank, IMEC, or Cradles to Crayons. Those were carried
 * over from the old Squarespace site and removed in Aug 2026 as inaccurate —
 * do not put them back without checking with the service chairs.
 */
export const serviceIntro = {
  lead: "Brothers turn out for philanthropy events across campus throughout the year — charity races, fundraisers, and drives run with other houses and student groups.",
  partner: {
    name: "Margaret Fuller Neighborhood House",
    url: "https://margaretfullerhouse.org",
    logo: "/logos/margaret-fuller-house.png",
    body: "Our largest commitment is the Margaret Fuller Neighborhood House in Cambridge, where service chairs Sawyer Quallen and Manuel Martinez have established a standing volunteer partnership. Every brother in the house has pledged at least two to six hours of volunteering there, which has strengthened our connection to the broader community around MIT.",
  },
} as const;

export const servicePhotos: Photo[] = [
  {
    src: "/photos/service/walk-a-mile.jpg",
    alt: "Brothers with medals holding the Walk a Mile in Her Shoes banner on the track.",
  },
  {
    src: "/photos/service/tabling.jpg",
    alt: "Brothers tabling for a campus fundraiser on the lawn outside Kresge.",
  },
  {
    src: "/photos/service/dunk.jpg",
    alt: "Brothers being doused with a bucket of water at an evening charity event.",
  },
  {
    src: "/photos/service/celebration.jpg",
    alt: "Two brothers high-fiving at an outdoor campus charity event.",
  },
];

export type Sport = {
  name: string;
  photo: Photo;
};

/** Varsity teams with brothers on the roster. */
export const varsitySports: Sport[] = [
  {
    name: "Water Polo",
    photo: {
      src: "/photos/sports/water-polo.jpg",
      alt: "An MIT water polo player rising out of the water to take a shot on goal.",
    },
  },
  {
    name: "Volleyball",
    photo: {
      src: "/photos/sports/volleyball.jpg",
      alt: "MIT volleyball players on court between points.",
    },
  },
  {
    name: "Track & Field",
    photo: {
      src: "/photos/sports/track-and-field.jpg",
      alt: "An MIT athlete mid-throw in the javelin.",
    },
  },
  {
    name: "Football",
    photo: {
      src: "/photos/sports/football.jpg",
      alt: "MIT football players in maroon TECH jerseys on the sideline.",
    },
  },
  {
    name: "Crew",
    photo: {
      src: "/photos/sports/crew.jpg",
      alt: "An MIT eight rowing past the tents at a regatta.",
    },
  },
  {
    name: "Swimming & Diving",
    photo: {
      src: "/photos/sports/swimming-and-diving.jpg",
      alt: "An MIT diver in a tucked somersault above the board.",
    },
  },
];

/** Intramural leagues the house fields teams in. */
export const intramuralSports = [
  "Basketball",
  "Soccer",
  "Dodgeball",
  "Volleyball",
] as const;
