import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { BlogPost } from "@/data/blogPosts";
import { useRef, useState, useEffect } from "react";

interface RelatedArticlesCarouselProps {
  articles: BlogPost[];
}

export function RelatedArticlesCarousel({ articles }: RelatedArticlesCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollButtons);
      return () => container.removeEventListener("scroll", checkScrollButtons);
    }
  }, [articles]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (articles.length === 0) return null;

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Ti potrebbe interessare
          </h2>
          
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="p-2 rounded-full bg-muted hover:bg-muted/80 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Scorri a sinistra"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="p-2 rounded-full bg-muted hover:bg-muted/80 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Scorri a destra"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {articles.map((article) => (
            <article
              key={article.id}
              className="flex-shrink-0 w-[320px] glass-card rounded-2xl overflow-hidden group"
              style={{ scrollSnapAlign: "start" }}
            >
              <Link to={`/blog/${article.slug}`} className="block">
                <div className="relative h-40 bg-muted">
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

                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 rounded-lg bg-primary/10">
                      <article.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {article.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-foreground mb-2 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <div className="flex items-center gap-3 text-xs text-muted-foreground/70">
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
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
