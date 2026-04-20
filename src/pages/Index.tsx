import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoDivider } from "@/components/LogoDivider";
import { Story } from "@/components/Story";
import { About } from "@/components/About";
import { Services } from "@/components/Services";

import { Music } from "@/components/Music";
import { LatestRelease } from "@/components/LatestRelease";
import { Social } from "@/components/Social";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Nicolò Caratelli DJ Roma | Musica Matrimoni, Eventi & Club</title>
        <meta
          name="description"
          content="Nicolò Caratelli DJ – DJ professionista per 18esimi, feste private e eventi a Roma. Prenota il tuo DJ per un 18° compleanno indimenticabile."
        />
        <meta property="og:title" content="Nicolò Caratelli DJ Roma | Musica Matrimoni, Eventi & Club" />
        <meta property="og:description" content="DJ professionista a Roma per matrimoni, eventi, lounge bar e club." />
        <meta name="twitter:title" content="Nicolò Caratelli DJ Roma" />
        <meta name="twitter:description" content="DJ professionista a Roma per matrimoni, eventi, lounge bar e club." />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <LogoDivider />
        <Story />
        <About />
        <Services />
        
        <Music />
        <LatestRelease />
        <Social />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
};

export default Index;
