
import { useEffect, useRef } from 'react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full bg-black" />
      <div className="container relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="overflow-text heading-xl mb-6">
            <span className="block" style={{ animationDelay: '0.1s' }}>Crafting Digital</span>
            <span className="block text-gradient" style={{ animationDelay: '0.3s' }}>Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-street-silver max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            We transform your digital presence with cutting-edge web development and strategic marketing solutions that drive results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <a 
              href="#services" 
              className="bg-street-white text-street-black px-8 py-4 rounded-full font-medium 
              hover:bg-opacity-90 transition-all duration-300"
            >
              Our Services
            </a>
            <a 
              href="#contact" 
              className="border border-street-silver px-8 py-4 rounded-full font-medium 
              hover:bg-street-white hover:text-street-black transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 mx-auto w-6 h-10">
        <div className="w-full h-full border-2 border-street-silver rounded-full flex items-start justify-center">
          <span className="block w-1 h-2 bg-street-white rounded-full animate-bounce mt-2"></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
