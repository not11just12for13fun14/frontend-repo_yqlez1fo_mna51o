export default function Technology(){
  const items = [
    {title:"Battery System", desc:"High-density cells with thermal regulation.", vis:"bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.5),transparent_60%)]"},
    {title:"Heating Elements", desc:"Carbon fiber mesh zones for even warmth.", vis:"bg-[linear-gradient(135deg,rgba(56,189,248,0.35),transparent)]"},
    {title:"Safety System", desc:"Overheat protection and auto cut-off.", vis:"bg-[conic-gradient(at_70%_30%,rgba(56,189,248,0.4),transparent)]"},
    {title:"Washability", desc:"Detachable battery and sealed wiring.", vis:"bg-[radial-gradient(circle_at_70%_60%,rgba(2,132,199,0.35),transparent)]"},
    {title:"Charging", desc:"USB-C fast charge with LED status.", vis:"bg-[linear-gradient(45deg,rgba(165,243,252,0.35),transparent)]"},
  ];
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-white text-3xl font-bold mb-6">Technology</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((s,i)=> (
          <div key={i} className={`rounded-xl border border-cyan-400/10 bg-slate-900/60 p-6 ${s.vis}`}>
            <h3 className="text-white font-semibold">{s.title}</h3>
            <p className="text-slate-300 text-sm mt-1">{s.desc}</p>
            <div className="h-40 mt-4 rounded-lg bg-slate-950/60"/>
          </div>
        ))}
      </div>
    </div>
  );
}
