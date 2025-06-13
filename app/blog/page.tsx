import React from "react";
import Container from "@/components/Container";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/blog-utils";
import { Metadata } from "next";
import Section from "@/components/Section";
export const metadata: Metadata = {
  title: "Blog - Alex Smith",
  description:
    "Latest thoughts on product development and building with emerging tech",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <Section>
      <Container className="grid gap-5">
        <h1>Blog</h1>
        <p>Latest thoughts on product development and building with emerging tech</p>

        {/* Blog Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-base-content mb-4">
              No blog posts yet
            </h2>
            <p className="text-base-content/60">
              Check back soon for my latest thoughts and insights!
            </p>
          </div>
        )}
      </Container>
    </Section>
  );
}
