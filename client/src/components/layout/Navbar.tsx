import React from 'react';

export default function Navbar() {
  return (
    <div 
      className="fixed top-0 left-0 w-full z-[1100] shadow-2xl border-b-[5px] border-[#bf953f]
                 before:content-[''] before:absolute before:top-0 before:left-0 before:w-[25px] before:h-full before:bg-gradient-to-r before:from-[#bf953f] before:via-[#fcf6ba] before:to-[#b38728] before:opacity-80 before:border-r-2 before:border-[#5a451b]
                 after:content-[''] after:absolute after:top-0 after:right-0 after:w-[25px] after:h-full after:bg-gradient-to-r after:from-[#bf953f] after:via-[#fcf6ba] after:to-[#b38728] after:opacity-80 after:border-l-2 after:border-[#5a451b]"
      style={{
        background: 'radial-gradient(ellipse at 50% 0%, rgba(255,215,0,0.15) 0%, transparent 70%), linear-gradient(135deg, #061a3a 0%, #0d2b5c 40%, #163e7a 70%, #0d2b5c 100%)',
        height: '185px' 
      }}
    >
      <header className="max-w-[1440px] mx-auto w-full h-[180px] pt-[8px] pb-[26px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.3fr_1.1fr] items-center gap-4 text-center px-6 h-full">
          
          {/* Left Flank Portrait Boxes */}
          <div className="grid grid-cols-3 gap-2.5 w-full justify-items-center max-w-[400px] mx-auto lg:max-w-none h-full">
            <div className="w-full h-[165px] flex justify-center items-center overflow-hidden">
              <img src="/images/kamakshi.jpg" alt="Kamakshi" className="h-full object-contain rounded-md border-4 border-[#bf953f]" />
            </div>
            <div className="w-full h-[165px] flex justify-center items-center overflow-hidden">
              <img src="/images/shankara.jpg" alt="Shankara" className="h-full object-contain rounded-md border-4 border-[#bf953f]" />
            </div>
            <div className="w-full h-[165px] flex justify-center items-center overflow-hidden">
              <img src="/images/periyavar.jpg" alt="Periyavar" className="h-full object-contain rounded-md border-4 border-[#bf953f]" />
            </div>

          </div>

          {/* Centering Identity Branding Unit */}
          <div className="flex flex-col items-center justify-center gap-1 h-full bg-[#061a3a]/60 px-3 py-1 rounded-lg border border-yellow-500/20 shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]">
            {/* Changed p-0.5 to p-0 to strip out the excess inner white spacing area */}
            <img 
              src="/images/logo.jpg" 
              alt="VRNT Logo" 
              className="w-[100px] h-[100px] object-contain rounded-full p-0 bg-white border border-[#bf953f] shadow-[0_0_12px_rgba(255,215,0,0.4)]" 
            />
            <small className="block font-sans font-bold text-[9px] tracking-[.15em] text-white opacity-90 uppercase">SRI GURUBYO NAMAHA · ESTABLISHED 1963</small>
            <h1 className="text-xl lg:text-[23px] m-0 uppercase font-bold text-[#fcf6ba] tracking-wide shadow-black drop-shadow-md font-serif leading-tight">Veda Rakshana Nidhi Trust</h1>
          </div>

          {/* Right Flank Portrait Boxes */}
          <div className="grid grid-cols-3 gap-2.5 w-full justify-items-center max-w-[400px] mx-auto lg:max-w-none h-full">
            <div className="w-full h-[165px] flex justify-center items-center overflow-hidden">
              <img src="/images/kanchi1.png" alt="Kanchi 1" className="h-full object-contain rounded-md border-4 border-[#bf953f]" />
            </div>
            <div className="w-full h-[165px] flex justify-center items-center overflow-hidden">
              <img src="/images/kanchi2.png" alt="Kanchi 2" className="h-full object-contain rounded-md border-4 border-[#bf953f]" />
            </div>
            <div className="w-full h-[165px] flex justify-center items-center overflow-hidden">
              <img src="/images/kanchi3.png" alt="Kanchi 3" className="h-full object-contain rounded-md border-4 border-[#bf953f]" />
            </div>
          </div>

        </div>
      </header>
    </div>
  );
}
