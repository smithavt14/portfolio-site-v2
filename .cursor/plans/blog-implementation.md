# Blog Implementation Plan

## Overview
Creating a blog section for the portfolio site with markdown-based content management. Blog posts will be accessible at `/blog` (listing) and `/blog/[slug]` (individual posts), with previews shown on the homepage.

## Requirements
- **Route Structure**: `/blog` for listing, `/blog/[slug]` for individual posts
- **Content Features**: Hero Image, Rich Text (including media), Published Date
- **Homepage Integration**: Show blog previews in existing Blog section
- **Content Management**: Markdown files stored in repository
- **Media Storage**: Images/videos in `/public/blog/` directory
- **Design**: Use existing design system (Section, Container, theme-aware colors)

## Architecture

### Directory Structure
```
posts/                          # Flat structure for blog posts
├── getting-started.md
├── first-project.md
└── ...

app/
├── blog/
│   ├── page.tsx               # Blog listing page (/blog)
│   └── [slug]/
│       └── page.tsx           # Individual blog post (/blog/[slug])

lib/
└── blog-utils.ts              # Blog utilities and fetching functions

components/
├── Blog.tsx                   # Updated homepage preview section  
├── BlogCard.tsx               # Individual blog post preview card
└── BlogPost.tsx               # Full blog post page component

public/
└── blog/                      # Blog images and media
    ├── getting-started-hero.jpg
    ├── project-demo.mp4
    └── ...
```

### Data Structure
```typescript
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedDate: string;
  heroImage: string;
  content?: string; // Only included when fetching full post
}
```

### Frontmatter Format
```markdown
---
title: "Getting Started with My Portfolio"
description: "A brief introduction to my journey in web development and what drives my approach to building digital products."
publishedDate: "2024-01-15"
heroImage: "/blog/getting-started-hero.jpg"
---

# Your content here...
```

## Rich Text Support

### Dependencies to Add
```json
{
  "remark-gfm": "^4.0.0",           // GitHub Flavored Markdown
  "remark-prism": "^1.3.6",         // Syntax highlighting
  "remark-images": "^4.0.0",        // Enhanced image handling
  "rehype-raw": "^7.0.0"            // Allow HTML in markdown
}
```

### Supported Features
- **Images**: `![Alt text](/blog/image.jpg)`
- **Code blocks**: Triple backticks with syntax highlighting
- **Videos**: HTML `<video>` tags in markdown
- **Tables**: GitHub Flavored Markdown tables
- **Rich formatting**: Bold, italic, strikethrough, etc.

## Implementation Details

### lib/blog-utils.ts
Core functions:
- `getAllPosts()`: Returns all blog posts sorted by date (newest first)
- `getPostBySlug(slug)`: Returns single post with full content
- `getFeaturedPosts(limit)`: Returns limited posts for homepage preview

### components/Blog.tsx (Updated)
- Fetches featured posts using `getFeaturedPosts(3)`
- Displays preview cards in responsive grid
- Includes "View All Posts →" link to `/blog`
- Maintains existing Section/Container structure

### components/BlogCard.tsx
- Shows hero image, title, description, published date
- Links to individual post at `/blog/[slug]`
- Responsive design matching project cards

### components/BlogPost.tsx
- Full post layout with hero image
- Renders markdown content with rich features
- Includes meta information (date, back link)
- Uses existing typography and spacing

### app/blog/page.tsx
- Lists all blog posts in grid layout
- Server-side rendered for SEO
- Uses same BlogCard components as homepage

### app/blog/[slug]/page.tsx
- Renders individual blog post
- Handles 404 for non-existent posts
- Server-side rendered with proper meta tags

## Sample Content Structure

### posts/getting-started.md
```markdown
---
title: "Getting Started with My Portfolio"
description: "A brief introduction to my journey in web development and what drives my approach to building digital products."
publishedDate: "2024-01-15"
heroImage: "/blog/getting-started-hero.jpg"
---

# Getting Started

Here's my story about building digital products...

## Code Example
```javascript
const buildAmazingThings = () => {
  return "Always learning, always building";
};
```

## Including Media
![Project Screenshot](/blog/project-screenshot.jpg)

<video controls>
  <source src="/blog/demo-video.mp4" type="video/mp4">
</video>
```

## Navigation Updates
- Existing navbar already includes blog link (`#blog`)
- Homepage blog section will link to `/blog` for full listing
- Individual posts will have back navigation to blog listing

## SEO Considerations
- Server-side rendering for all blog content
- Proper meta tags from frontmatter data
- Structured URLs (`/blog/post-slug`)
- Image optimization using Next.js Image component

## Design System Integration
- Uses existing `<Section>` and `<Container>` components
- Follows current typography hierarchy (h1, h2, p styles)
- Theme-aware colors (`text-base-content`, `text-primary`, etc.)
- Responsive design matching existing components
- Maintains current spacing and layout patterns

## Future Considerations
- Easy to add features later: tags, search, related posts
- Markdown structure allows for easy CMS migration if needed
- Content organization supports multiple content types beyond blog
- Performance optimized with static generation potential 