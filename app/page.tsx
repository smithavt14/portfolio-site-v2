"use client";

import Link from "next/link";
import Container from "@/components/Container";
import Background from "@/components/Background";
import IconLink from "@/components/IconLink";
import Section from "@/components/Section";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { heroData } from "@/lib/hero-data";

export default function Home() {
  const { personal, links, artist } = heroData;

  return (
    <>
      <Background />
      <Section id="hero" useFlexBetween>
        <Container className="flex flex-col">
          {/* Hero content */}
          <div className="relative h-fit flex flex-col box-border z-20 py-5 gap-5">
            <p>{personal.greeting}</p>
            <h1 className="text-responsive flex flex-col">
              <span className="text-primary">{personal.name}</span>
              <span className="text-primary/60">{personal.title}</span>
            </h1>
            <p>{personal.description}</p>

            {/* Icon Links */}
            <div id="icon-links" className="flex justify-start items-center">
              <IconLink
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                Icon={FaLinkedinIn}
                className="stroke-[1rem]"
              />
              <IconLink
                href={links.github}
                target="_blank"
                rel="noreferrer"
                Icon={FiGithub}
                className="stroke-[1px]"
              />
              <IconLink
                href={`mailto:${links.email}`}
                Icon={CiMail}
                style={{ fill: "currentColor", stroke: "none" }}
              />
            </div>
          </div>

          {/* Artist attribution */}
          <Link
            href={artist.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-none"
          >
            <p className="text-sm text-base-content/60 font-extralight">
              Original artwork by {artist.name}
            </p>
          </Link>
        </Container>
      </Section>
    </>
  );
}
