import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, BarChart3, Zap, Lock, Globe, Layers, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const features = [
  { icon: Shield, title: "Enterprise Security", desc: "SOC 2 compliant infrastructure with end-to-end encryption for all your data." },
  { icon: BarChart3, title: "Real-time Analytics", desc: "Live dashboards and custom reports that update in real-time as data flows in." },
  { icon: Zap, title: "Lightning Fast", desc: "Sub-second query performance on billions of rows with our optimized engine." },
  { icon: Lock, title: "Access Control", desc: "Granular role-based permissions to manage who sees what across your org." },
  { icon: Globe, title: "Global CDN", desc: "Data replicated across 30+ regions for fast access from anywhere in the world." },
  { icon: Layers, title: "Integrations", desc: "Connect with 200+ tools including Slack, Jira, and your existing data stack." },
];

const testimonials = [
  { name: "Sarah Chen", role: "VP of Engineering, Meridian", quote: "Nexora Cloud transformed how our team handles data. The insights are incredible." },
  { name: "James Mitchell", role: "CTO, Arcline Systems", quote: "We reduced our analytics pipeline costs by 60% after migrating to Nexora." },
  { name: "Priya Sharma", role: "Head of Data, Flowbase", quote: "The real-time dashboards are a game-changer for our product decisions." },
];

const Landing = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]" style={{ background: 'var(--gradient-primary)' }} />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground mb-8">
          <span className="glow-dot" />
          Now in General Availability
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          Secure Data.{" "}
          <span className="gradient-text">Smart Insights.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          The cloud analytics platform built for teams who need powerful insights without compromising on security or performance.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/register" className="btn-primary text-base px-8 py-3 flex items-center gap-2">
            Start Free Trial <ArrowRight size={16} />
          </Link>
          <a href="#features" className="btn-ghost text-base px-8 py-3">See Features</a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 md:mt-24 glass-card p-1 max-w-3xl mx-auto">
          <div className="rounded-lg bg-card p-6 md:p-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-warning/60" />
              <div className="w-3 h-3 rounded-full bg-success/60" />
            </div>
            <div className="grid grid-cols-3 gap-4 text-left">
              {[{ label: "Active Users", value: "12,847", change: "+14.2%" },
                { label: "Data Processed", value: "2.4 PB", change: "+8.7%" },
                { label: "Avg. Latency", value: "23ms", change: "-12.1%" }].map((m) => (
                <div key={m.label} className="p-4 rounded-lg bg-secondary/50">
                  <p className="text-xs text-muted-foreground mb-1">{m.label}</p>
                  <p className="text-xl font-semibold text-foreground">{m.value}</p>
                  <p className={`text-xs mt-1 ${m.change.startsWith('+') ? 'text-success' : 'text-accent'}`}>{m.change}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Features */}
    <section id="features" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16">
          <motion.p variants={fadeUp} custom={0} className="text-primary text-sm font-medium mb-3">FEATURES</motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold text-foreground mb-4">Everything you need to scale</motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-muted-foreground max-w-xl mx-auto">Built for teams that need enterprise-grade analytics with the simplicity of modern tooling.</motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div key={f.title} variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              className="glass-card p-6 group hover:border-primary/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <motion.p variants={fadeUp} custom={0} className="text-primary text-sm font-medium mb-3">TESTIMONIALS</motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold text-foreground">Trusted by leading teams</motion.h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="glass-card p-6">
              <p className="text-foreground text-sm leading-relaxed mb-6">"{t.quote}"</p>
              <div>
                <p className="font-medium text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Ready to get started?
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Join thousands of teams already using Nexora Cloud. Start your free trial today.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <Link to="/register" className="btn-primary text-base px-8 py-3 inline-flex items-center gap-2">
            Start Free Trial <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Landing;
