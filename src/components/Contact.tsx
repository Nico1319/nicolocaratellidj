import { useState } from "react";
import { Send, User, Mail, MessageSquare, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Messaggio Inviato!",
      description: "Ti risponderò il prima possibile. Grazie per avermi contattato!",
    });
    
    setFormData({ name: "", email: "", eventType: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Info */}
          <div className="animate-fade-up">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4 font-medium">
              Contatti
            </p>
            <h2 className="text-heading text-foreground mb-6">
              Prenota il Tuo Evento
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Stai organizzando un evento privato, una festa aziendale o cerchi un DJ
              per il tuo club? Compila il form e descrivimi il tuo progetto.
              Ti risponderò entro 24 ore.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Area di Copertura</h4>
                  <p className="text-sm text-muted-foreground">
                    Nord Italia, con disponibilità per eventi nazionali e internazionali
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MessageSquare size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Tipi di Eventi</h4>
                  <p className="text-sm text-muted-foreground">
                    Club nights, festival, eventi privati, matrimoni, corporate events
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="animate-fade-up animation-delay-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Il tuo nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="pl-12 h-14 bg-background border-border"
                  required
                />
              </div>

              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="La tua email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="pl-12 h-14 bg-background border-border"
                  required
                />
              </div>

              <Input
                type="text"
                placeholder="Tipo di evento (es. Club Night, Matrimonio...)"
                value={formData.eventType}
                onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                className="h-14 bg-background border-border"
              />

              <Textarea
                placeholder="Raccontami del tuo evento: data, location, budget indicativo..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="min-h-[150px] bg-background border-border resize-none"
                required
              />

              <Button 
                type="submit" 
                variant="gold" 
                size="xl" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Invio in corso..."
                ) : (
                  <>
                    <Send size={18} />
                    Invia Richiesta
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
