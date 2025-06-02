"use client";

import React from "react";
import Link from "next/link";
import ThemeToggle from "@components/ThemeToggle";
import Container from "@/components/Container";

const Navbar = () => {
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#blog", label: "Blog" },
  ];

  return (
    <nav className="w-full py-5 md:py-8 flex items-center z-50 pointer-events-none">
      <Container className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-6 pointer-events-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-primary hover:text-primary/60 font-extralight transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="pointer-events-auto">
          <ThemeToggle />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
