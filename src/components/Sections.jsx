import { useEffect, useState } from "react";
import { Star, Zap, Wind, ThermometerSnowflake, ShieldCheck, Battery } from "lucide-react";

const backend = import.meta.env.VITE_BACKEND_URL || "";

export function ProductShowcase() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`${backend}/products`).then(r=>r.json()).then(setItems).catch(()=>{});
  }, []);
  return (
    <section className="py-16 bg-gradient-to-b from-slate-950 to-slate-900">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-10">Featured Jackets</h2>
      <div className="max-w-6xl mx-auto grid gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(p => (
          <a href={`/product/${p.slug}`} key={p.slug} className="group relative rounded-xl overflow-hidden border border-cyan-400/10 bg-slate-900/60 hover:bg-slate-900 transition shadow-[0_0_40px_rgba(34,211,238,0.07)]">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={p.images?.[0] || "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1974&auto=format&fit=crop"} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
            </div>
            <div className="p-4">
              <h3 className="text-white font-semibold text-lg">{p.title}</h3>
              <p className="text-cyan-300 text-sm">Up to {p.battery_life_hours}h • {p.temperature_min_c}°C • Warmth {p.warmth_level}/10</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export function FeatureGrid(){
  const features = [
    {icon: ThermometerSnowflake, title: "Extreme Warmth", desc:"Tested to sub-zero temps with smart heat zones."},
    {icon: Wind, title: "Windproof", desc:"Seals out frozen gusts and blizzard winds."},
    {icon: ShieldCheck, title: "Waterproof", desc:"Snow, sleet, and slush resistant."},
    {icon: Battery, title: "Long Battery", desc:"All-day power with fast USB-C charging."},
    {icon: Zap, title: "Lightweight", desc:"Warmth without bulk for agile movement."},
    {icon: Star, title: "Premium Build", desc:"Durable, sleek, and made to last."},
  ];
  return (
    <section className="py-16 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">Built for the Arctic</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i)=> (
            <div key={i} className="rounded-xl border border-cyan-400/10 bg-slate-950/60 p-5 hover:bg-slate-950 transition">
              <f.icon className="text-cyan-300 mb-3" />
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-slate-300 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Reviews(){
  const [items, setItems] = useState([
    {name:"Maya", rating:5, comment:"Insanely warm on my Iceland trip. Sleek enough for the city."},
    {name:"Kenji", rating:5, comment:"Biked in -10°C with wind, totally fine. Battery lasted all day."},
    {name:"Lena", rating:4, comment:"Lightweight but powerful. The heat zones are perfect."},
  ]);
  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Trusted in the Cold</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((r,i)=> (
            <div key={i} className="rounded-xl border border-cyan-400/10 bg-slate-900/60 p-5">
              <div className="flex items-center gap-2 mb-2">
                {Array.from({length:r.rating}).map((_,j)=>(<Star key={j} size={16} className="text-cyan-300 fill-cyan-300"/>))}
              </div>
              <p className="text-slate-200 text-sm">“{r.comment}”</p>
              <p className="text-slate-400 text-xs mt-2">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ColdComparison(){
  return (
    <section className="py-16 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div className="rounded-xl overflow-hidden border border-cyan-400/10 bg-[linear-gradient(120deg,rgba(8,47,73,0.6),rgba(2,6,23,0.9))] p-6">
          <h3 className="text-white font-semibold text-xl mb-2">-30°C Performance</h3>
          <div className="h-40 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_60%)]" />
          </div>
          <p className="text-slate-300 text-sm mt-3">Thermal mapping shows stable core warmth in extreme cold.</p>
        </div>
        <div className="rounded-xl overflow-hidden border border-cyan-400/10 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold text-xl mb-2">Durability Tests</h3>
          <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
            <li>Water immersion and blizzard wind tunnel</li>
            <li>Battery cycle and USB-C rapid charge</li>
            <li>Fabric abrasion and seam stress</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function StoryTeaser(){
  return (
    <section className="py-16 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.08),transparent_60%)]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Born from the Arctic</h2>
        <p className="text-slate-300">Forged on expeditions across frozen peaks, Amberarctic blends elite engineering with modern minimal design to deliver warmth without bulk.</p>
      </div>
    </section>
  );
}
