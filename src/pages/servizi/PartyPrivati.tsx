import { Layout } from "@/components/Layout";
import { useScrollAnimation, appleRevealStyles, appleSlideStyles } from "@/hooks/useScrollAnimation";
import { PartyPopper, Music, Mic2, Lightbulb, Gift, Star } from "lucide-react";
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
      title="DJ Party Privati Roma | Feste 18 anni - Nicolò Caratelli"
      description="DJ per party privati a Roma. 18esimi, feste di laurea e compleanni esclusivi. Trasforma la tua festa in un evento leggendario con musica e luci professionali."
      canonical="/servizi/party-privati-esclusivi"
    >
      {/* Hero */}
      <section ref={heroRef} className="pt-32 pb-20 bg-background overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <h1 className="sr-only">DJ Party Privati Roma - Feste 18 anni, Laurea e Compleanni</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div style={appleSlideStyles(heroVisible, "left", 0)}>
              <div className="inline-flex items-center gap-2 text-primary text-sm mb-4">
                <PartyPopper className="w-4 h-4" />
                <span>Servizi DJ Roma</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Party Privati
                <span className="block text-primary">Esclusivi</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Trasforma la tua festa in un evento leggendario. DJ set personalizzati 
                per 18esimi, feste di laurea e compleanni. Playlist curata sui tuoi 
                gusti per far ballare tutti, con impianto audio e luci professionali.
              </p>
              <a
                href="/#contact"
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
              Una Festa da Ricordare
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ogni festa privata è un'occasione speciale che merita di essere celebrata 
              nel modo giusto. Come <strong className="text-foreground">DJ specializzato 
              in party privati a Roma</strong>, ho animato centinaia di eventi, dai 
              18esimi esplosivi alle feste di laurea più eleganti.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Il mio segreto? Ascolto. Prima di ogni evento, mi confronto con te per 
              capire i tuoi gusti musicali, le canzoni che non possono mancare, e 
              l'atmosfera che vuoi creare. Costruisco una <strong className="text-foreground">
              playlist personalizzata</strong> che riflette la tua personalità e fa 
              ballare tutti i tuoi ospiti, dai più giovani ai più grandi.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Il servizio include impianto audio professionale, <strong className="text-foreground">
              luci LED scenografiche</strong>, e la gestione di tutti i momenti speciali: 
              dal taglio della torta al brindisi, dalle dediche alle sorprese. E se vuoi 
              aggiungere un tocco in più, posso integrare servizi come il <strong className="text-foreground">
              karaoke</strong> o il <strong className="text-foreground">photo booth</strong>.
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

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Crea il Tuo Party Perfetto
          </h2>
          <p className="text-muted-foreground mb-8">
            Contattami per un preventivo gratuito e iniziamo a pianificare.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover:bg-primary/90 transition-all hover:scale-105"
          >
            Richiedi Preventivo
          </a>
        </div>
      </section>

      {/* Hidden SEO Content */}
      <div className="sr-only" aria-hidden="true">
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
