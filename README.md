# Alex Smith Portfolio

This is a simple and stylized site built with [Next.js](https://nextjs.org/) and TypeScript. Showcases some fun animations and patterns that I've collected over the years.

## Features

- **Interactive Background Animation**: Custom-built p5.js animations with multiple pattern types (flow, particles, waves, grid) that respond to theme changes
- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Dark/Light Mode**: Theme toggle with persistent preferences
- **Performance Optimized**: WebGL rendering for smooth animations with delta-time based updates
- **Modern Stack**: Built with Next.js 14, React 18, TypeScript, and Tailwind CSS

## Getting Started

First, install the dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technical Highlights

### Background Animation System

The site features a sophisticated background animation system built with p5.js and WebGL. The system:

- Uses a pattern-based architecture allowing for multiple visual styles
- Implements delta-time based animations for smooth performance
- Dynamically adjusts particle count based on screen size and device capabilities
- Responds to theme changes with appropriate color schemes
- Uses WebGL for hardware-accelerated rendering

```typescript
// Example of the pattern system
const FlowPattern: Pattern = {
initialize: (p5) => {
// Initialize pattern-specific properties
},
draw: ({ p5, colors }) => {
// Render the pattern with current theme colors
},
resize: (p5) => {
// Handle window resizing
}
};
```

### Theme System

The site includes a theme system that:
- Detects and respects user system preferences
- Persists theme selection in localStorage
- Provides a context-based API for components to access and modify the theme

## Project Structure

- `app/` - Next.js app directory with page components
- `components/` - Reusable UI components
- `providers/` - React context providers for theme and background
- `styles/` - Global CSS and Tailwind configuration
- `public/` - Static assets

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [p5.js](https://p5js.org/reference/)

## Deployment

This site is deployed on [Vercel](https://vercel.com), the platform from the creators of Next.js.