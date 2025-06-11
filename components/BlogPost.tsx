import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import Section from "@/components/Section";
import { BlogPost as BlogPostType } from "@/lib/blog-utils";

interface BlogPostProps {
  post: BlogPostType;
}

export default function BlogPost({ post }: BlogPostProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Section>
      <Container>
        {/* Hero Image */}
        <div className="aspect-video md:aspect-[3/1] relative overflow-hidden rounded-lg mb-8 prose prose-base md:prose-lg mx-auto">
          <Image
            src={post.heroImage}
            alt={post.title}
            fill
            className="object-cover object-left"
            priority
          />
        </div>
        {/* Meta Information */}
        <div className="mb-8 prose prose-base md:prose-lg prose-headings:mb-0 mx-auto">
          <h1 className="text-base-content text-3xl md:text-4xl">
            {post.title}
          </h1>
          <time className="text-base-content/60 text-sm font-light">
            {formatDate(post.publishedDate)}
          </time>
        </div>
        
        {/* Blog Content */}
        <article 
          className="mx-auto prose prose-base md:prose-lg
          prose-headings:text-base-content
          prose-p:text-base-content
          prose-a:text-primary hover:prose-a:text-primary/60
          prose-strong:text-base-content
          prose-code:text-base-content
          prose-pre:bg-base-200
          prose-blockquote:text-base-content/70
          prose-blockquote:border-primary/30
          prose-li:font-light
          prose-li:prose-base
          prose-img:rounded-lg
          prose-table:text-base-content/80
          prose-th:text-base-content
          prose-td:text-base-content/80"
        >
          {post.mdxContent}
        </article>

        {/* Bottom Navigation */}
        {/* Currently not using this link as I want to keep the blog section minimal. I'll add it back in when I have more posts. */}
        <div className="mt-12 pt-8 border-t border-base-300 hidden">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary hover:text-primary/60 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>
        </div>
      </Container>
    </Section>
  );
}
