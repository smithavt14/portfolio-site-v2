import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import { mdxComponents } from '@/components/MDXComponents';


export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedDate: string;
  heroImage: string;
  heroSquare: string;
  mdxContent: any;
}

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getAllPosts(): Promise<BlogPost[]> {
  // Check if posts directory exists
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames
      .filter(name => name.endsWith('.mdx'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.mdx$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);
        
        return {
          slug,
          title: data.title,
          description: data.description,
          publishedDate: data.publishedDate,
          heroImage: data.heroImage,
          heroSquare: data.heroSquare,
        } as BlogPost;
      })
  );
  
  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => 
    new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    try {
      const compiled = await compileMDX({
        source: content,
        components: mdxComponents,
        options: {
          parseFrontmatter: false, // We already parsed it with gray-matter
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeHighlight, rehypeSlug],
          },
        },
      });
      
      return {
        slug,
        title: data.title,
        description: data.description,
        publishedDate: data.publishedDate,
        heroImage: data.heroImage,
        heroSquare: data.heroSquare,
        mdxContent: compiled.content,
      };
    } catch (mdxError) {
      console.error(`Error compiling MDX for ${slug}:`, mdxError);
      return null;
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export async function getFeaturedPosts(limit: number = 3): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.slice(0, limit);
} 