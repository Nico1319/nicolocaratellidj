import { Music, Sparkles, Users, LucideIcon } from "lucide-react";
import blogPostsData from "./blogPosts.json";

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Music,
  Sparkles,
  Users,
};

export interface BlogPostData {
  id: number;
  slug: string;
  iconName: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
  content: string;
}

export interface BlogPost extends Omit<BlogPostData, 'iconName'> {
  icon: LucideIcon;
}

// Transform JSON data to include actual icon components
export const blogPosts: BlogPost[] = blogPostsData.map((post) => ({
  ...post,
  icon: iconMap[post.iconName] || Music,
}));

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getRelatedPosts = (currentSlug: string, limit: number = 3): BlogPost[] => {
  return blogPosts.filter((post) => post.slug !== currentSlug).slice(0, limit);
};

export const getAllSlugs = (): string[] => {
  return blogPosts.map((post) => post.slug);
};
