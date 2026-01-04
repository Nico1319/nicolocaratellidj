import { Layout } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { useScrollAnimation, appleRevealStyles, appleSlideStyles } from "@/hooks/useScrollAnimation";
import { Camera, Video, Heart } from "lucide-react";
import { Contact } from "@/components/Contact";
import { PhotoBooth } from "@/components/PhotoBooth";
import fotografoEventiImage from "@/assets/fotografo-eventi.jpg";

const services = [
  {
    icon: Camera,
    title: "Fotografo Professionale",
    description: "Catturare i momenti più autentici e spontanei del tuo evento è un'arte. Il servizio fotografico professionale documenta ogni istante con occhio artistico e attenzione ai dettagli, dalle risate genuine ai momenti più emozionanti, creando un racconto visivo che potrai rivivere per sempre.",
    features: [
      "Reportage completo dell'evento",
      "Ritratti professionali ospiti",
      "Post-produzione professionale",
      "Galleria online privata",
      "File ad alta risoluzione",
    ],
    image: fotografoEventiImage,
    color: "text-destructive",
  },
  {
    icon: Video,
    title: "Video Maker",
    description: "Rivivere le emozioni del tuo evento attraverso un aftermovie cinematografico in 4K. Riprese professionali con droni e gimbal, montaggio dinamico e una colonna sonora che esalta ogni momento. Un film emozionale che racconta la storia della tua serata nel modo più coinvolgente possibile.",
    features: [
      "Riprese professionali in 4K",
      "Drone per riprese aeree",
      "Montaggio cinematografico",
      "Aftermovie emozionale",
      "Consegna digitale rapida",
    ],
    image: "/lovable-uploads/88501597-7366-457f-9d5c-1fbd0bde787f.jpg",
    color: "text-muted-foreground",
  },
];

const ServiziExtra = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.05 });

  return (
    <Layout
      title="Servizi Extra per Eventi: Photo Booth, Foto e Video | Nicolò Caratelli Roma"
      description="Servizi extra per eventi a Roma: Mirror Photo Booth interattivo, fotografo professionale e video maker 4K. Completa il tuo evento con ricordi indimenticabili."
      canonical="/servizi-extra"
    >
      <JsonLd
        schema={{
          type: "ProfessionalService",
          name: "Servizi Extra Eventi Roma - Photo Booth, Foto e Video",
          description: "Mirror Photo Booth interattivo, fotografo professionale e video maker 4K per eventi a Roma.",
          url: "https://nicolocaratellidj.it/servizi-extra",
          provider: {
            name: "Nicolò Caratelli",
            url: "https://nicolocaratellidj.it",
          },
          serviceType: "Event Photography and Video Services",
        }}
      />

      {/* Hero */}
      <section ref={heroRef} className="pt-32 pb-20 bg-background overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h1 className="sr-only">Servizi Extra per Eventi: Photo Booth, Foto e Video</h1>
          
          <div style={appleRevealStyles(heroVisible, 0)}>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
              Completa il Tuo Evento
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Servizi Extra
              <span className="block text-primary">Per Eventi Indimenticabili</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Oltre alla musica, offro servizi premium per rendere il tuo evento 
              davvero unico: photo booth interattivo, fotografia professionale 
              e video emozionali in 4K.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section ref={servicesRef} className="py-12 bg-background overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
                style={{
                  opacity: servicesVisible ? 1 : 0,
                  transform: servicesVisible ? "translateY(0)" : "translateY(60px)",
                  transition: `all 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${200 + index * 150}ms`,
                }}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className={`inline-flex items-center gap-2 ${service.color} text-sm mb-4`}>
                    <service.icon className="w-5 h-5" />
                    <span className="font-semibold uppercase tracking-wider">Servizio Premium</span>
                  </div>
                  {/* H2 for each service */}
                  <h2 className="text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-foreground">
                        <Heart className={`w-4 h-4 ${service.color}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-full hover:bg-primary/90 transition-all hover:scale-105"
                  >
                    Richiedi Info
                  </a>
                </div>
                
                <div className={`relative rounded-[40px] overflow-hidden shadow-2xl ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <img
                    src={service.image}
                    alt={`${service.title} per eventi Roma`}
                    className="w-full h-full object-cover aspect-[4/5]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PhotoBooth Section */}
      <PhotoBooth />

      {/* Contact Section */}
      <Contact />

      {/* Hidden SEO Content - CSS hidden for crawler indexing */}
      <div 
        className="overflow-hidden" 
        style={{ maxHeight: 0, opacity: 0 }}
        aria-hidden="true"
      >
        <h3>Mirror Photo Booth Roma</h3>
        <p>Noleggio Mirror Photo Booth interattivo con stampa immediata per matrimoni, feste ed eventi aziendali.</p>
        
        <h3>Fotografo Eventi Roma</h3>
        <p>Servizio fotografico professionale per eventi, reportage e ritratti con post-produzione inclusa.</p>
        
        <h3>Video Maker Eventi Roma</h3>
        <p>
          Servizi extra per eventi a Roma: Mirror Photo Booth interattivo con stampa immediata, 
          fotografo professionista per reportage eventi, video maker per aftermovie 4K. 
          Photo booth Roma, fotografo eventi Roma, video eventi Roma, noleggio photo booth, 
          service audio luci Roma.
        </p>
      </div>
    </Layout>
  );
};

export default ServiziExtra;
