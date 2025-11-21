import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { ProductShowcase, FeatureGrid, Reviews, ColdComparison, StoryTeaser } from "./components/Sections";
import Shop from "./components/Shop";
import ProductPage from "./components/ProductPage";
import Technology from "./components/Technology";
import { About, Sustainability, Sizing, FAQ, Contact, Checkout } from "./components/StaticPages";

function Home(){
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <Navbar/>
      <Hero onShop={()=>navigate('/shop')} onTech={()=>navigate('/technology')} />
      <ProductShowcase/>
      <FeatureGrid/>
      <Reviews/>
      <ColdComparison/>
      <StoryTeaser/>
      <footer className="py-10 text-center text-slate-400 text-sm">© {new Date().getFullYear()} Amberarctic</footer>
    </div>
  );
}

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Page><Shop/></Page>} />
        <Route path="/product/:slug" element={<Page><ProductPage/></Page>} />
        <Route path="/technology" element={<Page><Technology/></Page>} />
        <Route path="/about" element={<Page><About/></Page>} />
        <Route path="/sustainability" element={<Page><Sustainability/></Page>} />
        <Route path="/sizing" element={<Page><Sizing/></Page>} />
        <Route path="/faq" element={<Page><FAQ/></Page>} />
        <Route path="/contact" element={<Page><Contact/></Page>} />
        <Route path="/checkout" element={<Page><Checkout/></Page>} />
      </Routes>
    </BrowserRouter>
  );
}

function Page({children}){
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <Navbar/>
      <div className="pt-16">{children}</div>
    </div>
  );
}
