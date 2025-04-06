
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="bg-street-black min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      
      {/* About Section */}
      <section id="about" className="section-padding container-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-square w-full bg-gray-900 rounded-md overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 md:w-48 md:h-48 border-4 border-street-silver rounded-full"></div>
                  <div className="absolute w-24 h-24 md:w-40 md:h-40 bg-street-white/5 backdrop-blur-md rounded-full flex items-center justify-center">
                    <span className="text-xl md:text-2xl font-bold text-street-white">StreetSmart</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
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
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <h3 className="text-3xl font-bold text-gradient mb-2">10+</h3>
                  <p className="text-street-silver">Years of Experience</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gradient mb-2">200+</h3>
                  <p className="text-street-silver">Projects Completed</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gradient mb-2">50+</h3>
                  <p className="text-street-silver">Industry Awards</p>
                </div>
                <div>
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
