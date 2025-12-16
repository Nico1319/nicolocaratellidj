import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useScrollAnimation, appleRevealStyles, apple3DStyles } from "@/hooks/useScrollAnimation";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const { ref: sectionRef, isVisible, scrollProgress } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    eventType: "",
    message: "",
  });

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
    <section
      ref={sectionRef}
      id="contact"
      className="py-32 bg-background border-t border-border/30 overflow-hidden relative"
    >
      {/* Background decoration */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px] transition-all duration-1000"
        style={{ 
          opacity: isVisible ? 1 : 0,
          transform: `translate(-50%, -50%) scale(${1 + scrollProgress * 0.3})`,
        }}
      />

      <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
        <h2
          className="text-heading font-bold mb-6"
          style={appleRevealStyles(isVisible, 0)}
        >
          Let's work together.
        </h2>
        <p
          className="text-xl text-muted-foreground mb-12"
          style={appleRevealStyles(isVisible, 100)}
        >
          Hai un evento in mente? Parliamone.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 text-left"
          style={apple3DStyles(isVisible, 200)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Nome"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                required
                className="w-full bg-card border border-transparent focus:border-primary/50 rounded-xl px-5 py-4 text-foreground placeholder-muted-foreground outline-none transition-all duration-300 hover:scale-[1.01] focus:scale-[1.02] focus:shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
              />
              <div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-500"
                style={{ width: focusedField === "name" ? "90%" : "0%" }}
              />
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                required
                className="w-full bg-card border border-transparent focus:border-primary/50 rounded-xl px-5 py-4 text-foreground placeholder-muted-foreground outline-none transition-all duration-300 hover:scale-[1.01] focus:scale-[1.02] focus:shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
              />
              <div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-500"
                style={{ width: focusedField === "email" ? "90%" : "0%" }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                onFocus={() => setFocusedField("date")}
                onBlur={() => setFocusedField(null)}
                className="w-full bg-card border border-transparent focus:border-primary/50 rounded-xl px-5 py-4 text-foreground outline-none transition-all duration-300 hover:scale-[1.01] focus:scale-[1.02] focus:shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
              />
              <div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-500"
                style={{ width: focusedField === "date" ? "90%" : "0%" }}
              />
            </div>
            <div className="relative">
              <select
                value={formData.eventType}
                onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                onFocus={() => setFocusedField("eventType")}
                onBlur={() => setFocusedField(null)}
                className="w-full bg-card border border-transparent focus:border-primary/50 rounded-xl px-5 py-4 text-foreground outline-none transition-all duration-300 appearance-none hover:scale-[1.01] focus:scale-[1.02] focus:shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
              >
                {eventTypes.map((type) => (
                  <option key={type} value={type === "Tipo di Evento" ? "" : type}>
                    {type}
                  </option>
                ))}
              </select>
              <div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-500"
                style={{ width: focusedField === "eventType" ? "90%" : "0%" }}
              />
            </div>
          </div>

          <div className="relative">
            <textarea
              rows={4}
              placeholder="Messaggio..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              required
              className="w-full bg-card border border-transparent focus:border-primary/50 rounded-xl px-5 py-4 text-foreground placeholder-muted-foreground outline-none transition-all duration-300 resize-none hover:scale-[1.005] focus:scale-[1.01] focus:shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
            />
            <div 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-500"
              style={{ width: focusedField === "message" ? "95%" : "0%" }}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="group w-full bg-foreground text-background font-bold text-lg py-4 rounded-xl hover:bg-foreground/90 transition-all duration-500 mt-4 shadow-[0_0_20px_hsl(0_0%_100%/0.2)] hover:scale-[1.02] hover:shadow-[0_0_50px_hsl(0_0%_100%/0.4)] disabled:opacity-50 active:scale-[0.99] relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {isSubmitting ? (
                "Invio in corso..."
              ) : (
                <>
                  Invia Richiesta
                  <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </>
              )}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </form>

        <div
          className="mt-20 flex flex-wrap justify-center gap-4 md:gap-8"
          style={appleRevealStyles(isVisible, 400)}
        >
          <a
            href="mailto:djnicolo.caratelli@libero.it"
            className="group flex items-center gap-3 px-6 py-3 rounded-full bg-card hover:bg-muted transition-all duration-500 border border-border/30 hover:scale-110 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] hover:border-primary/30"
          >
            <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors group-hover:scale-110" />
            <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
              djnicolo.caratelli@libero.it
            </span>
          </a>
          <a
            href="https://wa.me/393920712401"
            className="group flex items-center gap-3 px-6 py-3 rounded-full bg-card hover:bg-muted transition-all duration-500 border border-border/30 hover:scale-110 hover:shadow-[0_0_30px_hsl(142_76%_36%/0.3)] hover:border-green-500/30"
          >
            <Phone className="w-5 h-5 text-muted-foreground group-hover:text-green-500 transition-colors group-hover:scale-110" />
            <span className="text-sm font-medium text-foreground group-hover:text-green-500 transition-colors">
              +39 392 071 2401
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
