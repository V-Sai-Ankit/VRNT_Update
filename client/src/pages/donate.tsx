import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONTENT } from "@/lib/constants";
import { Heart, CreditCard, QrCode, CheckCircle2, Copy } from "lucide-react";
import { toast } from "sonner";
import donationQr from "@assets/qr_1776443658052.jpg";

export default function DonatePage() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-[280px] md:pt-[340px] lg:pt-[240px] pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 underline decoration-primary decoration-4 underline-offset-8 inline-block">
                How can you support?
              </h1>
              <p className="text-lg text-muted-foreground font-serif mt-8 max-w-2xl mx-auto italic">
                Support the preservation of Vedic heritage through our various sponsorship and donation schemes.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-24">
              <div className="lg:col-span-2 space-y-6">
                <h3 className="font-display text-2xl font-bold flex items-center gap-2 mb-6">
                  <Heart className="text-primary" /> Support Schemes
                </h3>
                <div className="grid gap-4">
                  {(SITE_CONTENT.supportSchemes || []).map((scheme: any, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-card p-6 rounded-xl border border-border shadow-sm hover:border-primary/30 transition-all group"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <h4 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                            {scheme.title}
                          </h4>
                          <p className="text-muted-foreground text-sm mt-1 font-serif">
                            {scheme.description}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-primary font-bold text-sm bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
                            {scheme.contribution}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
                  <h3 className="font-display text-2xl font-bold flex items-center gap-2 mb-6">
                    <QrCode className="text-primary" /> Quick Scan
                  </h3>
                  <div className="bg-white p-4 rounded-xl shadow-inner mb-6 aspect-square flex items-center justify-center overflow-hidden">
                    <img
                      src={donationQr}
                      alt="Donation QR Code"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-xs text-center text-muted-foreground font-sans">
                    Scan this QR code using any UPI app to send your contributions directly to VRNT.
                  </p>
                </div>

                <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
                  <h3 className="font-display text-xl font-bold flex items-center gap-2 mb-6">
                    <CreditCard className="text-secondary" /> Bank Details
                  </h3>
                  <div className="space-y-6">
                    {(SITE_CONTENT.bankDetails || []).map((bank: any, index: number) => (
                      <div key={index} className="space-y-2 pb-6 border-b border-border last:border-0 last:pb-0">
                        <p className="font-bold text-sm text-foreground">{bank.bank}</p>
                        <p className="text-xs text-muted-foreground uppercase">{bank.branch}</p>
                        <div className="flex items-center justify-between bg-muted/50 p-2 rounded mt-2">
                          <code className="text-xs font-mono">{bank.account}</code>
                          <button onClick={() => copyToClipboard(bank.account)} className="p-1 hover:text-primary transition-colors" data-testid={`button-copy-account-${index}`}>
                            <Copy size={14} />
                          </button>
                        </div>
                        <div className="flex items-center justify-between bg-muted/50 p-2 rounded">
                          <span className="text-[10px] font-bold text-muted-foreground uppercase">IFSC: {bank.ifsc}</span>
                          <button onClick={() => copyToClipboard(bank.ifsc)} className="p-1 hover:text-primary transition-colors" data-testid={`button-copy-ifsc-${index}`}>
                            <Copy size={14} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary/5 border border-secondary/10 rounded-2xl p-8 md:p-12 text-center">
              <CheckCircle2 className="w-12 h-12 text-secondary mx-auto mb-6" />
              <h3 className="font-display text-2xl font-bold mb-4 text-foreground">Important Information</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                80G benefits are available for your contributions. For online contributions, kindly send an e-mail to <strong>office@vrnt.org</strong> with the details of the transfer to enable us to send receipts.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm font-bold uppercase tracking-widest">
                <span className="bg-card px-4 py-2 rounded-full border border-border">80G Tax Benefits</span>
                <span className="bg-card px-4 py-2 rounded-full border border-border">Secure Transfer</span>
                <span className="bg-card px-4 py-2 rounded-full border border-border">Digital Receipts</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
