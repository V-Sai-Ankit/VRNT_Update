import React from 'react';

export default function MahotsavPage() {
  return (
    <div className="w-full flex flex-col gap-8 pb-12">
      
      {/* Page Hero Header Title Block */}
      <section className="mt-4 text-center flex flex-col items-center gap-3">
        <span className="bg-[#f3e8ff] border border-[#d8b4fe] text-[#7c3aed] font-sans text-xs font-bold tracking-widest px-3 py-1 rounded-full uppercase">
          Diamond Jubilee
        </span>
        <h2 className="font-serif font-bold text-[#8b2b22] text-3xl md:text-5xl m-0 tracking-wide mt-1">
          Shasti Aptha Purti Mahotsav
        </h2>
        <div className="w-24 h-1 bg-[#bf953f] mt-1 rounded-full" />
        <p className="italic text-gray-600 font-serif text-base md:text-lg mt-2">
          Celebrating 60 glorious years of dedicated service to Veda Rakshanam
        </p>
      </section>

      {/* Two-Column Grid Info Panel Layout */}
      <div className="flex flex-col lg:flex-row gap-8 items-start w-full mt-2">
        
        {/* Left Side: English Announcement text paper framework */}
        <div className="w-full lg:w-[65%] bg-[#f7f4eb] border border-[#222]/80 p-6 md:p-8 rounded-2xl shadow-2xs flex flex-col gap-5">
          <div className="border-b border-[#222]/10 pb-3">
            <h3 className="font-serif font-bold text-xl md:text-2xl text-[#8b2b22] m-0">Announcement</h3>
          </div>
          
          <div className="font-serif text-sm md:text-base text-gray-800 flex flex-col gap-4 leading-relaxed">
            <p className="font-bold text-[#171717]">Dear Veda Pāṭhaśālā Administrators and Adhyāpakas, Namaskārams.</p>
            
            <p>
              With the paripūrṇa anugraham and under the āśīrvādam of Jagadguru Pūjyaśrī Śaṅkara Vijayendra Sarasvati Śaṅkarācārya Svāmīgal, the Veda Rakshana Nidhi Trust is pleased to announce the celebration of 60 glorious years of dedicated service to Veda Rakshanam.
            </p>
            
            <p>
              As part of this auspicious milestone, we propose to honour all Vidwans who have successfully passed the Trust's certification examinations since its inception.
            </p>
            
            <p>
              In preparation for this celebration, we are compiling the details of all Vidwans who have received certification to date. We humbly request all such Veda Vidwans to kindly fill in their details and help us in organizing this event successfully.
            </p>
          </div>
        </div>

        {/* Right Side: Required Documents & Timeline Metadata Block */}
        <div className="w-full lg:w-[35%] flex flex-col gap-6">
          
          {/* Required Documents Card Component Frame */}
          <div className="bg-[#4a1d19] text-[#fce8e6] p-6 rounded-2xl shadow-sm flex flex-col gap-4 border border-[#222]">
            <h3 className="font-serif font-bold text-lg md:text-xl text-white border-b border-white/10 pb-2 m-0">
              Required Documents
            </h3>
            <ul className="flex flex-col gap-3.5 pl-0 m-0 list-none font-serif text-sm">
              <li className="flex items-start gap-2.5">
                <span className="text-[#bf953f] text-base">📄</span>
                <span>A copy of your VRNT Certificate</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#bf953f] text-base">📷</span>
                <span>One passport size photograph</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#bf953f] text-base">🪪</span>
                <span>A copy of your Aadhaar Card</span>
              </li>
            </ul>

            <div className="border-t border-white/10 pt-3 mt-1 flex flex-col gap-2 font-serif text-[11px] text-white/70 leading-normal">
              <span className="font-sans font-bold uppercase tracking-wider text-[#bf953f]">Important Notes:</span>
              <p className="m-0">• All Vidwans who have received certification—regardless of the year—are required to register.</p>
              <p className="m-0">• Registrations received after the due date will not be considered.</p>
            </div>
          </div>

          {/* Timeline Card */}
          <div className="bg-[#f7f4eb] border border-[#222]/80 p-5 rounded-2xl flex flex-col gap-2 shadow-2xs">
            <div className="flex items-center gap-2 border-b border-[#222]/10 pb-2 mb-1">
              <span className="text-base">📅</span>
              <h4 className="font-serif font-bold text-sm text-[#8b2b22] uppercase tracking-wider m-0">Important Dates</h4>
            </div>
            <p className="font-serif text-xs text-gray-600 leading-relaxed m-0">
              Details regarding the date and venue of the celebration will be announced shortly and updated on this website.
            </p>
          </div>

        </div>
      </div>

      {/* Lower Block: Tamil Version Content Display Component */}
      <section className="bg-[#f7f4eb] border border-[#222]/80 p-6 md:p-8 rounded-2xl shadow-2xs flex flex-col gap-5 max-w-[65%]">
        <div className="border-b border-[#222]/10 pb-3">
          <h3 className="font-serif font-bold text-xl md:text-2xl text-[#8b2b22] m-0">Tamil Version</h3>
        </div>

        <div className="font-serif text-sm md:text-base text-gray-800 flex flex-col gap-4 leading-relaxed">
          <p className="font-bold text-[#171717] text-base">
            வேத பாடசாலை நிர்வாகிகளுக்கும் ஆசிரியர்களுக்கும், நமஸ்காரங்கள்.
          </p>
          <p>
            ஜகத்குரு பூஜ்யஸ்ரீ சங்கர விஜயேந்திர சரஸ்வதி சங்கராசார்ய சுவாமிகளின் பரிபூர்ண அனுக்ரஹமும், ஆசிர்வாதமும் பெற்று, வேத ரக்ஷண நிதி டிரஸ்ட், வேத ரக்ஷணத்திற்கு அர்ப்பணித்த 60 ஆண்டு சிறப்பான சேவையை கொண்டாடுவதில் பெருமிதம் கொள்கிறது.
          </p>
          <p>
            இந்த 60 ஆண்டு நிறைவை ஒட்டி, டிரஸ்ட் ஆரம்பிக்கப்பட்ட தினத்திலிருந்து தேர்ச்சி பெற்ற அனைத்து வித்வான்களையும் கௌரவிக்க திட்டமிட்டுள்ளோம்.
          </p>
        </div>

        {/* Inner Highlight Action Block Shell */}
        <div className="bg-[#fffdf9] border border-[#e5dcc6] rounded-xl p-5 mt-4 flex flex-col gap-3">
          <div className="flex items-center gap-2 font-sans font-bold text-xs tracking-wider uppercase text-[#bf953f]">
            <span>📝</span> Registration Details
          </div>
          <p className="font-serif text-xs md:text-sm text-gray-600 m-0">
            Please complete the registration online using the link below:
          </p>
          <a 
            href="https://forms.gle/yn41ZqVzk269GppNA" 
            target="_blank" 
            rel="noreferrer"
            className="w-fit bg-[#b4892c] hover:bg-[#967122] text-white font-sans font-bold text-xs tracking-widest px-5 py-3 rounded-lg shadow-sm transition-colors uppercase mt-1 flex items-center gap-2 no-underline"
          >
            Google Form Link <span>➔</span>
          </a>
        </div>
      </section>

    </div>
  );
}