import { Layout } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { useScrollAnimation, appleRevealStyles, appleSlideStyles } from "@/hooks/useScrollAnimation";
import { HeartHandshake, Music, Clock, Star, CheckCircle2, Users } from "lucide-react";
import { Contact } from "@/components/Contact";
import weddingDjImage from "@/assets/wedding-dj.jpg";

const features = [
  { icon: Music, title: "Musica Personalizzata", description: "Playlist costruita sui vostri gusti e la vostra storia" },
  { icon: Clock, title: "Timing Perfetto", description: "Dalla cerimonia al party serale, ogni momento curato" },
  { icon: Star, title: "Eleganza Garantita", description: "Presenza discreta ma sempre professionale" },
  { icon: Users, title: "Ogni Generazione", description: "Musica che fa ballare nonni e nipoti insieme" },
];

const includes = [
  "Incontro preliminare per definire stile e scaletta",
  "Impianto audio professionale incluso",
  "Illuminazione LED scenografica",
  "Microfono wireless per discorsi e brindisi",
  "DJ set personalizzato (aperitivo, cena, ballo)",
  "Consulenza musicale pre-evento illimitata",
];

const WeddingDJ = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const { ref: includesRef, isVisible: includesVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <Layout
      title="DJ per Matrimoni a Roma e Provincia | Wedding DJ - Nicolò Caratelli"
      description="Servizio Wedding DJ professionale a Roma. Musica elegante per cerimonia, aperitivo e party serale. La colonna sonora perfetta per il vostro giorno più bello."
      canonical="/servizi/wedding-dj"
    >
      <JsonLd
        schema={{
          type: "ProfessionalService",
          name: "Wedding DJ Roma - Nicolò Caratelli",
          description: "Servizio Wedding DJ professionale a Roma e provincia. Musica per cerimonia, aperitivo e party serale.",
          url: "https://nicolocaratellidj.it/servizi/wedding-dj",
          provider: {
            name: "Nicolò Caratelli",
            url: "https://nicolocaratellidj.it",
          },
          serviceType: "Wedding DJ Services",
        }}
      />

      {/* Hero */}
      <section ref={heroRef} className="pt-32 pb-20 bg-background overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
      <h1 className="sr-only">DJ per Matrimonio: La Regia Musicale Professionale per il tuo Giorno Speciale</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div style={appleSlideStyles(heroVisible, "left", 0)}>
              <div className="inline-flex items-center gap-2 text-muted-foreground text-sm mb-4">
                <HeartHandshake className="w-4 h-4" />
                <span>Servizi DJ Roma</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                DJ per Matrimonio
                <span className="block text-primary">La Regia Musicale Professionale</span>
              </h2>
              
              {/* Sottosezioni H3 per SEO */}
              <div className="space-y-4 mb-8">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Il matrimonio non è una festa come le altre: è un evento che richiede una gestione tecnica e artistica impeccabile. Come DJ professionista per matrimoni, il mio obiettivo è creare un'esperienza sonora su misura che rispecchi la personalità degli sposi. La musica è il filo conduttore che unisce ogni momento, dalla commozione della cerimonia alla carica esplosiva del party finale. Affidarsi a un esperto significa non dover pensare a nulla, se non a godersi la festa.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover:bg-primary/90 transition-all hover:scale-105"
              >
                Richiedi Preventivo Gratuito
              </a>
            </div>
            <div
              className="relative rounded-[40px] overflow-hidden shadow-2xl"
              style={appleSlideStyles(heroVisible, "right", 200)}
            >
              <img
                src={weddingDjImage}
                alt="DJ matrimonio Roma - Nicolò Caratelli in consolle durante un wedding"
                className="w-full h-full object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section ref={featuresRef} className="py-24 bg-secondary overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2
            className="text-3xl font-bold text-foreground text-center mb-16"
            style={appleRevealStyles(featuresVisible, 0)}
          >
            Musica per il Ricevimento: Dall'Aperitivo al Ballo degli Sposi
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="glass-card rounded-2xl p-8 text-center"
                style={{
                  opacity: featuresVisible ? 1 : 0,
                  transform: featuresVisible ? "translateY(0)" : "translateY(40px)",
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${100 + index * 80}ms`,
                }}
              >
                <feature.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section ref={storyRef} className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-8" style={appleRevealStyles(storyVisible, 0)}>
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">
              Service Audio, Luci e Gestione Burocratica SIAE
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ogni fase delle nozze ha il suo ritmo. Durante l'<strong className="text-foreground">aperitivo 
              di benvenuto</strong>, propongo una selezione raffinata di musica Lounge, Nu Jazz e Deep House, 
              ideale per creare un clima accogliente mentre gli ospiti sorseggiano il primo drink. Durante il 
              banchetto, il volume resta discreto per permettere la conversazione, con un sottofondo musicale 
              elegante. Il momento del taglio della torta e il primo ballo sono sottolineati da brani scelti 
              insieme agli sposi, prima di dare il via alla vera festa.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Un matrimonio di successo richiede anche un impatto visivo e tecnico di alto livello. 
              Fornisco <strong className="text-foreground">impianti audio professionali</strong> (Bose, RCF) 
              capaci di coprire diversi spazi della location, dal giardino esterno alla sala interna. 
              Inoltre, offro un servizio di <strong className="text-foreground">illuminazione architetturale</strong> 
              (uplighting) per creare atmosfere magiche e coinvolgenti.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Mi occupo anche del <strong className="text-foreground">supporto per il disbrigo delle pratiche 
              SIAE</strong>, sollevando gli sposi da ogni preoccupazione burocratica.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section ref={includesRef} className="py-24 bg-secondary overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2
            className="text-3xl font-bold text-foreground text-center mb-12"
            style={appleRevealStyles(includesVisible, 0)}
          >
            Cosa Include il Servizio
          </h2>
          
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            style={appleRevealStyles(includesVisible, 200)}
          >
            {includes.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-background/50"
              >
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
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
        <h3>Servizio Cerimonia Matrimonio</h3>
        <p>Musica soft e romantica per la cerimonia, ingresso sposa, scambio anelli e uscita sposi.</p>
        
        <h3>Aperitivo Matrimonio</h3>
        <p>DJ set elegante per l'aperitivo: lounge, jazz e bossa nova per accogliere gli ospiti.</p>
        
        <h3>Party Serale Matrimonio</h3>
        <p>
          Servizio Wedding DJ professionale a Roma e provincia. Nicolò Caratelli offre musica 
          per matrimoni con esperienza, passione e attrezzatura di alta qualità. DJ matrimonio Roma, 
          musica matrimonio, wedding DJ Lazio, DJ cerimonia, musica ricevimento, DJ festa matrimonio, 
          service audio luci matrimonio Roma.
        </p>
      </div>
    </Layout>
  );
};

export default WeddingDJ;
