import React from "react";
import Container from "@/components/Container";
import Section from "@/components/Section";
import { projectsData } from "@/lib/projects-data";
import { Metadata } from "next";
import ProjectsList from "@/components/ProjectsList";

export const metadata: Metadata = {
  title: "Projects - Alex Smith",
  description: "Explore my latest projects and development work. Building innovative digital experiences with modern technologies.",
};

export default function ProjectsPage() {
  const { title, description } = projectsData;

  return (
    <Section>
      <Container className="flex flex-col">
        {/* Header */}
        <div className="grid gap-5 mb-10">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>

        {/* Projects List */}
        <ProjectsList />
      </Container>
    </Section>
  );
} 