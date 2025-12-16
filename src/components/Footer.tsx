import { Instagram, Music, Cloud, Youtube } from "lucide-react";
import { useScrollAnimation, appleRevealStyles } from "@/hooks/useScrollAnimation";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/nicolocaratellidj", label: "Instagram", hoverColor: "hover:text-pink-500" },
  { icon: Music, href: "https://www.tiktok.com/@nicolocaratellidj", label: "TikTok", hoverColor: "hover:text-cyan-400" },
  { icon: Cloud, href: "https://soundcloud.com/nicolocaratellidj", label: "SoundCloud", hoverColor: "hover:text-orange-500" },
  { icon: Youtube, href: "https://www.youtube.com/@nicolocaratellidj", label: "YouTube", hoverColor: "hover:text-red-500" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { ref: footerRef, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.5 });

  return (
    <footer
      ref={footerRef}
      className="bg-background py-12 border-t border-border/30 text-xs text-muted-foreground overflow-hidden relative"
    >
      {/* Subtle gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 transition-opacity duration-1000"
        style={{ opacity: isVisible ? 1 : 0 }}
      />

      <div
        className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6 relative z-10"
        style={appleRevealStyles(isVisible, 0)}
      >
        <p className="hover:text-foreground transition-colors cursor-default">
          © {currentYear} Nicolò Caratelli DJ. All rights reserved.
        </p>

        <div className="flex gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-500 hover:scale-150 ${social.hoverColor}`}
              aria-label={social.label}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0) rotate(0)" : "translateY(20px) rotate(-10deg)",
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${150 + index * 80}ms`,
              }}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
