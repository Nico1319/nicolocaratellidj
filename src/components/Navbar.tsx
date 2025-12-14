import { useState, useEffect } from "react";
import { Menu, X, Disc3 } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#story", label: "La Mia Storia" },
  { href: "#about", label: "Competenze" },
  { href: "#services", label: "Servizi" },
  { href: "#music", label: "Listen" },
  { href: "#social", label: "Social" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled && "glass-nav"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 z-50">
            <div className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center">
              <Disc3 className="w-5 h-5 animate-spin-slow" />
            </div>
            <span className="font-semibold tracking-tight text-foreground text-sm">
              Nicolò Caratelli
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 glass-pill px-1 py-1 rounded-full absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "px-5 py-2 text-xs font-medium rounded-full transition-all",
                  index === 0
                    ? "text-foreground hover:bg-foreground/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/10"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Menu Button */}
          <div className="flex items-center gap-4 z-50">
            <a
              href="#contact"
              className="hidden md:flex items-center gap-2 bg-foreground text-background text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-foreground/90 transition-all hover:scale-105"
            >
              Book Now
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8 transition-opacity duration-500 md:hidden",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {navLinks.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className={cn(
              "text-3xl font-bold transition-colors",
              index === 0 ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="text-3xl font-bold text-primary"
        >
          Contact
        </a>
      </div>
    </>
  );
}
