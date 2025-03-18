
import React, { useEffect, useRef, useState } from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  index: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, index }) => {
  return (
    <div 
      className="glass-card glass-card-hover rounded-xl p-8 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
        <path d="M10 25H15L17.5 17.5V10H10V17.5H15M25 25H30L32.5 17.5V10H25V17.5H30" stroke="url(#paint0_linear)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <linearGradient id="paint0_linear" x1="10" y1="17.5" x2="32.5" y2="17.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#33C3F0"/>
            <stop offset="1" stopColor="#8B5CF6"/>
          </linearGradient>
        </defs>
      </svg>
      
      <p className="text-gray-300 mb-6">{quote}</p>
      
      <div className="flex items-center">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyberpunk-blue to-cyberpunk-purple mr-4"></div>
        <div>
          <h4 className="font-semibold text-white">{author}</h4>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
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
  
  const testimonials = [
    {
      quote: "Medical Billing & Coding GPT has transformed our billing workflow. What used to take hours now takes minutes, with higher accuracy and fewer denials.",
      author: "Dr. Sarah Mitchell",
      role: "Family Medicine Physician",
    },
    {
      quote: "As a solo practitioner, managing billing was overwhelming until I found this tool. It's like having a certified coder on call 24/7.",
      author: "James Wilson",
      role: "Independent Healthcare Provider",
    },
    {
      quote: "Our surgery center reduced claim denials by 34% in the first three months of using Medical Billing & Coding GPT. The ROI is incredible.",
      author: "Lisa Thompson",
      role: "Medical Billing Manager",
    },
  ];
  
  return (
    <section 
      ref={sectionRef}
      className="py-20 px-6 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-gradient">What Users Are Saying</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hear from healthcare providers and billing specialists who have experienced the power of Medical Billing & Coding GPT.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
