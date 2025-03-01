"use client";

import Background from "@/components/Background";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import { useBackground } from "@/providers/BackgroundProvider";
import Link from "next/link";

export default function Home() {
  const { pattern } = useBackground();

  return (
    <>
      <Background pattern={pattern} />
      <Container className="flex flex-col">
        <div className="relative h-layout flex flex-col justify-between pb-10">
          <Hero
            title="Alex Smith"
            subtitle="I build experiences."
            description="I'm an endurance athlete and product guy who specializes in building digital experiences."
          />
          <Link
            href="https://x.com/yuruyurau"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            <p className="text-right text-sm text-slate-400 dark:text-slate-400">
              Original artwork by ア
            </p>
          </Link>
        </div>
      </Container>
    </>
  );
}
