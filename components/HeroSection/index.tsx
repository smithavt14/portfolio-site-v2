"use client";

import Link from "next/link";
import Hero from "@/components/HeroSection/Hero";
import { PatternType } from "@/components/Background/types";
import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  linkedinUrl?: string;
  githubUrl?: string;
  emailAddress?: string;
  artistName?: string;
  artistUrl?: string;
  pattern?: PatternType;
}

export default function HeroSection({
  linkedinUrl,
  githubUrl,
  emailAddress,
  artistName = "ア",
  artistUrl = "https://x.com/yuruyurau",
  pattern = "flow",
}: HeroSectionProps) {
  return (
    <section className="h-[calc(100dvh-var(--navbar-height))] pb-20 flex flex-col justify-between relative box-border">
      {/* Hero component */}
      <Hero
        linkedinUrl={linkedinUrl}
        githubUrl={githubUrl}
        emailAddress={emailAddress}
      />

      {/* Artist attribution */}
      <Link
        href={artistUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="underline-none"
      >
        <p className="text-sm text-base-content/60 font-extralight">
          Original artwork by {artistName}
        </p>
      </Link>

      {/* Animated Arrow */}
      <Link
        href="#about"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 p-5"
      >
        <ArrowDown className="h-8 w-8 animate-bounce" />
      </Link>
    </section>
  );
}
