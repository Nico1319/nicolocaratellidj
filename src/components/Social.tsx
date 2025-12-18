import { Instagram, Music2, Bell } from "lucide-react";
import { useScrollAnimation, appleRevealStyles, appleScaleStyles } from "@/hooks/useScrollAnimation";

const socials = [
  {
    icon: Instagram,
    name: "Instagram",
    handle: "@nicolocaratellidj",
    description: "Behind the scenes, stories e contenuti esclusivi",
    url: "https://www.instagram.com/nicolocaratellidj",
  },
  {
    icon: Music2,
    name: "TikTok",
    handle: "@nicolocaratellidj",
    description: "Video virali, remix preview e momenti live",
    url: "https://www.tiktok.com/@nicolocaratellidj",
  },
];

export function Social() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="social"
      className="py-32 bg-background overflow-hidden relative"
    >
      {/* Decorative Blurs */}
      <div
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[120px] transition-all duration-1000"
        style={{ opacity: isVisible ? 1 : 0, transitionDelay: "200ms" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] transition-all duration-1000"
        style={{ opacity: isVisible ? 1 : 0, transitionDelay: "400ms" }}
      />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div>
            <h2
              className="text-5xl font-bold text-foreground tracking-tight"
              style={appleRevealStyles(isVisible, 0)}
            >
              Connect.
            </h2>
            <p
              className="text-muted-foreground mt-2 text-xl"
              style={appleRevealStyles(isVisible, 100)}
            >
              Segui i miei profili per contenuti esclusivi.
            </p>
          </div>
        </div>

        {/* Social Cards Container */}
        <div
          className="bg-card/80 backdrop-blur-xl border border-border/30 rounded-[32px] p-8 md:p-12 shadow-2xl"
          style={appleScaleStyles(isVisible, 200)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socials.map((social, index) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 p-5 rounded-2xl hover:bg-foreground/5 transition-all duration-300 border border-transparent hover:border-border/30 hover:scale-[1.02]"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  filter: isVisible ? "blur(0)" : "blur(8px)",
                  transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${350 + index * 100}ms`,
                }}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300 flex-shrink-0 group-hover:scale-110">
                  <social.icon className="w-6 h-6" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-foreground">{social.name}</h3>
                  <p className="text-primary font-medium text-sm">{social.handle}</p>
                  <p className="text-muted-foreground text-xs mt-1 truncate">
                    {social.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="w-10 h-10 bg-card rounded-full flex items-center justify-center group-hover:bg-foreground transition-all flex-shrink-0 group-hover:scale-110">
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-background transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Community Note */}
        <div
          className="mt-8 flex items-center gap-5 bg-card/60 backdrop-blur-xl border border-border/30 rounded-2xl p-4 md:p-5 hover:scale-[1.01] transition-transform duration-300"
          style={appleRevealStyles(isVisible, 500)}
        >
          <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center flex-shrink-0">
            <Bell className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-foreground font-semibold text-sm md:text-base">
              Attiva le notifiche
            </p>
            <p className="text-muted-foreground text-xs md:text-sm">
              Non perderti nuovi remix e date eventi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
