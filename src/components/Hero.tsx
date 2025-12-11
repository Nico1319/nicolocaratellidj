import { Button } from "@/components/ui/button";
import { Play, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-dj.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="DJ performing at exclusive club event"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow px-6 text-center">
        <div className="animate-fade-up">
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-primary mb-6 font-medium">
            DJ & Producer
          </p>
        </div>
        
        <h1 className="text-display text-foreground mb-8 animate-fade-up animation-delay-100">
          DJ MARCO
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up animation-delay-200">
          Creando esperienze sonore uniche per eventi esclusivi,
          club e festival in tutta Italia
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-300">
          <Button variant="hero" asChild>
            <a href="#music">
              <Play size={18} />
              Ascolta l'Ultimo Mix
            </a>
          </Button>
          <Button variant="heroOutline" asChild>
            <a href="#contact">
              <Calendar size={18} />
              Prenota Ora
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
