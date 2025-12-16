import { useEffect, useState } from "react";
import { Play, PlayCircle, CloudFog, Youtube } from "lucide-react";
import { useScrollAnimation, appleRevealStyles, appleScaleStyles, appleImageRevealStyles } from "@/hooks/useScrollAnimation";

const mixes = [
  {
    id: "01",
    title: "Le Canzoni (Afro Remix)",
    genre: "Afro House",
    duration: "3 min",
    url: "https://soundcloud.com/nicolocaratellidj/lecanzoniafroremix",
  },
  {
    id: "02",
    title: "Pronto Come Va - The Kolors (Afro Remix)",
    genre: "Afro House",
    duration: "3 min",
    url: "https://soundcloud.com/nicolocaratellidj/pronto-come-va-the-kolors-afro-remix",
  },
  {
    id: "03",
    title: "Meet Me Halfway - Black Eyed Peas (Afro Remix)",
    genre: "Afro House",
    duration: "3 min",
    url: "https://soundcloud.com/nicolocaratellidj/meet-me-halfway-black-eyed-peas-afro-remix-nicolo-caratelli",
  },
];

export function Music() {
  const { ref: sectionRef, isVisible, scrollProgress } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const [albumParallax, setAlbumParallax] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      setAlbumParallax(progress * 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="music"
      className="py-32 bg-background overflow-hidden relative"
    >
      {/* Decorative Blurs with parallax */}
      <div
        className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] -translate-y-1/2 transition-all duration-1000"
        style={{ 
          opacity: isVisible ? 1 : 0, 
          transitionDelay: "200ms",
          transform: `translateY(${-scrollProgress * 80}px)`,
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] transition-all duration-1000"
        style={{ 
          opacity: isVisible ? 1 : 0, 
          transitionDelay: "400ms",
          transform: `translateY(${scrollProgress * 60}px)`,
        }}
      />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div>
            <h2
              className="text-5xl font-bold text-foreground tracking-tight"
              style={appleRevealStyles(isVisible, 0)}
            >
              Listen.
            </h2>
            <p
              className="text-muted-foreground mt-2 text-xl"
              style={appleRevealStyles(isVisible, 100)}
            >
              Il sound che definisce l'atmosfera.
            </p>
          </div>
          <div
            className="flex gap-3"
            style={appleRevealStyles(isVisible, 200)}
          >
            <a
              href="https://soundcloud.com/nicolocaratellidj"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-card rounded-full flex items-center justify-center hover:bg-foreground hover:text-background transition-all hover:scale-125 duration-300 hover:rotate-12"
            >
              <CloudFog className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@nicolocaratellidj"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-card rounded-full flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground transition-all hover:scale-125 duration-300 hover:-rotate-12"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Player Card */}
        <div
          className="bg-card/80 backdrop-blur-xl border border-border/30 rounded-[32px] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-10 items-center"
          style={appleScaleStyles(isVisible, 300)}
        >
          {/* Album Art with parallax */}
          <div 
            className="w-64 h-64 md:w-80 md:h-80 bg-muted rounded-2xl shadow-2xl overflow-hidden relative group flex-shrink-0"
            style={{
              transform: `translateY(${-albumParallax * 0.3}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <img
              alt="Album Art"
              className="w-full h-full object-cover transition-all duration-1000"
              style={{
                ...appleImageRevealStyles(isVisible, 400),
                transform: isVisible 
                  ? `scale(1) translateY(${albumParallax * 0.5}px)` 
                  : "scale(1.2) translateY(30px)",
              }}
              src="/lovable-uploads/5d795b98-656f-41dd-83bf-2d51608a98c4.jpg"
            />
            <a
              href="https://soundcloud.com/nicolocaratellidj"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 bg-background/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
            >
              <div className="w-20 h-20 bg-foreground/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-foreground/30">
                <Play className="w-8 h-8 fill-foreground text-foreground ml-1" />
              </div>
            </a>
            {/* Glow effect */}
            <div className="absolute inset-0 shadow-[inset_0_0_60px_hsl(var(--primary)/0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>

          {/* Track List */}
          <div className="flex-1 w-full space-y-2">
            <h3 
              className="text-2xl font-bold text-foreground mb-6"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 400ms",
              }}
            >
              Latest Mixes
            </h3>

            {mixes.map((mix, index) => (
              <a
                key={mix.id}
                href={mix.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl hover:bg-foreground/5 transition-all cursor-pointer border-b border-border/30 last:border-0 hover:scale-[1.02] hover:pl-6"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0) rotateY(0)" : "translateX(50px) rotateY(-10deg)",
                  filter: isVisible ? "blur(0)" : "blur(5px)",
                  transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${500 + index * 120}ms`,
                }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground font-mono text-xs group-hover:text-primary transition-colors">{mix.id}</span>
                  <div>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">{mix.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {mix.genre} • {mix.duration}
                    </p>
                  </div>
                </div>
                <PlayCircle className="text-muted-foreground group-hover:text-foreground transition-all w-6 h-6 group-hover:scale-125 group-hover:rotate-12" />
              </a>
            ))}
          </div>
        </div>

        {/* YouTube Featured Section */}
        <a
          href="https://www.youtube.com/watch?v=W0WIvX4MJfg"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex items-center gap-5 bg-card/60 backdrop-blur-xl border border-border/30 rounded-2xl p-4 md:p-5 group hover:border-destructive/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_hsl(0_72%_51%/0.2)]"
          style={appleRevealStyles(isVisible, 700)}
        >
          {/* Thumbnail */}
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden flex-shrink-0 relative">
            <img
              src="https://img.youtube.com/vi/W0WIvX4MJfg/mqdefault.jpg"
              alt="Most listened remix"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-115"
              style={appleImageRevealStyles(isVisible, 800)}
            />
            <div className="absolute inset-0 bg-background/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="w-12 h-12 bg-destructive rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform">
                <Play className="w-5 h-5 fill-destructive-foreground text-destructive-foreground ml-0.5" />
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Youtube className="w-4 h-4 text-destructive flex-shrink-0" />
              <span className="text-[10px] font-medium bg-destructive/20 text-destructive px-2 py-0.5 rounded-full animate-pulse">
                500K+ views
              </span>
            </div>
            <p className="text-foreground font-semibold text-sm md:text-base truncate group-hover:text-destructive transition-colors">
              Il remix più ascoltato
            </p>
            <p className="text-muted-foreground text-xs md:text-sm">
              Oltre mezzo milione di ascolti
            </p>
          </div>

          {/* Arrow */}
          <div className="w-10 h-10 bg-card rounded-full flex items-center justify-center group-hover:bg-destructive transition-all flex-shrink-0 group-hover:scale-125 group-hover:rotate-12">
            <Play className="w-4 h-4 text-muted-foreground group-hover:text-destructive-foreground transition-colors ml-0.5" />
          </div>
        </a>
      </div>
    </section>
  );
}
