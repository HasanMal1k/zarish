
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  // Register GSAP plugins
  gsap.registerPlugin(TextPlugin);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawHalftoneWave = () => {
      const gridSize = 20;
      const rows = Math.ceil(canvas.height / gridSize);
      const cols = Math.ceil(canvas.width / gridSize);

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const centerX = x * gridSize;
          const centerY = y * gridSize;
          const distanceFromCenter = Math.sqrt(
            Math.pow(centerX - canvas.width / 2, 2) + 
            Math.pow(centerY - canvas.height / 2, 2)
          );
          const maxDistance = Math.sqrt(
            Math.pow(canvas.width / 2, 2) + 
            Math.pow(canvas.height / 2, 2)
          );
          const normalizedDistance = distanceFromCenter / maxDistance;
          
          const waveOffset = Math.sin(normalizedDistance * 10 - time) * 0.5 + 0.5;
          const size = gridSize * waveOffset * 0.8;

          ctx.beginPath();
          ctx.arc(centerX, centerY, size / 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${waveOffset * 0.5})`;
          ctx.fill();
        }
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawHalftoneWave();

      time += 0.05;
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Enhanced GSAP animations
  useEffect(() => {
    if (containerRef.current) {
      // Create a timeline for smoother sequencing
      const tl = gsap.timeline();
      
      // Animate heading with text reveal and glow effect
      tl.from(".hero-content h1 span", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out"
      });
      
      // Add a subtle glow animation to the heading
      tl.to(".hero-content h1 span", {
        textShadow: "0 0 15px rgba(255,255,255,0.5)",
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      }, "-=0.5");

      // Animate the paragraph
      tl.from(".hero-content p", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      }, "-=0.5");

      // Animate the buttons with a bounce effect
      tl.from(".hero-content .button-group", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.3");

      // Animate the scroll indicator
      gsap.to(scrollIndicatorRef.current, {
        y: "-8px",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Canvas background */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full bg-black" />
      
      {/* Enhanced dark overlay with gradient for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80 z-[1]"></div>
      
      {/* Main content */}
      <div ref={containerRef} className="container relative z-10 text-center hero-content">
        <div className="max-w-4xl mx-auto">
          <h1 ref={headingRef} className="heading-xl mb-6">
            <span className="block inline-block">Crafting Digital</span>
            <span className="block text-gradient mt-2 inline-block">Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-street-silver max-w-2xl mx-auto mb-10">
            We transform your digital presence with cutting-edge web development and strategic marketing solutions that drive results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center button-group">
            <a 
              href="#services" 
              className="bg-street-white text-street-black px-8 py-4 rounded-full font-medium 
              hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Our Services
            </a>
            <a 
              href="#contact" 
              className="border border-street-silver px-8 py-4 rounded-full font-medium 
              hover:bg-street-white hover:text-street-black transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      <div ref={scrollIndicatorRef} className="absolute bottom-10 left-0 right-0 mx-auto w-6 h-10 z-10">
        <div className="w-full h-full border-2 border-street-silver rounded-full flex items-start justify-center">
          <span className="block w-1 h-2 bg-street-white rounded-full mt-2"></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
