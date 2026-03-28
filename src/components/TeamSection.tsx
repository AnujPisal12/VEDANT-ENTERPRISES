import React, { useEffect, useRef, useState } from 'react';
import { Mail } from 'lucide-react';

const TeamSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" className="py-20 bg-muted" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-gradient-primary">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dedicated professionals committed to excellence and innovation
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-6" />
        </div>

        <div className={`scroll-fade-in ${isVisible ? 'visible' : ''} flex justify-center`}>
          <div className="bg-card rounded-2xl shadow-medium border border-border p-10 text-center max-w-sm w-full">
            <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <span className="text-4xl">👨‍💼</span>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-1">Harshal Hanmantrao Shinde</h3>
            <p className="text-accent font-semibold text-lg mb-6">Managing Director</p>
            <div className="w-12 h-0.5 bg-accent mx-auto mb-6" />
            <a
              href="mailto:vedant_en@rediffmail.com"
              className="inline-flex items-center space-x-2 text-muted-foreground text-sm"
            >
              <Mail className="w-4 h-4" />
              <span>vedant_en@rediffmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
