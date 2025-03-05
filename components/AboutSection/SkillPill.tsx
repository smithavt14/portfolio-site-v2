import React from "react";

interface SkillPillProps {
  skill: string;
}

export default function SkillPill({ skill }: SkillPillProps) {
  return (
    <span
      className="rounded-full border border-slate-300 dark:border-slate-700 bg-slate-200 dark:bg-slate-700 px-3 py-1 text-sm"
    >
      {skill}
    </span>
  );
} 