import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blog-utils";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Link 
      href={`/blog/${post.slug}`}
      className="group block bg-base-100 rounded-lg overflow-hidden border border-base-300 hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
    >
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={post.heroSquare}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <div className="flex flex-col gap-3">
          <time className="text-sm text-base-content/60">
            {formatDate(post.publishedDate)}
          </time>
          
          <h3 className="text-xl font-semibold text-base-content group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          
          <p className="text-base-content/70 line-clamp-3">
            {post.description}
          </p>
          
          <div className="flex items-center text-primary text-sm font-medium mt-2">
            Read more
            <svg 
              className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
} 