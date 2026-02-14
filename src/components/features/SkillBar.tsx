import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';
import type { Skill } from '@/types';

interface SkillBarProps {
  skill: Skill;
  index: number;
}

function SkillBar({ skill, index }: SkillBarProps) {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <div
      ref={ref}
      className="group"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(-16px)',
        transition: `opacity 0.4s ease-out ${index * 0.05}s, transform 0.4s ease-out ${index * 0.05}s`,
      }}
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="font-mono text-sm text-foreground">{skill.name}</span>
        <span className="font-mono text-xs text-muted-foreground tabular-nums">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
          style={{ width: isVisible ? `${skill.level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default SkillBar;
