import { Instagram, Youtube, Music2, Music } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Music2, href: "#", label: "Spotify" },
  { icon: Music, href: "#", label: "SoundCloud" },
];

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Chi Sono" },
  { href: "#music", label: "Musica" },
  { href: "#events", label: "Eventi" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contatti" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container-wide section-padding py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">DJ MARCO</h3>
            <p className="text-background/60 text-sm leading-relaxed">
              DJ & Producer specializzato in house, tech-house e melodic techno.
              Portando il sound underground nei migliori club d'Italia.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start md:items-center">
            <h4 className="font-medium mb-4 text-background/80">Link Rapidi</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="flex flex-col items-start md:items-end">
            <h4 className="font-medium mb-4 text-background/80">Seguimi</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center text-background/60 hover:text-background hover:border-background/50 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/40">
            © {currentYear} DJ Marco. Tutti i diritti riservati.
          </p>
          <div className="flex gap-6 text-sm text-background/40">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
