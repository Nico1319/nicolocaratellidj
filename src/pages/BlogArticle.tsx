import { useParams, Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Contact } from "@/components/Contact";
import { RelatedArticlesCarousel } from "@/components/RelatedArticlesCarousel";
import { getPostBySlug, getRelatedPosts } from "@/data/blogPosts";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation, appleRevealStyles } from "@/hooks/useScrollAnimation";

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getPostBySlug(slug) : undefined;
  const relatedArticles = slug ? getRelatedPosts(slug, 5) : [];
  
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  // Parse markdown-like content to HTML
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: JSX.Element[] = [];
    let currentParagraph: string[] = [];
    let listItems: string[] = [];
    let inList = false;

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        const text = currentParagraph.join(" ");
        elements.push(
          <p key={elements.length} className="text-muted-foreground leading-relaxed mb-6">
            {renderInlineFormatting(text)}
          </p>
        );
        currentParagraph = [];
      }
    };

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={elements.length} className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
            {listItems.map((item, i) => (
              <li key={i}>{renderInlineFormatting(item)}</li>
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    const renderInlineFormatting = (text: string) => {
      const parts = text.split(/(\*\*[^*]+\*\*)/g);
      return parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="text-foreground font-semibold">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      });
    };

    lines.forEach((line) => {
      const trimmedLine = line.trim();

      if (trimmedLine.startsWith("## ")) {
        flushList();
        flushParagraph();
        elements.push(
          <h2 key={elements.length} className="text-2xl font-bold text-foreground mt-10 mb-4">
            {trimmedLine.replace("## ", "")}
          </h2>
        );
      } else if (trimmedLine.startsWith("- ")) {
        flushParagraph();
        inList = true;
        listItems.push(trimmedLine.replace("- ", ""));
      } else if (trimmedLine === "") {
        if (inList) {
          flushList();
        }
        flushParagraph();
      } else {
        if (inList) {
          flushList();
        }
        currentParagraph.push(trimmedLine);
      }
    });

    flushList();
    flushParagraph();

    return elements;
  };

  return (
    <Layout
      title={`${article.title} | Blog - Nicolò Caratelli DJ`}
      description={article.excerpt}
      canonical={`/blog/${article.slug}`}
    >
      <JsonLd
        schema={{
          type: "BlogPosting",
          headline: article.title,
          description: article.excerpt,
          datePublished: article.date,
          author: {
            name: "Nicolò Caratelli",
            url: "https://nicolocaratellidj.it/chi-sono",
          },
          image: `https://nicolocaratellidj.it${article.image}`,
        }}
      />

      {/* Hero */}
      <section ref={heroRef} className="pt-32 pb-12 bg-background overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Back Link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            style={appleRevealStyles(heroVisible, 0)}
          >
            <ArrowLeft className="w-4 h-4" />
            Torna al Blog
          </Link>

          {/* Category & Meta */}
          <div
            className="flex items-center gap-4 mb-6"
            style={appleRevealStyles(heroVisible, 100)}
          >
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-primary/10">
                <article.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                {article.category}
              </span>
            </div>
            <span className="text-muted-foreground/50">•</span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              {article.date}
            </span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              {article.readTime}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8"
            style={appleRevealStyles(heroVisible, 200)}
          >
            {article.title}
          </h1>

          {/* Featured Image */}
          <div
            className="relative rounded-3xl overflow-hidden bg-muted aspect-video mb-12"
            style={appleRevealStyles(heroVisible, 300)}
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section ref={contentRef} className="pb-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <article
            className="prose prose-lg prose-invert max-w-none"
            style={appleRevealStyles(contentVisible, 0)}
          >
            {renderContent(article.content)}
          </article>
        </div>
      </section>

      {/* Related Articles Carousel */}
      <RelatedArticlesCarousel articles={relatedArticles} />

      {/* Contact Section */}
      <Contact />
    </Layout>
  );
};

export default BlogArticle;
