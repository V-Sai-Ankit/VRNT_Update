import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { SITE_CONTENT } from "@/lib/constants";
import acharyaImg from "@assets/acharya_1768671806078.jpg";
import hhImg from "@assets/HH-Jayendra-Saraswathi-Swamiji_1768671806077.jpg";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Mission", href: "/#mission" },
    { name: "Activities", href: "/activities" },
    { name: "Trustees", href: "/trustees" },
    { name: "News", href: "/news" },
    { name: "Donate", href: "/donate" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border/40 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo / Title Area with Photos */}
          <Link href="/" className="flex items-center gap-3 md:gap-6">
            <img 
              src={acharyaImg} 
              alt="Acharya" 
              className="h-12 w-12 md:h-16 md:w-16 rounded-full border-2 border-primary object-cover object-top"
            />
            <div className="flex flex-col text-center md:text-left">
              <h1 className="font-serif text-lg md:text-2xl lg:text-3xl font-bold text-primary tracking-tight leading-tight">
                {SITE_CONTENT.header.title}
              </h1>
              <span className="text-[8px] md:text-[10px] text-muted-foreground uppercase tracking-widest hidden sm:block">
                {SITE_CONTENT.header.subtitle}
              </span>
            </div>
            <img 
              src={hhImg} 
              alt="HH Jayendra Saraswathi" 
              className="h-12 w-12 md:h-16 md:w-16 rounded-full border-2 border-primary object-cover object-top"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground focus:outline-none"
            >
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
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-foreground/80 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
