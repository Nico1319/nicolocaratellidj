import { Instagram, Music, Cloud, Youtube } from "lucide-react";
import { useScrollAnimation, appleRevealStyles } from "@/hooks/useScrollAnimation";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/nicolocaratellidj", label: "Instagram" },
  { icon: Music, href: "https://www.tiktok.com/@nicolocaratellidj", label: "TikTok" },
  { icon: Cloud, href: "https://soundcloud.com/nicolocaratellidj", label: "SoundCloud" },
  { icon: Youtube, href: "https://www.youtube.com/@nicolocaratellidj", label: "YouTube" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { ref: footerRef, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.3 });

  return (
    <footer
      ref={footerRef}
      className="bg-background py-12 border-t border-border/30 text-xs text-muted-foreground overflow-hidden"
    >
      <div
        className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6"
        style={appleRevealStyles(isVisible, 0)}
      >
        <p>© {currentYear} Nicolò Caratelli DJ. All rights reserved.</p>

        <div className="flex gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-all hover:scale-125 duration-300"
              aria-label={social.label}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(10px)",
                transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${100 + index * 50}ms`,
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
