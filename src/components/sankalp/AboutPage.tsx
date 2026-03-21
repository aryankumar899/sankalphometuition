import { useRef } from "react";
import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import { GraduationCap, Users, Trophy, Star, CheckCircle2, Award, Heart, Target, Lightbulb, Globe, ArrowRight, BookOpen } from "lucide-react";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px 0px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

const TEACHERS = [
  { name: "Dr. Rajesh Kumar", role: "Mathematics Expert", exp: "15 Years", qual: "PhD Mathematics, BHU", img: "https://images.unsplash.com/photo-1758685848001-0396a85ba84f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", rating: 4.9, students: 320 },
  { name: "Priya Sharma", role: "Science & Biology", exp: "10 Years", qual: "M.Sc Biology, Ranchi University", img: "https://images.unsplash.com/photo-1746513534315-caa52d3f462c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", rating: 4.8, students: 280 },
  { name: "Amit Verma", role: "Physics & Chemistry", exp: "12 Years", qual: "M.Sc Physics, IIT Dhanbad", img: "https://images.unsplash.com/photo-1758685848697-b5fb55f87407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", rating: 4.9, students: 290 },
  { name: "Neha Singh", role: "English & Social Studies", exp: "8 Years", qual: "MA English, Ranchi University", img: "https://images.unsplash.com/photo-1669659033487-203d254e35a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", rating: 4.7, students: 240 },
];

const WHY_US = [
  { icon: CheckCircle2, title: "Background-Verified Teachers", desc: "All our teachers go through a rigorous verification process including background checks and trial sessions.", color: "text-emerald-400" },
  { icon: Trophy, title: "98% Success Rate", desc: "Consistent track record of top scorers in Board exams, JEE, NEET, and other competitive exams.", color: "text-amber-400" },
  { icon: Heart, title: "Student-First Approach", desc: "We genuinely care about each student's academic journey, emotional well-being, and long-term success.", color: "text-pink-400" },
  { icon: Globe, title: "All Boards Covered", desc: "We teach CBSE, ICSE, JAC (Jharkhand Board), and all major curriculum frameworks.", color: "text-blue-400" },
  { icon: Lightbulb, title: "Innovative Teaching", desc: "Modern, concept-based teaching with visual aids, mnemonics, and real-world examples.", color: "text-violet-400" },
  { icon: Target, title: "Goal-Oriented Learning", desc: "Defined milestones, monthly tests, and clear targets to keep students on the right track.", color: "text-cyan-400" },
];

const MILESTONES = [
  { year: "2010", event: "Sankalp Home Tuition founded in Ranchi with just 5 teachers" },
  { year: "2013", event: "Crossed 200 students milestone; launched Science coaching" },
  { year: "2016", event: "Introduced online classes and expanded to all Jharkhand" },
  { year: "2019", event: "Launched JEE/NEET competitive exam coaching division" },
  { year: "2022", event: "Crossed 1500 students and 40 expert teachers" },
  { year: "2026", event: "2000+ students, 50+ teachers, 98% success rate & counting" },
];

