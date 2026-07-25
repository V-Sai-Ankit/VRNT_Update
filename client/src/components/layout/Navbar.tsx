import React from 'react';

interface NavbarProps {
  isScrolled?: boolean;
}

export default function Navbar({ isScrolled = false }: NavbarProps) {
  return (
    <div 
      className={`fixed top-0 left-0 w-full z-[1100] shadow-2xl border-b-[5px] border-[#bf953f] transition-all duration-500 ease-in-out overflow-hidden
                  before:content-[''] before:absolute before:top-0 before:left-0 before:w-[15px] sm:before:w-[25px] before:h-full before:bg-gradient-to-r before:from-[#bf953f] before:via-[#fcf6ba] before:to-[#b38728] before:opacity-80 before:border-r-2 before:border-[#5a451b] before:z-10
                  after:content-[''] after:absolute after:top-0 after:right-0 after:w-[15px] sm:after:w-[25px] after:h-full after:bg-gradient-to-r after:from-[#bf953f] after:via-[#fcf6ba] after:to-[#b38728] after:opacity-80 after:border-l-2 after:border-[#5a451b] after:z-10
                  ${isScrolled ? 'h-[55px] lg:h-[185px]' : 'h-auto max-h-[220px] sm:max-h-[250px] lg:max-h-[185px]'}`}
      style={{
        background: 'radial-gradient(ellipse at 50% 0%, rgba(255,215,0,0.15) 0%, transparent 70%), linear-gradient(135deg, #061a3a 0%, #0d2b5c 40%, #163e7a 70%, #0d2b5c 100%)',
      }}
    >
      <header className={`max-w-[1440px] mx-auto w-full transition-all duration-500 ease-in-out box-border px-4 sm:px-6 ${
        isScrolled 
          ? 'h-[50px] lg:h-[180px] py-1 lg:pt-[8px] lg:pb-[26px]' 
          : 'h-auto lg:h-[180px] py-2 lg:pt-[8px] lg:pb-[26px]'
      }`}>
        <div className={`flex items-center lg:grid lg:grid-cols-[1.1fr_1.3fr_1.1fr] gap-2 lg:gap-4 text-center h-full transition-all duration-500 ease-in-out ${
          isScrolled ? 'flex-row justify-between pl-2 pr-2 lg:pl-0 lg:pr-0' : 'flex-col justify-center'
        }`}>
          
          {/* Main Logo & Title Header */}
          <div className={`order-1 lg:order-2 flex items-center transition-all duration-500 ease-in-out bg-[#061a3a]/60 px-3 rounded-lg border border-yellow-500/20 shadow-[inset_0_0_15px_rgba(0,0,0,0.5)] ${
            isScrolled 
              ? 'w-auto lg:w-full py-0.5 lg:py-1 flex-row lg:flex-col gap-2 lg:gap-0.5 justify-start lg:justify-center border-transparent lg:border-yellow-500/20 bg-transparent lg:bg-[#061a3a]/60 shadow-none lg:shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]' 
              : 'w-full py-1 flex-col gap-0.5 justify-center'
          }`}>
            <img 
              src="/images/logo.jpg" 
              alt="VRNT Logo" 
              className={`object-contain rounded-full p-0 bg-white border border-[#bf953f] shadow-[0_0_12px_rgba(255,215,0,0.4)] transition-all duration-500 ease-in-out ${
                isScrolled 
                  ? 'w-[32px] h-[32px] lg:w-[95px] lg:h-[95px]' 
                  : 'w-[40px] h-[40px] sm:w-[55px] sm:h-[55px] lg:w-[95px] lg:h-[95px]'
              }`}
            />

            <div className={`flex flex-col transition-all duration-500 ease-in-out ${
              isScrolled ? 'items-start text-left lg:items-center lg:text-center' : 'items-center text-center'
            }`}>
              <small className={`font-sans font-bold tracking-[.12em] sm:tracking-[.15em] text-white uppercase transition-all duration-500 ease-in-out overflow-hidden ${
                isScrolled 
                  ? 'hidden lg:block text-[7.5px] sm:text-[9px]' 
                  : 'block text-[7px] sm:text-[8.5px]'
              }`}>
                SRI GURUBYO NAMAHA · ESTABLISHED 1963
              </small>

              <h1 className={`m-0 uppercase font-bold text-[#fcf6ba] tracking-wide shadow-black drop-shadow-md font-serif leading-tight transition-all duration-500 ease-in-out ${
                isScrolled 
                  ? 'text-[11px] sm:text-sm lg:text-[22px]' 
                  : 'text-xs sm:text-base lg:text-[22px]'
              }`}>
                Veda Rakshana Nidhi Trust
              </h1>
            </div>
          </div>

          {/* Portrait Images (Moves to right side on MOBILE scroll only; stays left flank on DESKTOP) */}
          <div className={`order-2 lg:order-1 transition-all duration-500 ease-in-out overflow-hidden lg:w-full lg:h-full lg:grid lg:grid-cols-3 lg:gap-2 ${
            isScrolled 
              ? 'flex flex-row items-center justify-end gap-1 sm:gap-1.5 h-[36px] lg:h-full lg:max-h-[170px]' 
              : 'grid grid-cols-6 gap-1 sm:gap-1.5 w-full justify-items-center max-w-[500px] lg:max-w-none max-h-[90px] sm:max-h-[110px] lg:max-h-[170px]'
          }`}>
            <div className={`flex justify-center items-center overflow-hidden transition-all duration-500 ${
              isScrolled ? 'h-[34px] w-[26px] sm:w-[32px] lg:h-[155px] lg:w-full' : 'w-full h-[45px] sm:h-[65px] lg:h-[155px]'
            }`}>
              <img src="/images/kamakshi.jpg" alt="Kamakshi" className="h-full object-contain rounded-sm border lg:border-2 border-[#bf953f]" />
            </div>
            <div className={`flex justify-center items-center overflow-hidden transition-all duration-500 ${
              isScrolled ? 'h-[34px] w-[26px] sm:w-[32px] lg:h-[155px] lg:w-full' : 'w-full h-[45px] sm:h-[65px] lg:h-[155px]'
            }`}>
              <img src="/images/shankara.jpg" alt="Shankara" className="h-full object-contain rounded-sm border lg:border-2 border-[#bf953f]" />
            </div>
            <div className={`flex justify-center items-center overflow-hidden transition-all duration-500 ${
              isScrolled ? 'h-[34px] w-[26px] sm:w-[32px] lg:h-[155px] lg:w-full' : 'w-full h-[45px] sm:h-[65px] lg:h-[155px]'
            }`}>
              <img src="/images/periyavar.jpg" alt="Periyavar" className="h-full object-contain rounded-sm border lg:border-2 border-[#bf953f]" />
            </div>

            <div className={`flex justify-center items-center overflow-hidden transition-all duration-500 ${
              isScrolled ? 'h-[34px] w-[26px] sm:w-[32px] lg:h-[155px] lg:w-full' : 'w-full h-[45px] sm:h-[65px] lg:h-[155px]'
            }`}>
              <img src="/images/kanchi1.png" alt="Kanchi 1" className="h-full object-contain rounded-sm border lg:border-2 border-[#bf953f]" />
            </div>
            <div className={`flex justify-center items-center overflow-hidden transition-all duration-500 ${
              isScrolled ? 'h-[34px] w-[26px] sm:w-[32px] lg:h-[155px] lg:w-full' : 'w-full h-[45px] sm:h-[65px] lg:h-[155px]'
            }`}>
              <img src="/images/kanchi2.png" alt="Kanchi 2" className="h-full object-contain rounded-sm border lg:border-2 border-[#bf953f]" />
            </div>
            <div className={`flex justify-center items-center overflow-hidden transition-all duration-500 ${
              isScrolled ? 'h-[34px] w-[26px] sm:w-[32px] lg:h-[155px] lg:w-full' : 'w-full h-[45px] sm:h-[65px] lg:h-[155px]'
            }`}>
              <img src="/images/kanchi3.png" alt="Kanchi 3" className="h-full object-contain rounded-sm border lg:border-2 border-[#bf953f]" />
            </div>
          </div>

          {/* Right Flank Portraits (Always Static Desktop Layout) */}
          <div className="hidden lg:grid order-3 grid-cols-3 gap-2.5 w-full justify-items-center h-full">
            <div className="w-full h-[155px] flex justify-center items-center overflow-hidden">
              <img src="/images/kanchi1.png" alt="Kanchi 1" className="h-full object-contain rounded-md border-2 border-[#bf953f]" />
            </div>
            <div className="w-full h-[155px] flex justify-center items-center overflow-hidden">
              <img src="/images/kanchi2.png" alt="Kanchi 2" className="h-full object-contain rounded-md border-2 border-[#bf953f]" />
            </div>
            <div className="w-full h-[155px] flex justify-center items-center overflow-hidden">
              <img src="/images/kanchi3.png" alt="Kanchi 3" className="h-full object-contain rounded-md border-2 border-[#bf953f]" />
            </div>
          </div>

        </div>
      </header>
    </div>
  );
}