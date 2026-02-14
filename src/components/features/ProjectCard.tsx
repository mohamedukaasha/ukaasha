import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/types';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

interface ProjectCardProps {
  project: Project;
  index: number;
  variant?: 'featured' | 'grid';
}

function ProjectCard({ project, index, variant = 'grid' }: ProjectCardProps) {
  const { ref, isVisible } = useRevealOnScroll();

  if (variant === 'featured') {
    return (
      <div
        ref={ref}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
          transition: `opacity 0.6s ease-out ${index * 0.15}s, transform 0.6s ease-out ${index * 0.15}s`,
        }}
      >
        <Link
          to={`/projects/${project.slug}`}
          className="group block"
        >
          <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center ${
            index % 2 === 1 ? 'lg:direction-rtl' : ''
          }`}>
            {/* Image */}
            <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="relative overflow-hidden rounded-sm aspect-[16/10]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-background/80 backdrop-blur-sm font-mono text-[10px] text-foreground rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              <span className="font-mono text-xs text-primary">{project.year} — {project.category}</span>
              <h3 className="mt-2 font-display font-bold text-2xl lg:text-3xl text-foreground group-hover:text-primary transition-colors duration-200">
                {project.title}
                <ArrowUpRight className="inline-block size-5 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-y-1 group-hover:translate-y-0" />
              </h3>
              <p className="mt-2 font-display text-base text-muted-foreground">{project.tagline}</p>
              <p className="mt-4 font-mono text-sm text-muted-foreground leading-relaxed line-clamp-3">{project.description}</p>

              {/* Results preview */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                {project.results.slice(0, 2).map((r) => (
                  <div key={r.label}>
                    <p className="font-display font-bold text-xl text-primary tabular-nums">{r.value}</p>
                    <p className="font-mono text-[11px] text-muted-foreground mt-0.5">{r.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`,
      }}
    >
      <Link to={`/projects/${project.slug}`} className="group block">
        <div className="relative overflow-hidden rounded-sm aspect-[16/10] mb-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
        </div>
        <span className="font-mono text-[11px] text-primary uppercase">{project.category}</span>
        <h3 className="mt-1 font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-200">
          {project.title}
          <ArrowUpRight className="inline-block size-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </h3>
        <p className="mt-1 font-mono text-xs text-muted-foreground line-clamp-2">{project.tagline}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-secondary font-mono text-[10px] text-secondary-foreground rounded-sm">
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard;
