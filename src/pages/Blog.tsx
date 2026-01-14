import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Layout } from "@/components/Layout";
import { BlogArticleCard } from "@/components/BlogArticleCard";
import { blogPosts } from "@/data/blogPosts";
import { useScrollAnimation, appleRevealStyles, appleSlideStyles, apple3DStyles } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "Quanto tempo prima devo prenotare il DJ per il mio evento?",
    answer: "Per eventi importanti come matrimoni, consiglio di prenotare almeno 6-8 mesi in anticipo, specialmente per i mesi estivi e i weekend. Per feste private come compleanni o lauree, 2-3 mesi sono generalmente sufficienti. Tuttavia, prima prenoti, maggiore sarà la possibilità di assicurarti la data desiderata.",
  },
  {
    question: "Ti occupi tu dell'attrezzatura audio e luci?",
    answer: "L'attrezzatura tecnica non sarà un tuo problema: fornirò io tutto il materiale necessario, configurato esattamente sulla base di quanto concordato nel preventivo. Dalla consolle all'impianto audio e luci, ogni dettaglio tecnico sarà definito in fase di pianificazione per adattarsi perfettamente alla location e alla tipologia di evento.",
  },
  {
    question: "Come viene gestita la pratica SIAE?",
    answer: "Per quanto riguarda la SIAE, la normativa prevede che il pagamento sia a carico del cliente.\nNon preoccuparti, però: non sarai solo. Ti fornirò tutto il supporto necessario per l'intera procedura. Sarò al tuo fianco per ogni chiarimento.",
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
  
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <Layout
      title="Blog DJ Roma | Guide e Consigli per Eventi Musicali - Nicolò Caratelli"
      description="Guide, consigli e tendenze dal mondo degli eventi musicali. Tutto quello che devi sapere per rendere il tuo evento indimenticabile."
      canonical="/blog"
    >
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
            {blogPosts.map((article, index) => (
              <BlogArticleCard
                key={article.id}
                article={article}
                index={index}
                isVisible={articlesVisible}
                animationStyle={apple3DStyles(articlesVisible, index * 150)}
              />
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
    </Layout>
  );
};

export default Blog;
