import { Camera, Video, Sparkles, Download, Users, Share2, Palette, Star } from "lucide-react";
import { useScrollAnimation, appleRevealStyles, apple3DStyles } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Video,
    title: "Video 360° in 4K",
    description: "Pedana rotante con braccio motorizzato che gira intorno agli ospiti. Video spettacolari con effetti slow-motion e musica.",
  },
  {
    icon: Camera,
    title: "Stampa Istantanea",
    description: "Foto stampate in pochi secondi con qualità professionale. Colori brillanti e resistenza nel tempo.",
  },
  {
    icon: Share2,
    title: "Social Ready",
    description: "QR Code per download immediato. Video pronti per Instagram, TikTok e WhatsApp in tempo reale.",
  },
  {
    icon: Palette,
    title: "Personalizzazione",
    description: "Grafiche custom con nomi, logo aziendale o data del party. Set luci LED sincronizzate con la musica.",
  },
];

const benefits = [
  { icon: Sparkles, title: "Effetto WOW", description: "Attrae gli ospiti e crea un punto di aggregazione divertente" },
  { icon: Download, title: "Gallery Completa", description: "A fine evento ricevi un link con tutti i video e le foto" },
  { icon: Users, title: "Versatilità", description: "Perfetto per Matrimoni, Diciottesimi, Eventi Aziendali e Lauree" },
];

const steps = [
  { number: "01", title: "Installazione", description: "Arriviamo in anticipo per montare la pedana e il set luci LED" },
  { number: "02", title: "Assistenza", description: "Un operatore dedicato con props divertenti (occhiali, cappelli, sparabolle)" },
  { number: "03", title: "Download & Stampa", description: "Gli ospiti scaricano il video via QR e ritirano la foto stampata" },
];

export function PhotoBooth() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.05 });

  return (
    <section ref={sectionRef} id="photobooth" className="py-32 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-destructive/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20" style={appleRevealStyles(isVisible, 0)}>
          <span className="text-xs font-bold bg-primary/10 text-primary px-4 py-2 rounded-full uppercase tracking-widest mb-6 inline-block">
            Nuovo Servizio
          </span>
          <h2 className="text-heading font-bold mb-6">
            Photo Booth 360° & Instant Print
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Non semplici fotografie, ma veri e propri video spettacolari che catturano l'energia del momento a tre giri al secondo.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card rounded-[32px] p-8 md:p-10 group hover:bg-card/80 transition-all duration-500"
              style={apple3DStyles(isVisible, 100 + index * 100)}
            >
              <feature.icon className="w-10 h-10 text-primary mb-6 transition-transform duration-500 group-hover:scale-110" />
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits Row */}
        <div 
          className="glass-card rounded-[32px] p-8 md:p-12 mb-20"
          style={appleRevealStyles(isVisible, 400)}
        >
          <h3 className="text-2xl font-bold text-center mb-10">Perché sceglierlo per il tuo evento?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title} 
                className="text-center"
                style={appleRevealStyles(isVisible, 500 + index * 100)}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-2">{benefit.title}</h4>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How it Works */}
        <div className="mb-20" style={appleRevealStyles(isVisible, 600)}>
          <h3 className="text-2xl font-bold text-center mb-12">Come funziona</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative"
                style={apple3DStyles(isVisible, 700 + index * 100)}
              >
                <div className="glass-card rounded-[24px] p-8 h-full">
                  <span className="text-5xl font-bold text-primary/20 absolute top-4 right-6">{step.number}</span>
                  <h4 className="text-lg font-bold text-foreground mb-3 mt-4">{step.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DJ Quote */}
        <div 
          className="glass-card rounded-[32px] p-10 md:p-14 text-center border-t-4 border-t-primary/30"
          style={appleRevealStyles(isVisible, 900)}
        >
          <Star className="w-10 h-10 text-primary mx-auto mb-6" />
          <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-6 italic leading-relaxed">
            "Il Photo Booth non è solo un accessorio, è una calamita per il divertimento. Mentre io mi occupo di far muovere la pista, il Photo Booth cattura quei sorrisi che dureranno per sempre."
          </blockquote>
          <p className="text-muted-foreground text-sm uppercase tracking-wider">— Il consiglio del DJ</p>
        </div>
      </div>
    </section>
  );
}
