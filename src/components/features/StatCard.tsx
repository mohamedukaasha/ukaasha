import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

interface StatCardProps {
  label: string;
  value: string;
  index: number;
}

function StatCard({ label, value, index }: StatCardProps) {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <div
      ref={ref}
      className="relative p-6 border border-border rounded-sm bg-card overflow-hidden group hover:border-primary/30 transition-colors duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity 0.4s ease-out ${index * 0.1}s, transform 0.4s ease-out ${index * 0.1}s`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <p className="font-display font-bold text-3xl lg:text-4xl text-primary tabular-nums">{value}</p>
      <p className="mt-2 font-mono text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
    </div>
  );
}

export default StatCard;
