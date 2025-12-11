import { Calendar, MapPin, Clock, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    id: 1,
    date: "21",
    month: "DIC",
    title: "Winter Warehouse Party",
    venue: "Magazzini Generali",
    city: "Milano",
    time: "23:00 - 06:00",
    ticketUrl: "#",
    isSoldOut: false,
  },
  {
    id: 2,
    date: "31",
    month: "DIC",
    title: "NYE Exclusive",
    venue: "Tenax",
    city: "Firenze",
    time: "22:00 - 08:00",
    ticketUrl: "#",
    isSoldOut: false,
  },
  {
    id: 3,
    date: "12",
    month: "GEN",
    title: "Underground Sessions",
    venue: "Goa Club",
    city: "Roma",
    time: "23:30 - 05:00",
    ticketUrl: "#",
    isSoldOut: true,
  },
  {
    id: 4,
    date: "25",
    month: "GEN",
    title: "Sunset Festival Opening",
    venue: "Cocoricò",
    city: "Riccione",
    time: "00:00 - 07:00",
    ticketUrl: "#",
    isSoldOut: false,
  },
];

export function Events() {
  return (
    <section id="events" className="section-padding bg-secondary">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4 font-medium">
            Eventi
          </p>
          <h2 className="text-heading text-foreground mb-6">
            Prossime Date
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Vieni a ballare ai miei prossimi eventi. 
            Acquista i biglietti in anticipo per non perdere l'occasione.
          </p>
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Date */}
                <div className="text-center min-w-[80px]">
                  <p className="text-3xl font-bold text-foreground">{event.date}</p>
                  <p className="text-sm font-medium text-primary uppercase tracking-wider">{event.month}</p>
                </div>

                {/* Divider */}
                <div className="hidden sm:block w-px h-16 bg-border" />

                {/* Info */}
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground text-lg mb-2">
                    {event.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      {event.venue}, {event.city}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} />
                      {event.time}
                    </span>
                  </div>
                </div>

                {/* Action */}
                {event.isSoldOut ? (
                  <span className="px-6 py-2 bg-muted text-muted-foreground text-sm font-medium rounded-full">
                    Sold Out
                  </span>
                ) : (
                  <Button variant="gold" size="lg" asChild>
                    <a href={event.ticketUrl} target="_blank" rel="noopener noreferrer">
                      <Ticket size={16} />
                      Biglietti
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            <Calendar size={16} />
            Vedi Tutti gli Eventi
          </Button>
        </div>
      </div>
    </section>
  );
}
