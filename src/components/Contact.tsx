import { useState, useEffect, useRef } from "react";
import { Mail, Phone } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const eventTypes = [
  "Tipo di Evento",
  "Lounge Bar / Aperitivo",
  "Aperiski / Winter Party",
  "Inaugurazione Commerciale",
  "Party Privato (18esimo, Laurea)",
  "Matrimonio",
  "Altro / Corporate",
];

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    eventType: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Richiesta Inviata!",
      description: "Ti risponderò il prima possibile. Grazie per avermi contattato!",
    });

    setFormData({ name: "", email: "", date: "", eventType: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section ref={sectionRef} id="contact" className="py-32 bg-background border-t border-border/30">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2
          className={`text-heading font-bold mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ filter: isVisible ? "blur(0)" : "blur(10px)" }}
        >
          Let's work together.
        </h2>
        <p
          className={`text-xl text-muted-foreground mb-12 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ filter: isVisible ? "blur(0)" : "blur(10px)" }}
        >
          Hai un evento in mente? Parliamone.
        </p>

        <form
          onSubmit={handleSubmit}
          className={`space-y-4 text-left transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ filter: isVisible ? "blur(0)" : "blur(10px)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nome"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full bg-card border border-transparent focus:border-primary/50 rounded-xl px-5 py-4 text-foreground placeholder-muted-foreground outline-none transition-all"
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full bg-card border border-transparent focus:border-primary/50 rounded-xl px-5 py-4 text-foreground placeholder-muted-foreground outline-none transition-all"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full bg-card border border-transparent focus:border-primary/50 rounded-xl px-5 py-4 text-foreground outline-none transition-all"
            />
            <select
              value={formData.eventType}
              onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
              className="w-full bg-card border border-transparent focus:border-primary/50 rounded-xl px-5 py-4 text-foreground outline-none transition-all appearance-none"
            >
              {eventTypes.map((type) => (
                <option key={type} value={type === "Tipo di Evento" ? "" : type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <textarea
            rows={4}
            placeholder="Messaggio..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            className="w-full bg-card border border-transparent focus:border-primary/50 rounded-xl px-5 py-4 text-foreground placeholder-muted-foreground outline-none transition-all resize-none"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-foreground text-background font-bold text-lg py-4 rounded-xl hover:bg-foreground/90 transition-colors mt-4 shadow-[0_0_20px_hsl(0_0%_100%/0.2)] hover:scale-[1.005] disabled:opacity-50"
          >
            {isSubmitting ? "Invio in corso..." : "Invia Richiesta"}
          </button>
        </form>

        <div
          className={`mt-20 flex flex-wrap justify-center gap-4 md:gap-8 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ filter: isVisible ? "blur(0)" : "blur(10px)" }}
        >
          <a
            href="mailto:djnicolo.caratelli@libero.it"
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-card hover:bg-muted transition-colors border border-border/30 hover:scale-105"
          >
            <Mail className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">djnicolo.caratelli@libero.it</span>
          </a>
          <a
            href="https://wa.me/393920712401"
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-card hover:bg-muted transition-colors border border-border/30 hover:scale-105"
          >
            <Phone className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">+39 392 071 2401</span>
          </a>
        </div>
      </div>
    </section>
  );
}
