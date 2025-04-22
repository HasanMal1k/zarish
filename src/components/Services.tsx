
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Brain, Code } from 'lucide-react';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

type Service = {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  features: string[];
};

const servicesData: Service[] = [
  {
    id: 1,
    title: "Web Design & Development",
    description: "Custom websites that blend stunning visuals with seamless functionality.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-street-white">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M9 17h6" />
        <path d="m9 3-6 6" />
        <path d="m21 3-6 6" />
      </svg>
    ),
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
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-street-white">
        <circle cx="12" cy="12" r="10" />
        <path d="m15 9-6 6" />
        <path d="m9 9 6 6" />
      </svg>
    ),
    features: [
      "Search Engine Optimization",
      "Content Marketing",
      "Paid Advertising",
      "Social Media Management"
    ]
  },
  {
    id: 3,
    title: "AI Solutions",
    description: "Harness the power of artificial intelligence to enhance business efficiency and innovation.",
    icon: <Brain className="w-12 h-12 text-street-white" />,
    features: [
      "Custom Chatbots",
      "AI-driven Analytics",
      "Process Automation",
      "Smart Recommendations"
    ]
  },
  {
    id: 4,
    title: "App Development",
    description: "Build robust web and mobile applications tailored to your business goals.",
    icon: <Code className="w-12 h-12 text-street-white" />,
    features: [
      "Cross-Platform Apps",
      "Progressive Web Apps",
      "API Integrations",
      "Maintenance & Support"
    ]
  }
  // Removed services 5 and 6 as requested
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (section) {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 services-grid">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="service-item flex flex-col items-start text-left"
            >
              <div
                className={
                  cn(
                    "p-0 mb-6 transition-all duration-300",
                    "hover:drop-shadow-[0_0_22px_rgba(80,143,255,0.8)]"
                  )
                }
              >
                {/* Icon with no circle wrapper */}
                <div className="w-20 h-20 flex items-center justify-center">
                  {service.icon}
                </div>
              </div>
              <div className="flex flex-col items-start w-full px-2">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-street-silver mb-5 text-left">{service.description}</p>
                <ul className="space-y-1 w-full max-w-xs mx-0 text-left flex flex-col items-start">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-street-white mr-2">•</span>
                      <span className="text-street-silver text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block border border-street-silver px-8 py-2 rounded-full 
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
