import { Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const mixes = [
  {
    id: 1,
    title: "Deep House Sessions Vol. 12",
    genre: "Deep House",
    duration: "1:24:30",
    date: "Dicembre 2024",
    plays: "12.4K",
    soundcloudUrl: "#",
  },
  {
    id: 2,
    title: "Melodic Techno Journey",
    genre: "Melodic Techno",
    duration: "1:58:15",
    date: "Novembre 2024",
    plays: "8.7K",
    soundcloudUrl: "#",
  },
  {
    id: 3,
    title: "Club Nights - Live at Fabric",
    genre: "Tech House",
    duration: "2:15:00",
    date: "Ottobre 2024",
    plays: "15.2K",
    soundcloudUrl: "#",
  },
];

export function Music() {
  return (
    <section id="music" className="section-padding">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4 font-medium">
            Musica
          </p>
          <h2 className="text-heading text-foreground mb-6">
            Ultimi Mix & Set
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ascolta le mie ultime produzioni e set registrati. 
            Disponibili su tutte le piattaforme streaming.
          </p>
        </div>

        {/* Mixes List */}
        <div className="space-y-4">
          {mixes.map((mix, index) => (
            <div
              key={mix.id}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                {/* Play Button */}
                <button className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <Play size={20} fill="currentColor" />
                </button>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-lg mb-1 truncate">
                    {mix.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                    <span className="text-primary font-medium">{mix.genre}</span>
                    <span>{mix.duration}</span>
                    <span>{mix.date}</span>
                  </div>
                </div>

                {/* Stats & Action */}
                <div className="flex items-center gap-6">
                  <div className="text-right hidden sm:block">
                    <p className="font-semibold text-foreground">{mix.plays}</p>
                    <p className="text-xs text-muted-foreground">plays</p>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href={mix.soundcloudUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      Ascolta
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Platforms */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-6">Ascolta anche su</p>
          <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors font-medium">SoundCloud</a>
            <a href="#" className="hover:text-primary transition-colors font-medium">Mixcloud</a>
            <a href="#" className="hover:text-primary transition-colors font-medium">Spotify</a>
            <a href="#" className="hover:text-primary transition-colors font-medium">Apple Music</a>
          </div>
        </div>
      </div>
    </section>
  );
}
