
import React, { useEffect, useRef } from 'react';

interface CapabilityCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  delay: number;
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="glass-card glass-card-hover rounded-xl p-6 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-cyberpunk-blue to-cyberpunk-purple p-0.5 mb-6">
        <div className="h-full w-full bg-cyberpunk-darker rounded-[7px] flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const CapabilitiesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (sectionRef.current) {
            const cards = sectionRef.current.querySelectorAll('.glass-card');
            cards.forEach(card => {
              card.classList.add('is-visible');
            });
          }
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const capabilities = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19" stroke="#33C3F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21Z" stroke="#33C3F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 9H10" stroke="#33C3F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 13H15" stroke="#33C3F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 17H15" stroke="#33C3F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Medical Coding Lookup & Validation",
      description: "Identify CPT, ICD-10, and HCPCS codes with precision, ensuring proper procedure and diagnosis code pairing.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 7L12 13L21 7" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Insurance Reimbursement & Cost Estimation",
      description: "Calculate co-pay, deductible, and coinsurance breakdowns with real-time out-of-pocket cost estimates.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12H15" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 16H15" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V19C19 20.1046 18.1046 21 17 21Z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="9" y="8" width="6" height="1" rx="0.5" fill="#10B981"/>
        </svg>
      ),
      title: "Claim Submission & Processing",
      description: "Generate CMS-1500 or UB-04 forms for medical billing with prior authorization requirements identification.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 11L12 14L22 4" stroke="#33C3F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="#33C3F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Claim Denial Analysis & Appeals",
      description: "Analyze denial reasons and generate professional appeal letters citing appropriate regulations and legal protections.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 14C20.49 12.54 20.49 10.17 19 8.71C17.51 7.25 15.14 7.25 13.65 8.71C12.16 10.17 12.16 12.54 13.65 14" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15.5 17.5L19.75 21.75" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 9.32998C10.4 7.81998 7.95 7.81998 6.35 9.42998C4.75 11.04 4.75 13.48 6.35 15.08C7.95 16.68 10.4 16.68 12 15.08" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Prescription Drug Coverage & Pricing",
      description: "Look up Medicare Part D formularies and compare pricing with GoodRx to verify drug tier coverage options.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15V3" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 15L8 11" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 11L12 15" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 21H19" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Automated Report Generation",
      description: "Create downloadable claim reports, appeal letters, and submission-ready insurance documents with detailed breakdowns.",
    },
  ];
  
  return (
    <section 
      id="features"
      ref={sectionRef}
      className="py-20 px-6 relative"
    >
      {/* Background Elements */}
      <div className="absolute top-40 -left-40 w-96 h-96 bg-cyberpunk-purple/20 rounded-full filter blur-3xl z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-gradient">Core Capabilities</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Medical Billing & Coding GPT combines powerful AI with specialized medical billing expertise
            to deliver accurate, compliant, and efficient coding and reimbursement solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <CapabilityCard
              key={index}
              icon={capability.icon}
              title={capability.title}
              description={capability.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
