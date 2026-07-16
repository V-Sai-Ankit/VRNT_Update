import React from 'react';
import { motion } from "framer-motion";
import { SITE_CONTENT } from "@/lib/constants";
import { Heart, CreditCard, QrCode, CheckCircle2, Copy } from "lucide-react";
import { toast } from "sonner";

interface DonatePageProps {
  isMenuOpen: boolean;
  isDrawerOpen: boolean;
}

export default function DonatePage({ isMenuOpen, isDrawerOpen }: DonatePageProps) {
  const bothClosed = !isMenuOpen && !isDrawerOpen;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };

  return (
    <div className="w-full flex flex-col gap-10 pb-12">
      
      {/* Page Title Header Section */}
      <section className="mt-2 border-t border-border pt-6 text-center">
        <h2 
          className="font-bold underline decoration-primary decoration-4 underline-offset-8 inline-block font-serif text-[#8b2b22]"
          style={{ fontSize: bothClosed ? '48px' : '40px' }}
        >
          How can you support?
        </h2>
        <p 
          className="italic text-muted-foreground mt-4 max-w-2xl mx-auto font-serif"
          style={{ fontSize: bothClosed ? '18px' : '15px' }}
        >
          Support the preservation of Vedic heritage through our various sponsorship and donation schemes.
        </p>
      </section>

      {/* Main Content Workspace Container */}
      <div className="flex flex-col lg:flex-row gap-8 items-start w-full">
        
        {/* Left Hand Column: Support Schemes Panel */}
        <div className="w-full lg:w-[62%] flex flex-col gap-5">
          <div className="flex items-center gap-2 border-b border-border pb-2 mb-2">
            <Heart className="h-5 w-5 text-[#8b2b22] fill-[#8b2b22]/10" />
            <h3 className="font-serif font-bold text-2xl text-[#8b2b22] m-0">Support Schemes</h3>
          </div>

          <div className="grid gap-4">
            {(SITE_CONTENT.supportSchemes || []).map((scheme: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-[#f7f4eb] border border-[#222]/80 p-5 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex-1 w-full md:max-w-[65%]">
                  <h4 className="font-serif font-bold text-[#171717] m-0 text-base md:text-lg leading-snug group-hover:text-[#8b2b22] transition-colors">
                    {scheme.title}
                  </h4>
                  <p className="font-serif text-xs md:text-sm text-gray-500 mt-1 leading-relaxed">
                    {scheme.description}
                  </p>
                </div>
                
                {/* Secure flex-wrap layout preventing long corpus amount strings from overflowing card edges */}
                <div className="flex flex-wrap shrink-0 max-w-full md:max-w-[35%] justify-start md:justify-end">
                  <div className="bg-[#fffdf9] border border-[#e5dcc6] text-[#b4892c] text-xs font-sans font-bold px-3 py-1.5 rounded-lg text-center shadow-xs break-words whitespace-normal leading-relaxed max-w-xs sm:max-w-sm">
                    {scheme.contribution}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Hand Column: Payment Assets (QR Code & Bank Details) */}
        <div className="w-full lg:w-[38%] flex flex-col gap-6 sticky top-6">
          
          {/* Quick Scan UPI Card */}
          <div className="bg-[#f7f4eb] border border-[#222]/80 p-6 rounded-2xl shadow-sm flex flex-col items-center text-center">
            <div className="flex items-center gap-2 self-start border-b border-border w-full pb-2 mb-4">
              <QrCode className="h-5 w-5 text-[#8b2b22]" />
              <h3 className="font-serif font-bold text-xl text-[#8b2b22] m-0">Quick Scan</h3>
            </div>
            
            <div className="bg-white p-4 border border-gray-300 rounded-xl shadow-inner mb-4 w-[220px] h-[220px] flex items-center justify-center overflow-hidden">
              <img
                src="/assets/qr_1776444153234.jpg"
                alt="Donation QR Code"
                className="w-full h-full object-contain"
              />
            </div>

            <p className="font-serif text-xs text-gray-500 max-w-xs leading-normal m-0">
              Scan this QR code using any UPI app to send your contributions directly to VRNT.
            </p>
          </div>

          {/* Bank Details Clipboard Frame */}
          <div className="bg-[#f7f4eb] border border-[#222]/80 p-6 rounded-2xl shadow-sm flex flex-col gap-5">
            <div className="flex items-center gap-2 border-b border-border pb-2">
              <CreditCard className="h-5 w-5 text-[#8b2b22]" />
              <h3 className="font-serif font-bold text-xl text-[#8b2b22] m-0">Bank Details</h3>
            </div>

            <div className="space-y-6">
              {(SITE_CONTENT.bankDetails || []).map((bank: any, index: number) => (
                <div key={index} className="space-y-2 pb-4 border-b border-black/5 last:border-0 last:pb-0">
                  <h4 className="font-bold text-sm text-[#171717] m-0 tracking-wide uppercase">{bank.bank}</h4>
                  <span className="text-xs text-gray-500 uppercase block">{bank.branch}</span>
                  
                  <div className="flex flex-col gap-1.5 mt-2">
                    <div className="flex justify-between items-center bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-xs font-sans">
                      <code className="text-gray-600 font-mono tracking-wide">{bank.account}</code>
                      <button 
                        onClick={() => copyToClipboard(bank.account)} 
                        className="text-gray-400 hover:text-[#8b2b22] border-none bg-transparent cursor-pointer p-0 transition-colors"
                      >
                        <Copy size={14} />
                      </button>
                    </div>
                    
                    <div className="flex justify-between items-center bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-xs font-sans">
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">IFSC: {bank.ifsc}</span>
                      <button 
                        onClick={() => copyToClipboard(bank.ifsc)} 
                        className="text-gray-400 hover:text-[#8b2b22] border-none bg-transparent cursor-pointer p-0 transition-colors"
                      >
                        <Copy size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Alert Information Banner */}
      <section className="bg-white border border-[#222] p-6 rounded-2xl shadow-[4px_4px_0_#222] flex flex-col items-center text-center gap-4 w-full mt-4">
        <CheckCircle2 className="w-12 h-12 text-[#8b2b22]" />
        <h3 className="font-serif font-bold text-2xl text-[#171717] m-0">Important Information</h3>
        <p className="font-serif text-sm md:text-base text-gray-700 m-0 max-w-2xl leading-relaxed">
          80G benefits are available for your contributions. For online contributions, kindly send an e-mail to <strong className="text-[#8b2b22] hover:underline cursor-pointer">office@vrnt.org</strong> with the details of the transfer to enable us to send receipts.
        </p>
        
        <div className="flex flex-wrap gap-3 items-center justify-center mt-2 font-sans font-bold text-xs tracking-wider text-gray-600 uppercase">
          <span className="bg-gray-100 border border-gray-200 px-3 py-1.5 rounded-full shadow-2xs">80G Tax Benefits</span>
          <span className="bg-gray-100 border border-gray-200 px-3 py-1.5 rounded-full shadow-2xs">Secure Transfer</span>
          <span className="bg-gray-100 border border-gray-200 px-3 py-1.5 rounded-full shadow-2xs">Digital Receipts</span>
        </div>
      </section>

    </div>
  );
}