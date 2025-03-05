import React from "react";
import SkillsSection from "./SkillsSection";

interface ContentSectionProps {
  title: string;
  paragraphs: string[];
  skillsTitle: string;
  skills: string[];
}

export default function ContentSection({
  title,
  paragraphs,
  skillsTitle,
  skills,
}: ContentSectionProps) {
  return (
    <div className="h-fit grid gap-12">
      <div className="grid gap-5">
        <h2>{title}</h2>
        <div className="grid gap-3">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
      <SkillsSection title={skillsTitle} skills={skills} />
    </div>
  );
} 