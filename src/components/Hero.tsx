import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const bgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Background with parallax */}
      <div className="absolute inset-0 z-0">
        <img ref={bgRef} alt="DJ Background" className="w-full h-full object-cover opacity-40 scale-105" style={{
        transform: `translateY(${scrollY * 0.3}px)`
      }} src="/lovable-uploads/a93832e9-6659-46a7-ba57-d7b70e083718.jpg" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-10">
        {/* Status Badge */}
        <div className="animate-fade-up mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/30 bg-foreground/5 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
            Available for 2024/25
          </span>
        </div>

        {/* Main Title */}
        <h1 className="animate-fade-up animation-delay-100 text-display font-bold tracking-tighter text-foreground mb-6 leading-[0.9]">
          Sound. <br />
          <span className="text-gradient">Vision.</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-up animation-delay-200 text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed mb-10">
          La colonna sonora dei tuoi momenti più importanti. <br className="hidden md:block" />
          Eleganza, energia e atmosfera.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up animation-delay-300 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="bg-foreground text-background px-8 py-4 rounded-full font-semibold text-sm hover:scale-105 transition-transform duration-300">
            Richiedi Disponibilità
          </a>
          <a href="#music" className="bg-foreground/10 backdrop-blur-md text-foreground border border-border/30 px-8 py-4 rounded-full font-semibold text-sm hover:bg-foreground/20 transition-all flex items-center justify-center gap-2 hover:scale-[1.03]">
            <Play className="w-4 h-4 fill-current" /> Demo Mix
          </a>
        </div>
      </div>
    </section>;
}