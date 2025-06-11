import React from "react";
import Image from "next/image";

interface DiffProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
  aspectRatio?: string;
}

export default function Diff({ 
  beforeImage, 
  afterImage, 
  beforeAlt = "Before", 
  afterAlt = "After",
  className = "",
  aspectRatio = "aspect-[16/9]"
}: DiffProps) {
  return (
    <figure className={`diff ${aspectRatio} ${className}`} tabIndex={0}>
      <div className="diff-item-1 relative" role="img" tabIndex={0}>
        <Image
          alt={beforeAlt}
          src={beforeImage}
          width={1000}
          height={1000}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        />
      </div>
      <div className="diff-item-2 relative" role="img">
        <Image
          alt={afterAlt}
          src={afterImage}
          width={1000}
          height={1000}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        />
      </div>
      <div className="diff-resizer"></div>
    </figure>
  );
} 