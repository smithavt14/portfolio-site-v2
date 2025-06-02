import React from "react";
import { Heart } from "lucide-react";
import Container from "@/components/Container";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container className="py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-primary/20 pt-8">
        <p className="text-sm text-base-content mb-4 md:mb-0">
          © 2025 Alex Smith. All rights reserved.
        </p>
        <div className="text-sm text-base-content font-light flex items-center">
          <span>Built with</span>
          <Heart className="h-4 w-4 mx-1 inline text-primary" />
          <span>using Next.js, Tailwind CSS, and DaisyUI</span>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
