
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
    
    // Set up smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
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
        <FAQSection id="faq" />
        <DisclaimerSection id="disclaimer" />
      </main>
      
      <Footer />
      <ConsentDialog />
    </div>
  );
};

export default Index;
