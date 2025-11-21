import { useEffect, useMemo, useState } from "react";

const backend = import.meta.env.VITE_BACKEND_URL || "";

export default function Shop(){
  const [items, setItems] = useState([]);
  const [filters, setFilters] = useState({gender:"", activity:"", min_temp:""});

  useEffect(()=>{ fetch(`${backend}/products`).then(r=>r.json()).then(setItems).catch(()=>{}); },[]);

  const filtered = useMemo(()=>{
    return items.filter(p =>
      (!filters.gender || p.gender===filters.gender) &&
      (!filters.activity || p.activity?.includes(filters.activity)) &&
      (!filters.min_temp || p.temperature_min_c <= parseInt(filters.min_temp))
    );
  },[items, filters]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-white text-3xl font-bold mb-6">Shop Jackets</h1>
      <div className="grid md:grid-cols-[260px_1fr] gap-6">
        <aside className="border border-cyan-400/10 rounded-xl p-4 bg-slate-900/60">
          <div className="space-y-4">
            <div>
              <label className="text-slate-300 text-sm">Gender</label>
              <select className="mt-1 w-full bg-slate-800 text-slate-200 rounded-md p-2" value={filters.gender} onChange={e=>setFilters(f=>({...f, gender:e.target.value}))}>
                <option value="">All</option>
                <option>Men</option>
                <option>Women</option>
                <option>Unisex</option>
              </select>
            </div>
            <div>
              <label className="text-slate-300 text-sm">Activity</label>
              <select className="mt-1 w-full bg-slate-800 text-slate-200 rounded-md p-2" value={filters.activity} onChange={e=>setFilters(f=>({...f, activity:e.target.value}))}>
                <option value="">All</option>
                <option value="city">City</option>
                <option value="hiking">Hiking</option>
                <option value="biking">Biking</option>
                <option value="travel">Travel</option>
              </select>
            </div>
            <div>
              <label className="text-slate-300 text-sm">Min Temperature (°C)</label>
              <input type="range" min="-40" max="0" step="5" value={filters.min_temp || -40} onChange={e=>setFilters(f=>({...f, min_temp:e.target.value}))} className="w-full" />
              <div className="text-slate-400 text-xs">≤ {filters.min_temp || -40}°C</div>
            </div>
          </div>
        </aside>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(p => (
            <div key={p.slug} className="group rounded-xl overflow-hidden border border-cyan-400/10 bg-slate-900/60">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.images?.[0] || "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1974&auto=format&fit=crop"} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
              </div>
              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">{p.title}</h3>
                  <div className="text-cyan-300">${p.price}</div>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <span>{p.temperature_min_c}°C</span>
                  <span>•</span>
                  <span>{p.battery_life_hours}h</span>
                  <span>•</span>
                  <span>Warmth {p.warmth_level}/10</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <select className="bg-slate-800 text-slate-200 rounded-md p-2">
                    {p.sizes?.map(s=>(<option key={s}>{s}</option>))}
                  </select>
                  <select className="bg-slate-800 text-slate-200 rounded-md p-2">
                    {p.colors?.map(c=>(<option key={c}>{c}</option>))}
                  </select>
                </div>
                <a href={`/product/${p.slug}`} className="inline-block mt-2 text-cyan-300 hover:text-cyan-200 text-sm">View details →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
