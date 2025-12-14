import { useEffect, useRef, useState } from "react";
import { Music2, ArrowUpRight } from "lucide-react";
export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return <section ref={sectionRef} id="about" className="py-32 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className={`text-heading font-bold tracking-tight mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{
          filter: isVisible ? "blur(0)" : "blur(10px)"
        }}>
            Mastering the Vibe.
          </h2>
          <p className={`text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{
          filter: isVisible ? "blur(0)" : "blur(10px)"
        }}>
            Le mie competenze e la mia tecnologia al servizio del tuo evento.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-6 md:h-[800px]">
          {/* Large Card - Main Image */}
          <div className={`col-span-1 md:col-span-4 md:row-span-2 glass-card rounded-[40px] overflow-hidden relative group transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{
          filter: isVisible ? "blur(0)" : "blur(10px)"
        }}>
            <img alt="Live Set" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 min-h-[400px]" src="/lovable-uploads/9491bd42-d3d3-408d-b7c6-b880572705c7.jpg" />
            <div className="absolute bottom-0 left-0 p-10 bg-gradient-to-t from-background via-background/50 to-transparent w-full">
              <h3 className="text-3xl font-bold text-foreground mb-2">Sound Design Live</h3>
              <p className="text-muted-foreground font-medium">Club, Festival e Private Party esclusivi.</p>
            </div>
          </div>

          {/* Total Audio Card */}
          <a href="#music" className={`col-span-1 md:col-span-2 md:row-span-1 glass-card rounded-[40px] overflow-hidden relative group cursor-pointer transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{
          filter: isVisible ? "blur(0)" : "blur(10px)"
        }}>
            <img 
              alt="Total Audio" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70" 
              src="/lovable-uploads/total-audio-new-bg.tiff"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />
            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
              <div className="w-12 h-12 bg-foreground/10 backdrop-blur-md rounded-full flex items-center justify-center text-foreground mb-4">
                <Music2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-4xl font-bold text-foreground mb-1">Total Audio</h4>
                <p className="text-muted-foreground font-medium">House in tutte le sue sfaccettature, dall'Afro alla Tech.</p>
              </div>
            </div>
          </a>

          {/* Technology Card */}
          <a href="#services" className={`col-span-1 md:col-span-2 md:row-span-1 glass-card rounded-[40px] p-8 relative overflow-hidden group cursor-pointer transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{
          filter: isVisible ? "blur(0)" : "blur(10px)"
        }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background group-hover:opacity-80 transition-opacity" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <h4 className="text-2xl font-bold text-foreground">
                  Tecnologia <br />
                  Premium
                </h4>
                <ArrowUpRight className="text-foreground w-6 h-6" />
              </div>
              <p className="text-muted-foreground text-sm">
                Strumentazione professionale (audio, luci e console).
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>;
}