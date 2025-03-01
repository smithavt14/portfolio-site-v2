"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import IconLink from "@components/IconLink";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  linkedinUrl?: string;
  githubUrl?: string;
  emailAddress?: string;
  className?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  linkedinUrl = "https://www.linkedin.com/in/smithavt14/",
  githubUrl = "https://github.com/smithavt14",
  emailAddress = "hello@alex.cn.com",
  className,
}: HeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const section = sectionRef.current;
  //   if (!section) return;

  //   // Get main section children and the icon container's children
  //   const iconContainer = section.querySelector("#icon-links");
  //   const elements = [
  //     ...section.children,
  //     ...(iconContainer ? Array.from(iconContainer.children) : []),
  //   ] as HTMLElement[];

  //   setIsLoading(false);

  //   gsap.set(elements, {
  //     opacity: 0,
  //     y: 20,
  //   });

  //   gsap.to(elements, {
  //     opacity: 1,
  //     y: 0,
  //     delay: 1,
  //     duration: 0.2,
  //     stagger: 0.3,
  //     ease: "power1.out",
  //   });
  // }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative h-fit flex flex-col box-border z-20 py-5 gap-5 md:py-10 ${className}`}
    >
      <p>{`Hi my name is`}</p>
      <h1 className="text-responsive flex flex-col">
        <span>{title}</span>
        <span className="text-slate-400 dark:text-slate-400">{`${subtitle}`}</span>
      </h1>
      <p className="w-full lg:w-8/12">{description}</p>
      {/* Icon Links */}
      <div id="icon-links" className="flex justify-start items-center">
        {linkedinUrl && (
          <IconLink
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            Icon={FaLinkedin}
          />
        )}
        {githubUrl && (
          <IconLink
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            Icon={FaGithub}
          />
        )}
        {emailAddress && (
          <IconLink href={`mailto:${emailAddress}`} Icon={FaEnvelope} />
        )}
      </div>
    </section>
  );
}
