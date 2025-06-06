---
description: When asked to create or update sections to the existing site.
globs: 
alwaysApply: false
---
# Creating Sections for Portfolio Site

This document outlines best practices and patterns for creating new sections in the portfolio site.

## Folder Structure

- Create a dedicated folder for each section in `components/`
- Use `index.tsx` as the main component file
- Group related components within the section folder

Example:
```
components/
  └── AboutSection/
      ├── index.tsx
      └── SubComponent.tsx (if needed)
```

## Component Structure

- Use functional components with TypeScript interfaces
- Include an `id` prop with a default value for scroll targeting
- Use semantic HTML elements (`<section>`, `<article>`, etc.)

```tsx
interface SectionProps {
  id?: string;
  // other props...
}

export default function SectionName({ id = "sectionId" }: SectionProps) {
  return (
    <section
      id={id}
      className="w-full min-h-dvh pt-mobileNavbar md:pt-navbar"
    >
      {/* Content */}
    </section>
  );
}
```

## Layout & Responsive Design

- Use full viewport height with navbar spacing: `min-h-dvh pt-mobileNavbar md:pt-navbar`
- Implement responsive layouts with grid or flex:
  - `grid gap-12 md:grid-cols-2` for two-column layouts
  - `flex flex-col md:flex-row` for row/column layouts
- Use CSS variables for consistent spacing (defined in globals.css)
- Consider mobile-first design with responsive breakpoints

## Styling Approach

- Use Tailwind utility classes consistently
- Follow the project's color system with dark mode support:
  - `text-slate-400 dark:text-slate-500` for secondary text
  - `border-slate-100 dark:border-slate-800` for borders
- Use grid gap values for consistent spacing: `grid gap-5` instead of `space-y-5`
- Apply proper height constraints with `h-fit` where needed

## Visual Elements

- For images:
  - Use Next.js `Image` component for optimization
  - Add proper alt text for accessibility
  - Consider effects like `grayscale` for visual consistency
  - Use `aspect-ratio` for consistent sizing
  - Add `shadow-xl` and borders for depth

- For decorative elements:
  - Consider using CSS/HTML for performance (instead of images)
  - Use z-index effectively: `-z-10` for backgrounds, `z-10` for foregrounds
  - Position with `absolute` and negative margins for overlapping effects

## Content Structure

- Use template literals for multi-line text
- Break content into logical sections with appropriate spacing
- Use heading hierarchy correctly (h2 for section titles, h5 for subsections)

## Scroll Targeting

- Use consistent IDs for scroll targeting
- Implement smooth scrolling in the HeroSection:

```tsx
const scrollToSection = () => {
  const section = document.getElementById("sectionId");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
```

## Performance Considerations

- Use CSS for decorative elements when possible
- Optimize images with Next.js Image component
- Avoid unnecessary re-renders by keeping state minimal
- Consider lazy loading for sections below the fold

## Accessibility

- Use semantic HTML elements
- Provide alt text for all images
- Maintain sufficient color contrast
- Ensure keyboard navigability for interactive elements

## Example Implementation

See `components/AboutSection/index.tsx` and `components/ProjectsSection/index.tsx` for complete examples of these principles in action. 