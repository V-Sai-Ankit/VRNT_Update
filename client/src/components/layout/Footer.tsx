import { SITE_CONTENT } from "@/lib/constants";
import { Link } from "wouter";
import { Mail, Phone, Smartphone, MapPin, Heart, FileText, Users, MessageSquare } from "lucide-react";

import logoImg from "@assets/GridArt_20260119_192703350_1768841338839.png";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <img 
                src={logoImg} 
                alt="VRNT Logo" 
                className="h-16 md:h-20 w-auto"
              />
              <h2 className="font-display text-2xl font-bold text-white">
                {SITE_CONTENT.header.title}
              </h2>
            </div>
            <p className="text-secondary-foreground/80 mb-6 max-w-md font-serif italic">
              "{SITE_CONTENT.header.subtitle}"
            </p>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed max-w-md">
              {SITE_CONTENT.header.patronage}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white border-b border-white/10 pb-2 inline-block">Contact Us</h3>
            <address className="not-italic text-secondary-foreground/80 text-sm space-y-4">
              <div className="flex gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <p>{SITE_CONTENT.header.address}</p>
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-primary" />
                  <a href="mailto:office@vrnt.org" className="hover:text-white transition-colors">office@vrnt.org</a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-primary" />
                  <p>044-24740549</p>
                </div>
                <div className="flex items-center gap-3">
                  <Smartphone size={18} className="text-primary" />
                  <p>93607 31283</p>
                </div>
              </div>
            </address>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white border-b border-white/10 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3 text-sm text-secondary-foreground/80">
              <li className="flex items-center gap-3">
                <Heart size={16} className="text-primary/70" />
                <Link href="/donate"><a className="hover:text-white transition-colors">Donate</a></Link>
              </li>
              <li className="flex items-center gap-3">
                <FileText size={16} className="text-primary/70" />
                <Link href="/pariksha"><a className="hover:text-white transition-colors">Circulars</a></Link>
              </li>
              <li className="flex items-center gap-3">
                <Users size={16} className="text-primary/70" />
                <Link href="/trustees"><a className="hover:text-white transition-colors">Trustees</a></Link>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare size={16} className="text-primary/70" />
                <Link href="/contact"><a className="hover:text-white transition-colors">Contact</a></Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Veda Rakshana Nidhi Trust. All rights reserved.</p>
          <p>Designed with respect to Tradition.</p>
        </div>
      </div>
    </footer>
  );
}
