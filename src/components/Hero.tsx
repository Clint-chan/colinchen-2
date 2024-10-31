import React, { useEffect, useRef } from 'react';
import { Mail, Phone, MessageCircle, Brain, Database, Bot, FileText } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{x: number; y: number; dx: number; dy: number}> = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5
      });
    }

    function animate() {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(37, 99, 235, 0.5)';
        ctx.fill();

        particles.forEach((particle2, j) => {
          if (i === j) return;
          const dx = particle.x - particle2.x;
          const dy = particle.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${0.2 * (1 - distance / 100)})`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8 relative group">
          <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-3xl transform -translate-y-4 group-hover:scale-110 transition-transform duration-500" />
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto shadow-lg ring-4 ring-white relative group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-800 to-purple-700 animate-gradient">
          陈定钢
        </h1>
        
        <div className="flex justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
            <Brain className="text-blue-600" size={20} />
            <span className="text-blue-800">AI Engineer</span>
          </div>
          <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full">
            <Database className="text-purple-600" size={20} />
            <span className="text-purple-800">Data Scientist</span>
          </div>
          <div className="flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-full">
            <Bot className="text-indigo-600" size={20} />
            <span className="text-indigo-800">LLM Expert</span>
          </div>
        </div>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          AIGC思维火花社区核心成员，跨领域技术专才，
          <span className="text-blue-600 font-semibold">PMP认证</span>项目经理
        </p>
        
        <div className="flex justify-center space-x-6">
          <a href="#contact" className="transform hover:scale-110 transition-all duration-300">
            <div className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl">
              <MessageCircle size={24} className="text-blue-600" />
            </div>
          </a>
          <a href="tel:17674178967" className="transform hover:scale-110 transition-all duration-300">
            <div className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl">
              <Phone size={24} className="text-blue-600" />
            </div>
          </a>
          <a href="mailto:123@gptalk.com" className="transform hover:scale-110 transition-all duration-300">
            <div className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl">
              <Mail size={24} className="text-blue-600" />
            </div>
          </a>
          <a 
            href="https://exhgarfnvk.feishu.cn/docx/KS8Ndi2Q2ot8x0xdKnfcIuqTnbc?from=from_copylink" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transform hover:scale-110 transition-all duration-300"
          >
            <div className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl">
              <FileText size={24} className="text-blue-600" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}