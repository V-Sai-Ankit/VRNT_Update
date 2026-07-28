import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

interface ActivitiesProps {
  isMenuOpen: boolean;
  isDrawerOpen: boolean;
}

export default function Activities({ isMenuOpen, isDrawerOpen }: ActivitiesProps) {
  const expanded = !isMenuOpen && !isDrawerOpen;
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Active view driven directly from URL query param (?view=final-exams)
  const activeView = searchParams.get('view');

  const handleNavigateToView = (viewName: string) => {
    navigate(`/activities?view=${viewName}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToMain = () => {
    navigate('/activities');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`w-full flex flex-col gap-8 text-[#111111] font-serif transition-all duration-300 ${expanded ? 'p-6' : 'p-0'}`}>
      
      {/* ---------------------------------------------------- */}
      {/* SUB-PAGE VIEW: Final Examinations and Recognition */}
      {/* ---------------------------------------------------- */}
      {activeView === 'final-exams' ? (
        <div className="flex flex-col gap-6">
          
          {/* Back Navigation Button */}
          <div className="w-full pt-2">
            <button
              onClick={handleBackToMain}
              className="inline-flex items-center gap-2 text-[#8b2b22] font-bold font-serif text-sm sm:text-base border border-[#bf953f]/60 bg-[#fcfaf2] px-4 py-1.5 rounded-md hover:bg-[#8b2b22] hover:text-white transition-all cursor-pointer shadow-sm"
            >
              <span>←</span> Back to Activities Overview
            </button>
          </div>

          <section className="bg-[#fffdf9] border-2 border-[#222] p-6 sm:p-10 rounded-2xl shadow-[5px_5px_0_#222] space-y-8">
            <h1 
              className="text-left font-bold border-b-2 border-[#bf953f]/40 pb-3 mb-6 text-[#203c70]"
              style={{ 
                fontFamily: 'Georgia, serif', 
                fontSize: expanded ? '40px' : '32px', 
                lineHeight: '1.2'
              }}
            >
              🎓 Final Examinations and Recognition
            </h1>

            {/* Full-width introductory paragraphs */}
            <div className="space-y-4 text-justify font-normal text-base sm:text-lg leading-relaxed text-[#111111]">
              <p className="m-0">
                At the culmination of their course, students appear for the final examinations conducted by VRNT, which serve as a comprehensive assessment of their proficiency in their respective Veda Śākhā. Successful candidates are awarded certificates of proficiency along with monetary recognition, acknowledging their dedication, discipline, and hard work.
              </p>
              <p className="m-0">
                The first-rank Vidyārthī in each Veda Śākhā is honoured with a special award. In addition, the Adhyāpaka (teacher) of the top-ranking Vidyārthī is also felicitated with a special sambhāvana in recognition of their guidance and contribution.
              </p>
            </div>

            {/* Grid pairing the Ilaya Periyava text block with the examination image */}
            <div className="grid grid-cols-1 xl:grid-cols-[6fr_5fr] gap-8 items-center pt-2">
              
              {/* Left side text block */}
              <div className="space-y-3 text-justify font-normal text-base sm:text-lg leading-relaxed text-[#111111]">
                <p className="m-0">
                  Ilaya Periyava, Sri Sri Sathya Chandrasekharendra Saraswathi Swamigal, takes a keen and active interest in the conduct of the examinations. He is present in the examination hall whenever possible and personally interacts with and examines the students.
                </p>
                <p className="m-0">
                  The Vidyārthīs feel both deeply blessed and inspired by the opportunity to be examined by the Āchārya, making it a truly memorable and sacred experience.
                </p>
              </div>

              {/* Right side examination photo */}
              <div className="bg-[#fcfaf2] border-2 border-[#222] p-3 rounded-xl shadow-[3px_3px_0_#222] flex flex-col items-center">
                <div className="w-full overflow-hidden rounded-lg border border-[#222]">
                  <img 
                    src="/assets/Chandrasekharendra Saraswathi Swamigal examination.jpg" 
                    alt="Acharya examining students in examination hall" 
                    className="w-full h-auto rounded object-cover max-h-[380px]"
                  />
                </div>
                <p className="mt-3 text-xs sm:text-sm font-bold text-[#8b2b22] text-center font-serif m-0">
                  His Holiness the Āchārya examining Vidyārthīs during Pariksha
                </p>
              </div>

            </div>

            {/* Graduation Ceremonies Sub-Block */}
            <div className="border-t-2 border-[#bf953f]/30 pt-8 space-y-6">
              
              {/* Top full-width paragraphs */}
              <div className="space-y-4 text-justify font-normal text-base sm:text-lg leading-relaxed text-[#111111]">
                <p className="m-0">
                  These examinations are conducted twice a year, typically around the months of March and September.
                </p>
                <p className="m-0">
                  Certificates are presented to the Vidyārthīs during a graduation समारोह specially organized for this purpose—once on the auspicious occasion of Śaṅkara Jayanti and again on Vijaya Daśamī. The parents and family members of the Vidyārthīs are also invited to participate in this significant milestone.
                </p>
              </div>

              {/* Grid pairing only the Āchārya paragraph with the graduation image */}
              <div className="grid grid-cols-1 xl:grid-cols-[6fr_5fr] gap-8 items-center pt-2">
                
                {/* Left side: His Holiness Āchārya specific paragraph */}
                <p className="m-0 text-[#111111] font-normal text-base sm:text-lg leading-relaxed text-justify">
                  His Holiness the Āchārya takes a special interest in these events, personally presenting the certificates to each Vidyārthī and spending a few moments with every family, making the occasion deeply meaningful and memorable.
                </p>

                {/* Right side: Graduation Image */}
                <div className="bg-[#fcfaf2] border-2 border-[#222] p-3 rounded-xl shadow-[3px_3px_0_#222] flex flex-col items-center">
                  <div className="w-full overflow-hidden rounded-lg border border-[#222]">
                    <img 
                      src="/assets/Acharya certificate.jpg" 
                      alt="Graduation समारोह certificate presentation" 
                      className="w-full h-auto rounded object-cover max-h-[380px]"
                    />
                  </div>
                  <p className="mt-3 text-xs sm:text-sm font-bold text-[#8b2b22] text-center font-serif m-0">
                    His Holiness presenting graduation certificates during Graduation समारोह
                  </p>
                </div>

              </div>

              {/* Bottom full-width paragraphs */}
              <div className="space-y-4 text-justify font-normal text-base sm:text-lg leading-relaxed text-[#111111] pt-2">
                <p className="m-0 bg-[#fcfaf2] p-4 rounded-lg border border-[#bf953f]/40">
                  This recognition not only celebrates their accomplishment but also inspires them to continue their lifelong pursuit of Vedic learning and teaching.
                </p>
                <p className="m-0">
                  Further, during these graduation ceremonies, a distinguished Veda Vidwān from each Veda Śākhā, as recommended by the Āchārya, is formally felicitated.
                </p>
              </div>

            </div>

          </section>
        </div>
      ) : (

        /* ---------------------------------------------------- */
        /* MAIN OVERVIEW VIEW: Main Activities Page            */
        /* ---------------------------------------------------- */
        <>
          {/* Header Banner */}
          <div className="text-center mt-2 border-b-2 border-double border-[#8b2b22] pb-4 max-w-max mx-auto px-8">
            <h2 className={`font-serif font-bold text-[#8b2b22] tracking-wide transition-all ${expanded ? 'text-5xl' : 'text-3xl md:text-4xl'}`}>
              Trust Activities
            </h2>
          </div>

          {/* SECTION 1: Academic Monitoring Intro */}
          <section className="bg-[#fffdf9] border-2 border-[#222] p-6 sm:p-10 rounded-2xl shadow-[5px_5px_0_#222] space-y-6">
            
            <div className="bg-[#fcfaf2] border border-[#bf953f]/40 p-6 rounded-xl shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl p-2 bg-[#fffdfa] border border-[#bf953f] rounded-lg">📜</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#8b2b22] font-serif m-0">
                  Academic Monitoring and Varshika Examinations
                </h2>
              </div>
              
              <p className="text-base sm:text-lg leading-relaxed text-[#111111] font-medium text-justify m-0">
                To maintain academic rigor and uniformity, VRNT conducts <strong>regular inspections and annual assessments</strong> (<em>Varshika Pariksha</em>) across its affiliated Pāṭhaśālās in <strong>Tamil Nadu, Kerala, Andhra Pradesh, Telangana, Maharashtra, and Assam</strong>. Senior scholars from the Trust personally visit these institutions to evaluate students' progress through oral examinations and recitation tests, ensuring adherence to traditional standards and authenticity of transmission. Based on the portion covered for the Varshikam exam, the trust gives “Guru Dakshina” to the Adhyapakar.
              </p>
            </div>

            {/* Quick Preview Card to Link to Final Exams */}
            <div 
              onClick={() => handleNavigateToView('final-exams')}
              className="bg-[#fcfaf2] border-2 border-[#222] p-6 rounded-xl shadow-[3px_3px_0_#222] hover:border-[#8b2b22] transition-all cursor-pointer flex flex-col md:flex-row items-center justify-between gap-6 group"
            >
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#203c70] group-hover:text-[#8b2b22] transition-colors m-0 flex items-center gap-2">
                  <span>🎓</span> Final Examinations and Recognition
                </h3>
                <p className="text-sm sm:text-base text-gray-700 font-medium m-0">
                  Comprehensive biannual assessments, certificates of proficiency, special awards under the presence of His Holiness the Āchārya, and Graduation Ceremonies.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 font-bold text-[#8b2b22] text-sm sm:text-base shrink-0 bg-[#fffdf9] border border-[#bf953f] px-4 py-2 rounded-lg group-hover:bg-[#8b2b22] group-hover:text-white transition-all">
                Read Full Details ↗
              </span>
            </div>

          </section>

          {/* SECTION 2: Other Activities */}
          <section className="bg-[#fffdf9] border-2 border-[#222] p-6 sm:p-10 rounded-2xl shadow-[5px_5px_0_#222] space-y-8">
            
            <div className="text-center border-b-2 border-[#bf953f]/40 pb-4 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#8b2b22] font-serif m-0">
                Other Activities
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 text-base sm:text-lg font-serif text-[#111111]">
              
              {/* Item 1: Daily Veda Pārāyaṇam */}
              <div className="bg-[#fcfaf2] border border-[#bf953f]/50 p-6 rounded-xl shadow-xs flex items-start sm:items-center gap-4">
                <span className="text-lg text-[#8b2b22] bg-[#fffdf9] border border-[#bf953f] h-10 w-10 flex items-center justify-center rounded-full shrink-0 shadow-xs">
                  🪔
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#203c70] m-0">
                    Daily Veda Pārāyaṇam
                  </h3>
                  <p className="m-0 text-base font-medium text-gray-800 mt-1">
                    Conducted daily at Sri Kanchi Kamakoti Peetham Mutt.
                  </p>
                </div>
              </div>

              {/* Item 2: Monthly Special Chathur Veda Pārāyaṇams */}
              <div className="bg-[#fcfaf2] border border-[#bf953f]/50 p-6 sm:p-8 rounded-xl shadow-xs space-y-6">
                
                <div className="flex items-start gap-4 border-b border-[#bf953f]/30 pb-4">
                  <span className="text-lg text-[#8b2b22] bg-[#fffdf9] border border-[#bf953f] h-10 w-10 flex items-center justify-center rounded-full shrink-0 shadow-xs">
                    🪔
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#203c70] m-0">
                      Monthly Special Chathur Veda Pārāyaṇams
                    </h3>
                    <p className="m-0 text-sm sm:text-base font-medium text-gray-700 mt-1">
                      Conducted regularly on the auspicious Janma Nakṣatra (birth star) days:
                    </p>
                  </div>
                </div>

                {/* Stacked vertically in 1 column (one below the other) */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-[#fffdf9] border border-[#bf953f]/40 p-4 rounded-lg shadow-2xs flex items-center gap-3">
                    <span className="text-[#8b2b22] font-bold text-lg leading-none">•</span>
                    <div>
                      <span className="text-xs font-bold text-[#8b2b22] uppercase tracking-wider block mb-0.5">MAHA PERIYAVA</span>
                      <p className="m-0 text-base font-bold text-[#111111]">Anusham <span className="text-xs text-gray-600 font-normal">(Anuradha)</span></p>
                    </div>
                  </div>

                  <div className="bg-[#fffdf9] border border-[#bf953f]/40 p-4 rounded-lg shadow-2xs flex items-center gap-3">
                    <span className="text-[#8b2b22] font-bold text-lg leading-none">•</span>
                    <div>
                      <span className="text-xs font-bold text-[#8b2b22] uppercase tracking-wider block mb-0.5">SRI SRI JAYENDRA SARASWATHI SWAMIGAL</span>
                      <p className="m-0 text-base font-bold text-[#111111]">Avittam <span className="text-xs text-gray-600 font-normal">(Dhanishta)</span></p>
                    </div>
                  </div>

                  <div className="bg-[#fffdf9] border border-[#bf953f]/40 p-4 rounded-lg shadow-2xs flex items-center gap-3">
                    <span className="text-[#8b2b22] font-bold text-lg leading-none">•</span>
                    <div>
                      <span className="text-xs font-bold text-[#8b2b22] uppercase tracking-wider block mb-0.5">SRI SRI VIJAYENDRA SARASWATHI SWAMIGAL</span>
                      <p className="m-0 text-base font-bold text-[#111111]">Uththarashadam <span className="text-xs text-gray-600 font-normal">(Uttarashada)</span></p>
                    </div>
                  </div>
                </div>

                {/* Sub-Card: Shatabhishak Nakshetra Sabha (Round bullet for title, triangles inside) */}
                <div className="bg-[#fffdf9] border-2 border-[#bf953f]/60 p-5 sm:p-6 rounded-xl space-y-4">
                  <div className="border-b border-[#bf953f]/30 pb-3 flex items-start gap-2.5">
                    <span className="text-[#8b2b22] font-bold text-2xl leading-none mt-0.5">•</span>
                    <div>
                      <h4 className="text-lg font-bold text-[#8b2b22] m-0">
                        Shatabhishak Nakṣatra Sabha (शतभिषङ्नक्षत्रसभा)
                      </h4>
                      <p className="text-xs sm:text-sm font-medium text-gray-700 m-0 mt-1">
                        Organized on Sathayam (Shatabhishak) — the Janma Nakṣatra day of Sri Sri Sathya Chandrasekharendra Saraswathi Swamigal.
                      </p>
                    </div>
                  </div>

                  {/* Covered Portions with Triangle Bullets */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm sm:text-base font-semibold pl-2">
                    <div className="bg-[#fcfaf2] border border-[#bf953f]/30 p-3 rounded-md flex items-center gap-2.5">
                      <span className="text-[#8b2b22] text-xs">▲</span>
                      <span><strong>Rig Vedam:</strong> Ithareya Bramhanam</span>
                    </div>
                    <div className="bg-[#fcfaf2] border border-[#bf953f]/30 p-3 rounded-md flex items-center gap-2.5">
                      <span className="text-[#8b2b22] text-xs">▲</span>
                      <span><strong>Krishna Yajur Vedam:</strong> Varna Kramam</span>
                    </div>
                    <div className="bg-[#fcfaf2] border border-[#bf953f]/30 p-3 rounded-md flex items-center gap-2.5">
                      <span className="text-[#8b2b22] text-xs">▲</span>
                      <span><strong>Sama Vedam:</strong> Astabramhanam</span>
                    </div>
                    <div className="bg-[#fcfaf2] border border-[#bf953f]/30 p-3 rounded-md flex items-center gap-2.5">
                      <span className="text-[#8b2b22] text-xs">▲</span>
                      <span><strong>Sukla Yajur Vedam:</strong> Sathapatha Bramhanam</span>
                    </div>
                    <div className="bg-[#fcfaf2] border border-[#bf953f]/30 p-3 rounded-md md:col-span-2 flex items-start gap-2.5">
                      <span className="text-[#8b2b22] text-xs shrink-0 mt-1">▲</span>
                      <span><strong>Shadangam:</strong> Siksha, Vyakaranam, Chandas, Niruktham, Jothisam & Kalpam</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Item 3: Sukla Panchami Sadas */}
              <div className="bg-[#fcfaf2] border border-[#bf953f]/50 p-6 rounded-xl shadow-xs flex items-start sm:items-center gap-4">
                <span className="text-lg text-[#8b2b22] bg-[#fffdf9] border border-[#bf953f] h-10 w-10 flex items-center justify-center rounded-full shrink-0 shadow-xs">
                  🪔
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#203c70] m-0">
                    Śukla Pañchami Sadas
                  </h3>
                  <p className="m-0 text-base font-medium text-gray-800 mt-1">
                    Conducted monthly across key regional centers: <strong>Vijayawada</strong>, <strong>Tirupati</strong>, and <strong>Secunderabad</strong>.
                  </p>
                </div>
              </div>

            </div>
          </section>
        </>
      )}

    </div>
  );
}