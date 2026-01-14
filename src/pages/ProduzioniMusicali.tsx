import { Layout } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { LogoDivider } from "@/components/LogoDivider";
import { useScrollAnimation, appleRevealStyles, appleSlideStyles } from "@/hooks/useScrollAnimation";
import { Music, Headphones, Radio, Disc, Play, ExternalLink } from "lucide-react";
import { Contact } from "@/components/Contact";

const tracks = [
  {
    title: "Summer Vibes Remix",
    type: "Remix",
    genre: "Deep House",
    year: "2024",
  },
  {
    title: "Night Drive",
    type: "Original",
    genre: "Tech House",
    year: "2024",
  },
  {
    title: "Roma Sunset",
    type: "Original",
    genre: "Nu Disco",
    year: "2023",
  },
  {
    title: "Club Essential Mix",
    type: "Mashup",
    genre: "House",
    year: "2023",
  },
];

const platforms = [
  { name: "SoundCloud", url: "https://soundcloud.com/nicolocaratellidj", icon: Radio },
  { name: "Mixcloud", url: "https://www.mixcloud.com/nicolocaratelli", icon: Disc },
  { name: "YouTube", url: "https://www.youtube.com/@nicolocaratellidj", icon: Play },
];

const ProduzioniMusicali = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const { ref: tracksRef, isVisible: tracksVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const { ref: studioRef, isVisible: studioVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <Layout
      title="Produzioni Musicali, Remix e Sound Design | Nicolò Caratelli Roma"
      description="Scopri le produzioni musicali di Nicolò Caratelli: remix, tracce originali e mashup. Deep House, Tech House e Nu Disco made in Roma."
      canonical="/produzioni-musicali"
    >
      <JsonLd
        schema={{
          type: "Person",
          name: "Nicolò Caratelli",
          jobTitle: "Music Producer & DJ",
          url: "https://nicolocaratellidj.it/produzioni-musicali",
          description: "Producer musicale specializzato in Deep House, Tech House e Nu Disco. Remix e tracce originali.",
        }}
      />

      {/* Hero */}
      <section ref={heroRef} className="pt-32 pb-20 bg-background overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <h1 className="sr-only">Produzioni Musicali, Remix e Sound Design</h1>
          
          <div className="text-center" style={appleRevealStyles(heroVisible, 0)}>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
              Music Production
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Produzioni
              <span className="block text-primary">Musicali</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Oltre al DJing, creo musica originale. Remix, mashup e produzioni 
              che fondono i miei studi musicali con la passione per l'elettronica.
            </p>

            {/* Platform Links */}
            <div className="flex flex-wrap justify-center gap-4">
              {platforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-secondary text-foreground px-6 py-3 rounded-full hover:bg-secondary/80 transition-all hover:scale-105"
                >
                  <platform.icon className="w-5 h-5" />
                  <span className="font-medium">{platform.name}</span>
                  <ExternalLink className="w-4 h-4 opacity-50" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <LogoDivider />

      {/* Featured Tracks */}
      <section ref={tracksRef} className="py-24 bg-secondary overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2
            className="text-3xl font-bold text-foreground text-center mb-16"
            style={appleRevealStyles(tracksVisible, 0)}
          >
            Produzioni in Evidenza
          </h2>
          
          <div className="space-y-4">
            {tracks.map((track, index) => (
              <div
                key={track.title}
                className="glass-card rounded-2xl p-6 flex items-center justify-between gap-4 group"
                style={{
                  opacity: tracksVisible ? 1 : 0,
                  transform: tracksVisible ? "translateX(0)" : "translateX(-40px)",
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${100 + index * 80}ms`,
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Music className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{track.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {track.type} • {track.genre}
                    </p>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">{track.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Story */}
      <section ref={studioRef} className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div style={appleSlideStyles(studioVisible, "left", 0)}>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Dal Live allo Studio
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  La mia evoluzione come DJ mi ha naturalmente portato verso la 
                  <strong className="text-foreground"> produzione musicale</strong>. 
                  I anni di studio della batteria e della chitarra mi hanno dato una 
                  sensibilità unica per il ritmo e la struttura delle tracce.
                </p>
                <p>
                  Oggi creo <strong className="text-foreground">remix</strong> e 
                  <strong className="text-foreground"> mashup</strong> che suono 
                  nei miei set, oltre a produzioni originali che esplorano i confini 
                  tra <strong className="text-foreground">Deep House</strong>, 
                  <strong className="text-foreground"> Tech House</strong> e 
                  <strong className="text-foreground"> Nu Disco</strong>.
                </p>
                <p>
                  Il mio obiettivo è creare musica che funzioni sia in cuffia che 
                  sulla pista da ballo: tracce con personalità, groove coinvolgente 
                  e quella qualità di produzione che fa la differenza.
                </p>
              </div>
            </div>
            
            <div
              className="relative rounded-[40px] overflow-hidden shadow-2xl"
              style={appleSlideStyles(studioVisible, "right", 200)}
            >
              <img
                src="/lovable-uploads/9491bd42-d3d3-408d-b7c6-b880572705c7.jpg"
                alt="Nicolò Caratelli in studio - Produzione musicale"
                className="w-full h-full object-cover aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
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
          Produzioni musicali di Nicolò Caratelli: remix, tracce originali e mashup. 
          Producer Roma, produzione Deep House, Tech House producer, Nu Disco, 
          remix professionali, musica elettronica Roma, DJ producer italiano.
        </p>
      </div>
    </Layout>
  );
};

export default ProduzioniMusicali;
