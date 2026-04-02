import React from 'react';
import { X, Home, User, History, Briefcase, Users, Building, Phone } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About Us', path: '/about', icon: User },
  { name: 'Our History', path: '/history', icon: History },
  { name: 'Our Solutions', path: '/solutions', icon: Briefcase },
  { name: 'Our Team', path: '/team', icon: Users },
  { name: 'Customers', path: '/customers', icon: Building },
  { name: 'Facilities', path: '/facilities', icon: Building },
  { name: 'Contact', path: '/contact', icon: Phone },
] as const;

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    if (path === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Professional Sidebar */}
      <div 
        className={`sidebar-enter ${isOpen ? 'open' : ''} fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-primary to-secondary text-primary-foreground z-50 flex flex-col shadow-strong`}
      >
        {/* Professional Header */}
        <div className="p-6 border-b border-primary-foreground/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <BrandLogo imgClassName="w-12 h-12" />
              <div>
                <h2 className="text-xl font-bold text-primary-foreground">VEDANT ENTERPRISES</h2>
                <p className="text-xs text-primary-foreground/80">Professional Navigation</p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl bg-primary-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/60 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Professional Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-3">
            {menuItems.map((item, index) => (
              <button
                type="button"
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className="flex items-center space-x-4 w-full p-4 rounded-xl bg-primary-foreground/5 shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-semibold">
                  {item.name}
                </span>
              </button>
            ))}
          </div>
        </nav>

        {/* Professional Footer */}
        <div className="p-6 border-t border-primary-foreground/10">
          <div className="text-center">
            <p className="text-sm text-primary-foreground/80 font-medium">
              © 2024 Vedant Enterprises
            </p>
            <p className="text-xs text-primary-foreground/60 mt-1">
              Precision. Quality. Excellence.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;