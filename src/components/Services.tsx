import { useEffect, useState } from "react";
import { Coffee, Snowflake, Megaphone, PartyPopper, HeartHandshake } from "lucide-react";
import { useScrollAnimation, appleRevealStyles, appleImageRevealStyles } from "@/hooks/useScrollAnimation";
import aperiskiImage from "@/assets/aperiski-mountain.jpg";
import loungeAperitivoImage from "@/assets/lounge-aperitivo.jpg";
import partyPrivatiImage from "@/assets/party-privati.jpg";
import weddingDjImage from "@/assets/wedding-dj.jpg";
import inaugurazioniImage from "@/assets/inaugurazioni.jpg";

const services = [
  {
    icon: Coffee,
    title: "Lounge Bar & Aperitivi",
    description:
      "**Specializzato in DJ set eleganti e di tendenza per Lounge Bar e Happy Hour.** Creo l'atmosfera sonora che massimizza l'esperienza del cliente, aumentando il tempo di permanenza. Playlist Deep House, Chillout e Nu Disco.",
    image: loungeAperitivoImage,
    colSpan: "md:col-span-2",
    borderColor: "border-t-destructive/50",
    iconColor: "text-destructive",
    badge: "TOP FOCUS COMMERCIALE",
  },
  {
    icon: Snowflake,
    title: "Aperiski / Winter Party",
    description:
      "DJ set ad alta quota per ski-resort e chalet. Musica dinamica per creare il perfetto après-ski o l'atmosfera giusta per i tuoi party invernali.",
    image: aperiskiImage,
    colSpan: "md:col-span-1",
    borderColor: "border-t-destructive/30",
    iconColor: "text-destructive",
  },
  {
    icon: Megaphone,
    title: "Inaugurazioni Commerciali",
    description:
      "Sound design mirato per il lancio di nuovi negozi, showroom, fiere ed eventi corporate. **Massima visibilità** e coinvolgimento per il tuo brand.",
    image: inaugurazioniImage,
    colSpan: "md:col-span-1",
    borderColor: "border-t-border/30",
    iconColor: "text-foreground",
  },
  {
    icon: PartyPopper,
    title: "Party Privati Esclusivi",
    description:
      "**Trasforma la tua festa in un evento leggendario.** DJ set personalizzati per 18esimi, feste di laurea e compleanni. Playlist curata sui tuoi gusti per far ballare tutti, con un impianto audio professionale.",
    image: partyPrivatiImage,
    colSpan: "md:col-span-2",
    borderColor: "border-t-primary/30",
    iconColor: "text-primary",
  },
  {
    icon: HeartHandshake,
    title: "Wedding DJ",
    description:
      "**La colonna sonora del tuo giorno più bello.** Un servizio Wedding DJ di alta classe, discreto e professionale. Dalla musica soft per la cerimonia al DJ set energico per il party serale. Massima attenzione ai dettagli.",
    image: weddingDjImage,
    colSpan: "md:col-span-3",
    borderColor: "border-t-muted-foreground/30",
    iconColor: "text-muted-foreground",
  },
];

export function Services() {
  const { ref: sectionRef, isVisible, scrollProgress } = useScrollAnimation<HTMLElement>({ threshold: 0.02 });
  const [imageParallax, setImageParallax] = useState<number[]>([0, 0, 0, 0, 0]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      
      setImageParallax(services.map((_, i) => progress * (15 + i * 5)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-32 bg-secondary overflow-hidden relative">
      {/* Background decoration */}
      <div 
        className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-destructive/5 rounded-full blur-[150px] -translate-y-1/2 transition-all duration-1000"
        style={{ 
          opacity: isVisible ? 1 : 0,
          transform: `translateY(${-scrollProgress * 100}px)`,
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <h2
          className="text-heading font-bold mb-16 text-center"
          style={appleRevealStyles(isVisible, 0)}
        >
          Esperienze su misura per il tuo successo.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`col-span-1 ${service.colSpan} glass-card rounded-[32px] p-8 md:p-10 relative overflow-hidden group min-h-[350px] border-t-4 ${service.borderColor}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "perspective(1000px) rotateX(0deg) translateY(0) scale(1)"
                  : "perspective(1000px) rotateX(-12deg) translateY(80px) scale(0.92)",
                filter: isVisible ? "blur(0)" : "blur(12px)",
                transition: `all 1s cubic-bezier(0.16, 1, 0.3, 1) ${200 + index * 120}ms`,
              }}
            >
              {/* Badge */}
              {service.badge && (
                <div 
                  className="absolute top-0 right-0 p-4 z-20"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0) scale(1)" : "translateY(-20px) scale(0.8)",
                    transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${400 + index * 120}ms`,
                  }}
                >
                  <span className="text-[10px] font-bold bg-destructive text-destructive-foreground px-3 py-1 rounded-full uppercase tracking-wider animate-pulse">
                    {service.badge}
                  </span>
                </div>
              )}

              {/* Background Image with parallax */}
              <div className="absolute inset-0 w-full h-full overflow-hidden rounded-[32px]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-all duration-700"
                  style={{
                    ...appleImageRevealStyles(isVisible, 300 + index * 100),
                    transform: isVisible 
                      ? `scale(1) translateY(${imageParallax[index]}px)` 
                      : "scale(1.15) translateY(30px)",
                    opacity: isVisible ? 0.5 : 0,
                  }}
                />
                <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end">
                <service.icon
                  className={`w-8 h-8 md:w-10 md:h-10 ${service.iconColor} mb-5 transition-all duration-500 group-hover:scale-125 group-hover:rotate-6`}
                />
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-snug text-sm md:text-base max-w-lg group-hover:text-muted-foreground/90 transition-colors">
                  {service.description.replace(/\*\*/g, "")}
                </p>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
