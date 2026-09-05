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
  // Industry.
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
    name: "McKinsey & Company",
    homepage: "https://www.mckinsey.com",
    logo: "/logos/companies/mckinsey.svg",
  },
  {
    name: "Houlihan Lokey",
    homepage: "https://hl.com/",
    logo: "/logos/companies/houlihan-lokey.svg",
  },
  {
    name: "Guggenheim Securities",
    homepage: "https://www.guggenheimsecurities.com",
    // Their own wordmark is "GUGGENHEIM" alone — the firm publishes no
    // "Securities" lockup, so the tile reads shorter than the name.
    logo: "/logos/companies/guggenheim-securities.svg",
  },
  {
    name: "Citadel",
    // Citadel LLC, the hedge fund — NOT Citadel Securities, which is a
    // separate firm at citadelsecurities.com. Both run MIT internships.
    homepage: "https://www.citadel.com",
    logo: "/logos/companies/citadel.svg",
  },
  {
    name: "Two Sigma",
    homepage: "https://www.twosigma.com",
    logo: "/logos/companies/two-sigma.svg",
  },
  {
    name: "Calamos Investments",
    homepage: "https://www.calamos.com/",
    logo: "/logos/companies/calamos.svg",
  },
  {
    name: "ClearAlpha Technologies",
    homepage: "https://www.clearalphatech.com/",
    logo: "/logos/companies/clearalpha-technologies.svg",
  },
  {
    name: "VarCov",
    homepage: "https://varcov.com/",
    // Cropped out of the homepage hero: their two-page site publishes no
    // vector or transparent version. Replace if a real asset turns up.
    logo: "/logos/companies/varcov.png",
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
    name: "UserTesting",
    homepage: "https://www.usertesting.com/",
    logo: "/logos/companies/user-testing.svg",
  },
  {
    name: "UpcycleX",
    // upcyclex.tech, the plastics-to-chemicals startup. NOT upcyclex.com,
    // which is an unrelated Nevada page — do not "fix" this to .com.
    homepage: "https://www.upcyclex.tech/",
    logo: "/logos/companies/upcyclex.png",
  },
  {
    name: "Möbius Industries",
    homepage: "https://mobiusindustry.com/",
    // Their site sets the wordmark as HTML text; the only image they publish
    // is an unlabelled abstract mark, which would leave the tile unreadable.
    logo: null,
  },
  {
    name: "Bohannan Huston",
    homepage: "https://bhinc.com/",
    logo: "/logos/companies/bohannan-huston.svg",
  },

  // Government, military, and national labs.
  {
    name: "United States Navy",
    homepage: "https://www.navy.mil",
    // The Navy's brand mark reads "AMERICA'S NAVY" — that is their own
    // lockup, not a mismatch with the name above.
    logo: "/logos/companies/united-states-navy.svg",
  },
  {
    name: "Executive Office of the President",
    homepage: "https://www.whitehouse.gov/",
    // The official EOP seal is ring lettering around an eagle and turns to
    // mush at tile size; whitehouse.gov's header mark is administration
    // branding that would date instantly. Text tile is the durable choice.
    logo: null,
  },
  {
    name: "Massachusetts State Senate",
    homepage: "https://malegislature.gov/Legislators/Senate",
    // malegislature.gov has no logo image at all — its masthead is CSS text.
    logo: null,
  },
  {
    name: "NASA Jet Propulsion Laboratory",
    homepage: "https://www.jpl.nasa.gov/",
    logo: "/logos/companies/nasa-jpl.svg",
  },

  // MIT labs, centres, and departments.
  {
    name: "MIT CSAIL",
    homepage: "https://www.csail.mit.edu/",
    logo: "/logos/companies/mit-csail.png",
  },
  {
    name: "Improbable AI Lab",
    homepage: "https://improbableai.com/",
    // Pulkit Agrawal's group at CSAIL. Their only mark is a bare gradient
    // triangle with no lettering — the name says more than the icon would.
    logo: null,
  },
  {
    name: "MIT Media Lab",
    homepage: "https://www.media.mit.edu/",
    logo: "/logos/companies/mit-media-lab.svg",
  },
  {
    name: "MIT Digital Currency Initiative",
    homepage: "https://www.dci.mit.edu",
    logo: "/logos/companies/mit-dci.png",
  },
  {
    name: "MIT LIDS",
    homepage: "https://lids.mit.edu",
    logo: "/logos/companies/mit-lids.svg",
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
    name: "MIT IMES",
    homepage: "https://imes.mit.edu",
    logo: "/logos/companies/mit-imes.svg",
    // IMES publishes only a white wordmark; no dark variant exists.
    dark: true,
  },
  {
    name: "MIT J-WAFS",
    homepage: "https://jwafs.mit.edu",
    logo: "/logos/companies/mit-jwafs.svg",
  },
  {
    name: "MIT Furst Lab",
    // Ariel Furst, Chemical Engineering.
    homepage: "https://furstlab.mit.edu",
    logo: null,
  },
  {
    name: "Brushett Research Group",
    // Fikile Brushett, Chemical Engineering. The .org domain that still tops
    // search results is a dead Wix site — this MIT host is the live one.
    homepage: "https://brushettresearchgroup.mit.edu",
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
    name: "MIT Mathematics",
    homepage: "https://math.mit.edu",
    logo: "/logos/companies/mit-mathematics.svg",
  },
  {
    name: "MIT Economics",
    homepage: "https://economics.mit.edu",
    // The department's own header is CSS text, not an image — a text tile
    // reproduces their branding rather than falling short of it.
    logo: null,
  },
  {
    name: "MIT Sloan",
    homepage: "https://mitsloan.mit.edu",
    logo: "/logos/companies/mit-sloan.svg",
  },

  // Other universities and research institutes.
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
    name: "Auckland University of Technology",
    homepage: "https://www.aut.ac.nz/",
    logo: "/logos/companies/auckland-university-of-technology.svg",
  },
  {
    name: "University of Stuttgart",
    // Links to PI5, the 5th Institute of Physics, where the work happened —
    // the institute has no mark of its own, so the tile shows the university.
    homepage: "https://www.pi5.uni-stuttgart.de/",
    logo: "/logos/companies/university-of-stuttgart.svg",
  },
  {
    name: "Hasso Plattner Institute",
    // HPI Potsdam — not the Hasso Plattner Institute of Design at Stanford.
    homepage: "https://hpi.de/en/",
    logo: "/logos/companies/hasso-plattner-institute.svg",
  },
  {
    name: "SISSA",
    homepage: "https://www.sissa.it/",
    logo: null,
  },

  // Nonprofit.
  {
    name: "HOBY Youth Leadership",
    homepage: "https://hoby.org/",
    logo: "/logos/companies/hoby.svg",
    dark: true,
  },
];

