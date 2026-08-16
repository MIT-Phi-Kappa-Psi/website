/**
 * House page content: 526 Beacon Street, floor by floor.
 *
 * Sourced from the chapter's own "526 Beacon House Tour" deck (October 2025),
 * which lives in `inbox/House Tour.pdf`. Photos were extracted from it into
 * `public/photos/house/`.
 *
 * Every room in the house has a name that gets passed down with it. Keep them
 * accurate — when a room is renamed or repainted, update it here and drop a
 * replacement photo at the same path.
 *
 * To re-shoot a photo: replace the file in `public/photos/house/`, keeping the
 * filename. Nothing else needs to change.
 */

export type Photo = {
  src: string;
  alt: string;
};

export type Room = {
  name: string;
  photo: Photo;
};

export type Floor = {
  /** Short label for the floor rail, e.g. "2C". */
  short: string;
  name: string;
  rooms: Room[];
};

export const houseStats = [
  { value: "14", label: "Bedrooms" },
  { value: "5", label: "Stories" },
  { value: "2", label: "Commons" },
  { value: "1", label: "Bridge from campus" },
] as const;

export const exteriorPhoto: Photo = {
  src: "/photos/house/exterior.jpg",
  alt: "The 526 Beacon Street brownstone, ivy-covered facade with a red front door.",
};

/**
 * The shared spaces — everything that isn't someone's bedroom.
 */
export const amenities: { title: string; photo: Photo }[] = [
  {
    title: "The kitchen",
    photo: {
      src: "/photos/house/kitchen.jpg",
      alt: "Commercial kitchen with a stainless steel prep island and walk-in refrigerator.",
    },
  },
  {
    title: "First Commons",
    photo: {
      src: "/photos/house/first-commons.jpg",
      alt: "First Commons with leather couches, a foosball table, and the main staircase.",
    },
  },
  {
    title: "Second Commons",
    photo: {
      src: "/photos/house/second-commons.jpg",
      alt: "Second Commons: a long open room with a ping-pong table, fireplace, and bay windows.",
    },
  },
  {
    title: "Dining Area",
    photo: {
      src: "/photos/house/dining-area.jpg",
      alt: "The dining area, with a long wooden table ringed by blue chairs.",
    },
  },
  {
    title: "Weight room",
    photo: {
      src: "/photos/house/weight-room.jpg",
      alt: "Weight room with a squat rack, bench, and flags on the wall.",
    },
  },
  {
    title: "Laundry",
    photo: {
      src: "/photos/house/laundry-room.jpg",
      alt: "Laundry room with two washers and two dryers.",
    },
  },
];

/**
 * The tour, bottom to top — the order the house is actually walked in.
 */
export const floors: Floor[] = [
  {
    short: "B",
    name: "Basement",
    rooms: [
      {
        name: "Pit",
        photo: {
          src: "/photos/house/basement-room.jpg",
          alt: "The Pit, a basement bedroom with a couch, hanging clothes rack, and hardwood floor.",
        },
      },
    ],
  },
  {
    short: "2C",
    name: "Second floor",
    rooms: [
      {
        name: "White/Purple Room",
        photo: {
          src: "/photos/house/white-purple-room.jpg",
          alt: "The White/Purple Room: a lofted bed above a leather couch, lit with purple LEDs.",
        },
      },
      {
        name: "Red Room",
        photo: {
          src: "/photos/house/red-room.jpg",
          alt: "The Red Room, a front-facing bedroom with tall bay windows.",
        },
      },
    ],
  },
  {
    short: "3",
    name: "Third floor",
    rooms: [
      {
        name: "Ball Room",
        photo: {
          src: "/photos/house/ball-room.jpg",
          alt: "The Ball Room: a long room with topographic-print wallpaper, a large sectional couch, and a wall-mounted TV.",
        },
      },
      {
        name: "3FL",
        photo: {
          src: "/photos/house/3fl.jpg",
          alt: "3FL, a bedroom with a road sign on the wall, desk, and street-facing windows.",
        },
      },
      {
        name: "3RD",
        photo: {
          src: "/photos/house/3rd.jpg",
          alt: "3RD: a bedroom with string lights, a lofted bed, and a leather couch.",
        },
      },
      {
        name: "Rainbow Room",
        photo: {
          src: "/photos/house/rainbow-room.jpg",
          alt: "The Rainbow Room, lit with colour-changing string lights and a wall-mounted TV.",
        },
      },
    ],
  },
  {
    short: "4",
    name: "Fourth floor",
    rooms: [
      {
        name: "Lodge",
        photo: {
          src: "/photos/house/lodge.jpg",
          alt: "The Lodge, a bedroom with log-cabin print wallpaper along one wall.",
        },
      },
      {
        name: "Batcave",
        photo: {
          src: "/photos/house/batcave.jpg",
          alt: "The Batcave: a windowless bedroom with a bunk bed and mounted TV.",
        },
      },
      {
        name: "Bowling Alley",
        photo: {
          src: "/photos/house/bowling-alley.jpg",
          alt: "The Bowling Alley, a long narrow bedroom with desks along one wall.",
        },
      },
      {
        name: "GRA Room",
        photo: {
          src: "/photos/house/gra-room.jpg",
          alt: "The GRA Room, with a couch, desk, and flags on the wall.",
        },
      },
    ],
  },
  {
    short: "5",
    name: "Fifth floor",
    rooms: [
      {
        name: "Penthouse",
        photo: {
          src: "/photos/house/penthouse.jpg",
          alt: "The Penthouse: a wide double bedroom with windows on two walls.",
        },
      },
      {
        name: "Smokestack",
        photo: {
          src: "/photos/house/smokestack.jpg",
          alt: "The Smokestack, a bedroom with an exposed original brick chimney wall.",
        },
      },
      {
        name: "Pinnacle",
        photo: {
          src: "/photos/house/pinnacle.jpg",
          alt: "The Pinnacle, the top-floor bedroom with built-in storage and a bright window.",
        },
      },
    ],
  },
];
