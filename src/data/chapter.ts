/**
 * Chapter-wide facts: officers, contact details, social links.
 *
 * This is the file to edit when the exec board turns over.
 * Nothing here is duplicated anywhere else in the site — the footer,
 * contact blocks, and metadata all read from here.
 */

export const chapter = {
  name: "Phi Kappa Psi",
  chapterName: "Massachusetts Beta",
  school: "MIT",
  tagline: "Developing leaders for profession, service, and brotherhood.",

  address: {
    street: "526 Beacon Street",
    city: "Boston",
    state: "MA",
    zip: "02215",
  },

  social: {
    instagram: "https://www.instagram.com/mitphipsi/",
    ifc: "https://ifc.mit.edu/",
  },
} as const;

/**
 * Current exec board.
 *
 * To add or remove a position, edit this array — the footer and the Brotherhood
 * page render whatever is here.
 *
 * Rush chairs are listed here deliberately: they are who a prospective member
 * contacts, so they should never quietly drop off the site.
 */
export const officers = [
  { role: "President", name: "Marc Baker", email: null },
  { role: "Vice President", name: "Sawyer Quallen", email: null },
  { role: "Rush Chairs", name: "Victor Perez, Marc Baker", email: null },
  { role: "Treasurer", name: "Jackson Kay", email: null },
  { role: "House Manager", name: "Anthony Meng", email: null },
  { role: "Risk Managers", name: "Ethan Kim, Nate Black", email: null },
  { role: "Corresponding Secretary", name: "Armaan Gill", email: null },
  { role: "Scribe", name: "Cole Nguyen", email: null },
] as const;

export const addressLine = `${chapter.address.street}, ${chapter.address.city}, ${chapter.address.state} ${chapter.address.zip}`;
