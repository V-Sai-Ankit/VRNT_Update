import React, { useState, useRef } from 'react';
import { motion } from "framer-motion";
import { FileDown, GraduationCap, ClipboardCheck, Award, ExternalLink, Play } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Import sub-page components
import VaarshikaPage from "../../pages/vaarshika";
import PoorthyPage from "../../pages/poorthy";
import SanskritPage from "../../pages/sanskrit";

interface ParikshaProps {
  isMenuOpen?: boolean;
  isDrawerOpen?: boolean;
  subView?: string | null;
  setSubView?: (view: string | null) => void;
}

// Custom Hover Video Card Component
interface VideoCardProps {
  video: {
    id: string;
    title: string;
    description: string;
    link: string;
    previewUrl?: string; // Short 10s MP4 snippet URL
  };
}

function HoverVideoCard({ video }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        // Autoplay may be blocked if sound isn't muted
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <a
      href={video.link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group bg-[#f7f2e8] border border-[#d8caae] rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col no-underline cursor-pointer"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-black/10">
        {/* Static YouTube Image Thumbnail */}
        <img 
          src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
          alt={video.title} 
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isHovered && video.previewUrl ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* 10-Second Preview MP4 Video (plays on hover) */}
        {video.previewUrl ? (
          <video
            ref={videoRef}
            src={video.previewUrl}
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ) : (
          /* Fallback iframe embed when no local preview clip is supplied */
          isHovered && (
            <iframe
              src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=0&start=30&end=40&loop=1&playlist=${video.id}`}
              title={video.title}
              className="absolute inset-0 w-full h-full pointer-events-none"
              allow="autoplay; encrypted-media"
            />
          )
        )}

        {/* Play Overlay Icon (Hidden on Hover) */}
        <div className={`absolute inset-0 bg-black/25 transition-opacity duration-300 flex items-center justify-center ${
          isHovered ? 'opacity-0' : 'opacity-100'
        }`}>
          <div className="w-12 h-12 rounded-full bg-[#7a2219] text-white flex items-center justify-center shadow-md pl-0.5">
            <Play className="w-5 h-5 fill-white" />
          </div>
        </div>
      </div>

      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h3 className="font-serif font-bold text-base md:text-lg text-[#7a2219] group-hover:text-[#b38600] transition-colors m-0 mb-2 line-clamp-2">
            {video.title}
          </h3>
          <p className="font-serif text-xs md:text-sm text-[#4a3f35] m-0 leading-relaxed line-clamp-2">
            {video.description}
          </p>
        </div>
        <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[#b38600] uppercase tracking-wider">
          <span>Click here to watch</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </div>
      </div>
    </a>
  );
}

export default function Pariksha({ 
  isMenuOpen = false, 
  isDrawerOpen = false,
  subView: externalSubView,
  setSubView: externalSetSubView
}: ParikshaProps) {
  const expanded = !isMenuOpen && !isDrawerOpen;
  const [internalSubView, setInternalSubView] = useState<string | null>(null);

  const activeSubView = externalSubView !== undefined ? externalSubView : internalSubView;

  const handleSetSubView = (view: string | null) => {
    if (externalSetSubView) {
      externalSetSubView(view);
    } else {
      setInternalSubView(view);
    }
  };

  const forms = [
    {
      title: "2026 Poorthy Exam Registration",
      description: "Online registration for the 2026 Poorthy Examination.",
      icon: GraduationCap,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfGe_y1ErOfrNsTlb-51mu0LaL6cPXxbKv38hQFFzxecA5BrQ/viewform",
      isExternal: true,
      buttonText: "Register Online"
    },
    {
      title: "Poorthi Pariksha Application",
      description: "Download the application form for the final completion examination.",
      icon: FileDown,
      link: "/assets/forms/POORTHY_APPL_2024.pdf",
      filename: "POORTHY_APPL_2024.pdf",
      buttonText: "Download Form"
    },
    {
      title: "Varshika Pariksha Form",
      description: "Annual examination form for Vedic students.",
      icon: ClipboardCheck,
      link: "/assets/forms/VARSHIKA_FORM.pdf",
      filename: "VARSHIKA_FORM.pdf",
      buttonText: "Download Form"
    }
  ];

  // YouTube Videos List
  const youtubeVideos = [
    {
      id: "pF9TUaTG_n0",
      title: "VRNT Certificate Distribution to Vidyarthis",
      description: "Certificate Distribution to Vidyarthis graduating from Veda Patashalas by Sri Kanchi Kamakoti Peetam.",
      link: "https://www.youtube.com/live/pF9TUaTG_n0?si=eDxYhBz7oRn9j4WO"
    },
    {
      id: "rKnuLhiS-wU",
      title: "Varshika Veda Poorti Pariksha - Certificate Distribution",
      description: "Live ceremony of Varshika Veda Poorti Pariksha certificate distribution conducted by Veda Rakshana Nidhi Trust.",
      link: "https://www.youtube.com/live/rKnuLhiS-wU?si=VcruBZqyzL2DWzjH"
    },
    {
      id: "WbWkUncbHLo",
      title: "Anugraha Bashan & VRNT Certificate Distribution",
      description: "Anugraha Bashan of Kanchi Acharyal and VRNT Certificate Distribution live at Skandagiri Camp.",
      link: "https://www.youtube.com/live/WbWkUncbHLo?si=z8t32OKsvah6VxXb"
    },
    {
      id: "eIzOqHUiCEA",
      title: "VRNT Poorthi Pariksha Certificate Function",
      description: "VRNT Poorthi Pariksha Certificate Function live from Orikkai on Vijayadasami day.",
      link: "https://www.youtube.com/live/eIzOqHUiCEA?si=XPSOXNCXlgcXP7ql"
    }
  ];

  // Render Sub-Views
  if (activeSubView === 'varshikam') {
    return <VaarshikaPage expanded={expanded} onBack={() => handleSetSubView(null)} />;
  }

  if (activeSubView === 'poorthy') {
    return <PoorthyPage expanded={expanded} onBack={() => handleSetSubView(null)} />;
  }

  if (activeSubView === 'sanskrit') {
    return <SanskritPage expanded={expanded} onBack={() => handleSetSubView(null)} />;
  }

  // Main Pariksha Overview Page
  return (
    <div className={`min-h-screen bg-background text-foreground font-sans transition-all duration-300 ${expanded ? 'p-6' : 'p-0'}`}>
      <main className="pt-[20px] pb-24 min-h-[calc(100vh-80px)]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-secondary mb-3 underline decoration-primary decoration-4 underline-offset-8 inline-block">
              Pariksha (Examinations)
            </h1>
            <p className="text-lg text-muted-foreground font-serif mt-4 max-w-2xl mx-auto italic">
              Academic rigor is maintained through regular inspections and assessments to preserve traditional standards.
            </p>
          </div>

          {/* 1. REGISTRATION & APPLICATION FORMS CARDS */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {forms.map((form, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col border-border/50 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4 text-primary">
                      <form.icon size={28} />
                    </div>
                    <CardTitle className="font-display text-xl">{form.title}</CardTitle>
                    <CardDescription className="font-serif italic">{form.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto pt-6">
                    {form.isExternal ? (
                      <Button 
                        className="w-full gap-2 font-bold uppercase tracking-wider text-xs cursor-pointer"
                        asChild
                      >
                        <a href={form.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          {form.buttonText}
                        </a>
                      </Button>
                    ) : (
                      <Button 
                        className="w-full gap-2 font-bold uppercase tracking-wider text-xs cursor-pointer"
                        asChild
                      >
                        <a href={form.link} download={form.filename}>
                          <FileDown className="w-4 h-4" />
                          {form.buttonText}
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* 2. CLEAN LIGHT CREAM CARDS */}
          <div className="flex flex-col gap-5 mb-12">
            {/* Varshikam Examination */}
            <div className="bg-[#f7f2e8] border border-[#d8caae] rounded-xl p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between gap-4">
              <div>
                <h2 className="font-serif font-bold text-2xl md:text-3xl text-[#7a2219] mb-2 m-0">
                  Varshikam Examination
                </h2>
                <p className="font-serif text-sm md:text-base text-[#4a3f35] m-0 leading-relaxed font-medium">
                  Annual on-site examination conducted at Paatashalas by Pareekshādhikāris to assess student progress and traditional Sampradāyam practices.
                </p>
              </div>
              <button 
                onClick={() => handleSetSubView('varshikam')}
                className="self-end bg-[#b38600] hover:bg-[#8b2b22] text-white font-sans font-bold text-xs tracking-wider uppercase py-2.5 px-5 rounded-md transition-colors duration-200 flex items-center gap-2 border-none cursor-pointer shadow-xs"
              >
                <span>Read Details</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Poorthy Examination */}
            <div className="bg-[#f7f2e8] border border-[#d8caae] rounded-xl p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between gap-4">
              <div>
                <h2 className="font-serif font-bold text-2xl md:text-3xl text-[#7a2219] mb-2 m-0">
                  Poorthy Examination
                </h2>
                <p className="font-serif text-sm md:text-base text-[#4a3f35] m-0 leading-relaxed font-medium">
                  The landmark final graduation examination marking the culmination of years of rigorous Adhyayanam across all Vedas.
                </p>
              </div>
              <button 
                onClick={() => handleSetSubView('poorthy')}
                className="self-end bg-[#7a2219] hover:bg-[#962d23] text-white font-sans font-bold text-xs tracking-wider uppercase py-2.5 px-5 rounded-md transition-colors duration-200 flex items-center gap-2 border-none cursor-pointer shadow-xs"
              >
                <span>Read Details</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Sanskrit Proficiency */}
            <div className="bg-[#f7f2e8] border border-[#d8caae] rounded-xl p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between gap-4">
              <div>
                <h2 className="font-serif font-bold text-2xl md:text-3xl text-[#7a2219] mb-2 m-0">
                  Sanskrit Proficiency
                </h2>
                <p className="font-serif text-sm md:text-base text-[#4a3f35] m-0 leading-relaxed font-medium">
                  Prescribed levels of Sanskrit qualification conducted by Chittoor Samskrutha Sabha corresponding to each Veda Shaakha.
                </p>
              </div>
              <button 
                onClick={() => handleSetSubView('sanskrit')}
                className="self-end bg-[#b38600] hover:bg-[#8b2b22] text-white font-sans font-bold text-xs tracking-wider uppercase py-2.5 px-5 rounded-md transition-colors duration-200 flex items-center gap-2 border-none cursor-pointer shadow-xs"
              >
                <span>Read Details</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 3. ŚŪRĀDHYĀYĪ SELECTION CRITERIA */}
          <div className="bg-card border rounded-2xl p-8 shadow-sm mb-12">
            <h3 className="font-display text-2xl font-bold mb-6 text-primary border-b pb-4 flex items-center gap-2">
              <Award className="text-primary" /> Selection of Śūrādhyāyī
            </h3>
            <p className="text-muted-foreground font-serif leading-relaxed mb-6">
              A prestigious distinction awarded to the "Best Vidyārthi" who demonstrates exceptional proficiency and dedication.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-sm font-serif">
              <div className="space-y-4">
                <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                  <p className="font-bold text-secondary mb-2 uppercase tracking-wider text-xs">Eligibility Criteria</p>
                  <ul className="list-disc pl-4 space-y-2 text-xs">
                    <li>Minimum 90% marks in the Gānāntham examination.</li>
                    <li>Cleared Gānāntham between 2 and 4 years prior.</li>
                    <li>Comprehensive understanding of Lakṣaṇam and Prātiśākhya.</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-secondary/5 p-4 rounded-xl border border-secondary/10">
                  <p className="font-bold text-secondary mb-2 uppercase tracking-wider text-xs">Examination Format</p>
                  <ul className="list-disc pl-4 space-y-2 text-xs">
                    <li>Recitation in Mūlam, Padam, Kramam, Jaṭā, and Gānam.</li>
                    <li>High-standard challenging questions from Saṃhitā and Brāhmaṇa.</li>
                    <li>Minimum 10 minutes of continuous, flawless recitation.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 4. INSTRUCTIONS LIST */}
          <div className="bg-card border rounded-2xl p-8 shadow-sm mb-16">
            <h3 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
              <ClipboardCheck className="text-primary" /> Examination Instructions
            </h3>
            <ul className="space-y-3 text-muted-foreground font-serif list-disc pl-5 leading-relaxed">
              <li>Candidates must submit the filled application forms before the specified deadline.</li>
              <li>Students must study their Sva-Śākhā (ancestral Vedic branch) exclusively.</li>
              <li>Maintaining the Śikhā (traditional tuft) as prescribed by Sampradāyam is mandatory.</li>
              <li>Pareekshādhikāris (examiners) personally visit Paatashalas for Varshikam assessments.</li>
            </ul>
          </div>

          {/* 5. YOUTUBE VIDEO HIGHLIGHTS WITH HOVER PREVIEW */}
          <div>
            <div className="border-b border-[#d8caae]/80 pb-3 mb-6 flex items-center gap-2">
              <span className="text-2xl">📹</span>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-[#7a2219] m-0">
                Certificate Distribution Videos
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {youtubeVideos.map((video) => (
                <HoverVideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}