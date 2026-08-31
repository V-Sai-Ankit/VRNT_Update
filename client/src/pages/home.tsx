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
        image={{ src: "/images/vedic-heritage.png", alt: "Ancient Vedic manuscripts representing the Trust's heritage preservation work" }}
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
        image={{ src: "/assets/generated_images/vedic_scriptures_and_oil_lamp_warm_background.png", alt: "Vedic scriptures beside a traditional oil lamp" }}
        imageSide="left"
        cta={{ label: "Explore all activities", to: "/activities" }}
      >
        <p>{SITE_CONTENT.activities.description}</p>
      </HomeSection>

      <HomeSection
        eyebrow="Current Initiative"
        title="Pariksha — Vedic Examinations"
        image={{ src: "/images/education.jpg", alt: "Students engaged in traditional Vedic education" }}
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
        image={{ src: "/history/Golden jublee.jpg", alt: "The Trust's Golden Jubilee celebration invitation" }}
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
