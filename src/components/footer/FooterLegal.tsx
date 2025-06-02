
import React from 'react';
import { ExternalLink } from "lucide-react";

const FooterLegal: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white text-left">Legal</h3>
      <ul className="space-y-2 text-left">
        <li>
          <a 
            href="https://openai.com/policies/privacy-policy/" 
            className="text-gray-400 hover:text-cyberpunk-blue transition-colors flex items-center gap-2"
            target="_blank" 
            rel="noopener noreferrer"
            style={{ position: 'relative', zIndex: 10 }}
          >
            Privacy Policy
            <ExternalLink className="h-3 w-3" />
          </a>
        </li>
        <li>
          <a 
            href="https://aiwebtools.lovable.app/disclaimers" 
            className="text-gray-400 hover:text-cyberpunk-blue transition-colors flex items-center gap-2"
            target="_blank" 
            rel="noopener noreferrer"
            style={{ position: 'relative', zIndex: 10 }}
          >
            Terms of Service
            <ExternalLink className="h-3 w-3" />
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
          style={{ position: 'relative', zIndex: 10 }}
        >
          More AI Tools
        </a>
      </div>
    </div>
  );
};

export default FooterLegal;
