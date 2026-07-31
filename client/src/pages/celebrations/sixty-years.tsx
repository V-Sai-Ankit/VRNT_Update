import React from 'react';
import { motion } from "framer-motion";
import { ExternalLink, FileText, CheckCircle2, Calendar, Users } from "lucide-react";

// 1. Import the poster directly from your public/assets folder
import posterImg from '/assets/shashti.png'; 

interface CelebrationPageProps {
  isMenuOpen?: boolean;
  isDrawerOpen?: boolean;
}

export default function CelebrationPage({ isMenuOpen = false, isDrawerOpen = false }: CelebrationPageProps) {
  const bothClosed = !isMenuOpen && !isDrawerOpen;

  const requirements = [
    { text: "A copy of your VRNT Certificate", icon: <FileText className="w-5 h-5" /> },
    { text: "One passport-size photograph", icon: <Users className="w-5 h-5" /> },
    { text: "A copy of your Aadhaar Card", icon: <CheckCircle2 className="w-5 h-5" /> },
  ];

  return (
    <div className="w-full flex flex-col gap-8 pb-12 font-serif text-[#111111]">
      
      {/* Page Title Header Section */}
      <section className="mt-2 border-t border-[#222]/20 pt-6 text-center">
        <div className="inline-block bg-[#8b2b22]/10 text-[#8b2b22] px-4 py-1.5 rounded-full font-sans font-bold text-xs mb-4 uppercase tracking-widest">
          Diamond Jubilee
        </div>
        <div>
          <h2 
            className="font-bold underline decoration-[#bf953f] decoration-4 underline-offset-8 inline-block font-serif text-[#8b2b22]"
            style={{ fontSize: bothClosed ? '48px' : '36px' }}
          >
            Shashtyabda Poorthy Mahotsav
          </h2>
        </div>
        <p 
          className="italic text-gray-600 mt-4 max-w-2xl mx-auto font-serif"
          style={{ fontSize: bothClosed ? '18px' : '15px' }}
        >
          Celebrating 60 glorious years of dedicated service to Veda Rakshanam
        </p>
      </section>

      {/* Hero Feature Card: 60 Year Poster */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full flex justify-center my-2"
      >
        <div className="bg-[#f7f4eb] border border-[#222]/80 p-4 rounded-2xl shadow-sm w-full max-w-2xl flex justify-center">
          {/* 2. Use the imported variable in src */}
          <img 
            src={posterImg} 
            alt="Celebrating 60 Glorious Years - Veda Rakshana Nidhi Trust" 
            className="w-full max-h-[550px] object-contain rounded-xl border border-[#bf953f]/40 shadow-xs"
          />
        </div>
      </motion.div>

      {/* Main Content Workspace Container */}
      <div className="flex flex-col lg:flex-row gap-8 items-start w-full">
        
        {/* Left Column: Announcements (English & Tamil) */}
        <div className="w-full lg:w-[65%] flex flex-col gap-8">
          
          {/* English Announcement Block */}
          <div className="bg-[#f7f4eb] border border-[#222]/80 p-6 rounded-2xl shadow-2xs space-y-4">
            <h3 className="font-serif font-bold text-2xl text-[#8b2b22] border-b border-[#222]/10 pb-2 m-0">
              Announcement
            </h3>
            <div className="space-y-3 text-gray-800 text-sm md:text-base leading-relaxed">
              <p className="font-bold text-[#171717] m-0">
                Dear Veda Pāṭhaśālā Administrators and Adhyāpakas, Namaskārams.
              </p>
              <p className="m-0">
                With the paripūrṇa anugraham and under the āśīrvādam of Jagadguru Pūjyaśrī Śaṅkara Vijayēndra Sarasvatī Śaṅkarācārya Svāmigal, the Veda Rakshana Nidhi Trust is pleased to announce the celebration of 60 glorious years of dedicated service to Veda Rakshanam.
              </p>
              <p className="m-0">
                As part of this auspicious milestone, we propose to honour all Vidwans who have successfully passed the Trust's certification examinations since its inception.
              </p>
              <p className="m-0">
                In preparation for this celebration, we are compiling the details of all Vidwans who have received certification to date. We humbly request all such Veda Vidwans to kindly fill in their details and help us in organizing this event successfully.
              </p>
            </div>
          </div>

          {/* Tamil Version & Registration Link */}
          <div className="bg-[#f7f4eb] border border-[#222]/80 p-6 rounded-2xl shadow-2xs space-y-4">
            <h3 className="font-serif font-bold text-2xl text-[#8b2b22] border-b border-[#222]/10 pb-2 m-0">
              Tamil Version
            </h3>
            <div className="space-y-3 text-gray-800 text-sm md:text-base leading-relaxed font-sans">
              <p className="font-bold text-[#171717] m-0">
                வேத பாடசாலை நிர்வாகிகளுக்கும் ஆசிரியர்களுக்கும், நமஸ்காரங்கள்.
              </p>
              <p className="m-0">
                ஜகத்குரு பூஜ்யஶ்ரீ சங்கர விஜயேந்திர சரஸ்வதி சங்கராசார்ய சுவாமிகளின் பரிபூர்ண அனுகிரகமும், ஆசீர்வாதமும் பெற்று, வேத ரக்ஷண நிதி டிரஸ்ட், வேத ரக்ஷணத்திற்கு அர்ப்பணித்த 60 ஆண்டு சிறப்பான சேவையை கொண்டாடுவதில் பெருமிதம் கொள்கிறது.
              </p>
              <p className="m-0">
                இந்த 60 ஆண்டு நிறைவை ஒட்டி, டிரஸ்ட் ஆரம்பிக்கப்பட்ட தினத்திலிருந்து தேர்ச்சி பெற்ற அனைத்து வித்வான்களையும் கௌரவிக்க திட்டமிட்டுள்ளோம்.
              </p>
            </div>

            <div className="mt-6 p-5 bg-[#fffdf9] border border-[#e5dcc6] rounded-xl flex flex-col items-start gap-3">
              <h4 className="font-bold text-base text-[#8b2b22] flex items-center gap-2 m-0">
                <ExternalLink size={18} className="text-[#bf953f]" /> Registration Details
              </h4>
              <p className="text-xs md:text-sm text-gray-700 m-0">
                Please complete the registration online using the link below:
              </p>
              <a 
                href="https://forms.gle/yn41ZqVzk269GppNA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#8b2b22] hover:bg-[#6e221b] text-white font-sans font-bold text-xs md:text-sm px-5 py-2.5 rounded-lg shadow-sm transition-colors no-underline mt-1"
              >
                <span>Google Form Link</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Required Documents & Important Dates */}
        <div className="w-full lg:w-[35%] flex flex-col gap-6">
          
          {/* Required Documents Panel */}
          <div className="bg-[#171717] text-[#f7f4eb] p-6 rounded-2xl shadow-md space-y-4">
            <h3 className="font-serif font-bold text-xl text-[#FFD700] border-b border-white/20 pb-2 m-0">
              Required Documents
            </h3>
            <ul className="space-y-3 p-0 m-0 list-none">
              {requirements.map((req, i) => (
                <li key={i} className="flex gap-3 items-start text-xs md:text-sm text-gray-200">
                  <span className="text-[#bf953f] shrink-0 mt-0.5">{req.icon}</span>
                  <span>{req.text}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-white/10 space-y-2">
              <h4 className="font-bold text-xs text-[#FFD700] italic underline m-0">Important Notes:</h4>
              <ul className="space-y-2 text-[11px] text-gray-300 list-disc pl-4 m-0">
                <li>All Vidwans who have received certification—regardless of the year—are required to register.</li>
                <li>Registrations received after the due date will not be considered.</li>
              </ul>
            </div>
          </div>

          {/* Important Dates Block */}
          <div className="bg-[#f7f4eb] border border-[#222]/80 p-6 rounded-2xl shadow-2xs space-y-2">
            <h3 className="font-serif font-bold text-xl text-[#8b2b22] flex items-center gap-2 m-0 border-b border-[#222]/10 pb-2">
              <Calendar size={18} className="text-[#bf953f]" /> Important Dates
            </h3>
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed m-0 pt-1">
              Details regarding the date and venue of the celebration will be announced shortly and updated on this website.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}