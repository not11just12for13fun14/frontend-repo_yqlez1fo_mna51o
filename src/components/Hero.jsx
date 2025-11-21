import { motion } from "framer-motion";

export default function Hero({ onShop, onTech }) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950" />
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1974&auto=format&fit=crop"
          alt="Frozen mountains"
          className="w-full h-full object-cover opacity-40"
        />
        {/* Snow particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(60)].map((_, i) => (
            <span
              key={i}
              className="absolute bg-white/40 rounded-full"
              style={{
                width: Math.random() * 2 + 1,
                height: Math.random() * 2 + 1,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `fall ${6 + Math.random() * 6}s linear ${Math.random() * 4}s infinite`,
                opacity: 0.6,
              }}
            />
          ))}
        </div>
      </div>

      <style>{`@keyframes fall{0%{transform:translateY(-10vh)}100%{transform:translateY(110vh)}}`}</style>

      <div className="relative text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-300 drop-shadow-[0_0_20px_rgba(34,211,238,0.35)]"
        >
          Engineered for the cold. Powered by innovation.
        </motion.h1>
        <p className="mt-5 max-w-2xl mx-auto text-slate-200/90 text-base sm:text-lg">
          Premium heated jackets for extreme cold, urban winter fashion, and outdoor performance.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button onClick={onShop} className="px-5 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold shadow-[0_10px_30px_rgba(34,211,238,0.35)] transition">Shop Now</button>
          <button onClick={onTech} className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold transition">Explore Technology</button>
        </div>
      </div>
    </section>
  );
}
