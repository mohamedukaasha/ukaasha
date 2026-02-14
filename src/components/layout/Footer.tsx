import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { SITE_CONFIG } from '@/constants/config';
import { SOCIAL_LINKS } from '@/constants/mockData';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link to="/" className="font-display font-bold text-xl text-foreground">
              {SITE_CONFIG.name}<span className="text-primary">.</span>
            </Link>
            <p className="mt-3 font-mono text-sm text-muted-foreground max-w-sm leading-relaxed">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="font-display font-semibold text-sm text-foreground mb-4">Navigate</h4>
            <div className="flex flex-col gap-2">
              {['/', '/projects', '/about', '/contact'].map((path) => (
                <Link
                  key={path}
                  to={path}
                  className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="md:col-span-4">
            <h4 className="font-display font-semibold text-sm text-foreground mb-4">Connect</h4>
            <div className="flex gap-3">
              {[
                { icon: Github, href: SOCIAL_LINKS.github, label: 'GitHub' },
                { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
                { icon: Twitter, href: SOCIAL_LINKS.twitter, label: 'Twitter' },
                { icon: Mail, href: `mailto:${SOCIAL_LINKS.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-10 flex items-center justify-center bg-secondary rounded-sm text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
            <p className="mt-4 font-mono text-xs text-muted-foreground">
              {SITE_CONFIG.email}
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            © {year} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            Developed by Echoes Software Technologies
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
