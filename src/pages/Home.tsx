import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Github, Linkedin, Twitter } from 'lucide-react';
import { useSpotlight } from '@/hooks/useSpotlight';
import { SITE_CONFIG } from '@/constants/config';
import { PROJECTS, STATS, SOCIAL_LINKS } from '@/constants/mockData';
import SectionHeading from '@/components/features/SectionHeading';
import ProjectCard from '@/components/features/ProjectCard';
import StatCard from '@/components/features/StatCard';
import TestimonialCard from '@/components/features/TestimonialCard';
import heroBg from '@/assets/hero-bg.jpg';

function Home() {
  const spotlight = useSpotlight();
  const featured = PROJECTS.filter((p) => p.featured);
  const testimonials = PROJECTS.filter((p) => p.testimonial).map((p) => p.testimonial!);

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden grain">
        {/* Background layers */}
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        </div>

        {/* Spotlight follow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 700px 500px at ${spotlight.x} ${spotlight.y}, hsl(40 95% 55% / 0.05), transparent)`,
          }}
        />

        {/* Diagonal decorative line */}
        <div className="absolute top-0 right-0 w-px h-[120vh] bg-gradient-to-b from-primary/30 via-primary/10 to-transparent rotate-12 translate-x-[30vw] -translate-y-[10vh]" />

        <div className="relative z-10 w-full px-6 lg:px-12 pt-24 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            {/* Main content */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-6 animate-fade-in">
                <span className="size-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-mono text-xs text-muted-foreground">{SITE_CONFIG.availability}</span>
              </div>

              <h1
                className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-foreground leading-[0.95] text-balance animate-slide-up"
              >
                Building
                <br />
                <span className="text-gradient">inclusive</span>
                <br />
                economies<span className="text-primary">.</span>
              </h1>

              <p
                className="mt-8 font-mono text-sm lg:text-base text-muted-foreground max-w-lg leading-relaxed text-pretty animate-slide-up"
                style={{ animationDelay: '0.15s' }}
              >
                {SITE_CONFIG.description}
              </p>

              <div
                className="mt-8 flex flex-wrap items-center gap-4 animate-slide-up"
                style={{ animationDelay: '0.3s' }}
              >
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display font-semibold text-sm rounded-sm hover:opacity-90 transition-opacity duration-200"
                >
                  View My Ventures
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-display font-semibold text-sm rounded-sm hover:border-primary/50 hover:text-primary transition-colors duration-200"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Right sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div
                className="flex gap-3 animate-fade-in"
                style={{ animationDelay: '0.4s' }}
              >
                {[
                  { icon: Github, href: SOCIAL_LINKS.github },
                  { icon: Linkedin, href: SOCIAL_LINKS.linkedin },
                  { icon: Twitter, href: SOCIAL_LINKS.twitter },
                ].map(({ icon: Icon, href }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-10 flex items-center justify-center border border-border rounded-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors duration-200"
                    aria-label="Social link"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>

              {/* Mini stats */}
              <div
                className="grid grid-cols-2 gap-3 animate-fade-in"
                style={{ animationDelay: '0.5s' }}
              >
                {STATS.slice(0, 2).map((stat) => (
                  <div key={stat.label} className="p-4 border border-border rounded-sm">
                    <p className="font-display font-bold text-2xl text-primary tabular-nums">{stat.value}</p>
                    <p className="font-mono text-[10px] text-muted-foreground uppercase mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent" />
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} label={stat.label} value={stat.value} index={i} />
          ))}
        </div>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <section className="px-6 lg:px-12 py-16 lg:py-24">
        <SectionHeading
          label="Featured Companies"
          title="Ventures that drive impact"
          description="Selected companies and initiatives that are shaping the future of technology."
        />

        <div className="flex flex-col gap-16 lg:gap-24">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} variant="featured" />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 font-mono text-sm text-primary hover:underline"
          >
            View all companies
            <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="px-6 lg:px-12 py-16 lg:py-24 bg-card/50">
        <SectionHeading
          label="Partner Feedback"
          title="What people say"
          description="Feedback from partners and collaborators across my various ventures."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard
              key={t.author}
              text={t.text}
              author={t.author}
              role={t.role}
              avatar={t.avatar}
            />
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="px-6 lg:px-12 py-24 lg:py-32">
        <div className="relative p-8 lg:p-16 border border-border rounded-sm overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="relative text-center">
            <h2 className="font-display font-bold text-3xl lg:text-5xl text-foreground text-balance">
              Let's build something
              <span className="text-gradient"> extraordinary</span>
            </h2>
            <p className="mt-4 font-mono text-sm text-muted-foreground max-w-md mx-auto">
              Interested in the future of software tech, blockchain, or infrastructure? Let's discuss potential collaborations or ventures.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 mt-8 px-8 py-4 bg-primary text-primary-foreground font-display font-semibold text-base rounded-sm hover:opacity-90 transition-opacity duration-200"
            >
              Start a Conversation
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
