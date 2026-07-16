import React from 'react';

interface ParikshaResultProps {
  isMenuOpen: boolean;
  isDrawerOpen: boolean;
  setCurrentPage: (page: string) => void;
}

export default function ParikshaResultPage({ isMenuOpen, isDrawerOpen, setCurrentPage }: ParikshaResultProps) {
  const expanded = !isMenuOpen && !isDrawerOpen;

  return (
    <div className={`w-full flex flex-col gap-6 pb-12 transition-all duration-300 ${expanded ? 'p-6' : 'p-0'}`}>
      
      {/* Back Navigation Bar Links */}
      <div className="mt-2">
        <button 
          onClick={() => setCurrentPage('home')}
          className="bg-transparent border-none text-[#b4892c] hover:text-[#967122] font-serif italic text-base flex items-center gap-2 cursor-pointer p-0"
        >
          ← Back to News
        </button>
      </div>

      {/* Main Results Announcement Card Container Frame */}
      <div className="bg-[#f7f4eb] border border-gray-300 rounded-3xl p-8 md:p-12 shadow-sm max-w-3xl mx-auto w-full mt-4 flex flex-col gap-6">
        
        {/* Upper Announcement Capsule Indicator */}
        <div className="flex items-center gap-2 text-[#b4892c] font-sans font-bold text-xs tracking-wider uppercase">
          <span>📋</span> Announcement
        </div>

        {/* Content Heading Frame */}
        <div className="border-b border-gray-300 pb-2">
          <h2 className="font-serif font-bold text-[#171717] text-3xl md:text-4xl m-0 leading-tight underline decoration-[#b4892c] decoration-2 underline-offset-8 inline-block">
            2026 Shankara Jayanti Veda Pariksha Result
          </h2>
        </div>

        {/* Body Paragraph Descriptions */}
        <div className="font-serif text-gray-700 text-sm md:text-base leading-relaxed flex flex-col gap-4 mt-2">
          <p>
            This official circular from Veda Rakshana Nidhi Trust details the upcoming 2026 Shankara Jayanti Veda Pariksha Result. The Trust continues its mission of preserving Vedic education through regular examinations and recognition functions.
          </p>
          <p>
            Detailed information regarding applications, schedules, and eligibility criteria can be found in the attached document. Vaidikas and Vidhyarties are requested to review the content thoroughly.
          </p>
        </div>

        {/* Action Button Strip Row Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <button className="bg-[#b4892c] hover:bg-[#967122] text-white font-sans font-bold text-sm tracking-wider py-3.5 px-6 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer border-none">
            <span>📥</span> Download PDF
          </button>
          
          <button className="bg-[#e5dec9]/60 hover:bg-[#e5dec9] text-gray-800 font-sans font-bold text-sm tracking-wider py-3.5 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer border-none border border-gray-300/40">
            <span>🔗</span> Share Update
          </button>
        </div>

      </div>

    </div>
  );
}