export function AboutPage() {
  return (
    <div>
      {/* ─── HERO ── */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060B18] via-[#08102A] to-[#060B18]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-violet-600/8 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.span initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
            Our Story
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="text-white font-black mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}>
            Transforming Lives Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">Education</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-slate-400 max-w-2xl mx-auto leading-relaxed text-sm">
            Since 2010, Sankalp Home Tuition has been Ranchi's most trusted education partner — empowering over 2000 students to discover their potential and achieve extraordinary results.
          </motion.p>
        </div>
      </section>

      {/* ─── STORY ── */}
      <section className="py-20 px-4 sm:px-6 bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 rounded-3xl blur-xl" />
                <img src="https://images.unsplash.com/photo-1722573783625-eceb04251036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" alt="Sankalp classroom" className="relative rounded-3xl w-full object-cover h-96 border border-white/[0.08] shadow-2xl" />
                <div className="absolute -bottom-5 -right-5 bg-[#0D1425] border border-white/[0.1] rounded-2xl p-5 shadow-xl">
                  <div className="text-white font-black text-3xl mb-1">15+</div>
                  <div className="text-slate-400 text-xs">Years of Excellence</div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <span className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">Our Story</span>
              <h2 className="text-white font-black mb-5" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}>
                Born From a Passion to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Make a Difference</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-4 text-sm">Sankalp Home Tuition was founded in 2010 by a group of passionate educators who believed that every student in Ranchi deserved access to high-quality, personalized education — regardless of their school or location.</p>
              <p className="text-slate-400 leading-relaxed mb-6 text-sm">Starting with just 5 teachers and 20 students in the Lalpur area, we have grown into Ranchi's largest and most trusted home tuition network, serving 2000+ students across the city with 50+ expert educators.</p>
              <div className="grid grid-cols-2 gap-4">
                {[["2000+", "Students Taught"], ["50+", "Expert Teachers"], ["98%", "Success Rate"], ["15+", "Years in Ranchi"]].map(([val, lbl]) => (
                  <div key={lbl} className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-4">
                    <div className="text-white font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">{val}</div>
                    <div className="text-slate-400 text-xs mt-1">{lbl}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── MISSION & VISION ── */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="bg-gradient-to-br from-violet-600/10 to-indigo-600/10 border border-violet-500/20 rounded-2xl p-8 h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-violet-500/25">
                  <Target size={22} className="text-white" />
                </div>
                <h3 className="text-white font-black text-xl mb-4">Our Mission</h3>
                <p className="text-slate-400 leading-relaxed text-sm">To make world-class personalized education accessible to every student in Ranchi, Jharkhand — nurturing not just academic excellence, but confidence, curiosity, and a lifelong love of learning.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-8 h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-amber-500/25">
                  <Lightbulb size={22} className="text-white" />
                </div>
                <h3 className="text-white font-black text-xl mb-4">Our Vision</h3>
                <p className="text-slate-400 leading-relaxed text-sm">To become Jharkhand's leading education ecosystem — where every child has a dedicated mentor, measurable progress, and an unwavering belief in their ability to succeed academically and beyond.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ── */}
      <section className="py-20 px-4 sm:px-6 bg-[#0A0F1E]">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">Our Journey</span>
            <h2 className="text-white font-black mt-2" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>15 Years of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Excellence</span></h2>
          </FadeIn>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-indigo-500 to-transparent" />
            <div className="flex flex-col gap-8">
              {MILESTONES.map((m, i) => (
                <FadeIn key={m.year} delay={i * 0.08}>
                  <div className="relative pl-16">
                    <div className="absolute left-0 top-1 w-12 h-12 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/20 z-10">
                      <span className="text-white font-black text-xs">{m.year}</span>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-4">
                      <p className="text-slate-300 text-sm leading-relaxed">{m.event}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TEACHER PROFILES ── */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">Leadership Team</span>
            <h2 className="text-white font-black mt-2" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">Core Team</span></h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEACHERS.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <motion.div whileHover={{ y: -8 }} className="group bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-violet-500/25 transition-all duration-300">
                  <div className="relative h-52 overflow-hidden">
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060B18] via-transparent" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-amber-500/90 text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                      <Star size={9} fill="white" /> {t.rating}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-white font-bold text-sm mb-1">{t.name}</h3>
                    <p className="text-violet-400 text-xs font-medium mb-1">{t.role}</p>
                    <p className="text-slate-500 text-xs mb-3">{t.qual}</p>
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center gap-1"><Award size={10} /> {t.exp} Exp</span>
                      <span className="flex items-center gap-1"><Users size={10} /> {t.students} Students</span>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="text-center mt-10">
            <Link to="/teachers" className="inline-flex items-center gap-2 text-violet-400 hover:text-white font-semibold border border-violet-500/30 hover:border-violet-400/50 hover:bg-violet-500/10 px-7 py-3 rounded-xl transition-all text-sm">
              View All Teachers <ArrowRight size={14} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ─── WHY US ── */}
      <section className="py-20 px-4 sm:px-6 bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">Why Choose Us</span>
            <h2 className="text-white font-black mt-2" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>What Makes Sankalp <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">Different</span></h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_US.map((w, i) => (
              <FadeIn key={w.title} delay={i * 0.07}>
                <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 hover:border-white/[0.14] transition-all duration-300">
                  <w.icon size={22} className={`${w.color} mb-4`} />
                  <h3 className="text-white font-bold text-sm mb-2">{w.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{w.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
