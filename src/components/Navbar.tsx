import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import logoWhite from "@/assets/logo-white.png";

const servicesLinks = [
  { href: "/servizi/wedding-dj", label: "Wedding DJ" },
  { href: "/servizi/lounge-bar-aperitivi", label: "Lounge Bar & Aperitivi" },
  { href: "/servizi/apres-ski-winter-party", label: "Aperiski / Winter Party" },
  { href: "/servizi/inaugurazioni-commerciali", label: "Inaugurazioni" },
  { href: "/servizi/party-privati-esclusivi", label: "Party Privati" },
  { href: "/servizi-extra", label: "Servizi Extra" },
];

// Navbar order: Home | Chi Sono | Servizi (Dropdown) | Produzioni | Contatti
const navLinksDesktop = [
  { href: "/", label: "Home", isAnchor: false },
  { href: "/chi-sono", label: "Chi Sono", isAnchor: false },
  // Servizi dropdown inserted separately
  { href: "/produzioni-musicali", label: "Produzioni", isAnchor: false },
  { href: "/#contact", label: "Contatti", isAnchor: true },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  // Smart anchor handling - redirect to home if not on homepage
  const getAnchorHref = (href: string) => {
    if (isHomePage) {
      return href.replace("/#", "#");
    }
    return href;
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHomePage) {
      e.preventDefault();
      const targetId = href.replace("/#", "").replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

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
            <img src={logoWhite} alt="Nicolò Caratelli DJ Logo" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation - Order: Home | Chi Sono | Servizi | Produzioni | Contatti */}
          <nav className="hidden lg:flex items-center gap-1 glass-pill px-1 py-1 rounded-full absolute left-1/2 -translate-x-1/2">
            {/* Home */}
            <Link
              to="/"
              className={cn(
                "px-4 py-2 text-xs font-medium rounded-full transition-all hover:bg-foreground/10",
                location.pathname === "/"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Home
            </Link>

            {/* Chi Sono */}
            <Link
              to="/chi-sono"
              className={cn(
                "px-4 py-2 text-xs font-medium rounded-full transition-all hover:bg-foreground/10",
                location.pathname === "/chi-sono"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Chi Sono
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={cn(
                  "px-4 py-2 text-xs font-medium rounded-full transition-all hover:bg-foreground/10 flex items-center gap-1",
                  location.pathname.startsWith("/servizi")
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Servizi
                <ChevronDown className={cn("w-3 h-3 transition-transform", servicesOpen && "rotate-180")} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border/50 rounded-xl shadow-xl overflow-hidden z-50">
                  {servicesLinks.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      onClick={() => setServicesOpen(false)}
                      className={cn(
                        "block px-4 py-3 text-sm transition-colors hover:bg-foreground/5",
                        location.pathname === service.href
                          ? "text-primary bg-primary/5"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Produzioni */}
            <Link
              to="/produzioni-musicali"
              className={cn(
                "px-4 py-2 text-xs font-medium rounded-full transition-all hover:bg-foreground/10",
                location.pathname === "/produzioni-musicali"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Produzioni
            </Link>

            {/* Contatti - Anchor link */}
            <a
              href={getAnchorHref("/#contact")}
              onClick={(e) => handleAnchorClick(e, "/#contact")}
              className="px-4 py-2 text-xs font-medium rounded-full transition-all text-muted-foreground hover:text-foreground hover:bg-foreground/10"
            >
              Contatti
            </a>
          </nav>

          {/* CTA & Mobile Menu Button */}
          <div className="flex items-center gap-4 z-50">
            <a
              href={isHomePage ? "#contact" : "/#contact"}
              className="hidden md:flex items-center gap-2 bg-foreground text-background text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-foreground/90 transition-all hover:scale-105"
            >
              Book Now
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Click outside to close dropdown */}
      {servicesOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setServicesOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-4 transition-opacity duration-500 lg:hidden overflow-y-auto py-20",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="text-2xl font-bold text-foreground"
        >
          Home
        </Link>
        
        <Link
          to="/chi-sono"
          onClick={() => setIsOpen(false)}
          className="text-2xl font-bold text-muted-foreground hover:text-foreground transition-colors"
        >
          Chi Sono
        </Link>

        {/* Mobile Services Accordion - Closed by default */}
        <div className="text-center w-full max-w-xs">
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="text-2xl font-bold text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center gap-2 w-full"
          >
            Servizi
            <ChevronRight 
              className={cn(
                "w-5 h-5 transition-transform duration-300",
                mobileServicesOpen && "rotate-90"
              )} 
            />
          </button>
          
          {/* Accordion Content */}
          <div
            className={cn(
              "overflow-hidden transition-all duration-300 ease-out",
              mobileServicesOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
            )}
          >
            <div className="flex flex-col gap-3 pb-2">
              {servicesLinks.map((service) => (
                <Link
                  key={service.href}
                  to={service.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Link
          to="/produzioni-musicali"
          onClick={() => setIsOpen(false)}
          className="text-2xl font-bold text-muted-foreground hover:text-foreground transition-colors"
        >
          Produzioni
        </Link>

        <Link
          to="/blog"
          onClick={() => setIsOpen(false)}
          className="text-2xl font-bold text-muted-foreground hover:text-foreground transition-colors"
        >
          Blog
        </Link>

        <a
          href={isHomePage ? "#contact" : "/#contact"}
          onClick={() => setIsOpen(false)}
          className="text-2xl font-bold text-primary"
        >
          Contatti
        </a>
      </div>
    </>
  );
}
