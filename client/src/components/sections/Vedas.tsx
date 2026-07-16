import React, { useState } from 'react';

interface VedasPageProps {
  isMenuOpen: boolean;
  isDrawerOpen: boolean;
  subView: string;
  setSubView: (view: string) => void;
}

export default function VedasPage({ isMenuOpen, isDrawerOpen, subView, setSubView }: VedasPageProps) {
  const bothClosed = !isMenuOpen && !isDrawerOpen;
  
  // Track open states for the 3 dropdown segments independently
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const articles = [
    {
      id: "about",
      icon: "📙",
      title: "About the Vedas",
      short: "The Vedas (Sabda-Brahman) are co-existent with God and the Universe, forming the bedrock of Bharatiya Culture.",
      quote: `"Vedo'khilo dharma moolam" — The entire Veda is the foundation source of all righteousness and cosmic law.`,
      extended: "The word Veda is derived from the root 'Vid' meaning to know. Thus, Veda signifies ultimate, unoriginated knowledge. They are classified as Apaurusheya, meaning they are not created by human agency but rather cognized by ancient Rishis in states of deep meditative intensity. They contain timeless scientific truths, philosophical insights, and moral frameworks that serve as the blueprint for planetary harmony."
    },
    {
      id: "rakshanam",
      icon: "🛡️",
      title: "Veda Rakshanam",
      short: "The Vedas are conceived as a tree (Veda Vriksha) whose roots must be watered to arrest its decay.",
      quote: `"Vedo rakshati rakshitah" — The Vedas protect those who protect and preserve them down the generations.`,
      extended: "Veda Rakshanam refers to the absolute duty of preserving the textual accuracy, complex intonations, and operational patterns of Vedic sounds. Since the core texts were traditionally oral, preserving the lineage requires protecting the paths of scholars who spend decades mastering these acoustic frequencies through the flawless Guru-Shishya mode."
    },
    {
      id: "vyasa",
      icon: "📝",
      title: "Veda Vyasa",
      short: "How Bhagavan Veda Vyasa classified the Vedas into four to save them from destruction in Kali Yuga.",
      quote: `"In the yuga that is to commence, the life-span of people will be short; their memory-power will be weak; something should be done in order to save the Veda from utter destruction."`,
      extended: "Vyasa is widely revered as Veda Vyasa. Recognizing the spiritual declension accompanying the dawn of Kali Yuga, he systematically classified the sprawling oceanic Vedic collection into four distinct operational streams: Rig, Yajur, Sama, and Atharva. He subsequently entrusted these divisions to his primary disciples—Paila, Vaisampayana, Jaimini, and Sumantu—to ensure targeted maintenance."
    }
  ];

  // If a user clicks full article, render this layout view instead
  if (subView !== 'list') {
    const activeArticle = articles.find(a => a.id === subView);
    if (!activeArticle) return null;

    return (
      <div className="w-full flex flex-col gap-6 pb-10">
        <section className="mt-2 border-t border-[#222] pt-6">
          <button 
            onClick={() => setSubView('list')}
            className="mb-6 inline-flex items-center gap-2 bg-[#1a365d] text-white px-4 py-2 rounded font-sans font-bold border border-[#222] hover:bg-[#224273] cursor-pointer transition-colors"
          >
            ← Back to Overview
          </button>

          <div className="bg-[#fcfaf2] p-8 border border-[#222] shadow-[4px_4px_0_#222] rounded-xl flex flex-col gap-6 w-full">
            <div className="flex items-center gap-4 border-b border-[#222]/10 pb-4">
              <span className="text-4xl">{activeArticle.icon}</span>
              <h2 
                className="font-serif font-bold text-[#8b2b22] m-0"
                style={{ fontSize: bothClosed ? '44px' : '36px' }}
              >
                {activeArticle.title}
              </h2>
            </div>

            <blockquote 
              className="m-0 border-l-4 border-[#ff7f5c] bg-[#ff7f5c]/5 pl-4 py-3 italic font-serif text-[#171717] font-medium"
              style={{ fontSize: bothClosed ? '22px' : '18px', lineHeight: '1.6' }}
            >
              {activeArticle.quote}
            </blockquote>

            <p 
              className="m-0 font-serif text-[#171717] text-justify whitespace-pre-line"
              style={{ 
                fontSize: bothClosed ? '20px' : '16px', 
                lineHeight: bothClosed ? '2.0' : '1.7' 
              }}
            >
              {activeArticle.short}
              {"\n\n"}
              {activeArticle.extended}
            </p>
          </div>
        </section>
      </div>
    );
  }

  // Base Dropdown List View Tracker
  return (
    <div className="w-full flex flex-col gap-8 pb-10">
      <section className="mt-2 border-t border-[#222] pt-6">
        <div className="text-center mb-8">
          <h2 
            className="font-serif font-bold text-[#8b2b22] m-0"
            style={{ fontSize: bothClosed ? '48px' : '40px' }}
          >
            The Holy Vedas
          </h2>
          <p 
            className="font-serif text-[#4a4a4a] mt-2"
            style={{ fontSize: bothClosed ? '20px' : '16px' }}
          >
            Explore the timeless wisdom and the sacred mission of preserving the eternal Vedic heritage.
          </p>
        </div>

        {/* Accordion Container Wrapper */}
        <div className="flex flex-col gap-4 w-full mt-6">
          {articles.map((article, idx) => {
            const isOpen = openDropdown === idx;
            return (
              <div 
                key={article.id} 
                className="bg-[#f7f4eb] border border-[#222] rounded-xl overflow-hidden transition-all duration-300"
              >
                {/* Header Toggle Box */}
                <button
                  onClick={() => setOpenDropdown(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-[#ebdcc1]/30 cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-white border border-[#e5dcc6] rounded-lg p-2.5 text-2xl shadow-inner shrink-0">
                      {article.icon}
                    </div>
                    <div className="flex flex-col">
                      <h4 
                        className="font-serif font-bold text-[#8b2b22] m-0 leading-tight"
                        style={{ fontSize: bothClosed ? '22px' : '18px' }}
                      >
                        {article.title}
                      </h4>
                      <p className="font-serif text-gray-500 text-xs mt-0.5 line-clamp-1 md:line-clamp-none">
                        {article.short}
                      </p>
                    </div>
                  </div>
                  {/* Caret Down Indicator Icon */}
                  <span 
                    className={`text-[#8b2b22] text-xl font-bold transition-transform duration-300 transform ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {/* Collapsible Content Dropdown Panel */}
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[1000px] border-t border-[#222]/10 p-6 bg-white/50' : 'max-h-0 overflow-hidden'
                  }`}
                >
                  {isOpen && (
                    <div className="flex flex-col gap-4 animate-fade-in">
                      <blockquote className="m-0 border-l-4 border-[#8b2b22] pl-4 italic text-[#4a4a4a] bg-[#8b2b22]/5 py-2 rounded-r">
                        {article.quote}
                      </blockquote>
                      
                      <p 
                        className="font-serif text-[#171717] text-justify m-0"
                        style={{ fontSize: bothClosed ? '17px' : '14px', lineHeight: '1.6' }}
                      >
                        {article.extended.substring(0, 180)}...
                      </p>

                      <button
                        onClick={() => setSubView(article.id)}
                        className="mt-2 text-left text-[#ff7f5c] hover:text-[#d95f3d] font-serif font-bold bg-transparent border-none p-0 cursor-pointer transition-colors w-max"
                        style={{ fontSize: bothClosed ? '16px' : '14px' }}
                      >
                        View Full Article →
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}