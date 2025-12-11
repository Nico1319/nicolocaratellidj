import { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";

const events = [
  {
    day: "25",
    month: "Oct",
    title: "Velvet Club",
    location: "Milano, IT",
    status: "tickets",
    highlight: true,
  },
  {
    day: "31",
    month: "Oct",
    title: "Halloween Night",
    location: "Torino, IT",
    status: "sold-out",
    highlight: false,
  },
  {
    day: "12",
    month: "Nov",
    title: "Corporate Gala",
    location: "Bologna, IT",
    status: "private",
    highlight: false,
  },
];

export function Events() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section ref={sectionRef} id="events" className="py-32 bg-secondary">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2
          className={`text-center text-heading font-bold mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ filter: isVisible ? "blur(0)" : "blur(10px)" }}
        >
          Tour Dates.
        </h2>

        <div
          className={`bg-card rounded-[24px] overflow-hidden border border-border/30 divide-y divide-border/30 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ filter: isVisible ? "blur(0)" : "blur(10px)" }}
        >
          {events.map((event) => (
            <div
              key={`${event.month}-${event.day}`}
              className="flex items-center justify-between p-6 hover:bg-foreground/5 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <div className="text-center w-14">
                  <span
                    className={`block text-xs font-bold uppercase ${
                      event.highlight ? "text-destructive" : "text-muted-foreground"
                    }`}
                  >
                    {event.month}
                  </span>
                  <span className="block text-2xl font-bold text-foreground">{event.day}</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">{event.title}</h4>
                  <p className="text-sm text-muted-foreground">{event.location}</p>
                </div>
              </div>

              {event.status === "tickets" && (
                <a
                  href="#contact"
                  className="px-4 py-2 rounded-full bg-foreground/10 text-xs font-bold text-foreground hover:bg-foreground hover:text-background transition-all hover:scale-105"
                >
                  Tickets
                </a>
              )}
              {event.status === "sold-out" && (
                <span className="px-4 py-2 rounded-full border border-border/30 text-xs font-bold text-muted-foreground">
                  Sold Out
                </span>
              )}
              {event.status === "private" && (
                <span className="px-4 py-2 rounded-full bg-foreground/5 text-xs font-bold text-muted-foreground">
                  Private
                </span>
              )}
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-10 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ filter: isVisible ? "blur(0)" : "blur(10px)" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
          >
            View all past events <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
