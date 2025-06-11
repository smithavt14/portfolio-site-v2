"use client";

import React from "react";
import ProjectItem from "@/components/ProjectItem";
import { projectsData } from "@/lib/projects-data";

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