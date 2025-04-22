import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding container-padding bg-black">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="overflow-text">
              <h2 className="heading-md mb-6">
                <span>Let's Create</span>
                <span className="block text-gradient">Something Great</span>
              </h2>
            </div>
            <p className="text-street-silver mb-8">
              Ready to elevate your digital presence? We're here to transform your vision into reality. Get in touch and let's discuss how we can help your business grow.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-street-white/10 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-street-silver">teamzarish@gmail.com</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-street-white/10 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-street-silver">+92 318 8187431</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-street-white/10 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 12.414C14.384 11.931 15 10.98 15 10C15 8.343 13.657 7 12 7C10.343 7 9 8.343 9 10C9 10.98 9.616 11.931 10.586 12.414L6.343 16.657M12 22V17" />
                  </svg>
                </div>
                <span className="text-street-silver">Gulberg, Islamabad, Pakistan</span>
              </div>
            </div>
          </div>

          <div className="bg-black/20 backdrop-blur-md border border-gray-800 p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-street-silver mb-2">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-md focus:ring-1 focus:ring-street-silver focus:outline-none text-street-white"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-street-silver mb-2">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-md focus:ring-1 focus:ring-street-silver focus:outline-none text-street-white"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-street-silver mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-md focus:ring-1 focus:ring-street-silver focus:outline-none text-street-white"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full bg-street-white text-street-black font-medium py-3 px-4 rounded-md hover:bg-opacity-90 transition-all"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
