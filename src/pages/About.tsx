import { Link } from 'react-router-dom';
import { ArrowRight, Download, MapPin, Calendar, Briefcase } from 'lucide-react';
import { SITE_CONFIG } from '@/constants/config';
import { SKILLS, EXPERIENCES, STATS } from '@/constants/mockData';
import SectionHeading from '@/components/features/SectionHeading';
import SkillBar from '@/components/features/SkillBar';
import StatCard from '@/components/features/StatCard';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';
import aboutBg from '@/assets/about-bg.jpg';

const SKILL_CATEGORIES = [
  { key: 'frontend' as const, label: 'Frontend' },
  { key: 'backend' as const, label: 'Backend' },
  { key: 'devops' as const, label: 'DevOps' },
  { key: 'design' as const, label: 'Design' },
];

function About() {
  const { ref: bioRef, isVisible: bioVisible } = useRevealOnScroll();

  return (
    <div className="pt-24 lg:pt-28">
      {/* Hero / Intro */}
      <section className="relative px-6 lg:px-12 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutBg} alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Bio */}
          <div
            ref={bioRef}
            className="lg:col-span-7"
            style={{
              opacity: bioVisible ? 1 : 0,
              transform: bioVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
            }}
          >
            <span className="font-mono text-xs text-primary uppercase tracking-widest">About Me</span>
            <h1 className="mt-4 font-display font-bold text-4xl lg:text-6xl text-foreground text-balance">
              {SITE_CONFIG.name}<span className="text-primary">.</span>
            </h1>
            <p className="mt-2 font-display text-lg text-primary">{SITE_CONFIG.title}</p>
            <p className="mt-6 font-mono text-sm text-muted-foreground leading-relaxed max-w-2xl text-pretty">
              I'm a technology entrepreneur and visionary leader with a focus on enterprise software, strategic growth, and educational innovation.
              As the Founder of Echoes Software Technologies, I lead a team dedicated to delivering high-impact solutions for businesses globally.
            </p>
            <p className="mt-4 font-mono text-sm text-muted-foreground leading-relaxed max-w-2xl text-pretty">
              My entrepreneurial journey includes founding multiple ventures such as Arroway, which focuses on strategic business growth,
              Judolearning, an interactive EdTech platform, and Infynecs, which builds resilient tech and software infrastructure.
              I thrive on crafting scalable solutions that solve real-world problems.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6 font-mono text-xs text-muted-foreground">
              <span className="flex items-center gap-2">
                <MapPin className="size-3.5 text-primary" /> {SITE_CONFIG.location}
              </span>
              <span className="flex items-center gap-2">
                <Briefcase className="size-3.5 text-primary" /> {SITE_CONFIG.availability}
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display font-semibold text-sm rounded-sm hover:opacity-90 transition-opacity duration-200"
              >
                Get in Touch
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <button
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-display font-semibold text-sm rounded-sm hover:border-primary/50 hover:text-primary transition-colors duration-200"
                aria-label="Download resume"
              >
                <Download className="size-4" />
                Resume
              </button>
            </div>
          </div>

          {/* Photo */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-sm">
                <img
                  src="/founder.jpeg"
                  alt={SITE_CONFIG.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative border offset */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-primary/20 rounded-sm -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 lg:px-12 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} label={stat.label} value={stat.value} index={i} />
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 lg:px-12 py-16 lg:py-24">
        <SectionHeading
          label="Technical Skills"
          title="Tools & Technologies"
          description="A constantly evolving toolkit shaped by company needs and curiosity."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.key}>
              <h3 className="font-display font-semibold text-lg text-foreground mb-5 flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-primary" />
                {cat.label}
              </h3>
              <div className="flex flex-col gap-4">
                {SKILLS.filter((s) => s.category === cat.key).map((skill, i) => (
                  <SkillBar key={skill.name} skill={skill} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="px-6 lg:px-12 py-16 lg:py-24 bg-card/50">
        <SectionHeading
          label="Experience"
          title="Where I've worked"
          description="A timeline of my professional journey and the teams I've contributed to."
        />

        <div className="max-w-3xl">
          <div className="relative border-l-2 border-border pl-8 flex flex-col gap-10">
            {EXPERIENCES.map((exp, i) => (
              <ExperienceItem key={exp.company} experience={exp} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ExperienceItem({ experience, index }: { experience: typeof EXPERIENCES[0]; index: number }) {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <div
      ref={ref}
      className="relative"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(-16px)',
        transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`,
      }}
    >
      {/* Timeline dot */}
      <div className="absolute -left-[calc(2rem+5px)] top-1 size-2.5 rounded-full bg-primary" />

      <div className="flex items-center gap-2 mb-1">
        <Calendar className="size-3 text-primary" />
        <span className="font-mono text-xs text-primary">{experience.period}</span>
      </div>
      <h3 className="font-display font-bold text-lg text-foreground">{experience.role}</h3>
      <p className="font-display text-sm text-muted-foreground">{experience.company}</p>
      <p className="mt-2 font-mono text-sm text-muted-foreground leading-relaxed">
        {experience.description}
      </p>
    </div>
  );
}

export default About;
