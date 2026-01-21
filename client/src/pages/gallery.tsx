import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";

// Existing images imported from various parts of the project
import acharyaImg from "@assets/acharya_1768671806078.jpg";
import hhImg from "@assets/HH-Jayendra-Saraswathi-Swamiji_1768671806077.jpg";
import asImg from "@assets/AS_1768738817683.jpg";
import seventyImg from "@assets/70_1768742815509.jpg";
import seventyOneImg from "@assets/71_1768738842433.webp";
import gopuramImg from "@assets/Shrimatam_Gopuram_1768739079397.webp";
import mahaPeriyavaImg from "@assets/kanchi-maha-periyava_8fb06457-0992-4c44-8818-62d49dd13efc_800_1768741594540.webp";
import logoImg from "@assets/GridArt_20260119_192703350_1768841338839.png";
import hhJayendraImg from "@assets/1374748101_jayendra_saraswati_swamigal_1768742042462.jpg";
import headerImg from "@assets/FB_IMG_1768808289933~2_1768808606506.jpg";
import sageImg from "@assets/Kanchi_shankaracharyas_1768738006479.jpg";

const GALLERY_IMAGES = [
  {
    url: mahaPeriyavaImg,
    title: "Kanchi Maha Periyava",
    category: "Founders"
  },
  {
    url: sageImg,
    title: "Kanchi Shankaracharyas",
    category: "Spiritual Lineage"
  },
  {
    url: headerImg,
    title: "Veda Rakshana Nidhi Trust",
    category: "Activities"
  },
  {
    url: seventyImg,
    title: "70th Shankaracharya",
    category: "Acharyas"
  },
  {
    url: seventyOneImg,
    title: "71st Shankaracharya",
    category: "Acharyas"
  },
  {
    url: gopuramImg,
    title: "Shrimatam Gopuram",
    category: "Temple"
  },
  {
    url: asImg,
    title: "Adi Shankara",
    category: "History"
  },
  {
    url: hhJayendraImg,
    title: "HH Jayendra Saraswathi",
    category: "Acharyas"
  },
  {
    url: acharyaImg,
    title: "Sri Kanchi Acharyas",
    category: "Spiritual"
  }
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-48 pb-20">
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
              A visual journey through our heritage, activities, and the sacred lineage of Kanchi Kamakoti Peetham.
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
                      className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
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
