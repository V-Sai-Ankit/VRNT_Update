import { Link } from "react-router-dom";
import { Helmet } from "@/lib/seo";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <Helmet title="Page not found" description="The page you are looking for could not be found." />
      <p className="font-serif text-6xl font-bold text-accent-strong">404</p>
      <h1 className="mt-4 font-serif text-2xl font-bold text-primary">Page not found</h1>
      <p className="mt-3 text-muted-foreground">
        The page you're looking for may have moved or no longer exists.
      </p>
      <Button asChild size="lg" className="mt-8">
        <Link to="/">Return to homepage</Link>
      </Button>
    </div>
  );
}
