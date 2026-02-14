import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

function SectionHeading({ label, title, description, align = 'left' }: SectionHeadingProps) {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <div
      ref={ref}
      className={`mb-12 lg:mb-16 ${align === 'center' ? 'text-center' : ''}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
      <span className="font-mono text-xs text-primary uppercase tracking-widest">
        {label}
      </span>
      <h2 className="mt-3 font-display font-bold text-3xl lg:text-5xl text-foreground text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 font-mono text-sm text-muted-foreground max-w-xl text-pretty leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
