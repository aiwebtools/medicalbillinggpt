
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import VideoEmbed from '@/components/VideoEmbed';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import UseCasesSection from '@/components/UseCasesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import DisclaimerSection from '@/components/DisclaimerSection';
import ConsentDialog from '@/components/ConsentDialog';

const Index = () => {
  useEffect(() => {
    // Update the document title
    document.title = "Medical Billing & Coding GPT | AI-Powered Billing Assistant";
  }, []);

  return (
    <div className="min-h-screen bg-cyberpunk-dark text-white overflow-x-hidden">
      <Header />
      
      <main>
        <HeroSection />
        <VideoEmbed />
        <CapabilitiesSection />
        <UseCasesSection />
        <TestimonialsSection />
        <FAQSection />
        <DisclaimerSection />
      </main>
      
      <Footer />
      <ConsentDialog />
    </div>
  );
};

export default Index;
