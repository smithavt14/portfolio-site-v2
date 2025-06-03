import React from "react";
import Section from "@/components/Section";

interface BlogProps {
  id?: string;
}

export default function Blog({ id = "blog" }: BlogProps) {
  return (
    <Section 
      id={id}
      className="flex flex-col"
    >
      {/* Header */}
      <div className="grid gap-5">
        <h2>Blog</h2>
        <p className="text-base-content/60">Working on this now...</p>
      </div>
    </Section>
  );
} 