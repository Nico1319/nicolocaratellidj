import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const images = [
  { src: gallery1, alt: "DJ performing at sunset festival", span: "lg:col-span-2 lg:row-span-2" },
  { src: gallery2, alt: "Close-up of DJ equipment", span: "" },
  { src: gallery3, alt: "Crowd at underground club event", span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4 font-medium">
            Gallery
          </p>
          <h2 className="text-heading text-foreground mb-6">
            Momenti Live
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Catturando l'energia e l'emozione delle mie performance 
            nei migliori club e festival.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl aspect-square cursor-pointer animate-fade-up ${image.span}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Video Reel Placeholder */}
        <div className="mt-8 animate-fade-up animation-delay-400">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-muted">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-primary/20 transition-colors">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary border-b-8 border-b-transparent ml-1" />
                </div>
                <p className="text-muted-foreground">Video Reel Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
