import { useRef, useState, useEffect } from "react";
import { Link } from "react-router";
import { motion, useInView, AnimatePresence } from "motion/react";
import {
  BookOpen, GraduationCap, Calculator, FlaskConical, Globe,
  Star, Users, TrendingUp, Award, Clock, Phone, ArrowRight,
  ChevronLeft, ChevronRight, CheckCircle2, Zap, Target, Brain,
  Sparkles, Trophy, BookMarked, Play, ChevronDown,
} from "lucide-react";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

const STATS = [
  { value: "2000+", label: "Students Taught", icon: Users, color: "from-violet-500 to-indigo-600" },
  { value: "98%", label: "Success Rate", icon: Trophy, color: "from-amber-500 to-orange-500" },
  { value: "50+", label: "Expert Teachers", icon: GraduationCap, color: "from-emerald-500 to-teal-500" },
  { value: "15+", label: "Years Excellence", icon: Award, color: "from-pink-500 to-rose-500" },
];

const FEATURES = [
  { icon: Target, title: "Personalized Learning", desc: "One-on-one attention tailored to each student's pace, learning style, and academic goals.", color: "from-violet-500 to-indigo-600" },
  { icon: Brain, title: "Expert Faculty", desc: "Highly qualified teachers with 5–20 years of experience in their respective subjects.", color: "from-amber-500 to-orange-500" },
  { icon: TrendingUp, title: "Proven Results", desc: "Consistent 98% success rate with top scores in board exams and competitive tests.", color: "from-emerald-500 to-teal-500" },
  { icon: Clock, title: "Flexible Schedule", desc: "Choose your preferred time slots. We work around your school timetable seamlessly.", color: "from-pink-500 to-rose-500" },
  { icon: BookOpen, title: "Free Study Materials", desc: "Comprehensive notes, practice papers, and mock tests provided at no extra cost.", color: "from-cyan-500 to-blue-500" },
  { icon: Zap, title: "Progress Tracking", desc: "Regular assessments and parent feedback reports to monitor every milestone.", color: "from-yellow-500 to-amber-500" },
];

const COURSES = [
  { title: "Mathematics", class: "Class 6–12", icon: Calculator, color: "from-violet-500 to-indigo-600", students: 450 },
  { title: "Science", class: "Class 6–10", icon: FlaskConical, color: "from-emerald-500 to-teal-500", students: 380 },
  { title: "English", class: "Class 1–12", icon: BookOpen, color: "from-blue-500 to-cyan-500", students: 520 },
  { title: "Physics", class: "Class 11–12", icon: Zap, color: "from-amber-500 to-orange-500", students: 290 },
  { title: "Chemistry", class: "Class 11–12", icon: FlaskConical, color: "from-pink-500 to-rose-500", students: 270 },
  { title: "Social Studies", class: "Class 6–10", icon: Globe, color: "from-cyan-500 to-blue-600", students: 340 },
];

