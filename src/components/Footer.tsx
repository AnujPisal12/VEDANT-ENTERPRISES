import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our History', path: '/history' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Customers', path: '/customers' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' }
  ];

  const serviceLinks = [
    { name: 'Protective Caps', path: '/solutions' },
    { name: 'Automotive Parts', path: '/solutions' },
    { name: 'Machine Components', path: '/solutions' },
    { name: 'Hydraulic Solutions', path: '/solutions' },
    { name: 'Custom Molding', path: '/solutions' }
  ];

  const goTo = (path: string) => {
    navigate(path);
    if (path === '/' && location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const backToTop = () => {
    if (location.pathname === '/') {
      const el = document.querySelector('#hero');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <BrandLogo imgClassName="w-12 h-12" />
              <div className="text-lg font-bold">
                VEDANT ENTERPRISES
              </div>
            </div>
            
            <p className="text-secondary-foreground/80 leading-relaxed mb-6">
              Precision plastic component manufacturing with over 17 years of experience. 
              Serving automotive and industrial sectors with innovative solutions.
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-accent">Quick Links</h3>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  type="button"
                  key={link.name}
                  onClick={() => goTo(link.path)}
                  className="block text-secondary-foreground/80 hover:text-accent hover:translate-x-2 transition-all duration-300 text-left w-full"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-accent">Our Services</h3>
            <nav className="space-y-3">
              {serviceLinks.map((link) => (
                <button
                  type="button"
                  key={link.name}
                  onClick={() => goTo(link.path)}
                  className="block text-secondary-foreground/80 hover:text-accent hover:translate-x-2 transition-all duration-300 text-left w-full"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-accent">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div className="text-secondary-foreground/80 text-sm">
                  Gat No. 93, Sonawane Wasti,<br />
                  Bhalekar Chowk, Jyotiba Nagar,<br />
                  Talawade, Pune – 412114
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <div className="text-secondary-foreground/80">
                  8975-034-567
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <div className="text-secondary-foreground/80">
                  vedant_en@rediffmail.com
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-secondary-foreground/70 text-sm">
              © {currentYear} Vedant Enterprises. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <button className="text-secondary-foreground/70 hover:text-accent transition-colors">
                Privacy Policy
              </button>
              <button className="text-secondary-foreground/70 hover:text-accent transition-colors">
                Terms of Service
              </button>
              <button className="text-secondary-foreground/70 hover:text-accent transition-colors">
                Quality Policy
              </button>
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <button
          type="button"
          onClick={backToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-accent text-accent-foreground rounded-full shadow-accent hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center z-30"
          aria-label="Back to top"
        >
          <ArrowRight className="w-5 h-5 rotate-[-90deg]" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;