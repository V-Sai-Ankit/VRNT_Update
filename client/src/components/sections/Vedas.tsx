import { useState } from "react";
import { Helmet } from "@/lib/seo";

interface Article {
  id: string;
  icon: string;
  title: string;
  quote: string;
  short: string;
  extended: string[];
  image?: { src: string; alt: string };
}

const ARTICLES: Article[] = [
  {
    id: "about",
    icon: "📙",
    title: "About the Vedas",
    quote: `"The Vedas form the bedrock of Bharatiya Culture and Civilization. They are ANAADHI (timeless) and APAOURESHYA (divine)."`,
    short:
      "The Vedas (Sabda-Brahman) are co-existent with God and the Universe, forming the bedrock of Bharatiya Culture.",
    extended: [
      "The Vedas (Sabda-Brahman) are co-existent with God and the Universe. At the beginning of the current Sveta-Varaha-Kalpa, (the present span of the Universe), about 6 million years ago, countless, innumerable Vedas (Ananthaha) were divined by Rishis.",
      "The knowledge that makes known what are supersensory is referred to as the Veda. From time immemorial, the descendants of rishis preserved the Veda without the aid of a book, through oral tradition (Sruti).",
    ],
    image: { src: "/images/periyavar.webp", alt: "The Sage of Kanchi" },
  },
  {
    id: "rakshanam",
    icon: "🛡️",
    title: "Veda Rakshanam",
    quote:
      "Vedo Vrikshaha Tasya Moolam hi Vipraha Angas sakhaha Dharma Karmani Patram Tasmaan Moolo Yatnatho Rakshaneeya Chinne Moolae Naiva Sakha na Vrikshaha",
    short: "The Vedas are conceived as a tree (Veda Vriksha) whose roots must be watered to arrest its decay.",
    extended: [
      "\"The Vedas\" is a Vriksha (Tree), whose roots are the Vipras (Brahmins), the repository of the Vedas. The six Angas, the auxiliary sciences — Siksha (phonetics), Vyakaranam (grammar), Chandas (metre), Niruktha (etymology of words), Jyothisha (Vedanga Jyotisha) and Kalpa-Sutra (texts dealing with the procedure for the performance of srouta and smartha karmas) — are the branches. The Karmanushtanam and the Dharmic way of life are the leaves.",
      "All possible efforts, therefore, should be taken to protect and preserve the roots — i.e., give all possible support to the repository of the Vedas — as, once the roots decay, there will be neither the tree nor the branches and leaves.",
      "The failure to preserve the Vedas has resulted in 1,121 sakhas (recensions) out of 1,131 that existed 5,000 years ago getting extinct. Verily, watering the roots only will arrest the decay of the tree and its branches.",
      "This Veda Rakshanam by the Grihastas is sought to be shown by offering the necessities of livelihood to the repositories of the Vedas — the Guru and the disciples.",
    ],
    image: { src: "/images/veda-vruksha-original-new.webp", alt: "Veda Vriksha — the Vedas illustrated as a tree" },
  },
  {
    id: "vyasa",
    icon: "📝",
    title: "What We Owe to Veda Vyasa",
    quote: '"Rishayo mantra-drashtaah" — The rishis are the seers of mantra.',
    short: "How Bhagavan Veda Vyasa classified the Vedas into four to save them from destruction in Kali Yuga.",
    extended: [
      "Vyasa is known as Veda-Vyasa. There were many Vedas. Before the commencement of Kali Yuga, and at the end of Dvapara Yuga, Bhagavan Vyasa classified the Vedas into four. He thought: \"In the yuga that is to commence, the life-span of people will be short; their memory-power will be weak; the super-normal powers of yoga will decrease; something should be done in order to save the Veda from utter destruction.\"",
      "Bright day is succeeded by dark night; rainy season is followed by severe summer. So also, if at one time the Veda flourishes, at another time it is found to be on the decline. At that time, the Veda should be protected.",
      "In rural areas, when nights are long and dark, there could be cases of theft — but if ten people keep watch by going round the village, cases of theft become fewer. Similarly, in the Kali Yuga that was about to commence, if the entire Veda was not to be lost, at least four people, if not all, might each save a part of it. Thus thought Vyasa, and classified the Veda into four: Rig, Yajur, Sama, and Atharvana.",
      "The entire Veda is full of mantras. If the mantras are repeated with great restraint and purity, good will rebound to the world. There are rules regarding the time when the Veda should be recited. One should not read from a book — Veda is Sruti, what is heard; one should hear it and utter it correctly.",
      "After teaching his four disciples the Veda, Vyasa wrote the eighteen Puranas and the Mahabharata, embodying in them the essence of the Vedas, so that all people might be benefited. He then wrote the Brahma-sutra, expounding the nature of Brahman, the supreme reality. Another name of Vyasa is Badarayana.",
      "For our Vedas, Sutras, and Puranas, the root is Vyasa. Let us honour him, let us not forget the Veda, and let us unite in doing our allotted work. It is Veda-Vyasa who has enabled the Veda to survive through such a long stretch of time. We should honour him — that is our duty.",
    ],
  },
];

