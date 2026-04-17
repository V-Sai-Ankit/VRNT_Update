import { motion } from "framer-motion";
import { Menu, X, User } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { SITE_CONTENT } from "@/lib/constants";
import acharyaImg from "@assets/acharya_1768671806078.jpg";
import hhImg from "@assets/HH-Jayendra-Saraswathi-Swamiji_1768671806077.jpg";
import asImg from "@assets/AS_1768738817683.jpg";
import seventyImg from "@assets/70_1768742815509.jpg";
import seventyOneImg from "@assets/71_1768738842433.webp";
import gopuramImg from "@assets/Shrimatam_Gopuram_1768739079397.webp";
import mahaPeriyavaImg from "@assets/kanchi-maha-periyava_8fb06457-0992-4c44-8818-62d49dd13efc_800_1768741594540.webp";
import logoImg from "@assets/GridArt_20260119_192703350_1768841338839.png";
import hhJayendraImg from "@assets/1374748101_jayendra_saraswati_swamigal_1768742042462.jpg";

export function Navbar({ compact = false }: { compact?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Mission", href: "/mission" },
    { name: "Activities", href: "/activities" },
    { name: "Vedas", href: "/vedas" },
    { name: "Gallery", href: "/gallery" },
    { name: "Pariksha", href: "/pariksha" },
    { name: "Trustees", href: "/trustees" },
    { name: "Donate", href: "/donate" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-secondary text-secondary-foreground border-b border-white/10 shadow-sm">
      {!compact && (
        <div className="bg-[#1a1a1a] border-b border-white/5 py-1.5">
          <div className="container mx-auto px-4 flex justify-end">
            <a href="/news/0" className="flex items-center gap-1.5 text-[10px] font-bold text-white/60 hover:text-[#FFD700] transition-colors uppercase tracking-[0.15em]" data-testid="link-result-banner">
              <User size={12} className="text-[#FFD700]/70" />
              2026 Shankara Jayanti Result
            </a>
          </div>
        </div>
      )}
      
      <div className="container mx-auto px-4 md:px-6">
        <div className={`flex flex-col items-center gap-2 md:gap-4 ${compact ? 'py-2' : 'py-4'}`}>
          <div className={`flex flex-col md:flex-row items-center justify-between w-full py-1 gap-2 md:gap-4 ${compact ? 'hidden md:flex' : ''}`}>
            <div className="flex flex-col items-center gap-1 order-2 md:order-1">
              {!compact && (
                <div className="text-[#FFD700] font-serif italic text-[10px] md:text-xs tracking-widest leading-none mb-1 opacity-90 uppercase">
                  Jaya Jaya Shankara! Hara Hara Shankara!
                </div>
              )}
              <div className="flex items-center gap-2 md:gap-3">
                <Link href="/" className="shrink-0">
                  <img 
                    src={gopuramImg} 
                    alt="Shrimatam Gopuram" 
                    className={`rounded-full border border-primary/50 object-cover bg-background transition-all ${compact ? 'h-8 w-8' : 'h-12 w-12 md:h-16 md:w-16 scale-[1.1] md:scale-[1.4]'}`}
                  />
                </Link>
                <Link href="/" className="shrink-0">
                  <img 
                    src={asImg} 
                    alt="Adi Shankara" 
                    className={`rounded-full border border-primary/50 object-cover bg-background transition-all ${compact ? 'h-8 w-8' : 'h-12 w-12 md:h-16 md:w-16 scale-[1.1] md:scale-[1.4]'}`}
                  />
                </Link>
                <Link href="/" className="shrink-0">
                  <img 
                    src={mahaPeriyavaImg} 
                    alt="Kanchi Maha Periyava" 
                    className={`rounded-full border border-primary/50 object-cover bg-background transition-all ${compact ? 'h-8 w-8' : 'h-12 w-12 md:h-16 md:w-16 scale-[1.1] md:scale-[1.4]'}`}
                  />
                </Link>
              </div>
            </div>

            <Link href="/" className={`flex flex-col items-center text-center px-1 md:px-6 shrink-0 order-1 md:order-2 flex-grow mx-2 ${compact ? 'md:flex-row md:gap-4' : ''}`}>
              <div className="flex flex-col items-center">
                <img 
                  src={logoImg} 
                  alt="VRNT Logo" 
                  className={`w-auto mb-2 transition-all ${compact ? 'h-8 md:h-12' : 'h-16 md:h-24'}`}
                />
              </div>
              {!compact && (
                <span className="text-[9px] md:text-[12px] text-[#FFD700]/90 font-bold uppercase tracking-wider block leading-tight mt-1">
                  (A unit of Moolamnaya Sarvajna<br />Shri Kanchi Kamakoti Peetham)
                </span>
              )}
            </Link>

            <div className="flex flex-col items-center gap-1 order-3 md:order-3">
              {!compact && (
                <div className="text-[#FFD700] font-serif italic text-[10px] md:text-xs tracking-widest leading-none mb-1 opacity-90 uppercase">
                  Kanchi Shankara! Kamakoti Shankara!
                </div>
              )}
              <div className="flex items-center gap-2 md:gap-3">
                <Link href="/" className="shrink-0">
                  <img 
                    src={hhJayendraImg} 
                    alt="HH Jayendra Saraswathi" 
                    className={`rounded-full border border-primary/50 object-cover object-top bg-background transition-all ${compact ? 'h-8 w-8' : 'h-12 w-12 md:h-16 md:w-16 scale-[1.1] md:scale-[1.4]'}`}
                  />
                </Link>
                <Link href="/" className="shrink-0">
                  <img 
                    src={seventyImg} 
                    alt="70th Shankaracharya" 
                    className={`rounded-full border-2 border-primary/50 object-cover object-top bg-background transition-all ${compact ? 'h-8 w-8' : 'h-12 w-12 md:h-16 md:w-16 scale-[1.1] md:scale-[1.4]'}`}
                  />
                </Link>
                <Link href="/" className="shrink-0">
                  <img 
                    src={seventyOneImg} 
                    alt="71st Shankaracharya" 
                    className={`rounded-full border border-primary/50 object-cover object-top bg-background transition-all ${compact ? 'h-8 w-8' : 'h-12 w-12 md:h-16 md:w-16 scale-[1.1] md:scale-[1.4]'}`}
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className={`hidden lg:flex space-x-8 ${compact ? 'mt-1' : ''}`}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
              >
                <a className="text-[12px] font-bold text-secondary-foreground hover:text-[#FFD700] transition-colors uppercase tracking-[0.15em]">
                  {link.name}
                </a>
              </Link>
            ))}
          </div>

          <div className={`lg:hidden absolute ${compact ? 'top-3' : 'top-6'} right-4`}>
            <button onClick={() => setIsOpen(!isOpen)} className="text-secondary-foreground">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-secondary border-b border-white/10"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
              >
                <a
                  className="text-base font-medium text-secondary-foreground/80 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
