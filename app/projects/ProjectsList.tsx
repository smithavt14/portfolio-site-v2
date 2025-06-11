"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import Pill from "@/components/Pill";
import { projectsData, Project } from "@/lib/projects-data";

// Individual project component (inlined)
function ProjectItem({ project, isReversed = false }: { project: Project; isReversed?: boolean }) {
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <div className="py-12 grid lg:grid-cols-2 gap-20 items-center">
      <div className={`space-y-6 lg:col-span-1 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
        <div>
          <h4 className="mb-2">{project.title}</h4>
          {project.subtitle && (
            <p className="text-primary">{project.subtitle}</p>
          )}
        </div>
        
        <p>{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Pill key={`${project.id}-${tag}`}>{tag}</Pill>
          ))}
        </div>
        
        <div className="flex gap-4">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm gap-2"
            >
              <Github className="h-4 w-4" />
              Code
            </Link>
          )}
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm gap-2 transition-all duration-300"
              onMouseEnter={() => setIsImageHovered(true)}
              onMouseLeave={() => setIsImageHovered(false)}
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </Link>
          )}
        </div>
      </div>
      
      <div className={`flex justify-center lg:col-span-1 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
        <div 
          className={`shadow-lg relative w-full h-auto transition-all duration-300 ${
            isImageHovered ? 'lg:scale-[1.02] lg:shadow-xl' : ''
          }`}
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
        >
          {project.liveUrl ? (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-pointer"
            >
              <Image
                src={project.image || "/images/placeholder.jpg"}
                alt={project.title}
                width={800}
                height={450}
                className="w-full h-auto object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 60vw"
              />
            </Link>
          ) : (
            <Image
              src={project.image || "/images/placeholder.jpg"}
              alt={project.title}
              width={800}
              height={450}
              className="w-full h-auto object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 60vw"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsList() {
  const { projects } = projectsData;

  return (
    <div className="flex flex-col">
      {projects.map((project, index) => (
        <React.Fragment key={project.id}>
          <ProjectItem 
            project={project} 
            isReversed={index % 2 !== 0}
          />
          {index < projects.length - 1 && (
            <div className="divider"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
} 