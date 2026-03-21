import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  GraduationCap, Menu, X, Phone, Mail, MapPin,
  Facebook, Instagram, Youtube, Twitter, MessageCircle,
  ChevronDown, ArrowRight,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdown(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const isActive = (href: string) => href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <div style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }} className="bg-[#060B18] text-white min-h-screen">
      {/* ── NAVBAR ── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#060B18]/96 backdrop-blur-xl border-b border-white/[0.07] shadow-2xl" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0 mt-2 ml-5 ">
               <img width={100} height={100}  src="..\assets\sankalplogo_page-0001.png"></img>
              
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label} className="relative" onMouseEnter={() => setDropdown(item.label)} onMouseLeave={() => setDropdown(null)}>
                    <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.05] transition-all duration-200">
                      {item.label}
                      <ChevronDown size={13} className={`transition-transform duration-200 ${dropdown === item.label ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {dropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 6, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.97 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-1 w-52 bg-[#0D1425]/98 backdrop-blur-xl border border-white/[0.1] rounded-2xl shadow-2xl shadow-black/50 overflow-hidden py-2"
                        >
                          {item.children.map((c) => (
                            <Link key={c.label} to={c.href} className={`flex items-center gap-2 px-4 py-2.5 text-sm transition-colors ${isActive(c.href) ? "text-violet-400 bg-violet-500/10" : "text-slate-300 hover:text-white hover:bg-white/[0.05]"}`}>
                              <span className="w-1.5 h-1.5 bg-violet-500 rounded-full flex-shrink-0" />
                              {c.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link key={item.label} to={item.href} className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive(item.href) ? "text-violet-400 bg-violet-500/10" : "text-slate-300 hover:text-white hover:bg-white/[0.05]"}`}>
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <Link to="/contact" className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-105 transition-all duration-200">
                <Phone size={14} /> Book Demo
              </Link>
              <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden w-10 h-10 bg-white/[0.06] border border-white/[0.08] rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors">
                {mobileOpen ? <X size={19} /> : <Menu size={19} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-[#0A1020]/98 backdrop-blur-xl border-t border-white/[0.06]"
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      to={item.children ? "/" : item.href}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${isActive(item.href) ? "text-violet-400 bg-violet-500/10" : "text-slate-300 hover:text-white hover:bg-white/[0.05]"}`}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="ml-4 flex flex-col gap-0.5 mt-0.5 mb-1">
                        {item.children.map((c) => (
                          <Link key={c.label} to={c.href} className="block px-4 py-2 text-xs text-slate-500 hover:text-slate-300 rounded-lg hover:bg-white/[0.04] transition-colors">
                            → {c.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-2">
                  <Link to="/contact" className="flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-5 py-3.5 rounded-xl text-sm font-semibold">
                    <Phone size={15} /> Book a Free Demo Class
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Page Content */}
      <main>
        <Outlet />
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-[#06090F] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <Link to="/" className="flex items-center m-0">
             <div className="-mt-18 mb-2">
  <img 
    width={260} 
    height={260} 
    src="/assets/sankalplogo_page-0001.png" 
    alt="Sankalp Home Tuition Ranchi Logo"
    className="object-contain"
  />
</div>
              </Link>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">Ranchi's most trusted home tuition service. Empowering students from Class 1–12 and competitive exam aspirants since 2010.</p>
              <div className="flex gap-2.5">
                {[
                  { Icon: Facebook, cls: "hover:bg-blue-500/15 hover:text-blue-400" },
                  { Icon: Instagram, cls: "hover:bg-pink-500/15 hover:text-pink-400" },
                  { Icon: Youtube, cls: "hover:bg-red-500/15 hover:text-red-400" },
                  { Icon: Twitter, cls: "hover:bg-sky-500/15 hover:text-sky-400" },
                ].map(({ Icon, cls }, i) => (
                  <a key={i} href="#" className={`w-9 h-9 bg-white/[0.04] border border-white/[0.08] rounded-lg flex items-center justify-center text-slate-500 transition-all duration-200 ${cls}`}>
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-[0.15em]">Quick Links</h4>
              <ul className="flex flex-col gap-2">
                {[["Home", "/"], ["Services", "/services"], ["About Us", "/about"], ["Contact", "/contact"]].map(([label, href]) => (
                  <li key={label}>
                    <Link to={href} className="text-slate-500 hover:text-violet-400 text-sm transition-colors flex items-center gap-2 group">
                      <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-[0.15em]">Services</h4>
              <ul className="flex flex-col gap-2">
                {["Home Tuition (Class 1–12)", "Online Live Classes", "Group Batch Classes", "JEE / NEET Coaching", "Board Exam Coaching", "Mathematics Expert", "Science & Chemistry", "English & SST"].map((s) => (
                  <li key={s} className="text-slate-500 text-sm flex items-center gap-2 hover:text-slate-300 transition-colors cursor-pointer">
                    <span className="w-1 h-1 bg-amber-500 rounded-full flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-[0.15em]">Contact</h4>
              <div className="flex flex-col gap-4">
                {[
                  { Icon: MapPin, text: "IndraPuri Ratu Road, Ranchi, Jharkhand – 834001", col: "text-violet-400" },
                  { Icon: Phone, text: "+91 9431526500", col: "text-emerald-400" },
                  { Icon: Mail, text: "info@sankalptuition.in", col: "text-amber-400" },
                ].map(({ Icon, text, col }) => (
                  <div key={text} className="flex gap-3 items-start">
                    <div className={`w-8 h-8 flex-shrink-0 bg-white/[0.04] rounded-lg flex items-center justify-center ${col}`}>
                      <Icon size={14} />
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-emerald-500/5 border border-emerald-500/15 rounded-xl">
                <p className="text-emerald-400 text-xs font-semibold mb-1">WhatsApp Us</p>
                <a href="https://wa.me/9431526500" className="text-slate-400 text-sm hover:text-emerald-400 transition-colors">+91 9431526500</a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-600 text-sm">© 2026 Sankalp Home Tuition, Ranchi, Jharkhand. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Privacy Policy", "Terms of Service", "Refund Policy"].map((item) => (
                <a key={item} href="#" className="text-slate-600 hover:text-violet-400 text-xs transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/9431526500"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      >
        <MessageCircle size={26} className="text-white fill-white" />
        <motion.div className="absolute inset-0 rounded-full bg-[#25D366]" animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
      </motion.a>
    </div>
  );
}
