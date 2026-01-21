import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";

const GALLERY_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    title: "Veda Pathashala",
    category: "Education"
  },
  {
    url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
    title: "Community Prayer",
    category: "Spiritual"
  },
  {
    url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94",
    title: "Cultural Event",
    category: "Celebration"
  },
  {
    url: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
    title: "Yoga Session",
    category: "Wellness"
  },
  {
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    title: "Tech in Tradition",
    category: "Modern"
  },
  {
    url: "https://images.unsplash.com/photo-1493612276216-ee3925520721",
    title: "Ancient Scripts",
    category: "Heritage"
  }
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-40 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Our Gallery
            </h1>
            <div className="h-1 w-20 bg-[#FFD700] mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A visual journey through our activities, celebrations, and the daily life at VRNT.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GALLERY_IMAGES.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  <CardContent className="p-0 relative">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <span className="text-[#FFD700] text-xs font-bold uppercase tracking-widest mb-1">
                        {item.category}
                      </span>
                      <h3 className="text-white font-serif text-xl font-bold">
                        {item.title}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
