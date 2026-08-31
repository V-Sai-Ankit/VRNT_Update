import React from 'react';
import { Download, Share2, FileText } from 'lucide-react';
import { Helmet } from "@/lib/seo";

interface ParikshaResultProps {
  setCurrentPage: (page: string) => void;
}

export default function ParikshaResultPage({ setCurrentPage }: ParikshaResultProps) {
  const pdfUrl = "/docs/SJ_2026_MARK_SHEET_RESULT_pdf_1777194961207.pdf";

  const handleDownload = () => {
    const fileName = pdfUrl.split('/').pop() || 'SJ_2026_MARK_SHEET_RESULT.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '2026 Shankara Jayanti Veda Pariksha Result',
          text: 'Check out the 2026 Shankara Jayanti Veda Pariksha Result from Veda Rakshana Nidhi Trust.',
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="mx-auto max-w-wide w-full flex flex-col gap-6 px-4 py-10 sm:px-6 sm:py-14">
      <Helmet
        title="2026 Shankara Jayanti Veda Pariksha Result"
        description="Official announcement and downloadable mark sheet for the 2026 Shankara Jayanti Veda Pariksha, from Veda Rakshana Nidhi Trust."
      />

      {/* Back Navigation Bar Links */}
      <div>
        <button
          onClick={() => setCurrentPage('announcements')}
          className="bg-transparent border-none min-h-9 text-accent-strong hover:text-accent-strong/80 font-serif italic text-base flex items-center gap-2 cursor-pointer p-0"
        >
          ← Back to Announcements
        </button>
      </div>

      {/* Main Results Announcement Card Container Frame */}
      <div className="bg-surface border border-border rounded-3xl p-8 md:p-12 shadow-soft max-w-3xl mx-auto w-full mt-4 flex flex-col gap-6">

        {/* Upper Announcement Capsule Indicator */}
        <div className="flex items-center gap-2 text-accent-strong font-sans font-bold text-xs tracking-wider uppercase">
          <FileText className="h-4 w-4" aria-hidden="true" /> Announcement
        </div>

        {/* Content Heading Frame */}
        <div className="border-b border-border pb-2">
          <h1 className="font-serif font-bold text-foreground text-3xl md:text-4xl m-0 leading-tight underline decoration-accent decoration-2 underline-offset-8 inline-block">
            2026 Shankara Jayanti Veda Pariksha Result
          </h1>
        </div>

        {/* Body Paragraph Descriptions */}
        <div className="font-serif text-foreground/90 text-sm md:text-base leading-relaxed flex flex-col gap-4 mt-2">
          <p>
            This official circular from Veda Rakshana Nidhi Trust details the upcoming 2026 Shankara Jayanti Veda Pariksha Result. The Trust continues its mission of preserving Vedic education through regular examinations and recognition functions.
          </p>
          <p>
            Detailed information regarding applications, schedules, and eligibility criteria can be found in the attached document. Vaidikas and Vidhyarties are requested to review the content thoroughly.
          </p>
        </div>

        {/* Action Button Strip Row Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <button
            onClick={handleDownload}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-sans font-bold text-sm tracking-wider min-h-11 py-3.5 px-6 rounded-xl shadow-soft transition-colors flex items-center justify-center gap-2 cursor-pointer border-none"
          >
            <Download className="h-4 w-4" aria-hidden="true" /> Download PDF
          </button>

          <button
            onClick={handleShare}
            className="bg-muted hover:bg-muted/80 text-foreground font-sans font-bold text-sm tracking-wider min-h-11 py-3.5 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer border border-border"
          >
            <Share2 className="h-4 w-4" aria-hidden="true" /> Share Update
          </button>
        </div>

      </div>

    </div>
  );
}
