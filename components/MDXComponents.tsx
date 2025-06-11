import Image from 'next/image';
import Link from 'next/link';
// Import existing components from your @/components folder
import Logo from '@/components/logo';
import Pill from '@/components/Pill';
import Testimonial from '@/components/Testimonial';
import Diff from '@/components/Diff';

// Export components that can be used in MDX
export const mdxComponents = {
  Image,
  Link,
  Testimonial,
  Diff,
}; 