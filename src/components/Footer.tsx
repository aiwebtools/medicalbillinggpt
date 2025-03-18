
import React from 'react';

const Footer: React.FC = () => {
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle anchor links that start with #
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // External links will work normally with their href
  };

  return (
    <footer className="bg-cyberpunk-darker py-12 px-6 border-t border-cyberpunk-blue/20 relative overflow-hidden" id="footer">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo and brief description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="mr-4">
                <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5Z" stroke="url(#paint0_linear)" strokeWidth="2"/>
                  <path d="M15 15L25 25" stroke="url(#paint1_linear)" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M25 15L15 25" stroke="url(#paint2_linear)" strokeWidth="2" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="paint0_linear" x1="5" y1="20" x2="35" y2="20" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#33C3F0"/>
                      <stop offset="1" stopColor="#8B5CF6"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="15" y1="20" x2="25" y2="20" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#33C3F0"/>
                      <stop offset="1" stopColor="#8B5CF6"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear" x1="15" y1="20" x2="25" y2="20" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#33C3F0"/>
                      <stop offset="1" stopColor="#8B5CF6"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <h2 className="text-lg font-bold text-white">Medical Billing & Coding GPT</h2>
                <p className="text-xs text-white/70">Presented by AiWebTools.Ai</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm text-left">
              Professional medical billing and insurance claims expertise at your fingertips.
              Specializing in CPT, ICD-10, and HCPCS coding with real-time reimbursement calculations.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-2 text-left">
              <p className="text-gray-400 text-sm">
                <span className="text-cyberpunk-blue font-medium">Phone: </span>
                <a href="tel:4758008096" className="hover:text-white transition-colors">(475) 800-8096</a>
              </p>
              <p className="text-gray-400 text-sm">
                <span className="text-cyberpunk-blue font-medium">Email: </span>
                <a href="mailto:Contact@ai-webtools.com" className="hover:text-white transition-colors">Contact@ai-webtools.com</a>
              </p>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white text-left">Quick Links</h3>
            <ul className="space-y-2 text-left">
              <li>
                <a 
                  href="https://chatgpt.com/g/g-67d9f1b2c9b881918c0fac1ca6ea38ea-medical-billing-coding-gpt" 
                  className="text-gray-400 hover:text-cyberpunk-blue transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Medical Billing & Coding GPT
                </a>
              </li>
              <li>
                <a 
                  href="https://insuranceclaimsgpt.lovable.app/?via=aiwebtools" 
                  className="text-gray-400 hover:text-cyberpunk-blue transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Insurance Claims GPT
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="text-gray-400 hover:text-cyberpunk-blue transition-colors"
                  onClick={(e) => handleAnchorClick(e, '#faq')}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer" 
                  className="text-gray-400 hover:text-cyberpunk-blue transition-colors"
                  onClick={(e) => handleAnchorClick(e, '#disclaimer')}
                >
                  Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="https://www.aiwebtools.ai" 
                  className="text-gray-400 hover:text-cyberpunk-blue transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  More AI Tools
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white text-left">Legal</h3>
            <ul className="space-y-2 text-left">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  className="text-gray-400 hover:text-cyberpunk-blue transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.ai/terms-of-services" 
                  className="text-gray-400 hover:text-cyberpunk-blue transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
            
            {/* "More AI Tools" button */}
            <div className="pt-4">
              <a 
                href="https://www.aiwebtools.ai"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full 
                           bg-gradient-to-r from-cyberpunk-blue to-cyberpunk-purple text-white font-medium
                           hover:shadow-lg hover:shadow-cyberpunk-blue/20 transform hover:scale-105
                           transition-all duration-300"
              >
                More AI Tools
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright notice */}
        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm mb-4 sm:mb-0">
            <a 
              href="https://www.aiwebtools.ai"
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cyberpunk-blue transition-colors"
            >
              © 2025 AI WEB TOOLS LLC. All rights reserved.
            </a>
          </p>
          <div className="flex space-x-4">
            <a 
              href="https://www.aiwebtools.ai"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyberpunk-blue transition-colors"
            >
              Website
            </a>
            <a 
              href="mailto:Contact@ai-webtools.com"
              className="text-gray-400 hover:text-cyberpunk-blue transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
