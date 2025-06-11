"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "@components/ThemeToggle";
import HamburgerButton from "@/components/HamburgerButton";
import Container from "./Container";
import Logo from "./logo";

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  navLinks: NavLink[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ navLinks }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<string>('');

  // Listen for theme changes
  useEffect(() => {
    const updateTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme') || '';
      setCurrentTheme(theme);
    };

    // Set initial theme
    updateTheme();

    // Create a MutationObserver to watch for data-theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          updateTheme();
        }
      });
    });

    // Start observing
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    // Cleanup
    return () => observer.disconnect();
  }, []);

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      // Start closing animation
      setIsAnimating(false);
      // Hide menu after animation completes
      setTimeout(() => {
        setIsMobileMenuOpen(false);
      }, 300); // Match the CSS transition duration
    } else {
      // Show menu and start opening animation
      setIsMobileMenuOpen(true);
      // Small delay to ensure the DOM is updated before starting animation
      setTimeout(() => {
        setIsAnimating(true);
      }, 10);
    }
  };

  const handleLinkClick = () => {
    // Start closing animation (same as hamburger button)
    setIsAnimating(false);
    // Hide menu after animation completes
    setTimeout(() => {
      setIsMobileMenuOpen(false);
    }, 300);
  };

  return (
    <>
      {/* Mobile Hamburger Button */}
      <div className="md:hidden pointer-events-auto">
        <HamburgerButton isOpen={isAnimating} onClick={toggleMobileMenu} />
      </div>

      {/* Mobile Full Screen Menu */}
      {isMobileMenuOpen && (
        <div
          key={`mobile-menu-${currentTheme}`}
          className={`fixed inset-0 bg-base-200 z-40 md:hidden transition-all duration-300 ease-in-out pointer-events-auto`}
          style={{
            clipPath: isAnimating
              ? "circle(150% at calc(100% - 48px) 56px)"
              : "circle(0% at calc(100% - 48px) 56px)",
            transition: "clip-path 0.3s ease-in-out",
          }}
        >
          <Container
            className={`flex flex-col min-h-dvh justify-start items-center space-y-8 py-[var(--navbar-height-mobile)] transition-opacity duration-300 delay-150 pointer-events-auto`}
          >
            <Link
              href="/"
              className="flex justify-center items-center cursor-pointer mb-20"
              onClick={handleLinkClick}
            >
              <Logo className="w-10 h-10" />
            </Link>
            {/* Navigation Links */}
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`transition-all duration-300 ${
                  isAnimating
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{
                  transitionDelay: isAnimating
                    ? `${100 + index * 50}ms`
                    : "0ms",
                }}
              >
                <h2 className="text-primary">{link.label}</h2>
              </Link>
            ))}

            {/* Theme Toggle at Bottom */}
            <div
              className={`flex justify-center transition-all duration-300 ${
                isAnimating
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{
                transitionDelay: isAnimating
                  ? `${100 + navLinks.length * 50}ms`
                  : "0ms",
              }}
            >
              <ThemeToggle />
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
