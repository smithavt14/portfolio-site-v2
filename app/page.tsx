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
        <div className="relative h-mobile-layout md:h-layout flex flex-col justify-between pb-10">
          <Hero />
          <Link href="https://x.com/yuruyurau" target="_blank" rel="noopener noreferrer" className="underline-none">
            <p className="text-right text-sm text-slate-400 dark:text-slate-400 font-extralight">
              Original artwork by ア
            </p>
          </Link>
        </div>
      </Container>
    </>
  );
}
