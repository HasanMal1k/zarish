
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

type Service = {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
};

const servicesData: Service[] = [
  {
    id: 1,
    title: "Web Design & Development",
    description: "Custom websites that blend stunning visuals with seamless functionality.",
    icon: "/lovable-uploads/e5770a27-455a-4dc8-af86-fc53fa992cf9.png",
    features: [
      "Responsive UI/UX Design",
      "Custom Web Applications",
      "E-commerce Solutions",
      "CMS Integration"
    ]
  },
  {
    id: 2,
    title: "Digital Marketing & SEO",
    description: "Strategic marketing solutions to boost your online presence and drive conversions.",
    icon: "/lovable-uploads/e5770a27-455a-4dc8-af86-fc53fa992cf9.png",
    features: [
      "Search Engine Optimization",
      "Content Marketing",
      "Paid Advertising",
      "Social Media Management"
    ]
  },
  {
    id: 3,
    title: "Branding & Strategy",
    description: "Crafting unique brand identities that resonate with your target audience.",
    icon: "/lovable-uploads/e5770a27-455a-4dc8-af86-fc53fa992cf9.png",
    features: [
      "Brand Identity Development",
      "Market Research",
      "Competitor Analysis",
      "Strategic Planning"
    ]
  },
  {
    id: 4,
    title: "No-Code Solutions",
    description: "Powerful web solutions without complex coding, delivered efficiently.",
    icon: "/lovable-uploads/e5770a27-455a-4dc8-af86-fc53fa992cf9.png",
    features: [
      "Webflow Development",
      "Shopify Integration",
      "WordPress Customization",
      "Quick Turnaround"
    ]
  },
  {
    id: 5,
    title: "Social Media Management",
    description: "Engage your audience and grow your brand across all social platforms.",
    icon: "/lovable-uploads/e5770a27-455a-4dc8-af86-fc53fa992cf9.png",
    features: [
      "Content Calendar",
      "Static Posts",
      "Video & Immersive Posts",
      "Social Media Management"
    ]
  },
  {
    id: 6,
    title: "Video Production",
    description: "Captivating video content that tells your brand story effectively.",
    icon: "/lovable-uploads/e5770a27-455a-4dc8-af86-fc53fa992cf9.png",
    features: [
      "Storyboard Design",
      "Motion Graphics",
      "Explainer Videos",
      "Post Production"
    ]
  }
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // GSAP animations
  useEffect(() => {
    const section = sectionRef.current;
    
    if (section) {
      // Animate section title
      gsap.from(".services-title", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".services-title",
          start: "top bottom-=100",
          toggleActions: "play none none none"
        }
      });
      
      // Animate service cards with stagger
      gsap.from(".service-item", {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top bottom-=50",
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
    <section ref={sectionRef} id="services" className="section-padding container-padding bg-black">
      <div className="container mx-auto">
        <div className="mb-16 text-center services-title">
          <h2 className="heading-md mb-4">
            <span className="block">Our Services</span>
          </h2>
          <p className="text-street-silver mt-4 max-w-2xl mx-auto">
            We offer comprehensive digital solutions tailored to your specific business needs, helping you stand out in today's competitive landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 services-grid">
          {servicesData.map((service) => (
            <div 
              key={service.id}
              className="service-item flex flex-col items-center text-center"
            >
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-full border border-gray-800 mb-6 hover:border-street-silver transition-all duration-300">
                <div className="w-20 h-20 flex items-center justify-center">
                  {/* Use an icon or placeholder */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-street-white">
                    {service.id === 1 && (
                      <>
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M9 17h6" />
                        <path d="m9 3-6 6" />
                        <path d="m21 3-6 6" />
                      </>
                    )}
                    {service.id === 2 && (
                      <>
                        <circle cx="12" cy="12" r="10" />
                        <path d="m15 9-6 6" />
                        <path d="m9 9 6 6" />
                      </>
                    )}
                    {service.id === 3 && (
                      <>
                        <path d="M12 2 2 7l10 5 10-5-10-5Z" />
                        <path d="M2 17 12 22 22 17" />
                        <path d="M2 12 12 17 22 12" />
                      </>
                    )}
                    {service.id === 4 && (
                      <>
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </>
                    )}
                    {service.id === 5 && (
                      <>
                        <path d="M18 16.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        <path d="M10 18a8 8 0 1 0 8-8h-8Z" />
                        <path d="m1.1 13 .9-1 .9 1" />
                        <path d="m1.1 16 .9-1 .9 1" />
                        <path d="M4 17h1" />
                        <path d="M4 14h1" />
                      </>
                    )}
                    {service.id === 6 && (
                      <>
                        <path d="m22 8-6 4 6 4V8Z" />
                        <rect x="2" y="6" width="14" height="12" rx="2" ry="2" />
                      </>
                    )}
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-street-silver mb-5">{service.description}</p>
              <ul className="space-y-1 text-left">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-street-white mr-2">•</span>
                    <span className="text-street-silver text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block border border-street-silver px-8 py-3 rounded-full 
            hover:bg-street-white hover:text-street-black transition-all duration-300"
          >
            Let's Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
