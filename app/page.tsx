"use client";

import Container from "@/components/Container";
import Hero from "@/components/Hero";
import About from "@/components/About";
import { useBackground } from "@/providers/BackgroundProvider";
import Background from "@/components/Background";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";

export default function Home() {
  const { pattern } = useBackground();

  return (
    <>
      <Background pattern={pattern} />
      <Container className="flex flex-col pt-[var(--navbar-height-mobile)] md:pt-[var(--navbar-height)]">
        <Hero />
        <About />
        <Projects />
        <Blog />
      </Container>
    </>
  );
}
