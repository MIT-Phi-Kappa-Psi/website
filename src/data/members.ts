/**
 * The brotherhood roster, grouped by graduating class.
 *
 * TODO: Placeholder structure only — the old site listed members by class
 * year but the names weren't recoverable from the page. Fill in the real
 * roster before launch, and add a new class each fall.
 *
 * `major` and `image` are optional. Leave `image` as null and the card
 * renders initials instead of a photo, so the page looks intentional
 * even before photos exist.
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
      { name: "First Last", major: "Course 6", image: null },
      { name: "First Last", major: "Course 2", image: null },
      { name: "First Last", major: "Course 18", image: null },
    ],
  },
  {
    year: 2028,
    members: [
      { name: "First Last", major: "Course 16", image: null },
      { name: "First Last", major: "Course 15", image: null },
    ],
  },
  {
    year: 2029,
    members: [{ name: "First Last", major: "Undeclared", image: null }],
  },
];

export function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}
