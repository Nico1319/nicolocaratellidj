import { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp, Mic } from "lucide-react";

export function Story() {
  const [showHistory, setShowHistory] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="story"
      className="py-32 bg-secondary"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <h2
          className={`text-center text-heading font-bold mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ filter: isVisible ? "blur(0)" : "blur(10px)" }}
        >
          La Mia Storia.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <div className="space-y-8">
            <div
              className={`space-y-4 transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ filter: isVisible ? "blur(0)" : "blur(10px)" }}
            >
              <p className="text-2xl font-bold text-foreground leading-relaxed">
                Nicolò Caratelli: DJ, Musicista, e Professionista dell'Intrattenimento a{" "}
                <span className="text-primary">Roma</span>.
              </p>
              <p className="text-lg font-medium text-muted-foreground leading-relaxed">
                Ciao! Mi chiamo Nicolò Caratelli, ho 21 anni e sono orgogliosamente di{" "}
                <strong className="text-foreground">Roma</strong>. Nonostante la giovane età, la mia
                esperienza nel settore dell'intrattenimento e della musica è intensa e diversificata.
                Con quasi 4 anni di attività professionale, ho avuto la fortuna di operare in una
                vasta gamma di contesti.
              </p>
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
              className={`inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors pt-4 hover:scale-[1.03] transform duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ filter: isVisible ? "blur(0)" : "blur(10px)" }}
            >
              {showHistory ? "Nascondi la storia completa" : "Scopri di più sulla mia formazione"}
              {showHistory ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {showHistory && (
              <div className="space-y-6 pt-8 border-t border-border/30 animate-fade-in">
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

          {/* Image */}
          <div
            className={`relative rounded-[40px] overflow-hidden shadow-2xl group hover:scale-[1.01] transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ filter: isVisible ? "blur(0)" : "blur(10px)" }}
          >
            <img
              src="https://images.unsplash.com/photo-1628186129881-8079a403487f?q=80&w=1200"
              alt="Ritratto DJ Nicolò Caratelli"
              className="w-full h-full object-cover opacity-90 transition-opacity duration-500 aspect-[4/5]"
            />
            <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors" />
            <div className="absolute bottom-6 right-6 p-3 bg-foreground/10 backdrop-blur-md rounded-full border border-border/30">
              <Mic className="w-5 h-5 text-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
