import React from "react";
import Image from "next/image";

interface ProfileImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export default function ProfileImage({
  src,
  alt,
  width = 400,
  height = 400,
}: ProfileImageProps) {
  return (
    <div className="w-full flex justify-center">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-cover grayscale h-96 w-auto aspect-square overflow-hidden rounded-lg"
      />
    </div>
  );
} 