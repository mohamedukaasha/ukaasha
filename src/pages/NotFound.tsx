import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-background px-6">
      <div className="text-center">
        <h1 className="font-display font-bold text-8xl lg:text-9xl text-primary/20">404</h1>
        <div className="-mt-12 lg:-mt-16">
          <p className="font-display font-bold text-2xl lg:text-3xl text-foreground mb-4">Page Not Found</p>
          <p className="font-mono text-sm text-muted-foreground mb-8 max-w-md mx-auto">
            The page you are looking for might have been moved, removed, or never existed in this realm.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-display font-semibold text-sm rounded-sm hover:opacity-90 transition-opacity duration-200"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

