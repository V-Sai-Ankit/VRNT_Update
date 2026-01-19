import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Award, Calendar, Users, MapPin, Star, ExternalLink, FileText, CheckCircle2 } from "lucide-react";

export default function CelebrationPage() {
  const requirements = [
    { text: "A copy of your VRNT Certificate", icon: <FileText className="w-5 h-5" /> },
    { text: "One passport-size photograph", icon: <Users className="w-5 h-5" /> },
    { text: "A copy of your Aadhaar Card", icon: <CheckCircle2 className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-56 md:pt-64 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-bold text-sm mb-6 uppercase tracking-widest"
            >
              Diamond Jubilee
            </motion.div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-secondary">
              Shasti Aptha Purti Mahotsav
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground font-serif leading-relaxed italic">
              Celebrating 60 glorious years of dedicated service to Veda Rakshanam
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2 space-y-8">
              <section className="bg-card p-8 rounded-2xl border border-border shadow-sm">
                <h2 className="font-display text-2xl font-bold mb-6 text-secondary border-b pb-2">Announcement</h2>
                <div className="space-y-4 text-muted-foreground font-serif leading-relaxed">
                  <p className="font-bold text-foreground">Dear Veda Pāṭhaśālā Administrators and Adhyāpakas, Namaskārams.</p>
                  <p>
                    With the paripūrṇa anugraham and under the āśīrvādam of Jagadguru Pūjyaśrī Śaṅkara Vijayēndra Sarasvatī Śaṅkarācārya Svāmigal, the Veda Rakshana Nidhi Trust is pleased to announce the celebration of 60 glorious years of dedicated service to Veda Rakshanam.
                  </p>
                  <p>
                    As part of this auspicious milestone, we propose to honour all Vidwans who have successfully passed the Trust's certification examinations since its inception.
                  </p>
                  <p>
                    In preparation for this celebration, we are compiling the details of all Vidwans who have received certification to date. We humbly request all such Veda Vidwans to kindly fill in their details and help us in organizing this event successfully.
                  </p>
                </div>
              </section>

              <section className="bg-card p-8 rounded-2xl border border-border shadow-sm">
                <h2 className="font-display text-2xl font-bold mb-6 text-secondary border-b pb-2">Tamil Version</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed font-sans">
                  <p className="font-bold text-foreground">வேத பாடசாலை நிர்வாகிகளுக்கும் ஆசிரியர்களுக்கும், நமஸ்காரங்கள்.</p>
                  <p>
                    ஜகத்குரு பூஜ்யஶ்ரீ சங்கர விஜயேந்திர சரஸ்வதி சங்கராசார்ய சுவாமிகளின் பரிபூர்ண அனுகிரகமும், ஆசீர்வாதமும் பெற்று, வேத ரக்ஷண நிதி டிரஸ்ட், வேத ரக்ஷணத்திற்கு அர்ப்பணித்த 60 ஆண்டு சிறப்பான சேவையை கொண்டாடுவதில் பெருமிதம் கொள்கிறது.
                  </p>
                  <p>
                    இந்த 60 ஆண்டு நிறைவை ஒட்டி, டிரஸ்ட் ஆரம்பிக்கப்பட்ட தினத்திலிருந்து தேர்ச்சி பெற்ற அனைத்து வித்வான்களையும் கௌரவிக்க திட்டமிட்டுள்ளோம்.
                  </p>
                </div>

                <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/10">
                  <h3 className="font-bold mb-4 text-secondary flex items-center gap-2">
                    <ExternalLink size={18} className="text-primary" /> Registration Details
                  </h3>
                  <p className="text-sm mb-6">Please complete the registration online using the link below:</p>
                  <a 
                    href="https://forms.gle/yn41ZqVzk269GppNA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold uppercase tracking-wider text-sm hover:bg-primary/90 transition-colors shadow-lg"
                  >
                    Google Form Link <ExternalLink size={16} />
                  </a>
                </div>
              </section>
            </div>

            <div className="space-y-6">
              <div className="bg-secondary text-secondary-foreground p-8 rounded-2xl shadow-xl">
                <h3 className="font-display text-xl font-bold mb-6 text-white">Required Documents</h3>
                <ul className="space-y-4">
                  {requirements.map((req, i) => (
                    <li key={i} className="flex gap-3 items-start text-sm text-secondary-foreground/80">
                      <span className="text-primary shrink-0">{req.icon}</span>
                      {req.text}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h4 className="font-bold text-sm mb-2 text-white italic underline">Important Notes:</h4>
                  <ul className="space-y-3 text-xs text-secondary-foreground/70 list-disc pl-4">
                    <li>All Vidwans who have received certification—regardless of the year—are required to register.</li>
                    <li>Registrations received after the due date will not be considered.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Calendar size={18} className="text-primary" /> Important Dates
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Details regarding the date and venue of the celebration will be announced shortly and updated on this website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

