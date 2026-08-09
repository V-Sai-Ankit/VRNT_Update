import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

interface InitiativesPageProps {
  isMenuOpen?: boolean;
  isDrawerOpen?: boolean;
  overrideView?: string | null;
  onBack?: () => void;
}

export default function InitiativesPage({ 
  isMenuOpen = false, 
  isDrawerOpen = false,
  overrideView,
  onBack 
}: InitiativesPageProps) {
  const bothClosed = !isMenuOpen && !isDrawerOpen;
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const activeView = overrideView || searchParams.get('view') || 'shakhas';

  const handleBackClick = () => {
    if (onBack) {
      onBack();
    } else {
      navigate('/mission');
    }
  };

  const shakhaData = [
    {
      veda: "Rigveda",
      originalCount: "21",
      availableShakhas: "Shakala (most prominent), Bhashkala"
    },
    {
      veda: "Yajurveda",
      originalCount: "101",
      availableShakhas: (
        <>
          <strong>Shukla:</strong> Madhyandina, Kanva<br />
          <strong>Krishna:</strong> Thaitthiriya, Maitrayani, Kathaka, Kapishthala
        </>
      )
    },
    {
      veda: "Samaveda",
      originalCount: "1,000",
      availableShakhas: "Kauthuma, Ranayaniya, Jaiminiya (or Talavakara)"
    },
    {
      veda: "Atharvaveda",
      originalCount: "9",
      availableShakhas: "Shaunaka, Pippalada"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-col gap-6 text-[#111111] font-serif">
      
      {/* Top Navigation: Back Button */}
      <div className="w-full pt-2">
        <button
          onClick={handleBackClick}
          className="inline-flex items-center gap-2 text-[#8b2b22] font-bold font-serif text-sm sm:text-base border border-[#bf953f]/60 bg-[#fcfaf2] px-4 py-1.5 rounded-md hover:bg-[#8b2b22] hover:text-white transition-all cursor-pointer shadow-sm"
        >
          <span>←</span> Back to Mission Page
        </button>
      </div>

      {/* SECTION 1: Supporting all Available Veda Shakhas */}
      {activeView === 'shakhas' && (
        <section className="border-t-2 border-[#222] pt-4">
          <h1 
            className="text-left font-bold border-b-2 border-[#bf953f]/40 pb-3 mb-8 transition-all duration-300"
            style={{ 
              fontFamily: 'Georgia, serif', 
              fontSize: bothClosed ? '44px' : '36px', 
              lineHeight: '1.2', 
              color: '#8b2b22'
            }}
          >
            Supporting all Available Veda Shakhas
          </h1>

          <div className="grid grid-cols-1 xl:grid-cols-[6fr_5fr] gap-8 items-start w-full">
            <div className="flex flex-col gap-5 text-justify">
              <p className="m-0 font-medium text-[#111111] leading-relaxed" style={{ fontSize: bothClosed ? '20px' : '17px' }}>
                Our traditional scriptures and historical references indicate that there were once more than a thousand Veda shakhas (branches or recensions) in existence across different regions and lineages. These shakhas represented diverse methods of preserving, reciting, and interpreting the Vedic knowledge, each with its own unique style, pronunciation, and textual variations. However, over the passage of time, due to various social, cultural, and historical changes, a significant number of these shakhas have been lost or are no longer actively practiced.
              </p>
              <p className="m-0 font-medium text-[#111111] leading-relaxed" style={{ fontSize: bothClosed ? '20px' : '17px' }}>
                In the present day, only a limited number of these Veda shakhas have survived and continue to be preserved through dedicated efforts. These surviving shakhas are still being practiced and taught by committed scholars, teachers, and students who strive to maintain this invaluable heritage. The currently available and actively practiced shakhas are listed and presented in the adjoining table for reference and clarity.
              </p>
              <p className="m-0 font-medium text-[#111111] leading-relaxed" style={{ fontSize: bothClosed ? '20px' : '17px' }}>
                VRNT plays an important role in supporting and promoting the study of these shakhas. It conducts examinations for all the available shakhas wherever Vidyarthis (students) are present and actively learning. Through these examinations and related initiatives, VRNT helps ensure that the knowledge of the Vedas continues to be transmitted accurately and preserved for future generations.
              </p>
            </div>

            <div className="w-full bg-[#fcfaf2] border-2 border-[#222] p-2 sm:p-3 rounded-lg shadow-[4px_4px_0_#222] overflow-x-auto">
              <table className="w-full border-collapse text-left font-serif text-[#111111]">
                <thead>
                  <tr className="bg-[#ffff00] border-b-2 border-[#222]">
                    <th className="border border-[#222] p-3 text-base sm:text-lg font-bold text-[#111111]">Veda</th>
                    <th className="border border-[#222] p-3 text-base sm:text-lg font-bold text-[#111111] text-center">Original No of shakhas available</th>
                    <th className="border border-[#222] p-3 text-base sm:text-lg font-bold text-[#111111]">Shakhas available today</th>
                  </tr>
                </thead>
                <tbody>
                  {shakhaData.map((row, idx) => (
                    <tr key={idx} className="border-b border-[#222] hover:bg-amber-50/60 transition-colors">
                      <td className="border border-[#222] p-3 font-bold text-base sm:text-lg text-[#8b2b22]">{row.veda}</td>
                      <td className="border border-[#222] p-3 font-bold text-base sm:text-lg text-center">{row.originalCount}</td>
                      <td className="border border-[#222] p-3 text-sm sm:text-base leading-relaxed">{row.availableShakhas}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 2: Hereditary Niyama Adhyayanam (HNY) Scheme */}
      {activeView === 'hny' && (
        <section className="border-t-2 border-[#222] pt-4">
          <h1 
            className="text-left font-bold border-b-2 border-[#bf953f]/40 pb-3 mb-8 transition-all duration-300"
            style={{ 
              fontFamily: 'Georgia, serif', 
              fontSize: bothClosed ? '44px' : '36px', 
              lineHeight: '1.2', 
              color: '#8b2b22'
            }}
          >
            Hereditary Niyama Adhyayanam (HNY) Scheme
          </h1>

          <div className="grid grid-cols-1 xl:grid-cols-[6fr_5fr] gap-8 items-center w-full">
            <div className="flex flex-col gap-5 text-justify">
              <p className="m-0 font-medium text-[#111111] leading-relaxed" style={{ fontSize: bothClosed ? '20px' : '17px' }}>
                This unique initiative revives and sustains the hereditary mode of Vedic learning, in which a father imparts the Vedas to his son within the family lineage. Known as the Hereditary Niyama Adhyayanam (HNY) scheme, it upholds the disciplined study of the Vedas as a sacred familial duty, where the father assumes the role of Guru and the son becomes the Śishya.
              </p>

              <p className="m-0 font-medium text-[#111111] leading-relaxed" style={{ fontSize: bothClosed ? '20px' : '17px' }}>
                This lineage-based method is regarded as the most authentic and time-tested means of preserving Vedic knowledge, ensuring precision in pronunciation (<em>śikṣā</em>) and purity in intonation (<em>svara</em>). By supporting families who continue this tradition, the Trust helps strengthen the unbroken oral chain (<em>paramparā</em>) of Vedic transmission.
              </p>

              <p className="m-0 font-medium text-[#111111] leading-relaxed" style={{ fontSize: bothClosed ? '20px' : '17px' }}>
                Through financial assistance and institutional recognition, the Trust honours these hereditary scholars as true custodians of Sanātana Dharma and vital pillars in sustaining the living Vedic heritage.
              </p>
            </div>

            <div className="w-full bg-[#fcfaf2] border-2 border-[#222] p-3 rounded-xl shadow-[4px_4px_0_#222] flex flex-col items-center">
              <div className="w-full overflow-hidden rounded-lg border border-[#222]">
                <img 
                  src="/assets/HNY.jpg" 
                  alt="Father teaching son under HNY scheme" 
                  className="w-full h-auto object-cover max-h-[420px]"
                />
              </div>
              <p className="mt-3 text-sm text-[#8b2b22] font-bold text-center font-serif">
                Guru-Shishya Parampara: Father imparting Vedic recitation to his son
              </p>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 3: Focus on Sampradāyam */}
      {activeView === 'sampradayam' && (
        <section className="border-t-2 border-[#222] pt-4 space-y-8">
          <h1 
            className="text-left font-bold border-b-2 border-[#bf953f]/40 pb-3 mb-8 transition-all duration-300"
            style={{ 
              fontFamily: 'Georgia, serif', 
              fontSize: bothClosed ? '44px' : '36px', 
              lineHeight: '1.2', 
              color: '#8b2b22'
            }}
          >
            Focus on Sampradāyam
          </h1>

          <div className="flex flex-col gap-5 text-justify font-serif text-[#111111] leading-relaxed">
            <p className="m-0 font-medium" style={{ fontSize: bothClosed ? '20px' : '17px' }}>
              As per the sacred guidance of His Holiness, the Trust emphasizes that Vidyārthīs (students) must not only pursue Adhyayanam (Vedic study) but also adhere to Sampradāyam—the traditional code of conduct and way of life that forms the foundation of Vedic learning. True Vedic education encompasses both intellectual study and disciplined living in accordance with Dharma.
            </p>
          </div>

          <div className="bg-[#fff8f0] border-2 border-[#f97316]/60 p-6 sm:p-8 rounded-xl shadow-[4px_4px_0_#ea580c] space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#c2410c] font-serif m-0 border-b border-[#f97316]/30 pb-3">
              The Gurukula System: A Sacred Journey
            </h2>
            <p className="m-0 font-medium text-[#111111] leading-relaxed" style={{ fontSize: bothClosed ? '19px' : '16px' }}>
              The Gurukula system is not merely academic; it is a sacred journey designed to build character and spiritual maturity alongside scholarship.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-sm sm:text-base font-serif">
              <div className="bg-[#ffffff] border border-[#fdba74] p-4 rounded-lg flex items-start gap-3 shadow-2xs">
                <span className="text-[#ea580c] text-xs shrink-0 mt-1">▲</span>
                <span><strong>Early Discipline:</strong> Students (śiṣyas) begin as early as six years of age.</span>
              </div>
              <div className="bg-[#ffffff] border border-[#fdba74] p-4 rounded-lg flex items-start gap-3 shadow-2xs">
                <span className="text-[#ea580c] text-xs shrink-0 mt-1">▲</span>
                <span><strong>Immersive Learning:</strong> Living with the Guru, students engage in 8 to 10 hours of daily recitation.</span>
              </div>
              <div className="bg-[#ffffff] border border-[#fdba74] p-4 rounded-lg flex items-start gap-3 shadow-2xs">
                <span className="text-[#ea580c] text-xs shrink-0 mt-1">▲</span>
                <span><strong>Character Building:</strong> The system instills humility, devotion, and self-control.</span>
              </div>
              <div className="bg-[#ffffff] border border-[#fdba74] p-4 rounded-lg flex items-start gap-3 shadow-2xs">
                <span className="text-[#ea580c] text-xs shrink-0 mt-1">▲</span>
                <span><strong>Oral Assessment:</strong> Evaluation is entirely oral, requiring flawless precision in pronunciation (śikṣā) and intonation (svara).</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 font-serif pt-2 w-full">
            <div className="bg-[#fcfaf2] border-2 border-[#222] p-6 rounded-xl shadow-[4px_4px_0_#222] space-y-3 w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-[#8b2b22] m-0 border-b border-[#bf953f]/40 pb-2">
                Gurukula Vāsam
              </h3>
              <p className="text-base sm:text-lg leading-relaxed text-[#111111] text-justify mt-3 m-0 font-medium">
                In keeping with ancient tradition, Vidyārthīs are expected to reside with their Guru in the Gurukula and engage in full-time Adhyayanam. Living away from one’s family under the guidance of the Guru is considered a form of Tapas (austerity). The young Vidyārthīs who live this life of discipline undertake this Tapas, which profoundly shapes their character and spiritual maturity.
              </p>
            </div>

            <div className="bg-[#fcfaf2] border-2 border-[#222] p-6 rounded-xl shadow-[4px_4px_0_#222] space-y-3 w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-[#8b2b22] m-0 border-b border-[#bf953f]/40 pb-2">
                Śikhāvān (Wearing the Śikhā)
              </h3>
              <p className="text-base sm:text-lg leading-relaxed text-[#111111] text-justify mt-3 m-0 font-medium">
                Every Vidyārthī is expected to maintain a Śikhā (tuft of hair), which is an essential mark of identity and discipline prescribed in the Dharmashāstras. The Śikhā is not merely symbolic—it represents purity, dedication to Vedic study, and commitment to the spiritual ideals of the Gurukula.
              </p>
            </div>

            <div className="bg-[#fcfaf2] border-2 border-[#222] p-6 rounded-xl shadow-[4px_4px_0_#222] space-y-3 w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-[#8b2b22] m-0 border-b border-[#bf953f]/40 pb-2">
                Sva-Śākhā Adhyayanam
              </h3>
              <p className="text-base sm:text-lg leading-relaxed text-[#111111] text-justify mt-3 m-0 font-medium">
                The term Sva-Śākhā refers to the Vedic branch belonging to one’s ancestral lineage. According to tradition, every Brahmin is expected to study the Vedas, beginning with the Śākhā specific to his family. Only after attaining proficiency in his own Śākhā may a student proceed to learn other branches, preserving lineage purity unbroken.
              </p>
            </div>
          </div>
        </section>
      )}

    </div>
  );
}