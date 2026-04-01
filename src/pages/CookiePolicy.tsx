import { Layout } from "@/components/Layout";
import { LogoDivider } from "@/components/LogoDivider";
import { Link } from "react-router-dom";

const CookiePolicy = () => {
  return (
    <Layout
      title="Cookie Policy | Nicolò Caratelli DJ Roma"
      description="Informativa sui cookie utilizzati sul sito di Nicolò Caratelli DJ. Scopri quali cookie utilizziamo e come gestirli."
      canonical="/cookie-policy"
    >
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Cookie Policy
          </h1>
          <p className="text-muted-foreground mb-8">Ultimo aggiornamento: Aprile 2026</p>

          <LogoDivider />

          <div className="prose prose-invert max-w-none space-y-8 mt-12">
            <div className="bg-card border border-border/30 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cosa sono i Cookie</h2>
              <p className="text-muted-foreground leading-relaxed">
                I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un
                sito web. Vengono utilizzati per migliorare l'esperienza di navigazione, ricordare le tue
                preferenze e raccogliere informazioni anonime sull'utilizzo del sito.
              </p>
            </div>

            <div className="bg-card border border-border/30 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cookie Tecnici (Necessari)</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Questi cookie sono essenziali per il corretto funzionamento del sito e non possono essere
                disattivati. Includono:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Cookie di sessione per mantenere la navigazione attiva</li>
                <li>Cookie per il salvataggio delle preferenze sui cookie</li>
                <li>Cookie di sicurezza per prevenire attacchi CSRF</li>
              </ul>
            </div>

            <div className="bg-card border border-border/30 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cookie Analitici</h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizziamo cookie analitici per comprendere come i visitatori interagiscono con il sito.
                Questi cookie raccolgono informazioni in forma anonima e aggregata, come il numero di visitatori,
                le pagine più visitate e il tempo trascorso sul sito. Vengono attivati solo previo tuo consenso.
              </p>
            </div>

            <div className="bg-card border border-border/30 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cookie di Terze Parti</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Il sito integra contenuti da piattaforme esterne che potrebbero installare propri cookie:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>YouTube</strong> — per la riproduzione di video incorporati</li>
                <li><strong>SoundCloud</strong> — per la riproduzione di tracce audio</li>
                <li><strong>Instagram</strong> — per la visualizzazione di contenuti social</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Ti consigliamo di consultare le rispettive informative sulla privacy di queste piattaforme.
              </p>
            </div>

            <div className="bg-card border border-border/30 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Come Gestire i Cookie</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Puoi gestire le tue preferenze sui cookie in qualsiasi momento:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Attraverso il banner di consenso presente sul sito</li>
                <li>Modificando le impostazioni del tuo browser</li>
                <li>Cancellando i cookie già memorizzati dal tuo dispositivo</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                La disattivazione di alcuni cookie potrebbe influire sulla funzionalità del sito.
              </p>
            </div>

            <div className="bg-card border border-border/30 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Maggiori Informazioni</h2>
              <p className="text-muted-foreground leading-relaxed">
                Per ulteriori informazioni sul trattamento dei tuoi dati, consulta la nostra{" "}
                <Link to="/privacy-policy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                . Per qualsiasi domanda, contattaci a{" "}
                <a href="mailto:djnicolo.caratelli@libero.it" className="text-primary hover:underline">
                  djnicolo.caratelli@libero.it
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CookiePolicy;
