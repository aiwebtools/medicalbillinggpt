
import React from 'react';
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

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
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyberpunk-blue transition-colors flex items-center gap-2"
          >
            Medical Billing & Coding GPT
            <ExternalLink className="h-3 w-3" />
          </a>
        </li>
        <li>
          <a 
            href="https://insuranceclaimsgpt.lovable.app/?via=aiwebtools" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyberpunk-blue transition-colors flex items-center gap-2"
          >
            Insurance Claims GPT
            <ExternalLink className="h-3 w-3" />
          </a>
        </li>
        <li>
          <a 
            href="#faq" 
            onClick={(e) => handleAnchorClick(e, '#faq')}
            className="text-gray-400 hover:text-cyberpunk-blue transition-colors"
          >
            FAQ
          </a>
        </li>
        <li>
          <a 
            href="#disclaimer" 
            onClick={(e) => handleAnchorClick(e, '#disclaimer')}
            className="text-gray-400 hover:text-cyberpunk-blue transition-colors"
          >
            Disclaimer
          </a>
        </li>
        <li>
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyberpunk-blue transition-colors flex items-center gap-2"
          >
            More AI Tools
            <ExternalLink className="h-3 w-3" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterQuickLinks;
