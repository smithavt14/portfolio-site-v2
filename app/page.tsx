"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import IconLink from "@components/IconLink";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Container from "@/components/Container";

export default function Home() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Get main section children and the icon container's children
    const iconContainer = section.querySelector("#icon-links");
    const elements = [
      ...section.children,
      ...(iconContainer ? Array.from(iconContainer.children) : []),
    ] as HTMLElement[];

    setIsLoading(false);

    gsap.set(elements, {
      opacity: 0,
      y: 20,
    });

    gsap.to(elements, {
      opacity: 1,
      y: 0,
      delay: 1,
      duration: 0.3,
      stagger: 0.3,
      ease: "power1.out",
    });
  }, []);

  return (
    <Container>
      <section
        ref={sectionRef}
        className={`relative h-fit flex flex-col box-border z-20 space-y-5 ${
          isLoading ? "opacity-0" : ""
        }`}
      >
        <p className="text-base text-midnight dark:text-white">
          Hi, my name is
        </p>
        <div className="font-extrabold text-responsive">
          <h2 className="text-midnight dark:text-white">Alex Smith.</h2>
          <h2 className="text-slate-400 dark:text-slate-400">
            I build experiences.
          </h2>
        </div>
        <p className="w-full text-base text-midnight dark:text-white lg:w-8/12">
          I&apos;m an endurance athlete and product guy who specializes in
          building digital experiences.
        </p>
        <div id="icon-links" className="flex justify-start items-center">
          <IconLink
            href="https://www.linkedin.com/in/smithavt14/"
            target="_blank"
            rel="noreferrer"
            Icon={FaLinkedin}
          />
          <IconLink
            href="https://github.com/smithavt14"
            target="_blank"
            rel="noreferrer"
            Icon={FaGithub}
          />
          <IconLink href="mailto:hello@alex.cn.com" Icon={FaEnvelope} />
        </div>
      </section>
    </Container>
  );
}
