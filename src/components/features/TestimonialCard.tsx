import { Quote } from 'lucide-react';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

interface TestimonialCardProps {
  text: string;
  author: string;
  role: string;
  avatar: string;
}

function TestimonialCard({ text, author, role, avatar }: TestimonialCardProps) {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <div
      ref={ref}
      className="relative p-6 lg:p-8 border border-border rounded-sm bg-card"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
      }}
    >
      <Quote className="size-8 text-primary/30 mb-4" />
      <p className="font-mono text-sm text-foreground/90 leading-relaxed italic">&ldquo;{text}&rdquo;</p>
      <div className="mt-6 flex items-center gap-3">
        <img src={avatar} alt={author} className="size-10 rounded-full object-cover" />
        <div>
          <p className="font-display font-semibold text-sm text-foreground">{author}</p>
          <p className="font-mono text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
