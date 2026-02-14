import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { SITE_CONFIG } from '@/constants/config';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Companies', path: '/projects' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-nav transition-all duration-300 ${scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
        }`}
    >
      <nav className="flex items-center justify-between px-6 lg:px-12 h-16 lg:h-20">
        <Link
          to="/"
          className="font-display font-bold text-lg tracking-tight text-foreground hover:text-primary transition-colors duration-200"
        >
          {SITE_CONFIG.name}
          <span className="text-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-mono text-xs uppercase tracking-wider transition-colors duration-200 ${location.pathname === item.path
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-5 py-2 bg-primary text-primary-foreground font-display font-semibold text-sm rounded-sm hover:opacity-90 transition-opacity duration-200"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden size-10 flex items-center justify-center text-foreground"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="flex flex-col px-6 py-6 gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-mono text-sm py-2 ${location.pathname === item.path
                    ? 'text-primary'
                    : 'text-muted-foreground'
                  }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 px-5 py-3 bg-primary text-primary-foreground font-display font-semibold text-sm rounded-sm text-center"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
