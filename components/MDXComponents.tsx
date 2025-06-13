import Image from 'next/image';
import Link from 'next/link';
import Testimonial from '@/components/Testimonial';
import Diff from '@/components/Diff';
import ImageWithCaption from '@/components/ImageWithCaption';

// Export components that can be used in MDX
export const mdxComponents = {
  Image,
  ImageWithCaption,
  Link,
  Testimonial,
  Diff,
}; 