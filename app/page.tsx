"use client";

import Container from "@/components/Container";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import { useBackground } from "@/providers/BackgroundProvider";
import Background from "@/components/Background";

export default function Home() {
  const { pattern } = useBackground();

  return (
    <>
      <Background pattern={pattern} />
      <Container className="flex flex-col">
        <HeroSection pattern={pattern} />
        <AboutSection />
      </Container>
    </>
  );
}
