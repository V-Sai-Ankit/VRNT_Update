import { motion } from "framer-motion";
import { Book, Shield, Scroll } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function VedasPage() {
  const sections = [
    {
      id: "about",
      title: "About the Vedas",
      description: "The Vedas (Sabda-Brahman) are co-existent with God and the Universe, forming the bedrock of Bharatiya Culture.",
      icon: Book,
      content: (
        <div className="prose prose-slate max-w-none py-4">
          <div className="bg-primary/5 p-6 rounded-xl mb-6 border-l-4 border-primary italic font-serif">
            "The Vedas form the bedrock of Bharatiya Culture and Civilization. They are ANAADHI (timeless) and APAOURESHYA (divine)."
          </div>
          <p>The Vedas (Sabda-Brahman) are co-existent with God and the Universe. At the beginning of the current Sveta-Varaha-Kalpa, (the present span of the Universe), about 6 million years ago, countless, innumerable Vedas (Ananthaha) were divined by Rishis.</p>
          <p>The knowledge that makes known what are supersensory is referred to as the Veda. From time immemorial, the descendants of rishis preserved the Veda without the aid of a book, through oral tradition (Sruti).</p>
          <Link href="/vedas/about">
            <a className="inline-flex items-center text-primary font-bold mt-4 hover:underline">View Full Article →</a>
          </Link>
        </div>
      ),
      color: "text-primary"
    },
    {
      id: "rakshanam",
      title: "Veda Rakshanam",
      description: "The Vedas are conceived as a tree (Veda Vriksha) whose roots must be watered to arrest its decay.",
      icon: Shield,
      content: (
        <div className="prose prose-slate max-w-none py-4">
          <div className="bg-secondary/5 p-6 rounded-xl mb-6 border-l-4 border-secondary font-serif">
            "Vedo Vrikshaha Tasya Moolam hi Vip raha A ngas sakhaha Dharma Karmani Patram Tasrnan Moolo Yatnatho Rakshaneeya Chjnne Moolae Naiva Sakha na Vrikshaha"
          </div>
          <p>
            "The Vedas" is a Vriksha (Tree), whose roots are the Vipras (Brahmins), the repository of the Vedas. 
            The six Angas, the auxiliary sciences (Siksha, Vyakaranam, Chandas, Niruktha, Jyothisha, and Kalpa-Sutra), are the branches. 
            The Karmanushtanam and the Dharmic way of life are the leaves.
          </p>
          <p className="font-bold">All possible efforts, therefore, should be taken to protect and preserve the ROOTS as, once the roots decay, there will be neither the tree nor the branches and leaves.</p>
          <Link href="/vedas/rakshanam">
            <a className="inline-flex items-center text-secondary font-bold mt-4 hover:underline">View Full Article →</a>
          </Link>
        </div>
      ),
      color: "text-secondary"
    },
    {
      id: "vyasa",
      title: "Veda Vyasa",
      description: "How Bhagavan Veda Vyasa classified the Vedas into four to save them from destruction in Kali Yuga.",
      icon: Scroll,
      content: (
        <div className="prose prose-slate max-w-none py-4">
          <p>Vyasa is known as Veda-Vyasa. Before the commencement of Kali yuga, and at the end of Dvapara-yuga, Bhagavan Vyasa classified the Vedas into four.</p>
          <div className="bg-accent/10 p-6 rounded-xl mb-6 border-l-4 border-accent italic">
            "In the yuga that is to commence, the life-span of people will be short; their memory-power will be weak; something should be done in order to save the Veda from utter destruction."
          </div>
          <p>He classified the Veda into four: Rig, Yajur, Sama, and Atharvana. He taught these to his four disciples: Paila, Vaisampayana, Jaimini, and Sumantu.</p>
          <Link href="/vedas/vyasa">
            <a className="inline-flex items-center text-accent font-bold mt-4 hover:underline">View Full Article →</a>
          </Link>
        </div>
      ),
      color: "text-accent"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-[280px] md:pt-[340px] lg:pt-[240px] pb-24 bg-muted/30 min-h-[calc(100vh-80px)]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-secondary mb-4">The Holy Vedas</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore the timeless wisdom and the sacred mission of  preserving the eternal  Vedic heritage.
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {sections.map((section) => (
              <AccordionItem 
                key={section.id} 
                value={section.id}
                className="bg-card border rounded-xl px-6 shadow-sm overflow-hidden"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className={`p-3 rounded-full bg-muted ${section.color}`}>
                      <section.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground">{section.title}</h3>
                      <p className="text-sm text-muted-foreground font-normal line-clamp-1">{section.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {section.content}
                  </motion.div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
      <Footer />
    </div>
  );
}
