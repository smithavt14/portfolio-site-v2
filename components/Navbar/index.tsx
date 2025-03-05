"use client";

import React from "react";
import ThemeToggle from "@components/ThemeToggle";
import Container from "@/components/Container";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full py-5 md:py-8 flex items-center z-50 duration-200 transition-all pointer-events-none">
      <Container className="flex items-center">
        <ThemeToggle/>
      </Container>
    </nav>
  );
};

export default Navbar;
