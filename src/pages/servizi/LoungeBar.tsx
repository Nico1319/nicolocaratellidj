import { Layout } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { LogoDivider } from "@/components/LogoDivider";
import { useScrollAnimation, appleRevealStyles, appleSlideStyles } from "@/hooks/useScrollAnimation";
import { Coffee, Music, TrendingUp, Clock, Sparkles, Wine } from "lucide-react";
import { Contact } from "@/components/Contact";
import loungeAperitivoImage from "@/assets/lounge-aperitivo.jpg";

const benefits = [
  { icon: TrendingUp, title: "Aumento Permanenza", description: "La musica giusta fa restare i clienti più a lungo" },
  { icon: Wine, title: "Atmosfera Premium", description: "Selezione che esalta l'esperienza dell'aperitivo" },
  { icon: Clock, title: "Flessibilità Orari", description: "Dall'happy hour alla chiusura, sempre al top" },
  { icon: Sparkles, title: "Sound Trendy", description: "Deep House, Nu Disco e le hit del momento" },
];

const genres = [
  "Deep House", "Nu Disco", "Chillout", "Lounge", "Tropical House", "Indie Dance"
];

const LoungeBar = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <Layout
      title="DJ Set per Lounge Bar, Hotel e Aperitivi | Nicolò Caratelli Roma"
      description="DJ specializzato in lounge bar e aperitivi a Roma. Deep House, Nu Disco e Chillout per creare l'atmosfera perfetta nel tuo locale. Aumenta la permanenza dei clienti."
      canonical="/servizi/lounge-bar-aperitivi"
    >
      <JsonLd
        schema={{
          type: "ProfessionalService",
          name: "DJ Lounge Bar Roma - Nicolò Caratelli",
          description: "DJ per lounge bar, hotel e aperitivi a Roma. Musica Deep House, Nu Disco e Chillout.",
          url: "https://nicolocaratellidj.it/servizi/lounge-bar-aperitivi",
          provider: {
            name: "Nicolò Caratelli",
            url: "https://nicolocaratellidj.it",
          },
          serviceType: "Lounge DJ Services",
        }}
      />

      {/* Hero */}
      <section ref={heroRef} className="pt-32 pb-20 bg-background overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <h1 className="sr-only">DJ Set per Lounge Bar, Rooftop e Aperitivi d'Elite</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div style={appleSlideStyles(heroVisible, "left", 0)}>
              <div className="inline-flex items-center gap-2 text-destructive text-sm mb-4">
                <Coffee className="w-4 h-4" />
                <span className="font-semibold uppercase tracking-wider">Top Focus Commerciale</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                DJ Set per Lounge Bar
                <span className="block text-primary">Rooftop e Aperitivi d'Elite</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                L'aperitivo è il biglietto da visita di un locale. Un DJ set professionale per lounge bar non serve solo a intrattenere, ma a definire l'identità del brand e ad aumentare il tempo di permanenza dei clienti. La musica deve saper evolvere insieme alla serata: partendo da sonorità distese e soffuse per arrivare a ritmi più incalzanti che preparano al pre-serata. Collaboro con hotel di lusso, cocktail bar e rooftop per offrire un'esperienza sonora coerente e di tendenza.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover:bg-primary/90 transition-all hover:scale-105"
              >
                Contattami
              </a>
            </div>
            <div
              className="relative rounded-[40px] overflow-hidden shadow-2xl"
              style={appleSlideStyles(heroVisible, "right", 200)}
            >
              <img
                src={loungeAperitivoImage}
                alt="DJ set aperitivo Roma - Atmosfera lounge bar con Nicolò Caratelli"
                className="w-full h-full object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <LogoDivider />

      {/* Benefits */}
      <section ref={benefitsRef} className="py-24 bg-secondary overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2
            className="text-3xl font-bold text-foreground text-center mb-16"
            style={appleRevealStyles(benefitsVisible, 0)}
          >
            Vantaggi per il Tuo Locale
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
                <benefit.icon className="w-10 h-10 text-destructive mx-auto mb-4" />
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
              Sound Design: Deep House, Soulful e Chillout
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              La mia selezione musicale per l'aperitivo è frutto di una costante ricerca sonora. 
              Spazio tra la <strong className="text-foreground">Deep House</strong> più sofisticata, 
              il <strong className="text-foreground">Nu Jazz</strong>, il <strong className="text-foreground">
              Soulful</strong> e la <strong className="text-foreground">Chillout</strong>, creando un 
              tappeto sonoro che favorisce il relax e il networking.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Un bravo DJ da lounge bar sa quando restare in sottofondo e quando alzare il bpm 
              per dare energia alla sala, interpretando costantemente il mood del pubblico presente.
            </p>
          </div>

          {/* Genres */}
          <div className="mt-16" style={appleRevealStyles(contentVisible, 300)}>
            <h3 className="text-xl font-bold text-foreground text-center mb-8">
              Generi Musicali
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {genres.map((genre) => (
                <span
                  key={genre}
                  className="px-4 py-2 rounded-full bg-secondary text-foreground text-sm font-medium"
                >
                  {genre}
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
          DJ per lounge bar e aperitivi a Roma. Nicolò Caratelli offre servizi DJ professionali 
          per locali, bar e ristoranti. Specializzato in Deep House, Nu Disco, Chillout. 
          DJ aperitivo Roma, musica lounge bar, DJ happy hour, DJ locale Roma, musica eventi Roma, 
          service audio luci bar.
        </p>
      </div>
    </Layout>
  );
};

export default LoungeBar;
