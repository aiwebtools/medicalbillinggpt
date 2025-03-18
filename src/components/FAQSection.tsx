
import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-800">
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-white">{question}</h3>
        <div className={`h-8 w-8 rounded-full border border-cyberpunk-blue flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 4L6 9L11 4" stroke="#33C3F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-400">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "What is Medical Billing & Coding GPT?",
      answer: "Medical Billing & Coding GPT is an AI-powered tool designed to assist healthcare providers, medical billers, and patients with medical coding, insurance claims, reimbursement calculations, and appeal processes. It specializes in CPT, ICD-10, and HCPCS coding with real-time insurance verification."
    },
    {
      question: "How accurate is the coding information provided?",
      answer: "The AI draws from official medical coding databases, including AMA, CMS, and AAPC resources. While it provides highly accurate information based on the latest available data, all coding suggestions should be verified by a certified medical coder before submission to insurers."
    },
    {
      question: "Can it really help with denied claims?",
      answer: "Yes! Medical Billing & Coding GPT can analyze denial reasons, identify potential errors, and generate professional appeal letters citing relevant regulations and guidelines. It can significantly increase the chance of successful appeals by ensuring proper documentation and regulatory compliance."
    },
    {
      question: "Does it handle all types of medical specialties?",
      answer: "The system is designed to work with coding across all medical specialties, including primary care, surgery, radiology, cardiology, oncology, and more. It can assist with both outpatient and inpatient coding requirements."
    },
    {
      question: "Is my medical information secure when using this tool?",
      answer: "Yes, data security and privacy are top priorities. The system is designed to be HIPAA-compliant and does not store personal health information. All interactions are encrypted and follow strict privacy protocols to protect sensitive medical data."
    },
    {
      question: "Can it replace my medical biller or coding specialist?",
      answer: "Medical Billing & Coding GPT is designed to augment human expertise, not replace it. While it can dramatically improve efficiency and reduce errors, we recommend using it as a powerful assistant alongside healthcare billing professionals for optimal results and compliance verification."
    },
  ];
  
  return (
    <section 
      id="faq"
      className="py-20 px-6 relative"
    >
      {/* Background Elements */}
      <div className="absolute top-40 -left-40 w-96 h-96 bg-cyberpunk-purple/20 rounded-full filter blur-3xl z-0"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-gradient">Frequently Asked Questions</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about Medical Billing & Coding GPT and how it can assist with your medical coding and billing needs.
          </p>
        </div>
        
        <div className="space-y-1">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
