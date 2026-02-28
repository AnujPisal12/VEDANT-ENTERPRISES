import React, { useEffect, useRef, useState } from 'react';
import { Factory, Cog, Wrench, Ruler, Thermometer, CheckCircle } from 'lucide-react';

interface Facility {
  title: string;
  description: string;
  icon: React.ElementType;
  details: string;
}

const FacilitiesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  const facilities: Facility[] = [
    {
      title: 'Manufacturing Floor',
      description: 'State-of-the-art 6000 sqft manufacturing facility with modern equipment and optimized workflow.',
      icon: Factory,
      details: 'Total floor space - 6000 Sqft'
    },
    {
      title: 'Injection Molding',
      description: 'Multiple high-capacity injection molding machines ranging from 60T to 220T for diverse production needs.',
      icon: Cog,
      details: '200T, 160T, 110T M/C Available'
    },
    {
      title: 'Tool Room',
      description: 'Complete in-house tool room for dies & mold making with precision machining capabilities.',
      icon: Wrench,
      details: 'EDM, Milling, Pentagon Drilling'
    },
    {
      title: 'Quality Control',
      description: 'Dedicated metrology room with advanced measuring instruments for precision quality assurance.',
      icon: Ruler,
      details: 'Metrology Room with CMM'
    },
    {
      title: 'Heat Treatment',
      description: 'Pre-heating facilities to ensure optimal material properties and component performance.',
      icon: Thermometer,
      details: 'Pre Heater & Temperature Control'
    },
    {
      title: 'Quality Assurance',
      description: 'Comprehensive quality management system ensuring consistent product excellence and standards.',
      icon: CheckCircle,
      details: 'ISO Standards & Quality Systems'
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
      { threshold: 0.3 }
    );

    const facilityCards = document.querySelectorAll('.facility-card');
    facilityCards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="facilities" className="py-20 bg-muted" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-gradient-primary">Facilities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Advanced manufacturing infrastructure designed for precision and efficiency
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {facilities.map((facility, index) => (
            <div
              key={index}
              data-index={index}
              className={`facility-card scroll-fade-in ${
                visibleItems.has(index) ? 'visible' : ''
              }`}
            >
              <div className="card-hover bg-card p-8 rounded-xl h-full flex flex-col relative overflow-hidden">
                {/* Top Border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
                
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
                  <facility.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4">
                  {facility.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4 flex-1">
                  {facility.description}
                </p>

                {/* Details */}
                <div className="mt-auto">
                  <div className="text-sm font-medium text-primary bg-primary/5 px-3 py-2 rounded-full inline-block">
                    {facility.details}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Facility Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-card rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">6000+</div>
            <p className="text-muted-foreground">Square Feet</p>
          </div>
          <div className="p-6 bg-card rounded-xl">
            <div className="text-3xl font-bold text-accent mb-2">220T</div>
            <p className="text-muted-foreground">Max Machine Capacity</p>
          </div>
          <div className="p-6 bg-card rounded-xl">
            <div className="text-3xl font-bold text-yellow-500 mb-2">17+</div>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;