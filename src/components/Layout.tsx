import React from 'react';
import PageShell from '@/components/PageShell';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import HistorySection from './HistorySection';
import ServicesSection from './ServicesSection';
import CustomersSection from './CustomersSection';
import FacilitiesSection from './FacilitiesSection';
import ContactSection from './ContactSection';

const Layout: React.FC = () => (
  <PageShell>
    <HeroSection />
    <AboutSection />
    <HistorySection />
    <ServicesSection />
    <CustomersSection />
    <FacilitiesSection />
    <ContactSection />
  </PageShell>
);

export default Layout;