/**
 * Clubs and activities brothers are involved in outside class.
 *
 * Reuses the `Company` type and renders through the same `<CompanyGrid>` as
 * the company wall above — the two lists are separate only because they answer
 * different questions. Logos live in `public/logos/extracurriculars/`.
 *
 * Sports are deliberately NOT here: varsity teams and intramural leagues live
 * in `src/data/activities.ts` and are shown with photos on the Activities
 * page. Adding a team here would duplicate them.
 */
export const extracurriculars: Company[] = [
  {
    name: "MIT Navy ROTC",
    homepage: "https://nrotc.mit.edu/",
    logo: "/logos/extracurriculars/mit-nrotc.png",
  },
  {
    name: "MIT Undergraduate Association",
    homepage: "https://ua.mit.edu/",
    logo: "/logos/extracurriculars/mit-undergraduate-association.png",
  },
  {
    name: "Gordon-MIT Engineering Leadership",
    // GEL. gelp.mit.edu redirects here.
    homepage: "https://gel.mit.edu/",
    logo: "/logos/extracurriculars/gordon-mit-engineering-leadership.png",
  },
  {
    name: "MIT Capital Partners",
    homepage: "https://mitcap.vc/",
    logo: "/logos/extracurriculars/mit-capital-partners.png",
    // Their site is dark-themed and ships a white wordmark only.
    dark: true,
  },
  {
    name: "MIT Consulting Group",
    // MCG, the undergraduate group — not the Sloan Management Consulting
    // Club, and not the separate "Consulting Club at MIT".
    homepage: "https://www.mitconsulting.group/",
    logo: "/logos/extracurriculars/mit-consulting-group.png",
  },
  {
    name: "MIT Entrepreneurship Club",
    // Both of MEC's own domains are dead, so this points at their MIT student
    // group directory entry — the only page that stays up. Swap in a real
    // homepage if they stand one up again.
    homepage: "https://engage.mit.edu/MITEC/",
    logo: null,
  },
  {
    name: "Kesem at MIT",
    // The national org dropped "Camp" — it is just Kesem now, and "Camp
    // Kesem" names only its summer camp program.
    homepage: "https://kesem.mit.edu/",
    logo: "/logos/extracurriculars/kesem.svg",
  },
  {
    name: "Athletes in Action",
    homepage: "https://athletesinaction.org/",
    logo: "/logos/extracurriculars/athletes-in-action.png",
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
