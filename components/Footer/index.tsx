import React from "react";
import { Heart } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 mt-16 border-t border-slate-200 dark:border-slate-800">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 md:mb-0">
          © {currentYear} • All rights reserved
        </p>
        <div className="text-sm text-slate-500 dark:text-slate-400 font-light flex items-center">
          Designed & Built with
          <Heart className="h-4 w-4 mx-1 inline text-slate-500 dark:text-slate-400" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
