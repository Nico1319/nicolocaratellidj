import { Play, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const bgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Advanced parallax calculations
  const parallaxY = scrollY * 0.5;
  const bgScale = 1.1 + scrollY * 0.0002;
  const contentOpacity = Math.max(0, 1 - scrollY / 500);
  const contentScale = Math.max(0.85, 1 - scrollY / 2000);
  const contentBlur = Math.min(15, scrollY / 50);
  const contentY = scrollY * 0.15;

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden"
    >
      {/* Animated background gradient orbs */}
      <div 
        className="absolute inset-0 z-0 overflow-hidden"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <div 
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div 
          className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-purple-900/30 rounded-full blur-[120px] animate-pulse"
          style={{ animationDuration: "5s", animationDelay: "1s" }}
        />
      </div>

      {/* Background with parallax */}
      <div className="absolute inset-0 z-0">
        <img
          ref={bgRef}
          alt="DJ Background"
          className="w-full h-full object-cover transition-all duration-100"
          style={{
            transform: `translateY(${parallaxY}px) scale(${bgScale})`,
            opacity: Math.max(0.2, 0.5 - scrollY / 1000),
            filter: `blur(${Math.min(5, scrollY / 200)}px)`,
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
          transform: `scale(${contentScale}) translateY(${contentY}px)`,
          filter: `blur(${contentBlur}px)`,
          transition: "filter 0.1s ease-out",
        }}
      >
        {/* Status Badge */}
        <div
          className={`mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/30 bg-foreground/5 backdrop-blur-md transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-90"
          }`}
          style={{
            filter: isLoaded ? "blur(0)" : "blur(10px)",
            transitionDelay: "200ms",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
            Available for 2024/25
          </span>
        </div>

        {/* Main Title with character animation */}
        <h1
          className={`text-display font-bold tracking-tighter text-foreground mb-6 leading-[0.9] transition-all duration-1200 ${
            isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-24 scale-90"
          }`}
          style={{
            filter: isLoaded ? "blur(0)" : "blur(20px)",
            transitionDelay: "400ms",
            textShadow: isLoaded ? "0 0 80px hsl(var(--primary) / 0.3)" : "none",
          }}
        >
          Sound. <br />
          <span 
            className="text-gradient inline-block"
            style={{
              transform: isLoaded ? "translateY(0) rotateX(0)" : "translateY(40px) rotateX(-20deg)",
              transition: "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 600ms",
            }}
          >
            Vision.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed mb-10 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
          style={{
            filter: isLoaded ? "blur(0)" : "blur(12px)",
            transitionDelay: "700ms",
          }}
        >
          La colonna sonora dei tuoi momenti più importanti.{" "}
          <br className="hidden md:block" />
          Eleganza, energia e atmosfera.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{
            filter: isLoaded ? "blur(0)" : "blur(10px)",
            transitionDelay: "900ms",
          }}
        >
          <a
            href="#contact"
            className="group relative bg-foreground text-background px-8 py-4 rounded-full font-semibold text-sm overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_hsl(0_0%_100%/0.4)]"
          >
            <span className="relative z-10">Richiedi Disponibilità</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          <a
            href="#music"
            className="group bg-foreground/10 backdrop-blur-md text-foreground border border-border/30 px-8 py-4 rounded-full font-semibold text-sm hover:bg-foreground/20 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.03] hover:border-border/60"
          >
            <Play className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" /> 
            Demo Mix
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-10 transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{
          filter: isLoaded ? "blur(0)" : "blur(5px)",
          transitionDelay: "1400ms",
          opacity: contentOpacity * 0.8,
        }}
      >
        <a 
          href="#story" 
          className="flex flex-col items-center gap-2 group cursor-pointer"
        >
          <span className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground group-hover:text-foreground transition-colors">
            Scroll
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1 group-hover:border-foreground/50 transition-colors">
            <div className="w-1.5 h-3 bg-muted-foreground rounded-full animate-bounce group-hover:bg-foreground transition-colors" />
          </div>
        </a>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-5 pointer-events-none" />
    </section>
  );
}
