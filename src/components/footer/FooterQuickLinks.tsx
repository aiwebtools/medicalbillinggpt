
import React from 'react';

interface FooterQuickLinksProps {
  handleAnchorClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const FooterQuickLinks: React.FC<FooterQuickLinksProps> = ({ handleAnchorClick }) => {
  return (
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
  );
};

export default FooterQuickLinks;
