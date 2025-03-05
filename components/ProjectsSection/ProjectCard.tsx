import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className="group relative flex flex-col overflow-hidden rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/5 dark:bg-slate-900/5 transition-all hover:border-slate-200 dark:hover:border-slate-700 hover:bg-slate-100/10 dark:hover:bg-slate-800/10"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image || "/images/placeholder.jpg"}
          alt={project.title}
          width={600}
          height={400}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-2xl font-bold">{project.title}</h3>
        <p className="mb-6 flex-1 text-slate-600 dark:text-slate-400">{project.description}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={`${project.id}-${tag}`}
              className="rounded-full border border-slate-200/30 dark:border-slate-700/30 bg-slate-100/10 dark:bg-slate-800/10 px-3 py-1 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400 transition-colors hover:text-slate-900 dark:hover:text-slate-100"
            >
              <Github className="h-4 w-4" />
              <span>Code</span>
            </Link>
          )}
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400 transition-colors hover:text-slate-900 dark:hover:text-slate-100"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Live Demo</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
} 