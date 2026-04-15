// GirlCon Chapters data.
// Add a new object to the `chapters` array for each chapter.
//
// Fields:
//   city        — Display name of the city (e.g. "Chicago, IL")
//   description — One-sentence blurb about the chapter
//   status      — "active" | "launching" | "past"
//                   active:    currently running chapter
//                   launching: in progress / coming soon
//                   past:      previously held event(s)
//   year        — Year(s) active, e.g. "2023" or "2023–2025" (leave "" if ongoing)
//   instagram   — Instagram handle WITHOUT the @, or "" if none

export const chapters = [
  {
    city: "Chicago, IL",
    description: "The founding chapter — home of GirlCon's flagship in-person conference.",
    status: "active",
    year: "",
    instagram: "girlcontech",
  },
  {
    city: "Laredo, TX",
    description: "GirlCon brought its conference experience to Laredo in 2023.",
    status: "past",
    year: "2023",
    instagram: "",
  },
  {
    city: "Chennai, India",
    description: "GirlCon's first international chapter, held in Chennai in 2025.",
    status: "past",
    year: "2025",
    instagram: "",
  },
  {
    city: "Macedonia",
    description: "GirlCon is coming to Macedonia — stay tuned for details.",
    status: "launching",
    year: "",
    instagram: "",
  },
  {
    city: "Taiwan",
    description: "GirlCon is coming to Taiwan — stay tuned for details.",
    status: "launching",
    year: "",
    instagram: "",
  },
];
