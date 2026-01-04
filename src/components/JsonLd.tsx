import { Helmet } from "react-helmet-async";

interface PersonSchema {
  type: "Person";
  name: string;
  jobTitle: string;
  url: string;
  sameAs?: string[];
  description?: string;
}

interface ProfessionalServiceSchema {
  type: "ProfessionalService";
  name: string;
  description: string;
  url: string;
  provider: {
    name: string;
    url: string;
  };
  areaServed?: string;
  serviceType?: string;
}

interface LocalBusinessSchema {
  type: "LocalBusiness";
  name: string;
  description: string;
  url: string;
  telephone?: string;
  email?: string;
  address?: {
    city: string;
    country: string;
  };
}

type SchemaType = PersonSchema | ProfessionalServiceSchema | LocalBusinessSchema;

interface JsonLdProps {
  schema: SchemaType;
}

export function JsonLd({ schema }: JsonLdProps) {
  const generateSchema = () => {
    const baseUrl = "https://nicolocaratellidj.it";
    
    switch (schema.type) {
      case "Person":
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          name: schema.name,
          jobTitle: schema.jobTitle,
          url: schema.url,
          sameAs: schema.sameAs || [
            "https://www.instagram.com/nicolocaratellidj",
            "https://www.tiktok.com/@nicolocaratellidj",
            "https://soundcloud.com/nicolocaratellidj",
            "https://www.youtube.com/@nicolocaratellidj",
          ],
          description: schema.description,
        };
      
      case "ProfessionalService":
        return {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: schema.name,
          description: schema.description,
          url: schema.url,
          provider: {
            "@type": "Person",
            name: schema.provider.name,
            url: schema.provider.url,
          },
          areaServed: schema.areaServed || "Roma, Lazio, Italia",
          serviceType: schema.serviceType || "DJ Services",
        };
      
      case "LocalBusiness":
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": baseUrl,
          name: schema.name,
          description: schema.description,
          url: schema.url,
          telephone: schema.telephone || "+393920712401",
          email: schema.email || "djnicolo.caratelli@libero.it",
          address: {
            "@type": "PostalAddress",
            addressLocality: schema.address?.city || "Roma",
            addressCountry: schema.address?.country || "IT",
          },
          sameAs: [
            "https://www.instagram.com/nicolocaratellidj",
            "https://www.tiktok.com/@nicolocaratellidj",
            "https://soundcloud.com/nicolocaratellidj",
            "https://www.youtube.com/@nicolocaratellidj",
          ],
        };
      
      default:
        return null;
    }
  };

  const jsonLdData = generateSchema();

  if (!jsonLdData) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(jsonLdData)}
      </script>
    </Helmet>
  );
}
