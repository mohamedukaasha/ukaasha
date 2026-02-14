import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '@/constants/mockData';

function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="pt-24 px-6 lg:px-12 min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="font-display font-bold text-3xl text-foreground">Company Not Found</h1>
        <Link to="/projects" className="font-mono text-sm text-primary hover:underline">
          ← Back to all companies
        </Link>
      </div>
    );
  }

  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

  return (
    <div className="pt-24 lg:pt-28">
      {/* Back link */}
      <div className="px-6 lg:px-12 mb-6">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          <ArrowLeft className="size-3" />
          All Companies
        </Link>
      </div>

      {/* Hero area */}
      <section className="px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left — project info */}
          <div className="lg:col-span-5">
            <span className="font-mono text-xs text-primary uppercase tracking-wider">
              {project.year} — {project.category}
            </span>
            <h1 className="mt-3 font-display font-bold text-4xl lg:text-5xl text-foreground text-balance">
              {project.title}
            </h1>
            <p className="mt-2 font-display text-lg text-muted-foreground">{project.tagline}</p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div>
                <p className="font-mono text-[11px] text-muted-foreground uppercase">Role</p>
                <p className="font-mono text-sm text-foreground mt-1">{project.role}</p>
              </div>
              <div>
                <p className="font-mono text-[11px] text-muted-foreground uppercase">Duration</p>
                <p className="font-mono text-sm text-foreground mt-1">{project.duration}</p>
              </div>
              {project.client && (
                <div>
                  <p className="font-mono text-[11px] text-muted-foreground uppercase">Client</p>
                  <p className="font-mono text-sm text-foreground mt-1">{project.client}</p>
                </div>
              )}
            </div>

            {/* Links */}
            <div className="mt-8 flex gap-3">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-display font-semibold text-sm rounded-sm hover:opacity-90 transition-opacity duration-200"
                >
                  Live Demo <ExternalLink className="size-3.5" />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground font-display font-semibold text-sm rounded-sm hover:border-primary/50 hover:text-primary transition-colors duration-200"
                >
                  Source Code <Github className="size-3.5" />
                </a>
              )}
            </div>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-secondary font-mono text-xs text-secondary-foreground rounded-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — hero image */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-sm aspect-[16/10]">
              <img src={project.gallery[0]} alt={project.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="font-display font-bold text-2xl text-foreground mb-4">About the Company</h2>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed text-pretty">
              {project.description}
            </p>
          </div>

          {/* Results */}
          <div className="lg:col-span-5">
            <h2 className="font-display font-bold text-2xl text-foreground mb-6">Key Results</h2>
            <div className="grid grid-cols-2 gap-6">
              {project.results.map((r) => (
                <div key={r.label} className="p-4 border border-border rounded-sm">
                  <p className="font-display font-bold text-2xl text-primary tabular-nums">{r.value}</p>
                  <p className="font-mono text-[11px] text-muted-foreground mt-1">{r.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery.length > 1 && (
        <section className="px-6 lg:px-12 pb-16 lg:pb-24">
          <h2 className="font-display font-bold text-2xl text-foreground mb-6">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {project.gallery.slice(1).map((img, i) => (
              <div key={i} className="overflow-hidden rounded-sm aspect-[16/10]">
                <img src={img} alt={`${project.title} screenshot ${i + 2}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Testimonial */}
      {project.testimonial && (
        <section className="px-6 lg:px-12 pb-16 lg:pb-24">
          <div className="p-8 lg:p-12 border border-border rounded-sm bg-card/50 max-w-3xl">
            <p className="font-mono text-base text-foreground/90 leading-relaxed italic">
              &ldquo;{project.testimonial.text}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3">
              <img
                src={project.testimonial.avatar}
                alt={project.testimonial.author}
                className="size-10 rounded-full object-cover"
              />
              <div>
                <p className="font-display font-semibold text-sm text-foreground">{project.testimonial.author}</p>
                <p className="font-mono text-xs text-muted-foreground">{project.testimonial.role}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Next project */}
      <section className="px-6 lg:px-12 py-16 lg:py-24 border-t border-border">
        <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Next Venture</span>
        <Link
          to={`/projects/${nextProject.slug}`}
          className="group block mt-4"
        >
          <h3 className="font-display font-bold text-3xl lg:text-4xl text-foreground group-hover:text-primary transition-colors duration-200">
            {nextProject.title}
            <ArrowUpRight className="inline-block size-6 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-200" />
          </h3>
          <p className="mt-1 font-mono text-sm text-muted-foreground">{nextProject.tagline}</p>
        </Link>
      </section>
    </div>
  );
}

export default ProjectDetail;
