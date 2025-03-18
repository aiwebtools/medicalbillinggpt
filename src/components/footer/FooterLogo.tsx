
import React from 'react';

const FooterLogo: React.FC = () => {
  return (
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
          <a href="tel:4758008096" className="hover:text-white transition-colors" style={{ position: 'relative', zIndex: 10 }}>
            (475) 800-8096
          </a>
        </p>
        <p className="text-gray-400 text-sm">
          <span className="text-cyberpunk-blue font-medium">Email: </span>
          <a href="mailto:Contact@ai-webtools.com" className="hover:text-white transition-colors" style={{ position: 'relative', zIndex: 10 }}>
            Contact@ai-webtools.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default FooterLogo;
