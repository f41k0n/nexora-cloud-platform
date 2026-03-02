import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard, User, Settings, LogOut, Bell, ChevronDown,
  Activity, TrendingUp, Users, Database, Save, Menu, X
} from "lucide-react";

type Tab = "overview" | "profile" | "settings";

const activityData = [
  { action: "Deployed analytics pipeline", time: "2 min ago", status: "success" },
  { action: "Updated team permissions", time: "1 hour ago", status: "success" },
  { action: "Generated monthly report", time: "3 hours ago", status: "success" },
  { action: "Connected new data source", time: "Yesterday", status: "success" },
  { action: "Invited team member", time: "2 days ago", status: "success" },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profile, setProfile] = useState({ username: "johndoe", bio: "Data engineer passionate about cloud analytics and scalable systems." });
  const [saved, setSaved] = useState(false);
  const navigate = useNavigate();

  const sidebarItems: { icon: typeof LayoutDashboard; label: string; tab: Tab }[] = [
    { icon: LayoutDashboard, label: "Overview", tab: "overview" },
    { icon: User, label: "Profile", tab: "profile" },
    { icon: Settings, label: "Settings", tab: "settings" },
  ];

  const stats = [
    { icon: Activity, label: "Queries Today", value: "1,284", change: "+12%" },
    { icon: TrendingUp, label: "Data Processed", value: "847 GB", change: "+8.3%" },
    { icon: Users, label: "Team Members", value: "24", change: "+2" },
    { icon: Database, label: "Data Sources", value: "12", change: "+1" },
  ];

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-sidebar border-r border-sidebar-border flex flex-col transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="h-16 flex items-center px-6 border-b border-sidebar-border">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
              <span className="text-primary-foreground font-bold text-xs">N</span>
            </div>
            <span className="font-semibold text-foreground">Nexora Cloud</span>
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {sidebarItems.map((item) => (
            <button key={item.tab} onClick={() => { setActiveTab(item.tab); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === item.tab ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'text-sidebar-foreground hover:bg-sidebar-accent/50'}`}>
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-sidebar-border">
          <button onClick={() => navigate("/")}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors">
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </aside>

      {sidebarOpen && <div className="fixed inset-0 z-30 bg-background/60 backdrop-blur-sm lg:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Main */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        {/* Top bar */}
        <header className="h-16 border-b border-border flex items-center justify-between px-6 bg-background/80 backdrop-blur-xl sticky top-0 z-20">
          <button className="lg:hidden text-foreground" onClick={() => setSidebarOpen(true)}>
            <Menu size={22} />
          </button>
          <div className="hidden lg:block text-sm text-muted-foreground">
            {activeTab === "overview" && "Dashboard Overview"}
            {activeTab === "profile" && "Profile Settings"}
            {activeTab === "settings" && "Account Settings"}
          </div>
          <div className="flex items-center gap-4">
            <button className="text-muted-foreground hover:text-foreground transition-colors relative">
              <Bell size={18} />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary" />
            </button>
            <div className="relative">
              <button onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 text-sm text-foreground hover:text-foreground/80 transition-colors">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-xs font-semibold">JD</span>
                </div>
                <span className="hidden sm:inline">{profile.username}</span>
                <ChevronDown size={14} />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 top-12 w-48 glass-card py-2 z-50">
                  <button onClick={() => { setActiveTab("profile"); setDropdownOpen(false); }}
                    className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-secondary/50 transition-colors">Profile</button>
                  <button onClick={() => { setActiveTab("settings"); setDropdownOpen(false); }}
                    className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-secondary/50 transition-colors">Settings</button>
                  <hr className="my-1 border-border" />
                  <button onClick={() => navigate("/")}
                    className="w-full text-left px-4 py-2 text-sm text-destructive hover:bg-secondary/50 transition-colors">Sign Out</button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 md:p-8">
          {activeTab === "overview" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
              <h1 className="text-2xl font-bold text-foreground mb-6">Welcome back, {profile.username}</h1>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {stats.map((s) => (
                  <div key={s.label} className="glass-card p-5 group hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <s.icon size={18} className="text-muted-foreground" />
                      <span className="text-xs text-success font-medium">{s.change}</span>
                    </div>
                    <p className="text-2xl font-bold text-foreground">{s.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="glass-card overflow-hidden">
                <div className="px-6 py-4 border-b border-border">
                  <h2 className="font-semibold text-foreground">Recent Activity</h2>
                </div>
                <div className="divide-y divide-border">
                  {activityData.map((a, i) => (
                    <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-secondary/30 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="glow-dot" />
                        <span className="text-sm text-foreground">{a.action}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{a.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "profile" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="max-w-2xl">
              <h1 className="text-2xl font-bold text-foreground mb-6">Edit Profile</h1>
              <div className="glass-card p-8 space-y-6">
                <div className="flex items-center gap-5 mb-2">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-xl font-bold">JD</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{profile.username}</p>
                    <p className="text-sm text-muted-foreground">Free Plan</p>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Username</label>
                  <input type="text" value={profile.username} onChange={e => setProfile({ ...profile, username: e.target.value })}
                    className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Bio</label>
                  <textarea rows={3} value={profile.bio} onChange={e => setProfile({ ...profile, bio: e.target.value })}
                    className="input-field resize-none" />
                </div>
                <button onClick={handleSave} className="btn-primary py-2.5 px-6 flex items-center gap-2">
                  <Save size={16} />
                  {saved ? "Saved!" : "Save Changes"}
                </button>
              </div>
            </motion.div>
          )}

          {activeTab === "settings" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="max-w-2xl">
              <h1 className="text-2xl font-bold text-foreground mb-6">Settings</h1>
              <div className="space-y-5">
                <div className="glass-card p-6">
                  <h3 className="font-semibold text-foreground mb-1">Email Notifications</h3>
                  <p className="text-sm text-muted-foreground mb-4">Manage how you receive notifications.</p>
                  {["Product updates", "Security alerts", "Weekly digest"].map((n) => (
                    <label key={n} className="flex items-center justify-between py-3 border-b border-border last:border-0 cursor-pointer">
                      <span className="text-sm text-foreground">{n}</span>
                      <input type="checkbox" defaultChecked className="w-4 h-4 rounded accent-primary" />
                    </label>
                  ))}
                </div>
                <div className="glass-card p-6">
                  <h3 className="font-semibold text-foreground mb-1">Danger Zone</h3>
                  <p className="text-sm text-muted-foreground mb-4">Irreversible account actions.</p>
                  <button className="px-4 py-2 rounded-lg border border-destructive/50 text-destructive text-sm hover:bg-destructive/10 transition-colors">
                    Delete Account
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
