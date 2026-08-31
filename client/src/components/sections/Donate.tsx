import { motion } from "framer-motion";
import { SITE_CONTENT } from "@/lib/constants";
import { Heart, CreditCard, QrCode, CheckCircle2, Copy, MapPin, Phone, Globe } from "lucide-react";
import { toast } from "sonner";
import { Helmet } from "@/lib/seo";

export default function DonatePage() {
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`Copied ${label} to clipboard`);
  };

  const contactPersons = [
    { name: "Sri S Swaminathan", phone: "+91 98401 89849" },
    { name: "Sri G Veeraraghavan", phone: "+91 94444 54732" },
    { name: "Sri G Muralidharan", phone: "+91 89398 87897" },
    { name: "Sri R Ramakrishnan", phone: "+91 98440 92056" },
  ];

  return (
    <>
      <Helmet
        title="Donate & Support Schemes"
        description="Ways to support Veda Rakshana Nidhi Trust — sponsorship schemes, bank and UPI details, cheque addresses, and 80G tax-benefit information."
      />
      <div className="mx-auto flex max-w-wide flex-col gap-10 px-4 py-10 sm:px-6 sm:py-14">

        {/* Page Title Header Section */}
        <section className="border-t border-border pt-6 text-center">
          <h1 className="inline-block font-serif text-3xl font-bold text-primary underline decoration-accent decoration-4 underline-offset-8 sm:text-4xl">
            How can you support?
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-serif text-base italic text-muted-foreground sm:text-lg">
            Support the preservation of Vedic heritage through our various sponsorship and donation schemes.
          </p>
        </section>

        {/* Main Content Workspace Container */}
        <div className="flex w-full flex-col items-start gap-8 lg:flex-row">

          {/* Left Column: Support Schemes & Postal Addresses */}
          <div className="flex w-full flex-col gap-8 lg:w-[60%]">

            {/* Support Schemes Panel */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 border-b border-border pb-2">
                <Heart className="h-5 w-5 text-primary" aria-hidden="true" />
                <h2 className="m-0 font-serif text-2xl font-bold text-primary">Support Schemes</h2>
              </div>

              <div className="grid gap-4">
                {(SITE_CONTENT.supportSchemes || []).map((scheme, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group flex flex-col gap-4 rounded-xl border border-border bg-surface p-5 shadow-soft transition-shadow hover:shadow-lifted md:flex-row md:items-center md:justify-between"
                  >
                    <div className="w-full flex-1 md:max-w-[65%]">
                      <h3 className="m-0 font-serif text-base font-bold leading-snug text-foreground transition-colors group-hover:text-primary md:text-lg">
                        {scheme.title}
                      </h3>
                      <p className="mt-1 font-serif text-xs leading-relaxed text-muted-foreground md:text-sm">
                        {scheme.description}
                      </p>
                    </div>

                    <div className="flex max-w-full shrink-0 flex-wrap justify-start md:max-w-[35%] md:justify-end">
                      <div className="max-w-xs whitespace-normal break-words rounded-lg border border-accent/40 bg-background px-3 py-1.5 text-center font-sans text-xs font-bold leading-relaxed text-accent-strong sm:max-w-sm">
                        {scheme.contribution}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Postal Address Block for DD/Cheque */}
            <div className="flex flex-col gap-4 rounded-xl border border-border bg-surface p-6 shadow-soft">
              <div className="flex items-center gap-2 border-b border-border pb-2">
                <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                <h2 className="m-0 font-serif text-xl font-bold text-primary">
                  Cheque / Demand Draft Contributions
                </h2>
              </div>
              <p className="m-0 text-sm text-foreground/90 sm:text-base">
                Contributions can be sent by Demand Draft (DD) or Cheque to any of the following addresses:
              </p>

              <div className="grid grid-cols-1 gap-4 pt-1 md:grid-cols-2">
                <div className="rounded-lg border border-border bg-background p-4 text-xs leading-relaxed sm:text-sm">
                  <strong className="mb-1 block text-primary">Chennai Office:</strong>
                  <p className="m-0 text-foreground">
                    Veda Rakshana Nidhi Trust,<br />
                    64/31 Subramaniam Street,<br />
                    West Mambalam, Chennai - 600 033.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-background p-4 text-xs leading-relaxed sm:text-sm">
                  <strong className="mb-1 block text-primary">Kancheepuram Office:</strong>
                  <p className="m-0 text-foreground">
                    Veda Rakshana Nidhi Trust,<br />
                    C/o. Sri Kanchi Kamakoti Peetam,<br />
                    No. 1, Salai Street, Kancheepuram - 631 502.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Bank Accounts, FCRA & Quick Scan */}
          <div className="flex w-full flex-col gap-6 lg:sticky lg:top-6 lg:w-[40%]">

            {/* Quick Scan UPI Card */}
            <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-surface p-6 text-center shadow-soft">
              <div className="mb-4 flex w-full items-center gap-2 self-start border-b border-border pb-2">
                <QrCode className="h-5 w-5 text-primary" aria-hidden="true" />
                <h2 className="m-0 font-serif text-xl font-bold text-primary">Quick Scan</h2>
              </div>

              <div className="flex h-[220px] w-[220px] items-center justify-center overflow-hidden rounded-lg border border-border bg-background p-4 shadow-soft">
                <img
                  src="/assets/qr-code.jpg"
                  alt="VRNT donation QR code for scanning with any UPI payment app"
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>

              <p className="m-0 max-w-xs font-serif text-xs leading-normal text-muted-foreground">
                Scan this QR code using any UPI app to send your contributions directly to VRNT.
              </p>
            </div>

            {/* Standard Domestic Bank Details */}
            <div className="flex flex-col gap-4 rounded-xl border border-border bg-surface p-6 shadow-soft">
              <div className="flex items-center gap-2 border-b border-border pb-2">
                <CreditCard className="h-5 w-5 text-primary" aria-hidden="true" />
                <h2 className="m-0 font-serif text-xl font-bold text-primary">Domestic Bank Accounts</h2>
              </div>

              <div className="space-y-4">
                {(SITE_CONTENT.bankDetails || []).map((bank, index) => (
                  <div key={index} className="space-y-2 border-b border-border pb-3 last:border-0 last:pb-0">
                    <h3 className="m-0 font-sans text-sm font-bold uppercase tracking-wide text-foreground">{bank.bank}</h3>
                    <span className="block text-xs uppercase text-muted-foreground">{bank.branch}</span>

                    <div className="mt-2 flex flex-col gap-1.5">
                      <div className="flex items-center justify-between gap-2 rounded-lg border border-border bg-background px-3 py-1.5 font-sans text-xs">
                        <code className="font-mono tracking-wide text-foreground/90">{bank.account}</code>
                        <button
                          type="button"
                          onClick={() => copyToClipboard(bank.account, `${bank.bank} account number`)}
                          aria-label={`Copy ${bank.bank} account number`}
                          className="flex min-h-9 min-w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-primary"
                        >
                          <Copy size={14} aria-hidden="true" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between gap-2 rounded-lg border border-border bg-background px-3 py-1.5 font-sans text-xs">
                        <span className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">IFSC: {bank.ifsc}</span>
                        <button
                          type="button"
                          onClick={() => copyToClipboard(bank.ifsc, `${bank.bank} IFSC code`)}
                          aria-label={`Copy ${bank.bank} IFSC code`}
                          className="flex min-h-9 min-w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-primary"
                        >
                          <Copy size={14} aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FCRA Account Details (Foreign Contributions) */}
            <div className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-6 shadow-soft">
              <div className="flex items-center gap-2 border-b border-border pb-2">
                <Globe className="h-5 w-5 text-primary" aria-hidden="true" />
                <h2 className="m-0 font-serif text-xl font-bold text-primary">FCRA Foreign Account</h2>
              </div>

              <p className="m-0 text-xs font-bold uppercase text-primary">
                SRI KAMAKOTI GHATIKASRAMAM TRUST
              </p>
              <p className="m-0 text-xs text-muted-foreground">
                SBI New Delhi Main Branch
              </p>

              <div className="flex flex-col gap-1.5 pt-1">
                <div className="flex items-center justify-between gap-2 rounded-lg border border-border bg-background px-3 py-1.5 font-sans text-xs">
                  <code className="font-mono tracking-wide text-foreground/90">S.B. A/c: 4010 560 7270</code>
                  <button
                    type="button"
                    onClick={() => copyToClipboard("40105607270", "FCRA account number")}
                    aria-label="Copy FCRA account number"
                    className="flex min-h-9 min-w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Copy size={14} aria-hidden="true" />
                  </button>
                </div>

                <div className="flex items-center justify-between gap-2 rounded-lg border border-border bg-background px-3 py-1.5 font-sans text-xs">
                  <span className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">IFSC: SBIN0000691</span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard("SBIN0000691", "FCRA IFSC code")}
                    aria-label="Copy FCRA IFSC code"
                    className="flex min-h-9 min-w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Copy size={14} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Contact Persons Grid */}
        <section className="flex flex-col gap-5 rounded-xl border border-border bg-surface p-6 shadow-soft sm:p-8">
          <div className="flex items-center gap-2 border-b border-border pb-3">
            <Phone className="h-6 w-6 text-primary" aria-hidden="true" />
            <h2 className="m-0 font-serif text-2xl font-bold text-primary">
              Trust Representative Contacts
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {contactPersons.map((person, idx) => (
              <div key={idx} className="flex flex-col gap-1.5 rounded-lg border border-border bg-background p-5 shadow-soft">
                <span className="font-serif text-base font-bold text-foreground sm:text-lg">
                  {person.name}
                </span>
                <a
                  href={`tel:${person.phone.replace(/\s+/g, '')}`}
                  className="inline-flex min-h-9 items-center font-sans text-sm font-bold text-primary hover:underline sm:text-base"
                >
                  {person.phone}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Alert Information Banner */}
        <section className="flex w-full flex-col items-center gap-4 rounded-xl border border-border bg-surface p-6 text-center shadow-soft">
          <CheckCircle2 className="h-12 w-12 text-primary" aria-hidden="true" />
          <h2 className="m-0 font-serif text-2xl font-bold text-foreground">Important Information</h2>
          <p className="m-0 max-w-2xl font-serif text-sm leading-relaxed text-foreground/90 md:text-base">
            <strong>80G benefits are available for your contributions.</strong> For online contributions, kindly send an e-mail to <a href="mailto:office@vrnt.org" className="font-bold text-primary hover:underline">office@vrnt.org</a> with the details of the online transfer to enable us to send receipts.
          </p>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-3 font-sans text-xs font-bold uppercase tracking-wider text-muted-foreground">
            <span className="rounded-full border border-border bg-background px-3 py-1.5 shadow-soft">80G Tax Benefits</span>
            <span className="rounded-full border border-border bg-background px-3 py-1.5 shadow-soft">Secure Transfer</span>
            <span className="rounded-full border border-border bg-background px-3 py-1.5 shadow-soft">Digital Receipts</span>
          </div>
        </section>

      </div>
    </>
  );
}
