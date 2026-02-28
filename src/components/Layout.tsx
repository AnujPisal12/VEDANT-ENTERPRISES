import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import HistorySection from './HistorySection';
import ServicesSection from './ServicesSection';
import CustomersSection from './CustomersSection';
import FacilitiesSection from './FacilitiesSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const Layout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Close sidebar on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeSidebar();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent scroll when sidebar is open on mobile
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header onSidebarToggle={toggleSidebar} />
      
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      
      {/* Main Content */}
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <HistorySection />
        <ServicesSection />
        <CustomersSection />
        <FacilitiesSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;