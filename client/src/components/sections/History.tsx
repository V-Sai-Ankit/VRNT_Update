import React, { useState, useRef, useLayoutEffect } from 'react';
import { Play, ExternalLink, Calendar, Award, ChevronLeft, ChevronRight } from "lucide-react";

interface HistoryProps {
  isMenuOpen?: boolean;
  isDrawerOpen?: boolean;
  subView?: string | null;
  setSubView?: (view: string | null) => void;
}

interface VideoCardProps {
  video: {
    id: string;
    title: string;
    description: string;
    link: string;
    previewUrl?: string;
  };
}

function HoverVideoCard({ video }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <a
      href={video.link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group bg-[#f7f4eb] border border-[#d8caae] rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col no-underline cursor-pointer"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-black/10">
        <img 
          src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
          alt={video.title} 
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isHovered && video.previewUrl ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {video.previewUrl ? (
          <video
            ref={videoRef}
            src={video.previewUrl}
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ) : (
          isHovered && (
            <iframe
              src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=0&start=30&end=40&loop=1&playlist=${video.id}`}
              title={video.title}
              className="absolute inset-0 w-full h-full pointer-events-none"
              allow="autoplay; encrypted-media"
            />
          )
        )}

        <div className={`absolute inset-0 bg-black/25 transition-opacity duration-300 flex items-center justify-center ${
          isHovered ? 'opacity-0' : 'opacity-100'
        }`}>
          <div className="w-12 h-12 rounded-full bg-[#8b2b22] text-white flex items-center justify-center shadow-md pl-0.5">
            <Play className="w-5 h-5 fill-white" />
          </div>
        </div>
      </div>

      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h3 className="font-serif font-bold text-base md:text-lg text-[#8b2b22] group-hover:text-[#b4892c] transition-colors m-0 mb-2 line-clamp-2">
            {video.title}
          </h3>
          <p className="font-serif text-xs md:text-sm text-[#4a3f35] m-0 leading-relaxed line-clamp-2">
            {video.description}
          </p>
        </div>
        <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[#b4892c] uppercase tracking-wider">
          <span>Click here to watch</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </div>
      </div>
    </a>
  );
}

export default function History({ 
  isMenuOpen = false, 
  isDrawerOpen = false,
  subView: externalSubView,
  setSubView: externalSetSubView
}: HistoryProps) {
  const [internalSubView, setInternalSubView] = useState<string | null>(null);
  const [currentAchieveIndex, setCurrentAchieveIndex] = useState(0);

  const activeSubView = externalSubView !== undefined ? externalSubView : internalSubView;

  // Managed navigation that preserves scroll state (exact same as Pariksha)
  const handleSetSubView = (view: string | null) => {
    if (view) {
      // 1. Save scroll position before opening sub-view
      sessionStorage.setItem('history_scroll_pos', window.scrollY.toString());
      
      // Update view
      if (externalSetSubView) {
        externalSetSubView(view);
      } else {
        setInternalSubView(view);
      }

      // 2. Scroll to top for the sub-view page
      window.scrollTo(0, 0);
    } else {
      // Return back to main list
      if (externalSetSubView) {
        externalSetSubView(null);
      } else {
        setInternalSubView(null);
      }
    }
  };

  // Restore scroll position when returning to main overview page
  useLayoutEffect(() => {
    if (!activeSubView) {
      const savedPos = sessionStorage.getItem('history_scroll_pos');
      if (savedPos !== null) {
        window.scrollTo(0, parseInt(savedPos, 10));
        sessionStorage.removeItem('history_scroll_pos');
      }
    }
  }, [activeSubView]);

  const achievementImages = [
    "/history/IMG-20260813-WA0003.jpg",
    "/history/IMG-20260818-WA0002.jpg",
    "/history/IMG-20260818-WA0003.jpg",
    "/history/IMG-20260818-WA0004.jpg",
    "/history/IMG-20260818-WA0005.jpg",
    "/history/IMG-20260818-WA0006.jpg",
    "/history/IMG-20260818-WA0007.jpg",
  ];

  const handleNextAchievement = () => {
    setCurrentAchieveIndex((prev) => (prev + 1) % achievementImages.length);
  };

  const handlePrevAchievement = () => {
    setCurrentAchieveIndex((prev) => (prev - 1 + achievementImages.length) % achievementImages.length);
  };

  const historyVideos = [
    {
      id: "CoOogXw-1_c",
      title: "Experience with Mahaperiyava - Full VRNT History & Peetathipathi Selection",
      description: "Smt. Parvati Jayaraman shares profound insights and experiences regarding the full history of Veda Rakshana Nidhi Trust and Mahaperiyava.",
      link: "https://youtu.be/CoOogXw-1_c?si=Hz_6LSs9KKCzFHbv"
    }
  ];

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

  /* --------------------------------------------------------------------------
     1. PARIKSHA-STYLE SUB-VIEW: GOLDEN JUBILEE INVITATION
  -------------------------------------------------------------------------- */
  if (activeSubView === 'jubilee') {
    return (
      <div className="w-full flex flex-col gap-6 pb-12 pt-4 font-serif text-[#171717]">
        <button 
          onClick={() => handleSetSubView(null)}
          className="self-start text-xs font-serif italic text-[#b4892c] hover:underline flex items-center gap-1 transition-all cursor-pointer bg-transparent border-none p-0"
        >
          <span>← Back to History</span>
        </button>

        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-[#8b2b22] m-0 leading-tight">
            Golden Jubilee Celebration (50 Years) Circular
          </h1>
          <p className="text-xs md:text-sm font-serif text-[#705844] mt-2 mb-0">
            Published for 50th Year Celebrations · Official Document from Veda Rakshana Nidhi Trust
          </p>
        </div>

        <div className="w-full bg-[#fbf8f0] border border-[#d8caae] rounded-2xl p-4 md:p-10 shadow-xs flex flex-col items-center">
          <h3 className="font-serif font-bold text-lg md:text-xl text-[#8b2b22] mb-6 text-center">
            Official Invitation Document
          </h3>

          <div className="w-full max-w-3xl bg-white border-4 double border-[#b4892c]/60 rounded-xl p-3 md:p-6 shadow-sm flex flex-col items-center">
            <img 
              src="/history/Golden jublee.jpg" 
              alt="Golden Jubilee Invitation Circular" 
              className="w-full h-auto object-contain rounded"
              onError={(e) => { (e.target as HTMLImageElement).src = "/images/logo.png"; }}
            />
          </div>
        </div>
      </div>
    );
  }

  /* --------------------------------------------------------------------------
     2. PARIKSHA-STYLE SUB-VIEW: ACHIEVEMENTS GALLERY
  -------------------------------------------------------------------------- */
  if (activeSubView === 'achievements') {
    return (
      <div className="w-full flex flex-col gap-6 pb-12 pt-4 font-serif text-[#171717]">
        <button 
          onClick={() => handleSetSubView(null)}
          className="self-start text-xs font-serif italic text-[#b4892c] hover:underline flex items-center gap-1 transition-all cursor-pointer bg-transparent border-none p-0"
        >
          <span>← Back to History</span>
        </button>

        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-[#8b2b22] m-0 leading-tight">
            Trust Achievements & Honors Circular
          </h1>
          <p className="text-sm md:text-base font-serif text-[#4a3f35] font-medium mt-2.5 mb-1 leading-relaxed">
            Award given to VRNT by Sri Bhandarakeri Mutt Karnataka at Raichur. Rec'd on our behalf by Ganesha Ghanapaty and Ghanapaty Bhat.
          </p>
          <p className="text-xs md:text-sm font-serif text-[#705844] m-0">
            Historic milestone document {currentAchieveIndex + 1} of {achievementImages.length}
          </p>
        </div>

        <div className="w-full bg-[#fbf8f0] border border-[#d8caae] rounded-2xl p-4 md:p-8 shadow-xs flex flex-col items-center gap-6">
          <h3 className="font-serif font-bold text-lg md:text-xl text-[#8b2b22] mb-1 text-center">
            Honor Presentation Record
          </h3>

          <div className="relative w-full max-w-4xl bg-white border-4 double border-[#b4892c]/60 rounded-xl p-3 md:p-6 shadow-sm flex items-center justify-center min-h-[420px]">
            <img 
              src={achievementImages[currentAchieveIndex]} 
              alt={`Achievement Photo ${currentAchieveIndex + 1}`} 
              className="max-w-full max-h-[75vh] object-contain rounded shadow-xs"
              onError={(e) => { (e.target as HTMLImageElement).src = "/images/logo.png"; }}
            />

            <button 
              onClick={handlePrevAchievement}
              className="absolute left-3 md:left-6 bg-[#8b2b22]/90 hover:bg-[#8b2b22] text-white p-3 rounded-full shadow-lg transition-all cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={handleNextAchievement}
              className="absolute right-3 md:right-6 bg-[#8b2b22]/90 hover:bg-[#8b2b22] text-white p-3 rounded-full shadow-lg transition-all cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex gap-2.5 overflow-x-auto max-w-full py-2 px-1">
            {achievementImages.map((imgUrl, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentAchieveIndex(idx)}
                className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all p-0.5 bg-white cursor-pointer shrink-0 ${
                  currentAchieveIndex === idx ? 'border-[#8b2b22] scale-105 shadow-md' : 'border-gray-300 opacity-60 hover:opacity-100'
                }`}
              >
                <img src={imgUrl} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover rounded" />
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* --------------------------------------------------------------------------
     3. PROFILE DETAIL SUB-VIEW (Sri Annadurai Iyengar)
  -------------------------------------------------------------------------- */
  if (activeSubView === 'annadurai') {
    const selected = historyProfiles.find(p => p.id === 'annadurai');
    if (!selected) return null;

    return (
      <div className="w-full flex flex-col gap-6 pb-12 pt-4 font-serif text-[#171717]">
        <button 
          onClick={() => handleSetSubView(null)}
          className="self-start text-xs font-serif italic text-[#b4892c] hover:underline flex items-center gap-1 transition-all cursor-pointer bg-transparent border-none p-0"
        >
          <span>← Back to History List</span>
        </button>

        <div className="w-full bg-[#fbf8f0] border border-[#d8caae] p-6 md:p-10 rounded-xl shadow-xs flex flex-col gap-8 mt-2">
          <div className="w-full flex flex-col md:flex-row gap-8 items-center border-b border-gray-300 pb-6">
            <div className="bg-white p-3 border-2 border-[#b4892c]/50 rounded-lg shadow-sm w-48 h-56 shrink-0 overflow-hidden flex items-center justify-center">
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

          <div className="w-full flex flex-col gap-6">
            <h3 className="text-sm uppercase font-sans tracking-wider text-[#b4892c] font-bold m-0">
              வாழ்வின் முக்கிய சிறப்பம்சங்கள்:
            </h3>

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

  /* --------------------------------------------------------------------------
     4. MAIN HISTORY OVERVIEW PAGE
  -------------------------------------------------------------------------- */
  return (
    <div className="w-full flex flex-col gap-8 pb-12 pt-4 font-serif">
      <section className="text-center border-b border-gray-200 pb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#8b2b22] mb-2 uppercase tracking-wide">
          History
        </h1>
        <div className="w-24 h-1 bg-[#bf953f] mx-auto mt-2 rounded-full" />
      </section>

      {/* Profiles Cards */}
      <div className="flex items-center justify-center w-full px-2">
        {historyProfiles.map((profile) => (
          <div 
            key={profile.id}
            className="bg-[#fbf8f0] border border-[#d8caae] rounded-xl p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow max-w-[480px] w-full"
          >
            <div className="flex gap-5 items-start">
              <div className="w-24 h-28 bg-white border border-[#d8caae] rounded-lg shrink-0 overflow-hidden p-1 flex items-center justify-center shadow-3xs">
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
              onClick={() => handleSetSubView('annadurai')}
              className="mt-6 w-full text-center bg-[#1a365d] hover:bg-[#224273] text-white text-xs font-sans font-bold uppercase py-2.5 rounded-lg transition-colors border-none cursor-pointer tracking-widest shadow-3xs"
            >
              Read Full History →
            </button>
          </div>
        ))}
      </div>

      {/* 🏛️ History of Events Section */}
      <div className="w-full max-w-4xl mx-auto px-2 mt-4 flex flex-col gap-6">
        <div className="border-b border-[#d8caae]/80 pb-3 mb-2 flex items-center gap-3">
          <span className="text-3xl">🏛️</span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#8b2b22] m-0">
            History of Events
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* 1. Golden Jubilee Card */}
          <div className="bg-[#fbf8f0] border border-[#d8caae] rounded-xl p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-5 h-5 text-[#b4892c]" />
                <h3 className="font-serif font-bold text-xl text-[#8b2b22] m-0">
                  Golden Jubilee Celebration
                </h3>
              </div>
              
              <div 
                onClick={() => handleSetSubView('jubilee')}
                className="w-full h-52 bg-white border border-gray-300 rounded-lg overflow-hidden mb-4 flex items-center justify-center p-2 cursor-pointer group hover:border-[#b4892c] transition-all shadow-2xs"
              >
                <img 
                  src="/history/Golden jublee.jpg" 
                  alt="Golden Jubilee Celebration" 
                  className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-300"
                  onError={(e) => { (e.target as HTMLImageElement).src = "/images/logo.png"; }}
                />
              </div>

              <p className="font-serif text-sm text-[#4a3f35] leading-relaxed text-justify m-0">
                Celebration of 50 glorious years of dedicated service in preserving and fostering the Vedic heritage and traditions.
              </p>
            </div>

            <button
              onClick={() => handleSetSubView('jubilee')}
              className="mt-6 w-full text-center bg-[#1a365d] hover:bg-[#224273] text-white text-xs font-sans font-bold uppercase py-2.5 rounded-lg transition-colors border-none cursor-pointer tracking-widest shadow-3xs"
            >
              View Full Circular →
            </button>
          </div>

          {/* 2. Achievements Card */}
          <div className="bg-[#fbf8f0] border border-[#d8caae] rounded-xl p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#b4892c]" />
                  <h3 className="font-serif font-bold text-xl text-[#8b2b22] m-0">
                    Achievements
                  </h3>
                </div>
                <span className="text-xs font-sans text-[#b4892c] font-bold">
                  7 Photos
                </span>
              </div>
              
              <div 
                onClick={() => handleSetSubView('achievements')}
                className="w-full h-52 bg-white border border-gray-300 rounded-lg overflow-hidden mb-4 flex items-center justify-center p-2 cursor-pointer group hover:border-[#b4892c] transition-all shadow-2xs"
              >
                <img 
                  src={achievementImages[0]} 
                  alt="Achievements Preview" 
                  className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-300"
                  onError={(e) => { (e.target as HTMLImageElement).src = "/images/logo.png"; }}
                />
              </div>

              <p className="font-serif text-sm text-[#4a3f35] leading-relaxed text-justify m-0">
                Award given to VRNT by Sri Bhandarakeri Mutt Karnataka at Raichur. Rec'd on our behalf by Ganesha Ghanapaty and Ghanapaty Bhat.
              </p>
            </div>

            <button
              onClick={() => handleSetSubView('achievements')}
              className="mt-6 w-full text-center bg-[#1a365d] hover:bg-[#224273] text-white text-xs font-sans font-bold uppercase py-2.5 rounded-lg transition-colors border-none cursor-pointer tracking-widest shadow-3xs"
            >
              View Full Circular →
            </button>
          </div>

        </div>
      </div>

      {/* 📹 Videos Section */}
      <div className="w-full max-w-4xl mx-auto px-2 mt-4">
        <div className="border-b border-[#d8caae]/80 pb-3 mb-6 flex items-center gap-3">
          <span className="text-3xl">📹</span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#8b2b22] m-0">
            Videos
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {historyVideos.map((video) => (
            <HoverVideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
}