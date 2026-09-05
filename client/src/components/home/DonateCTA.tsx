import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SITE_CONTENT } from "@/lib/constants";

export default function DonateCTA() {
  const schemeCount = SITE_CONTENT.supportSchemes.length;

  return (
    <section className="bg-primary py-14 text-primary-foreground sm:py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-serif text-3xl font-bold">Support Veda Rakshanam</h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/90">
          Your contribution sustains Vedic scholars, students, and Patasalas across India. Choose
          from {schemeCount} support schemes, from a one-time gift to a lifelong sponsorship.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button asChild variant="accent" size="lg">
            <Link to="/donate">See how you can support</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
