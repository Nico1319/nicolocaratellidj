import { Play, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const bgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax calculations
  const parallaxY = scrollY * 0.4;
  const contentOpacity = Math.max(0, 1 - scrollY / 600);
  const contentScale = Math.max(0.8, 1 - scrollY / 3000);
  const contentBlur = Math.min(10, scrollY / 80);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background with parallax */}
      <div className="absolute inset-0 z-0">
        <img
          ref={bgRef}
          alt="DJ Background"
          className="w-full h-full object-cover scale-110 transition-transform duration-100"
          style={{
            transform: `translateY(${parallaxY}px) scale(1.1)`,
            opacity: 0.4,
          }}
          src="/lovable-uploads/a93832e9-6659-46a7-ba57-d7b70e083718.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]" />
      </div>

      {/* Content with scroll effects */}
      <div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-10"
        style={{
          opacity: contentOpacity,
          transform: `scale(${contentScale}) translateY(${-scrollY * 0.1}px)`,
          filter: `blur(${contentBlur}px)`,
        }}
      >
        {/* Status Badge */}
        <div
          className={`mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/30 bg-foreground/5 backdrop-blur-md transition-all duration-1000 ${
            isLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{
            filter: isLoaded ? "blur(0)" : "blur(10px)",
            transitionDelay: "200ms",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
            Available for 2026
          </span>
        </div>

        {/* Hidden SEO text */}
        <span className="sr-only">Nicolò Caratelli - DJ e Producer professionista a Roma</span>
        
        {/* Main Title */}
        <h1
          className={`text-display font-bold tracking-tighter text-foreground mb-6 leading-[0.9] transition-all duration-1000 ${
            isLoaded
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-20 scale-95"
          }`}
          style={{
            filter: isLoaded ? "blur(0)" : "blur(15px)",
            transitionDelay: "400ms",
          }}
        >
          Sound. <br />
          <span className="text-gradient">Vision.</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed mb-10 transition-all duration-1000 ${
            isLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-16"
          }`}
          style={{
            filter: isLoaded ? "blur(0)" : "blur(12px)",
            transitionDelay: "600ms",
          }}
        >
          La colonna sonora dei tuoi momenti più importanti.{" "}
          <br className="hidden md:block" />
          Eleganza, energia e atmosfera.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ${
            isLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
          style={{
            filter: isLoaded ? "blur(0)" : "blur(10px)",
            transitionDelay: "800ms",
          }}
        >
          <a
            href="#contact"
            className="bg-foreground text-background px-8 py-4 rounded-full font-semibold text-sm hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_30px_hsl(0_0%_100%/0.3)]"
          >
            Richiedi Disponibilità
          </a>
          <a
            href="#music"
            className="bg-foreground/10 backdrop-blur-md text-foreground border border-border/30 px-8 py-4 rounded-full font-semibold text-sm hover:bg-foreground/20 transition-all flex items-center justify-center gap-2 hover:scale-[1.03]"
          >
            <Play className="w-4 h-4 fill-current" /> Demo Mix
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{
          filter: isLoaded ? "blur(0)" : "blur(5px)",
          transitionDelay: "1200ms",
          opacity: contentOpacity,
        }}
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
