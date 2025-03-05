import React from "react";
import Link from "next/link";
import ProjectCard, { Project } from "./ProjectCard";

interface ProjectsSectionProps {
  id?: string;
}

export default function ProjectsSection({ id = "projects" }: ProjectsSectionProps) {
  const projects: Project[] = [
    {
      id: "1",
      title: "Dynamo Ventures Marketing Website",
      description:
        "A NextJS website, powered by PayloadCMS, for a venture capital firm.",
      image: "/project-images/dynamo-ventures.png",
      tags: ["NextJS", "PayloadCMS", "Typescript"],
      liveUrl: "https://dynamo-v2.payloadcms.app/",
    },
    {
      id: "2",
      title: "Genki Custom eCommerce Website",
      description:
        "A custom e-commerce website built with Shopify.",
      image: "/project-images/genki.png",
      tags: ["Shopify", "Liquid", "AI Tooling"],
      liveUrl: "https://www.genkithings.com/",
    },
    {
      id: "3",
      title: "Klarna Image Search",
      description:
        "A feature within the Klarna mobile app that allows users to search for products by image.",
      image: "/project-images/klarna.jpg",
      tags: ["Product", "UX/UI", "Multimodal AI"],
      liveUrl: "https://www.klarna.com/us/klarna-app/",
    },
  ];

  return (
    <section
      id={id}
      className="w-full min-h-dvh py-mobileNavbar md:py-navbar grid grid-cols-1 gap-12"
    >
      <div className="grid gap-5">
        <h2>Projects</h2>
        <p>
          {`I'm passionate about building Web Apps and AI projects, constantly exploring new AI tools 
          and experimenting with innovative design patterns. My preferred tech stack includes NextJS, TypeScript, Tailwind CSS
          and PayloadCMS, which I use to create efficient and scalable solutions. Below is a selection 
          of my recent work and personal projects. I'm always interested in taking on new challenges and am available 
          for freelance opportunities.`}
        </p>
        <Link className="text-slate-600 dark:text-slate-400" href="mailto:hello@alex.cn.com"><p>{`Send me an email if you want to collaborate!`}</p></Link>
      </div>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="text-center">
        <Link
          href="#"
          className="inline-flex items-center justify-center rounded-md border border-slate-100 dark:border-slate-800 bg-transparent px-6 py-3 text-base font-medium transition-colors hover:bg-slate-100/10 dark:hover:bg-slate-800/10"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
}