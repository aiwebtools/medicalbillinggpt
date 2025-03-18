
import React, { useCallback } from 'react';
import FooterLogo from './footer/FooterLogo';
import FooterQuickLinks from './footer/FooterQuickLinks';
import FooterLegal from './footer/FooterLegal';
import FooterCopyright from './footer/FooterCopyright';

const Footer: React.FC = () => {
  const handleAnchorClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle anchor links that start with #
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // External links will work normally with their href
  }, []);

  return (
    <footer className="bg-cyberpunk-darker py-12 px-6 border-t border-cyberpunk-blue/20 relative overflow-hidden" id="footer">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo and brief description */}
          <FooterLogo />
          
          {/* Column 2: Quick Links */}
          <FooterQuickLinks handleAnchorClick={handleAnchorClick} />
          
          {/* Column 3: Legal */}
          <FooterLegal />
        </div>
        
        {/* Copyright notice */}
        <FooterCopyright />
      </div>
    </footer>
  );
};

export default Footer;
