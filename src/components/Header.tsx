import React, { useEffect, useState } from 'react';
import { Menu, Sun, Moon } from 'lucide-react';
import vedantLogo from '@/assets/vedant-logo.png';
import { useTheme } from '@/contexts/ThemeContext';

interface HeaderProps {
  onSidebarToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSidebarToggle }) => {
  const { theme, setTheme } = useTheme();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setVisible(false); // scrolling down
      } else {
        setVisible(true); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 glass-card shadow-glass border-b border-border/50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
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

          {/* Right Controls */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="p-2 sm:p-3 rounded-xl bg-primary/10 text-primary shadow-soft"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Sun className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>

            {/* Sidebar Toggle */}
            <button
              onClick={onSidebarToggle}
              className="p-2 sm:p-3 rounded-xl bg-primary/10 text-primary shadow-soft"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
