import React from "react";
import Image from "next/image";
import Pill from "@/components/Pill";
import Section from "@/components/Section";
import { aboutData } from "@/lib/about-data";

interface AboutProps {
  id?: string;
}

export default function About({ id = "about" }: AboutProps) {
  const { title, paragraphs, skills, image } = aboutData;

  return (
    <Section 
      id={id}
      className="grid gap-12 md:grid-cols-2 items-center"
    >
      {/* Content */}
      <div className="h-fit grid gap-12">
        {/* About text */}
        <div className="grid gap-5">
          <h2>{title}</h2>
          <div className="grid gap-3">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
        
        {/* Skills */}
        <div className="flex flex-col gap-5">
          <h5 className="text-base-content/60">{skills.title}</h5>
          <div className="flex flex-wrap gap-3">
            {skills.list.map((skill) => (
              <Pill key={skill}>{skill}</Pill>
            ))}
          </div>
        </div>
      </div>

      {/* Profile Image */}
      <div className="w-full flex justify-center">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="object-cover grayscale h-96 w-auto aspect-square overflow-hidden rounded-lg"
        />
      </div>
    </Section>
  );
} 