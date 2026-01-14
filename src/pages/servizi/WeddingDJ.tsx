import { Layout } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { useScrollAnimation, appleRevealStyles, appleSlideStyles } from "@/hooks/useScrollAnimation";
import { HeartHandshake, Music, Clock, Star, CheckCircle2, Users } from "lucide-react";
import { Contact } from "@/components/Contact";
import weddingDjImage from "@/assets/wedding-dj.jpg";
const features = [{
  icon: Music,
  title: "Musica Personalizzata",
  description: "Playlist costruita sui vostri gusti e la vostra storia"
}, {
  icon: Clock,
  title: "Timing Perfetto",
  description: "Dalla cerimonia al party serale, ogni momento curato"
}, {
  icon: Star,
  title: "Eleganza Garantita",
  description: "Presenza discreta ma sempre professionale"
}, {
  icon: Users,
  title: "Ogni Generazione",
  description: "Musica che fa ballare nonni e nipoti insieme"
}];
const includes = ["Incontro preliminare per definire stile e scaletta", "Impianto audio professionale incluso", "Illuminazione LED scenografica", "Microfono wireless per discorsi e brindisi", "DJ set personalizzato (aperitivo, cena, ballo)", "Consulenza musicale pre-evento illimitata"];
const WeddingDJ = () => {
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
    ref: includesRef,
    isVisible: includesVisible
  } = useScrollAnimation<HTMLElement>({
    threshold: 0.1
  });
  const {
    ref: storyRef,
    isVisible: storyVisible
  } = useScrollAnimation<HTMLElement>({
    threshold: 0.1
  });
  return <Layout title="DJ per Matrimoni a Roma e Provincia | Wedding DJ - Nicolò Caratelli" description="Servizio Wedding DJ professionale a Roma. Musica elegante per cerimonia, aperitivo e party serale. La colonna sonora perfetta per il vostro giorno più bello." canonical="/servizi/wedding-dj">
      <JsonLd schema={{
      type: "ProfessionalService",
      name: "Wedding DJ Roma - Nicolò Caratelli",
      description: "Servizio Wedding DJ professionale a Roma e provincia. Musica per cerimonia, aperitivo e party serale.",
      url: "https://nicolocaratellidj.it/servizi/wedding-dj",
      provider: {
        name: "Nicolò Caratelli",
        url: "https://nicolocaratellidj.it"
      },
      serviceType: "Wedding DJ Services"
    }} />

      {/* Hero */}
      <section ref={heroRef} className="pt-32 pb-20 bg-background overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <h1 className="sr-only">DJ per Matrimoni a Roma e Provincia</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div style={appleSlideStyles(heroVisible, "left", 0)}>
              <div className="inline-flex items-center gap-2 text-muted-foreground text-sm mb-4">
                <HeartHandshake className="w-4 h-4" />
                <span>Servizi DJ Roma</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Wedding DJ
                <span className="block text-primary">Il Vostro Giorno Speciale</span>
              </h2>
              
              {/* Sottosezioni H3 per SEO */}
              <div className="space-y-4 mb-8">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  La colonna sonora del vostro matrimonio merita la massima attenzione. 
                  Creo atmosfere uniche dalla cerimonia al party serale, trasformando 
                  ogni momento in un ricordo indimenticabile.
                </p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover:bg-primary/90 transition-all hover:scale-105">
                Richiedi Preventivo Gratuito
              </a>
            </div>
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl" style={appleSlideStyles(heroVisible, "right", 200)}>
              <img src={weddingDjImage} alt="DJ matrimonio Roma - Nicolò Caratelli in consolle durante un wedding" className="w-full h-full object-cover aspect-[4/5]" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section ref={featuresRef} className="py-24 bg-secondary overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-16" style={appleRevealStyles(featuresVisible, 0)}>
            Perché Scegliermi per il Tuo Matrimonio
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

      {/* Story */}
      <section ref={storyRef} className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-8" style={appleRevealStyles(storyVisible, 0)}>
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">
              Un Matrimonio da Ricordare
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Il matrimonio è uno dei giorni più importanti della vostra vita, e la musica gioca 
              un ruolo fondamentale nel creare l'atmosfera giusta. Come <strong className="text-foreground">
              Wedding DJ a Roma</strong>, ho avuto l'onore di accompagnare musicalmente decine 
              di coppie nel loro giorno speciale, e so quanto ogni dettaglio conti.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Il mio approccio è totalmente personalizzato: inizio con un incontro conoscitivo 
              dove parliamo dei vostri gusti musicali, dei ricordi legati a certe canzoni, 
              e dell'atmosfera che volete creare. Dalla musica soft per la <strong className="text-foreground">
              cerimonia</strong> alle hit che fanno scatenare tutti durante il <strong className="text-foreground">
              party serale</strong>, ogni momento avrà la sua colonna sonora perfetta.
            </p>

            
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section ref={includesRef} className="py-24 bg-secondary overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12" style={appleRevealStyles(includesVisible, 0)}>
            Cosa Include il Servizio
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={appleRevealStyles(includesVisible, 200)}>
            {includes.map((item, index) => <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-background/50">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>)}
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
    </Layout>;
};
export default WeddingDJ;