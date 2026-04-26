export type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
  category: string;
};

export const projects: Project[] = [
  {
    title: "Audiophile E-Commerce",
    description: "A premium audio equipment store with complex state management, persistent cart functionality, and responsive checkout flow.",
    image: "/audiophile.png",
    tech: ["Next.js", "TypeScript", "Redux", "Material UI"],
    github: "https://github.com/Mat-tech-bit",
    live: "https://mat-audiophile-b4gb.vercel.app/",
    category: "Web App",
  },
  {
    title: "Health Care Portal",
    description: "Comprehensive management system for clinics and hospitals featuring patient records, appointment scheduling, and real-time updates.",
    image: "/healthcenter.png",
    tech: ["React", "Firebase", "Node.js", "Tailwind"],
    github: "https://github.com/Mat-tech-bit",
    live: "https://mat-oauhc.vercel.app/",
    category: "Software",
  },
  {
    title: "CGPA Calculator",
    description: "Academic performance tracking tool designed for university students with automated GPA/CGPA calculations and data persistence.",
    image: "/cgpa.png",
    tech: ["React", "TypeScript", "MUI", "Local Storage"],
    github: "https://github.com/Mat-tech-bit",
    live: "https://cgpa-calc-zg93qv40j-matthew-akinyemis-projects.vercel.app/",
    category: "Tool",
  },
  {
    title: "Countries Explorer",
    description: "Data-driven application using REST Countries API with advanced filtering, search, and region-based sorting capabilities.",
    image: "/countryrest.png",
    tech: ["React", "REST API", "Styled Components"],
    github: "https://github.com/Mat-tech-bit",
    live: "https://new-country-rest-api.vercel.app/",
    category: "Web App",
  },
  {
    title: "Task Management Suite",
    description: "Feature-rich todo application with drag-and-drop, priority levels, and category tagging for maximum productivity.",
    image: "/todo.png",
    tech: ["React", "TypeScript", "Framer Motion"],
    github: "https://github.com/Mat-tech-bit",
    live: "https://matthew-todo.vercel.app/",
    category: "Tool",
  },
];
