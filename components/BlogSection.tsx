import React from "react";
import Link from "next/link";
import Section from "@/components/Section";
import BlogCard from "@/components/BlogCard";
import { getFeaturedPosts } from "@/lib/blog-utils";

interface BlogSectionProps {
  id?: string;
}

export default async function BlogSection({ id = "blog" }: BlogSectionProps) {
  const featuredPosts = await getFeaturedPosts(3);
  
  return (
    <Section 
      id={id}
      className="flex flex-col"
    >
      {/* Header */}
      <div className="grid gap-5">
        <h2>Blog</h2>
        <p className="text-base-content/60">
          Latest thoughts on product development, fitness, and life.
        </p>
      </div>
      
      {/* Featured Posts */}
      {featuredPosts.length > 0 ? (
        <>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {featuredPosts.map(post => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          {/* 
          Currently not using this link as I want to keep the blog section minimal. I'll add it back in when I have more posts.
          <Link 
            href="/blog" 
            className="mt-8 self-center text-primary hover:text-primary/60 transition-colors font-medium"
          >
            View All Posts →
          </Link> */}
        </>
      ) : (
        <div className="mt-8 text-center">
          <p className="text-base-content/60">No blog posts yet. Check back soon!</p>
        </div>
      )}
    </Section>
  );
} 