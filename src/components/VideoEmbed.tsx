
import React, { useEffect, useRef } from 'react';

const VideoEmbed: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (sectionRef.current) {
            sectionRef.current.classList.add('is-visible');
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
  
  return (
    <section 
      ref={sectionRef}
      className="py-20 px-6 relative fade-in-section"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-gradient">See It In Action</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Watch how Medical Billing & Coding GPT transforms complex coding and billing tasks into simple, efficient processes.
          </p>
        </div>
        
        <div className="youtube-container">
          <iframe
            src="https://www.youtube.com/embed/KxELTw8BAj4?autoplay=1&mute=0&controls=1&origin=https://lovable.dev&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=1&hd=1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Medical Billing & Coding GPT Demo"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoEmbed;
