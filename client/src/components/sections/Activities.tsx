import React from 'react';

interface ActivitiesProps {
  isMenuOpen: boolean;
  isDrawerOpen: boolean;
}

export default function Activities({ isMenuOpen, isDrawerOpen }: ActivitiesProps) {
  const expanded = !isMenuOpen && !isDrawerOpen;

  const activitiesList = [
    {
      icon: (
        <svg className="h-6 w-6 text-[#8b2b22]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Hereditary Niyama Adhyayananam (HNY) Scheme",
      description: "This unique initiative revives and sustains the hereditary mode of Vedic learning, where a father imparts the Vedas to his son within the family lineage. Such lineage-based teaching is considered the most authentic and time-tested method of preserving Vedic knowledge, ensuring both precision in pronunciation (śīkṣā) and purity in intonation (svara)."
    },
    {
      icon: (
        <svg className="h-6 w-6 text-[#8b2b22]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Support for Rare Veda Shaakhas",
      description: "Certain branches (śākhās) of the Vedas are on the brink of extinction. VRNT has established and supported Veda Pāṭhaśālās dedicated to these rare Shaakhas, providing disciplined training under qualified scholars to ensure the revival of endangered Vedic recensions."
    },
    {
      icon: (
        <svg className="h-6 w-6 text-[#8b2b22]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: "Pan-India Financial Assistance",
      description: "The Trust extends comprehensive financial assistance to deserving Veda Pāṭhaśālās across India. This enables institutions in remote areas to maintain high standards of Vedic education, ensuring economic challenges do not hinder sacred learning."
    }
  ];

  return (
    <div className={`w-full flex flex-col gap-6 transition-all duration-300 ${expanded ? 'p-6' : 'p-0'}`}>
      
      {/* Dynamic Header Block */}
      <div className="text-center mt-2">
        <h2 className={`font-serif font-bold text-[#8b2b22] tracking-wide transition-all ${expanded ? 'text-5xl mb-4' : 'text-3xl md:text-4xl'}`}>
          Trust Activities
        </h2>
      </div>

      {/* Grid Layout Row Framework */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 items-stretch w-full">
        {activitiesList.map((item, idx) => (
          <div 
            key={idx} 
            className="bg-[#ab6346] border border-[#bf953f]/20 rounded-2xl p-6 flex flex-col gap-4 shadow-md text-white transition-all duration-300"
          >
            {/* White Square Icon Shell Container */}
            <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-2xs">
              {item.icon}
            </div>

            {/* Layout Title Info */}
            <h3 className={`font-serif font-bold tracking-wide text-[#ffd700] m-0 leading-snug transition-all ${expanded ? 'text-xl md:text-2xl' : 'text-base md:text-lg'}`}>
              {item.title}
            </h3>

            {/* Content Description Text */}
            <p className={`font-serif text-white/95 m-0 leading-relaxed font-light transition-all ${expanded ? 'text-sm md:text-base' : 'text-xs md:text-sm'}`}>
              {item.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}