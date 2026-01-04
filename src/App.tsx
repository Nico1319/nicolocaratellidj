import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import ChiSono from "./pages/ChiSono";
import WeddingDJ from "./pages/servizi/WeddingDJ";
import LoungeBar from "./pages/servizi/LoungeBar";
import ApresSki from "./pages/servizi/ApresSki";
import Inaugurazioni from "./pages/servizi/Inaugurazioni";
import PartyPrivati from "./pages/servizi/PartyPrivati";
import ServiziExtra from "./pages/ServiziExtra";
import ProduzioniMusicali from "./pages/ProduzioniMusicali";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/chi-sono" element={<ChiSono />} />
            <Route path="/servizi/wedding-dj" element={<WeddingDJ />} />
            <Route path="/servizi/lounge-bar-aperitivi" element={<LoungeBar />} />
            <Route path="/servizi/apres-ski-winter-party" element={<ApresSki />} />
            <Route path="/servizi/inaugurazioni-commerciali" element={<Inaugurazioni />} />
            <Route path="/servizi/party-privati-esclusivi" element={<PartyPrivati />} />
            <Route path="/servizi-extra" element={<ServiziExtra />} />
            <Route path="/produzioni-musicali" element={<ProduzioniMusicali />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
