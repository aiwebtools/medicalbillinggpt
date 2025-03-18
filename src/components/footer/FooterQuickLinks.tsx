
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
          <Button 
            variant="ghost" 
            className="text-gray-400 hover:text-cyberpunk-blue transition-colors p-0 h-auto flex items-center gap-2 w-full justify-start"
            asChild
          >
            <a 
              href="https://chatgpt.com/g/g-67d9f1b2c9b881918c0fac1ca6ea38ea-medical-billing-coding-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Medical Billing & Coding GPT
              <ExternalLink className="h-3 w-3" />
            </a>
          </Button>
        </li>
        <li>
          <Button 
            variant="ghost" 
            className="text-gray-400 hover:text-cyberpunk-blue transition-colors p-0 h-auto flex items-center gap-2 w-full justify-start"
            asChild
          >
            <a 
              href="https://insuranceclaimsgpt.lovable.app/?via=aiwebtools" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Insurance Claims GPT
              <ExternalLink className="h-3 w-3" />
            </a>
          </Button>
        </li>
        <li>
          <Button 
            variant="ghost" 
            className="text-gray-400 hover:text-cyberpunk-blue transition-colors p-0 h-auto flex items-center gap-2 w-full justify-start"
            asChild
          >
            <a 
              href="#faq" 
              onClick={(e) => handleAnchorClick(e, '#faq')}
            >
              FAQ
            </a>
          </Button>
        </li>
        <li>
          <Button 
            variant="ghost" 
            className="text-gray-400 hover:text-cyberpunk-blue transition-colors p-0 h-auto flex items-center gap-2 w-full justify-start"
            asChild
          >
            <a 
              href="#disclaimer" 
              onClick={(e) => handleAnchorClick(e, '#disclaimer')}
            >
              Disclaimer
            </a>
          </Button>
        </li>
        <li>
          <Button 
            variant="ghost" 
            className="text-gray-400 hover:text-cyberpunk-blue transition-colors p-0 h-auto flex items-center gap-2 w-full justify-start"
            asChild
          >
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              More AI Tools
              <ExternalLink className="h-3 w-3" />
            </a>
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default FooterQuickLinks;
