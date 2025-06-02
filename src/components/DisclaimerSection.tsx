
import React from 'react';

interface DisclaimerSectionProps {
  id?: string;
}

const DisclaimerSection: React.FC<DisclaimerSectionProps> = ({ id }) => {
  return (
    <section 
      id={id}
      className="py-20 px-6 relative"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-gradient">Legal Disclaimer</span>
          </h2>
        </div>
        
        {/* Important Notice */}
        <div className="glass-card rounded-xl p-6 mb-8 border-l-4 border-cyberpunk-blue">
          <p className="text-white font-semibold text-lg mb-2">Important Notice</p>
          <p className="text-gray-300">
            This content is provided for <strong className="text-white">informational, educational, and research purposes only</strong>. It should not be used as a substitute for professional medical, legal, or financial advice.
          </p>
        </div>
        
        <div className="glass-card rounded-xl p-8">
          <div className="space-y-6 text-gray-300 text-sm text-left">
            <p>
              <strong className="text-white">Not Medical Advice:</strong> Medical Billing & Coding GPT provides information regarding medical billing codes, insurance claims, and reimbursement estimates. This tool does not provide medical advice, diagnosis, or treatment recommendations. Always consult with qualified healthcare professionals for medical advice.
            </p>
            
            <p>
              <strong className="text-white">Accuracy Statement:</strong> While we strive to provide accurate and up-to-date information, Medical Billing & Coding GPT relies on available data sources which may not always reflect the most current regulations, codes, or payer policies. All information should be verified by certified coding professionals before use in official submissions.
            </p>
            
            <p>
              <strong className="text-white">Not Legal Advice:</strong> Information provided regarding appeals, regulations, and compliance should not be construed as legal advice. For specific legal matters regarding medical billing or insurance claims, consult with a qualified healthcare attorney.
            </p>
            
            <p>
              <strong className="text-white">Limitation of Liability:</strong> AI WEB TOOLS LLC, its affiliates, partners, and service providers make no warranties or representations about the accuracy, completeness, or reliability of the information provided by Medical Billing & Coding GPT. We shall not be liable for any direct, indirect, consequential, special, exemplary damages or lost profits resulting from the use or inability to use this service.
            </p>
            
            <p>
              <strong className="text-white">Reimbursement Estimates:</strong> Any cost estimates, reimbursement calculations, or coverage predictions are provided for informational purposes only and represent approximations based on publicly available data. Actual reimbursement amounts, patient responsibility, and coverage details may vary significantly based on specific insurance policies, provider contracts, and individual circumstances.
            </p>
            
            <p>
              <strong className="text-white">User Responsibility:</strong> Users are solely responsible for verifying all information, codes, and recommendations before use in official documentation, claims submission, or appeals. Users assume full responsibility for all decisions made based on information provided by this tool.
            </p>
            
            <p>
              <strong className="text-white">Not a Substitute for Professional Services:</strong> Medical Billing & Coding GPT is designed to assist and augment professional medical billing and coding services, not replace them. We recommend that all coding, billing, and claims activities be supervised by certified professionals.
            </p>
            
            <p>
              <strong className="text-white">Data Use and Privacy:</strong> Use of this tool is subject to our Privacy Policy. While designed to be HIPAA-compliant, users are responsible for ensuring their own compliance with applicable privacy laws when entering information.
            </p>
            
            <p>
              By using Medical Billing & Coding GPT, you acknowledge that you have read, understood, and agree to these disclaimers and limitations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
