import React, { useEffect, useRef, useState } from 'react';
import { Shield, Wrench, Car, Cog, Droplets, Settings } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
}

const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  const services: Service[] = [
    {
      title: 'Protective Cap Solutions',
      description: 'High-quality protective caps for various industrial applications, ensuring durability and precision fit.',
      icon: Shield,
      image: ''
    },
    {
      title: 'Handle & Knob Solutions',
      description: 'Ergonomic handles and knobs designed for automotive and machinery applications with superior grip and durability.',
      icon: Wrench,
      image: ''
    },
    {
      title: 'Automotive Components',
      description: 'Precision-engineered automotive parts including dashboard components and interior elements.',
      icon: Car,
      image: ''
    },
    {
      title: 'Machine Parts',
      description: 'Custom-designed machine parts including door handles, cable ties, and gear knobs for industrial equipment.',
      icon: Cog,
      image: ''
    },
    {
      title: 'Hydraulic Solutions',
      description: 'Specialized hydraulic hose and metal pipe clamping solutions for all sizes and applications.',
      icon: Droplets,
      image: ''
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored plastic molding solutions designed to meet specific client requirements and specifications.',
      icon: Settings,
      image: ''
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

    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-gradient-primary">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive plastic molding solutions designed for precision and excellence
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-index={index}
              className={`service-card scroll-fade-in ${
                visibleItems.has(index) ? 'visible' : ''
              }`}
            >
              <div className="card-hover bg-card p-8 rounded-xl h-full flex flex-col relative overflow-hidden">
                {/* Top Border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;