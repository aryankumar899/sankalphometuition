import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Star, Quote, Trophy, Users, TrendingUp, Award, Play } from "lucide-react";
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

const REVIEWS = [
  { name: "Rahul Mehta", role: "Class 10 Student", rating: 5, text: "Sankalp completely transformed my academic performance. I was struggling with Mathematics and Science, but Dr. Kumar's personalized attention helped me score 95% in my boards. The teachers here genuinely care about your progress!", avatar: "RM", subject: "Mathematics", result: "95% in Boards", color: "from-violet-500 to-indigo-600" },
  { name: "Priya Agarwal", role: "Parent of Class 8 Student", rating: 5, text: "My daughter's confidence has improved dramatically since joining Sankalp. She used to dread Mathematics. Now she actually looks forward to her classes! The teachers are patient, engaging, and truly passionate.", avatar: "PA", subject: "Science & Maths", result: "Top in class", color: "from-emerald-500 to-teal-500" },
  { name: "Arjun Singh", role: "JEE Aspirant 2024", rating: 5, text: "Cleared JEE Mains with AIR 2345 in my first attempt! The systematic approach, daily practice, and weekly mock tests at Sankalp made all the difference. Amit Sir's Physics classes were exceptional.", avatar: "AS", subject: "Physics & Maths", result: "JEE AIR 2345", color: "from-amber-500 to-orange-500" },
  { name: "Sunita Devi", role: "Parent of Class 5 Student", rating: 5, text: "My son used to hate studying and would throw tantrums every evening. After joining Sankalp, the transformation has been remarkable. He's now eager to study and his grades have improved significantly.", avatar: "SD", subject: "All Subjects", result: "A+ in all subjects", color: "from-pink-500 to-rose-500" },
  { name: "Kavya Sharma", role: "Class 12 Student", rating: 5, text: "I scored 98 in Chemistry and 96 in Physics in my board exams — something I never thought was possible. Amit Sir's teaching method breaks everything into simple steps and the regular tests kept me sharp.", avatar: "KS", subject: "Chemistry & Physics", result: "98 in Chemistry", color: "from-cyan-500 to-blue-500" },
  { name: "Rajesh Prasad", role: "Parent of Class 10 Student", rating: 5, text: "Worth every rupee! My son went from 55% to 85% in just one academic year. The teachers provide regular progress updates and we always feel informed about how our child is performing.", avatar: "RP", subject: "Science", result: "55% → 85%", color: "from-indigo-500 to-violet-600" },
  { name: "Ananya Bose", role: "NEET Qualifier 2024", rating: 5, text: "Qualified NEET with 620/720! Priya Ma'am's Biology classes are simply the best. She taught us mnemonics and tricks that made memorizing complex topics so much easier. Forever grateful to Sankalp!", avatar: "AB", subject: "Biology & Chemistry", result: "NEET 620/720", color: "from-red-500 to-rose-500" },
  { name: "Vikram Gupta", role: "Parent of Class 6 Student", rating: 4, text: "Excellent teachers who communicate regularly. My son has shown significant improvement in English and Social Studies. The homework support sessions are especially helpful for working parents.", avatar: "VG", subject: "English & SST", result: "Consistent A grades", color: "from-teal-500 to-emerald-500" },
  { name: "Meera Joshi", role: "Class 9 Student", rating: 5, text: "I used to get anxious before exams, but the regular tests and mock papers at Sankalp have made me confident. My teachers know exactly which topics I need to work on and focus there.", avatar: "MJ", subject: "All Subjects", result: "Exam confidence up!", color: "from-purple-500 to-violet-600" },
];

const VIDEO_TESTIMONIALS = [
  { name: "Rahul's Story", role: "Board Topper 2024", thumb: "https://images.unsplash.com/photo-1656266724105-302774929dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", desc: "How I scored 95% in boards with Sankalp" },
  { name: "Arjun's Journey", role: "JEE Qualifier 2024", thumb: "https://images.unsplash.com/photo-1758612214917-81d7956c09de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", desc: "My JEE preparation experience at Sankalp" },
  { name: "Ananya's Success", role: "NEET Qualifier 2024", thumb: "https://images.unsplash.com/photo-1716337563114-365568c4db60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", desc: "Scoring 620 in NEET with Sankalp's Biology coaching" },
];

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} size={13} fill={n <= rating ? "#F59E0B" : "none"} stroke={n <= rating ? "#F59E0B" : "#374151"} />
      ))}
    </div>
  );
}

