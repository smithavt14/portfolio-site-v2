import React from 'react';
import NextImage from 'next/image';

interface ImageWithCaptionProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  className?: string;
  sizes?: string;
  imgClassName?: string;
}

export default function ImageWithCaption({
  src,
  alt,
  width,
  height,
  caption,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw',
  className = '',
  imgClassName = '',
}: ImageWithCaptionProps) {
  return (
    <figure className={`my-8 ${className}`}>
      <NextImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={imgClassName}
        sizes={sizes}
      />
      {caption && (
        <figcaption className="mt-3 text-sm text-base-content/50 text-center italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
} 