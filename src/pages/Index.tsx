import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { PhotoBooth } from "@/components/PhotoBooth";
import { Music } from "@/components/Music";
import { Social } from "@/components/Social";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Story />
      <About />
      <Services />
      <PhotoBooth />
      <Music />
      <Social />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
