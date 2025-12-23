import { Camera, Sparkles, Download, Users, Palette, Star, Printer, QrCode } from "lucide-react";
import { useScrollAnimation, appleRevealStyles, apple3DStyles } from "@/hooks/useScrollAnimation";
import photoboothHero from "@/assets/photobooth-hero.jpg";
import photoboothPrint from "@/assets/photobooth-print.jpg";
import photoboothFun from "@/assets/photobooth-fun.jpg";
const features = [{
  icon: Printer,
  title: "Stampa Istantanea",
  description: "Foto stampate in pochi secondi con qualità professionale. Colori brillanti e resistenza nel tempo."
}, {
  icon: QrCode,
  title: "Download Immediato",
  description: "QR Code per scaricare subito le foto sul cellulare e condividerle sui social."
}, {
  icon: Palette,
  title: "Personalizzazione",
  description: "Grafiche custom con nomi, logo aziendale o data del party. Set luci LED sincronizzate."
}];
const benefits = [{
  icon: Sparkles,
  title: "Effetto WOW",
  description: "Attrae gli ospiti e crea un punto di aggregazione divertente"
}, {
  icon: Download,
  title: "Gallery Completa",
  description: "A fine evento ricevi un link con tutte le foto della serata"
}, {
  icon: Users,
  title: "Versatilità",
  description: "Perfetto per Matrimoni, Diciottesimi, Eventi Aziendali e Lauree"
}, {
  icon: Star,
  title: "Gadget & Guestbook",
  description: "Gli ospiti portano via la foto o la incollano su un libro dedicato"
}];
const steps = [{
  number: "01",
  title: "Installazione",
  description: "Arriviamo in anticipo per montare il set e le luci LED"
}, {
  number: "02",
  title: "Assistenza",
  description: "Un operatore dedicato con props divertenti (occhiali, cappelli, sparabolle)"
}, {
  number: "03",
  title: "Stampa & Download",
  description: "Gli ospiti scaricano le foto via QR e ritirano la stampa"
}];
export function PhotoBooth() {
  const {
    ref: sectionRef,
    isVisible
  } = useScrollAnimation<HTMLElement>({
    threshold: 0.05
  });
  return <section ref={sectionRef} id="photobooth" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12" style={appleRevealStyles(isVisible, 0)}>
          <span className="text-xs font-bold bg-primary/10 text-primary px-4 py-2 rounded-full uppercase tracking-widest mb-6 inline-block">
            Servizio Extra
          </span>
          <h2 className="text-heading font-bold mb-4">
            Photo Booth & Instant Print
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            L'anima della festa: cattura i momenti più belli con foto istantanee di qualità professionale
          </p>
        </div>

        {/* Hero + Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Hero Image */}
          <div className="rounded-3xl overflow-hidden h-[400px] lg:h-full" style={apple3DStyles(isVisible, 100)}>
            <img alt="Photo Booth" className="w-full h-full object-cover" src="/lovable-uploads/f3ad4054-5963-427c-aa1b-5412c4f096be.jpg" />
          </div>

          {/* Features */}
          <div className="flex flex-col gap-4">
            {features.map((feature, index) => <div key={feature.title} className="glass-card rounded-2xl p-6 flex gap-5 items-start hover:bg-card/80 transition-all duration-300" style={apple3DStyles(isVisible, 200 + index * 100)}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>)}
          </div>
        </div>

        {/* Gallery Row */}
        <div className="grid grid-cols-2 gap-4 mb-16" style={appleRevealStyles(isVisible, 400)}>
          <div className="rounded-2xl overflow-hidden h-48 md:h-64">
            <img alt="Stampa istantanea" src="/lovable-uploads/1fc9023f-ee22-4805-88a9-aacde01fee6d.jpg" className="w-full h-full hover:scale-105 transition-transform duration-500 object-fill" />
          </div>
          <div className="rounded-2xl overflow-hidden h-48 md:h-64">
            <img alt="Divertimento al Photo Booth" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="/lovable-uploads/88501597-7366-457f-9d5c-1fbd0bde787f.jpg" />
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="glass-card rounded-3xl p-8 md:p-10 mb-16" style={appleRevealStyles(isVisible, 500)}>
          <h3 className="text-xl font-bold text-center mb-8">Perché sceglierlo?</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => <div key={benefit.title} className="text-center" style={appleRevealStyles(isVisible, 600 + index * 80)}>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <benefit.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-1">{benefit.title}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">{benefit.description}</p>
              </div>)}
          </div>
        </div>

        {/* How it Works */}
        <div className="mb-16" style={appleRevealStyles(isVisible, 700)}>
          <h3 className="text-xl font-bold text-center mb-8">Come funziona</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map((step, index) => <div key={step.number} className="glass-card rounded-2xl p-6 relative" style={apple3DStyles(isVisible, 800 + index * 100)}>
                <span className="text-4xl font-bold text-primary/15 absolute top-4 right-5">{step.number}</span>
                <h4 className="font-bold text-foreground mb-2">{step.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>)}
          </div>
        </div>

        {/* DJ Quote */}
        <div className="glass-card rounded-3xl p-8 md:p-10 text-center border-l-4 border-l-primary/40" style={appleRevealStyles(isVisible, 1000)}>
          <blockquote className="text-lg md:text-xl text-foreground/90 italic leading-relaxed">
            "Il Photo Booth non è solo un accessorio, è una calamita per il divertimento. Mentre io mi occupo di far muovere la pista, il Photo Booth cattura quei sorrisi che dureranno per sempre."
          </blockquote>
          <p className="text-muted-foreground text-sm mt-4 uppercase tracking-wider">— Il consiglio del DJ</p>
        </div>
      </div>
    </section>;
}