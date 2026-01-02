import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import logoWhite from "@/assets/logo-white.png";

const navLinks = [
  { href: "#home", label: "Home", isAnchor: true },
  { href: "#story", label: "La Mia Storia", isAnchor: true },
  { href: "#about", label: "Competenze", isAnchor: true },
  { href: "#services", label: "Servizi", isAnchor: true },
  { href: "#music", label: "Listen", isAnchor: true },
  { href: "/blog", label: "Blog", isAnchor: false },
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
          <Link to="/" className="z-50">
            <img src={logoWhite} alt="Nicolò Caratelli DJ" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 glass-pill px-1 py-1 rounded-full absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link, index) =>
              link.isAnchor ? (
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
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-5 py-2 text-xs font-medium rounded-full transition-all text-muted-foreground hover:text-foreground hover:bg-foreground/10"
                >
                  {link.label}
                </Link>
              )
            )}
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
        {navLinks.map((link, index) =>
          link.isAnchor ? (
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
          ) : (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          )
        )}
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
