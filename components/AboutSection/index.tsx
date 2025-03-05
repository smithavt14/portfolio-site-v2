import React from "react";
import ContentSection from "./ContentSection";
import ProfileImage from "./ProfileImage";

interface AboutSectionProps {
  id?: string;
}

export default function AboutSection({ id = "about" }: AboutSectionProps) {
  const coreSkills = [
    "Product Strategy",
    "UX/UI Design",
    "Frontend Development",
    "React/Next.js",
    "Digital Transformation",
  ];

  const aboutParagraphs = [
    `With over 8 years of experience in product development and design,
    I've helped companies transform their digital presence and build
    innovative solutions.`,
    `My approach combines strategic thinking with technical expertise,
    allowing me to bridge the gap between business goals and user needs.`,
    `When I'm not coding or designing, you'll find me exploring new
    technologies, contributing to open-source projects, or mentoring
    aspiring developers.`,
  ];

  return (
    <section
      id={id}
      className="w-full min-h-dvh py-mobileNavbar md:py-navbar grid gap-12 md:grid-cols-2 items-center"
    >
      <ContentSection 
        title="About Me"
        paragraphs={aboutParagraphs}
        skillsTitle="Core Skills"
        skills={coreSkills}
      />
      <ProfileImage 
        src="/images/alex.jpeg"
        alt="Profile Image"
      />
    </section>
  );
}
