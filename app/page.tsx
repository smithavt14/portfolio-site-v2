"use client";

import Background from "@/components/Background";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import { useBackground } from "@/providers/BackgroundProvider";

export default function Home() {
  const { pattern } = useBackground();

  return (
    <>
      <Background pattern={pattern} />
      <Container className="flex flex-col">
        <div className="relative">
          <Hero
            title="Alex Smith"
            subtitle="I build experiences."
            description="I'm an endurance athlete and product guy who specializes in building digital experiences."
            className="h-layout"
          />
        </div>
      </Container>
    </>
  );
}
