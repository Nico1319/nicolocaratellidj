import { Layout } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { useScrollAnimation, appleRevealStyles, appleSlideStyles } from "@/hooks/useScrollAnimation";
import { Megaphone, Store, Users, Sparkles, Target, TrendingUp } from "lucide-react";
import { Contact } from "@/components/Contact";
import inaugurazioniImage from "@/assets/inaugurazioni.jpg";

const benefits = [
  { icon: Store, title: "Brand Experience", description: "Musica allineata alla tua identità aziendale" },
  { icon: Users, title: "Engagement", description: "Coinvolgimento attivo dei tuoi ospiti" },
  { icon: Target, title: "Visibilità", description: "Evento memorabile che lascia il segno" },
  { icon: TrendingUp, title: "ROI Musicale", description: "La colonna sonora che vende" },
];

const eventTypes = [
  "Inaugurazioni negozi",
  "Opening showroom",
  "Lanci prodotto",
  "Fiere ed expo",
  "Eventi corporate",
  "Press day",
];

const Inaugurazioni = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <Layout
      title="Eventi Corporate, Retail e Inaugurazioni | Nicolò Caratelli DJ Roma"
      description="DJ per inaugurazioni commerciali, opening e eventi corporate a Roma. Sound design professionale per il lancio del tuo brand. Massima visibilità garantita."
      canonical="/servizi/inaugurazioni-commerciali"
    >
      <JsonLd
        schema={{
          type: "ProfessionalService",
          name: "DJ Eventi Corporate e Inaugurazioni - Nicolò Caratelli",
          description: "DJ per inaugurazioni commerciali, opening e eventi corporate a Roma.",
          url: "https://nicolocaratellidj.it/servizi/inaugurazioni-commerciali",
          provider: {
            name: "Nicolò Caratelli",
            url: "https://nicolocaratellidj.it",
          },
          serviceType: "Corporate Events DJ Services",
        }}
      />

      {/* Hero */}
      <section ref={heroRef} className="pt-32 pb-20 bg-background overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <h1 className="sr-only">DJ per Inaugurazioni, Store Opening ed Eventi Corporate</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div style={appleSlideStyles(heroVisible, "left", 0)}>
              <div className="inline-flex items-center gap-2 text-muted-foreground text-sm mb-4">
                <Megaphone className="w-4 h-4" />
                <span>Servizi DJ Roma</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                DJ per Inaugurazioni
                <span className="block text-primary">Store Opening ed Eventi Corporate</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Il lancio di un nuovo punto vendita o un evento aziendale sono momenti cruciali per la comunicazione di un brand. La musica gioca un ruolo fondamentale nel marketing sensoriale, influenzando la percezione dei clienti e creando un ambiente dinamico e positivo. Come DJ per eventi aziendali, mi occupo di creare la colonna sonora perfetta per inaugurazioni, showroom e lanci di prodotto, attirando l'attenzione e rendendo il brand memorabile.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover:bg-primary/90 transition-all hover:scale-105"
              >
                Richiedi Preventivo
              </a>
            </div>
            <div
              className="relative rounded-[40px] overflow-hidden shadow-2xl"
              style={appleSlideStyles(heroVisible, "right", 200)}
            >
              <img
                src={inaugurazioniImage}
                alt="DJ inaugurazione negozio Roma - Evento corporate con Nicolò Caratelli"
                className="w-full h-full object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section ref={benefitsRef} className="py-24 bg-secondary overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2
            className="text-3xl font-bold text-foreground text-center mb-16"
            style={appleRevealStyles(benefitsVisible, 0)}
          >
            Perché la Musica Conta per il Tuo Brand
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="glass-card rounded-2xl p-8 text-center"
                style={{
                  opacity: benefitsVisible ? 1 : 0,
                  transform: benefitsVisible ? "translateY(0)" : "translateY(40px)",
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${100 + index * 80}ms`,
                }}
              >
                <benefit.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section ref={contentRef} className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-8" style={appleRevealStyles(contentVisible, 0)}>
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">
              Valorizza il tuo Brand con un Intrattenimento Professionale
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Un evento commerciale richiede una gestione sonora attenta: dalla musica di 
              sottofondo per le pubbliche relazioni ai momenti di picco durante la presentazione 
              di un nuovo prodotto.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fornisco tutto il <strong className="text-foreground">supporto tecnico necessario</strong>, 
              inclusi microfoni wireless per discorsi e impianti audio compatti ma potenti, ideali 
              per negozi e gallerie commerciali.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              La <strong className="text-foreground">scaletta musicale</strong> viene studiata 
              insieme al cliente per riflettere fedelmente i valori e il target dell'azienda.
            </p>
          </div>

          {/* Event Types */}
          <div className="mt-16" style={appleRevealStyles(contentVisible, 300)}>
            <h3 className="text-xl font-bold text-foreground text-center mb-8">
              Tipologie di Eventi
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {eventTypes.map((type) => (
                <span
                  key={type}
                  className="px-4 py-2 rounded-full bg-secondary text-foreground text-sm font-medium"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Hidden SEO Content - CSS hidden for crawler indexing */}
      <div 
        className="overflow-hidden" 
        style={{ maxHeight: 0, opacity: 0 }}
        aria-hidden="true"
      >
        <p>
          DJ per inaugurazioni commerciali e eventi corporate a Roma. Nicolò Caratelli offre 
          sound design professionale per opening, lanci prodotto e fiere. DJ evento aziendale Roma, 
          musica inaugurazione negozio, DJ corporate Roma, service audio eventi Roma.
        </p>
      </div>
    </Layout>
  );
};

export default Inaugurazioni;
