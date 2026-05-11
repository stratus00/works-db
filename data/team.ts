export interface TeamMember {
  slug: string;
  name: string;
  title: string;
  bio: string[];
  portrait: string;
  showOnHomepage: boolean;
}

export const team: TeamMember[] = [
  {
    slug: "leia-currie",
    name: "Leia Currie",
    title: "Principal — Architecture & Design",
    showOnHomepage: true,
    portrait: "/images/team/sam-and-leia.jpg",
    bio: [
      `Leia Currie is the design lead at WORKS-db and brings years of experience in residential architecture across the Southeast. Her work is shaped by a deep attention to the specifics of each site — how light moves through a space at different times of year, how a building meets its landscape, and how the materials chosen will weather and age.`,
      `Before co-founding WORKS-db, Leia developed her professional background in both design and construction, giving her an unusual ability to develop ideas that are not just beautiful on paper but fully buildable — and built the way they were drawn.`,
      `Leia believes that a well-designed home is one the client can grow into — one that improves with time and use rather than dating itself to the year it was built.`,
    ],
  },
  {
    slug: "sam-currie",
    name: "Sam Currie",
    title: "Principal — Construction & Project Delivery",
    showOnHomepage: true,
    portrait: "/images/team/sam-and-leia.jpg",
    bio: [
      `Sam Currie leads construction operations at WORKS-db and has spent his career at the intersection of design and building. He spent years with GLUCK+, the New York-based architecture and design-build firm, serving as construction manager and project designer on completed residential projects in North Carolina and Illinois, and on an ongoing project in Birmingham.`,
      `That experience — working inside one of the country's most rigorous design-build practices — is the direct foundation for WORKS-db. Sam understands the full lifecycle of a building project: what it takes to turn a design into a permit set, a permit set into a construction schedule, and a construction schedule into a finished building that matches the architect's intent.`,
      `Sam believes that the most important moment in any project is the one where design decisions meet their material consequences. Being present for both sides of that moment — drawing the detail and then building it — is what WORKS-db is built around.`,
    ],
  },
];
