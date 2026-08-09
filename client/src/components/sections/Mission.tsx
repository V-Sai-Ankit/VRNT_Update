import React, { useState, useLayoutEffect } from 'react';
import InitiativesPage from '../../pages/initiatives';

interface MissionProps {
  isMenuOpen: boolean;
  isDrawerOpen: boolean;
  setCurrentPage?: (page: string) => void;
}

export default function Mission({ isMenuOpen, isDrawerOpen }: MissionProps) {
  const bothClosed = !isMenuOpen && !isDrawerOpen;
  const [activeSubView, setActiveSubView] = useState<string | null>(null);

  // Manage scroll position internally just like Pariksha.tsx
  const handleSetSubView = (view: string | null) => {
    if (view) {
      // Save current scroll position before opening details
      sessionStorage.setItem('mission_scroll_pos', window.scrollY.toString());
      setActiveSubView(view);
      window.scrollTo(0, 0);
    } else {
      setActiveSubView(null);
    }
  };

  // Restore saved scroll position when returning to Mission overview
  useLayoutEffect(() => {
    if (!activeSubView) {
      const savedPos = sessionStorage.getItem('mission_scroll_pos');
      if (savedPos !== null) {
        window.scrollTo(0, parseInt(savedPos, 10));
        sessionStorage.removeItem('mission_scroll_pos');
      }
    }
  }, [activeSubView]);

  // If a sub-view is active, render Initiatives directly inside Mission
  if (activeSubView) {
    return (
      <div className="w-full">
        <InitiativesPage 
          isMenuOpen={isMenuOpen} 
          isDrawerOpen={isDrawerOpen} 
          overrideView={activeSubView}
          onBack={() => handleSetSubView(null)} 
        />
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-10 pb-12 text-[#111111] font-serif">
      
      {/* SECTION 1: Mission & Vision Core Intro */}
      <section className="mt-2 border-t border-[#222] pt-6">
        <div className="grid grid-cols-1 xl:grid-cols-[5.5fr_4.5fr] gap-8 items-start w-full">
          
          {/* Left Block: Narrative and Bullet Points */}
          <div className="flex flex-col gap-6">
            <h3 
              className="text-left font-bold transition-all duration-300"
              style={{ 
                fontFamily: 'Georgia, serif', 
                fontSize: bothClosed ? '48px' : '42px', 
                lineHeight: '1.1', 
                color: '#8b2b22'
              }}
            >
              Mission & Vision
            </h3>
            
            <p 
              className="m-0 text-justify transition-all duration-300"
              style={{ 
                fontFamily: 'Georgia, serif', 
                fontSize: bothClosed ? '22px' : '18px', 
                lineHeight: bothClosed ? '1.9' : '1.7',
                color: '#171717'
              }}
            >
              <span className="text-5xl font-bold float-left mr-2 leading-[0.8] text-[#8b2b22] font-serif">V</span>
              EDA RAKSHANA NIDHI TRUST (VRNT) is a Public Charitable Trust sponsored by Kanchi Kamakoti Peetam founded in 1963 under the guidance of His Holiness Sri Sri Chandrashekarendra Saraswati MahaSwamigal. Learning and teaching the Vedas through the traditional Gurukula system is not merely an academic pursuit—it is a way of life, a sacred journey that nurtures both character and intellect. In this ancient and time-honoured system, education transcends classroom boundaries and becomes an immersive spiritual discipline.
            </p>

            {/* Bullet Points */}
            <div className="flex flex-col gap-4 mt-2">
              {[
                "To uphold the Guru-Shishya tradition and extend educational opportunities to deserving students across linguistic and philosophical backgrounds.",
                "To ensure the survival and flourishing of Vedic knowledge through educational and financial support to Vedic scholars and institutions.",
                "To preserve, protect, promote and disseminate Vedas in the traditional manner.",
                "To preserve the uniqueness and distinctiveness of each branch of Vedic recitation.",
                "To support rare Veda Shaakhas on the brink of extinction through systematic training."
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-[#bf953f] text-xl mt-0.5">📜</span>
                  <p 
                    className="m-0 text-justify font-medium"
                    style={{ 
                      fontFamily: 'Georgia, serif', 
                      fontSize: bothClosed ? '19px' : '16px', 
                      lineHeight: '1.6',
                      color: '#111111'
                    }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block: Side Cards Stack */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-6 w-full xl:mt-14">
            <div className="bg-[#fcfaf2] p-5 border border-[#222] shadow-[3px_3px_0_#222] flex flex-col gap-4 rounded-md">
              <div className="w-full h-[180px] overflow-hidden rounded border border-gray-300">
                <img src="/images/vedic-heritage.png" alt="Vedic Heritage" className="w-full h-full object-cover" />
              </div>
              <h4 className="m-0 font-bold font-serif text-xl text-[#8b2b22]">Vedic Heritage</h4>
              <p className="m-0 font-serif text-sm text-[#111111] font-semibold leading-relaxed">Preserving the ancient texts in their pristine purity for future generations.</p>
            </div>

            <div className="bg-[#fcfaf2] p-5 border border-[#222] shadow-[3px_3px_0_#222] flex flex-col gap-4 rounded-md">
              <div className="w-full h-[180px] overflow-hidden rounded border border-gray-300">
                <img src="/images/education.jpg" alt="Education" className="w-full h-full object-cover" />
              </div>
              <h4 className="m-0 font-bold font-serif text-xl text-[#8b2b22]">Education</h4>
              <p className="m-0 font-serif text-sm text-[#111111] font-semibold leading-relaxed">Supporting Gurukula education and traditional teaching methods.</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: Major Initiatives */}
      <section className="border-t-2 border-[#222] pt-8 mt-2">
        <h3 
          className="text-center mx-auto mb-4 font-bold border-b-2 border-double border-[#8b2b22] pb-2 max-w-max"
          style={{ 
            fontFamily: 'Georgia, serif', 
            fontSize: bothClosed ? '44px' : '36px', 
            color: '#8b2b22'
          }}
        >
          Major Initiatives of the Trust
        </h3>

        <p 
          className="m-0 font-serif text-justify text-[#111111] leading-relaxed font-medium mb-8 max-w-5xl mx-auto px-1"
          style={{ fontSize: bothClosed ? '20px' : '17px' }}
        >
          Over the decades, the Veda Rakshana Nidhi Trust (VRNT) has undertaken several pioneering initiatives to uphold and propagate the sacred Vedic tradition in its pristine form. Each initiative reflects the Trust’s unwavering commitment to <em>Veda Rakshanam</em> — the preservation, teaching, and practice of the Vedas as a living heritage.
        </p>

        <div className="grid grid-cols-1 gap-6 w-full">
          
          {/* 1. Supporting all Available Veda Shakhas */}
          <div className="bg-[#fcfaf2] border-2 border-[#222] p-6 sm:p-8 rounded-xl flex flex-col gap-4 shadow-[4px_4px_0_#222]">
            <div className="flex items-center gap-4 border-b border-[#bf953f]/40 pb-3">
              <span className="text-3xl bg-[#fffdf9] p-2.5 rounded-lg border border-[#bf953f]">📜</span>
              <h4 
                className="font-serif font-bold text-[#8b2b22] m-0" 
                style={{ fontSize: bothClosed ? '26px' : '22px' }}
              >
                Supporting all Available Veda Shakhas
              </h4>
            </div>
            
            <p 
              className="font-serif text-[#111111] font-medium leading-relaxed m-0 text-justify" 
              style={{ fontSize: bothClosed ? '20px' : '17px' }}
            >
              Our traditional scriptures and historical references indicate that there were once more than a thousand Veda shakhas (branches or recensions) in existence across different regions and lineages. These shakhas represented diverse methods of preserving, reciting, and interpreting the Vedic knowledge...{" "}
              
              <button 
                onClick={() => handleSetSubView('shakhas')}
                className="inline-flex items-center gap-1 text-[#8b2b22] font-bold underline decoration-[#bf953f] hover:text-[#b32417] transition-colors cursor-pointer bg-transparent border-none p-0 text-inherit font-serif"
              >
                Read More Details ↗
              </button>
            </p>
          </div>

          {/* 2. Hereditary Niyama Adhyayanam (HNY) Scheme */}
          <div className="bg-[#fcfaf2] border-2 border-[#222] p-6 sm:p-8 rounded-xl flex flex-col gap-4 shadow-[4px_4px_0_#222]">
            <div className="flex items-center gap-4 border-b border-[#bf953f]/40 pb-3">
              <span className="text-3xl bg-[#fffdf9] p-2.5 rounded-lg border border-[#bf953f]">👥</span>
              <h4 
                className="font-serif font-bold text-[#8b2b22] m-0" 
                style={{ fontSize: bothClosed ? '26px' : '22px' }}
              >
                Hereditary Niyama Adhyayanam (HNY) Scheme
              </h4>
            </div>
            <p 
              className="font-serif text-[#111111] font-medium leading-relaxed m-0 text-justify" 
              style={{ fontSize: bothClosed ? '20px' : '17px' }}
            >
              This unique initiative revives and sustains the hereditary mode of Vedic learning, in which a father imparts the Vedas to his son within the family lineage. Known as the Hereditary Niyama Adhyayanam (HNY) scheme, it upholds the disciplined study of the Vedas as a sacred familial duty...{" "}

              <button 
                onClick={() => handleSetSubView('hny')}
                className="inline-flex items-center gap-1 text-[#8b2b22] font-bold underline decoration-[#bf953f] hover:text-[#b32417] transition-colors cursor-pointer bg-transparent border-none p-0 text-inherit font-serif"
              >
                Read More Details ↗
              </button>
            </p>
          </div>

          {/* 3. Focus on Sampradāyam */}
          <div className="bg-[#fcfaf2] border-2 border-[#222] p-6 sm:p-8 rounded-xl flex flex-col gap-4 shadow-[4px_4px_0_#222]">
            <div className="flex items-center gap-4 border-b border-[#bf953f]/40 pb-3">
              <span className="text-3xl bg-[#fffdf9] p-2.5 rounded-lg border border-[#bf953f]">🪔</span>
              <h4 
                className="font-serif font-bold text-[#8b2b22] m-0" 
                style={{ fontSize: bothClosed ? '26px' : '22px' }}
              >
                Focus on Sampradāyam
              </h4>
            </div>
            <p 
              className="font-serif text-[#111111] font-medium leading-relaxed m-0 text-justify" 
              style={{ fontSize: bothClosed ? '20px' : '17px' }}
            >
              As per the sacred guidance of His Holiness, the Trust emphasizes that Vidyārthīs must not only pursue Adhyayanam (Vedic study) but also adhere to Sampradāyam—the traditional code of conduct including Gurukula Vāsam, Śikhāvān, and Sva-Śākhā Adhyayanam...{" "}

              <button 
                onClick={() => handleSetSubView('sampradayam')}
                className="inline-flex items-center gap-1 text-[#8b2b22] font-bold underline decoration-[#bf953f] hover:text-[#b32417] transition-colors cursor-pointer bg-transparent border-none p-0 text-inherit font-serif"
              >
                Read More Details ↗
              </button>
            </p>
          </div>

          {/* 4. Support for Rare Veda Shaakhas */}
          <div className="bg-[#fcfaf2] border-2 border-[#222] p-6 sm:p-8 rounded-xl flex flex-col gap-4 shadow-[4px_4px_0_#222]">
            <div className="flex items-center gap-4 border-b border-[#bf953f]/40 pb-3">
              <span className="text-3xl bg-[#fffdf9] p-2.5 rounded-lg border border-[#bf953f]">🛡️</span>
              <h4 
                className="font-serif font-bold text-[#8b2b22] m-0" 
                style={{ fontSize: bothClosed ? '26px' : '22px' }}
              >
                Support for Rare Veda Shaakhas
              </h4>
            </div>
            <p 
              className="font-serif text-[#111111] font-medium leading-relaxed m-0 text-justify" 
              style={{ fontSize: bothClosed ? '20px' : '17px' }}
            >
              Certain branches (<em>śākhās</em>) of the Vedas are now on the brink of extinction due to a dwindling number of practitioners. Recognizing this urgent need, VRNT has established and supported Veda Pāṭhaśālās dedicated to these rare Shaakhas.
            </p>
          </div>

          {/* 5. Pan-India Financial Assistance */}
          <div className="bg-[#fcfaf2] border-2 border-[#222] p-6 sm:p-8 rounded-xl flex flex-col gap-4 shadow-[4px_4px_0_#222]">
            <div className="flex items-center gap-4 border-b border-[#bf953f]/40 pb-3">
              <span className="text-3xl bg-[#fffdf9] p-2.5 rounded-lg border border-[#bf953f]">🌐</span>
              <h4 
                className="font-serif font-bold text-[#8b2b22] m-0" 
                style={{ fontSize: bothClosed ? '26px' : '22px' }}
              >
                Pan-India Financial Assistance
              </h4>
            </div>
            <p 
              className="font-serif text-[#111111] font-medium leading-relaxed m-0 text-justify" 
              style={{ fontSize: bothClosed ? '20px' : '17px' }}
            >
              The Trust extends comprehensive financial assistance to deserving Veda Pāṭhaśālās across India. Such assistance enables institutions in even the most remote areas to maintain high standards of Vedic education.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 3: Maha Periyava's Message Quote Panel */}
      <section className="mt-2 bg-[#f4ebd4]/60 border-2 border-[#222]/60 rounded-2xl p-8 md:p-12 text-center shadow-inner max-w-[1100px] mx-auto w-full">
        <h4 
          className="m-0 font-bold mb-6 font-serif text-[#8b2b22]"
          style={{ fontSize: bothClosed ? '32px' : '28px' }}
        >
          Maha Periyava's Message
        </h4>
        
        <blockquote 
          className="m-0 mx-auto italic font-bold text-center text-[#111111] max-w-[900px] mb-6"
          style={{ 
            fontFamily: 'Georgia, serif',
            fontSize: bothClosed ? '26px' : '21px',
            lineHeight: '1.6'
          }}
        >
          "The preservation of the Vedas is the foremost duty, as they are the foundation of Sanatana Dharma and the source of all spiritual and cultural discipline."
        </blockquote>
        
        <p 
          className="m-0 font-serif text-center text-[#333333] font-semibold mx-auto max-w-[800px]"
          style={{ 
            fontSize: bothClosed ? '17px' : '14px',
            lineHeight: '1.6'
          }}
        >
          Ancient traditions should not be discarded merely for being old but should be judged by their true value and purpose. Neglecting the Vedas leads to the decay of Dharma, while preserving them ensures prosperity and peace for the world.
        </p>
      </section>

    </div>
  );
}