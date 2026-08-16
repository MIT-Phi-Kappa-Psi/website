/**
 * Careers page content: what brothers study, where they have worked, and the
 * alumni network.
 *
 * `courses` and `companies` were supplied by the chapter in Aug 2026 and
 * replaced the old Squarespace lists (generic majors, and an employer roll of
 * Goldman Sachs / Google / SpaceX etc. that nobody could substantiate). Keep
 * this list to places brothers have *actually* worked.
 */

export type Course = {
  /** MIT course number, e.g. "6-3". */
  number: string;
  /** Official degree name, per catalog.mit.edu. */
  name: string;
};

export const courses: Course[] = [
  { number: "2", name: "Mechanical Engineering" },
  { number: "6-3", name: "Computer Science and Engineering" },
  { number: "6-4", name: "Artificial Intelligence and Decision Making" },
  { number: "7", name: "Biology" },
  { number: "15-1", name: "Management" },
  { number: "15-3", name: "Finance" },
  { number: "16", name: "Aerospace Engineering" },
  { number: "18", name: "Mathematics" },
  { number: "20", name: "Biological Engineering" },
];

export const programs = [
  { name: "UROP", description: "Undergraduate Research Opportunities Program" },
  {
    name: "MISTI",
    description: "MIT International Science and Technology Initiatives",
  },
  {
    name: "Global Teaching Labs",
    description: "Teaching STEM abroad over IAP",
  },
] as const;

export type Company = {
  name: string;
  /**
   * Where the tile links. `null` renders a non-clickable tile — used when an
   * organisation has no safe live homepage.
   */
  homepage: string | null;
  /** Path under `public/`. `null` renders the name as text instead. */
  logo: string | null;
  /** Set when the logo is white/light and needs a dark tile to be visible. */
  dark?: boolean;
};

/**
 * Every place a current brother has worked or researched.
 *
 * Logos live in `public/logos/companies/`. Adding an entry without a logo is
 * fine — it renders as a text tile and the grid stays even.
 */
export const companies: Company[] = [
  {
    name: "IBM",
    homepage: "https://www.ibm.com",
    logo: "/logos/companies/ibm.svg",
  },
  {
    name: "Amazon",
    homepage: "https://www.amazon.com",
    logo: "/logos/companies/amazon.svg",
  },
  {
    name: "Genius Sports",
    homepage: "https://www.geniussports.com/",
    logo: "/logos/companies/genius-sports.png",
  },
  {
    name: "Ansys",
    // ansys.com now redirects here — Synopsys acquired Ansys in July 2025.
    homepage: "https://ansys.synopsys.com/",
    logo: "/logos/companies/ansys.svg",
  },
  {
    name: "GE Vernova",
    homepage: "https://www.gevernova.com/",
    logo: "/logos/companies/ge-vernova.svg",
  },
  {
    name: "Houlihan Lokey",
    homepage: "https://hl.com/",
    logo: "/logos/companies/houlihan-lokey.svg",
  },
  {
    name: "AmbroseAdvisors",
    homepage: "https://ambroseadvisors.com/",
    logo: "/logos/companies/ambrose-advisors.png",
    dark: true,
  },
  {
    name: "Arbor Biotechnologies",
    homepage: "https://arbor.bio/",
    logo: "/logos/companies/arbor-biotechnologies.png",
  },
  {
    name: "Boelens de Gruyter",
    homepage: "https://boelensdegruyter.nl/",
    logo: "/logos/companies/boelens-de-gruyter.svg",
  },
  {
    name: "Reachable Technology",
    homepage: "https://reachable-tech.com/",
    logo: "/logos/companies/reachable-technology.png",
  },
  {
    name: "NASA Jet Propulsion Laboratory",
    homepage: "https://www.jpl.nasa.gov/",
    logo: "/logos/companies/nasa-jpl.svg",
  },
  {
    name: "MIT CSAIL",
    homepage: "https://www.csail.mit.edu/",
    logo: "/logos/companies/mit-csail.png",
  },
  {
    name: "MIT Media Lab",
    homepage: "https://www.media.mit.edu/",
    logo: "/logos/companies/mit-media-lab.svg",
  },
  {
    name: "MIT Kavli Institute",
    homepage: "https://www.space.mit.edu/",
    logo: "/logos/companies/mit-kavli.png",
  },
  {
    name: "MIT STAR Lab",
    homepage: "https://aeroastro.mit.edu/starlab/",
    logo: "/logos/companies/mit-starlab.svg",
  },
  {
    name: "MIT Engineering Systems Lab",
    homepage: "https://systems.mit.edu/",
    logo: "/logos/companies/mit-esl.png",
  },
  {
    name: "MIT Space Enabled",
    homepage: "https://www.media.mit.edu/groups/space-enabled/",
    logo: "/logos/companies/mit-space-enabled.svg",
  },
  {
    name: "MIT SPARK Lab",
    homepage: "https://web.mit.edu/sparklab/",
    logo: null,
  },
  {
    name: "MIT Accelerated Materials Lab for Sustainability",
    // No live homepage: the lab's old domain (buonassisigroup.com) has been
    // taken over and now serves spam, so it is deliberately NOT linked.
    homepage: null,
    logo: null,
  },
  {
    name: "Yaffe Lab, Koch Institute",
    homepage: "https://yaffelab.mit.edu/",
    logo: null,
  },
  {
    name: "USC Space Engineering Research Center",
    homepage: "https://www.isi.edu/centers-serc/",
    logo: null,
  },
  {
    name: "Imperial College London",
    homepage: "https://www.imperial.ac.uk/",
    logo: "/logos/companies/imperial-college-london.svg",
  },
  {
    name: "SISSA",
    homepage: "https://www.sissa.it/",
    logo: null,
  },
  {
    name: "HOBY Youth Leadership",
    homepage: "https://hoby.org/",
    logo: "/logos/companies/hoby.svg",
    dark: true,
  },
];

export type Photo = {
  src: string;
  alt: string;
};

export type AlumniItem = {
  photo: Photo;
  /** The caption shown under the photo. Written by the chapter. */
  caption: string;
};

/**
 * Alumni connections — brothers who graduated and kept turning up.
 *
 * Lives on the Careers page: the alumni network is the professional story, not
 * a house activity. Photos are in `public/photos/alumni/`.
 */
export const alumniConnections: AlumniItem[] = [
  {
    photo: {
      src: "/photos/alumni/talk.jpg",
      alt: "Alumnus Pat Everett speaking to brothers at a rush dinner.",
    },
    caption:
      "Alumnus Pat Everett talking about the TT-Oklo pipeline at the Fogo de Chão dinner during Rush.",
  },
  {
    photo: {
      src: "/photos/alumni/chapter-room.jpg",
      alt: "Alumnus Jeff Ma with brothers in the chapter room beneath the class composites.",
    },
    caption:
      "Alumnus Jeff Ma stopped by the House to talk about the glory days of perfecting the Blackjack craft in the 526 basement, inspiring the movie 21.",
  },
  {
    photo: {
      src: "/photos/alumni/ballgame.jpg",
      alt: "Brothers and alumni filling a section of the stands at Fenway Park.",
    },
    caption: "Yearly brothers & alumni outing at the Red Sox game.",
  },
];
