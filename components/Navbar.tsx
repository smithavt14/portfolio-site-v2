"use client";

import React from "react";
import Link from "next/link";
import ThemeToggle from "@components/ThemeToggle";
import Container from "@/components/Container";
import MobileMenu from "@/components/MobileMenu";
import Logo from "./logo";

const Navbar = () => {
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#blog", label: "Blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 w-full py-10 z-50 pointer-events-none">
      <Container className="flex justify-end md:justify-center">
        <div className="hidden md:flex gap-32 items-center bg-base-200 py-4 px-10 rounded-full pointer-events-auto">
          <Link
            href="#hero"
            className="flex justify-center items-center cursor-pointer"
          >
            <Logo className="w-8 h-8" />
          </Link>
          <div className="flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full text-sm text-primary hover:text-primary/60 font-extralight transition-colors"
              >
                {link.label}
              </Link>
            ))}
            {/* Desktop Theme Toggle - Hidden on mobile */}
            <div className="flex justify-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
        <MobileMenu navLinks={navLinks} />
      </Container>
    </nav>
  );
};

export default Navbar;
