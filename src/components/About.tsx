import djPortrait from "@/assets/dj-portrait.jpg";

export function About() {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative animate-fade-up">
            <div className="aspect-square overflow-hidden rounded-2xl">
              <img
                src={djPortrait}
                alt="DJ Marco portrait"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary/30 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="animate-fade-up animation-delay-200">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4 font-medium">
              Chi Sono
            </p>
            <h2 className="text-heading text-foreground mb-8">
              La Passione per la Musica, 
              <br />
              <span className="text-primary">L'Arte del Mix</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Con oltre 10 anni di esperienza dietro la console, ho portato la mia
                musica nei club più esclusivi d'Italia e nei festival internazionali.
                Il mio stile unico fonde house progressivo, tech-house e melodic
                techno, creando atmosfere ipnotiche che fanno ballare fino all'alba.
              </p>
              <p>
                Ogni set è un viaggio sonoro attentamente curato, dove le
                transizioni fluide e la selezione musicale raccontano una storia.
                La mia missione è creare momenti indimenticabili e connessioni
                emotive attraverso la musica.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-semibold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground mt-1">Eventi Live</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-foreground">50K+</p>
                <p className="text-sm text-muted-foreground mt-1">Followers</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-foreground">10+</p>
                <p className="text-sm text-muted-foreground mt-1">Anni Exp.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
