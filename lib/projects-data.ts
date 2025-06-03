export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: readonly string[];
  githubUrl?: string;
  liveUrl?: string;
  subtitle?: string;
}

export const projectsData = {
  title: "Projects",
  description: "I'm passionate about building Web Apps and AI projects, constantly exploring new AI tools and experimenting with innovative design patterns. My preferred tech stack includes NextJS, TypeScript, Tailwind CSS and PayloadCMS, which I use to create efficient and scalable solutions. Below is a selection of my recent work and personal projects. I'm always interested in taking on new challenges and am available for freelance opportunities.",
  projects: [
    {
      id: "1",
      title: "Dynamo Ventures Marketing Website",
      subtitle: "Client Project • Website Development",
      description: "A NextJS website, powered by PayloadCMS, for a venture capital firm. Features include dynamic content management, responsive design, and integration with various third-party services.",
      image: "/project-images/dynamo.png",
      tags: ["NextJS", "PayloadCMS", "Typescript", "TailwindCSS"],
      liveUrl: "https://dynamo.vc",
    },
    {
      id: "2",
      title: "Genki Custom eCommerce Website",
      subtitle: "Client Project • eCommerce Development",
      description: "A custom e-commerce website built with Shopify. Implemented custom product pages, checkout flow optimizations, and integrated AI-powered product recommendations to increase conversion rates.",
      image: "/project-images/genki.png",
      tags: ["Shopify", "Liquid", "AI Tooling", "eCommerce"],
      liveUrl: "https://www.genkithings.com",
    },
    {
      id: "3",
      title: "Klarna Image Search",
      subtitle: "Product Feature • Mobile App",
      description: "A feature within the Klarna mobile app that allows users to search for products by image. Leveraged multimodal AI to accurately identify products and provide relevant shopping options to users, increasing engagement and conversion.",
      image: "/project-images/klarna.png",
      tags: ["Product", "UX/UI", "Multimodal AI", "Mobile"],
      liveUrl: "https://www.klarna.com",
    },
  ] as const
} as const; 