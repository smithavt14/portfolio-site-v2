"use client";

import React from "react";
import Link from "next/link";
import ThemeToggle from "@components/ThemeToggle";
import Container from "@/components/Container";
import MobileMenu from "@/components/MobileMenu";

const Navbar = () => {
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#blog", label: "Blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 w-full py-10 flex justify-center items-center z-50 pointer-events-none">
      <Container className="flex justify-end md:flex-row">
        <div className="hidden md:flex justify-between w-full md:w-fit items-center md:justify-stretch bg-base-200 px-10 rounded-full">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 pointer-events-auto">
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
          {/* Desktop Theme Toggle - Hidden on mobile */}
          <div className="hidden md:block pointer-events-auto">
            <ThemeToggle />
          </div>
        </div>
        {/* Mobile Menu */}
        <MobileMenu navLinks={navLinks} />
      </Container>
      
    </nav>
  );
};

export default Navbar;
