import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BlogPost } from "@/data/blogPosts";

interface BlogArticleCardProps {
  article: BlogPost;
  index: number;
  isVisible: boolean;
  animationStyle: React.CSSProperties;
}

export function BlogArticleCard({ article, animationStyle }: BlogArticleCardProps) {
  return (
    <article
      className="glass-card rounded-3xl overflow-hidden group"
      style={animationStyle}
    >
      {/* Card Image */}
      <Link to={`/blog/${article.slug}`} className="block overflow-hidden">
        <div className="relative h-48 bg-muted">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
      </Link>

      {/* Card Header */}
      <div className="p-8 pb-0">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-primary/10">
            <article.icon className="w-5 h-5 text-primary" />
          </div>
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
            {article.category}
          </span>
        </div>

        <Link to={`/blog/${article.slug}`}>
          <h2 className="text-xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
            {article.title}
          </h2>
        </Link>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {article.excerpt}
        </p>

        <div className="flex items-center gap-4 text-xs text-muted-foreground/70">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {article.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {article.readTime}
          </span>
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-8 pt-6">
        <Link
          to={`/blog/${article.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-all group/btn"
        >
          Leggi tutto
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
