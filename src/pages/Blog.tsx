import { useState } from "react";
import { ChevronDown, ArrowRight, Calendar, Clock, Music, Sparkles, Users } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useScrollAnimation, appleRevealStyles, appleSlideStyles, apple3DStyles } from "@/hooks/useScrollAnimation";

const articles = [
  {
    id: 1,
    icon: Music,
    category: "Matrimoni",
    title: "Come scegliere il DJ perfetto per il tuo matrimonio a Roma: Guida 2024",
    excerpt: "Scopri i criteri fondamentali per selezionare il DJ che renderà il tuo giorno speciale indimenticabile.",
    readTime: "8 min",
    date: "15 Dicembre 2024",
    content: `Il matrimonio è uno dei giorni più importanti della vita e la musica gioca un ruolo fondamentale nel creare l'atmosfera perfetta. A Roma, città dall'incredibile patrimonio culturale, scegliere il DJ giusto significa trovare qualcuno che sappia bilanciare tradizione e modernità.

**1. Esperienza specifica nei matrimoni**
Non tutti i DJ sono uguali. Un professionista esperto in matrimoni sa gestire i tempi della cerimonia, dal primo ballo degli sposi fino al taglio della torta. Chiedi sempre un portfolio di eventi simili al tuo.

**2. Versatilità musicale**
Il tuo evento avrà ospiti di tutte le età: dai nonni ai cugini adolescenti. Il DJ ideale deve saper passare da Sinatra ai successi del momento senza stonature, mantenendo la pista sempre piena.

**3. Attrezzatura professionale**
Impianto audio di qualità, luci d'atmosfera e un backup per ogni evenienza sono essenziali. Un DJ professionista arriva con tutto il necessario, evitandoti brutte sorprese.

**4. Sopralluogo della location**
Le ville romane, i casali della campagna laziale e i rooftop con vista sui Fori hanno esigenze acustiche diverse. Un buon DJ effettuerà sempre un sopralluogo preventivo.

**5. Gestione della scaletta**
Collabora con il DJ per definire momenti chiave: ingresso sposi, primo ballo, lancio del bouquet. La musica deve accompagnare ogni emozione.

**Consiglio finale:** Incontra sempre il DJ di persona prima di firmare il contratto. La sintonia personale è fondamentale per comunicare i tuoi desideri e fidarti di lui nel giorno più importante.`,
  },
  {
    id: 2,
    icon: Sparkles,
    category: "Business",
    title: "Lounge Bar e Aperitivi: perché il sound design aumenta il fatturato del tuo locale",
    excerpt: "Il segreto dei locali di successo? Una colonna sonora studiata che invoglia i clienti a restare (e spendere) di più.",
    readTime: "6 min",
    date: "10 Dicembre 2024",
    content: `Nel mondo dell'hospitality, ogni dettaglio conta. Ma c'è un elemento spesso sottovalutato che può fare la differenza tra un locale mediocre e uno di successo: il sound design.

**L'effetto della musica sul comportamento del cliente**
Studi scientifici dimostrano che la musica influenza direttamente le decisioni d'acquisto. Un tempo lento (60-80 BPM) durante l'aperitivo invita a rilassarsi e ordinare un secondo drink. Ritmi più veloci durante il picco serale aumentano il turnover dei tavoli.

**La playlist non è casuale**
I lounge bar di successo a Roma non mettono semplicemente Spotify in shuffle. Costruiscono playlist studiate per:
- **Ore 18-20:** Deep house morbida, jazz elettronico. Il cliente si rilassa dopo il lavoro.
- **Ore 20-22:** Funk, soul, ritmi più incalzanti. L'energia sale, i cocktail scorrono.
- **Ore 22+:** House progressiva, creando un'atmosfera da pre-serata.

**Il volume giusto al momento giusto**
Troppo alto e le conversazioni diventano impossibili. Troppo basso e l'atmosfera svanisce. Un DJ professionista regola costantemente i livelli in base all'affollamento e al momento della serata.

**ROI misurabile**
I locali che investono in un sound design professionale riportano:
- +15-20% di permanenza media dei clienti
- +25% di scontrino medio durante l'happy hour
- Aumento delle recensioni positive relative all'"atmosfera"

**Collaborare con un DJ resident**
Avere un DJ di riferimento che conosca l'identità del tuo locale garantisce coerenza. Non serve ogni sera: bastano le serate chiave (venerdì, sabato, eventi speciali) per posizionarti come punto di riferimento nella nightlife romana.`,
  },
  {
    id: 3,
    icon: Users,
    category: "Eventi Privati",
    title: "Feste di 18 anni: le 5 tendenze musicali che non possono mancare quest'anno",
    excerpt: "Dalla trap italiana ai remix virali di TikTok: ecco cosa vogliono davvero i giovani del 2024.",
    readTime: "5 min",
    date: "5 Dicembre 2024",
    content: `Il diciottesimo compleanno segna un traguardo importante e la festa deve essere all'altezza. Ma quali sono le tendenze musicali che nel 2024 fanno impazzire i giovani romani?

**1. Trap e Rap Italiano**
Sfera Ebbasta, Geolier, Tedua, Anna: la scena italiana domina le classifiche. Un DJ che ignora questi artisti perde il 70% della pista. Ma attenzione: i gusti cambiano velocemente, quindi è fondamentale restare aggiornati sulle nuove uscite.

**2. I remix virali di TikTok**
Quella canzone che senti in ogni video? Deve essere nella tua playlist. Da "Made You Look" di Meghan Trainor alle hit del momento, i remix che spopolano sui social sono garanzia di successo.

**3. Nostalgia anni 2000-2010**
Sì, anche i diciottenni hanno nostalgia! Gigi D'Agostino, Eiffel 65, ma anche hit pop come "Toxic" di Britney o i Black Eyed Peas. Questi classici creano momenti di coro collettivo.

**4. Latin e Reggaeton**
Bad Bunny, J Balvin, Rosalía. Il ritmo latino continua a dominare le feste. Un buon DJ deve saper dosare questi brani per mantenere alta l'energia senza saturare.

**5. EDM e Drop epici**
Per i momenti clou della serata – taglio torta, entrata del festeggiato – niente batte un drop ben piazzato. Martin Garrix, David Guetta, ma anche producer emergenti: l'importante è creare quel momento "wow".

**Il segreto del DJ per i 18 anni**
Parla con il festeggiato PRIMA dell'evento. Chiedi le sue canzoni preferite, gli artisti che ama, ma anche quelli che odia. Personalizzare la serata è ciò che distingue una festa memorabile da una banale.`,
  },
];

