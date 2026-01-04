import { Layout } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { useScrollAnimation, appleRevealStyles, appleSlideStyles } from "@/hooks/useScrollAnimation";
import { Snowflake, Mountain, Music, Sun, Flame, Zap } from "lucide-react";
import { Contact } from "@/components/Contact";
import aperiskiImage from "@/assets/aperiski-mountain.jpg";
const features = [{
  icon: Mountain,
  title: "Location Uniche",
  description: "Ski resort, chalet e rifugi d'alta quota"
}, {
  icon: Sun,
  title: "Aperiski Perfetto",
  description: "Musica calda per tramonti sulla neve"
}, {
  icon: Flame,
  title: "Party Energici",
  description: "Set che scaldano anche le notti più fredde"
}, {
  icon: Zap,
  title: "Attrezzatura Pro",
  description: "Impianti che funzionano anche a -20°"
}];
const ApresSki = () => {
  const {
    ref: heroRef,
    isVisible: heroVisible
  } = useScrollAnimation<HTMLElement>({
    threshold: 0.1
  });
  const {
    ref: featuresRef,
    isVisible: featuresVisible
  } = useScrollAnimation<HTMLElement>({
    threshold: 0.1
  });
  const {
    ref: contentRef,
    isVisible: contentVisible
  } = useScrollAnimation<HTMLElement>({
    threshold: 0.1
  });
  return <Layout title="Winter Party & Après-ski: Energia ad Alta Quota | Nicolò Caratelli" description="DJ per après ski e winter party. Musica ad alta quota per ski resort, chalet e rifugi. Creo l'atmosfera perfetta per i tuoi eventi invernali." canonical="/servizi/apres-ski-winter-party">
      <JsonLd schema={{
      type: "ProfessionalService",
      name: "DJ Après Ski & Winter Party - Nicolò Caratelli",
      description: "DJ per après ski e winter party in ski resort, chalet e rifugi d'alta quota.",
      url: "https://nicolocaratellidj.it/servizi/apres-ski-winter-party",
      provider: {
        name: "Nicolò Caratelli",
        url: "https://nicolocaratellidj.it"
      },
      serviceType: "Winter Events DJ Services"
    }} />

      {/* Hero */}
      <section ref={heroRef} className="pt-32 pb-20 bg-background overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <h1 className="sr-only">Winter Party & Après-ski: Energia ad Alta Quota</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div style={appleSlideStyles(heroVisible, "left", 0)}>
              <div className="inline-flex items-center gap-2 text-muted-foreground text-sm mb-4">
                <Snowflake className="w-4 h-4" />
                <span>Servizi DJ Roma</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Apréski &
Winter Party<span className="block text-primary">Winter Party</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                DJ set ad alta quota per ski-resort e chalet. Musica dinamica per 
                creare il perfetto après-ski o l'atmosfera giusta per i tuoi 
                party invernali tra le montagne.
              </p>
              <a href="/#contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover:bg-primary/90 transition-all hover:scale-105">
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
              Musica che Scalda l'Inverno
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              C'è qualcosa di magico nell'après-ski: il sole che tramonta sulle cime innevate, 
              la stanchezza piacevole di una giornata sugli sci, e la voglia di festeggiare 
              con un drink in mano. Come DJ specializzato in <strong className="text-foreground">
              eventi invernali</strong>, creo la colonna sonora perfetta per questi momenti unici.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I miei set per après-ski e winter party sono pensati per costruire un'energia 
              progressiva: si parte con atmosfere <strong className="text-foreground">lounge</strong> 
              e <strong className="text-foreground">deep house</strong> per il tramonto, 
              per poi crescere verso beat più energici man mano che la notte avanza. 
              Il risultato è un viaggio musicale che accompagna gli ospiti dall'aperitivo 
              fino all'ultima chiamata.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Porto con me attrezzatura professionale testata per resistere alle basse 
              temperature, garantendo performance impeccabili anche nelle condizioni più 
              estreme. Che si tratti di uno chalet esclusivo o di un rifugio in quota, 
              ho l'esperienza e l'equipaggiamento per trasformare ogni serata in un evento 
              memorabile.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Hidden SEO Content - CSS hidden for crawler indexing */}
      <div className="overflow-hidden" style={{
      maxHeight: 0,
      opacity: 0
    }} aria-hidden="true">
        <p>
          DJ per après ski e winter party. Nicolò Caratelli porta la sua musica nei migliori 
          ski resort e chalet. DJ montagna, musica après ski, winter party DJ, eventi invernali, 
          DJ chalet, musica rifugio, aperiski Roma.
        </p>
      </div>
    </Layout>;
};
export default ApresSki;