export interface Project {
  slug: string;
  name: string;
  category: "Residential" | "Commercial" | "Interiors";
  location: string;
  year: number;
  status: "Completed" | "In Progress";
  collaborator: string;
  role: string;
  description: string[];
  heroImage: string;
  images: string[];
  featured: boolean;
  heroCarousel?: boolean;
}

export const projects: Project[] = [
  {
    slug: "blue-ridge-house",
    name: "Blue Ridge House",
    category: "Residential",
    location: "Blowing Rock, NC",
    year: 2010,
    status: "Completed",
    collaborator: "GLUCK+",
    role: "Construction Manager & Project Designer",
    description: [
      `Set on a steep ridge in the Blue Ridge Mountains of North Carolina, this house was designed to dissolve the boundary between interior and the sweeping mountain landscape beyond. Stacked stone walls anchor the building to the site while floor-to-ceiling glass opens every primary space to panoramic views.`,
      `The project was completed in collaboration with GLUCK+, the New York-based architecture and design-build firm whose integrated model directly inspired the founding of WORKS-db. Sam served as construction manager and project designer throughout the build.`,
    ],
    heroImage: "/images/projects/blue-ridge-house/hero.jpg",
    images: [
      "/images/projects/blue-ridge-house/hero.jpg",
      "/images/projects/blue-ridge-house/01.jpg",
      "/images/projects/blue-ridge-house/02.jpg",
      "/images/projects/blue-ridge-house/03.jpg",
    ],
    featured: true,
    heroCarousel: true,
  },
  {
    slug: "cascade-house",
    name: "Cascade House",
    category: "Residential",
    location: "Winnetka, IL",
    year: 2022,
    status: "Completed",
    collaborator: "GLUCK+",
    role: "Construction Manager & Project Designer",
    description: [
      `Cascade House is a glass and timber residence on Chicago's North Shore, organized around a series of cascading pavilions that step down toward a wooded ravine. The building uses transparency and material warmth in equal measure — a structural grid of exposed timber, infilled with floor-to-ceiling glass on every facade facing the landscape.`,
      `Completed in collaboration with GLUCK+. Sam led construction management and served as project designer, overseeing the build from foundation through final finishes.`,
    ],
    heroImage: "/images/projects/cascade-house/hero.jpg",
    images: [
      "/images/projects/cascade-house/hero.jpg",
      "/images/projects/cascade-house/01.jpg",
      "/images/projects/cascade-house/02.jpg",
      "/images/projects/cascade-house/03.jpg",
    ],
    featured: true,
    heroCarousel: true,
  },
  {
    slug: "birmingham-house",
    name: "Birmingham House",
    category: "Residential",
    location: "Birmingham, AL",
    year: 2024,
    status: "In Progress",
    collaborator: "GLUCK+",
    role: "Construction Manager & Project Manager",
    description: [
      `Currently under construction in Birmingham, this residence is organized around a central courtyard — an open-air room that anchors every wing of the house and brings light deep into the interior. The material palette draws from the Alabama landscape: board-formed concrete, warm terracotta, and local stone.`,
      `WORKS-db is serving as construction manager and project manager in collaboration with GLUCK+. This project marks the firm's first built work in its home city.`,
    ],
    heroImage: "/images/projects/birmingham-house/hero.jpg",
    images: [
      "/images/projects/birmingham-house/hero.jpg",
      "/images/projects/birmingham-house/01.jpg",
      "/images/projects/birmingham-house/02.jpg",
      "/images/projects/birmingham-house/03.jpg",
    ],
    featured: true,
    heroCarousel: true,
  },
];
