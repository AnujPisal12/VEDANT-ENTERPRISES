import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Factory, Settings } from 'lucide-react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToHistory = () => {
    const element = document.querySelector('#history');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`scroll-fade-in ${isVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              About{' '}
              <span className="text-gradient-primary">Us</span>
            </h2>
            
            <h3 className="text-2xl font-semibold text-accent mb-6">
              Vedant Enterprises
            </h3>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Established in 2006, Vedant Enterprises has been at the forefront of precision plastic component manufacturing, specializing in automotive and industrial applications. Our journey began with a vision to provide innovative solutions that meet the evolving needs of modern industry.
              </p>
              
              <p>
                With over 17 years of experience, we have developed expertise in plastic injection molding, serving esteemed clients across various sectors. Our commitment to quality, innovation, and customer satisfaction has positioned us as a trusted partner in the manufacturing ecosystem.
              </p>
              
              <p>
                From protective caps and machine parts to automotive components and hydraulic solutions, we deliver excellence through persistent teamwork, cutting-edge technology, and rigorous quality management systems.
              </p>
            </div>
            
            <button
              onClick={scrollToHistory}
              className="btn-primary mt-8 px-6 py-3 rounded-lg font-semibold inline-flex items-center space-x-2"
            >
              <span>Our Journey</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className={`scroll-fade-in ${isVisible ? 'visible' : ''}`}>
            {/* Professional Stats Grid */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="bg-card p-6 rounded-xl shadow-soft border border-border text-center">
                <div className="text-4xl font-bold text-primary mb-2">2006</div>
                <div className="text-sm text-muted-foreground">Established</div>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-soft border border-border text-center">
                <div className="text-4xl font-bold text-accent mb-2">17+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-soft border border-border text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Trusted Clients</div>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="bg-gradient-card rounded-2xl p-8 shadow-medium border border-border">
              <h3 className="text-xl font-semibold mb-6 text-primary">Our Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <div className="font-semibold text-sm mb-1">Precision Manufacturing</div>
                    <div className="text-xs text-muted-foreground">Advanced injection molding</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <div className="font-semibold text-sm mb-1">Quality Assurance</div>
                    <div className="text-xs text-muted-foreground">ISO standards compliance</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <div className="font-semibold text-sm mb-1">Automotive Solutions</div>
                    <div className="text-xs text-muted-foreground">Industry-leading components</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <div className="font-semibold text-sm mb-1">Custom Development</div>
                    <div className="text-xs text-muted-foreground">Tailored solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;