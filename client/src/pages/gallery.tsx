import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Existing images imported from various parts of the project
import acharyaImg from "@assets/acharya_1768671806078.jpg";
import hhImg from "@assets/HH-Jayendra-Saraswathi-Swamiji_1768671806077.jpg";
import asImg from "@assets/AS_1768738817683.jpg";
import seventyImg from "@assets/70_1768742815509.jpg";
import seventyOneImg from "@assets/71_1768738842433.webp";
import gopuramImg from "@assets/Shrimatam_Gopuram_1768739079397.webp";
import mahaPeriyavaImg from "@assets/kanchi-maha-periyava_8fb06457-0992-4c44-8818-62d49dd13efc_800_1768741594540.webp";
import hhJayendraImg from "@assets/1374748101_jayendra_saraswati_swamigal_1768742042462.jpg";
import headerImg from "@assets/FB_IMG_1768808289933~2_1768808606506.jpg";
import sageImg from "@assets/Kanchi_shankaracharyas_1768738006479.jpg";

const GALLERY_IMAGES = [
  {
    url: asImg,
    title: "Adi Shankaracharya",
    category: "Peetham Founder",
    description: "Kanchi Kamakoti Peetham established by Adi Shankaracharya (509 BCE to 477 BCE) 2500 years ago."
  },
  {
    url: mahaPeriyavaImg,
    title: "68th JAGADGURU SHANKARACHARYA",
    category: "Kanchi Paramacharya",
    description: "Sri Chandrashekharendra Saraswati Mahaswami Ji"
  },
  {
    url: sageImg,
    title: "69th Jagadguru Shankaracharya",
    category: "Acharya",
    description: "Sri Jayendra Saraswati Mahaswami Ji"
  },
  {
    url: seventyImg,
    title: "70th Jagadguru Shankaracharya",
    category: "Acharya",
    description: "Sri Shankara Vijayendra Saraswati Mahaswami Ji"
  },
  {
    url: seventyOneImg,
    title: "71st Jagadguru Shankaracharya",
    category: "Acharya",
    description: "Sri Satya Chandrasekharendra Saraswathi Mahaswami Ji"
  },
  {
    url: gopuramImg,
    title: "Kanchi Kamakoti Peetham",
    category: "Shrimatam",
    description: "The sacred seat established by Adi Shankara 2500 years ago."
  }
];

export default function GalleryPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-40 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Our Spiritual Lineage
            </h1>
            <div className="h-1 w-20 bg-[#FFD700] mx-auto mb-4" />
          </motion.div>

          <div className="relative max-w-5xl mx-auto h-[500px] md:h-[600px] group">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute inset-0 w-full h-full"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-primary/10">
                  <img
                    src={GALLERY_IMAGES[currentIndex].url}
                    alt={GALLERY_IMAGES[currentIndex].title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="text-[#FFD700] text-sm font-bold uppercase tracking-widest mb-2 block">
                        {GALLERY_IMAGES[currentIndex].category}
                      </span>
                      <h2 className="text-white font-serif text-3xl md:text-4xl font-bold mb-3">
                        {GALLERY_IMAGES[currentIndex].title}
                      </h2>
                      <p className="text-white/80 text-lg max-w-2xl font-serif italic">
                        {GALLERY_IMAGES[currentIndex].description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="absolute inset-y-0 left-4 flex items-center z-10">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-black/20 hover:bg-black/40 text-white border-white/20 backdrop-blur-sm h-12 w-12"
                onClick={() => paginate(-1)}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
            </div>
            <div className="absolute inset-y-0 right-4 flex items-center z-10">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-black/20 hover:bg-black/40 text-white border-white/20 backdrop-blur-sm h-12 w-12"
                onClick={() => paginate(1)}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {GALLERY_IMAGES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-[#FFD700] w-8" 
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
