import React from 'react';

interface MissionPageProps {
  isMenuOpen: boolean;
  isDrawerOpen: boolean;
}

export default function MissionPage({ isMenuOpen, isDrawerOpen }: MissionPageProps) {
  const bothClosed = !isMenuOpen && !isDrawerOpen;

  return (
    <div className="w-full flex flex-col gap-10 pb-10">
      
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
                    className="m-0 text-justify"
                    style={{ 
                      fontFamily: 'Georgia, serif', 
                      fontSize: bothClosed ? '19px' : '16px', 
                      lineHeight: '1.6',
                      color: '#4a4a4a'
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
            {/* Card 1 */}
            <div className="bg-[#fcfaf2] p-5 border border-[#222] shadow-[3px_3px_0_#222] flex flex-col gap-4 rounded-md">
              <div className="w-full h-[180px] overflow-hidden rounded border border-gray-300">
                <img src="/images/vedic-heritage.png" alt="Vedic Heritage" className="w-full h-full object-cover" />
              </div>
              <h4 className="m-0 font-bold font-serif text-xl text-[#8b2b22]">Vedic Heritage</h4>
              <p className="m-0 font-serif text-sm text-[#4a4a4a] leading-relaxed">Preserving the ancient texts in their pristine purity for future generations.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#fcfaf2] p-5 border border-[#222] shadow-[3px_3px_0_#222] flex flex-col gap-4 rounded-md">
              <div className="w-full h-[180px] overflow-hidden rounded border border-gray-300">
                <img src="/images/education.jpg" alt="Education" className="w-full h-full object-cover" />
              </div>
              <h4 className="m-0 font-bold font-serif text-xl text-[#8b2b22]">Education</h4>
              <p className="m-0 font-serif text-sm text-[#4a4a4a] leading-relaxed">Supporting Gurukula education and traditional teaching methods.</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: Major Initiatives Grid Container */}
      <section className="border-t border-[#222] pt-8 mt-4">
        <h3 
          className="text-center mx-auto mb-8 font-bold border-b-2 border-double border-[#8b2b22] pb-2 max-w-max"
          style={{ 
            fontFamily: 'Georgia, serif', 
            fontSize: bothClosed ? '44px' : '38px', 
            color: '#8b2b22'
          }}
        >
          Major Initiatives
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
  {[
    {
      icon: "👥",
      title: "Hereditary Niyama Adhyanam (HNY)",
      desc: "Reviving the hereditary mode of Vedic learning, where a father imparts the Vedas to his son, ensuring precision in pronunciation and purity in intonation."
    },
    {
      icon: "🛡️",
      title: "Rare Veda Shaakhas Support",
      desc: "Establishing Pathashalas dedicated to rare Shaakhas on the brink of extinction, providing disciplined training under qualified scholars."
    },
    {
      icon: "🌐",
      title: "Pan-India Assistance",
      desc: "Extending comprehensive financial support to deserving Veda Pathashalas across India, ensuring economic challenges do not hinder sacred learning."
    },
    {
      icon: "📖",
      title: "Academic Monitoring",
      desc: "Conducting regular inspections and Varshika Pariksha to maintain academic rigor and uniformity across all affiliated institutions."
    }
  ].map((item, idx) => (
    <div key={idx} className="bg-[#f7f4eb] border border-[#222] p-6 rounded-xl flex flex-col gap-4 items-start shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-[#fffdf9] border border-[#e5dcc6] rounded-lg p-3 text-2xl shadow-inner">
        {item.icon}
      </div>
      
      {/* Increased Title: Dynamically scales up to 22px when panels are closed, 18px otherwise */}
      <h4 
        className="font-serif font-bold text-[#8b2b22] m-0 leading-snug min-h-[56px] flex items-center transition-all duration-300"
        style={{ fontSize: bothClosed ? '22px' : '18px' }}
      >
        {item.title}
      </h4>
      
      {/* Increased Description: Dynamically scales up to 16px when panels are closed, 14px otherwise */}
      <p 
        className="font-serif text-[#4a4a4a] leading-relaxed m-0 text-justify transition-all duration-300"
        style={{ fontSize: bothClosed ? '16px' : '14px' }}
      >
        {item.desc}
      </p>
    </div>
  ))}
</div>
      </section>

      {/* SECTION 3: Maha Periyava's Message Quote Panel */}
      <section className="mt-4 bg-[#f4ebd4]/40 border border-[#222]/60 rounded-2xl p-8 md:p-12 text-center shadow-inner max-w-[1100px] mx-auto w-full">
        <h4 
          className="m-0 font-bold mb-6 font-serif text-[#8b2b22]"
          style={{ fontSize: bothClosed ? '32px' : '28px' }}
        >
          Maha Periyava's Message
        </h4>
        
        <blockquote 
          className="m-0 mx-auto italic font-medium text-center text-[#171717] max-w-[900px] mb-6"
          style={{ 
            fontFamily: 'Georgia, serif',
            fontSize: bothClosed ? '26px' : '21px',
            lineHeight: '1.6'
          }}
        >
          "The preservation of the Vedas is the foremost duty, as they are the foundation of Sanatana Dharma and the source of all spiritual and cultural discipline."
        </blockquote>
        
        <p 
          className="m-0 font-serif text-center text-[#555] mx-auto max-w-[800px]"
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