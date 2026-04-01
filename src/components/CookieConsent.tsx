import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Cookie, X } from "lucide-react";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6 transition-all duration-500",
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      )}
    >
      <div className="max-w-4xl mx-auto bg-card/95 backdrop-blur-xl border border-border/40 rounded-2xl p-6 shadow-2xl">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <Cookie className="w-8 h-8 text-primary shrink-0 hidden md:block" />
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-foreground mb-1">
              Questo sito utilizza i cookie 🍪
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Utilizziamo cookie tecnici necessari e, con il tuo consenso, cookie analitici per migliorare
              la tua esperienza. Leggi la nostra{" "}
              <Link to="/cookie-policy" className="text-primary hover:underline">
                Cookie Policy
              </Link>{" "}
              e la{" "}
              <Link to="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </Link>{" "}
              per saperne di più.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={decline}
              className="flex-1 md:flex-none px-5 py-2.5 text-xs font-medium text-muted-foreground border border-border/50 rounded-full hover:bg-muted transition-colors"
            >
              Rifiuta
            </button>
            <button
              onClick={accept}
              className="flex-1 md:flex-none px-5 py-2.5 text-xs font-semibold bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
            >
              Accetta tutti
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
