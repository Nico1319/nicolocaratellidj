import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import sitemap from "vite-plugin-sitemap";

// Import JSON directly for sitemap generation (no TypeScript processing needed)
import blogPostsData from "./src/data/blogPosts.json";

// Blog post routes (dynamic)
const blogSlugs = blogPostsData.map((post: { slug: string }) => `/blog/${post.slug}`);

// Routes must match src/App.tsx <Route path=...> exactly.
// The sitemap plugin automatically adds "/" from the `hostname` option,
// so we do NOT include "/" here (avoids duplicate root URL).
const staticRoutes = [
  "/blog",
  "/chi-sono",
  "/servizi/lounge-bar-aperitivi",
  "/servizi/apres-ski-winter-party",
  "/servizi/inaugurazioni-commerciali",
  "/servizi/party-privati-esclusivi",
  "/produzioni-musicali",
  "/dj-18esimi-roma",
  "/privacy-policy",
  "/cookie-policy",
  "/termini-di-servizio",
];

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
      priority: 0.7,
      readable: true,
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
