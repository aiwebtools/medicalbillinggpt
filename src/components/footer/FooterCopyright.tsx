
import React from 'react';

const FooterCopyright: React.FC = () => {
  return (
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
  );
};

export default FooterCopyright;
