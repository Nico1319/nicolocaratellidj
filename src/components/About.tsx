import { useEffect, useRef, useState } from "react";
import { Music2, ArrowUpRight } from "lucide-react";
import { useScrollAnimation, appleRevealStyles, apple3DStyles, appleImageRevealStyles } from "@/hooks/useScrollAnimation";

export function About() {
  const { ref: sectionRef, isVisible, scrollProgress } = useScrollAnimation<HTMLElement>({ threshold: 0.05 });
  const [imageParallax, setImageParallax] = useState({ main: 0, card1: 0, card2: 0 });

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      
      setImageParallax({
        main: progress * 30,
        card1: progress * 20,
        card2: progress * 25,
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-32 bg-background overflow-hidden relative">
      {/* Background decorations */}
      <div 
        className="absolute -top-1/2 -left-1/4 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[200px] transition-all duration-1000"
        style={{ 
          opacity: isVisible ? 1 : 0,
          transform: `translateY(${scrollProgress * 100}px)`,
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2
            className="text-heading font-bold tracking-tight mb-4"
            style={appleRevealStyles(isVisible, 0)}
          >
            Mastering the Vibe.
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            style={appleRevealStyles(isVisible, 150)}
          >
            Le mie competenze e la mia tecnologia al servizio del tuo evento.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-6 md:h-[800px]">
          {/* Large Card - Main Image */}
          <div
            className="col-span-1 md:col-span-4 md:row-span-2 glass-card rounded-[40px] overflow-hidden relative group"
            style={apple3DStyles(isVisible, 200)}
          >
            <div className="absolute inset-0 overflow-hidden">
              <img
                alt="Live Set"
                className="w-full h-full object-cover min-h-[400px] transition-all duration-1000"
                style={{
                  ...appleImageRevealStyles(isVisible, 300),
                  transform: isVisible 
                    ? `scale(1) translateY(${imageParallax.main}px)` 
                    : "scale(1.15) translateY(30px)",
                }}
                src="/lovable-uploads/9491bd42-d3d3-408d-b7c6-b880572705c7.jpg"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
            <div 
              className="absolute bottom-0 left-0 p-10 w-full"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 500ms",
              }}
            >
              <h3 className="text-3xl font-bold text-foreground mb-2">Sound Design Live</h3>
              <p className="text-muted-foreground font-medium">
                Club, Festival e Private Party esclusivi.
              </p>
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Total Audio Card */}
          <a
            href="#music"
            className="col-span-1 md:col-span-2 md:row-span-1 glass-card rounded-[40px] overflow-hidden relative group cursor-pointer"
            style={apple3DStyles(isVisible, 400)}
          >
            <div className="absolute inset-0 overflow-hidden">
              <img
                alt="Total Audio"
                className="w-full h-full object-cover transition-all duration-1000"
                style={{
                  ...appleImageRevealStyles(isVisible, 500),
                  transform: isVisible 
                    ? `scale(1) translateY(${imageParallax.card1}px)` 
                    : "scale(1.2) translateY(20px)",
                }}
                src="/lovable-uploads/total-audio-bg.jpg"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
              <div 
                className="w-12 h-12 bg-foreground/10 backdrop-blur-md rounded-full flex items-center justify-center text-foreground mb-4 transition-all duration-500 group-hover:scale-125 group-hover:bg-foreground/20 group-hover:rotate-12"
              >
                <Music2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-4xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">Total Audio</h4>
                <p className="text-muted-foreground font-medium">
                  House in tutte le sue sfaccettature, dall'Afro alla Tech.
                </p>
              </div>
            </div>
          </a>

          {/* Technology Card */}
          <a
            href="#services"
            className="col-span-1 md:col-span-2 md:row-span-1 glass-card rounded-[40px] relative overflow-hidden group cursor-pointer"
            style={apple3DStyles(isVisible, 550)}
          >
            <div className="absolute inset-0 overflow-hidden">
              <img
                alt="Tecnologia Premium"
                className="w-full h-full object-cover transition-all duration-1000"
                style={{
                  ...appleImageRevealStyles(isVisible, 650),
                  transform: isVisible 
                    ? `scale(1) translateY(${imageParallax.card2}px)` 
                    : "scale(1.2) translateY(20px)",
                }}
                src="/lovable-uploads/tech-premium-bg.jpg"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-background/90" />
            <div className="relative z-10 h-full flex flex-col justify-between p-8">
              <div className="flex justify-between items-start">
                <h4 className="text-2xl font-bold text-foreground">
                  Tecnologia <br />
                  Premium
                </h4>
                <ArrowUpRight className="text-foreground w-6 h-6 transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:scale-125" />
              </div>
              <p className="text-muted-foreground text-sm">
                Strumentazione professionale (audio, luci e console).
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
