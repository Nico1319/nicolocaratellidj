import { Layout } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { LogoDivider } from "@/components/LogoDivider";
import { useScrollAnimation, appleRevealStyles, appleSlideStyles } from "@/hooks/useScrollAnimation";
import { PartyPopper, Music, Sparkles, Users, Lightbulb, Heart } from "lucide-react";
import { Contact } from "@/components/Contact";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import partyPrivatiImage from "@/assets/party-privati.jpg";

const reasons = [
  { icon: Music, title: "Musica del Momento", description: "Trap, Reggaeton, Urban e hit di TikTok sempre aggiornate" },
  { icon: Lightbulb, title: "Light Show Pro", description: "Teste mobili, laser e effetti per atmosfera da club" },
  { icon: Users, title: "Esperienza Giovani", description: "So cosa fa ballare i ragazzi di oggi" },
  { icon: Sparkles, title: "Momenti Speciali", description: "Ingresso, taglio torta e dediche curati nei dettagli" },
  { icon: Heart, title: "Playlist Personalizzata", description: "I tuoi brani preferiti per rendere unica la festa" },
  { icon: PartyPopper, title: "Energia da Vero Party", description: "Mix professionali e animazione fino all'ultima canzone" },
];

const faqs = [
  {
    q: "Nicolò Caratelli è disponibile per 18esimi a Roma?",
    a: "Sì, Nicolò Caratelli è uno dei DJ per 18esimi a Roma più richiesti. Lavoro in tutta la Capitale e nel Lazio, sia in location private che in club, ville, ristoranti e sale eventi. Per verificare la disponibilità nella tua data ti basta inviarmi una richiesta dal form contatti o scrivermi su WhatsApp.",
  },
  {
    q: "Quanto costa un DJ per un 18esimo a Roma?",
    a: "Il costo di un DJ per feste di compleanno Roma varia in base a durata dell'evento, location, impianto audio/luci richiesto ed eventuali servizi extra come karaoke o fumi pesanti. Ogni 18esimo è diverso: per questo preferisco fornire un preventivo personalizzato e trasparente dopo una breve chiamata conoscitiva. Contattami per ricevere un'offerta su misura.",
  },
  {
    q: "Nicolò Caratelli DJ fa anche feste private e compleanni?",
    a: "Assolutamente sì. Oltre ai 18esimi, Nicolò Caratelli DJ eventi privati Roma copre feste di laurea, compleanni di ogni età, anniversari, party a tema e feste private esclusive in ville, attici e location di prestigio. Adatto playlist e setup al tipo di evento e al pubblico presente.",
  },
  {
    q: "Che musica suona Nicolò Caratelli per i 18esimi?",
    a: "Per i 18esimi suono il meglio delle classifiche internazionali e dei trend del momento: Trap italiana e USA, Reggaeton, Urban, Hip-Hop, Commerciale, EDM e remix esclusivi delle hit di TikTok. La playlist viene sempre concordata con te e con il festeggiato/a per riflettere i gusti musicali del gruppo, alternando i brani richiesti con i pezzi che fanno esplodere la pista.",
  },
  {
    q: "Come prenotare Nicolò Caratelli DJ per un evento privato a Roma?",
    a: "Prenotare è semplice: compila il form contatti in fondo alla pagina indicando data, location e tipo di evento, oppure scrivimi direttamente su WhatsApp. Ti risponderò entro poche ore con disponibilità e preventivo. Per i 18esimi e le feste private a Roma consiglio di prenotare con almeno 4-6 settimane di anticipo per assicurarti la data.",
  },
];

