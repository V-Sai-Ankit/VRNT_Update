import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

interface VedaVrukshamProps {
  isMenuOpen: boolean;
  isDrawerOpen: boolean;
}

export default function VedaVruksham({ isMenuOpen, isDrawerOpen }: VedaVrukshamProps) {
  const bothClosed = !isMenuOpen && !isDrawerOpen;
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const activeView = searchParams.get('view');

  const handleNavigateToMessage = () => {
    navigate('/vedas/vruksham?view=message');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToMain = () => {
    navigate('/vedas/vruksham');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-col gap-6 text-[#111111] font-serif">
      
      {/* SUB-PAGE VIEW: Maha Periyava's Message */}
      {activeView === 'message' ? (
        <section className="border-t-2 border-[#222] pt-4 space-y-6">
          
          {/* Full Image Display Container */}
          <div className="max-w-4xl mx-auto my-4 flex justify-center w-full">
            <img 
              src="/assets/generated_images/Maha Periyava messages.png" 
              alt="Maha Periyava's Message" 
              className="w-full h-auto object-contain rounded-lg border-2 border-[#bf953f]/60 shadow-lg"
            />
          </div>

          {/* Bottom Navigation Button */}
          <div className="pt-2 text-center">
            <button
              onClick={handleBackToMain}
              className="inline-flex items-center gap-2 text-[#8b2b22] font-bold font-serif text-sm sm:text-base border border-[#bf953f]/60 bg-[#fcfaf2] px-6 py-2 rounded-md hover:bg-[#8b2b22] hover:text-white transition-all cursor-pointer shadow-sm"
            >
              <span>←</span> Back to Veda Vruksham
            </button>
          </div>

        </section>
      ) : (

        /* MAIN PAGE VIEW: Veda Vruksham */
        <section className="mt-2 border-t border-[#222] pt-4 relative space-y-6">
          <h3 
            className="text-center mx-auto mb-4 transition-all duration-300"
            style={{ 
              fontFamily: 'Georgia, serif', 
              fontSize: bothClosed ? '50px' : '42px', 
              lineHeight: '1.1', 
              color: '#8b2b22',
              fontWeight: 'bold' 
            }}
          >
            Veda Vruksham
          </h3>
          
          <div className="grid grid-cols-1 xl:grid-cols-[4.5fr_10fr_4.5fr] gap-[25px] items-center mt-1 w-full">
            
            {/* Sanskrit Text Card */}
            <div className="bg-white p-[20px] border border-[#222] shadow-[3px_3px_0_#222] min-h-[280px] flex flex-col justify-center rounded-md">
              <p 
                className="m-0 text-justify text-[#8b2b22] transition-all duration-300 font-serif" 
                style={{ 
                  fontSize: bothClosed ? '27px' : '19px', 
                  lineHeight: bothClosed ? '2.15' : '1.8' 
                }}
              >
                वेदो वृक्षः मूलकान्यत्र विप्राः।<br /> 
                अङ्गाः शाखाः धर्मकर्माणि पत्रम्॥<br /> 
                तस्मान्मूलं यत्नतो रक्षणीयं।<br /> 
                छिन्ने मूले नैव शाखा न वृक्षः॥
              </p>
            </div>
            
            {/* Tree Graphic Container */}
            <div className="flex justify-center items-center w-full p-0 m-0">
              <img 
                src="/images/veda-vruksha-original-new.JPG" 
                alt="Veda Vruksham Illustrated Diagram Viewport" 
                className="w-full max-w-[780px] h-auto object-contain border border-[#222] p-1.5 bg-white transition-all duration-300 rounded-md" 
              />
            </div>
            
            {/* English Translation Card */}
            <div className="bg-white p-[20px] border border-[#222] shadow-[3px_3px_0_#222] min-h-[280px] flex flex-col justify-center rounded-md">
              <p 
                className="m-0 text-left text-[#171717] transition-all duration-300 font-serif" 
                style={{ 
                  fontSize: bothClosed ? '26px' : '18px', 
                  lineHeight: bothClosed ? '2' : '1.7' 
                }}
              >
                The Vedas are a tree. The learned Brahmins (wise scholars) are its roots. Its limbs are the branches. Righteous actions (dharma and karma) are its leaves. Therefore, the roots must be protected with great care. If the root is cut, neither branches nor the tree itself can survive.
              </p>
            </div>

          </div>
          
          {/* Bottom Motto Banner */}
          <div 
            className="text-center border-y-4 border-double border-[#222] py-[15px] mt-8 uppercase tracking-[1.5px] text-[#8b2b22] font-bold transition-all duration-300 font-serif"
            style={{ 
              fontSize: bothClosed ? '20px' : '16px' 
            }}
          >
            Watering the roots of the Vedic tree is necessary to arrest its decay
          </div>

          {/* Action Card Linking to Sub-Page - Golden Amber Banner Style */}
          <div className="bg-gradient-to-r from-[#d97706] to-[#b45309] border-2 border-[#facc15] p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-8">
            <div className="flex items-start sm:items-center gap-4 sm:gap-5 flex-1">
              
              {/* Left Rounded Yellow Badge Box */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#b45309]/50 border-2 border-[#facc15]/80 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
                <span className="text-2xl sm:text-3xl text-[#fef08a]">📜</span>
              </div>

              {/* Text Block */}
              <div className="space-y-1 font-serif">
                <h4 className="text-2xl sm:text-3xl font-bold text-[#fef08a] m-0 tracking-wide drop-shadow-xs">
                  Maha Periyava’s Message
                </h4>
                <p className="text-sm sm:text-base text-[#fef3c7] m-0 leading-relaxed font-normal">
                  Read the divine guidance and appeal regarding the <strong className="text-[#fde047] font-semibold">protection and preservation of the Vedas</strong>.
                </p>
              </div>
            </div>

            {/* Right Yellow Action Button */}
            <button
              onClick={handleNavigateToMessage}
              className="inline-flex items-center justify-center gap-2 bg-[#facc15] hover:bg-[#fde047] text-[#451a03] font-bold font-serif text-sm sm:text-base tracking-wider uppercase px-6 py-3 rounded-xl border border-[#fef08a] shadow-md hover:shadow-lg transition-all cursor-pointer shrink-0 self-stretch sm:self-auto"
            >
              <span>Read Full Message</span>
              <span className="text-lg">↗</span>
            </button>
          </div>

        </section>
      )}

    </div>
  );
}