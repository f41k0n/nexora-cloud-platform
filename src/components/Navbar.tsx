import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: "Home", to: "/" },
    { label: "Features", to: "/#features" },
    { label: "Pricing", to: "/#pricing" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/80">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
            <span className="text-primary-foreground font-bold text-sm">N</span>
          </div>
          <span className="font-semibold text-lg text-foreground">Nexora Cloud</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="nav-link">{l.label}</Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/login" className="btn-ghost text-sm py-2 px-4">Log in</Link>
          <Link to="/register" className="btn-primary text-sm py-2 px-5">Get Started</Link>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl px-6 py-4 space-y-3">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="block nav-link py-2" onClick={() => setMobileOpen(false)}>{l.label}</Link>
          ))}
          <div className="pt-3 border-t border-border space-y-2">
            <Link to="/login" className="block text-center btn-ghost text-sm py-2" onClick={() => setMobileOpen(false)}>Log in</Link>
            <Link to="/register" className="block text-center btn-primary text-sm py-2" onClick={() => setMobileOpen(false)}>Get Started</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
