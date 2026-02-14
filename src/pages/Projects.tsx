import { useState, useMemo } from 'react';
import { PROJECTS, CATEGORIES } from '@/constants/mockData';
import SectionHeading from '@/components/features/SectionHeading';
import ProjectCard from '@/components/features/ProjectCard';

function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="pt-24 lg:pt-28">
      {/* Header */}
      <section className="px-6 lg:px-12 pb-8">
        <SectionHeading
          label="Ventures"
          title="Innovations & Impact"
          description="A showcase of the companies and technologies I've founded and led to create financial inclusion and digital growth."
        />

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mt-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 font-mono text-xs rounded-sm transition-colors duration-200 ${activeCategory === cat.value
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Project Grid */}
      <section className="px-6 lg:px-12 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-24 text-center">
            <p className="font-mono text-sm text-muted-foreground">No companies in this category yet.</p>
          </div>
        )}
      </section>
    </div>
  );
}

export default Projects;
