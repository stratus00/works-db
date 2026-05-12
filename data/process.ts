export interface ProcessPhase {
  number: string;
  name: string;
  description: string;
  clientRole: string;
}

export const processIntro = {
  headline: "Design and build, under one roof.",
  body: [
    `In the traditional model, an architect designs a building and hands the drawings to a contractor who builds it. The two parties negotiate, interpret, and sometimes work against each other. Details get value-engineered out. The design intent arrives on site diluted. At Works.db, we don't work that way.`,
    `As your design-build firm, we are responsible for both the drawings and the construction. One team, one contract, one point of accountability — from the first conversation to the day we hand you the keys.`,
  ],
};

export const processPhases: ProcessPhase[] = [
  {
    number: "01",
    name: "Discovery",
    description: `We begin with a conversation about you, your site, your goals, and your budget. We ask a lot of questions — about how you live, what you value, and what you want the finished building to make possible. This phase costs nothing and commits you to nothing.`,
    clientRole: `Share your vision, your wishlist, and your budget range. Bring references if you have them. The more specific you can be about how you want to feel in the finished space, the better.`,
  },
  {
    number: "02",
    name: "Concept Design",
    description: `We develop 1–2 concept directions in response to your site and goals — diagrams, sketches, and precedent images that establish the fundamental logic of the project. At the end of this phase, you choose a direction to develop.`,
    clientRole: `Review and respond to the concepts. This is the easiest point to change direction — the later we get, the more expensive changes become. Say what you love and what you don't.`,
  },
  {
    number: "03",
    name: "Design Development",
    description: `The selected concept becomes a full design: floor plans, elevations, sections, material selections, and specifications. Because we're also your builder, every decision is made with buildability and budget in mind. By the end of this phase you will know what your building looks like and, within a margin, what it will cost.`,
    clientRole: `Make final decisions on layout, materials, and fixtures. This is when selections happen — we'll guide you through each one and explain the trade-offs.`,
  },
  {
    number: "04",
    name: "Construction Documents",
    description: `We produce the full set of drawings and specifications required for permitting and construction. Because we build what we draw, our documents are written with precision. There are no ambiguous details left for a contractor to interpret.`,
    clientRole: `Review and sign off on the final documents. After this point, changes to the design carry a cost — we'll always be transparent about what that is.`,
  },
  {
    number: "05",
    name: "Permitting",
    description: `We submit to the City of Birmingham (or the relevant jurisdiction) and manage the permitting process on your behalf — responses, revisions, and any additional requirements from the building department.`,
    clientRole: `Nothing required from you beyond availability for any unusual questions. We handle the back-and-forth.`,
  },
  {
    number: "06",
    name: "Construction",
    description: `We build your project. Sam leads construction operations, managing subcontractors, scheduling, and procurement. Leia conducts regular site visits to verify that construction matches design intent. You'll receive regular updates and are welcome on site at any time.`,
    clientRole: `Stay in communication and respond promptly to any decisions that arise on site. Visit whenever you want — we encourage it.`,
  },
  {
    number: "07",
    name: "Close-Out",
    description: `At completion, we walk the project with you and document anything that needs finishing — the punch list. We don't close out a project until everything on that list is done. We provide as-built drawings, product documentation, and warranty information.`,
    clientRole: `Walk the project with us. Tell us what you see. This is your building — you should be completely satisfied with it before we close the contract.`,
  },
];

export const servicesList = [
  "Architectural design",
  "Interior design & space planning",
  "Construction documents",
  "Permitting & zoning coordination",
  "Licensed home building",
  "Subcontractor management",
  "Construction administration",
  "Material & finish selection",
  "Custom millwork design",
  "Adaptive reuse & renovation",
  "Site analysis & feasibility",
  "FF&E curation",
];
