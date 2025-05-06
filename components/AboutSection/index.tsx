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
    "Modern Frontend (React / Next.js / Tailwind)",
    "AI Integration & Tooling",
    "Cross-Cultural Product Leadership",
  ];

  const aboutParagraphs = [
    `I’m an American based in Shanghai, fluent in English and Chinese, with over a decade of experience building digital and experiential products across China and global markets.`,
    `At Klarna, I lead product development on AI-driven features like Image Search, used by millions worldwide. Before that, I ran Le Wagon China, launching and scaling tech education programs across three cities — including online AI and data courses during COVID.`,
    `I stay hands-on — designing, prototyping, and shipping products that turn emerging technology into practical tools. I care about building things that work, and work well.`,
    `I’m always open to exchanging ideas, collaborating on meaningful projects, or exploring what’s next — feel free to reach out.`
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
      <ProfileImage src="/portrait-images/alex.jpeg" alt="Profile Image" />
    </section>
  );
}
