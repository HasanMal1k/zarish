
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Smartphone, Search, LayoutDashboard, ShoppingCart, Zap } from 'lucide-react';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

type Service = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
};

const servicesData: Service[] = [
  {
    id: 1,
    title: "Web Design & Development",
    description: "Custom websites that blend stunning visuals with seamless functionality.",
    icon: <Code className="w-12 h-12 text-street-white" />,
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
    icon: <Search className="w-12 h-12 text-street-white" />,
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
    description: "Leverage artificial intelligence to enhance business operations and customer experience.",
    icon: <Zap className="w-12 h-12 text-street-white" />,
    features: [
      "Chatbot Integration",
      "Predictive Analytics",
      "AI-Powered Automation",
      "Machine Learning Models"
    ]
  },
  {
    id: 4,
    title: "App Development",
    description: "Cross-platform mobile applications with intuitive interfaces and powerful functionality.",
    icon: <Smartphone className="w-12 h-12 text-street-white" />,
    features: [
      "iOS & Android Development",
      "Progressive Web Apps",
      "App Store Optimization",
      "Maintenance & Support"
    ]
  },
  {
    id: 5,
    title: "UI/UX Design",
    description: "Engage your audience with user-centered design that drives conversion and satisfaction.",
    icon: <LayoutDashboard className="w-12 h-12 text-street-white" />,
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "Visual Design",
      "User Testing"
    ]
  },
  {
    id: 6,
    title: "E-commerce Solutions",
    description: "Complete online store solutions to showcase and sell your products effectively.",
    icon: <ShoppingCart className="w-12 h-12 text-street-white" />,
    features: [
      "Custom Online Stores",
      "Payment Integration",
      "Inventory Management",
      "Analytics & Reporting"
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
              className="service-item bg-black/30 backdrop-blur-sm p-6 rounded-md border border-gray-800 hover:border-street-silver transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="mb-5 flex items-center justify-center">
                  {service.icon}
                </div>
                <div className="text-center mb-5">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-street-silver mb-5">{service.description}</p>
                </div>
                <ul className="space-y-2 mt-auto">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
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
