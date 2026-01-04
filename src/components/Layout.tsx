import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  canonical?: string;
}

export function Layout({ children, title, description, canonical }: LayoutProps) {
  const baseUrl = "https://nicolocaratellidj.it";
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={fullCanonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={fullCanonical} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>
      <main className="min-h-screen bg-background">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
}
