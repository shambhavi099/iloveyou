import { useMemo } from 'react';

interface Particle {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  type: 'heart' | 'sparkle' | 'circle';
}

export function AmbientParticles() {
  const particles: Particle[] = useMemo(() => {
    // Keep it light and quiet — only 14 elements so it's subtle, never noisy
    return Array.from({ length: 14 }, (_, i) => ({
      id: i,
      left: Math.random() * 95 + 2,
      top: Math.random() * 90 + 5,
      size: Math.random() * 8 + 8,
      duration: Math.random() * 12 + 10,
      delay: Math.random() * 6,
      opacity: Math.random() * 0.25 + 0.12,
      type: i % 4 === 0 ? 'heart' : i % 4 === 1 ? 'sparkle' : 'circle',
    }));
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
      aria-hidden="true"
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute text-rose-300/40 will-change-transform"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            opacity: p.opacity,
            animation: `gentleDrift ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        >
          {p.type === 'heart' && (
            <svg
              className="w-3.5 h-3.5 fill-rose-300/35"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          )}
          {p.type === 'sparkle' && (
            <svg
              className="w-3 h-3 fill-amber-300/30"
              viewBox="0 0 24 24"
            >
              <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" />
            </svg>
          )}
          {p.type === 'circle' && (
            <div
              className="rounded-full bg-rose-200/30 blur-[0.5px]"
              style={{ width: `${p.size / 2}px`, height: `${p.size / 2}px` }}
            />
          )}
        </div>
      ))}

      <style>{`
        @keyframes gentleDrift {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(${Math.random() > 0.5 ? 12 : -12}px, -24px) scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}
