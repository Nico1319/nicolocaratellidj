import { Layout } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { useScrollAnimation, appleRevealStyles, appleSlideStyles } from "@/hooks/useScrollAnimation";
import { Snowflake, Mountain, Music, Sun, Flame, Zap } from "lucide-react";
import { Contact } from "@/components/Contact";
import aperiskiImage from "@/assets/aperiski-mountain.jpg";

const features = [
  { icon: Mountain, title: "Location Uniche", description: "Ski resort, chalet e rifugi d'alta quota" },
  { icon: Sun, title: "Aperiski Perfetto", description: "Musica calda per tramonti sulla neve" },
  { icon: Flame, title: "Party Energici", description: "Set che scaldano anche le notti più fredde" },
  { icon: Zap, title: "Attrezzatura Pro", description: "Impianti che funzionano anche a -20°" },
];

const ApresSki = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <Layout
      title="Winter Party & Après-ski: Energia ad Alta Quota | Nicolò Caratelli"
      description="DJ per après ski e winter party. Musica ad alta quota per ski resort, chalet e rifugi. Creo l'atmosfera perfetta per i tuoi eventi invernali."
      canonical="/servizi/apres-ski-winter-party"
    >
      <JsonLd
        schema={{
          type: "ProfessionalService",
          name: "DJ Après Ski & Winter Party - Nicolò Caratelli",
          description: "DJ per après ski e winter party in ski resort, chalet e rifugi d'alta quota.",
          url: "https://nicolocaratellidj.it/servizi/apres-ski-winter-party",
          provider: {
            name: "Nicolò Caratelli",
            url: "https://nicolocaratellidj.it",
          },
          serviceType: "Winter Events DJ Services",
        }}
      />

      {/* Hero */}
      <section ref={heroRef} className="pt-32 pb-20 bg-background overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <h1 className="sr-only">DJ per Apreski e Winter Party: L'Energia dei Party in Alta Quota</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div style={appleSlideStyles(heroVisible, "left", 0)}>
              <div className="inline-flex items-center gap-2 text-muted-foreground text-sm mb-4">
                <Snowflake className="w-4 h-4" />
                <span>Servizi DJ Roma</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                DJ per Apreski
                <span className="block text-primary">e Winter Party</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Quando il sole inizia a calare sulle piste da sci, l'atmosfera si accende con l'Apreski. Organizzare un party in un rifugio o in uno chalet richiede un DJ con una carica unica, capace di coinvolgere una folla eterogenea e carica di adrenalina. Come specialista in Winter Party, porto l'energia dei grandi festival internazionali direttamente sulla neve, garantendo un divertimento senza pause per sciatori e amanti della montagna.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover:bg-primary/90 transition-all hover:scale-105">
                Prenota la Stagione
              </a>
            </div>
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl" style={appleSlideStyles(heroVisible, "right", 200)}>
              <img src={aperiskiImage} alt="DJ set après ski montagna - Nicolò Caratelli winter party" className="w-full h-full object-cover aspect-[4/5]" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section ref={featuresRef} className="py-24 bg-secondary overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-16" style={appleRevealStyles(featuresVisible, 0)}>
            L'Esperienza Winter
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => <div key={feature.title} className="glass-card rounded-2xl p-8 text-center" style={{
            opacity: featuresVisible ? 1 : 0,
            transform: featuresVisible ? "translateY(0)" : "translateY(40px)",
            transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${100 + index * 80}ms`
          }}>
                <feature.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Content */}
      <section ref={contentRef} className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-8" style={appleRevealStyles(contentVisible, 0)}>
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">
              Animazione e Musica per Rifugi e Chalet di Montagna
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Il segreto di un Apreski indimenticabile è la capacità di mixare grandi successi, 
              hit <strong className="text-foreground">Dance</strong>, <strong className="text-foreground">
              EDM</strong> e brani che tutti possono cantare. Non è solo musica, è uno show che 
              unisce animazione e selezione tecnica.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Grazie all'utilizzo di <strong className="text-foreground">attrezzatura professionale 
              resistente alle basse temperature</strong>, garantisco una qualità audio impeccabile 
              anche all'aperto, trasformando il tuo rifugio nella meta più ambita del comprensorio 
              sciistico.
            </p>
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
          DJ per après ski e winter party. Nicolò Caratelli porta la sua musica nei migliori 
          ski resort e chalet. DJ montagna, musica après ski, winter party DJ, eventi invernali, 
          DJ chalet, musica rifugio, aperiski Roma.
        </p>
      </div>
    </Layout>
  );
};

export default ApresSki;