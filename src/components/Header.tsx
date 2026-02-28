import React from 'react';
import { Menu } from 'lucide-react';
import vedantLogo from '@/assets/vedant-logo.png';

interface HeaderProps {
  onSidebarToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSidebarToggle }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass-card shadow-glass border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img 
              src={vedantLogo} 
              alt="Vedant Enterprises Logo" 
              className="w-14 h-14 rounded-xl shadow-medium"
            />
            <div>
              <h1 className="text-2xl font-bold text-gradient-professional">
                VEDANT ENTERPRISES
              </h1>
              <p className="text-sm text-muted-foreground font-medium">
                Precision Plastic Components
              </p>
            </div>
          </div>

          {/* Sidebar Toggle */}
          <button
            onClick={onSidebarToggle}
            className="p-3 rounded-xl bg-primary/10 text-primary shadow-soft"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;