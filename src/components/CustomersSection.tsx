import React, { useEffect, useRef, useState } from 'react';

// Import company logos
import bharatForgeLogo from '@/assets/logos/bharat-forge.png';
import sandharLogo from '@/assets/logos/sandhar.png';
import generalMotorsLogo from '@/assets/logos/general-motors.png';
import faureciaLogo from '@/assets/logos/faurecia.png';
import jcbLogo from '@/assets/logos/jcb.png';
import yazakiLogo from '@/assets/logos/yazaki.png';
import tataBatteriesLogo from '@/assets/logos/tata-batteries.png';
import leeboyLogo from '@/assets/logos/leeboy.png';
import wikaiLogo from '@/assets/logos/wikai.png';
import kspgLogo from '@/assets/logos/kspg.png';
import skhLogo from '@/assets/logos/skh.png';
import ronchLogo from '@/assets/logos/ronch.png';
import amtekLogo from '@/assets/logos/amtek.png';
import shardaMotorLogo from '@/assets/logos/sharda-motor.png';

interface Customer {
  name: string;
  logo: string;
}

const CustomersSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  const customers: Customer[] = [
    { name: 'JCB', logo: jcbLogo },
    { name: 'TATA Batteries', logo: tataBatteriesLogo },
    { name: 'Bharat Forge', logo: bharatForgeLogo },
    { name: 'WIKAI', logo: wikaiLogo },
    { name: 'YAZAKI', logo: yazakiLogo },
    { name: 'KSPG Automotive', logo: kspgLogo },
    { name: 'SKH', logo: skhLogo },
    { name: 'FAURECIA', logo: faureciaLogo },
    { name: 'SANDHAR', logo: sandharLogo },
    { name: 'RONCH', logo: ronchLogo },
    { name: 'AMTEK', logo: amtekLogo },
    { name: 'SHARDA MOTOR', logo: shardaMotorLogo },
    { name: 'LeeBoy', logo: leeboyLogo },
    { name: 'GM', logo: generalMotorsLogo }
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

    const customerCards = document.querySelectorAll('.customer-card');
    customerCards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="customers" className="py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Our Esteemed <span className="text-gradient-primary">Customers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading companies across automotive and industrial sectors
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {customers.map((customer, index) => (
            <div
              key={index}
              data-index={index}
              className={`customer-card scroll-fade-in ${
                visibleItems.has(index) ? 'visible' : ''
              }`}
            >
              <div className="bg-card p-6 rounded-xl text-center shadow-soft border border-border">
                {/* Logo */}
                <div className="h-16 flex items-center justify-center mb-4">
                  <img 
                    src={customer.logo} 
                    alt={`${customer.name} logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                
                {/* Name */}
                <h4 className="text-sm font-semibold text-muted-foreground">
                  {customer.name}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 p-8 bg-muted/50 rounded-2xl">
          <p className="text-lg text-muted-foreground mb-4">
            <span className="font-semibold text-primary">15+</span> Esteemed customers trust our precision and quality
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
            <span className="flex items-center">
              <div className="w-2 h-2 bg-accent rounded-full mr-2" />
              Automotive Sector
            </span>
            <span className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-2" />
              Industrial Applications
            </span>
            <span className="flex items-center">
              <div className="w-2 h-2 bg-secondary rounded-full mr-2" />
              Manufacturing Solutions
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomersSection;