import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-manufacturing.jpg';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-0"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Professional Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-8 md:mt-0">
        <div className={`fade-in-up ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Precision Plastic
            <span className="block text-accent drop-shadow-lg mt-2">Components</span>
          </h1>
        </div>
        
        <div className={`fade-in-up delay-1 ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-10 leading-relaxed max-w-3xl mx-auto">
            Innovative solutions in plastic molding for automotive and industrial applications. 
            <span className="block mt-2 text-base sm:text-lg text-white/80">17+ years of manufacturing excellence</span>
          </p>
        </div>
        
        <div className={`fade-in-up delay-2 ${isVisible ? 'animate-fade-in-up' : ''} flex flex-col sm:flex-row gap-4 justify-center items-center`}>
          <button
            onClick={scrollToContact}
            className="btn-accent px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center space-x-2 shadow-medium"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-lg font-semibold text-lg border-2 border-white/30 text-white backdrop-blur-sm bg-white/5"
          >
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className={`fade-in-up delay-3 ${isVisible ? 'animate-fade-in-up' : ''} mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto`}>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">17+</div>
            <div className="text-white/80 text-sm uppercase tracking-wide">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">15+</div>
            <div className="text-white/80 text-sm uppercase tracking-wide">Trusted Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">6000+</div>
            <div className="text-white/80 text-sm uppercase tracking-wide">SqFt Facility</div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default HeroSection;