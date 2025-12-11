import { useEffect, useRef, useState } from "react";
import { Coffee, Snowflake, Megaphone, PartyPopper, HeartHandshake } from "lucide-react";

const services = [
  {
    icon: Coffee,
    title: "Lounge Bar & Aperitivi",
    description:
      "**Specializzato in DJ set eleganti e di tendenza per Lounge Bar e Happy Hour.** Creo l'atmosfera sonora che massimizza l'esperienza del cliente, aumentando il tempo di permanenza. Playlist Deep House, Chillout e Nu Disco.",
    image: "https://images.unsplash.com/photo-1563607172084-3c8115591395?q=80&w=1600",
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
    image: "https://images.unsplash.com/photo-1549491740-10e304899532?q=80&w=800",
    colSpan: "md:col-span-1",
    borderColor: "border-t-destructive/30",
    iconColor: "text-destructive",
  },
  {
    icon: Megaphone,
    title: "Inaugurazioni Commerciali",
    description:
      "Sound design mirato per il lancio di nuovi negozi, showroom, fiere ed eventi corporate. **Massima visibilità** e coinvolgimento per il tuo brand.",
    image: "https://images.unsplash.com/photo-1540306385153-f7241279a61e?q=80&w=800",
    colSpan: "md:col-span-1",
    borderColor: "border-t-border/30",
    iconColor: "text-foreground",
  },
  {
    icon: PartyPopper,
    title: "Party Privati Esclusivi",
    description:
      "**Trasforma la tua festa in un evento leggendario.** DJ set personalizzati per 18esimi, feste di laurea e compleanni. Playlist curata sui tuoi gusti per far ballare tutti, con un impianto audio professionale.",
    image: "https://images.unsplash.com/photo-1524368535928-5b897c3024a1?q=80&w=1600",
    colSpan: "md:col-span-2",
    borderColor: "border-t-primary/30",
    iconColor: "text-primary",
  },
  {
    icon: HeartHandshake,
    title: "Wedding DJ",
    description:
      "**La colonna sonora del tuo giorno più bello.** Un servizio Wedding DJ di alta classe, discreto e professionale. Dalla musica soft per la cerimonia al DJ set energico per il party serale. Massima attenzione ai dettagli.",
    image: "https://images.unsplash.com/photo-1598282361117-2c937299a4c1?q=80&w=1600",
    colSpan: "md:col-span-3",
    borderColor: "border-t-muted-foreground/30",
    iconColor: "text-muted-foreground",
  },
];

export function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-32 bg-secondary">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2
          className={`text-heading font-bold mb-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ filter: isVisible ? "blur(0)" : "blur(10px)" }}
        >
          Esperienze su misura per il tuo successo.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`col-span-1 ${service.colSpan} glass-card rounded-[32px] p-8 md:p-10 relative overflow-hidden group min-h-[350px] border-t-4 ${service.borderColor} transition-all duration-700`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                filter: isVisible ? "blur(0)" : "blur(10px)",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Badge */}
              {service.badge && (
                <div className="absolute top-0 right-0 p-4 z-20">
                  <span className="text-[10px] font-bold bg-destructive text-destructive-foreground px-3 py-1 rounded-full uppercase tracking-wider">
                    {service.badge}
                  </span>
                </div>
              )}

              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full overflow-hidden rounded-[32px]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-15 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/50" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end">
                <service.icon className={`w-8 h-8 md:w-10 md:h-10 ${service.iconColor} mb-5`} />
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-snug text-sm md:text-base max-w-lg">
                  {service.description.replace(/\*\*/g, "")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
