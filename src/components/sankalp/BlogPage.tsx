import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Search, Clock, Tag, ArrowRight, BookOpen, TrendingUp, GraduationCap, Lightbulb, Users } from "lucide-react";
import { Link } from "react-router";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px 0px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

const CATEGORIES = ["All", "Study Tips", "Exam Prep", "Mathematics", "Science", "JEE/NEET", "Parents Guide", "Motivation"];

const BLOGS = [
  { title: "10 Proven Study Techniques to Score 90+ in Board Exams", category: "Study Tips", date: "March 15, 2026", read: "8 min read", img: "https://images.unsplash.com/photo-1656266724105-302774929dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", excerpt: "Discover the science-backed study strategies that our top-scoring students use to consistently ace their board exams. From spaced repetition to the Pomodoro Technique.", featured: true, color: "from-violet-500 to-indigo-600", tags: ["Study Tips", "Board Exams"] },
  { title: "How to Crack JEE Mains 2027: A Complete Roadmap", category: "JEE/NEET", date: "March 10, 2026", read: "12 min read", img: "https://images.unsplash.com/photo-1758685848697-b5fb55f87407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", excerpt: "A step-by-step preparation strategy for JEE Mains covering the 14-month study plan, important topics, and mock test schedule.", featured: false, color: "from-amber-500 to-orange-500", tags: ["JEE", "Exam Prep"] },
  { title: "Understanding NCERT: Why It's the Foundation of All Exams", category: "Study Tips", date: "March 5, 2026", read: "6 min read", img: "https://images.unsplash.com/photo-1767862672771-bdc6e9486c9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", excerpt: "NCERT textbooks are the backbone of CBSE, JEE, and NEET. Learn how to extract maximum value from each chapter.", featured: false, color: "from-emerald-500 to-teal-500", tags: ["NCERT", "Study Tips"] },
  { title: "5 Common Maths Mistakes Students Make in Class 10 Boards", category: "Mathematics", date: "Feb 28, 2026", read: "7 min read", img: "https://images.unsplash.com/photo-1758685848001-0396a85ba84f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", excerpt: "Dr. Rajesh Kumar shares the most common calculation and concept errors he's observed in thousands of exam papers and how to avoid them.", featured: false, color: "from-pink-500 to-rose-500", tags: ["Mathematics", "Class 10"] },
  { title: "NEET 2026 Biology: High-Weightage Topics You Must Not Miss", category: "JEE/NEET", date: "Feb 20, 2026", read: "10 min read", img: "https://images.unsplash.com/photo-1758685734153-132c8620c1bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", excerpt: "Priya Ma'am's comprehensive analysis of NEET Biology paper trends from 2020–2025 and the chapters that carry the most marks.", featured: false, color: "from-red-500 to-rose-500", tags: ["NEET", "Biology"] },
  { title: "How Parents Can Support Their Child's Studies at Home", category: "Parents Guide", date: "Feb 15, 2026", read: "9 min read", img: "https://images.unsplash.com/photo-1722573783625-eceb04251036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", excerpt: "A practical guide for parents on creating the right study environment, managing screen time, and building positive study habits in children.", featured: false, color: "from-cyan-500 to-blue-500", tags: ["Parents", "Study Habits"] },
  { title: "The Power of Consistency: Why Daily 2-Hour Study Beats Weekend Cramming", category: "Motivation", date: "Feb 10, 2026", read: "5 min read", img: "https://images.unsplash.com/photo-1769783664941-635bc57fe507?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", excerpt: "Neuroscience explains why regular, spaced study sessions dramatically outperform last-minute cramming for long-term retention.", featured: false, color: "from-indigo-500 to-violet-600", tags: ["Motivation", "Study Habits"] },
  { title: "Science Project Ideas for Class 6–10: Learn by Doing", category: "Science", date: "Feb 5, 2026", read: "8 min read", img: "https://images.unsplash.com/photo-1758685733433-f0cfa48c5a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", excerpt: "25 engaging science projects that strengthen conceptual understanding and make learning Physics, Chemistry, and Biology exciting.", featured: false, color: "from-emerald-500 to-green-500", tags: ["Science", "Projects"] },
];

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = BLOGS.filter((b) => {
    const matchCat = activeCategory === "All" || b.category === activeCategory || b.tags.includes(activeCategory);
    const matchSearch = search === "" || b.title.toLowerCase().includes(search.toLowerCase()) || b.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = BLOGS.find((b) => b.featured);
  const rest = filtered.filter((b) => !b.featured || activeCategory !== "All" || search !== "");

  return (
    <div>
      {/* ─── HERO ── */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060B18] via-[#08102A] to-[#060B18]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-violet-600/8 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.span initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
            <BookOpen size={11} /> Blog & Resources
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="text-white font-black mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}>
            Study Smarter with <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">Sankalp Insights</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-slate-400 max-w-2xl mx-auto leading-relaxed text-sm">
            Expert tips, exam strategies, and educational resources crafted by our experienced teachers to help you succeed.
          </motion.p>
        </div>
      </section>

      {/* ─── SEARCH + FILTER ── */}
      <section className="py-6 px-4 sm:px-6 bg-[#0A0F1E] border-y border-white/[0.05] sticky top-16 z-30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-4">
          <div className="relative w-full sm:w-72">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input type="text" placeholder="Search articles..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full bg-white/[0.04] border border-white/[0.1] text-white placeholder-slate-500 pl-10 pr-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-violet-500/50 transition-all" />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button key={c} onClick={() => setActiveCategory(c)} className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${activeCategory === c ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25" : "bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.08]"}`}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED POST ── */}
      {featured && activeCategory === "All" && search === "" && (
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="relative rounded-3xl overflow-hidden border border-white/[0.08] group cursor-pointer hover:border-white/[0.15] transition-all duration-300 h-80 md:h-96">
                <img src={featured.img} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#060B18]/90 via-[#060B18]/60 to-transparent" />
                <div className="absolute inset-0 flex items-center p-8 md:p-12">
                  <div className="max-w-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full">Featured</span>
                      <span className="text-slate-400 text-xs">{featured.category}</span>
                    </div>
                    <h2 className="text-white font-black mb-3" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>{featured.title}</h2>
                    <p className="text-slate-400 text-sm leading-relaxed mb-5 hidden md:block">{featured.excerpt}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-slate-400 text-xs flex items-center gap-1"><Clock size={11} /> {featured.read}</span>
                      <span className="text-slate-400 text-xs">{featured.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ─── BLOG GRID ── */}
      <section className="pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <p className="text-slate-400 text-sm">{filtered.length} articles</p>
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={activeCategory + search} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(activeCategory === "All" && search === "" ? rest : filtered).map((blog, i) => (
                <motion.div key={blog.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                  <motion.div whileHover={{ y: -6 }} className="group bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-white/[0.14] transition-all duration-300 cursor-pointer h-full flex flex-col">
                    <div className="relative h-44 overflow-hidden">
                      <img src={blog.img} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#060B18]/60 to-transparent" />
                      <div className={`absolute top-3 left-3 text-white text-[10px] font-bold px-3 py-1 rounded-full bg-gradient-to-r ${blog.color}`}>{blog.category}</div>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3 text-xs text-slate-500">
                        <span className="flex items-center gap-1"><Clock size={10} /> {blog.read}</span>
                        <span>{blog.date}</span>
                      </div>
                      <h3 className="text-white font-bold text-sm leading-snug mb-3 flex-1">{blog.title}</h3>
                      <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-2">{blog.excerpt}</p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {blog.tags.map((t) => (
                          <span key={t} className="flex items-center gap-1 bg-white/[0.05] text-slate-400 text-[10px] px-2 py-0.5 rounded-lg"><Tag size={8} /> {t}</span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                        <span className="text-violet-400 text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">Read More <ArrowRight size={11} /></span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ─── RESOURCES ── */}
      <section className="py-16 px-4 sm:px-6 bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-10">
            <h2 className="text-white font-black mb-2" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>Free Study <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Resources</span></h2>
            <p className="text-slate-400 text-sm">Download free notes, practice papers, and study material curated by our expert teachers.</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Class 10 Maths Formula Sheet", type: "PDF · 12 pages", icon: BookOpen, color: "from-violet-500 to-indigo-600" },
              { title: "NEET Biology Quick Revision Notes", type: "PDF · 45 pages", icon: Lightbulb, color: "from-emerald-500 to-teal-500" },
              { title: "JEE Physics Important Formulas", type: "PDF · 20 pages", icon: TrendingUp, color: "from-amber-500 to-orange-500" },
              { title: "English Grammar Complete Guide", type: "PDF · 30 pages", icon: GraduationCap, color: "from-pink-500 to-rose-500" },
            ].map((r, i) => (
              <FadeIn key={r.title} delay={i * 0.07}>
                <motion.div whileHover={{ y: -4 }} className="group bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 hover:border-white/[0.14] transition-all cursor-pointer">
                  <div className={`w-10 h-10 bg-gradient-to-br ${r.color} rounded-xl flex items-center justify-center mb-4`}>
                    <r.icon size={18} className="text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1">{r.title}</h3>
                  <p className="text-slate-500 text-xs mb-4">{r.type}</p>
                  <Link to="/contact" className="text-violet-400 text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                    Download Free <ArrowRight size={11} />
                  </Link>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
