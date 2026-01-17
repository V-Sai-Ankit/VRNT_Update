import { SITE_CONTENT } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold mb-4 text-white">
              {SITE_CONTENT.header.title}
            </h2>
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
              <p>{SITE_CONTENT.header.address}</p>
              <p className="mt-4">
                <a href="mailto:contact@vrnt.org" className="hover:text-white transition-colors">contact@vrnt.org</a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white border-b border-white/10 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3 text-sm text-secondary-foreground/80">
              <li><a href="#" className="hover:text-white transition-colors">Donate</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Circulars</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trustees</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Veda Rakshna Nidhi Trust. All rights reserved.</p>
          <p>Designed with respect to Tradition.</p>
        </div>
      </div>
    </footer>
  );
}
