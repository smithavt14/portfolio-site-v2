import React from "react";
import SkillPill from "./SkillPill";

interface SkillsSectionProps {
  title: string;
  skills: string[];
}

export default function SkillsSection({ title, skills }: SkillsSectionProps) {
  return (
    <div className="flex flex-col gap-5">
      <h5 className="text-slate-400">{title}</h5>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <SkillPill key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
} 