import React from 'react';
import { X, Home, User, History, Briefcase, Users, Building, Phone, Sun, Moon } from 'lucide-react';
import vedantLogo from '@/assets/vedant-logo.png';
import { useTheme } from '@/contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Home', href: '#hero', icon: Home, type: 'scroll' },
    { name: 'About Us', href: '#about', icon: User, type: 'scroll' },
    { name: 'Our History', href: '#history', icon: History, type: 'scroll' },
    { name: 'Our Solutions', href: '#services', icon: Briefcase, type: 'scroll' },
    { name: 'Our Team', href: '/team', icon: Users, type: 'route' },
    { name: 'Customers', href: '#customers', icon: Building, type: 'scroll' },
    { name: 'Facilities', href: '#facilities', icon: Building, type: 'scroll' },
    { name: 'Contact', href: '#contact', icon: Phone, type: 'scroll' }
  ];

  const handleNavigation = (item: typeof menuItems[0]) => {
    if (item.type === 'route') {
      navigate(item.href);
    } else {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    onClose();
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
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
              <img 
                src={vedantLogo} 
                alt="Vedant Enterprises Logo" 
                className="w-12 h-12 rounded-xl shadow-accent"
              />
              <div>
                <h2 className="text-xl font-bold text-primary-foreground">VEDANT ENTERPRISES</h2>
                <p className="text-xs text-primary-foreground/80">Professional Navigation</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-primary-foreground/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Theme Toggle */}
        <div className="p-4 border-b border-primary-foreground/10">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-between w-full p-3 rounded-xl bg-primary-foreground/5"
          >
            <span className="font-medium">Theme Mode</span>
            {theme === 'light' ? (
              <Moon className="w-5 h-5 text-primary-foreground" />
            ) : (
              <Sun className="w-5 h-5 text-primary-foreground" />
            )}
          </button>
        </div>

        {/* Professional Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-3">
            {menuItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item)}
                className="flex items-center space-x-4 w-full p-4 rounded-xl bg-primary-foreground/5 shadow-soft"
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