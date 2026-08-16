/**
 * The brotherhood roster, grouped by graduating class.
 *
 * Headshots live in `public/photos/members/<year>/<slug>.jpg`, cropped to a
 * 3:4 portrait. They came from the chapter's own photo set (August 2026),
 * originals in `inbox/Class of <year>/`.
 *
 * **Adding a pledge class:** add a `ClassYear` entry below, drop the headshots
 * in `public/photos/members/<year>/`, and point each `image` at one. Order the
 * array newest-graduating-last; the page renders them in array order.
 *
 * **Adding one member:** if there is no photo yet, set `image: null` — the card
 * falls back to initials on a hunter-green circle, so a missing headshot still
 * looks intentional.
 *
 * TODO: `major` is unknown for everyone. Fill it in and it renders under the
 * name automatically.
 */

export type Member = {
  name: string;
  major?: string;
  hometown?: string;
  image?: string | null;
};

export type ClassYear = {
  year: number;
  members: Member[];
};

export const roster: ClassYear[] = [
  {
    year: 2027,
    members: [
      { name: "Andras Beleznay", image: "/photos/members/2027/andras-beleznay.jpg" },
      { name: "Anthony Meng", image: "/photos/members/2027/anthony-meng.jpg" },
      { name: "Jack Tucker", image: "/photos/members/2027/jack-tucker.jpg" },
      { name: "Jackson Kay", image: "/photos/members/2027/jackson-kay.jpg" },
      { name: "Jensen Fiskin", image: "/photos/members/2027/jensen-fiskin.jpg" },
      { name: "Jonah Goldstein", image: "/photos/members/2027/jonah-goldstein.jpg" },
      { name: "Kieran Kearns", image: "/photos/members/2027/kieran-kearns.jpg" },
      { name: "Kunal Rajadhyax", image: "/photos/members/2027/kunal-rajadhyax.jpg" },
      { name: "Manuel Martinez", image: "/photos/members/2027/manuel-martinez.jpg" },
      { name: "Rick Lundh", image: "/photos/members/2027/rick-lundh.jpg" },
      { name: "Victor Perez", image: "/photos/members/2027/victor-perez.jpg" },
      { name: "William Ewald", image: "/photos/members/2027/william-ewald.jpg" },
      { name: "Zaire Williams", image: "/photos/members/2027/zaire-williams.jpg" },
    ],
  },
  {
    year: 2028,
    members: [
      { name: "Anirudh Chari", image: "/photos/members/2028/anirudh-chari.jpg" },
      { name: "Armaan Gill", image: "/photos/members/2028/armaan-gill.jpg" },
      { name: "Avi Narula", image: "/photos/members/2028/avi-narula.jpg" },
      { name: "Derek Schaffer", image: "/photos/members/2028/derek-schaffer.jpg" },
      { name: "Josh Woren", image: "/photos/members/2028/josh-woren.jpg" },
      { name: "Marc Baker", image: "/photos/members/2028/marc-baker.jpg" },
      { name: "Sawyer Quallen", image: "/photos/members/2028/sawyer-quallen.jpg" },
      { name: "Simos Michalopoulos", image: "/photos/members/2028/simos-michalopoulos.jpg" },
      { name: "Xzavier Buckmiller", image: "/photos/members/2028/xzavier-buckmiller.jpg" },
    ],
  },
  {
    year: 2029,
    members: [
      { name: "Caspar Lightner", image: "/photos/members/2029/caspar-lightner.jpg" },
      { name: "Cole Nguyen", image: "/photos/members/2029/cole-nguyen.jpg" },
      { name: "David Ranaudo", image: "/photos/members/2029/david-ranaudo.jpg" },
      { name: "Davin Li", image: "/photos/members/2029/davin-li.jpg" },
      { name: "Ethan Kim", image: "/photos/members/2029/ethan-kim.jpg" },
      { name: "Matt Louis", image: "/photos/members/2029/matt-louis.jpg" },
      { name: "Nate Black", image: "/photos/members/2029/nate-black.jpg" },
      { name: "Xander Garret", image: "/photos/members/2029/xander-garret.jpg" },
    ],
  },
];

export const memberCount = roster.reduce(
  (total, classYear) => total + classYear.members.length,
  0,
);

export function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}
