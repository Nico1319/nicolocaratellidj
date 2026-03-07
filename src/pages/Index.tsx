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
import { JsonLd } from "@/components/JsonLd";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Nicolò Caratelli DJ Roma | Musica Matrimoni, Eventi & Club</title>
        <meta 
          name="description" 
          content="DJ professionista a Roma per matrimoni, eventi, lounge bar e club. Scopri i servizi di Nicolò Caratelli: musica, service audio luci, photo booth e produzioni." 
        />
        <link rel="canonical" href="https://nicolocaratellidj.it/" />
        <meta property="og:title" content="Nicolò Caratelli DJ Roma | Musica Matrimoni, Eventi & Club" />
        <meta property="og:description" content="DJ professionista a Roma per matrimoni, eventi, lounge bar e club." />
        <meta property="og:url" content="https://nicolocaratellidj.it/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Nicolò Caratelli DJ Roma" />
        <meta name="twitter:description" content="DJ professionista a Roma per matrimoni, eventi, lounge bar e club." />
      </Helmet>
      
      <JsonLd
        schema={{
          type: "LocalBusiness",
          name: "Nicolò Caratelli DJ",
          description: "DJ professionista a Roma specializzato in matrimoni, eventi privati, lounge bar e club. Servizi di musica, service audio luci e photo booth.",
          url: "https://nicolocaratellidj.it",
        }}
      />
      
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
