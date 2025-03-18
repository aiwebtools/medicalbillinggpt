
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 
      ${scrolled ? 'bg-cyberpunk-darker/80 backdrop-blur-md border-b border-cyberpunk-blue/20' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center">
          <div className="mr-4">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-white">Medical Billing & Coding GPT</h1>
            <p className="text-xs text-white/70">Presented by AiWebTools.Ai</p>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a 
            href="https://chatgpt.com/g/g-67d9f1b2c9b881918c0fac1ca6ea38ea-medical-billing-coding-gpt" 
            className="text-white hover:text-cyberpunk-blue transition-colors"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Medical Billing & Coding GPT
          </a>
          <a 
            href="https://insuranceclaimsgpt.lovable.app/?via=aiwebtools" 
            className="text-white hover:text-cyberpunk-blue transition-colors"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Insurance Claims GPT
          </a>
          <a 
            href="#faq" 
            className="text-white hover:text-cyberpunk-blue transition-colors"
          >
            FAQ
          </a>
          <a 
            href="#disclaimer" 
            className="text-white hover:text-cyberpunk-blue transition-colors"
          >
            Disclaimer
          </a>
          <a 
            href="https://www.aiwebtools.ai" 
            className="cyberpunk-button"
            target="_blank" 
            rel="noopener noreferrer"
          >
            More AI Tools
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${
          mobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-cyberpunk-darker/95 backdrop-blur-lg" onClick={toggleMobileMenu}></div>
        <nav className="relative h-full flex flex-col items-center justify-center space-y-8 p-8">
          <a 
            href="https://chatgpt.com/g/g-67d9f1b2c9b881918c0fac1ca6ea38ea-medical-billing-coding-gpt" 
            className="text-xl text-white hover:text-cyberpunk-blue transition-colors"
            target="_blank" 
            rel="noopener noreferrer"
            onClick={toggleMobileMenu}
          >
            Medical Billing & Coding GPT
          </a>
          <a 
            href="https://insuranceclaimsgpt.lovable.app/?via=aiwebtools" 
            className="text-xl text-white hover:text-cyberpunk-blue transition-colors"
            target="_blank" 
            rel="noopener noreferrer"
            onClick={toggleMobileMenu}
          >
            Insurance Claims GPT
          </a>
          <a 
            href="#faq" 
            className="text-xl text-white hover:text-cyberpunk-blue transition-colors"
            onClick={toggleMobileMenu}
          >
            FAQ
          </a>
          <a 
            href="#disclaimer" 
            className="text-xl text-white hover:text-cyberpunk-blue transition-colors"
            onClick={toggleMobileMenu}
          >
            Disclaimer
          </a>
          <a 
            href="https://www.aiwebtools.ai" 
            className="cyberpunk-button text-xl"
            target="_blank" 
            rel="noopener noreferrer"
            onClick={toggleMobileMenu}
          >
            More AI Tools
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