const faqs = [
  {
    question: "Quanto tempo prima devo prenotare il DJ per il mio evento?",
    answer: "Per eventi importanti come matrimoni, consiglio di prenotare almeno 6-8 mesi in anticipo, specialmente per i mesi estivi e i weekend. Per feste private come compleanni o lauree, 2-3 mesi sono generalmente sufficienti. Tuttavia, prima prenoti, maggiore sarà la possibilità di assicurarti la data desiderata.",
  },
  {
    question: "Ti occupi tu dell'attrezzatura audio e luci?",
    answer: "Assolutamente sì. Arrivo sempre con il mio setup professionale completo: consolle, casse, subwoofer, microfoni e un sistema luci base. Per eventi più grandi o location particolari, posso coordinare service audio-luci esterni di mia fiducia, garantendo sempre la massima qualità. Il tutto è incluso nel preventivo che ti fornirò.",
  },
  {
    question: "Come viene gestita la pratica SIAE?",
    answer: "Mi occupo personalmente di tutti gli adempimenti SIAE. Prima dell'evento compilerò il programma musicale e, dopo, invierò il borderò con le tracce effettivamente suonate. I costi SIAE variano in base alla tipologia di evento (privato/pubblico) e vengono sempre comunicati in anticipo nel preventivo.",
  },
  {
    question: "È possibile richiedere una playlist personalizzata?",
    answer: "Certamente! Anzi, lo incoraggio. Prima di ogni evento organizzo una call o un incontro per capire i tuoi gusti musicali, le canzoni del cuore e i momenti chiave della serata. Puoi inviarmi una lista di brani must-have e anche una lista di canzoni da evitare assolutamente. L'obiettivo è che la colonna sonora rispecchi al 100% la tua personalità.",
  },
  {
    question: "Fai anche eventi fuori Roma?",
    answer: "Sì, lavoro in tutta Italia. Ho suonato in location splendide in Toscana, Umbria, Costiera Amalfitana e anche al Nord. Per eventi fuori Roma, il preventivo includerà le spese di trasferta (viaggio, eventuale pernottamento). Contattami con i dettagli della location e ti fornirò un preventivo personalizzato.",
  },
];

const Blog = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const { ref: articlesRef, isVisible: articlesVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 px-6 overflow-hidden">
        <div className="container mx-auto max-w-5xl text-center">
          <span
            className="inline-block text-sm font-medium text-primary mb-6 tracking-widest uppercase"
            style={appleRevealStyles(heroVisible, 0)}
          >
            Blog & Risorse
          </span>
          <h1
            className="text-display font-bold mb-8"
            style={appleRevealStyles(heroVisible, 100)}
          >
            <span className="text-gradient">Insights</span>
            <span className="text-foreground"> & </span>
            <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Vibes
            </span>
          </h1>
          <p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            style={appleRevealStyles(heroVisible, 200)}
          >
            Guide, consigli e tendenze dal mondo degli eventi musicali. 
            Tutto quello che devi sapere per rendere il tuo evento indimenticabile.
          </p>
        </div>
      </section>

      {/* Articles Section */}
      <section ref={articlesRef} className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article
                key={article.id}
                className="glass-card rounded-3xl overflow-hidden group"
                style={apple3DStyles(articlesVisible, index * 150)}
              >
                {/* Card Header */}
                <div className="p-8 pb-0">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-xl bg-primary/10">
                      <article.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {article.category}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground/70">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                </div>

                {/* Expanded Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    expandedArticle === article.id ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-8 pt-6 border-t border-border/30 mt-6">
                    <div className="prose prose-invert prose-sm max-w-none">
                      {article.content.split("\n\n").map((paragraph, i) => (
                        <p key={i} className="text-muted-foreground text-sm leading-relaxed mb-4 last:mb-0">
                          {paragraph.split("**").map((part, j) =>
                            j % 2 === 1 ? (
                              <strong key={j} className="text-foreground font-semibold">
                                {part}
                              </strong>
                            ) : (
                              part
                            )
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-8 pt-6">
                  <button
                    onClick={() => setExpandedArticle(expandedArticle === article.id ? null : article.id)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-all group/btn"
                  >
                    {expandedArticle === article.id ? "Chiudi articolo" : "Leggi tutto"}
                    <ArrowRight
                      className={`w-4 h-4 transition-transform duration-300 ${
                        expandedArticle === article.id ? "rotate-90" : "group-hover/btn:translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <span
              className="inline-block text-sm font-medium text-primary mb-4 tracking-widest uppercase"
              style={appleRevealStyles(faqVisible, 0)}
            >
              Supporto
            </span>
            <h2
              className="text-heading font-bold text-foreground"
              style={appleRevealStyles(faqVisible, 100)}
            >
              Domande Frequenti
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl overflow-hidden"
                style={appleSlideStyles(faqVisible, "left", index * 100)}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/30 transition-colors"
                >
                  <span className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    expandedFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Blog;
