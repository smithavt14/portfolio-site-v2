"use client";

import IconLink from "@components/IconLink";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { CiMail } from "react-icons/ci";



interface HeroProps {
  linkedinUrl?: string;
  githubUrl?: string;
  emailAddress?: string;
  className?: string;
}

export default function Hero({
  linkedinUrl = "https://www.linkedin.com/in/smithavt14/",
  githubUrl = "https://github.com/smithavt14",
  emailAddress = "hello@alex.cn.com",
  className,
}: HeroProps) {
  return (
    <div
      className={`relative h-fit flex flex-col box-border z-20 py-5 gap-5 md:py-10 ${className}`}
    >
      <p>{`Hi, I'm`}</p>
      <h1 className="text-responsive flex flex-col">
        <span className="text-primary">{`Alex Smith`}</span>
        <span className="text-primary/60">{`Product Engineer`}</span>
      </h1>
      <p>{`Fluent in design, code, and cross-border teams. I bring ideas to life through tight loops of prototyping, testing, and shipping.`}</p>
      {/* Icon Links */}
      <div id="icon-links" className="flex justify-start items-center">
        {linkedinUrl && (
          <IconLink
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            Icon={FaLinkedinIn}
            className="stroke-[1rem]"
          />
        )}
        {githubUrl && (
          <IconLink
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            Icon={FiGithub}
            className="stroke-[1px]"
          />
        )}
        {emailAddress && (
          <IconLink 
            href={`mailto:${emailAddress}`} 
            Icon={CiMail} 
            style={{ fill: "currentColor", stroke: "none" }}
          />
        )}
      </div>
    </div>
  );
}
