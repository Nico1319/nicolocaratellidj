import { Download, Play } from "lucide-react";
import { useScrollAnimation, appleRevealStyles, appleScaleStyles } from "@/hooks/useScrollAnimation";

export function LatestRelease() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="py-32 bg-secondary overflow-hidden relative"
    >
      {/* Decorative Blur */}
      <div
        className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 transition-all duration-1000"
        style={{ opacity: isVisible ? 1 : 0 }}
      />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block"
            style={appleRevealStyles(isVisible, 0)}
          >
            New Release
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground tracking-tight"
            style={appleRevealStyles(isVisible, 100)}
          >
            Ultima Uscita
          </h2>
          <p
            className="text-muted-foreground mt-3 text-xl max-w-2xl mx-auto"
            style={appleRevealStyles(isVisible, 200)}
          >
            Ascolta l'anteprima del nuovo remix.
          </p>
        </div>

        {/* Player Card */}
        <div
          className="bg-card/80 backdrop-blur-xl border border-border/30 rounded-[32px] overflow-hidden shadow-2xl"
          style={appleScaleStyles(isVisible, 300)}
        >
          {/* YouTube Embed */}
          <div className="relative w-full aspect-video">
            <iframe
              src="https://www.youtube.com/embed/7gLQBuwOFNw?rel=0&modestbranding=1"
              title="Ultimo Remix - Nicolò Caratelli DJ"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              loading="lazy"
            />
          </div>

          {/* Info + Download */}
          <div className="p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-foreground">
                Nuovo Remix Disponibile
              </h3>
              <p className="text-muted-foreground text-sm mt-1">
                Ascolta e scarica gratuitamente
              </p>
            </div>

            <a
              href="https://hypeddit.com/9tv9e1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 flex-shrink-0"
            >
              <Download className="w-5 h-5" />
              Download Gratuito
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
