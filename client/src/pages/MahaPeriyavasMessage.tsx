import { Link } from "react-router-dom";
import { Helmet } from "@/lib/seo";

export default function MahaPeriyavasMessage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <Helmet
        title="Maha Periyava's Message"
        description="The divine guidance and appeal of His Holiness Sri Sri Chandrashekarendra Saraswati MahaSwamigal regarding the protection and preservation of the Vedas."
      />
      <Link to="/" className="mb-6 inline-flex min-h-9 items-center gap-2 font-sans text-sm font-bold text-primary hover:underline">
        ← Back to home
      </Link>

      <h1 className="mb-6 font-serif text-2xl font-bold text-primary sm:text-3xl">Maha Periyava's Message</h1>

      <img
        src="/assets/generated_images/Maha Periyava messages.webp"
        alt="Maha Periyava's written message regarding the protection and preservation of the Vedas"
        loading="lazy"
        className="w-full rounded-lg border border-border object-contain shadow-soft"
      />
    </div>
  );
}
