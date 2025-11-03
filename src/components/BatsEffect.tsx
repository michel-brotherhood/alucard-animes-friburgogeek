const BatsEffect = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Bat 1 */}
      <div className="absolute top-1/4 left-1/4 animate-[float_4s_ease-in-out_infinite]">
        <svg width="40" height="30" viewBox="0 0 40 30" fill="none" className="opacity-70">
          <path 
            d="M20 15C18 10 10 8 5 12C3 14 2 16 3 18C4 19 6 19 7 18C8 17 9 15 11 14C13 13 15 14 16 16L20 20L24 16C25 14 27 13 29 14C31 15 32 17 33 18C34 19 36 19 37 18C38 16 37 14 35 12C30 8 22 10 20 15Z" 
            fill="currentColor" 
            className="text-accent/60"
          />
          <circle cx="14" cy="15" r="1.5" fill="currentColor" className="text-red-500/80" />
          <circle cx="26" cy="15" r="1.5" fill="currentColor" className="text-red-500/80" />
        </svg>
      </div>

      {/* Bat 2 */}
      <div className="absolute top-1/3 right-1/4 animate-[float_5s_ease-in-out_infinite_0.5s]">
        <svg width="35" height="25" viewBox="0 0 40 30" fill="none" className="opacity-60">
          <path 
            d="M20 15C18 10 10 8 5 12C3 14 2 16 3 18C4 19 6 19 7 18C8 17 9 15 11 14C13 13 15 14 16 16L20 20L24 16C25 14 27 13 29 14C31 15 32 17 33 18C34 19 36 19 37 18C38 16 37 14 35 12C30 8 22 10 20 15Z" 
            fill="currentColor" 
            className="text-accent/60"
          />
          <circle cx="14" cy="15" r="1.5" fill="currentColor" className="text-red-500/80" />
          <circle cx="26" cy="15" r="1.5" fill="currentColor" className="text-red-500/80" />
        </svg>
      </div>

      {/* Bat 3 */}
      <div className="absolute top-1/2 left-1/3 animate-[float_6s_ease-in-out_infinite_1s]">
        <svg width="30" height="22" viewBox="0 0 40 30" fill="none" className="opacity-50">
          <path 
            d="M20 15C18 10 10 8 5 12C3 14 2 16 3 18C4 19 6 19 7 18C8 17 9 15 11 14C13 13 15 14 16 16L20 20L24 16C25 14 27 13 29 14C31 15 32 17 33 18C34 19 36 19 37 18C38 16 37 14 35 12C30 8 22 10 20 15Z" 
            fill="currentColor" 
            className="text-accent/60"
          />
          <circle cx="14" cy="15" r="1.5" fill="currentColor" className="text-red-500/80" />
          <circle cx="26" cy="15" r="1.5" fill="currentColor" className="text-red-500/80" />
        </svg>
      </div>

      {/* Bat 4 */}
      <div className="absolute top-2/3 right-1/3 animate-[float_5.5s_ease-in-out_infinite_1.5s]">
        <svg width="38" height="28" viewBox="0 0 40 30" fill="none" className="opacity-65">
          <path 
            d="M20 15C18 10 10 8 5 12C3 14 2 16 3 18C4 19 6 19 7 18C8 17 9 15 11 14C13 13 15 14 16 16L20 20L24 16C25 14 27 13 29 14C31 15 32 17 33 18C34 19 36 19 37 18C38 16 37 14 35 12C30 8 22 10 20 15Z" 
            fill="currentColor" 
            className="text-accent/60"
          />
          <circle cx="14" cy="15" r="1.5" fill="currentColor" className="text-red-500/80" />
          <circle cx="26" cy="15" r="1.5" fill="currentColor" className="text-red-500/80" />
        </svg>
      </div>

      {/* Bat 5 */}
      <div className="absolute top-1/4 right-1/4 animate-[float_4.5s_ease-in-out_infinite_2s]">
        <svg width="32" height="24" viewBox="0 0 40 30" fill="none" className="opacity-55">
          <path 
            d="M20 15C18 10 10 8 5 12C3 14 2 16 3 18C4 19 6 19 7 18C8 17 9 15 11 14C13 13 15 14 16 16L20 20L24 16C25 14 27 13 29 14C31 15 32 17 33 18C34 19 36 19 37 18C38 16 37 14 35 12C30 8 22 10 20 15Z" 
            fill="currentColor" 
            className="text-accent/60"
          />
          <circle cx="14" cy="15" r="1.5" fill="currentColor" className="text-red-500/80" />
          <circle cx="26" cy="15" r="1.5" fill="currentColor" className="text-red-500/80" />
        </svg>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(20px, -20px) rotate(5deg);
          }
          50% {
            transform: translate(-10px, -30px) rotate(-3deg);
          }
          75% {
            transform: translate(-20px, -10px) rotate(3deg);
          }
        }
      `}</style>
    </div>
  );
};

export default BatsEffect;
