
import React, { useState, useEffect } from 'react';

const ConsentDialog: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    // Check if user has already accepted
    const hasAccepted = localStorage.getItem('consentAccepted');
    
    if (!hasAccepted) {
      // Show dialog after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleAccept = () => {
    localStorage.setItem('consentAccepted', 'true');
    setIsOpen(false);
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm" onClick={handleAccept}></div>
      
      <div className="relative glass-card rounded-xl p-8 max-w-md w-full mx-4 animate-fade-in-up">
        <h3 className="text-xl font-bold text-white mb-4">Consent Required</h3>
        
        <p className="text-gray-300 mb-6">
          By using Medical Billing & Coding GPT, you acknowledge that:
        </p>
        
        <ul className="list-disc text-gray-300 pl-5 mb-6 space-y-2 text-sm">
          <li>This tool provides information for educational purposes only</li>
          <li>It is not a substitute for professional medical coding or billing advice</li>
          <li>All coding and billing decisions should be verified by certified professionals</li>
          <li>Information may not reflect the most current regulations or policies</li>
          <li>You have read and agree to our full legal disclaimer</li>
        </ul>
        
        <button
          onClick={handleAccept}
          className="w-full py-3 rounded-md bg-gradient-to-r from-cyberpunk-blue to-cyberpunk-purple 
                     text-white font-semibold hover:opacity-90 transition-opacity"
        >
          I Agree
        </button>
      </div>
    </div>
  );
};

export default ConsentDialog;
