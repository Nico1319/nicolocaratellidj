import { Layout } from "@/components/Layout";
import { LogoDivider } from "@/components/LogoDivider";

const TermsOfService = () => {
  return (
    <Layout
      title="Termini di Servizio | Nicolò Caratelli DJ Roma"
      description="Termini e condizioni d'uso del sito di Nicolò Caratelli DJ. Leggi le condizioni per la prenotazione dei servizi DJ a Roma."
      canonical="/termini-di-servizio"
    >
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Termini di Servizio
          </h1>
          <p className="text-muted-foreground mb-8">Ultimo aggiornamento: Aprile 2026</p>

          <LogoDivider />

          <div className="prose prose-invert max-w-none space-y-8 mt-12">
            <div className="bg-card border border-border/30 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Premessa</h2>
              <p className="text-muted-foreground leading-relaxed">
                I presenti Termini di Servizio regolano l'utilizzo del sito web nicolocaratellidj.it e la
                prenotazione dei servizi DJ offerti da Nicolò Caratelli. Utilizzando il sito, l'utente accetta
                integralmente le presenti condizioni.
              </p>
            </div>

            <div className="bg-card border border-border/30 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Servizi Offerti</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nicolò Caratelli offre servizi professionali di intrattenimento musicale, tra cui:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>DJ set per matrimoni e cerimonie</li>
                <li>Musica per lounge bar, aperitivi e ristoranti</li>
                <li>Intrattenimento per aprés-ski e winter party</li>
                <li>DJ set per inaugurazioni commerciali</li>
                <li>Party privati ed eventi esclusivi</li>
                <li>Servizi extra: karaoke, photobooth, service audio-luci</li>
              </ul>
            </div>

            <div className="bg-card border border-border/30 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Preventivi e Prenotazioni</h2>
              <p className="text-muted-foreground leading-relaxed">
                Tutti i preventivi sono gratuiti e non vincolanti. La prenotazione è confermata solo dopo
                l'accettazione scritta del preventivo e il versamento dell'eventuale acconto concordato. I prezzi
                possono variare in base alla tipologia di evento, alla durata, alla location e ai servizi
                aggiuntivi richiesti.
              </p>
            </div>

            <div className="bg-card border border-border/30 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Cancellazioni e Rimborsi</h2>
              <p className="text-muted-foreground leading-relaxed">
                In caso di cancellazione da parte del cliente, si applicano le seguenti condizioni: cancellazione
                oltre 30 giorni prima dell'evento con rimborso totale dell'acconto; cancellazione tra 15 e 30
                giorni con rimborso del 50% dell'acconto; cancellazione sotto i 15 giorni senza rimborso
                dell'acconto. In caso di annullamento per cause di forza maggiore, verrà concordata una nuova
                data o il rimborso integrale.
              </p>
            </div>

            <div className="bg-card border border-border/30 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Proprietà Intellettuale</h2>
              <p className="text-muted-foreground leading-relaxed">
                Tutti i contenuti del sito (testi, immagini, loghi, audio, video) sono di proprietà esclusiva di
                Nicolò Caratelli o dei rispettivi titolari e sono protetti dalle leggi sul diritto d'autore. È
                vietata qualsiasi riproduzione, distribuzione o utilizzo non autorizzato.
              </p>
            </div>

            <div className="bg-card border border-border/30 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Limitazione di Responsabilità</h2>
              <p className="text-muted-foreground leading-relaxed">
                Il sito viene fornito "così com'è". Nicolò Caratelli non è responsabile per eventuali
                interruzioni del servizio, errori tecnici o danni derivanti dall'utilizzo del sito. I contenuti
                embedded da piattaforme terze (YouTube, SoundCloud) sono soggetti ai termini delle rispettive
                piattaforme.
              </p>
            </div>

            <div className="bg-card border border-border/30 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Legge Applicabile</h2>
              <p className="text-muted-foreground leading-relaxed">
                I presenti Termini sono regolati dalla legge italiana. Per qualsiasi controversia sarà competente
                il Foro di Roma. Per domande o chiarimenti:{" "}
                <a href="mailto:djnicolo.caratelli@libero.it" className="text-primary hover:underline">
                  djnicolo.caratelli@libero.it
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsOfService;