export function TestimonialsPage() {
  return (
    <div>
      {/* ─── HERO ── */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060B18] via-[#08102A] to-[#060B18]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-violet-600/8 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.span initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
            <Star size={11} fill="currentColor" /> Reviews & Testimonials
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="text-white font-black mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}>
            Real Stories. <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Real Results.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-slate-400 max-w-2xl mx-auto leading-relaxed text-sm">
            Hear from the 2000+ students and parents who've experienced the Sankalp difference. Their success is our greatest achievement.
          </motion.p>
        </div>
      </section>

      {/* ─── STATS BAR ── */}
      <section className="py-12 px-4 sm:px-6 bg-[#0A0F1E] border-y border-white/[0.05]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { val: "4.9/5", lbl: "Average Rating", icon: Star, color: "text-amber-400" },
              { val: "2000+", lbl: "Happy Students", icon: Users, color: "text-violet-400" },
              { val: "98%", lbl: "Would Recommend", icon: Trophy, color: "text-emerald-400" },
              { val: "15+", lbl: "Years of Trust", icon: Award, color: "text-pink-400" },
            ].map(({ val, lbl, icon: Icon, color }) => (
              <FadeIn key={lbl} className="flex flex-col items-center">
                <Icon size={22} className={`${color} mb-3`} />
                <div className="text-white font-black text-3xl mb-1">{val}</div>
                <div className="text-slate-400 text-xs">{lbl}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REVIEWS GRID ── */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-14">
            <h2 className="text-white font-black" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
              What Our Students & Parents <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Say</span>
            </h2>
          </FadeIn>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {REVIEWS.map((r, i) => (
              <FadeIn key={r.name} delay={i * 0.05} className="break-inside-avoid">
                <motion.div whileHover={{ y: -4 }} className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 hover:border-white/[0.14] transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <StarRow rating={r.rating} />
                    <div className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${r.color} text-white`}>{r.result}</div>
                  </div>
                  <Quote size={20} className="text-violet-500/30 mb-3" />
                  <p className="text-slate-300 text-sm leading-relaxed mb-5">"{r.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${r.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>{r.avatar}</div>
                    <div>
                      <div className="text-white font-semibold text-sm">{r.name}</div>
                      <div className="text-slate-500 text-xs">{r.role} · {r.subject}</div>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VIDEO TESTIMONIALS ── */}
      <section className="py-20 px-4 sm:px-6 bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4"><Play size={11} /> Video Testimonials</span>
            <h2 className="text-white font-black mt-2" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">Stories</span></h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {VIDEO_TESTIMONIALS.map((v, i) => (
              <FadeIn key={v.name} delay={i * 0.1}>
                <motion.div whileHover={{ y: -6 }} className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/[0.07] hover:border-white/[0.15] transition-all duration-300 h-60">
                  <img src={v.thumb} alt={v.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060B18] via-[#060B18]/40 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <Play size={20} fill="white" className="text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-sm">{v.name}</h3>
                    <p className="text-white/60 text-xs">{v.role}</p>
                    <p className="text-white/80 text-xs mt-1">{v.desc}</p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ── */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="bg-gradient-to-br from-violet-600/15 via-[#0D1425] to-indigo-600/15 border border-violet-500/20 rounded-3xl p-10">
              <h2 className="text-white font-black mb-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>Become Our Next Success Story</h2>
              <p className="text-slate-400 mb-7 text-sm">Join 2000+ students who transformed their academic journey with Sankalp Home Tuition.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-3.5 rounded-xl font-semibold text-sm shadow-xl shadow-violet-500/25 hover:scale-105 transition-all">
                Book Your Free Demo Today
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
