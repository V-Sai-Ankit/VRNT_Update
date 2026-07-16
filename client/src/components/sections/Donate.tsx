import React, { useState } from 'react';
import { Heart, QrCode, Building2, Copy, Check } from 'lucide-react';

interface DonatePageProps {
  isMenuOpen: boolean;
  isDrawerOpen: boolean;
}

export default function DonatePage({ isMenuOpen, isDrawerOpen }: DonatePageProps) {
  const bothClosed = !isMenuOpen && !isDrawerOpen;
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const schemes = [
    {
      title: "Hereditary Niyama Adhyana Vidyarthies (HNY)",
      amount: "Rs. 5,000 / month or Corpus Rs. 8 Lakhs",
      desc: "A unique scheme for lifelong honorarium and monthly stipends for Vedic scholars."
    },
    {
      title: "Sponsorship of Veda Patasalas",
      amount: "Rs. 60,000 / month OR Rs. 7.20 lakhs / year",
      desc: "Sponsorship of Veda Patasalas in villages and semi urban locations."
    },
    {
      title: "Vedic Awards – Parithoshikam scheme",
      amount: "Rs. 10,000,000 (corpus)",
      desc: "Cash awards for best performing Vidyarthi and teacher on Vijayadasami day."
    },
    {
      title: "Veda Vidyarti Sponsorship Scheme (VVSS)",
      amount: "Rs. 5,000 / month OR Rs. 60,000 / annum OR Corpus Rs. 8 Lakhs",
      desc: "To fund vedic education of a vidyarthi across various states."
    },
    {
      title: "Sukla Panchami Veda Sadas of HNY",
      amount: "Rs. 20,000 / month OR Rs. 2,40,000 / annum",
      desc: "Conducting Veda sadas at Tirupati, Vijayawada and Secunderabad."
    },
    {
      title: "Yearly janma nakshatra donation scheme (YJNDS)",
      amount: "Rs. 1,116 every year",
      desc: "Donation on star birthday/Date of birth. Prasadam will be sent to donors."
    },
    {
      title: "Monthly Veda Parayanam at Kanchi Mutt",
      amount: "Rs. 12,500 / month OR Rs. 1,50,000 / annum",
      desc: "Chatur veda parayanam at Kanchi Mutt premises on specific star days."
    },
    {
      title: "One time contribution to Veda Rakshanam",
      amount: "Rs. 5,000",
      desc: "Generic contribution for trust activities."
    }
  ];

  return (
    <div className="w-full flex flex-col gap-10 pb-12">
      
      {/* Page Title Header Frame */}
      <section className="mt-2 border-t border-[#222] pt-6 text-center">
        <h2 
          className="font-bold underline decoration-[#bf953f] decoration-4 underline-offset-8 inline-block font-serif text-[#8b2b22]"
          style={{ fontSize: bothClosed ? '48px' : '40px' }}
        >
          How can you support?
        </h2>
        <p 
          className="italic text-gray-600 mt-4 max-w-2xl mx-auto font-serif"
          style={{ fontSize: bothClosed ? '18px' : '15px' }}
        >
          Support the preservation of Vedic heritage through our various sponsorship and donation schemes.
        </p>
      </section>

      {/* Main Container Workspace */}
      <div className="flex flex-col lg:flex-row gap-8 items-start w-full">
        
        {/* Left Hand Column: Support Schemes Panel */}
        <div className="w-full lg:w-[62%] flex flex-col gap-5">
          <div className="flex items-center gap-2 border-b border-[#222]/10 pb-2 mb-2">
            <Heart className="h-5 w-5 text-[#8b2b22] fill-[#8b2b22]/10" />
            <h3 className="font-serif font-bold text-2xl text-[#8b2b22] m-0">Support Schemes</h3>
          </div>

          {schemes.map((scheme, idx) => (
            <div 
              key={idx} 
              className="bg-[#f7f4eb] border border-[#222]/80 p-5 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs hover:shadow-xs transition-shadow"
            >
              <div className="flex flex-col gap-1 max-w-[70%]">
                <h4 className="font-serif font-bold text-[#171717] m-0 text-base md:text-lg leading-snug">
                  {scheme.title}
                </h4>
                <p className="font-serif text-xs md:text-sm text-gray-500 m-0 leading-relaxed">
                  {scheme.desc}
                </p>
              </div>

              <div className="bg-[#fffdf9] border border-[#e5dcc6] text-[#b4892c] text-xs font-sans font-bold px-3 py-1.5 rounded-lg shrink-0 text-center h-fit shadow-2xs">
                {scheme.amount}
              </div>
            </div>
          ))}
        </div>

        {/* Right Hand Column: Payment Assets & Verification Frames */}
        <div className="w-full lg:w-[38%] flex flex-col gap-6 sticky top-6">
          
          {/* Quick Scan UPI Card Frame */}
          <div className="bg-[#f7f4eb] border border-[#222]/80 p-6 rounded-2xl shadow-sm flex flex-col items-center text-center">
            <div className="flex items-center gap-2 self-start border-b border-[#222]/10 w-full pb-2 mb-4">
              <QrCode className="h-5 w-5 text-[#8b2b22]" />
              <h3 className="font-serif font-bold text-xl text-[#8b2b22] m-0">Quick Scan</h3>
            </div>
            
            {/* Simulated Frame Placeholder mimicking standard dynamic QR arrays */}
            <div className="bg-white p-4 border border-gray-300 rounded-xl shadow-inner mb-4 w-[220px] h-[220px] flex items-center justify-center relative">
              <div className="absolute inset-4 border-2 border-dashed border-gray-200 rounded-lg flex flex-col items-center justify-center p-2">
                <span className="text-3xl mb-1">📱</span>
                <span className="font-sans text-[11px] font-bold text-gray-400 uppercase tracking-wider">UPI QR Code</span>
                <span className="font-sans text-[9px] text-gray-400 mt-1">Scan via GooglePay, PhonePe, BHIM</span>
              </div>
            </div>

            <p className="font-serif text-xs text-gray-500 max-w-xs leading-normal m-0">
              Scan this QR code using any UPI app to send your contributions directly to VRNT.
            </p>
          </div>

          {/* Bank Details Clipboard Node Card */}
          <div className="bg-[#f7f4eb] border border-[#222]/80 p-6 rounded-2xl shadow-sm flex flex-col gap-5">
            <div className="flex items-center gap-2 border-b border-[#222]/10 pb-2">
              <Building2 className="h-5 w-5 text-[#8b2b22]" />
              <h3 className="font-serif font-bold text-xl text-[#8b2b22] m-0">Bank Details</h3>
            </div>

            {/* Bank Entity Unit 1 */}
            <div className="flex flex-col gap-2 font-serif">
              <h4 className="font-bold text-sm text-[#171717] m-0 tracking-wide uppercase">BANK OF BARODA</h4>
              <span className="text-xs text-gray-500 uppercase">WEST MAMBALAM BRANCH, CHENNAI</span>
              
              <div className="flex flex-col gap-1.5 mt-1">
                <div className="flex justify-between items-center bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-xs font-sans">
                  <span className="text-gray-600 font-mono tracking-wide">8528102002889</span>
                  <button 
                    onClick={() => handleCopy("8528102002889")}
                    className="text-gray-400 hover:text-[#8b2b22] border-none bg-transparent cursor-pointer p-0 transition-colors"
                  >
                    {copiedText === "8528102002889" ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
                
                <div className="flex justify-between items-center bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-xs font-sans">
                  <span className="text-gray-600 font-mono tracking-wide">IFSC: BARB0CHENDB</span>
                  <button 
                    onClick={() => handleCopy("BARB0CHENDB")}
                    className="text-gray-400 hover:text-[#8b2b22] border-none bg-transparent cursor-pointer p-0 transition-colors"
                  >
                    {copiedText === "BARB0CHENDB" ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Bank Entity Unit 2 */}
            <div className="flex flex-col gap-2 font-serif border-t border-[#222]/5 pt-4">
              <h4 className="font-bold text-sm text-[#171717] m-0 tracking-wide uppercase">INDIAN BANK</h4>
              <span className="text-xs text-gray-500 uppercase">WEST MAMBALAM BRANCH, CHENNAI</span>
              
              <div className="flex flex-col gap-1.5 mt-1">
                <div className="flex justify-between items-center bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-xs font-sans">
                  <span className="text-gray-600 font-mono tracking-wide">418622532</span>
                  <button 
                    onClick={() => handleCopy("418622532")}
                    className="text-gray-400 hover:text-[#8b2b22] border-none bg-transparent cursor-pointer p-0 transition-colors"
                  >
                    {copiedText === "418622532" ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
                
                <div className="flex justify-between items-center bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-xs font-sans">
                  <span className="text-gray-600 font-mono tracking-wide">IFSC: IDIB000W005</span>
                  <button 
                    onClick={() => handleCopy("IDIB000W005")}
                    className="text-gray-400 hover:text-[#8b2b22] border-none bg-transparent cursor-pointer p-0 transition-colors"
                  >
                    {copiedText === "IDIB000W005" ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Alert Information Banner Section */}
      <section className="bg-white border border-[#222] p-6 rounded-2xl shadow-[4px_4px_0_#222] flex flex-col items-center text-center gap-4 w-full mt-4">
        <div className="bg-green-50 text-green-700 h-10 w-10 rounded-full flex items-center justify-center border border-green-200 text-lg font-bold">
          ✓
        </div>
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