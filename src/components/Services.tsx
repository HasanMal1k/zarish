
import { useState } from 'react';
import { cn } from '@/lib/utils';

type Service = {
  id: number;
  title: string;
  description: string;
  features: string[];
};

const servicesData: Service[] = [
  {
    id: 1,
    title: "Web Design & Development",
    description: "Custom websites that blend stunning visuals with seamless functionality.",
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
    features: [
      "Webflow Development",
      "Shopify Integration",
      "WordPress Customization",
      "Quick Turnaround"
    ]
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding container-padding">
      <div className="container mx-auto">
        <div className="overflow-text mb-12">
          <h2 className="heading-md">
            <span className="block">Our Services</span>
          </h2>
          <p className="text-street-silver mt-4 max-w-2xl">
            We offer comprehensive digital solutions tailored to your specific business needs, helping you stand out in today's competitive landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicesData.map((service) => (
            <div 
              key={service.id}
              className={cn(
                "service-card transition-all duration-500 cursor-pointer", 
                activeService === service.id ? "border-street-white" : ""
              )}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-street-silver mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-street-white mr-2">•</span>
                    <span className="text-street-silver">{feature}</span>
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