const TEACHERS = [
  { name: "Dr. Rajesh Kumar", subject: "Mathematics", exp: "15 Years", rating: 4.9, img: "https://images.unsplash.com/photo-1758685848001-0396a85ba84f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
  { name: "Priya Sharma", subject: "Science & Biology", exp: "10 Years", rating: 4.8, img: "https://images.unsplash.com/photo-1746513534315-caa52d3f462c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
  { name: "Amit Verma", subject: "Physics & Chemistry", exp: "12 Years", rating: 4.9, img: "https://images.unsplash.com/photo-1758685848697-b5fb55f87407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
  { name: "Neha Singh", subject: "English & SST", exp: "8 Years", rating: 4.7, img: "https://images.unsplash.com/photo-1669659033487-203d254e35a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
];

const TESTIMONIALS = [
  { name: "Rahul Mehta", role: "Class 10 Student", text: "Thanks to Sankalp's personalized teaching, I scored 95% in my board exams! Dr. Kumar's one-on-one attention is truly exceptional.", rating: 5, avatar: "RM" },
  { name: "Priya Agarwal", role: "Parent of Class 8 Student", text: "My daughter's confidence in Mathematics improved dramatically. The teachers are patient, knowledgeable, and genuinely dedicated.", rating: 5, avatar: "PA" },
  { name: "Arjun Singh", role: "JEE Aspirant 2024", text: "Cleared JEE Mains with AIR 2345! The systematic approach and regular mock tests at Sankalp made all the difference.", rating: 5, avatar: "AS" },
  { name: "Sunita Devi", role: "Parent of Class 5 Student", text: "My son used to hate studying. Now he actually looks forward to every session! The transformation has been incredible.", rating: 5, avatar: "SD" },
  { name: "Kavya Sharma", role: "Class 12 Student", text: "Scored 98 in Chemistry and 96 in Physics! Amit sir's teaching method is unique and very effective. Best investment ever!", rating: 5, avatar: "KS" },
];

const FLOATING = [
  { icon: GraduationCap, color: "bg-violet-600", x: "8%", y: "22%", delay: 0 },
  { icon: BookOpen, color: "bg-amber-500", x: "87%", y: "28%", delay: 0.6 },
  { icon: Calculator, color: "bg-emerald-500", x: "12%", y: "68%", delay: 1.1 },
  { icon: FlaskConical, color: "bg-pink-500", x: "82%", y: "65%", delay: 0.4 },
  { icon: Trophy, color: "bg-blue-500", x: "50%", y: "8%", delay: 0.9 },
  { icon: Star, color: "bg-orange-500", x: "68%", y: "82%", delay: 1.4 },
];

export function HomePage() {
  const [activeT, setActiveT] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveT((p) => (p + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      {/* ─── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#060B18] via-[#08102A] to-[#060B18]" />
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "55px 55px" }} />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Floating icons */}
        {FLOATING.map((f, i) => (
          <motion.div
            key={i}
            className={`absolute ${f.color} w-12 h-12 rounded-2xl items-center justify-center shadow-2xl hidden lg:flex`}
            style={{ left: f.x, top: f.y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0.7, 1, 0.7], scale: 1, y: [0, -14, 0] }}
            transition={{ opacity: { duration: 3, repeat: Infinity, delay: f.delay }, y: { duration: 3.5 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: f.delay }, scale: { duration: 0.5, delay: f.delay + 0.5 } }}
          >
            <f.icon size={22} className="text-white" />
          </motion.div>
        ))}

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold px-5 py-2 rounded-full uppercase tracking-widest mb-7">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Ranchi's #1 Home Tuition Service · Est. 2010
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} className="text-white font-black leading-[1.08] mb-6" style={{ fontSize: "clamp(2.6rem, 6.5vw, 5.2rem)" }}>
            Best Home Tuition<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-violet-500">in Ranchi</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed" style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)" }}>
            Empowering students from Class 1–12 and competitive exam aspirants with personalized home tuition, expert teachers, and life-changing academic results in Ranchi, Jharkhand.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="group flex items-center gap-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white px-8 py-4 rounded-2xl font-semibold text-base shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105 transition-all duration-300">
              <Phone size={17} /> Book Free Demo Class
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/courses" className="group flex items-center gap-2.5 bg-white/[0.05] border border-white/[0.12] text-white hover:bg-white/[0.09] px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300">
              <Play size={15} fill="currentColor" /> Explore Courses
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[["2000+ Students", Users], ["98% Success Rate", Trophy], ["Free Demo Class", CheckCircle2], ["15+ Years Exp", Award]].map(([label, Icon]: any) => (
              <div key={label} className="flex items-center gap-2 text-slate-400 text-sm">
                <Icon size={14} className="text-violet-400" /> {label}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600">
          <span className="text-[10px] uppercase tracking-[0.2em]">Discover</span>
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.4, repeat: Infinity }}><ChevronDown size={16} /></motion.div>
        </motion.div>
      </section>

      {/* ─── STATS ──────────────────────────────────────────────────────── */}
      <section className="bg-[#0A0F1E] border-y border-white/[0.05] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.1} className="text-center">
                <div className={`w-14 h-14 bg-gradient-to-br ${s.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <s.icon size={24} className="text-white" />
                </div>
                <div className="text-white font-black mb-1" style={{ fontSize: "2.2rem" }}>{s.value}</div>
                <div className="text-slate-400 text-sm">{s.label}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES ────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-600/4 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4"><Sparkles size={11} /> Why Choose Sankalp</span>
            <h2 className="text-white font-black mt-3 mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
              Everything You Need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">Excel Academically</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">We combine expert teaching, personalized attention, and proven methodologies to deliver outstanding academic results.</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.07}>
                <motion.div whileHover={{ y: -6 }} className="group bg-white/[0.03] border border-white/[0.07] rounded-2xl p-7 hover:border-violet-500/25 hover:bg-white/[0.05] transition-all duration-300 cursor-default h-full">
                  <div className={`w-12 h-12 bg-gradient-to-br ${f.color} rounded-xl flex items-center justify-center mb-5 shadow-lg`}>
                    <f.icon size={21} className="text-white" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{f.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── IMAGE SHOWCASE ───────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <span className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5"><BookMarked size={11} /> Our Teaching Approach</span>
              <h2 className="text-white font-black mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
                Learning That Happens <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">At Your Doorstep</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6 text-sm">Our teachers come to your home, creating a familiar, distraction-free learning environment where students feel comfortable to ask questions freely and learn at their own pace.</p>
              <ul className="flex flex-col gap-3 mb-8">
                {["Certified teachers with verified backgrounds", "Customized syllabus for each student", "Regular parent-teacher communication", "100% Satisfaction Guarantee"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                    <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:scale-105 transition-all shadow-lg shadow-amber-500/25">
                Learn About Us <ArrowRight size={15} />
              </Link>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-indigo-500/20 rounded-3xl blur-xl" />
                <img src="https://images.unsplash.com/photo-1758685733907-42e9651721f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" alt="Teacher tutoring student" className="relative rounded-3xl w-full object-cover h-96 shadow-2xl shadow-violet-500/10 border border-white/[0.08]" />
                <div className="absolute -bottom-5 -left-5 bg-[#0D1425] border border-white/[0.1] rounded-2xl px-5 py-4 shadow-xl">
                  <div className="text-white font-black text-2xl">98%</div>
                  <div className="text-slate-400 text-xs">Student Success Rate</div>
                </div>
                <div className="absolute -top-5 -right-5 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl px-5 py-4 shadow-xl">
                  <div className="text-white font-black text-2xl">2000+</div>
                  <div className="text-white/80 text-xs">Happy Students</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── COURSES ─────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
            <div>
              <span className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3"><BookMarked size={11} /> Popular Courses</span>
              <h2 className="text-white font-black" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}>Start Learning Today</h2>
            </div>
            <Link to="/courses" className="flex items-center gap-2 text-violet-400 hover:text-white text-sm font-semibold border border-violet-500/30 px-5 py-2.5 rounded-xl hover:border-violet-400/50 hover:bg-violet-500/10 transition-all">
              View All <ArrowRight size={14} />
            </Link>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {COURSES.map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.07}>
                <motion.div whileHover={{ y: -5, scale: 1.01 }} className="group bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 hover:border-white/[0.14] transition-all duration-300 cursor-pointer">
                  <div className={`w-12 h-12 bg-gradient-to-br ${c.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <c.icon size={21} className="text-white" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-1">{c.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{c.class}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-slate-500 text-xs"><Users size={11} /> {c.students} Students</div>
                    <Link to="/contact" className="text-violet-400 hover:text-violet-300 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Enroll <ArrowRight size={12} />
                    </Link>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEACHERS PREVIEW ────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4"><GraduationCap size={11} /> Expert Faculty</span>
            <h2 className="text-white font-black mt-2" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}>
              Learn From the Best in <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Ranchi</span>
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEACHERS.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <motion.div whileHover={{ y: -8 }} className="group bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-emerald-500/20 transition-all duration-300">
                  <div className="relative h-52 overflow-hidden">
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060B18] via-transparent" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-amber-500/90 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                      <Star size={10} fill="white" /> {t.rating}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-white font-bold text-sm mb-1">{t.name}</h3>
                    <p className="text-violet-400 text-xs font-medium mb-2">{t.subject}</p>
                    <div className="flex items-center gap-1 text-slate-500 text-xs"><Clock size={10} /> {t.exp} Experience</div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="text-center mt-10">
            <Link to="/teachers" className="inline-flex items-center gap-2 text-violet-400 hover:text-white font-semibold border border-violet-500/30 hover:border-violet-400/50 hover:bg-violet-500/10 px-7 py-3 rounded-xl transition-all text-sm">
              Meet All Teachers <ArrowRight size={15} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ─── TESTIMONIALS ────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 border-y border-white/[0.05]">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4"><Star size={11} /> Student Reviews</span>
            <h2 className="text-white font-black mt-2" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}>What Our Students & Parents Say</h2>
          </FadeIn>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div key={activeT} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4 }} className="bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 md:p-12 text-center">
                <div className="flex justify-center mb-5">
                  {[...Array(TESTIMONIALS[activeT].rating)].map((_, i) => <Star key={i} size={18} fill="#F59E0B" className="text-amber-400" />)}
                </div>
                <blockquote className="text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto italic" style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)" }}>
                  "{TESTIMONIALS[activeT].text}"
                </blockquote>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">{TESTIMONIALS[activeT].avatar}</div>
                  <div className="text-left">
                    <div className="text-white font-semibold text-sm">{TESTIMONIALS[activeT].name}</div>
                    <div className="text-slate-400 text-xs">{TESTIMONIALS[activeT].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={() => setActiveT((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} className="w-10 h-10 bg-white/[0.05] border border-white/[0.1] rounded-full flex items-center justify-center hover:bg-white/[0.1] transition-colors">
                <ChevronLeft size={17} />
              </button>
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => setActiveT(i)} className={`rounded-full transition-all duration-300 ${i === activeT ? "w-8 h-2.5 bg-violet-500" : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"}`} />
              ))}
              <button onClick={() => setActiveT((p) => (p + 1) % TESTIMONIALS.length)} className="w-10 h-10 bg-white/[0.05] border border-white/[0.1] rounded-full flex items-center justify-center hover:bg-white/[0.1] transition-colors">
                <ChevronRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ──────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 bg-[#0A0F1E]">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="relative bg-gradient-to-br from-violet-600/15 via-[#0D1425] to-indigo-600/15 border border-violet-500/20 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-violet-600/8 rounded-full blur-3xl pointer-events-none" />
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-violet-500/30">
                  <GraduationCap size={28} className="text-white" />
                </div>
                <h2 className="text-white font-black mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>Start Your Learning Journey Today!</h2>
                <p className="text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed text-sm">Book a free demo class and experience the Sankalp difference. No commitment required — just pure, focused learning!</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl shadow-violet-500/30 hover:scale-105 transition-all">
                    <Phone size={17} /> Book Free Demo Class
                  </Link>
                  <a href="tel:+919000000000" className="flex items-center justify-center gap-2 bg-white/[0.05] border border-white/[0.1] text-white hover:bg-white/[0.09] px-8 py-4 rounded-2xl font-semibold transition-all">
                    <Phone size={17} /> Call: +91 9431526500
                  </a>
                </div>
                <p className="text-slate-500 text-xs mt-5">Free demo · No commitment · Response within 2 hours</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
