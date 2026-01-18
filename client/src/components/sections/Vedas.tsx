import { motion } from "framer-motion";
import { Book, Shield, Scroll } from "lucide-react";
import { Link } from "wouter";

export function Vedas() {
  const sections = [
    {
      title: "About the Vedas",
      description: "The Vedas (Sabda-Brahman) are co-existent with God and the Universe, forming the bedrock of Bharatiya Culture.",
      icon: Book,
      href: "/vedas/about",
      color: "text-primary"
    },
    {
      title: "Veda Rakshanam",
      description: "The Vedas are conceived as a tree (Veda Vriksha) whose roots must be watered to arrest its decay.",
      icon: Shield,
      href: "/vedas/rakshanam",
      color: "text-secondary"
    },
    {
      title: "Veda Vyasa",
      description: "How Bhagavan Veda Vyasa classified the Vedas into four to save them from destruction in Kali Yuga.",
      icon: Scroll,
      href: "/vedas/vyasa",
      color: "text-accent"
    }
  ];

  return (
    <section id="vedas" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-secondary mb-4">The Holy Vedas</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card p-8 rounded-2xl shadow-sm border border-border hover:shadow-xl transition-all group"
            >
              <section.icon className={`w-12 h-12 ${section.color} mb-6 group-hover:scale-110 transition-transform`} />
              <h3 className="font-display text-2xl font-bold mb-4">{section.title}</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {section.description}
              </p>
              <Link href={section.href}>
                <a className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all">
                  Read More <span className="ml-2">→</span>
                </a>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
