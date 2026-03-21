import { useRef } from "react";
import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import { Home, Monitor, Users, BookOpen, FlaskConical, Calculator, Globe, Zap, CheckCircle2, ArrowRight, Phone, Star, Clock, Target, Brain } from "lucide-react";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px 0px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

function PageHero({ badge, title, highlight, desc }: { badge: string; title: string; highlight: string; desc: string }) {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#060B18] via-[#08102A] to-[#060B18]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-violet-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.span initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
          {badge}
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="text-white font-black mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}>
          {title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">{highlight}</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.2 }} className="text-slate-400 max-w-2xl mx-auto leading-relaxed text-sm">{desc}</motion.p>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    icon: Home, title: "Home Tuition", color: "from-violet-500 to-indigo-600", glow: "shadow-violet-500/20",
    desc: "Our most popular service. An expert teacher comes to your home for personalized, one-on-one sessions tailored to your child's syllabus and pace.",
    features: ["Personalized attention", "Comfort of home learning", "Flexible timing", "All boards (CBSE, ICSE, JAC)", "Regular progress reports"],
    badge: "Most Popular",
  },
  {
    icon: Monitor, title: "Online Live Classes", color: "from-cyan-500 to-blue-600", glow: "shadow-cyan-500/20",
    desc: "High-quality live video sessions with interactive whiteboards, screen sharing, and real-time doubt clearing — from anywhere in Jharkhand.",
    features: ["Live interactive sessions", "Recorded class access", "Interactive whiteboard", "Chat & doubt clearing", "Screen sharing & demos"],
    badge: "Trending",
  },
  {
    icon: Users, title: "Group Classes", color: "from-amber-500 to-orange-500", glow: "shadow-amber-500/20",
    desc: "Small group batches of 5–8 students for a collaborative, peer-learning experience at significantly lower cost without compromising quality.",
    features: ["Small batches (5–8 students)", "Peer learning benefits", "Affordable pricing", "Competitive environment", "Weekly assessments"],
    badge: "Affordable",
  },
];

const CLASS_CATS = [
  { label: "Class 1–5", desc: "Foundation building with fun, engaging lessons in core subjects.", icon: BookOpen, color: "from-pink-500 to-rose-500" },
  { label: "Class 6–8", desc: "Strengthening concepts in Maths, Science, English, and Social Studies.", icon: Calculator, color: "from-violet-500 to-indigo-500" },
  { label: "Class 9–10", desc: "Board exam preparation with model papers and intensive revision.", icon: Target, color: "from-amber-500 to-orange-500" },
  { label: "Class 11–12", desc: "Advanced coaching for Physics, Chemistry, Mathematics, and Biology.", icon: FlaskConical, color: "from-emerald-500 to-teal-500" },
  { label: "JEE Preparation", desc: "Comprehensive preparation for IIT-JEE Mains & Advanced.", icon: Brain, color: "from-cyan-500 to-blue-500" },
  { label: "NEET Preparation", desc: "Biology, Physics & Chemistry coaching for NEET aspirants.", icon: Zap, color: "from-red-500 to-rose-500" },
];

const HOW_IT_WORKS = [
  { step: "01", title: "Book a Demo", desc: "Call or WhatsApp us to schedule a free demo class at your convenience." },
  { step: "02", title: "Meet Your Teacher", desc: "We match you with the best-fit teacher based on your subject, level, and goals." },
  { step: "03", title: "Start Learning", desc: "Sessions begin at your home or online as per your preferred schedule." },
  { step: "04", title: "Track Progress", desc: "Monthly reports and parent-teacher meetings to monitor improvement." },
];

const PRICING = [
  { name: "Basic", price: "₹1,500", period: "/month", desc: "Perfect for one subject, 3 sessions per week.", features: ["1 Subject", "3 Sessions/Week (1hr each)", "Study Materials Included", "Monthly Progress Report", "WhatsApp Support"], highlight: false, color: "from-slate-600 to-slate-700" },
  { name: "Standard", price: "₹2,800", period: "/month", desc: "Most popular for Class 6–10 students.", features: ["2 Subjects", "4 Sessions/Week (1hr each)", "All Study Materials", "Bi-weekly Progress Report", "Parent-Teacher Call", "Mock Tests Included"], highlight: true, color: "from-violet-600 to-indigo-600" },
  { name: "Premium", price: "₹4,500", period: "/month", desc: "Full support for Class 11–12 & competitive exams.", features: ["All Subjects", "Daily Sessions Available", "Premium Study Material", "Weekly Progress Reports", "Dedicated Mentor", "Unlimited Mock Tests", "24/7 WhatsApp Support"], highlight: false, color: "from-amber-500 to-orange-500" },
];

