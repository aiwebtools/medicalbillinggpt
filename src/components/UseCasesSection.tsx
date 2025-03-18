
import React, { useEffect, useRef } from 'react';

interface UseCaseProps {
  number: string;
  title: string;
  question: string;
  answer: string;
  index: number;
}

const UseCase: React.FC<UseCaseProps> = ({ number, title, question, answer, index }) => {
  return (
    <div 
      className="glass-card glass-card-hover rounded-xl p-8 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <div className="h-14 w-14 rounded-full bg-gradient-to-br from-cyberpunk-blue to-cyberpunk-purple flex items-center justify-center font-bold text-xl">
            {number}
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
          <div className="mb-4">
            <span className="text-cyberpunk-blue font-medium">User asks: </span>
            <span className="text-gray-300">"{question}"</span>
          </div>
          <div>
            <span className="text-cyberpunk-purple font-medium">GPT: </span>
            <span className="text-gray-400">{answer}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const UseCasesSection: React.FC = () => {
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
  
  const useCases = [
    {
      number: "01",
      title: "Finding a Medical Billing Code",
      question: "What's the code for Blood Typing, Rh (D)?",
      answer: "The correct CPT code is 86901 (Blood typing, Rh (D)). This procedure has an average Medicare reimbursement rate of $10-15, varying by geographic location.",
    },
    {
      number: "02",
      title: "Insurance Coverage Check",
      question: "How much will a knee MRI cost with Cigna?",
      answer: "For knee MRI (CPT 73721), Cigna typically covers 80% after your deductible. With average costs of $600-1,200, your estimated out-of-pocket would be $120-240 (assuming deductible is met).",
    },
    {
      number: "03",
      title: "Denied Claim Appeals",
      question: "My insurance denied my lab test. What should I do?",
      answer: "I'll generate a customized appeal letter addressing the specific denial reason, citing medical necessity documentation and relevant insurance regulations for your test.",
    },
    {
      number: "04",
      title: "Claim Submission Assistance",
      question: "I need to submit a medical claim myself. Can you help?",
      answer: "Absolutely! I'll help you complete the CMS-1500 form with correct diagnosis and procedure codes, ensuring all required fields are properly filled for prompt processing.",
    },
    {
      number: "05",
      title: "Prescription Coverage Check",
      question: "Is Ozempic covered under my Medicare plan?",
      answer: "Let me check the Medicare Part D formulary. Ozempic is typically covered as a Tier 3 drug on most Medicare plans, requiring prior authorization with an average copay of $40-100 for a monthly supply.",
    },
  ];
  
  return (
    <section 
      id="use-cases"
      ref={sectionRef}
      className="py-20 px-6 relative"
    >
      {/* Background Elements */}
      <div className="absolute top-40 -right-40 w-96 h-96 bg-cyberpunk-blue/20 rounded-full filter blur-3xl z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-cyberpunk-blue/20 text-cyberpunk-blue px-4 py-1 text-sm font-medium rounded-full mb-4">
            Real-World Applications
          </span>
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-gradient">Use Cases</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            See how Medical Billing & Coding GPT can solve real-world medical billing and insurance challenges with expert precision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <UseCase
              key={index}
              number={useCase.number}
              title={useCase.title}
              question={useCase.question}
              answer={useCase.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
