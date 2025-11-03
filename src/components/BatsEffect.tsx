import batSilhouette from "@/assets/bat-silhouette.png";

const BatsEffect = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Bat 1 */}
      <div className="absolute top-1/4 left-1/4 animate-[float_4s_ease-in-out_infinite]">
        <img src={batSilhouette} alt="" className="w-16 h-auto opacity-80" />
      </div>

      {/* Bat 2 */}
      <div className="absolute top-1/3 right-1/4 animate-[float_5s_ease-in-out_infinite_0.5s]">
        <img src={batSilhouette} alt="" className="w-14 h-auto opacity-70" />
      </div>

      {/* Bat 3 */}
      <div className="absolute top-1/2 left-1/3 animate-[float_6s_ease-in-out_infinite_1s]">
        <img src={batSilhouette} alt="" className="w-12 h-auto opacity-60" />
      </div>

      {/* Bat 4 */}
      <div className="absolute top-2/3 right-1/3 animate-[float_5.5s_ease-in-out_infinite_1.5s]">
        <img src={batSilhouette} alt="" className="w-15 h-auto opacity-75" />
      </div>

      {/* Bat 5 */}
      <div className="absolute top-1/4 right-1/4 animate-[float_4.5s_ease-in-out_infinite_2s]">
        <img src={batSilhouette} alt="" className="w-13 h-auto opacity-65" />
      </div>

      {/* Bat 6 */}
      <div className="absolute top-1/5 left-1/2 animate-[float_5.2s_ease-in-out_infinite_2.5s]">
        <img src={batSilhouette} alt="" className="w-11 h-auto opacity-55" />
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
