import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
              <span className="text-primary-foreground font-bold text-xs">N</span>
            </div>
            <span className="font-semibold text-foreground">Nexora Cloud</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Secure data analytics platform for modern teams.
          </p>
        </div>
        <div>
          <h4 className="font-medium text-foreground text-sm mb-4">Product</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground transition-colors">Features</Link></li>
            <li><Link to="/" className="hover:text-foreground transition-colors">Pricing</Link></li>
            <li><Link to="/" className="hover:text-foreground transition-colors">Security</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-foreground text-sm mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground transition-colors">About</Link></li>
            <li><Link to="/" className="hover:text-foreground transition-colors">Blog</Link></li>
            <li><Link to="/" className="hover:text-foreground transition-colors">Careers</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-foreground text-sm mb-4">Legal</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground transition-colors">Privacy</Link></li>
            <li><Link to="/" className="hover:text-foreground transition-colors">Terms</Link></li>
            <li><Link to="/" className="hover:text-foreground transition-colors">DPA</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-xs">© 2026 Nexora Cloud. All rights reserved.</p>
        <div className="flex items-center gap-5">
          {["Twitter", "GitHub", "LinkedIn"].map((s) => (
            <a key={s} href="#" className="text-muted-foreground hover:text-foreground text-xs transition-colors">{s}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
