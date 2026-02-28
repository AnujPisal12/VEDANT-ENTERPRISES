import React from 'react';
import { Menu } from 'lucide-react';
import vedantLogo from '@/assets/vedant-logo.png';

interface HeaderProps {
  onSidebarToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSidebarToggle }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass-card shadow-glass border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <img 
              src={vedantLogo} 
              alt="Vedant Enterprises Logo" 
              className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl shadow-medium"
            />
            <div>
              <h1 className="text-base sm:text-xl md:text-2xl font-bold text-gradient-professional">
                VEDANT ENTERPRISES
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium hidden sm:block">
                Precision Plastic Components
              </p>
            </div>
          </div>

          {/* Sidebar Toggle */}
          <button
            onClick={onSidebarToggle}
            className="p-2 sm:p-3 rounded-xl bg-primary/10 text-primary shadow-soft"
          >
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;