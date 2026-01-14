import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import sitemap from "vite-plugin-sitemap";

// Import JSON directly for sitemap generation (no TypeScript processing needed)
import blogPostsData from "./src/data/blogPosts.json";

// Generate blog slugs for sitemap
const blogSlugs = blogPostsData.map((post: { slug: string }) => `/blog/${post.slug}`);

// Static routes
const staticRoutes = [
  "/",
  "/blog",
  "/chi-sono",
  "/servizi/wedding-dj",
  "/servizi/lounge-bar-aperitivi",
  "/servizi/apres-ski-winter-party",
  "/servizi/inaugurazioni-commerciali",
  "/servizi/party-privati-esclusivi",
  "/servizi-extra",
  "/produzioni-musicali",
];

// All routes including dynamic blog posts
const allRoutes = [...staticRoutes, ...blogSlugs];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    sitemap({
      hostname: "https://nicolocaratellidj.it",
      dynamicRoutes: allRoutes,
      changefreq: "weekly",
      lastmod: new Date(),
      priority: 0.8,
      exclude: ["/404"],
      outDir: "dist",
      generateRobotsTxt: false,
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
