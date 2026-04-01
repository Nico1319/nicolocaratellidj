import { Layout } from "@/components/Layout";
import { LogoDivider } from "@/components/LogoDivider";

const PrivacyPolicy = () => {
  return (
    <Layout
      title="Privacy Policy | Nicolò Caratelli DJ Roma"
      description="Informativa sulla privacy di Nicolò Caratelli DJ. Scopri come trattiamo i tuoi dati personali nel rispetto del GDPR."
      canonical="/privacy-policy"
    >
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-8">Ultimo aggiornamento: Aprile 2026</p>

          <LogoDivider />

          <div className="prose prose-invert max-w-none space-y-8 mt-12">
            <div className="bg-card border border-border/30 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Titolare del Trattamento</h2>
              <p className="text-muted-foreground leading-relaxed">
                Il titolare del trattamento dei dati è Nicolò Caratelli, con sede operativa a Roma, Italia.
                Per qualsiasi richiesta relativa alla privacy è possibile contattarci all'indirizzo email:{" "}
                <a href="mailto:djnicolo.caratelli@libero.it" className="text-primary hover:underline">
                  djnicolo.caratelli@libero.it
                </a>
              </p>
            </div>

            <div className="bg-card border border-border/30 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Dati Raccolti</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I dati personali raccolti attraverso il sito web includono:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Dati identificativi (nome, cognome, email, telefono) forniti volontariamente tramite il modulo di contatto</li>
                <li>Dati di navigazione (indirizzo IP, browser, sistema operativo, pagine visitate) raccolti in forma anonima</li>
                <li>Cookie tecnici e, previo consenso, cookie di profilazione di terze parti</li>
              </ul>
            </div>

            <div className="bg-card border border-border/30 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Finalità del Trattamento</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I dati personali vengono trattati per le seguenti finalità:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Rispondere alle richieste di contatto e preventivo</li>
                <li>Gestire la prenotazione dei servizi DJ</li>
                <li>Migliorare l'esperienza di navigazione sul sito</li>
                <li>Adempiere ad obblighi di legge</li>
              </ul>
            </div>

            <div className="bg-card border border-border/30 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Base Giuridica</h2>
              <p className="text-muted-foreground leading-relaxed">
                Il trattamento dei dati si basa sul consenso dell'interessato (art. 6.1.a GDPR), sull'esecuzione di
                misure precontrattuali (art. 6.1.b GDPR) e sul legittimo interesse del titolare (art. 6.1.f GDPR)
                per quanto riguarda i dati di navigazione.
              </p>
            </div>

            <div className="bg-card border border-border/30 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Conservazione dei Dati</h2>
              <p className="text-muted-foreground leading-relaxed">
                I dati personali vengono conservati per il tempo strettamente necessario al raggiungimento delle
                finalità per cui sono stati raccolti e comunque non oltre 24 mesi dall'ultimo contatto, salvo
                obblighi di legge che ne richiedano una conservazione più lunga.
              </p>
            </div>

            <div className="bg-card border border-border/30 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Diritti dell'Interessato</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In conformità al GDPR (Regolamento UE 2016/679), l'utente ha il diritto di:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Accedere ai propri dati personali</li>
                <li>Richiedere la rettifica o la cancellazione dei dati</li>
                <li>Opporsi al trattamento o richiederne la limitazione</li>
                <li>Richiedere la portabilità dei dati</li>
                <li>Revocare il consenso in qualsiasi momento</li>
                <li>Proporre reclamo all'Autorità Garante per la protezione dei dati personali</li>
              </ul>
            </div>

            <div className="bg-card border border-border/30 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contatti</h2>
              <p className="text-muted-foreground leading-relaxed">
                Per esercitare i tuoi diritti o per qualsiasi domanda relativa al trattamento dei dati personali,
                puoi contattarci a:{" "}
                <a href="mailto:djnicolo.caratelli@libero.it" className="text-primary hover:underline">
                  djnicolo.caratelli@libero.it
                </a>{" "}
                oppure telefonicamente al{" "}
                <a href="tel:+393920712401" className="text-primary hover:underline">
                  +39 392 071 2401
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
