import { Link, NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive ? "text-cyan-300" : "text-slate-200 hover:text-white"
  }`;

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/60 border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-cyan-400 to-blue-500 shadow-[0_0_25px_rgba(56,189,248,0.45)]" />
          <span className="text-white tracking-widest font-extrabold text-lg">AMBERARCTIC</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/shop" className={navLinkClass}>Shop</NavLink>
          <NavLink to="/technology" className={navLinkClass}>Technology</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/sustainability" className={navLinkClass}>Sustainability</NavLink>
          <NavLink to="/sizing" className={navLinkClass}>Sizing</NavLink>
          <NavLink to="/faq" className={navLinkClass}>FAQ</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          <NavLink to="/checkout" className={navLinkClass}>Checkout</NavLink>
        </nav>
      </div>
    </header>
  );
}
