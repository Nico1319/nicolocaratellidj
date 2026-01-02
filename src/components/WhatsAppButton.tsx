import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const phoneNumber = "393920712401";
  const message = encodeURIComponent("Ciao Nicolò, vorrei informazioni per un evento");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {/* Tooltip animato */}
      <div className="bg-white text-gray-800 px-4 py-2 rounded-full shadow-lg text-sm font-medium animate-bounce-slow hidden sm:block">
        <span className="animate-pulse">💬</span> Chatta con noi!
      </div>
      
      {/* Pulsante WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#20BA5C] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse-slow"
        aria-label="Contattaci su WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
};

export { WhatsAppButton };
