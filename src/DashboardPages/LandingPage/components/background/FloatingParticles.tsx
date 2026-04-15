export function FloatingParticles() {
  const particles = Array.from({ length: 30 });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-[#0285FF]/30 rounded-full animate-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${15 + Math.random() * 20}s`,
          }}
        />
      ))}
    </div>
  );
}
