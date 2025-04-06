
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BeamsBackground from './BeamsBackground';
import { MessageSquare, Zap, Code, Cog } from 'lucide-react';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const AISolutions = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current && cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.ai-card');
      
      gsap.from(".ai-section-title", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none none"
        }
      });
      
      gsap.from(".ai-section-description", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none none"
        }
      });
      
      gsap.from(cards, {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
          end: "top 60%",
          toggleActions: "play none none none"
        }
      });
    }
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 overflow-hidden">
      {/* Beams background with vibrant colors */}
      <BeamsBackground colorMode="vibrant" intensity="medium" className="absolute inset-0 h-full" />
      
      <div className="container relative z-10 mx-auto px-4">
        <h2 className="ai-section-title text-3xl md:text-4xl font-bold text-center text-white mb-4">
          AI-Ready Solutions
        </h2>
        <p className="ai-section-description text-lg text-center text-white/80 max-w-2xl mx-auto mb-12">
          Elevate your business with our intelligent solutions that harness the power of artificial intelligence to drive growth and efficiency.
        </p>
        
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="ai-card bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-6 transition-all duration-300 hover:border-white/30 hover:transform hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]">
            <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
              <MessageSquare className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">AI Chatbots</h3>
            <p className="text-white/70">Intelligent conversation agents that engage with your customers 24/7.</p>
          </div>
          
          <div className="ai-card bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-6 transition-all duration-300 hover:border-white/30 hover:transform hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]">
            <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Smart Automation</h3>
            <p className="text-white/70">Streamline workflows and processes with intelligent automation solutions.</p>
          </div>
          
          <div className="ai-card bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-6 transition-all duration-300 hover:border-white/30 hover:transform hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]">
            <div className="h-12 w-12 rounded-full bg-teal-500/20 flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-teal-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Custom AI Integration</h3>
            <p className="text-white/70">Seamlessly integrate AI capabilities into your existing systems and applications.</p>
          </div>
          
          <div className="ai-card bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-6 transition-all duration-300 hover:border-white/30 hover:transform hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]">
            <div className="h-12 w-12 rounded-full bg-pink-500/20 flex items-center justify-center mb-4">
              <Cog className="h-6 w-6 text-pink-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Predictive Analytics</h3>
            <p className="text-white/70">Anticipate trends and make data-driven decisions with our predictive models.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISolutions;
