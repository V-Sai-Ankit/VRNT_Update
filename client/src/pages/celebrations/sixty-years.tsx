import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Award, Calendar, Users, MapPin, Star } from "lucide-react";

export default function CelebrationPage() {
  const highlights = [
    {
      title: "60 Years of Vedic Preservation",
      description: "Celebrating six decades of unwavering commitment to protecting and propagating the sacred Vedic heritage under the divine guidance of Kanchi Kamakoti Peetham.",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Diamond Jubilee Mahotsav",
      description: "A grand assembly of Vedic scholars, pandits, and devotees to commemorate the milestone of our journey in Veda Rakshanam.",
      icon: <Star className="w-8 h-8" />
    },
    {
      title: "Scholar Recognition",
      description: "Honoring distinguished Vedic scholars who have dedicated their lives to the oral tradition of Vedic chanting and education.",
      icon: <Users className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-48 md:pt-56 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-bold text-sm mb-6 uppercase tracking-widest"
            >
              Diamond Jubilee
            </motion.div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-secondary">
              VRNT 60th Year Celebration
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground font-serif leading-relaxed italic">
              Commemorating 60 Years of Divine Service to the Vedas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="font-display text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground font-serif leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="bg-secondary text-secondary-foreground rounded-3xl p-8 md:p-16 overflow-hidden relative shadow-2xl">
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
                  Shasti Aptha Purti Mahotsav
                </h2>
                <p className="text-lg text-secondary-foreground/80 font-serif leading-relaxed mb-8">
                  The Diamond Jubilee celebrations are a testament to the vision of His Holiness MahaPeriyava. Join us in this historic milestone as we reflect on our achievements and look forward to strengthening our mission for future generations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Calendar className="text-primary" />
                    <span>Grand Celebrations - 2024-2025</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="text-primary" />
                    <span>Chennai & Kanchipuram</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
                <h3 className="font-bold text-xl mb-4 text-white">Event Highlights</h3>
                <ul className="space-y-4 text-secondary-foreground/70 font-serif">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    Veda Parayanam by 100+ Scholars
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    Release of Commemorative Souvenir
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    Special Awards for Senior Pandits
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    Cultural Programs & Discourses
                  </li>
                </ul>
              </div>
            </div>
            {/* Background Texture/Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full -ml-32 -mb-32 blur-3xl opacity-50"></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
