/**
 * Activities page content: service, athletics, and house traditions.
 * Sourced from the old site; update as the chapter changes.
 */

export const servicePartners = [
  { name: "Rosie's Place", description: "Boston's first shelter for women." },
  { name: "Habitat for Humanity", description: "Building and repairing homes across Greater Boston." },
  { name: "Greater Boston Food Bank", description: "Sorting and distributing food to local pantries." },
  {
    name: "International Medical Equipment Collaborative",
    description: "Refurbishing medical equipment for clinics abroad.",
  },
  { name: "Cradles to Crayons", description: "Providing essentials to children in need." },
  { name: "Emergency Medical Services", description: "Brothers certified and serving as EMTs." },
] as const;

export const varsitySports = [
  "Football",
  "Swimming",
  "Basketball",
  "Water Polo",
  "Track & Field",
  "Volleyball",
  "Rowing",
  "Diving",
] as const;

export const intramuralSports = [
  "Basketball",
  "Dodgeball",
  "Foosball",
  "Soccer",
  "Softball",
  "Spikeball",
] as const;

export const traditions = [
  {
    title: "House dinners",
    body: "Every weeknight, all together. Weekly senior speeches and frequent alumni talks turn dinner into the center of house life.",
  },
  {
    title: "Brother of the Week",
    body: "Thursday night nominations — recognition from the people who actually noticed.",
  },
  {
    title: "Retreats",
    body: "Canoeing trips and Cape Cod weekends away from campus.",
  },
] as const;
