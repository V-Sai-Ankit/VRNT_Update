import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { SITE_CONTENT } from "@/lib/constants";
import acharyaImg from "@assets/acharya_1768671806078.jpg";
import hhImg from "@assets/HH-Jayendra-Saraswathi-Swamiji_1768671806077.jpg";
import asImg from "@assets/AS_1768738817683.jpg";
import seventyImg from "@assets/70_1768742394769.jpg";
import seventyOneImg from "@assets/71_1768738842433.webp";
import gopuramImg from "@assets/Shrimatam_Gopuram_1768739079397.webp";
import mahaPeriyavaImg from "@assets/kanchi-maha-periyava_8fb06457-0992-4c44-8818-62d49dd13efc_800_1768741594540.webp";
import hhJayendraImg from "@assets/1374748101_jayendra_saraswati_swamigal_1768742042462.jpg";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Mission", href: "/mission" },
    { name: "Activities", href: "/activities" },
    { name: "Vedas", href: "/vedas" },
    { name: "VRNT 60", href: "/celebrations/60-years" },
    { name: "Pariksha", href: "/pariksha" },
    { name: "Trustees", href: "/trustees" },
    { name: "Donate", href: "/donate" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-secondary text-secondary-foreground border-b border-white/10 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center py-4 gap-4">
          {/* Photos and Title Row */}
          <div className="flex items-center justify-center gap-2 md:gap-4 w-full py-1">
            <div className="flex items-center gap-1 md:gap-2">
              <Link href="/" className="shrink-0">
                <img 
                  src={gopuramImg} 
                  alt="Shrimatam Gopuram" 
                  className="h-9 w-9 md:h-14 md:w-14 rounded-full border border-primary/50 object-cover bg-background scale-[1.3] md:scale-[1.4]"
                />
              </Link>
              <Link href="/" className="shrink-0">
                <img 
                  src={asImg} 
                  alt="Adi Shankara" 
                  className="h-9 w-9 md:h-14 md:w-14 rounded-full border border-primary/50 object-cover bg-background scale-[1.3] md:scale-[1.4]"
                />
              </Link>
              <Link href="/" className="shrink-0">
                <img 
                  src={mahaPeriyavaImg} 
                  alt="Kanchi Maha Periyava" 
                  className="h-9 w-9 md:h-14 md:w-14 rounded-full border border-primary/50 object-cover bg-background scale-[1.3] md:scale-[1.4]"
                />
              </Link>
            </div>

            <Link href="/" className="flex flex-col items-center text-center px-1 md:px-4 shrink-0">
              <h1 className="font-serif text-sm md:text-xl lg:text-2xl font-bold text-white tracking-tight leading-tight whitespace-nowrap">
                {SITE_CONTENT.header.title}
              </h1>
              <span className="text-[6px] md:text-[9px] text-secondary-foreground/80 font-medium uppercase tracking-wider hidden sm:block leading-tight">
                (A unit of Moolamnaya Sarvajna<br />Shri Kanchi Kamakoti Peetham)
              </span>
            </Link>

            <div className="flex items-center gap-1 md:gap-2">
              <Link href="/" className="shrink-0">
                <img 
                  src={hhJayendraImg} 
                  alt="HH Jayendra Saraswathi" 
                  className="h-9 w-9 md:h-14 md:w-14 rounded-full border border-primary/50 object-cover object-top bg-background scale-[1.3] md:scale-[1.4]"
                />
              </Link>
              <Link href="/" className="shrink-0">
                <img 
                  src={seventyImg} 
                  alt="70th Shankaracharya" 
                  className="h-9 w-9 md:h-14 md:w-14 rounded-full border-2 border-primary/50 object-cover object-top bg-background scale-[1.3] md:scale-[1.4]"
                />
              </Link>
              <Link href="/" className="shrink-0">
                <img 
                  src={seventyOneImg} 
                  alt="71st Shankaracharya" 
                  className="h-9 w-9 md:h-14 md:w-14 rounded-full border border-primary/50 object-cover object-top bg-background scale-[1.3] md:scale-[1.4]"
                />
              </Link>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
              >
                <a className="text-[10px] font-bold text-secondary-foreground/80 hover:text-white transition-colors uppercase tracking-widest">
                  {link.name}
                </a>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle (Simplified) */}
          <div className="lg:hidden absolute top-6 right-4">
            <button onClick={() => setIsOpen(!isOpen)} className="text-secondary-foreground">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
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
