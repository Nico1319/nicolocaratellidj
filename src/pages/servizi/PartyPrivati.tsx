import { Layout } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { useScrollAnimation, appleRevealStyles, appleSlideStyles } from "@/hooks/useScrollAnimation";
import { PartyPopper, Music, Mic2, Lightbulb, Gift, Star } from "lucide-react";
import { Contact } from "@/components/Contact";
import partyPrivatiImage from "@/assets/party-privati.jpg";

const features = [
  { icon: Music, title: "Playlist Personalizzata", description: "La tua festa, la tua musica" },
  { icon: Mic2, title: "Karaoke Opzionale", description: "Aggiungi il divertimento del canto" },
  { icon: Lightbulb, title: "Luci LED", description: "Effetti scenografici inclusi" },
  { icon: Gift, title: "Momenti Speciali", description: "Taglio torta, brindisi e dediche" },
];

const partyTypes = [
  "18esimi indimenticabili",
  "Feste di laurea",
  "Compleanni speciali",
  "Feste a tema",
  "Anniversari",
  "Garden party",
];

const PartyPrivati = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <Layout
      title="Feste Private, 18esimi e Anniversari a Roma | Nicolò Caratelli DJ"
      description="DJ per party privati a Roma. 18esimi, feste di laurea e compleanni esclusivi. Trasforma la tua festa in un evento leggendario con musica e luci professionali."
      canonical="/servizi/party-privati-esclusivi"
    >
      <JsonLd
        schema={{
          type: "ProfessionalService",
          name: "DJ Party Privati Roma - Nicolò Caratelli",
          description: "DJ per party privati, feste 18 anni, lauree e compleanni a Roma.",
          url: "https://nicolocaratellidj.it/servizi/party-privati-esclusivi",
          provider: {
            name: "Nicolò Caratelli",
            url: "https://nicolocaratellidj.it",
          },
          serviceType: "Private Party DJ Services",
        }}
      />

      {/* Hero */}
      <section ref={heroRef} className="pt-32 pb-20 bg-background overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <h1 className="sr-only">DJ per Diciottesimi e Feste Private: Il Party che fa la Storia</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div style={appleSlideStyles(heroVisible, "left", 0)}>
              <div className="inline-flex items-center gap-2 text-primary text-sm mb-4">
                <PartyPopper className="w-4 h-4" />
                <span>Servizi DJ Roma</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                DJ per Diciottesimi
                <span className="block text-primary">e Feste Private</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Compiere 18 anni è un momento unico che merita di essere festeggiato con un party leggendario. Se cerchi un DJ per diciottesimi che sappia cosa ballano i giovani oggi, sei nel posto giusto. Il mio servizio non è una semplice selezione di brani, ma una vera e propria serata da club: luci, effetti speciali e una selezione musicale che spacca. Dalla Trap al Reggaeton, dalla Urban alla Commerciale, porto in pista solo il meglio delle classifiche mondiali e dei trend di TikTok.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover:bg-primary/90 transition-all hover:scale-105"
              >
                Organizza la Tua Festa
              </a>
            </div>
            <div
              className="relative rounded-[40px] overflow-hidden shadow-2xl"
              style={appleSlideStyles(heroVisible, "right", 200)}
            >
              <img
                src={partyPrivatiImage}
                alt="DJ festa privata Roma - 18esimo con Nicolò Caratelli"
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
            Cosa Rende Unica la Tua Festa
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

      {/* Content */}
      <section ref={contentRef} className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-8" style={appleRevealStyles(contentVisible, 0)}>
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">
              Musica per Lauree, Compleanni e Feste Esclusive
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ogni festa privata ha la sua anima. Che tu stia festeggiando la <strong className="text-foreground">
              laurea</strong>, un <strong className="text-foreground">compleanno importante</strong> (30, 40 
              o 50 anni) o una ricorrenza speciale, adatto il mio stile alle tue esigenze.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Il mio setup include <strong className="text-foreground">console di ultima generazione</strong> 
              e un <strong className="text-foreground">light show professionale</strong> con teste mobili 
              e laser per trasformare qualsiasi sala in una vera discoteca.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              La playlist è totalmente personalizzabile: dai grandi classici del passato alle hit del momento, 
              per far ballare ogni tuo invitato fino all'ultima canzone.
            </p>
          </div>

          {/* Party Types */}
          <div className="mt-16" style={appleRevealStyles(contentVisible, 300)}>
            <h3 className="text-xl font-bold text-foreground text-center mb-8">
              Tipologie di Feste
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {partyTypes.map((type) => (
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
          DJ per party privati e feste a Roma. Nicolò Caratelli anima 18esimi, feste di laurea 
          e compleanni con musica e luci professionali. DJ festa 18 anni Roma, DJ laurea Roma, 
          DJ compleanno Roma, animazione feste private, service audio luci festa.
        </p>
      </div>
    </Layout>
  );
};

export default PartyPrivati;
