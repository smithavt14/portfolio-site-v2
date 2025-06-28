"use client";

import React, { useState } from "react";
import { HiChevronRight } from "react-icons/hi";

interface TemplateDropdownProps {
  title: string;
  children: React.ReactNode;
}

export default function TemplateDropdown({
  title,
  children,
}: TemplateDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-6">
      <div className="bg-base-100 border border-base-300 rounded-lg overflow-hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-4 flex items-center justify-between text-left font-semibold text-base-content cursor-pointer"
        >
          <span>{title}</span>
          <HiChevronRight
            className={`w-5 h-5 transition-transform duration-200 ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pb-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
