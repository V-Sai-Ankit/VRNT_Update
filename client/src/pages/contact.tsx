import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONTENT } from "@/lib/constants";
import { Mail, Phone, MapPin, UserCheck, Briefcase } from "lucide-react";

export default function ContactPage() {
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.852573215165!2d80.2229567750777!3d13.044155187278216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52665400000001%3A0xe744e45e9a4f6d4!2sVeda%20Rakshana%20Nidhi%20Trust!5e0!3m2!1sen!2sin!4v1715694850000!5m2!1sen!2sin";

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 underline decoration-primary decoration-4 underline-offset-8 inline-block">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground font-serif mt-8 mb-12 italic">
              Please feel free to get in touch, we value your feedback.
            </p>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                {/* Office Info */}
                <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
                  <h3 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
                    <MapPin className="text-primary" /> Office Address
                  </h3>
                  <div className="space-y-4">
                    <p className="font-bold text-lg">Veda Rakshana Nidhi Trust (Regd.)</p>
                    <p className="text-muted-foreground whitespace-pre-line">
                      No.64/31, Subramaniam Street,{"\n"}
                      West Mambalam,{"\n"}
                      Chennai - 600 033.
                    </p>
                    <div className="pt-4 space-y-3">
                      <p className="flex items-center gap-3 text-muted-foreground">
                        <Phone size={18} className="text-primary" /> 044-24740549
                      </p>
                      <p className="flex items-center gap-3 text-muted-foreground">
                        <Mail size={18} className="text-primary" /> office@vrnt.org
                      </p>
                    </div>
                  </div>
                </div>

                {/* Trustees Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
                    <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <UserCheck size={20} className="text-primary" /> Trustee & Treasurer
                    </h4>
                    <p className="font-bold mb-2 text-primary">G Veeraraghavan</p>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Flat A NO 85 Anugraka Apartments,{"\n"}
                      P T Rajan Salai, K K Nagar,{"\n"}
                      Chennai - 600078.
                    </p>
                    <p className="text-sm font-semibold">Mobile: 9444454732</p>
                  </div>

                  <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
                    <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Briefcase size={20} className="text-primary" /> Executive Trustee
                    </h4>
                    <p className="font-bold mb-2 text-primary">S Swaminathan</p>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      1 A, ARJUN ENCLAVE,{"\n"}
                      NEW NO 29, 6 TH CROSS STREET,{"\n"}
                      TRUSTPURAM, KODAMBAKKAM,{"\n"}
                      Chennai - 600024.
                    </p>
                    <p className="text-sm font-semibold">Mobile: 9840189849</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h3 className="font-display text-2xl font-bold flex items-center gap-2">
                  Trust Office Location
                </h3>
                <div className="bg-card p-4 rounded-2xl border border-border shadow-md overflow-hidden h-[500px]">
                  <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps Location"
                    className="rounded-xl"
                  ></iframe>
                </div>
                <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                  <p className="text-sm text-center text-muted-foreground font-serif italic">
                    Located in the heart of West Mambalam, Chennai.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

