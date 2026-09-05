import { motion } from "framer-motion";
import { ExternalLink, FileText, CheckCircle2, Calendar, Users, ArrowLeft } from "lucide-react";
import { Helmet } from "@/lib/seo";

interface CelebrationPageProps {
  setCurrentPage?: (page: string) => void;
}

export default function CelebrationPage({ setCurrentPage }: CelebrationPageProps) {
  const handleBackNavigation = () => {
    if (setCurrentPage) {
      setCurrentPage('announcements');
    } else {
      // Fallback navigation if setCurrentPage prop isn't passed by parent
      window.history.back();
    }
  };

  const requirements = [
    { text: "A copy of your VRNT Certificate", icon: <FileText className="h-5 w-5" aria-hidden="true" /> },
    { text: "One passport-size photograph", icon: <Users className="h-5 w-5" aria-hidden="true" /> },
    { text: "A copy of your Aadhaar Card", icon: <CheckCircle2 className="h-5 w-5" aria-hidden="true" /> },
  ];

  return (
    <>
      <Helmet
        title="Shashtyabda Poorthy Mahotsav"
        description="Announcement and registration details for VRNT's Shashtyabda Poorthy Mahotsav, celebrating 60 years of service to Veda Rakshanam."
      />
      <div className="mx-auto flex max-w-wide flex-col gap-8 px-4 py-10 sm:px-6 sm:py-14">

        {/* Top Navigation Link - Always Visible */}
        <div>
          <button
            type="button"
            onClick={handleBackNavigation}
            className="inline-flex min-h-9 cursor-pointer items-center gap-2 border-none bg-transparent p-0 font-serif text-base italic text-accent-strong hover:text-accent-strong/80"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Back to Announcements</span>
          </button>
        </div>

        {/* Page Title Header Section */}
        <section className="border-t border-border pt-6 text-center">
          <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-widest text-primary">
            Diamond Jubilee
          </div>
          <div>
            <h1 className="inline-block font-serif text-3xl font-bold text-primary underline decoration-accent decoration-4 underline-offset-8 sm:text-4xl">
              Shashtyabda Poorthy Mahotsav
            </h1>
          </div>
          <p className="mx-auto mt-4 max-w-2xl font-serif text-base italic text-muted-foreground sm:text-lg">
            Celebrating 60 glorious years of dedicated service to Veda Rakshanam
          </p>
        </section>

        {/* Hero Feature Card: 60 Year Poster */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="my-2 flex w-full justify-center"
        >
          <div className="flex w-full max-w-2xl justify-center rounded-xl border border-border bg-surface p-4 shadow-soft">
            <img
              src="/assets/shashti.webp"
              alt="Commemorative poster celebrating 60 glorious years of Veda Rakshana Nidhi Trust"
              loading="lazy"
              className="max-h-[550px] w-full rounded-lg border border-accent/40 object-contain shadow-soft"
            />
          </div>
        </motion.div>

        {/* Main Content Workspace Container */}
        <div className="flex w-full flex-col items-start gap-8 lg:flex-row">

          {/* Left Column: Announcements (English & Tamil) */}
          <div className="flex w-full flex-col gap-8 lg:w-[65%]">

            {/* English Announcement Block */}
            <div className="flex flex-col gap-4 rounded-xl border border-border bg-surface p-6 shadow-soft">
              <h2 className="m-0 border-b border-border pb-2 font-serif text-2xl font-bold text-primary">
                Announcement
              </h2>
              <div className="space-y-3 text-sm leading-relaxed text-foreground/90 md:text-base">
                <p className="m-0 font-bold text-foreground">
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
            <div className="flex flex-col gap-4 rounded-xl border border-border bg-surface p-6 shadow-soft">
              <h2 className="m-0 border-b border-border pb-2 font-serif text-2xl font-bold text-primary">
                Tamil Version
              </h2>
              <div className="space-y-3 font-sans text-sm leading-relaxed text-foreground/90 md:text-base">
                <p className="m-0 font-bold text-foreground">
                  வேத பாடசாலை நிர்வாகிகளுக்கும் ஆசிரியர்களுக்கும், நமஸ்காரங்கள்.
                </p>
                <p className="m-0">
                  ஜகத்குரு பூஜ்யஶ்ரீ சங்கர விஜயேந்திர சரஸ்வதி சங்கராசார்ய சுவாமிகளின் பரிபூர்ண அனுகிரகமும், ஆசீர்வாதமும் பெற்று, வேத ரக்ஷண நிதி டிரஸ்ட், வேத ரக்ஷணத்திற்கு அர்ப்பணித்த 60 ஆண்டு சிறப்பான சேவையை கொண்டாடுவதில் பெருமிதம் கொள்கிறது.
                </p>
                <p className="m-0">
                  இந்த 60 ஆண்டு நிறைவை ஒட்டி, டிரஸ்ட் ஆரம்பிக்கப்பட்ட தினத்திலிருந்து தேர்ச்சி பெற்ற அனைத்து வித்வான்களையும் கௌரவிக்க திட்டமிட்டுள்ளோம்.
                </p>
              </div>

              <div className="mt-6 flex flex-col items-start gap-3 rounded-xl border border-accent/30 bg-background p-5">
                <h3 className="m-0 flex items-center gap-2 font-serif text-base font-bold text-primary">
                  <ExternalLink className="h-[18px] w-[18px] text-accent-strong" aria-hidden="true" /> Registration Details
                </h3>
                <p className="m-0 text-xs text-foreground/90 md:text-sm">
                  Please complete the registration online using the link below:
                </p>
                <a
                  href="https://forms.gle/yn41ZqVzk269GppNA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-sans text-xs font-bold text-primary-foreground no-underline shadow-soft transition-colors hover:bg-primary/90 md:text-sm"
                >
                  <span>Google Form Link</span>
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Required Documents & Important Dates */}
          <div className="flex w-full flex-col gap-6 lg:w-[35%]">

            {/* Required Documents Panel */}
            <div className="flex flex-col gap-4 rounded-xl border border-primary/30 bg-primary p-6 text-primary-foreground shadow-lifted">
              <h2 className="m-0 border-b border-primary-foreground/20 pb-2 font-serif text-xl font-bold text-accent-soft">
                Required Documents
              </h2>
              <ul className="m-0 flex list-none flex-col gap-3 p-0">
                {requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs text-primary-foreground/90 md:text-sm">
                    <span className="mt-0.5 shrink-0 text-accent-soft">{req.icon}</span>
                    <span>{req.text}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-2 border-t border-primary-foreground/20 pt-4">
                <h3 className="m-0 font-serif text-xs font-bold italic text-accent-soft underline">Important Notes:</h3>
                <ul className="m-0 list-disc space-y-2 pl-4 text-[11px] text-primary-foreground/80">
                  <li>All Vidwans who have received certification—regardless of the year—are required to register.</li>
                  <li>Registrations received after the due date will not be considered.</li>
                </ul>
              </div>
            </div>

            {/* Important Dates Block */}
            <div className="flex flex-col gap-2 rounded-xl border border-border bg-surface p-6 shadow-soft">
              <h2 className="m-0 flex items-center gap-2 border-b border-border pb-2 font-serif text-xl font-bold text-primary">
                <Calendar className="h-[18px] w-[18px] text-accent-strong" aria-hidden="true" /> Important Dates
              </h2>
              <p className="m-0 pt-1 text-xs leading-relaxed text-foreground/90 md:text-sm">
                Details regarding the date and venue of the celebration will be announced shortly and updated on this website.
              </p>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}
