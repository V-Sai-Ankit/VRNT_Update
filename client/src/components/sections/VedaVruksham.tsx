import React from 'react';

interface VedaVrukshamProps {
  isMenuOpen: boolean;
  isDrawerOpen: boolean;
}

export default function VedaVruksham({ isMenuOpen, isDrawerOpen }: VedaVrukshamProps) {
  const bothClosed = !isMenuOpen && !isDrawerOpen;

  return (
    <section className="mt-2 border-t border-[#222] pt-4">
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
        <div className="bg-white p-[20px] border border-[#222] shadow-[3px_3px_0_#222] min-h-[280px] flex flex-col justify-center">
          <p 
            className="m-0 text-justify text-[#8b2b22] transition-all duration-300" 
            style={{ 
              fontFamily: 'Georgia, serif', 
              /* Increased closed font size to 26px and expanded line-height to 2.1 to remove empty space */
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
            src="/images/veda-vruksha-original.jpg" 
            alt="Veda Vruksham Illustrated Diagram Viewport" 
            className="w-full max-w-[780px] h-auto object-contain border border-[#222] p-1.5 bg-white transition-all duration-300" 
          />
        </div>
        
        {/* English Translation Card */}
        <div className="bg-white p-[20px] border border-[#222] shadow-[3px_3px_0_#222] min-h-[280px] flex flex-col justify-center">
          <p 
            className="m-0 text-left text-[#171717] transition-all duration-300" 
            style={{ 
              fontFamily: 'Georgia, serif', 
              /* Increased closed font size to 24px and expanded line-height to 1.95 to match the vertical footprint */
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
        className="text-center border-y-4 border-double border-[#222] py-[15px] mt-8 uppercase tracking-[1.5px] text-[#8b2b22] font-bold transition-all duration-300"
        style={{ 
          fontFamily: 'Georgia, serif', 
          fontSize: bothClosed ? '20px' : '16px' 
        }}
      >
        Watering the roots of the Vedic tree is necessary to arrest its decay
      </div>
    </section>
  );
}
