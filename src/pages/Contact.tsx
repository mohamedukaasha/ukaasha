import { useState } from 'react';
import { Send, Mail, MapPin, Clock, ArrowUpRight, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { SITE_CONFIG } from '@/constants/config';
import { SOCIAL_LINKS } from '@/constants/mockData';
import SectionHeading from '@/components/features/SectionHeading';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

const INQUIRY_TYPES = [
  'Software Development',
  'Marketing Services',
  'EdTech Collaboration',
  'Strategic Partnership',
  'Venture Inquiry',
  'Other',
];

function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: '',
  });
  const [sending, setSending] = useState(false);
  const { ref: formRef, isVisible: formVisible } = useRevealOnScroll();
  const { ref: infoRef, isVisible: infoVisible } = useRevealOnScroll();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        variant: 'destructive',
        title: 'Missing fields',
        description: 'Please fill in your name, email, and message.',
      });
      return;
    }

    setSending(true);

    // Construct WhatsApp message
    const whatsappMessage = `Hello Mohamed!%0A%0AMy name is ${formData.name}.%0AEmail: ${formData.email}%0ASubject: ${formData.subject || 'N/A'}%0AInquiry Type: ${formData.type || 'Not specified'}%0A%0AMessage:%0A${formData.message}`;
    const whatsappUrl = `https://wa.me/${(SITE_CONFIG as any).phone.replace(/[\s\+]/g, '')}?text=${whatsappMessage}`;

    // Simulated send delay then redirect
    setTimeout(() => {
      const saved = JSON.parse(localStorage.getItem('contact_messages') || '[]');
      saved.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('contact_messages', JSON.stringify(saved));

      setSending(false);
      window.open(whatsappUrl, '_blank');

      toast({
        title: 'Redirecting to WhatsApp...',
        description: 'Opening your message in WhatsApp.',
      });

      setFormData({ name: '', email: '', subject: '', message: '', type: '' });
    }, 800);
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="pt-24 lg:pt-28">
      <section className="px-6 lg:px-12 pb-8">
        <SectionHeading
          label="Contact"
          title="Let's build together"
          description="Interested in collaborating on a new venture, requesting a speaking engagement, or just want to connect? Reach out below."
        />
      </section>

      <section className="px-6 lg:px-12 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Form */}
          <div
            ref={formRef}
            className="lg:col-span-7"
            style={{
              opacity: formVisible ? 1 : 0,
              transform: formVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-sm font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-sm font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors duration-200"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => updateField('subject', e.target.value)}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-sm font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors duration-200"
                  placeholder="Venture inquiry, collaboration, etc."
                />
              </div>

              {/* Inquiry Type */}
              <div>
                <label className="block font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
                  Inquiry Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {INQUIRY_TYPES.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => updateField('type', formData.type === opt ? '' : opt)}
                      className={`px-3 py-1.5 font-mono text-xs rounded-sm transition-colors duration-200 ${formData.type === opt
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                        }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => updateField('message', e.target.value)}
                  rows={6}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-sm font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors duration-200 resize-none"
                  placeholder="Tell me about your venture, timeline, and goals..."
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-display font-semibold text-sm rounded-sm hover:opacity-90 transition-opacity duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? (
                  <>
                    <div className="size-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send via WhatsApp
                    <Send className="size-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div
            ref={infoRef}
            className="lg:col-span-5"
            style={{
              opacity: infoVisible ? 1 : 0,
              transform: infoVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.6s ease-out 0.15s, transform 0.6s ease-out 0.15s',
            }}
          >
            <div className="p-6 lg:p-8 border border-border rounded-sm bg-card">
              <h3 className="font-display font-bold text-lg text-foreground mb-6">Get in Touch</h3>

              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-3">
                  <div className="size-9 flex items-center justify-center bg-secondary rounded-sm flex-shrink-0">
                    <Mail className="size-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted-foreground uppercase">Email</p>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="font-mono text-sm text-foreground hover:text-primary transition-colors duration-200">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="size-9 flex items-center justify-center bg-secondary rounded-sm flex-shrink-0">
                    <MapPin className="size-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted-foreground uppercase">Location</p>
                    <p className="font-mono text-sm text-foreground">{SITE_CONFIG.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="size-9 flex items-center justify-center bg-secondary rounded-sm flex-shrink-0">
                    <MessageCircle className="size-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted-foreground uppercase">WhatsApp</p>
                    <a href={`https://wa.me/${(SITE_CONFIG as any).phone.replace(/[\s\+]/g, '')}`} target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-foreground hover:text-primary transition-colors duration-200">
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="size-9 flex items-center justify-center bg-secondary rounded-sm flex-shrink-0">
                    <Clock className="size-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted-foreground uppercase">Response Time</p>
                    <p className="font-mono text-sm text-foreground">Within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="font-mono text-xs text-muted-foreground uppercase mb-3">Find me on</p>
                <div className="flex flex-col gap-2">
                  {[
                    { label: 'GitHub', url: SOCIAL_LINKS.github },
                    { label: 'LinkedIn', url: SOCIAL_LINKS.linkedin },
                    { label: 'Twitter', url: SOCIAL_LINKS.twitter },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-2 font-mono text-sm text-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                      <ArrowUpRight className="size-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability card */}
            <div className="mt-4 p-6 border border-primary/20 rounded-sm bg-primary/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="size-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-display font-semibold text-sm text-foreground">Currently Available</span>
              </div>
              <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                I'm currently focused on leading Echoes Software Technologies and Arroway, but I am always open to discussing innovative ventures and strategic partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
