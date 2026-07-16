import React from 'react';

interface ContactProps {
  isMenuOpen: boolean;
  isDrawerOpen: boolean;
}

export default function ContactPage({ isMenuOpen, isDrawerOpen }: ContactProps) {
  const bothClosed = !isMenuOpen && !isDrawerOpen;

  return (
    <div className="w-full flex flex-col gap-8 pb-12">
      
      {/* Page Title Header Frame */}
      <section className="mt-2 border-t border-[#222] pt-6">
        <h2 
          className="font-bold underline decoration-[#bf953f] decoration-4 underline-offset-8 inline-block font-serif text-[#8b2b22]"
          style={{ fontSize: bothClosed ? '48px' : '40px' }}
        >
          Contact Us
        </h2>
        <p 
          className="italic text-gray-600 mt-6 font-serif"
          style={{ fontSize: bothClosed ? '18px' : '15px' }}
        >
          Please feel free to get in touch, we value your feedback.
        </p>
      </section>

      {/* Main Content Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start w-full mt-2">
        
        {/* Left Side: Office Details Card */}
        <div className="bg-[#f7f4eb] border border-[#222]/80 p-6 rounded-2xl shadow-2xs flex flex-col gap-5">
          <div className="flex items-center gap-2.5 border-b border-[#222]/10 pb-2.5">
            {/* Custom SVG MapPin Icon */}
            <svg className="h-5 w-5 text-[#bf953f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h3 className="font-serif font-bold text-2xl text-[#8b2b22] m-0">Office Address</h3>
          </div>
          
          <div className="flex flex-col gap-4 font-serif">
            <div>
              <h4 className="font-bold text-lg text-[#171717] m-0 tracking-wide">
                Veda Rakshana Nidhi Trust (Regd.)
              </h4>
              <p className="text-gray-700 text-base mt-2 mb-0 leading-relaxed">
                No.64/31, Subramaniam Street,<br />
                West Mambalam,<br />
                Chennai - 600 033.
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-2 text-sm text-gray-700">
              <div className="flex items-center gap-3">
                <span className="text-[#bf953f] font-bold">📞</span>
                <span>Landline: 044-24740549</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#bf953f] font-bold">📱</span>
                <span>Mobile: 93607 31283</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#bf953f] font-bold">✉️</span>
                <span className="text-[#8b2b22] hover:underline cursor-pointer">office@vrnt.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Trust Office Location Map Mock Frame */}
        <div className="flex flex-col gap-3 w-full">
          <div className="flex justify-between items-center">
            <h3 className="font-serif font-bold text-xl text-[#171717] m-0">Trust Office Location</h3>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[#bf953f] font-sans text-xs font-bold uppercase tracking-wider no-underline hover:underline flex items-center gap-1"
            >
              Directions ↗
            </a>
          </div>

          <div className="bg-[#f7f4eb] border border-[#222]/80 rounded-2xl p-2 relative shadow-2xs h-[280px] w-full overflow-hidden flex items-center justify-center">
            <div className="absolute inset-2 bg-[#e5e3df] rounded-xl flex items-center justify-center border border-gray-300 shadow-inner">
              <div className="absolute top-4 left-4 z-10">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="bg-white border border-gray-300 font-sans text-xs font-semibold px-3 py-1.5 rounded shadow-sm text-blue-600 no-underline hover:bg-gray-50 flex items-center gap-1"
                >
                  Open in Maps
                </a>
              </div>
              
              <div className="w-full h-full opacity-40 relative font-sans text-[10px] text-gray-500 font-bold pointer-events-none">
                <div className="absolute top-12 left-1/4 border-l border-gray-400 h-48 transform rotate-12" />
                <div className="absolute top-24 left-0 border-t border-gray-400 w-full" />
                <div className="absolute top-40 left-0 border-t border-gray-400 w-full" />
                <div className="absolute top-16 left-12">Subramaniam Street</div>
                <div className="absolute top-32 left-36">West Mambalam</div>
                <div className="absolute bottom-8 right-16 text-red-500 text-base">📍 VRNT Office</div>
              </div>
            </div>
            
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 font-serif text-[11px] italic text-gray-500 bg-[#f7f4eb]/90 px-3 py-0.5 rounded-full border border-gray-200">
              Located in the heart of West Mambalam, Chennai.
            </div>
          </div>
        </div>

      </div>

      {/* Underneath Layout: Officer Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-4">
        
        {/* Card 1: Trustee & Treasurer */}
        <div className="bg-[#f7f4eb] border border-[#222]/80 p-5 rounded-xl flex flex-col gap-3 shadow-2xs">
          <div className="flex items-center gap-2 border-b border-[#222]/10 pb-2">
            <span className="text-[#bf953f]">👤</span>
            <span className="font-sans text-xs font-bold tracking-wider text-[#bf953f] uppercase">
              Trustee & Treasurer
            </span>
          </div>
          <div className="font-serif">
            <h4 className="font-bold text-base text-[#171717] m-0 uppercase tracking-wide">
              G Veeraraghavan
            </h4>
            <p className="text-xs text-gray-600 mt-2 mb-3 leading-relaxed">
              Flat A NO 85 Anugraha<br />
              Apartments, P T Rajan Salai, K K<br />
              Nagar, Chennai - 600078.
            </p>
            <span className="font-sans text-xs font-bold text-gray-700">
              Mobile: 9444454732
            </span>
          </div>
        </div>

        {/* Card 2: Executive Trustee */}
        <div className="bg-[#f7f4eb] border border-[#222]/80 p-5 rounded-xl flex flex-col gap-3 shadow-2xs">
          <div className="flex items-center gap-2 border-b border-[#222]/10 pb-2">
            <span className="text-[#bf953f]">👤</span>
            <span className="font-sans text-xs font-bold tracking-wider text-[#bf953f] uppercase">
              Executive Trustee
            </span>
          </div>
          <div className="font-serif">
            <h4 className="font-bold text-base text-[#171717] m-0 uppercase tracking-wide">
              S Swaminathan
            </h4>
            <p className="text-xs text-gray-600 mt-2 mb-3 leading-relaxed">
              1 A, ARJUN ENCLAVE, NEW NO<br />
              29, 6 TH CROSS STREET,<br />
              TRUSTPURAM,<br />
              KODAMBAKKAM, Chennai - 600024.
            </p>
            <span className="font-sans text-xs font-bold text-gray-700">
              Mobile: 9840189849
            </span>
          </div>
        </div>

      </div>

    </div>
  );
}