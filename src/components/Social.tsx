import { useEffect, useRef, useState } from "react";
import { Instagram, Music2, Users, Bell } from "lucide-react";

const socials = [
  {
    icon: Instagram,
    name: "Instagram",
    handle: "@nicolocaratellidj",
    description: "Behind the scenes, stories e contenuti esclusivi",
    url: "https://www.instagram.com/nicolocaratellidj",
    color: "from-pink-500 via-purple-500 to-orange-400",
    hoverBg: "hover:bg-gradient-to-br hover:from-pink-500/20 hover:via-purple-500/20 hover:to-orange-400/20",
  },
  {
    icon: Music2,
    name: "TikTok",
    handle: "@nicolocaratellidj",
    description: "Video virali, remix preview e momenti live",
    url: "https://www.tiktok.com/@nicolocaratellidj",
    color: "from-cyan-400 via-pink-500 to-red-500",
    hoverBg: "hover:bg-gradient-to-br hover:from-cyan-400/20 hover:via-pink-500/20 hover:to-red-500/20",
  },
];

export function Social() {
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
    <section ref={sectionRef} id="social" className="py-32 bg-secondary">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ filter: isVisible ? "blur(0)" : "blur(10px)" }}
        >
          <h2 className="text-heading font-bold mb-4">Resta connesso.</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Segui i miei profili per non perderti nuovi remix, date e contenuti esclusivi.
          </p>
        </div>

        {/* Social Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {socials.map((social, index) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-card rounded-[24px] p-8 border border-border/30 transition-all duration-500 ${social.hoverBg} hover:border-border/60 hover:scale-[1.02] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                filter: isVisible ? "blur(0)" : "blur(10px)",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Icon with gradient */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${social.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <social.icon className="w-7 h-7 text-white" />
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold text-foreground mb-1">{social.name}</h3>
              <p className="text-primary font-medium text-sm mb-3">{social.handle}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{social.description}</p>

              {/* CTA */}
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-foreground/60 group-hover:text-foreground transition-colors">
                <span>Seguimi</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Community Note */}
        <div
          className={`mt-12 bg-card/50 rounded-2xl p-6 border border-border/20 flex items-start gap-4 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ filter: isVisible ? "blur(0)" : "blur(10px)" }}
        >
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Bell className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-foreground font-medium mb-1">Attiva le notifiche</p>
            <p className="text-muted-foreground text-sm">
              Non perderti le uscite di nuovi remix, le date dei prossimi eventi e i contenuti esclusivi della community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}