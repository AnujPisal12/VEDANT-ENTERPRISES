import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import PageShell from "@/components/PageShell";
import DetailPageHeader from "@/components/DetailPageHeader";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageShell>
      <DetailPageHeader title="Page not found" subtitle="The page you requested does not exist or has been moved." />
      <div className="container mx-auto px-4 sm:px-6 py-16 text-center">
        <p className="text-muted-foreground mb-8">
          Path: <code className="text-sm bg-muted px-2 py-1 rounded">{location.pathname}</code>
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-6 py-3 font-semibold shadow-soft hover:opacity-90 transition-opacity"
        >
          Return to home
        </Link>
      </div>
    </PageShell>
  );
};

export default NotFound;
