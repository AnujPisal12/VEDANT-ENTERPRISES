import React, { useEffect, useRef, useState } from 'react';

interface TimelineItem {
  year: string;
  title: string;
  description: string[];
}

const HistorySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  const timelineData: TimelineItem[] = [
    {
      year: '2006',
      title: 'Establishment of Company',
      description: ['Protective caps']
    },
    {
      year: '2009',
      title: 'Main machine parts',
      description: ['Door handles', 'Cable ties', 'Gear knob']
    },
    {
      year: '2012',
      title: 'Automotive components',
      description: ['Dashboard components']
    },
    {
      year: '2015',
      title: 'Customer base enhanced',
      description: ['15+ esteemed customers']
    },
    {
      year: '2018',
      title: 'Plant expansion done',
      description: ['160T – Molding machine', 'Hydraulic Pipe Clamp developed']
    },
    {
      year: '2019',
      title: 'Quality Management',
      description: ['Quality system enhanced']
    },
    {
      year: '2022/23',
      title: 'Plant expansion done',
      description: ['110T Two New machines & 220', 'Ton 1 Machine added']
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.5 }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="history" className="py-20 bg-muted" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-gradient-primary">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Professional Grid Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {timelineData.map((item, index) => (
            <div
              key={index}
              data-index={index}
              className={`timeline-item glass-card p-8 rounded-2xl border border-border/20 shadow-glass hover:shadow-accent transition-all duration-500 ${
                visibleItems.has(index) ? `animate delay-${index}` : (index % 2 === 0 ? 'left' : 'right')
              }`}
            >
              {/* Professional Year Badge */}
              <div className="relative mb-6">
                <div className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold text-2xl shadow-accent border-2 border-accent/30">
                  {item.year}
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full" />
              </div>

              {/* Professional Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary leading-tight">
                  {item.title}
                </h3>
                
                <div className="space-y-3">
                  {item.description.map((desc, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed font-medium">
                        {desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Accent Line */}
              <div className="mt-6 pt-4 border-t border-accent/20">
                <div className="w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistorySection;