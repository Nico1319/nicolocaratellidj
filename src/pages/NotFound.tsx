import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout
      title="404 - Pagina Non Trovata | Nicolò Caratelli DJ"
      description="La pagina che stai cercando non esiste. Torna alla homepage di Nicolò Caratelli DJ."
      canonical="/404"
    >
      <section className="pt-32 pb-20 bg-background min-h-[80vh] flex items-center">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          {/* 404 Number */}
          <div className="relative mb-8">
            <span className="text-[10rem] md:text-[14rem] font-bold text-foreground/5 leading-none select-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <Search className="w-16 h-16 md:w-24 md:h-24 text-primary/60" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pagina Non Trovata
          </h1>
          <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
            La pagina che stai cercando potrebbe essere stata spostata, rimossa o non è mai esistita.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-full hover:bg-primary/90 transition-all hover:scale-105"
            >
              <Home className="w-4 h-4" />
              Torna alla Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 border border-border/50 text-muted-foreground font-medium px-6 py-3 rounded-full hover:bg-muted hover:text-foreground transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Torna Indietro
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
