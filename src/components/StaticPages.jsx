export function About(){
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="rounded-2xl overflow-hidden border border-cyan-400/10 bg-slate-900/60">
        <div className="h-56 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90"/>
          <div className="absolute bottom-4 left-4 text-white text-3xl font-extrabold tracking-wide">Our Story</div>
        </div>
        <div className="p-6 text-slate-300">
          Born from extreme cold expeditions, Amberarctic was created to deliver warmth without bulk. We fuse advanced thermal engineering with modern techwear design so you can move fast in frozen climates.
        </div>
      </div>
    </div>
  );
}

export function Sustainability(){
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-white text-3xl font-bold mb-4">Sustainability</h1>
      <div className="space-y-4 text-slate-300">
        <p>We source durable materials, minimize waste, and focus on long-lasting build quality to reduce replacements. Our batteries are certified and recyclable in supported regions.</p>
        <p>We work with partners focused on ethical manufacturing and continuous environmental improvements.</p>
      </div>
    </div>
  );
}

export function Sizing(){
  return (
    <div className="max-w-md mx-auto px-6 py-16">
      <h1 className="text-white text-3xl font-bold mb-4">Sizing Guide</h1>
      <SizeForm/>
    </div>
  );
}

function SizeForm(){
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(70);
  const [build, setBuild] = useState("average");
  const [result, setResult] = useState("");
  const backend = import.meta.env.VITE_BACKEND_URL || "";

  async function submit(e){
    e.preventDefault();
    const res = await fetch(`${backend}/size/recommend`, {method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({height_cm: +height, weight_kg: +weight, build})});
    const data = await res.json();
    setResult(data.recommended_size || "");
  }

  return (
    <form onSubmit={submit} className="border border-cyan-400/10 bg-slate-900/60 rounded-xl p-4 space-y-4">
      <div>
        <label className="text-slate-300 text-sm">Height (cm)</label>
        <input className="w-full mt-1 bg-slate-800 text-slate-200 rounded-md p-2" type="number" value={height} onChange={e=>setHeight(e.target.value)} />
      </div>
      <div>
        <label className="text-slate-300 text-sm">Weight (kg)</label>
        <input className="w-full mt-1 bg-slate-800 text-slate-200 rounded-md p-2" type="number" value={weight} onChange={e=>setWeight(e.target.value)} />
      </div>
      <div>
        <label className="text-slate-300 text-sm">Build</label>
        <select className="w-full mt-1 bg-slate-800 text-slate-200 rounded-md p-2" value={build} onChange={e=>setBuild(e.target.value)}>
          <option>slim</option>
          <option>average</option>
          <option>athletic</option>
          <option>broad</option>
        </select>
      </div>
      <button className="w-full px-4 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold">Get Recommendation</button>
      {result && <div className="text-center text-cyan-300">Recommended size: {result}</div>}
    </form>
  );
}

export function FAQ(){
  const items = [
    {q:"How warm are the jackets?", a:"Depending on the model, they are tested from -15°C to -30°C."},
    {q:"How long does the battery last?", a:"From 8 to 12 hours based on heat level and conditions."},
    {q:"Are they washable?", a:"Yes. Remove the battery and wash on gentle cycle."},
    {q:"Is it safe?", a:"Built-in overheat protection and certified components."},
    {q:"Shipping?", a:"Free over $100. Tracked worldwide shipping."},
    {q:"Warranty?", a:"No formal warranty but every item passes strict quality checks."},
  ];
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-white text-3xl font-bold mb-6">FAQ</h1>
      <div className="space-y-3">
        {items.map((it,i)=> (
          <details key={i} className="border border-cyan-400/10 bg-slate-900/60 rounded-lg p-4">
            <summary className="text-white cursor-pointer">{it.q}</summary>
            <p className="text-slate-300 mt-2 text-sm">{it.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

export function Contact(){
  const backend = import.meta.env.VITE_BACKEND_URL || "";
  async function submit(e){
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {name: form.get("name"), email: form.get("email"), message: form.get("message")};
    await fetch(`${backend}/contact`, {method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify(payload)});
    alert("Message sent. We'll get back shortly.");
    e.currentTarget.reset();
  }
  return (
    <div className="max-w-xl mx-auto px-6 py-16">
      <h1 className="text-white text-3xl font-bold mb-6">Contact</h1>
      <form onSubmit={submit} className="border border-cyan-400/10 bg-slate-900/60 rounded-xl p-4 space-y-4 relative overflow-hidden">
        <div className="pointer-events-none absolute -top-20 -right-20 w-60 h-60 rounded-full bg-cyan-500/10 blur-3xl" />
        <div>
          <label className="text-slate-300 text-sm">Name</label>
          <input className="w-full mt-1 bg-slate-800 text-slate-200 rounded-md p-2" name="name" required />
        </div>
        <div>
          <label className="text-slate-300 text-sm">Email</label>
          <input className="w-full mt-1 bg-slate-800 text-slate-200 rounded-md p-2" type="email" name="email" required />
        </div>
        <div>
          <label className="text-slate-300 text-sm">Message</label>
          <textarea className="w-full mt-1 bg-slate-800 text-slate-200 rounded-md p-2 h-28" name="message" required />
        </div>
        <button className="w-full px-4 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold">Send</button>
      </form>
    </div>
  );
}

export function Checkout(){
  const backend = import.meta.env.VITE_BACKEND_URL || "";
  async function submit(e){
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const items = [{product_slug: f.get("product"), size: f.get("size"), color: f.get("color"), quantity: 1}];
    const payload = {
      items,
      email: f.get("email"),
      shipping_name: f.get("name"),
      shipping_address: f.get("address"),
      city: f.get("city"),
      country: f.get("country"),
      postal_code: f.get("postal"),
      total: 0
    };
    await fetch(`${backend}/checkout`, {method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify(payload)});
    alert("Checkout complete (demo). You'll receive a confirmation email.");
    e.currentTarget.reset();
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-white text-3xl font-bold mb-6">Checkout</h1>
      <form onSubmit={submit} className="rounded-2xl border border-cyan-400/10 bg-slate-900/70 backdrop-blur-xl p-6 space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <input name="name" placeholder="Full name" className="bg-slate-800 text-white rounded-md p-3" required />
          <input name="email" type="email" placeholder="Email" className="bg-slate-800 text-white rounded-md p-3" required />
          <input name="address" placeholder="Address" className="bg-slate-800 text-white rounded-md p-3 sm:col-span-2" required />
          <input name="city" placeholder="City" className="bg-slate-800 text-white rounded-md p-3" required />
          <input name="country" placeholder="Country" className="bg-slate-800 text-white rounded-md p-3" required />
          <input name="postal" placeholder="Postal Code" className="bg-slate-800 text-white rounded-md p-3" required />
        </div>
        <div className="grid sm:grid-cols-3 gap-3">
          <input name="product" placeholder="Product slug" className="bg-slate-800 text-white rounded-md p-3" />
          <input name="size" placeholder="Size" className="bg-slate-800 text-white rounded-md p-3" />
          <input name="color" placeholder="Color" className="bg-slate-800 text-white rounded-md p-3" />
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          <input placeholder="Card number (demo)" className="bg-slate-800 text-white rounded-md p-3" />
          <input placeholder="MM/YY (demo)" className="bg-slate-800 text-white rounded-md p-3" />
        </div>
        <button className="w-full mt-2 px-4 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold">Pay Securely</button>
        <div className="text-center text-slate-400 text-xs">SSL secured • Encrypted • Trusted • Frosted UI</div>
      </form>
    </div>
  );
}
