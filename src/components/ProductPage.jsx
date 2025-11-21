import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ChevronLeft, ShieldCheck, Wind, Battery, ThermometerSnowflake } from "lucide-react";

const backend = import.meta.env.VITE_BACKEND_URL || "";

export default function ProductPage(){
  const { slug } = useParams();
  const [p, setP] = useState(null);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  useEffect(()=>{
    fetch(`${backend}/products/${slug}`).then(r=>r.json()).then(d=>{setP(d); setColor(d.colors?.[0]||""); setSize(d.sizes?.[0]||"");}).catch(()=>{});
  },[slug]);

  if(!p) return <div className="max-w-6xl mx-auto px-6 py-24 text-slate-200">Loading...</div>

  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <a href="/shop" className="text-slate-300 inline-flex items-center gap-2"><ChevronLeft size={16}/> Back to shop</a>
      <div className="grid lg:grid-cols-2 gap-8 mt-6">
        {/* 360 viewer mock */}
        <div className="rounded-xl border border-cyan-400/10 bg-slate-900/60 p-4">
          <div className="aspect-square rounded-lg overflow-hidden relative">
            <img src={p.images?.[0] || "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1974&auto=format&fit=crop"} alt={p.title} className="w-full h-full object-cover"/>
            <div className="absolute bottom-2 right-2 text-[10px] px-2 py-1 rounded bg-slate-950/70 text-slate-200 border border-white/10">360° Rotate (drag)</div>
          </div>
          <div className="mt-3 grid grid-cols-4 gap-2">
            {(p.images?.slice(0,4) || []).map((img,i)=>(<img key={i} src={img} className="aspect-square object-cover rounded-md opacity-70 hover:opacity-100"/>))}
          </div>
        </div>

        <div>
          <h1 className="text-white text-3xl font-bold">{p.title}</h1>
          <div className="text-cyan-300 text-xl mt-1">${p.price}</div>
          <p className="text-slate-300 mt-3">{p.description}</p>

          {/* Heating zone diagram */}
          <div className="mt-6 rounded-xl border border-cyan-400/10 bg-slate-900/60 p-4">
            <h3 className="text-white font-semibold mb-2">Heating Zones</h3>
            <div className="h-40 bg-[conic-gradient(at_30%_60%,rgba(34,211,238,0.5),rgba(2,6,23,0.1),rgba(34,211,238,0.5))] rounded-md"/>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <Spec icon={ThermometerSnowflake} label="Temp" value={`${p.temperature_min_c}°C`} />
            <Spec icon={Battery} label="Battery" value={`${p.battery_life_hours}h`} />
            <Spec icon={Wind} label="Windproof" value="Yes" />
            <Spec icon={ShieldCheck} label="Waterproof" value="Yes" />
          </div>

          <div className="mt-6 flex items-center gap-2">
            <select value={size} onChange={e=>setSize(e.target.value)} className="bg-slate-800 text-slate-200 rounded-md p-2">
              {p.sizes?.map(s=>(<option key={s}>{s}</option>))}
            </select>
            <select value={color} onChange={e=>setColor(e.target.value)} className="bg-slate-800 text-slate-200 rounded-md p-2">
              {p.colors?.map(c=>(<option key={c}>{c}</option>))}
            </select>
            <button className="px-5 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold">Add to Cart</button>
          </div>

          <div className="mt-6 text-slate-300 text-sm">
            <p>Shipping: Free over $100. Returns within 30 days in original condition.</p>
          </div>

          <div className="mt-8 text-slate-400 text-xs">Model 185cm / 78kg wearing size L</div>
        </div>
      </div>
    </div>
  );
}

function Spec({icon:Icon, label, value}){
  return (
    <div className="rounded-lg border border-cyan-400/10 bg-slate-900/60 p-3">
      <div className="text-slate-400 text-xs">{label}</div>
      <div className="flex items-center gap-2 text-white"><Icon size={16} className="text-cyan-300"/>{value}</div>
    </div>
  )
}
