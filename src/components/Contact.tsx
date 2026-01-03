import { useState } from "react";
import { format } from "date-fns";
import { it } from "date-fns/locale";
import { CalendarIcon, Mail, Phone } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useScrollAnimation, appleRevealStyles, apple3DStyles } from "@/hooks/useScrollAnimation";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: undefined as Date | undefined,
    eventType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    toast({
      title: "Invio in corso...",
      description: "Sto inviando la tua richiesta.",
    });

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      date: formData.date ? format(formData.date, "yyyy-MM-dd") : "",
      eventType: formData.eventType,
      message: formData.message.trim(),
    };

    try {
      const response = await fetch("https://formspree.io/f/xaneanjq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", date: undefined, eventType: "", message: "" });
        return;
      }

      let errorBody: any = null;
      try {
        errorBody = await response.json();
      } catch {
        // ignore json parsing
      }

      console.log("Formspree request failed", {
        status: response.status,
        statusText: response.statusText,
        errorBody,
        payload,
      });

      toast({
        title: "Invio non riuscito",
        description: "Controlla i dati e riprova tra poco.",
        variant: "destructive",
      });
    } catch (error) {
      console.log("Formspree fetch error", error);
      toast({
        title: "Errore di rete",
        description: "Connessione non disponibile. Riprova tra poco.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-32 bg-background border-t border-border/30 overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2
          className="text-heading font-bold mb-6"
          style={appleRevealStyles(isVisible, 0)}
        >
          Prenota il tuo DJ a Roma
        </h2>
        <p
          className="text-xl text-muted-foreground mb-12"
          style={appleRevealStyles(isVisible, 100)}
        >
          Contatta Nicolò Caratelli per il tuo prossimo evento. Parliamone.
        </p>

        {isSubmitted ? (
          <div 
            className="text-center py-16 px-8 bg-card rounded-2xl border border-primary/20"
            style={apple3DStyles(isVisible, 200)}
          >
            <div className="text-5xl mb-6">🎉</div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Grazie per avermi contattato!</h3>
            <p className="text-muted-foreground mb-8">Ti risponderò il prima possibile.</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-3 bg-primary/10 text-primary rounded-xl hover:bg-primary/20 transition-all"
            >
              Invia un'altra richiesta
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-4 text-left"
            style={apple3DStyles(isVisible, 200)}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Nome"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full bg-card border border-transparent focus:border-primary/50 rounded-xl px-5 py-4 text-foreground placeholder-muted-foreground outline-none transition-all hover:scale-[1.01] focus:scale-[1.01]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full bg-card border border-transparent focus:border-primary/50 rounded-xl px-5 py-4 text-foreground placeholder-muted-foreground outline-none transition-all hover:scale-[1.01] focus:scale-[1.01]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className={cn(
                      "w-full bg-card border border-transparent focus:border-primary/50 rounded-xl px-5 py-4 text-left outline-none transition-all hover:scale-[1.01] focus:scale-[1.01] flex items-center justify-between",
                      !formData.date && "text-muted-foreground"
                    )}
                  >
                    {formData.date ? (
                      format(formData.date, "d MMMM yyyy", { locale: it })
                    ) : (
                      <span>Seleziona data evento</span>
                    )}
                    <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={formData.date}
                    onSelect={(date) => setFormData({ ...formData, date })}
                    initialFocus
                    className="p-3 pointer-events-auto"
                    disabled={(date) => date < new Date()}
                  />
                </PopoverContent>
              </Popover>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                className="w-full bg-card border border-transparent focus:border-primary/50 rounded-xl px-5 py-4 text-foreground outline-none transition-all appearance-none hover:scale-[1.01] focus:scale-[1.01]"
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
              name="message"
              placeholder="Messaggio..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="w-full bg-card border border-transparent focus:border-primary/50 rounded-xl px-5 py-4 text-foreground placeholder-muted-foreground outline-none transition-all resize-none hover:scale-[1.005] focus:scale-[1.005]"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-foreground text-background font-bold text-lg py-4 rounded-xl hover:bg-foreground/90 transition-all mt-4 shadow-[0_0_20px_hsl(0_0%_100%/0.2)] hover:scale-[1.02] hover:shadow-[0_0_40px_hsl(0_0%_100%/0.3)] disabled:opacity-50 active:scale-[0.99]"
            >
              {isSubmitting ? "Invio in corso..." : "Invia Richiesta"}
            </button>
          </form>
        )}

        <div
          className="mt-20 flex flex-wrap justify-center gap-4 md:gap-8"
          style={appleRevealStyles(isVisible, 400)}
        >
          <a
            href="mailto:djnicolo.caratelli@libero.it"
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-card hover:bg-muted transition-all border border-border/30 hover:scale-105 hover:shadow-lg"
          >
            <Mail className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">
              djnicolo.caratelli@libero.it
            </span>
          </a>
          <a
            href="https://wa.me/393920712401"
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-card hover:bg-muted transition-all border border-border/30 hover:scale-105 hover:shadow-lg"
          >
            <Phone className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">+39 392 071 2401</span>
          </a>
        </div>
      </div>
    </section>
  );
}
