
import React, { useState, useEffect } from 'react';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10 z-0"></div>
      <div className="absolute top-20 -right-40 w-96 h-96 bg-cyberpunk-blue/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 -left-40 w-96 h-96 bg-cyberpunk-purple/20 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 z-10">
        {/* Left Column: Text Content */}
        <div className="flex flex-col justify-center space-y-8 text-left">
          <div 
            className={`transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="inline-block bg-cyberpunk-blue/20 text-cyberpunk-blue px-4 py-1 text-sm font-medium rounded-full mb-4">
              Professional Coding Expertise
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-gradient">Medical Billing & Coding</span> <span className="text-white">GPT</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 md:pr-10">
              Your AI-powered medical billing assistant specializing in CPT, ICD-10, and HCPCS coding with real-time insurance reimbursement calculations.
            </p>
          </div>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-200 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <a 
              href="https://chatgpt.com/g/g-67d9f1b2c9b881918c0fac1ca6ea38ea-medical-billing-coding-gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-md
                         bg-gradient-to-r from-cyberpunk-blue to-cyberpunk-purple text-white font-semibold
                         hover:shadow-lg hover:shadow-cyberpunk-purple/30 transform hover:scale-105
                         transition-all duration-300"
            >
              Try it Now
            </a>
            <a 
              href="#features"
              className="inline-flex items-center justify-center px-8 py-4 rounded-md
                         border border-cyberpunk-blue text-white font-semibold
                         hover:bg-cyberpunk-blue/10 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
          
          <div 
            className={`flex flex-wrap gap-6 mt-8 transition-all duration-1000 delay-300 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-cyberpunk-blue/20 flex items-center justify-center mr-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13L9 17L19 7" stroke="#33C3F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-gray-300">Professional Coding</span>
            </div>
            
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-cyberpunk-purple/20 flex items-center justify-center mr-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13L9 17L19 7" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-gray-300">Insurance Claims</span>
            </div>
            
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-cyberpunk-green/20 flex items-center justify-center mr-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13L9 17L19 7" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-gray-300">Claim Appeals</span>
            </div>
          </div>
        </div>
        
        {/* Right Column: 3D Visual Element */}
        <div 
          className={`flex items-center justify-center relative transition-all duration-1000 delay-400 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative w-full max-w-lg aspect-square">
            {/* Main circle */}
            <div className="absolute inset-0 rounded-full border-2 border-cyberpunk-blue/30 animate-pulse-glow"></div>
            
            {/* Orbiting elements */}
            <div className="absolute w-full h-full animate-spin" style={{ animationDuration: '15s' }}>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-cyberpunk-blue to-cyberpunk-purple flex items-center justify-center">
                <span className="text-white font-bold">CPT</span>
              </div>
            </div>
            
            <div className="absolute w-full h-full animate-spin" style={{ animationDuration: '20s', animationDelay: '-5s' }}>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-pink flex items-center justify-center">
                <span className="text-white font-bold">ICD-10</span>
              </div>
            </div>
            
            <div className="absolute w-full h-full animate-spin" style={{ animationDuration: '25s', animationDelay: '-10s' }}>
              <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-cyberpunk-green to-cyberpunk-blue flex items-center justify-center">
                <span className="text-white font-bold">HCPCS</span>
              </div>
            </div>
            
            {/* Center element - Now clickable */}
            <a 
              href="https://chatgpt.com/g/g-67d9f1b2c9b881918c0fac1ca6ea38ea-medical-billing-coding-gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full 
                         bg-cyberpunk-darker border border-cyberpunk-blue/50 flex items-center justify-center 
                         animate-float shadow-lg shadow-cyberpunk-blue/20 
                         hover:shadow-cyberpunk-blue/40 hover:border-cyberpunk-blue/75 hover:scale-105
                         transition-all duration-300 cursor-pointer"
              aria-label="Try Medical Billing & Coding GPT"
            >
              <div className="text-center">
                <span className="block text-cyberpunk-blue font-bold">Medical</span>
                <span className="block text-white text-sm">Billing & Coding</span>
                <span className="block text-cyberpunk-purple font-bold">GPT</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
