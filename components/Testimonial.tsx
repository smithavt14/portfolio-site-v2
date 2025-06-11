import React from "react";
import Image from "next/image";

interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
  image?: string;
  logo?: string;
  logoAlt?: string;
  className?: string;
}

export default function Testimonial({ 
  quote, 
  author, 
  title, 
  image, 
  logo, 
  logoAlt = "Company logo",
  className = "" 
}: TestimonialProps) {
  return (
    <div className={`card bg-base-200 border border-base-300 shadow-sm not-prose ${className}`}>
      <div className="card-body p-6 md:p-8">
        {/* Quote */}
        <blockquote className="text-lg md:text-xl text-base-content/90 font-light italic leading-relaxed mb-6">
          "{quote}"
        </blockquote>
        
        {/* Author info and logo section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Author section */}
          <div className="flex items-center gap-4">
            {image && (
              <div className="avatar">
                <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <Image
                    src={image}
                    alt={author}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            )}
            <div>
              <div className="font-semibold text-base-content">{author}</div>
              <div className="text-sm text-base-content/70">{title}</div>
            </div>
          </div>
          
          {/* Logo section */}
          {logo && (
            <div className="flex-shrink-0">
              <Image
                src={logo}
                alt={logoAlt}
                width={120}
                height={40}
                className="opacity-70 hover:opacity-100 transition-opacity object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 