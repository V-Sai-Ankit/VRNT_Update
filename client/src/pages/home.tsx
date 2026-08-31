import { Helmet } from "@/lib/seo";
import HeroSection from "@/components/home/HeroSection";
import AnnouncementTeaser from "@/components/home/AnnouncementTeaser";
import HomeSection from "@/components/home/HomeSection";
import VedaVrukshamFeature from "@/components/home/VedaVrukshamFeature";
import DonateCTA from "@/components/home/DonateCTA";
import ContactSummary from "@/components/home/ContactSummary";
import { SITE_CONTENT } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Helmet
        title="Veda Rakshana Nidhi Trust — Preserving Vedic Heritage Since 1963"
        description="A public charitable trust dedicated to preserving the Vedic oral tradition through education, examinations, and support for Vedic scholars across India."
      />

      <HeroSection />
      <AnnouncementTeaser />

      <HomeSection
        eyebrow="Our Purpose"
        title="Mission & Vision"
        image={{ src: "/images/education.webp", alt: "A teacher and students of a Veda Patasala supported by the Trust" }}
        cta={{ label: "Read our full mission", to: "/mission" }}
      >
        <p>{SITE_CONTENT.mission.points[0]}</p>
        <p>{SITE_CONTENT.mission.points[2]}</p>
      </HomeSection>

      <VedaVrukshamFeature />

      <HomeSection
        tone="muted"
        eyebrow="What We Do"
        title="Activities & Programs"
        image={{ src: "/assets/HNY.webp", alt: "A Hereditary Niyama Adhyayanam (HNY) teaching session at the Trust" }}
        imageSide="left"
        cta={{ label: "Explore all activities", to: "/activities" }}
      >
        <p>{SITE_CONTENT.activities.description}</p>
      </HomeSection>

      <HomeSection
        eyebrow="Current Initiative"
        title="Pariksha — Vedic Examinations"
        image={{ src: "/assets/Acharya certificate.webp", alt: "An Acharya presenting a certificate to a successful Vedic examination candidate" }}
        cta={{ label: "View exam schedules & results", to: "/pariksha" }}
      >
        <p>
          The Trust conducts the Varshika and Poorthy Vedic examinations each year, recognising and
          certifying scholars who complete their traditional studies. Registration for the 2026
          Vijaya Dasami Poorthy Exam is now open.
        </p>
      </HomeSection>

      <HomeSection
        tone="muted"
        eyebrow="Six Decades of Service"
        title="Our Heritage"
        image={{ src: "/history/IMG-20260716-WA0008.webp", alt: "An archival photograph of the Trust's founding-era Acharya blessing devotees" }}
        imageSide="left"
        cta={{ label: "Read our history", to: "/history" }}
      >
        <p>
          Since 1963, Veda Rakshana Nidhi Trust has walked a six-decade journey supporting Vedic
          scholars and Patasalas across India — a story of quiet, sustained service now marked by
          its Shashtyabda (60th year) celebrations.
        </p>
      </HomeSection>

      <DonateCTA />
      <ContactSummary />
    </>
  );
}
