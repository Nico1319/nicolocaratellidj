import { Instagram, Music, Cloud, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation, appleRevealStyles } from "@/hooks/useScrollAnimation";
import logoWhite from "@/assets/logo-white.png";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/nicolocaratellidj", label: "Instagram" },
  { icon: Music, href: "https://www.tiktok.com/@nicolocaratellidj", label: "TikTok" },
  { icon: Cloud, href: "https://soundcloud.com/nicolocaratellidj", label: "SoundCloud" },
  { icon: Youtube, href: "https://www.youtube.com/@nicolocaratellidj", label: "YouTube" },
];

const sitemapLinks = [
  { href: "/", label: "Home" },
  { href: "/chi-sono", label: "Chi Sono" },
  { href: "/servizi/lounge-bar-aperitivi", label: "Lounge Bar & Aperitivi" },
  { href: "/servizi/apres-ski-winter-party", label: "Aperiski & Winter Party" },
  { href: "/servizi/inaugurazioni-commerciali", label: "Inaugurazioni" },
  { href: "/servizi/party-privati-esclusivi", label: "Party Privati" },
  { href: "/dj-18esimi-roma", label: "DJ 18esimi Roma" },
  { href: "/produzioni-musicali", label: "Produzioni Musicali" },
  { href: "/blog", label: "Blog" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { ref: footerRef, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 });

  return (
    <footer
      ref={footerRef}
      className="bg-secondary py-16 border-t border-border/30 overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
          style={appleRevealStyles(isVisible, 0)}
        >
          {/* Brand */}
          <div>
            <img 
              src={logoWhite} 
              alt="Nicolò Caratelli DJ Logo" 
              className="h-10 w-auto mb-4"
            />
            <p className="text-muted-foreground text-sm mb-6">
              DJ & Producer professionista a Roma. Musica per 18esimi, feste private, 
              eventi, lounge bar e club.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-all hover:scale-125 duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Sitemap */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-foreground mb-4">Mappa del Sito</h3>
            <div className="grid grid-cols-2 gap-2">
              {sitemapLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contatti</h3>
            <div className="space-y-3">
              <a
                href="tel:+393920712401"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                +39 392 071 2401
              </a>
              <a
                href="mailto:djnicolo.caratelli@libero.it"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                djnicolo.caratelli@libero.it
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Roma, Italia
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 border-t border-border/20 flex flex-col items-center gap-4 text-xs text-muted-foreground"
          style={appleRevealStyles(isVisible, 200)}
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <span className="text-border">•</span>
            <Link to="/cookie-policy" className="hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
            <span className="text-border">•</span>
            <Link to="/termini-di-servizio" className="hover:text-foreground transition-colors">
              Termini di Servizio
            </Link>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 w-full">
            <p>© {currentYear} Nicolò Caratelli DJ. All rights reserved.</p>
            <p>DJ Roma • Musica Eventi • Service Audio Luci</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