const SOURCE_NOTE =
  "Courtesy: Vanati Publications, Madras — a free translation from the compiled speeches of His Holiness Kanchi Paramacharyal.";

export default function VedasPage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [fullArticleId, setFullArticleId] = useState<string | null>(null);

  const activeArticle = fullArticleId ? ARTICLES.find((a) => a.id === fullArticleId) : null;

  if (activeArticle) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <Helmet title={activeArticle.title} description={activeArticle.short} path={`/vedas`} />
        <button
          onClick={() => setFullArticleId(null)}
          className="mb-6 inline-flex min-h-9 items-center gap-2 font-sans text-sm font-bold text-primary hover:underline"
        >
          ← Back to the Vedas
        </button>

        <article className="rounded-xl border border-border bg-surface p-6 shadow-soft sm:p-10">
          <div className="mb-6 flex items-center gap-4 border-b border-border pb-4">
            <span className="text-4xl" aria-hidden="true">{activeArticle.icon}</span>
            <h1 className="font-serif text-2xl font-bold text-primary sm:text-3xl">{activeArticle.title}</h1>
          </div>

          {activeArticle.image && (
            <img
              src={activeArticle.image.src}
              alt={activeArticle.image.alt}
              loading="lazy"
              className="mx-auto mb-6 max-h-96 w-full max-w-md rounded-lg border border-border object-contain"
            />
          )}

          <blockquote className="mb-6 border-l-4 border-accent bg-accent/10 py-3 pl-4 font-serif text-lg italic text-foreground">
            {activeArticle.quote}
          </blockquote>

          <div className="space-y-4 text-base leading-relaxed text-foreground/90">
            {activeArticle.extended.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {activeArticle.id === "vyasa" && (
            <div className="mt-10 flex flex-col items-center gap-2 border-t border-border pt-6 text-center">
              <p className="font-serif text-sm font-bold tracking-[0.2em] text-primary">OM TAT SAT</p>
              <p className="max-w-lg text-xs italic text-muted-foreground">{SOURCE_NOTE}</p>
            </div>
          )}
        </article>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <Helmet
        title="The Vedas"
        description="Explore the timeless wisdom of the Vedas and the Trust's mission of Veda Rakshanam — preserving the eternal Vedic heritage."
      />
      <div className="mb-8 text-center">
        <h1 className="font-serif text-3xl font-bold text-primary sm:text-4xl">The Holy Vedas</h1>
        <p className="mt-3 text-muted-foreground">
          Explore the timeless wisdom and the sacred mission of preserving the eternal Vedic heritage.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {ARTICLES.map((article) => {
          const isOpen = openId === article.id;
          return (
            <div key={article.id} className="overflow-hidden rounded-xl border border-border bg-surface">
              <button
                onClick={() => setOpenId(isOpen ? null : article.id)}
                aria-expanded={isOpen}
                className="flex w-full min-h-14 items-center justify-between gap-4 p-5 text-left hover:bg-muted"
              >
                <div className="flex items-center gap-4">
                  <div className="shrink-0 rounded-lg border border-border bg-background p-2.5 text-2xl">
                    {article.icon}
                  </div>
                  <div>
                    <h2 className="font-serif text-lg font-bold text-primary sm:text-xl">{article.title}</h2>
                    <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">{article.short}</p>
                  </div>
                </div>
                <span className={`shrink-0 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden="true">
                  ▼
                </span>
              </button>

              {isOpen && (
                <div className="flex flex-col gap-4 border-t border-border p-6">
                  <blockquote className="border-l-4 border-primary bg-primary/5 py-2 pl-4 italic text-foreground/90">
                    {article.quote}
                  </blockquote>
                  <p className="leading-relaxed text-foreground/90">{article.extended[0]}</p>
                  <button
                    onClick={() => setFullArticleId(article.id)}
                    className="w-max font-sans text-sm font-bold text-primary hover:underline"
                  >
                    Read full article →
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
