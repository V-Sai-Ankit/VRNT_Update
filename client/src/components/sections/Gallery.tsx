import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GalleryPageProps {
  isMenuOpen?: boolean;
  isDrawerOpen?: boolean;
}

const GALLERY_IMAGES = [
  {
    url: "/assets/AS_1768738817683.jpg",
    title: "Adi Shankaracharya",
    category: "Peetham Founder",
    description: "Kanchi Kamakoti Peetham established by Adi Shankaracharya (509 BCE to 477 BCE) 2500 years ago."
  },
  {
    url: "/assets/kanchi-maha-periyava_8fb06457-0992-4c44-8818-62d49dd13efc_800_1768741594540.webp",
    title: "68th JAGADGURU SHANKARACHARYA",
    category: "Kanchi Paramacharya",
    description: "Sri Chandrashekharendra Saraswati Mahaswami Ji"
  },
  {
    url: "/assets/Kanchi_shankaracharyas_1768738006479.jpg",
    title: "69th Jagadguru Shankaracharya",
    category: "Acharya",
    description: "Sri Jayendra Saraswati Mahaswami Ji"
  },
  {
    url: "/assets/70_1768742815509.jpg",
    title: "70th Jagadguru Shankaracharya",
    category: "Acharya",
    description: "Sri Shankara Vijayendra Saraswati Mahaswami Ji"
  },
  {
    url: "/assets/71_1768738842433.webp",
    title: "71st Jagadguru Shankaracharya",
    category: "Acharya",
    description: "Sri Satya Chandrasekharendra Saraswathi Mahaswami Ji"
  },
  {
    url: "/assets/Shrimatam_Gopuram_1768739079397.webp",
    title: "Kanchi Kamakoti Peetham",
    category: "Shrimatam",
    description: "The sacred seat established by Adi Shankara 2500 years ago."
  }
];

export default function GalleryPage({ isMenuOpen = false, isDrawerOpen = false }: GalleryPageProps) {
  const expanded = !isMenuOpen && !isDrawerOpen;
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
  }, [currentIndex]);

  return (
    <div className={`min-h-screen bg-background text-foreground font-sans transition-all duration-300 ${expanded ? 'p-6' : 'p-0'}`}>
      <main className="pt-[20px] pb-24 min-h-[calc(100vh-80px)] overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-secondary mb-4 underline decoration-primary decoration-4 underline-offset-8 inline-block">
              Our Spiritual Lineage
            </h1>
            <p className="text-lg text-muted-foreground font-serif mt-8 max-w-2xl mx-auto italic">
              Honoring the unbroken chain of Acharyas preserving traditional Vedic wisdom.
            </p>
          </div>

          <div className="relative w-full h-[500px] md:h-[600px] group">
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
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-border/50">
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
    </div>
  );
}