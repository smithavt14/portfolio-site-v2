"use client";

import React from "react";
import ThemeToggle from "@components/ThemeToggle";
import PatternPicker from "@components/PatternPicker";
import Container from "@/components/Container";

const Navbar = () => {
  return (
    <nav className="duration-200 w-full py-5 md:py-10 text-midnight dark:text-white flex items-center z-50 transition-all">
      <Container className="flex items-center">
        <ThemeToggle />
        <PatternPicker />
      </Container>
    </nav>
  );
};

export default Navbar;
