import { Instagram, Music, Cloud, Youtube } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/nicolocaratellidj", label: "Instagram" },
  { icon: Music, href: "https://www.tiktok.com/@nicolocaratellidj", label: "TikTok" },
  { icon: Cloud, href: "https://soundcloud.com/nicolocaratellidj", label: "SoundCloud" },
  { icon: Youtube, href: "https://www.youtube.com/@nicolocaratellidj", label: "YouTube" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-12 border-t border-border/30 text-xs text-muted-foreground">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
        <p>© {currentYear} Nicolò Caratelli DJ. All rights reserved.</p>

        <div className="flex gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors hover:scale-110"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
