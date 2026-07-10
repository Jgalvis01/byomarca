import { useEffect, useRef } from 'react';

/**
 * BackgroundAnimation
 * Renders animated blue streaks/trails that sweep across the background
 * from left to right, giving a dynamic feel to the dark background.
 * Uses a canvas element for performant rendering.
 */

interface Streak {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  width: number;
  hue: number; // electric blue range (210-230)
}

const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const streaksRef = useRef<Streak[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight || window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    // Create the ResizeObserver on the body to catch scroll height changes
    const resizeObserver = new ResizeObserver(() => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight || window.innerHeight;
    });
    resizeObserver.observe(document.body);

    const STREAK_COUNT = 18;

    const createStreak = (startOffScreen = false): Streak => {
      const canvasW = canvas.width;
      const canvasH = canvas.height;
      return {
        x: startOffScreen ? -Math.random() * canvasW * 0.5 : Math.random() * canvasW,
        y: Math.random() * canvasH,
        length: 120 + Math.random() * 350,
        speed: 0.3 + Math.random() * 1.2,
        opacity: 0.04 + Math.random() * 0.12,
        width: 1 + Math.random() * 2.5,
        hue: 210 + Math.random() * 20, // electric blue range (210-230)
      };
    };

    // Initialize streaks
    streaksRef.current = Array.from({ length: STREAK_COUNT }, () => createStreak(false));

    const animate = () => {
      const w = canvas.width;
      const h = canvas.height;

      // Clear with slight fade for trail effect
      ctx.clearRect(0, 0, w, h);

      for (const streak of streaksRef.current) {
        // Draw the streak as a gradient line
        const gradient = ctx.createLinearGradient(
          streak.x - streak.length,
          streak.y,
          streak.x,
          streak.y
        );

        gradient.addColorStop(0, `hsla(${streak.hue}, 95%, 60%, 0)`);
        gradient.addColorStop(0.3, `hsla(${streak.hue}, 95%, 60%, ${streak.opacity * 0.5})`);
        gradient.addColorStop(0.7, `hsla(${streak.hue}, 95%, 65%, ${streak.opacity})`);
        gradient.addColorStop(1, `hsla(${streak.hue}, 95%, 70%, ${streak.opacity * 0.3})`);

        ctx.beginPath();
        ctx.moveTo(streak.x - streak.length, streak.y);
        ctx.lineTo(streak.x, streak.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = streak.width;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Add a soft glow at the head of the streak
        const glowRadius = streak.width * 4;
        const headGlow = ctx.createRadialGradient(
          streak.x, streak.y, 0,
          streak.x, streak.y, glowRadius
        );
        headGlow.addColorStop(0, `hsla(${streak.hue}, 95%, 70%, ${streak.opacity * 0.6})`);
        headGlow.addColorStop(1, `hsla(${streak.hue}, 95%, 60%, 0)`);

        ctx.beginPath();
        ctx.arc(streak.x, streak.y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = headGlow;
        ctx.fill();

        // Move the streak
        streak.x += streak.speed;

        // Reset when it goes off screen
        if (streak.x - streak.length > w) {
          Object.assign(streak, createStreak(true));
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

export default BackgroundAnimation;
