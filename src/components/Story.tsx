import { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp, Mic } from "lucide-react";
import { useScrollAnimation, appleRevealStyles, appleSlideStyles, appleImageRevealStyles } from "@/hooks/useScrollAnimation";

export function Story() {
  const [showHistory, setShowHistory] = useState(false);
  const { ref: sectionRef, isVisible, scrollProgress } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const [imageParallax, setImageParallax] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      const rect = imageRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const parallax = (rect.top - windowHeight / 2) * 0.1;
      setImageParallax(parallax);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="story" className="py-32 bg-secondary overflow-hidden relative">
      {/* Background decoration */}
      <div 
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px] transition-opacity duration-1000"
        style={{ opacity: isVisible ? 1 : 0 }}
      />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <h2
          className="text-center text-heading font-bold mb-16"
          style={appleRevealStyles(isVisible, 0)}
        >
          La Mia Storia.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <div className="space-y-8">
            <div
              className="space-y-4"
              style={appleSlideStyles(isVisible, "left", 150)}
            >
              <p className="text-2xl font-bold text-foreground leading-relaxed">
                Nicolò Caratelli: DJ, Musicista, e Professionista dell'Intrattenimento a{" "}
                <span className="text-primary relative">
                  Roma
                  <span 
                    className="absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-700"
                    style={{ width: isVisible ? "100%" : "0%" }}
                  />
                </span>.
              </p>
              <p className="text-lg font-medium text-muted-foreground leading-relaxed">
                Ciao! Mi chiamo Nicolò Caratelli, ho 21 anni e sono orgogliosamente di{" "}
                <strong className="text-foreground">Roma</strong>. Nonostante la giovane età, la mia
                esperienza nel settore dell'intrattenimento e della musica è intensa e diversificata.
                Con quasi 4 anni di attività professionale, ho avuto la fortuna di operare in una
                vasta gamma di contesti.
              </p>
            </div>

            <div
              className="space-y-4"
              style={appleSlideStyles(isVisible, "left", 300)}
            >
              <p className="text-base text-muted-foreground/80 leading-relaxed">
                Ho portato la mia musica e la mia energia da eventi privati come{" "}
                <strong className="text-foreground">feste di 18 anni</strong> e cerimonie di laurea,
                a contesti pubblici che spaziano dalle sagre di paese fino ai palchi delle discoteche
                più frequentate. Lavoro con ogni fascia d'età, garantendo sempre un intrattenimento su
                misura.
              </p>
            </div>

            <button
              onClick={() => setShowHistory(!showHistory)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-all pt-4 hover:scale-[1.03] transform group"
              style={appleSlideStyles(isVisible, "left", 450)}
            >
              {showHistory ? "Nascondi la storia completa" : "Scopri di più sulla mia formazione"}
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                {showHistory ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </span>
            </button>

            {showHistory && (
              <div 
                className="space-y-6 pt-8 border-t border-border/30"
                style={{
                  animation: "slideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                }}
              >
                <h3 className="text-2xl font-bold text-foreground">
                  Da Strumentista a Produttore: La Mia Formazione Musicale Completa
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  La mia carriera non è iniziata dietro una consolle, ma in una sala prove, innamorato
                  del suono analogico. Ho iniziato con la <strong className="text-foreground">Chitarra</strong>,
                  ma la <strong className="text-foreground">Batteria</strong> è diventata la mia vera
                  vocazione. Anni di lezioni private hanno affinato il mio senso del ritmo, essenziale
                  per un <strong className="text-foreground">DJ</strong>.
                </p>
                <p className="text-base text-muted-foreground/80 leading-relaxed">
                  Parallelamente, ho sviluppato la mia abilità nel <strong className="text-foreground">DJing</strong>,
                  trasformando il mixaggio in una vera e propria arte. La mia evoluzione mi ha portato
                  nel mondo della <strong className="text-foreground">produzione musicale</strong>: ho
                  iniziato a creare <strong className="text-foreground">remix</strong> e mashup che hanno
                  riscosso moltissimo successo, dimostrando una forte capacità di interpretare e
                  rielaborare i trend musicali.
                </p>
              </div>
            )}
          </div>

          {/* Image with parallax */}
          <div
            ref={imageRef}
            className="relative rounded-[40px] overflow-hidden shadow-2xl group"
            style={{
              ...appleSlideStyles(isVisible, "right", 200),
              transform: isVisible 
                ? `translateX(0) translateY(${imageParallax}px)` 
                : "translateX(80px)",
            }}
          >
            <div className="overflow-hidden rounded-[40px]">
              <img
                alt="Ritratto DJ Nicolò Caratelli"
                className="w-full h-full object-cover transition-all duration-700 aspect-[4/5]"
                style={{
                  ...appleImageRevealStyles(isVisible, 400),
                  transform: isVisible 
                    ? `scale(1) translateY(${-imageParallax * 0.5}px)` 
                    : "scale(1.1) translateY(20px)",
                }}
                src="/lovable-uploads/90186305-67f5-43a2-b0fe-5b954e08f3a9.jpg"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div 
              className="absolute bottom-6 right-6 p-3 bg-foreground/10 backdrop-blur-md rounded-full border border-border/30 transition-all duration-500 group-hover:scale-110 group-hover:bg-foreground/20"
            >
              <Mic className="w-5 h-5 text-foreground" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
            filter: blur(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
      `}</style>
    </section>
  );
}
