"use client";

import React, { useState } from "react";
import Link from "next/link";
import ThemeToggle from "@components/ThemeToggle";
import Container from "@/components/Container";
import MobileMenu from "@/components/MobileMenu";
import Logo from "./logo";

const Navbar = () => {
  const [logoHoverState, setLogoHoverState] = useState<'none' | 'circle1' | 'circle2' | 'circle3'>('none');
  const [triggerLogoAnimation, setTriggerLogoAnimation] = useState(false);

  const navLinks = [
    { href: "/about", label: "About", hoverState: 'circle1' as const },
    { href: "/projects", label: "Projects", hoverState: 'circle2' as const },
    { href: "/blog", label: "Blog", hoverState: 'circle3' as const },
  ];

  const handleLinkClick = () => {
    // Sequence: hover → drop → wave
    setTimeout(() => setLogoHoverState('none'), 50);
    setTimeout(() => {
      setTriggerLogoAnimation(true);
      setTimeout(() => setTriggerLogoAnimation(false), 100);
    }, 250);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full py-10 z-50 pointer-events-none">
      <Container className="flex justify-end md:justify-center">
        <div className="hidden md:flex gap-32 items-center bg-base-200 py-4 px-10 rounded-full pointer-events-auto shadow-sm">
          <Link href="/" className="flex justify-center items-center cursor-pointer">
            <Logo 
              className="w-8 h-8" 
              animationType="wave" 
              hoverState={logoHoverState} 
              triggerAnimation={triggerLogoAnimation}
            />
          </Link>
          
          <div className="flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full text-sm text-primary hover:text-primary/60 font-extralight transition-colors"
                onMouseEnter={() => setLogoHoverState(link.hoverState)}
                onMouseLeave={() => setLogoHoverState('none')}
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            ))}
            
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