export function ServicesPage() {
  return (
    <div>
      <PageHero badge="Our Services" title="Tailored Learning" highlight="For Every Student" desc="From home tuition to competitive exam coaching — we have a learning solution designed for every student's unique needs and goals." />

      {/* ─── MAIN SERVICES ── */}
      <section className="py-20 px-4 sm:px-6 bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {SERVICES.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.1}>
                <motion.div whileHover={{ y: -6 }} className={`relative group bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 hover:border-white/[0.15] transition-all duration-300 h-full hover:shadow-2xl ${s.glow}`}>
                  {s.badge && <div className={`absolute -top-3 right-6 bg-gradient-to-r ${s.color} text-white text-xs font-bold px-4 py-1 rounded-full`}>{s.badge}</div>}
                  <div className={`w-14 h-14 bg-gradient-to-br ${s.color} rounded-2xl flex items-center justify-center mb-6 shadow-xl`}>
                    <s.icon size={26} className="text-white" />
                  </div>
                  <h3 className="text-white font-black text-xl mb-3">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{s.desc}</p>
                  <ul className="flex flex-col gap-2.5">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-slate-300 text-sm">
                        <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className={`mt-7 flex items-center gap-2 bg-gradient-to-r ${s.color} text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:scale-105 transition-all shadow-lg`}>
                    Get Started <ArrowRight size={14} />
                  </Link>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CLASS CATEGORIES ── */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">Class Categories</span>
            <h2 className="text-white font-black mt-2" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>We Teach <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Every Grade</span></h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CLASS_CATS.map((c, i) => (
              <FadeIn key={c.label} delay={i * 0.07}>
                <motion.div whileHover={{ y: -5 }} className="group bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 hover:border-white/[0.14] transition-all duration-300 cursor-pointer">
                  <div className={`w-11 h-11 bg-gradient-to-br ${c.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <c.icon size={19} className="text-white" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{c.label}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{c.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ── */}
      <section className="py-20 px-4 sm:px-6 bg-[#0A0F1E]">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">Simple Process</span>
            <h2 className="text-white font-black mt-2" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Works</span></h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-violet-500/20">
                    <span className="text-white font-black text-lg">{step.step}</span>
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING ── */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">Pricing Plans</span>
            <h2 className="text-white font-black mt-2" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>Affordable Plans for <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">Every Budget</span></h2>
            <p className="text-slate-400 text-sm mt-3">All plans include a free demo class. No hidden charges.</p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {PRICING.map((plan, i) => (
              <FadeIn key={plan.name} delay={i * 0.1}>
                <div className={`relative rounded-2xl p-8 transition-all duration-300 ${plan.highlight ? "bg-gradient-to-b from-violet-600/20 to-indigo-600/10 border-2 border-violet-500/50 shadow-2xl shadow-violet-500/20" : "bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.15]"}`}>
                  {plan.highlight && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-lg">MOST POPULAR</div>}
                  <div className="mb-6">
                    <span className="text-slate-400 text-xs font-semibold uppercase tracking-widest">{plan.name}</span>
                    <div className="flex items-baseline gap-1 mt-2 mb-2">
                      <span className="text-white font-black" style={{ fontSize: "2.2rem" }}>{plan.price}</span>
                      <span className="text-slate-400 text-sm">{plan.period}</span>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed">{plan.desc}</p>
                  </div>
                  <ul className="flex flex-col gap-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-slate-300 text-sm">
                        <CheckCircle2 size={14} className={plan.highlight ? "text-violet-400" : "text-emerald-400"} /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm transition-all ${plan.highlight ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:opacity-90 shadow-lg shadow-violet-500/30" : "bg-white/[0.06] text-white hover:bg-white/[0.1] border border-white/[0.1]"}`}>
                    Book Demo Class <ArrowRight size={14} />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="text-center mt-8">
            <p className="text-slate-500 text-sm">* Group class and competitive exam coaching prices are separate. <Link to="/contact" className="text-violet-400 hover:underline">Contact us</Link> for a custom quote.</p>
          </FadeIn>
        </div>
      </section>

      {/* ─── CTA ── */}
      <section className="py-16 px-4 sm:px-6 bg-[#0A0F1E]">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="relative bg-gradient-to-br from-violet-600/15 via-[#0D1425] to-indigo-600/15 border border-violet-500/20 rounded-3xl p-10 text-center overflow-hidden">
              <div className="absolute inset-0 bg-violet-600/5 rounded-3xl pointer-events-none" />
              <div className="relative">
                <h2 className="text-white font-black mb-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>Ready to Get Started?</h2>
                <p className="text-slate-400 mb-7 text-sm">Book your free demo class today — zero commitment, pure value.</p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:scale-105 transition-all shadow-xl shadow-violet-500/25">
                  <Phone size={16} /> Book Free Demo Now
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
