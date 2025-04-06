
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AISolutions from '@/components/AISolutions';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const aboutSectionRef = useRef<HTMLElement>(null);

  // Setup animations
  useEffect(() => {
    if (aboutSectionRef.current) {
      // About section hover animation
      const aboutElement = aboutSectionRef.current;
      const statsBoxes = aboutElement.querySelectorAll('.stat-box');
      
      statsBoxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
          gsap.to(box, {
            y: -10,
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
            boxShadow: "0 15px 30px rgba(0,0,0,0.2)"
          });
        });
        
        box.addEventListener('mouseleave', () => {
          gsap.to(box, {
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
            boxShadow: "none"
          });
        });
      });
      
      // ScrollTrigger animation for About section
      gsap.from(".about-image", {
        x: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: aboutElement,
          start: "top 70%",
          toggleActions: "play none none none"
        }
      });
      
      gsap.from(".about-content", {
        x: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: aboutElement,
          start: "top 70%",
          toggleActions: "play none none none"
        }
      });
      
      gsap.from(".stat-box", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    }
    
    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <main className="bg-street-black min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <AISolutions />
      
      {/* About Section with enhanced hover interactions */}
      <section ref={aboutSectionRef} id="about" className="section-padding container-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="about-image">
              <div className="aspect-square w-full bg-gray-900 rounded-md overflow-hidden relative group cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:bg-black/40">
                  <div className="w-32 h-32 md:w-48 md:h-48 border-4 border-street-silver rounded-full transition-all duration-500 group-hover:scale-110"></div>
                  <div className="absolute w-24 h-24 md:w-40 md:h-40 bg-street-white/5 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-street-white/10">
                    <span className="text-xl md:text-2xl font-bold text-street-white transition-all duration-500 group-hover:text-gradient">StreetSmart</span>
                  </div>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500">
                  <span className="text-lg font-medium text-white bg-black/60 px-4 py-2 rounded-md">Learn More About Us</span>
                </div>
              </div>
            </div>
            
            <div className="about-content">
              <div className="overflow-text">
                <h2 className="heading-md mb-6">
                  <span>Who We Are</span>
                </h2>
              </div>
              <p className="text-street-silver mb-6">
                StreetSmart is a premium digital agency specializing in creating elegant, high-performing web experiences. We blend creativity with technical expertise to deliver solutions that elevate your brand and drive business growth.
              </p>
              <p className="text-street-silver mb-6">
                Our team of seasoned professionals brings decades of combined experience across web development, design, marketing, and strategy to every project.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8 stats-grid">
                <div className="stat-box bg-black/30 backdrop-blur-sm border border-gray-800 p-6 rounded-lg transition-all duration-300 cursor-pointer">
                  <h3 className="text-3xl font-bold text-gradient mb-2">10+</h3>
                  <p className="text-street-silver">Years of Experience</p>
                </div>
                <div className="stat-box bg-black/30 backdrop-blur-sm border border-gray-800 p-6 rounded-lg transition-all duration-300 cursor-pointer">
                  <h3 className="text-3xl font-bold text-gradient mb-2">200+</h3>
                  <p className="text-street-silver">Projects Completed</p>
                </div>
                <div className="stat-box bg-black/30 backdrop-blur-sm border border-gray-800 p-6 rounded-lg transition-all duration-300 cursor-pointer">
                  <h3 className="text-3xl font-bold text-gradient mb-2">50+</h3>
                  <p className="text-street-silver">Industry Awards</p>
                </div>
                <div className="stat-box bg-black/30 backdrop-blur-sm border border-gray-800 p-6 rounded-lg transition-all duration-300 cursor-pointer">
                  <h3 className="text-3xl font-bold text-gradient mb-2">100%</h3>
                  <p className="text-street-silver">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
