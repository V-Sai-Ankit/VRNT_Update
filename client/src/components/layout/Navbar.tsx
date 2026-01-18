import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { SITE_CONTENT } from "@/lib/constants";
import acharyaImg from "@assets/acharya_1768671806078.jpg";
import hhImg from "@assets/HH-Jayendra-Saraswathi-Swamiji_1768671806077.jpg";
import asImg from "@assets/AS_1768738817683.jpg";
import seventyImg from "@assets/70_1768738842434.jpg";
import seventyOneImg from "@assets/71_1768738842433.webp";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Mission", href: "/mission" },
    { name: "Activities", href: "/activities" },
    { name: "Vedas", href: "/vedas" },
    { name: "Pariksha", href: "/pariksha" },
    { name: "Trustees", href: "/trustees" },
    { name: "Donate", href: "/donate" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border/40 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center py-4 gap-4">
          {/* Photos and Title Row */}
          <div className="flex items-center justify-center gap-2 md:gap-4 w-full">
            <Link href="/">
              <img 
                src={asImg} 
                alt="Adi Shankara" 
                className="h-10 w-10 md:h-14 md:w-14 rounded-full border-2 border-primary object-cover"
              />
            </Link>
            <Link href="/">
              <img 
                src={acharyaImg} 
                alt="Acharya" 
                className="h-10 w-10 md:h-14 md:w-14 rounded-full border-2 border-primary object-cover object-top"
              />
            </Link>

            <Link href="/" className="flex flex-col items-center text-center px-2">
              <h1 className="font-serif text-lg md:text-xl lg:text-2xl font-bold text-primary tracking-tight leading-tight">
                {SITE_CONTENT.header.title}
              </h1>
              <span className="text-[8px] md:text-[10px] text-muted-foreground font-medium uppercase tracking-wider hidden sm:block">
                (A unit of Moolamnaya Sarvajna Shri Kanchi Kamakoti Peetham)
              </span>
              <span className="text-[7px] md:text-[8px] text-muted-foreground uppercase tracking-widest hidden sm:block">
                {SITE_CONTENT.header.subtitle}
              </span>
            </Link>

            <Link href="/">
              <img 
                src={hhImg} 
                alt="HH Jayendra Saraswathi" 
                className="h-10 w-10 md:h-14 md:w-14 rounded-full border-2 border-primary object-cover object-top scale-125"
              />
            </Link>
            <Link href="/">
              <img 
                src={seventyImg} 
                alt="70th Shankaracharya" 
                className="h-10 w-10 md:h-14 md:w-14 rounded-full border-2 border-primary object-cover object-top scale-125"
              />
            </Link>
            <Link href="/">
              <img 
                src={seventyOneImg} 
                alt="71st Shankaracharya" 
                className="h-10 w-10 md:h-14 md:w-14 rounded-full border-2 border-primary object-cover object-top scale-125"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
              >
                <a className="text-[10px] font-bold text-foreground/80 hover:text-primary transition-colors uppercase tracking-widest">
                  {link.name}
                </a>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle (Simplified) */}
          <div className="lg:hidden absolute top-6 right-4">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
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
          className="lg:hidden bg-background border-b border-border"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
              >
                <a
                  className="text-base font-medium text-foreground/80 hover:text-primary"
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
