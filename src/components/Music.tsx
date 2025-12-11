import { useEffect, useRef, useState } from "react";
import { Play, PlayCircle, CloudFog, Youtube } from "lucide-react";
const mixes = [{
  id: "01",
  title: "Summer Sunset Vol. 3",
  genre: "Deep House",
  duration: "54 min"
}, {
  id: "02",
  title: "Club Energy 2024",
  genre: "Tech House",
  duration: "48 min"
}, {
  id: "03",
  title: "Wedding Party Best Of",
  genre: "Revival & Commercial",
  duration: "60 min"
}];
export function Music() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return <section ref={sectionRef} id="music" className="py-32 bg-background overflow-hidden relative">
      {/* Decorative Blurs */}
      <div className={`absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] -translate-y-1/2 transition-all duration-700 delay-100 ${isVisible ? "opacity-100" : "opacity-0"}`} />
      <div className={`absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] transition-all duration-700 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`} />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div>
            <h2 className={`text-5xl font-bold text-foreground tracking-tight transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{
            filter: isVisible ? "blur(0)" : "blur(10px)"
          }}>
              Listen.
            </h2>
            <p className={`text-muted-foreground mt-2 text-xl transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{
            filter: isVisible ? "blur(0)" : "blur(10px)"
          }}>
              Il sound che definisce l'atmosfera.
            </p>
          </div>
          <div className={`flex gap-3 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{
          filter: isVisible ? "blur(0)" : "blur(10px)"
        }}>
            <a href="https://soundcloud.com/nicolocaratellidj" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-card rounded-full flex items-center justify-center hover:bg-foreground hover:text-background transition-all hover:scale-105">
              <CloudFog className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/@nicolocaratellidj" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-card rounded-full flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground transition-all hover:scale-105">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Player Card */}
        <div className={`bg-card/80 backdrop-blur-xl border border-border/30 rounded-[32px] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-10 items-center transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{
        filter: isVisible ? "blur(0)" : "blur(10px)"
      }}>
          {/* Album Art */}
          <div className="w-64 h-64 md:w-80 md:h-80 bg-muted rounded-2xl shadow-2xl overflow-hidden relative group flex-shrink-0 hover:scale-[1.01] transition-transform duration-300">
            <img alt="Album Art" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/lovable-uploads/5d795b98-656f-41dd-83bf-2d51608a98c4.jpg" />
            <a href="https://soundcloud.com/nicolocaratellidj" target="_blank" rel="noopener noreferrer" className="absolute inset-0 bg-background/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 bg-foreground/20 backdrop-blur-md rounded-full flex items-center justify-center">
                <Play className="w-6 h-6 fill-foreground text-foreground ml-1" />
              </div>
            </a>
          </div>

          {/* Track List */}
          <div className="flex-1 w-full space-y-2">
            <h3 className="text-2xl font-bold text-foreground mb-6">Latest Mixes</h3>

            {mixes.map(mix => <div key={mix.id} className="group flex items-center justify-between p-4 rounded-xl hover:bg-foreground/5 transition-colors cursor-pointer border-b border-border/30 last:border-0">
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground font-mono text-xs">{mix.id}</span>
                  <div>
                    <p className="text-foreground font-medium">{mix.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {mix.genre} • {mix.duration}
                    </p>
                  </div>
                </div>
                <PlayCircle className="text-muted-foreground group-hover:text-foreground transition-colors w-6 h-6" />
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}