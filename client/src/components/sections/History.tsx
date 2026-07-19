import React, { useState } from 'react';

interface HistoryProps {
  isMenuOpen: boolean;
  isDrawerOpen: boolean;
}

export default function History({ isMenuOpen, isDrawerOpen }: HistoryProps) {
  const [activeProfile, setActiveProfile] = useState<string | null>(null);

  const historyProfiles = [
    {
      id: "annadurai",
      title: "ஸ்ரீ அண்ணாதுரை ஐயங்கார்",
      subtitle: "வேத ரக்ஷாமணி",
      image: "/history/IMG-20260716-WA0010.jpg",
      previewText: "ஸ்ரீ மஹாபெரியவாளின் ஆணைப்படி வேதங்களைப் பாதுகாப்பதற்காகத் தன் வாழ்க்கையையே அர்ப்பணித்த ஒரு தீவிர பக்தர் மற்றும் கர்ம யோகி...",
      introduction: "ஸ்ரீ அண்ணாதுரை ஐயங்கார் அவர்கள், ஸ்ரீ மஹாபெரியவா (ஸ்ரீ சந்திரசேகரேந்திர சரஸ்வதி ஸ்வாமிகள்) அவர்களின் ஆணைப்படி வேதங்களைப் பாதுகாப்பதற்காகத் தன் வாழ்க்கையையே அர்ப்பணித்த ஒரு தீவிர பக்தர் ஆவார். அவர் ஒரு கர்ம யோகி. மஹாபெரியவா மீது ஆழ்ந்த பக்தி கொண்ட இவர், 1940-ஆம் ஆண்டில் உருவாக்கப்பட்ட 'வேத ரக்ஷண நிதி' அறக்கட்டளையின் முக்கிய பொறுப்பாளராக நியமிக்கப்பட்டார்.",
      highlights: [
        {
          label: "வழக்கறிஞர் தொழிலைத் துறப்பு",
          text: "அண்ணாதுரை ஐயங்கார் ஒரு முன்னணி வழக்கறிஞராக இருந்தவர். ஆனால் மஹாபெரியவாவின் அறிவுரைக்காக, தனது வழக்கறிஞர் தொழிலையும், ஆடம்பர வாழ்க்கையையும் கைவிட்டார்."
        },
        {
          label: "வேத கைங்கர்யம்",
          text: "தன்னிடம் இருந்த 8 ஏக்கர் நிலத்தையும், வருமானத்தையும் வேத பாடசாலைகளுக்காகவும், வேத விற்பன்னர்களுக்காகவும் முழுமையாகத் தானம் செய்தார்."
        },
        {
          label: "வேத ரக்ஷண நிதி",
          text: "பம்பாயைச் சேர்ந்த சுப்பராம ஐயர் ஆகியோருடன் இணைந்து, \"நக்ஷத்ர காணிக்கை\" (மாதம் ஒரு ரூபாய்) எனும் திட்டத்தை முன்னெடுத்து வேத பாடசாலைகளை உருவாக்கினார்."
        },
        {
          label: "பெரியவாளின் அனுக்ரஹம்",
          text: "வேத வித்வான்களின் சிரமங்களைப் புரிந்து கொண்டு அவர்களுக்கு மாதம் ரூபாய் 100 வழங்கி உதவினார். இவரின் தீவிர சேவையைப் பாராட்டி மஹாபெரியவா இவருக்கு \"வேத ரக்ஷாமணி\" என்ற பட்டத்தை அளித்துக் கௌரவித்தார்."
        }
      ],
      miracle: "ஒரு சமயம் ஸ்ரீ அண்ணாதுரை ஐயங்கார் அவர்கள் தன்னுடைய இடது கண் அறுவை சிகிச்சைக்காக செல்வதற்கு முன் ஸ்ரீ மகாபெரியவா அவர்களிடம் உத்தரவு வாங்க சென்றார். அப்போது ஸ்ரீ மகாபெரியவா அவர்கள் சொம்பிலிருந்து சிறிது ஜலம் எடுத்து தன்னுடைய இடது கண்ணை துடைத்து விட்டு உத்தரவு கொடுத்தார். ஆனால் அறுவை சிகிச்சைக்கு சென்றபோது எடுத்த டெஸ்டில் கண் நன்றாக இருந்ததால் அறுவை சிகிச்சை இல்லாமல் திரும்பி வந்து ஸ்ரீ மகாபெரியவா அவர்களுக்கு நமஸ்காரம் செய்து நன்றி தெரிவித்தார். இதிலிருந்து ஸ்ரீ மகாபெரியவா அவர்கள் ஸர்வ வியாபி என்று தெரிகிறது."
    }
  ];

  if (activeProfile) {
    const selected = historyProfiles.find(p => p.id === activeProfile);
    if (!selected) return null;

    return (
      <div className="w-full flex flex-col gap-6 pb-12 pt-4 font-serif text-[#171717]">
        <button 
          onClick={() => { setActiveProfile(null); window.scrollTo(0, 0); }}
          className="self-start text-xs font-sans font-bold uppercase tracking-wider text-[#8b2b22] bg-white border border-[#8b2b22]/30 px-4 py-2 rounded-md hover:bg-[#8b2b22] hover:text-white transition-all cursor-pointer shadow-2xs"
        >
          ← Back to History List
        </button>

        {/* Master Page Wrapper Panel */}
        <div className="w-full bg-[#f7f4eb] border border-[#222]/20 p-6 md:p-10 rounded-xl shadow-md flex flex-col gap-8 mt-2">
          
          {/* Top Headline Layout Row */}
          <div className="w-full flex flex-col md:flex-row gap-8 items-center border-b border-gray-300 pb-6">
            <div className="bg-white p-3 border border-[#222]/80 rounded-lg shadow-sm w-48 h-56 shrink-0 overflow-hidden flex items-center justify-center">
              <img 
                src={selected.image} 
                alt={selected.title} 
                className="w-full h-full object-contain rounded"
                onError={(e) => { (e.target as HTMLImageElement).src = "/images/logo.png"; }}
              />
            </div>
            <div className="flex-grow text-center md:text-left">
              <span className="text-xs font-sans text-[#b4892c] font-bold uppercase tracking-wider mb-1 block">{selected.subtitle}</span>
              <h2 className="text-[#8b2b22] font-bold text-2xl md:text-3xl m-0 leading-tight">{selected.title}</h2>
              <p className="text-base md:text-lg leading-relaxed text-justify mt-4 m-0 text-gray-800">
                {selected.introduction}
              </p>
            </div>
          </div>

          {/* Core Content Body Section */}
          <div className="w-full flex flex-col gap-6">
            <h3 className="text-sm uppercase font-sans tracking-wider text-[#b4892c] font-bold m-0">
              வாழ்வின் முக்கிய சிறப்பம்சங்கள்:
            </h3>
            
            {/* Highlight Cards Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/90 p-5 rounded-lg border border-gray-200 shadow-3xs flex flex-col gap-3">
                <strong className="text-[#8b2b22] text-lg border-b border-gray-100 pb-1.5">{selected.highlights[0].label}</strong>
                <p className="text-sm text-gray-700 leading-relaxed m-0 text-justify">{selected.highlights[0].text}</p>
              </div>

              <div className="bg-white/90 p-5 rounded-lg border border-gray-200 shadow-3xs flex flex-col gap-3">
                <strong className="text-[#8b2b22] text-lg border-b border-gray-100 pb-1.5">{selected.highlights[1].label}</strong>
                <p className="text-sm text-gray-700 leading-relaxed m-0 text-justify">{selected.highlights[1].text}</p>
              </div>
            </div>

            {/* Visual Interleaved Feature Showcase Area */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch my-2">
              <div className="bg-white p-3 border border-gray-300 rounded-lg shadow-2xs flex items-center justify-center overflow-hidden max-h-[300px]">
                <img 
                  src="/history/IMG-20260716-WA0008.jpg" 
                  alt="Sri Mahaperiyava context" 
                  className="w-full h-full object-cover rounded"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
              <div className="bg-white p-3 border border-gray-300 rounded-lg shadow-2xs flex items-center justify-center overflow-hidden max-h-[300px]">
                <img 
                  src="/history/IMG-20260716-WA0009.jpg" 
                  alt="Sri Mahaperiyava discourse" 
                  className="w-full h-full object-cover rounded"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
            </div>

            {/* Remaining Secondary Details Block */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/90 p-5 rounded-lg border border-gray-200 shadow-3xs flex flex-col gap-3">
                <strong className="text-[#8b2b22] text-lg border-b border-gray-100 pb-1.5">{selected.highlights[2].label}</strong>
                <p className="text-sm text-gray-700 leading-relaxed m-0 text-justify">{selected.highlights[2].text}</p>
              </div>

              <div className="bg-white/90 p-5 rounded-lg border border-gray-200 shadow-3xs flex flex-col gap-3">
                <strong className="text-[#8b2b22] text-lg border-b border-gray-100 pb-1.5">{selected.highlights[3].label}</strong>
                <p className="text-sm text-gray-700 leading-relaxed m-0 text-justify">{selected.highlights[3].text}</p>
              </div>
            </div>

            {/* Bottom Miracle Showcase Panel - Seamlessly stretches layout footprint */}
            {selected.miracle && (
              <div className="bg-[#fffdf9] border-l-4 border-[#bf953f] p-6 mt-4 rounded-r-lg shadow-2xs flex flex-col lg:flex-row gap-6 items-center w-full">
                <div className="flex-grow w-full">
                  <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-[#8b2b22] mb-2.5">
                    பெரியவாளின் மகிமை:
                  </h4>
                  <p className="text-base leading-relaxed text-justify italic m-0 text-gray-800">
                    {selected.miracle}
                  </p>
                </div>
                <div className="w-40 h-40 bg-white p-1.5 border border-gray-300 rounded-lg shrink-0 overflow-hidden shadow-2xs flex items-center justify-center">
                  <img 
                    src="/history/IMG-20260716-WA0011.jpg" 
                    alt="Divine miracle context" 
                    className="w-full h-full object-cover rounded"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-8 pb-12 pt-4 font-serif">
      <section className="text-center border-b border-gray-200 pb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#8b2b22] mb-2 uppercase tracking-wide">
          History
        </h1>
        <div className="w-24 h-1 bg-[#bf953f] mx-auto mt-2 rounded-full" />
      </section>

      <div className="flex items-center justify-center w-full px-2">
        {historyProfiles.map((profile) => (
          <div 
            key={profile.id}
            className="bg-[#f7f4eb] border border-[#222]/20 rounded-xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow max-w-[480px] w-full"
          >
            <div className="flex gap-5 items-start">
              <div className="w-24 h-28 bg-white border border-[#222]/40 rounded-lg shrink-0 overflow-hidden p-1 flex items-center justify-center shadow-3xs">
                <img 
                  src={profile.image} 
                  alt={profile.title} 
                  className="w-full h-full object-contain"
                  onError={(e) => { (e.target as HTMLImageElement).src = "/images/logo.png"; }}
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#8b2b22] font-bold text-lg m-0 leading-snug">{profile.title}</h3>
                <span className="text-[11px] font-sans font-bold text-[#b4892c] uppercase tracking-wider mt-1 block">({profile.subtitle})</span>
                <p className="text-gray-600 text-xs md:text-sm mt-3 line-clamp-3 text-justify leading-relaxed m-0">{profile.previewText}</p>
              </div>
            </div>

            <button
              onClick={() => { setActiveProfile(profile.id); window.scrollTo(0, 0); }}
              className="mt-6 w-full text-center bg-[#1a365d] hover:bg-[#224273] text-white text-xs font-sans font-bold uppercase py-2.5 rounded-lg transition-colors border-none cursor-pointer tracking-widest shadow-3xs"
            >
              Read Full History →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}