const Dj18esimiRoma = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.05 });
  const { ref: reasonsRef, isVisible: reasonsVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.05 });
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.05 });

  return (
    <Layout
      title="DJ per 18esimi a Roma | Nicolò Caratelli – Feste di Compleanno"
      description="Nicolò Caratelli DJ – Il miglior DJ per 18 anni a Roma. DJ per feste private, 18esimi e compleanni indimenticabili. Richiedi disponibilità e preventivo."
      canonical="/dj-18esimi-roma"
    >
      <JsonLd
        schema={{
          type: "ProfessionalService",
          name: "DJ per 18esimi Roma - Nicolò Caratelli",
          description: "DJ professionista per 18esimi, feste di compleanno e feste private a Roma. Uno dei migliori DJ per 18 anni a Roma.",
          url: "https://nicolocaratellidj.it/dj-18esimi-roma",
          provider: {
            name: "Nicolò Caratelli",
            url: "https://nicolocaratellidj.it",
          },
          serviceType: "DJ per 18esimi e Feste Private Roma",
        }}
      />

      {/* Hero */}
      <section ref={heroRef} className="pt-32 pb-20 bg-background overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div style={appleSlideStyles(heroVisible, "left", 0)}>
              <div className="inline-flex items-center gap-2 text-primary text-sm mb-4">
                <PartyPopper className="w-4 h-4" />
                <span>DJ per 18esimi a Roma</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Nicolò Caratelli DJ
                <span className="block text-primary">Il DJ per il tuo 18° Compleanno a Roma</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Trasforma il tuo diciottesimo in una serata leggendaria. DJ set professionale,
                light show, hit del momento e un'energia che non dimenticherai mai.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover:bg-primary/90 transition-all hover:scale-105"
              >
                Richiedi disponibilità
              </a>
            </div>
            <div
              className="relative rounded-[40px] overflow-hidden shadow-2xl"
              style={appleSlideStyles(heroVisible, "right", 200)}
            >
              <img
                src={partyPrivatiImage}
                alt="DJ per 18esimi a Roma - Nicolò Caratelli alla console"
                className="w-full h-full object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <LogoDivider />

      {/* Content - 500+ parole */}
      <section ref={contentRef} className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-6" style={appleRevealStyles(contentVisible, 0)}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Compiere 18 anni è uno di quei momenti che ricorderai per tutta la vita. Per renderlo
              davvero indimenticabile serve la persona giusta dietro la console: un{" "}
              <strong className="text-foreground">DJ per 18esimi a Roma</strong> che sappia leggere
              la pista, alternare i brani giusti al momento giusto e creare quell'atmosfera da club
              che trasforma una festa in un evento. Mi chiamo Nicolò Caratelli e da anni accompagno
              con la mia musica i 18esimi più belli della Capitale, in ville private, attici, ristoranti,
              location esclusive e club della città.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Il mio approccio come <strong className="text-foreground">DJ per feste di compleanno
              Roma</strong> parte sempre da un colloquio con te e con il festeggiato o la festeggiata.
              Voglio capire i vostri gusti musicali, gli artisti preferiti, le canzoni che non possono
              mancare e quelle assolutamente da evitare. Da qui costruisco una scaletta personalizzata
              che mescola Trap italiana e internazionale, Reggaeton, Urban, Hip-Hop, hit Commerciali
              ed EDM, con un occhio sempre attento ai trend di TikTok e alle uscite del momento.
              Niente CD pre-registrati: solo mix dal vivo, transizioni curate e quella sensibilità
              che fa la differenza tra un DJ qualunque e un professionista.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Come <strong className="text-foreground">Nicolò Caratelli DJ eventi privati Roma</strong>{" "}
              porto in ogni location un setup professionale: console di ultima generazione, impianto
              audio dimensionato sullo spazio e light show con teste mobili, fari LED, laser ed effetti
              speciali per dare alla tua festa il look di una vera discoteca. Posso integrare anche
              fumi pesanti, sparks freddi per l'ingresso o il taglio della torta, microfoni wireless
              per dediche e sorprese.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Cosa rende il mio lavoro quello del{" "}
              <strong className="text-foreground">miglior DJ per 18 anni Roma</strong>? La capacità
              di gestire ogni momento della serata: l'aperitivo con sottofondo lounge, il momento
              del taglio della torta con la canzone che ti emoziona, l'esplosione del party con i
              pezzi che fanno saltare tutti, fino al gran finale. Conosco i ritmi di una festa di
              18 anni e so come tenere alta l'energia senza mai annoiare gli invitati.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Lavoro come <strong className="text-foreground">DJ per feste private Roma</strong> in
              tutta la città e provincia: Centro, Parioli, EUR, Prati, Trastevere, Cassia, Aurelia,
              Castelli Romani, litorale e zone limitrofe. Mi adatto a ogni tipo di location, dalle
              ville con giardino agli attici panoramici, dai ristoranti agli spazi industriali
              riconvertiti per eventi. Se la tua location non ha un impianto, ci penso io.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Se stai cercando un DJ per il tuo 18esimo a Roma e vuoi una serata ricordata da tutti
              i tuoi amici, contattami per verificare disponibilità e ricevere un preventivo
              personalizzato. Bastano pochi minuti per iniziare a costruire insieme la festa che
              hai sempre sognato.
            </p>
          </div>
        </div>
      </section>

      <LogoDivider />

      {/* Why choose me - H2 */}
      <section ref={reasonsRef} className="py-24 bg-secondary overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16"
            style={appleRevealStyles(reasonsVisible, 0)}
          >
            Perché scegliere Nicolò Caratelli per il tuo 18esimo
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="glass-card rounded-2xl p-8"
                style={{
                  opacity: reasonsVisible ? 1 : 0,
                  transform: reasonsVisible ? "translateY(0)" : "translateY(40px)",
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${100 + index * 80}ms`,
                }}
              >
                <reason.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16" style={appleRevealStyles(reasonsVisible, 400)}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover:bg-primary/90 transition-all hover:scale-105"
            >
              Richiedi disponibilità
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqRef} className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16"
            style={appleRevealStyles(faqVisible, 0)}
          >
            Domande Frequenti
          </h2>

          <div style={appleRevealStyles(faqVisible, 150)}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-card rounded-2xl border-0 px-6"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline py-6">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* FAQ structured data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              }),
            }}
          />
        </div>
      </section>

      {/* Contact */}
      <Contact />
    </Layout>
  );
};

export default Dj18esimiRoma;
