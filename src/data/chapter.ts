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
 * TODO: These carried over from the old Squarespace site and are almost
 * certainly out of date (they date from the 2025 era). Replace with the
 * current board before launch.
 *
 * To add or remove a position, edit this array — the footer and contact
 * sections render whatever is here.
 */
export const officers = [
  { role: "Regent", name: "Jack Debaugh", email: null },
  { role: "Vice Regent", name: "Kunal Rajadhyax", email: null },
  { role: "Rush Chairs", name: "Jensen Fiskin, Kunal Rajadhyax", email: null },
  { role: "Alumni Correspondent", name: "Ben Volokh", email: null },
] as const;

export const addressLine = `${chapter.address.street}, ${chapter.address.city}, ${chapter.address.state} ${chapter.address.zip}`;
