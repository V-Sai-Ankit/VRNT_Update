import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GalleryPageProps {
  isMenuOpen?: boolean;
  isDrawerOpen?: boolean;
}

const GALLERY_IMAGES = [
  // --- SPIRITUAL LINEAGE ACHARYAS ---
  {
    url: "/assets/1768738817683.jpg",
    title: "Adi Shankaracharya",
    category: "Peetham Founder",
    description: "Kanchi Kamakoti Peetham established by Adi Shankaracharya (509 BCE to 477 BCE) 2500 years ago.",
    albumUrl: null
  },
  {
    url: "/assets/kanchi-maha-periyava_8fb06457-0992-4c44-8818-62d49dd13efc_800_1768741594540.webp",
    title: "68th JAGADGURU SHANKARACHARYA",
    category: "Kanchi Paramacharya",
    description: "Sri Chandrashekharendra Saraswati Mahaswami Ji",
    albumUrl: null
  },
  {
    url: "/assets/jayendra_saraswathi.jpg",
    title: "69th Jagadguru Shankaracharya",
    category: "Acharya",
    description: "Sri Jayendra Saraswati Mahaswami Ji",
    albumUrl: null
  },
  {
    url: "/assets/70_1768742815509.jpg",
    title: "70th Jagadguru Shankaracharya",
    category: "Acharya",
    description: "Sri Shankara Vijayendra Saraswati Mahaswami Ji",
    albumUrl: null
  },
  {
    url: "/assets/71_1768738842433.webp",
    title: "71st Jagadguru Shankaracharya",
    category: "Acharya",
    description: "Sri Satya Chandrasekharendra Saraswathi Mahaswami Ji",
    albumUrl: null
  },
  {
    url: "/assets/Shrimatam_Gopuram_1768739079397.webp",
    title: "Kanchi Kamakoti Peetham",
    category: "Shrimatam",
    description: "The sacred seat established by Adi Shankara 2500 years ago.",
    albumUrl: null
  },

  // --- POORTHY EXAMINATION GALLERIES ---
  {
    url: "/poorthy/first gallery/IMG_20260305_111546869_HDR.jpg",
    title: "VRNT-POORTHY-SJ26",
    category: "March 5, 2026",
    description: "Official examination proceedings and sabha sessions for VRNT-POORTHY-SJ26.",
    albumUrl: "https://photos.app.goo.gl/44zvTt67hd1FnXQw5"
  },
  {
    url: "/poorthy/second gallery/20250831_093953.jpg",
    title: "VRNT-VJ-EXAMS-SEP-2025",
    category: "August 31, 2025",
    description: "Vijayadasami Poorthy oral examinations and Vidyaarthi assessments.",
    albumUrl: "https://photos.app.goo.gl/11bg4sbZFyTom2zH9"
  },
  {
    url: "/poorthy/third gallery/20240911_085056.jpg",
    title: "VRNT VIJAYADASAMI EXAMS SEP 11-14, 2024",
    category: "September 11–14, 2024",
    description: "Annual Vijayadasami examinations across multiple Veda Shaakhas.",
    albumUrl: "https://photos.app.goo.gl/H1WVEG18PUxkorTA7"
  },
  {
    url: "/poorthy/fourth gallery/IMG-20240316-WA0033.jpg",
    title: "VRNT POORTHI EXAM 15-17TH MARCH 2024",
    category: "March 15–17, 2024",
    description: "Spring Poorthy examination sessions supervised by senior Veda Panditas.",
    albumUrl: "https://photos.app.goo.gl/F1mBKjiHR8aBsRRHA"
  },
  {
    url: "/poorthy/fifth gallery/IMG-20230924-WA0066.jpg",
    title: "VRNT POORTHI EXAMS 22-24 SEP 2023",
    category: "September 22–24, 2023",
    description: "Rigorous oral recitations and completion assessments.",
    albumUrl: "https://photos.app.goo.gl/frSGh8xZv4XdrjDo9"
  },
  {
    url: "/poorthy/sixth gallery/IMG20220814094026.jpg",
    title: "VRNT Poorthy Exams (Aug 13–16, 2022)",
    category: "August 13–16, 2022",
    description: "Veda Rakshana Nidhi Trust graduation examinations and Parithoshikam.",
    albumUrl: "https://photos.app.goo.gl/6TZHbiBZ7B8fiPFM7"
  },

  // --- RECENT EVENT ---
  {
    url: "/assets/vrnt_1768670925029.jpg",
    title: "Veda Rakshana Nidhi Trust Sabha",
    category: "Vedic Event",
    description: "Sacred gatherings and Vidwat Sabha proceedings organized under VRNT.",
    albumUrl: null
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
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className={`min-h-screen bg-background text-foreground font-sans transition-all duration-300 ${expanded ? 'p-6' : 'p-0'}`}>
      <main className="pt-[20px] pb-24 min-h-[calc(100vh-80px)] overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-secondary mb-4 underline decoration-primary decoration-4 underline-offset-8 inline-block">
              Our Spiritual Lineage & Photo Gallery
            </h1>
            <p className="text-lg text-muted-foreground font-serif mt-8 max-w-2xl mx-auto italic">
              Honoring the unbroken chain of Acharyas and preserving traditional Vedic wisdom.
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
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-md border border-[#222]/80 bg-[#f7f4eb]">
                  <img
                    src={GALLERY_IMAGES[currentIndex].url}
                    alt={GALLERY_IMAGES[currentIndex].title}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src !== GALLERY_IMAGES[0].url) {
                        target.src = GALLERY_IMAGES[0].url;
                      }
                    }}
                  />

                  {/* BOTTOM OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-10 pointer-events-none">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="pointer-events-auto flex flex-col md:flex-row md:items-end justify-between gap-4"
                    >
                      {/* Left Side Heading & Info */}
                      <div className="max-w-xl">
                        <span className="text-[#FFD700] text-xs md:text-sm font-bold uppercase tracking-widest mb-1 block">
                          {GALLERY_IMAGES[currentIndex].category}
                        </span>
                        <h2 className="text-white font-serif text-2xl md:text-3xl font-bold mb-1.5 drop-shadow-md">
                          {GALLERY_IMAGES[currentIndex].title}
                        </h2>
                        <p className="text-white/90 text-sm md:text-base font-serif italic drop-shadow-xs m-0 line-clamp-2">
                          {GALLERY_IMAGES[currentIndex].description}
                        </p>
                      </div>

                      {/* Right Side Google Photos Link Button */}
                      {GALLERY_IMAGES[currentIndex].albumUrl && (
                        <div className="shrink-0">
                          <a
                            href={GALLERY_IMAGES[currentIndex].albumUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="no-underline inline-flex items-center gap-2 bg-[#ff7f5c] hover:bg-[#ff9173] text-white font-sans font-bold text-xs md:text-sm py-2.5 px-4 rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95"
                          >
                            <span>For More Images</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="absolute inset-y-0 left-4 flex items-center z-10">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-[#1a365d]/80 hover:bg-[#1a365d] text-white h-12 w-12 border-none shadow-md cursor-pointer"
                onClick={() => paginate(-1)}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
            </div>
            <div className="absolute inset-y-0 right-4 flex items-center z-10">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-[#1a365d]/80 hover:bg-[#1a365d] text-white h-12 w-12 border-none shadow-md cursor-pointer"
                onClick={() => paginate(1)}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            </div>

            {/* Pagination Indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 max-w-[90%] overflow-x-auto py-1">
              {GALLERY_IMAGES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer shrink-0 ${
                    index === currentIndex 
                      ? "bg-[#8b2b22] w-8" 
                      : "bg-[#1a365d]/40 hover:bg-[#1a365d]/70 w-2.5"
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