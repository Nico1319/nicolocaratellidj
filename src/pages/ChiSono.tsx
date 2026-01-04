import { Layout } from "@/components/Layout";
import { useScrollAnimation, appleRevealStyles, appleSlideStyles } from "@/hooks/useScrollAnimation";
import { Music, Headphones, Radio, Disc, Award, Users } from "lucide-react";

const skills = [
  { icon: Headphones, title: "DJ Set", description: "Mix professionali su qualsiasi genere musicale" },
  { icon: Music, title: "Produzione", description: "Remix e tracce originali in studio" },
  { icon: Radio, title: "Live Performance", description: "Esibizioni energiche e coinvolgenti" },
  { icon: Disc, title: "Selezione Musicale", description: "Playlist curate per ogni occasione" },
  { icon: Award, title: "Esperienza", description: "4+ anni nel settore dell'intrattenimento" },
  { icon: Users, title: "Versatilità", description: "Adattamento a ogni tipo di pubblico" },
];

const ChiSono = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const { ref: journeyRef, isVisible: journeyVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <Layout
      title="Chi Sono | Nicolò Caratelli DJ Roma - Biografia"
      description="Scopri la storia di Nicolò Caratelli, DJ e Producer professionista a Roma. 4 anni di esperienza in eventi, matrimoni, lounge bar e club della capitale."
      canonical="/chi-sono"
    >
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 bg-background overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* H1 SEO nascosto */}
          <h1 className="sr-only">
            Nicolò Caratelli | DJ & Producer Roma - Matrimoni, Club ed Eventi Esclusivi
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div style={appleSlideStyles(heroVisible, "left", 0)}>
              <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
                Chi Sono
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Nicolò Caratelli
                <span className="block text-primary">DJ & Producer</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ho 21 anni e sono di Roma. La mia passione per la musica mi ha portato a diventare 
                un DJ professionista con quasi 4 anni di esperienza nel settore dell'intrattenimento.
              </p>
            </div>
            <div
              className="relative rounded-[40px] overflow-hidden shadow-2xl"
              style={appleSlideStyles(heroVisible, "right", 200)}
            >
              <img
                src="/lovable-uploads/90186305-67f5-43a2-b0fe-5b954e08f3a9.jpg"
                alt="DJ Nicolò Caratelli ritratto professionale Roma"
                className="w-full h-full object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="py-24 bg-secondary overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-8" style={appleRevealStyles(storyVisible, 0)}>
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              La Mia Storia
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nonostante la giovane età, la mia esperienza nel settore dell'intrattenimento e della 
              musica è intensa e diversificata. Ho portato la mia musica e la mia energia da eventi 
              privati come <strong className="text-foreground">feste di 18 anni</strong> e cerimonie 
              di laurea, a contesti pubblici che spaziano dalle sagre di paese fino ai palchi delle 
              discoteche più frequentate di Roma.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              La mia carriera non è iniziata dietro una consolle, ma in una sala prove, innamorato 
              del suono analogico. Ho iniziato con la <strong className="text-foreground">Chitarra</strong>, 
              ma la <strong className="text-foreground">Batteria</strong> è diventata la mia vera 
              vocazione. Anni di lezioni private hanno affinato il mio senso del ritmo, elemento 
              essenziale per ogni DJ professionista.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Parallelamente, ho sviluppato la mia abilità nel <strong className="text-foreground">DJing</strong>, 
              trasformando il mixaggio in una vera e propria arte. La mia evoluzione mi ha portato 
              nel mondo della <strong className="text-foreground">produzione musicale</strong>: ho 
              iniziato a creare remix e mashup che hanno riscosso molto successo, dimostrando una 
              forte capacità di interpretare e rielaborare i trend musicali contemporanei.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Oggi sono specializzato in generi come <strong className="text-foreground">Deep House</strong>, 
              <strong className="text-foreground"> Tech-House</strong>, <strong className="text-foreground">Nu Disco</strong> e 
              <strong className="text-foreground"> Chillout</strong>, ma la mia versatilità mi permette 
              di adattarmi a qualsiasi contesto e richiesta. Che si tratti di un matrimonio elegante, 
              un aperitivo trendy in un lounge bar di Roma, o una serata energica in discoteca, 
              sono in grado di creare l'atmosfera perfetta per ogni occasione.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section ref={skillsRef} className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2
            className="text-3xl font-bold text-foreground text-center mb-16"
            style={appleRevealStyles(skillsVisible, 0)}
          >
            Le Mie Competenze
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="glass-card rounded-2xl p-8 text-center"
                style={{
                  opacity: skillsVisible ? 1 : 0,
                  transform: skillsVisible ? "translateY(0)" : "translateY(40px)",
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${100 + index * 80}ms`,
                }}
              >
                <skill.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section ref={journeyRef} className="py-24 bg-secondary overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2
            className="text-3xl font-bold text-foreground text-center mb-12"
            style={appleRevealStyles(journeyVisible, 0)}
          >
            Il Mio Percorso a Roma
          </h2>
          
          <div className="space-y-6" style={appleRevealStyles(journeyVisible, 200)}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Roma è la mia città, il luogo dove ho costruito la mia carriera e dove continuo a 
              crescere professionalmente. Ho avuto il privilegio di esibirmi nei migliori locali 
              della capitale, dai rooftop con vista sui monumenti storici ai club più esclusivi 
              del centro.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              La mia filosofia è semplice: ogni evento è unico e merita un'attenzione personalizzata. 
              Non mi limito a mettere musica, ma creo un'esperienza sonora che accompagna i tuoi 
              ospiti dall'inizio alla fine della serata. Lavoro a stretto contatto con i miei clienti 
              per capire le loro esigenze e trasformare le loro visioni in realtà.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Se stai cercando un <strong className="text-foreground">DJ a Roma</strong> per il tuo 
              prossimo evento, sono qui per offrirti un servizio professionale, affidabile e 
              personalizzato. Contattami per una consulenza gratuita e scopriamo insieme come 
              rendere il tuo evento indimenticabile.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Pronto a collaborare?
          </h2>
          <p className="text-muted-foreground mb-8">
            Contattami per discutere del tuo prossimo evento a Roma.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover:bg-primary/90 transition-all hover:scale-105"
          >
            Richiedi un Preventivo
          </a>
        </div>
      </section>

      {/* Hidden SEO Content */}
      <div className="sr-only" aria-hidden="true">
        <p>
          Nicolò Caratelli è un DJ professionista con sede a Roma, specializzato in eventi musicali 
          di alta qualità. Con quasi 4 anni di esperienza, offre servizi DJ per matrimoni, feste 
          private, inaugurazioni commerciali, lounge bar e club. La sua versatilità musicale 
          spazia dalla Deep House al Tech-House, dal Nu Disco al Chillout, garantendo sempre 
          la colonna sonora perfetta per ogni occasione. DJ Roma, musica eventi Roma, DJ matrimonio 
          Roma, DJ aperitivo Roma, DJ lounge bar Roma.
        </p>
      </div>
    </Layout>
  );
};

export default ChiSono;
