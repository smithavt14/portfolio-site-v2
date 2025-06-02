import React from "react";

interface SkillPillProps {
  skill: string;
}

export default function SkillPill({ skill }: SkillPillProps) {
  return (
    <span
      className="rounded-full border border-base-300 bg-base-200 px-3 py-1 text-sm text-base-content"
    >
      {skill}
    </span>
  );
} 