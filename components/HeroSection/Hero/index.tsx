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
        <span>{`Alex Smith`}</span>
        <span className="text-slate-400 dark:text-slate-400">{`Builder & Digital Explorer`}</span>
      </h1>
      <p>{`Product leader by day, developer and designer by night. I build solutions that make life a little more interesting.`}</p>
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
