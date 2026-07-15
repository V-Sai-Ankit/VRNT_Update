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
    { name: "App Login", href: "https://www.kamakoti.org", isExternal: true }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-secondary text-secondary-foreground border-b border-white/10 shadow-sm">
      
      <div className="w-full px-4 md:px-12">
        <div className="flex flex-col items-center gap-0 py-0">
          
          <div className={`flex flex-col md:flex-row items-center justify-between w-full py-2 gap-0 ${compact ? 'hidden md:flex' : ''}`}>
            
            {/* LEFT SIDE: Side Avatar Group with Text Underneath */}
            <div className="flex flex-col items-center order-2 md:order-1 shrink-0 pt-1">
              <div className="flex items-center gap-2">
                <Link href="/" className="shrink-0">
                  <img 
                    src={gopuramImg} 
                    alt="Shrimatam Gopuram" 
                    className={`rounded-full border border-primary/50 object-cover bg-background transition-all ${compact ? 'h-6 w-6' : 'h-10 w-10 md:h-14 md:w-14 scale-[1.0] md:scale-[1.15]'}`}
                  />
                </Link>
                <Link href="/" className="shrink-0">
                  <img 
                    src={asImg} 
                    alt="Adi Shankara" 
                    className={`rounded-full border border-primary/50 object-cover bg-background transition-all ${compact ? 'h-6 w-6' : 'h-10 w-10 md:h-14 md:w-14 scale-[1.0] md:scale-[1.15]'}`}
                  />
                </Link>
                <Link href="/" className="shrink-0">
                  <img 
                    src={mahaPeriyavaImg} 
                    alt="Kanchi Maha Periyava" 
                    className={`rounded-full border border-primary/50 object-cover bg-background transition-all ${compact ? 'h-6 w-6' : 'h-10 w-10 md:h-14 md:w-14 scale-[1.0] md:scale-[1.15]'}`}
                  />
                </Link>
              </div>
              {!compact && (
                <div className="text-[#FFD700] font-serif italic text-[9px] md:text-[11px] tracking-widest leading-none opacity-90 uppercase whitespace-nowrap mt-1.5 z-10">
                  Jaya Jaya Shankara! Hara Hara Shankara!
                </div>
              )}
            </div>

            {/* CENTER BRAND LOGO AREA (Restructured to mirror image_bd65b3.png) */}
            <div className="flex flex-col items-center text-center px-2 shrink-0 order-1 md:order-2 max-w-[45%] mx-auto pt-1">
              <Link href="/">
                <a className="flex items-center gap-3 group">
                  <img 
                    src={logoImg} 
                    alt="VRNT Logo" 
                    className={`w-auto mb-0 transition-all ${compact ? 'h-6 md:h-8' : 'h-10 md:h-[54px]'}`}
                  />
                  <span className="text-white font-serif font-medium tracking-wide text-center uppercase whitespace-nowrap text-sm md:text-xl lg:text-2xl">
                    Veda Rakshana Nidhi Trust
                  </span>
                </a>
              </Link>
              {!compact && (
                <span className="text-[7px] md:text-[9px] text-[#FFD700]/90 font-bold uppercase tracking-wider block whitespace-nowrap leading-tight mt-1.5">
                  (A unit of Moolamnaya Sarvajna Shri Kanchi Kamakoti Peetham)
                </span>
              )}
            </div>

            {/* RIGHT SIDE: Side Avatar Group with Text Underneath */}
            <div className="flex flex-col items-center order-3 md:order-3 shrink-0 pt-1">
              <div className="flex items-center gap-2">
                <Link href="/" className="shrink-0">
                  <img 
                    src={hhJayendraImg} 
                    alt="HH Jayendra Saraswathi" 
                    className={`rounded-full border border-primary/50 object-cover object-top bg-background transition-all ${compact ? 'h-6 w-6' : 'h-10 w-10 md:h-14 md:w-14 scale-[1.0] md:scale-[1.15]'}`}
                  />
                </Link>
                <Link href="/" className="shrink-0">
                  <img 
                    src={seventyImg} 
                    alt="70th Shankaracharya" 
                    className={`rounded-full border-2 border-primary/50 object-cover object-top bg-background transition-all ${compact ? 'h-6 w-6' : 'h-10 w-10 md:h-14 md:w-14 scale-[1.0] md:scale-[1.15]'}`}
                  />
                </Link>
                <Link href="/" className="shrink-0">
                  <img 
                    src={seventyOneImg} 
                    alt="71st Shankaracharya" 
                    className={`rounded-full border border-primary/50 object-cover object-top bg-background transition-all ${compact ? 'h-6 w-6' : 'h-10 w-10 md:h-14 md:w-14 scale-[1.0] md:scale-[1.15]'}`}
                  />
                </Link>
              </div>
              {!compact && (
                <div className="text-[#FFD700] font-serif italic text-[9px] md:text-[11px] tracking-widest leading-none opacity-90 uppercase whitespace-nowrap mt-1.5 z-10">
                  Kanchi Shankara! Kamakoti Shankara!
                </div>
              )}
            </div>

          </div>

          {/* Navigation Links Menu Row */}
          <div className="hidden lg:flex space-x-6 mt-2 mb-2 items-center">
            {navLinks.map((link) => {
              if (link.isExternal) {
                return (
                  <a 
                    key={link.name}
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[11px] font-bold text-[#FFD700] hover:text-white bg-white/5 border border-[#FFD700]/30 rounded px-2.5 py-0.5 transition-colors uppercase tracking-[0.12em] flex items-center gap-1 shadow-sm"
                  >
                    <User size={10} className="text-[#FFD700]" />
                    {link.name}
                  </a>
                );
              }
              return (
                <Link key={link.name} href={link.href}>
                  <a className="text-[11px] font-bold text-secondary-foreground hover:text-[#FFD700] transition-colors uppercase tracking-[0.12em]">
                    {link.name}
                  </a>
                </Link>
              );
            })}
          </div>

          {/* Mobile Hamburg menu trigger */}
          <div className={`lg:hidden absolute ${compact ? 'top-2' : 'top-4'} right-4`}>
            <button onClick={() => setIsOpen(!isOpen)} className="text-secondary-foreground">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Responsive Layout */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-secondary border-b border-white/10"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a className="text-base font-medium text-secondary-foreground/80 hover:text-white" onClick={() => setIsOpen(false)}>
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

/*
===================================================================
                    CODE DIFF CHANGES LOG
===================================================================
CENTER BRAND LOGO AREA STRUCTURAL EXPANSION:
   - FROM:
     <Link href="/" className="shrink-0">
       <img src={logoImg} className={`... ${compact ? 'h-6 md:h-10' : 'h-12 md:h-[72px]'}`} />
     </Link>
   - TO:
     <Link href="/">
       <a className="flex items-center gap-3 group">
         <img src={logoImg} className={`... ${compact ? 'h-6 md:h-8' : 'h-10 md:h-[54px]'}`} />
         <span className="text-white font-serif font-medium tracking-wide text-center uppercase text-sm md:text-xl lg:text-2xl">
           Veda Rakshana Nidhi Trust
         </span>
       </a>
     </Link>
===================================================================
*/

/*
===================================================================
                  NAVBAR CODE DIFF CHANGES LOG
===================================================================
1. TOP GREY ROW REMOVAL:
   - FROM: 
     {!compact && (
       <div className="bg-[#1a1a1a] border-b border-white/5 py-1">
         ... App Login link ...
       </div>
     )}
   - TO: 
     (Deleted entirely from inside the <nav> return block to flatten length)

2. NAVLINKS ROUTING DATA ARRAY:
   - FROM: 
     const navLinks = [ ... { name: "Contact", href: "/contact" } ];
   - TO: 
     const navLinks = [
       ...
       { name: "Contact", href: "/contact" },
       { name: "App Login", href: "https://www.kamakoti.org", isExternal: true }
     ];

3. MENU LINK ROW LOOPER WITH CUSTOM LOGIN STYLING:
   - FROM:
     <div className="hidden lg:flex space-x-8 mt-1 mb-1">
       {navLinks.map((link) => (
         <Link key={link.name} href={link.href}> ... </a>
       ))}
     </div>
   - TO:
     <div className="hidden lg:flex space-x-6 mt-2 mb-2 items-center">
       {navLinks.map((link) => {
         if (link.isExternal) { return ( <a className="text-[#FFD700] bg-white/5 border border-[#FFD700]/30 px-2.5 ..."> ... </a> ) }
         return ( <Link> ... </Link> )
       })}
     </div>

4. SIDEBAR AVATAR RESOLUTIONS DOWNSIZING:
   - FROM: className={`... md:h-16 md:w-16 scale-[1.0] md:scale-[1.2]`}
   - TO:   className={`... md:h-14 md:w-14 scale-[1.0] md:scale-[1.15]`}

5. VERTICAL ORDER REPOSITIONING (LEFT & RIGHT SIDEBARS):
   - FROM:
     <div className="flex flex-col items-center ...">
       <div className="text-[#FFD700] ...">Jaya Jaya ...</div>
       <div className="flex items-center gap-2"> ... images ... </div>
     </div>
   - TO:
     <div className="flex flex-col items-center ...">
       <div className="flex items-center gap-2"> ... images ... </div>
       <div className="text-[#FFD700] mt-1.5 ...">Jaya Jaya ...</div>
     </div>
===================================================================
*/