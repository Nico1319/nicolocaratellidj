import { Coffee, Snowflake, Megaphone, PartyPopper, Cake } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useScrollAnimation, appleRevealStyles } from "@/hooks/useScrollAnimation";
import aperiskiImage from "@/assets/aperiski-mountain.jpg";
import loungeAperitivoImage from "@/assets/lounge-aperitivo.jpg";
import partyPrivatiImage from "@/assets/party-privati.jpg";
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
    href: "/servizi/lounge-bar-aperitivi",
  },
  {
    icon: Snowflake,
    title: "Aprés-ski",
    description:
      "DJ set ad alta quota per ski-resort e chalet. Musica dinamica per creare il perfetto après-ski o l'atmosfera giusta per i tuoi party invernali.",
    image: aperiskiImage,
    colSpan: "md:col-span-1",
    borderColor: "border-t-destructive/30",
    iconColor: "text-destructive",
    href: "/servizi/apres-ski-winter-party",
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
    href: "/servizi/inaugurazioni-commerciali",
  },
  {
    icon: PartyPopper,
    title: "Party Privati Esclusivi",
    description:
      "**Trasforma la tua festa in un evento leggendario.** DJ set personalizzati per feste di compleanno, lauree e party privati. Playlist curata sui tuoi gusti, impianto audio e light show professionale.",
    image: partyPrivatiImage,
    colSpan: "md:col-span-2",
    borderColor: "border-t-primary/30",
    iconColor: "text-primary",
    href: "/servizi/party-privati-esclusivi",
  },
  {
    icon: Cake,
    title: "DJ 18esimi Roma",
    description:
      "**Il DJ perfetto per il tuo 18° compleanno a Roma.** Festa indimenticabile con musica su misura, luci ed energia. Scopri il servizio dedicato ai diciottesimi a Roma.",
    image: partyPrivatiImage,
    colSpan: "md:col-span-3",
    borderColor: "border-t-primary/50",
    iconColor: "text-primary",
    href: "/dj-18esimi-roma",
  },
];

export function Services() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.05 });
  const navigate = useNavigate();

  return (
    <section ref={sectionRef} id="services" className="py-32 bg-secondary overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2
          className="text-heading font-bold mb-16 text-center"
          style={appleRevealStyles(isVisible, 0)}
        >
          Servizi DJ a Roma: esperienze su misura per il tuo evento.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className={`col-span-1 ${service.colSpan} glass-card rounded-[32px] p-8 md:p-10 relative overflow-hidden group min-h-[350px] border-t-4 ${service.borderColor} cursor-pointer`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "perspective(1000px) rotateX(0deg) translateY(0) scale(1)"
                  : "perspective(1000px) rotateX(-8deg) translateY(60px) scale(0.95)",
                filter: isVisible ? "blur(0)" : "blur(10px)",
                transition: `all 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${150 + index * 100}ms`,
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
                  alt={`DJ ${service.title} Roma - Nicolò Caratelli`}
                  className="w-full h-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/30" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end">
                <service.icon
                  className={`w-8 h-8 md:w-10 md:h-10 ${service.iconColor} mb-5 transition-transform duration-500 group-hover:scale-110`}
                />
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-snug text-sm md:text-base max-w-lg">
                  {service.description.replace(/\*\*/g, "")}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                  <span className="text-primary text-sm font-semibold group-hover:underline">
                    Scopri di più →
                  </span>
                  {(service as typeof service & { extraLink?: { href: string; label: string } }).extraLink && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        navigate((service as typeof service & { extraLink: { href: string; label: string } }).extraLink.href);
                      }}
                      className="text-primary text-sm font-semibold underline-offset-4 hover:underline"
                    >
                      {(service as typeof service & { extraLink: { href: string; label: string } }).extraLink.label}
                    </button>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
