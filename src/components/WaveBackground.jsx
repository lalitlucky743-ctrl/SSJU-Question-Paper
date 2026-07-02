import React, { useEffect, useRef, useState } from 'react';

const WaveBackground = () => {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const animationRef = useRef(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width, height;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    handleResize();

    // Wave parameters
    const waves = [
      { amplitude: 80, frequency: 0.008, speed: 0.5, color: 'rgba(245, 176, 66, 0.4)' },
      { amplitude: 60, frequency: 0.012, speed: 0.7, color: 'rgba(236, 72, 153, 0.35)' },
      { amplitude: 100, frequency: 0.006, speed: 0.3, color: 'rgba(59, 130, 246, 0.3)' },
      { amplitude: 70, frequency: 0.01, speed: 0.6, color: 'rgba(16, 185, 129, 0.25)' },
      { amplitude: 50, frequency: 0.015, speed: 0.9, color: 'rgba(139, 92, 246, 0.3)' },
      { amplitude: 90, frequency: 0.005, speed: 0.4, color: 'rgba(236, 72, 153, 0.2)' },
    ];

    const drawWave = (time) => {
      ctx.clearRect(0, 0, width, height);

      // Mouse influence
      const mouseInfluenceX = (mousePosition.x / width - 0.5) * 2;
      const mouseInfluenceY = (mousePosition.y / height - 0.5) * 2;

      // Draw each wave
      waves.forEach((wave, index) => {
        ctx.beginPath();
        ctx.moveTo(0, height);

        const offsetY = index * 20 + 10;

        for (let x = 0; x <= width; x += 2) {
          // Multiple wave effects combined
          const wave1 = Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude;
          const wave2 = Math.sin(x * wave.frequency * 0.5 + time * wave.speed * 0.3 + 1) * wave.amplitude * 0.3;
          const wave3 = Math.sin(x * wave.frequency * 0.3 + time * wave.speed * 0.7 + 2) * wave.amplitude * 0.2;
          
          // Mouse interaction - wave follows cursor
          const mouseWave = Math.sin(x * 0.005 - mousePosition.x * 0.01) * 30 * mouseInfluenceX;
          const mouseWaveY = Math.sin(x * 0.003 + mousePosition.y * 0.01) * 20 * mouseInfluenceY;
          
          // Combined Y position
          const y = height / 2 + wave1 + wave2 + wave3 + mouseWave + mouseWaveY + offsetY;
          
          if (x === 0) {
            ctx.lineTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        // Fill with gradient
        const gradient = ctx.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0, wave.color);
        gradient.addColorStop(0.5, wave.color.replace('0.4', '0.3').replace('0.35', '0.25').replace('0.3', '0.2'));
        gradient.addColorStop(1, 'rgba(10, 22, 40, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fill();

        // Glow effect
        ctx.shadowColor = wave.color;
        ctx.shadowBlur = 20;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Wave border with glow
        ctx.beginPath();
        ctx.moveTo(0, height / 2 + offsetY);
        for (let x = 0; x <= width; x += 2) {
          const wave1 = Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude;
          const wave2 = Math.sin(x * wave.frequency * 0.5 + time * wave.speed * 0.3 + 1) * wave.amplitude * 0.3;
          const mouseWaveX = Math.sin(x * 0.005 - mousePosition.x * 0.01) * 30 * mouseInfluenceX;
          const y = height / 2 + wave1 + wave2 + mouseWaveX + offsetY;
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.strokeStyle = wave.color.replace('0.4', '0.8').replace('0.35', '0.7').replace('0.3', '0.6');
        ctx.lineWidth = 2;
        ctx.shadowColor = wave.color;
        ctx.shadowBlur = 30;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      // Particle effects near cursor
      const particleCount = 15;
      for (let i = 0; i < particleCount; i++) {
        const angle = (i / particleCount) * Math.PI * 2 + time * 0.5;
        const radius = 50 + Math.sin(time * 2 + i) * 20;
        const x = mousePosition.x + Math.cos(angle) * radius;
        const y = mousePosition.y + Math.sin(angle) * radius;
        
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 5);
        gradient.addColorStop(0, `hsla(${i * 40 + time * 50}, 100%, 70%, 0.8)`);
        gradient.addColorStop(1, `hsla(${i * 40 + time * 50}, 100%, 70%, 0)`);
        
        ctx.beginPath();
        ctx.arc(x, y, 5 + Math.sin(time * 3 + i) * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(drawWave);
    };

    const animate = (timestamp) => {
      const time = timestamp / 1000;
      timeRef.current = time;
      drawWave(time);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -10,
        pointerEvents: 'none',
      }}
    />
  );
};

export default WaveBackground;