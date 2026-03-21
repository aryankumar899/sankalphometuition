import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { BookOpen, TrendingUp, Clock, Award, CheckCircle2, Calendar, Bell, BarChart3, Target, Star, Play, ChevronRight, Users, Zap } from "lucide-react";
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

const ENROLLED = [
  { subject: "Mathematics", teacher: "Dr. Rajesh Kumar", progress: 72, nextClass: "Today, 5:00 PM", sessions: 28, color: "from-violet-500 to-indigo-600", icon: "📐" },
  { subject: "Physics", teacher: "Amit Verma", progress: 58, nextClass: "Tomorrow, 6:00 PM", sessions: 20, color: "from-amber-500 to-orange-500", icon: "⚡" },
  { subject: "Chemistry", teacher: "Amit Verma", progress: 45, nextClass: "Wed, 5:30 PM", sessions: 15, color: "from-emerald-500 to-teal-500", icon: "🧪" },
];

const RECENT_TESTS = [
  { name: "Mathematics Monthly Test", date: "Mar 18, 2026", score: 88, total: 100, grade: "A", color: "text-emerald-400" },
  { name: "Physics Chapter Test – Optics", date: "Mar 15, 2026", score: 74, total: 100, grade: "B+", color: "text-amber-400" },
  { name: "Chemistry – Organic Reactions", date: "Mar 10, 2026", score: 62, total: 100, grade: "B", color: "text-blue-400" },
  { name: "Mathematics Weekly Quiz", date: "Mar 7, 2026", score: 92, total: 100, grade: "A+", color: "text-emerald-400" },
];

const SCHEDULE = [
  { day: "Mon", subject: "Mathematics", time: "5:00–6:00 PM", status: "upcoming" },
  { day: "Tue", subject: "Physics", time: "6:00–7:00 PM", status: "upcoming" },
  { day: "Wed", subject: "Chemistry", time: "5:30–6:30 PM", status: "upcoming" },
  { day: "Thu", subject: "Mathematics", time: "5:00–6:00 PM", status: "upcoming" },
  { day: "Fri", subject: "Physics", time: "6:00–7:00 PM", status: "upcoming" },
  { day: "Sat", subject: "Revision", time: "10:00–11:30 AM", status: "upcoming" },
];

const ACHIEVEMENTS = [
  { title: "First Mock Test", icon: "🏆", earned: true },
  { title: "10 Sessions Done", icon: "🔥", earned: true },
  { title: "90%+ Score", icon: "⭐", earned: true },
  { title: "Perfect Attendance", icon: "📅", earned: false },
  { title: "Top of Class", icon: "👑", earned: false },
  { title: "50 Sessions Done", icon: "🎓", earned: false },
];

function ProgressRing({ progress, size = 60, color = "#6366F1" }: { progress: number; size?: number; color?: string }) {
  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;
  const dash = (progress / 100) * circumference;
  return (
    <svg width={size} height={size} className="rotate-[-90deg]">
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
      <motion.circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" strokeDasharray={`${dash} ${circumference}`} initial={{ strokeDasharray: `0 ${circumference}` }} animate={{ strokeDasharray: `${dash} ${circumference}` }} transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }} />
    </svg>
  );
}

export function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "schedule" | "tests">("overview");

  return (
    <div>
      {/* ─── CONCEPT BANNER ── */}
      <section className="relative pt-28 pb-8 px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-[#060B18] via-[#08102A] to-[#060B18]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-violet-600/8 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-2">
            <div>
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">
                <Zap size={11} /> Concept Preview — Student Dashboard
              </motion.span>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-white font-black" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>
                Student Learning Dashboard
              </motion.h1>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-slate-400 text-sm mt-1">
                A conceptual preview of what enrolled students experience · Arjun Singh (Class 12)
              </motion.p>
            </div>
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-violet-600/20 border border-violet-500/20 rounded-xl flex items-center justify-center text-violet-400 cursor-pointer hover:bg-violet-600/30 transition-colors relative">
                <Bell size={17} />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-[9px] flex items-center justify-center font-bold">3</span>
              </div>
              <Link to="/contact" className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:scale-105 transition-all shadow-lg shadow-violet-500/25">
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS CARDS ── */}
      <section className="py-8 px-4 sm:px-6 bg-[#0A0F1E] border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: BookOpen, label: "Enrolled Subjects", value: "3", sub: "Maths, Physics, Chemistry", color: "from-violet-500 to-indigo-600" },
              { icon: CheckCircle2, label: "Sessions Completed", value: "63", sub: "This academic year", color: "from-emerald-500 to-teal-500" },
              { icon: TrendingUp, label: "Average Score", value: "79%", sub: "+12% from last month", color: "from-amber-500 to-orange-500" },
              { icon: Award, label: "Achievements", value: "3/6", sub: "Badges earned", color: "from-pink-500 to-rose-500" },
            ].map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.08}>
                <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5">
                  <div className={`w-10 h-10 bg-gradient-to-br ${s.color} rounded-xl flex items-center justify-center mb-3`}>
                    <s.icon size={18} className="text-white" />
                  </div>
                  <div className="text-white font-black text-2xl mb-0.5">{s.value}</div>
                  <div className="text-slate-300 text-xs font-semibold mb-0.5">{s.label}</div>
                  <div className="text-slate-500 text-[10px]">{s.sub}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MAIN DASHBOARD ── */}
      <section className="py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Tabs */}
          <div className="flex gap-2 mb-8 border-b border-white/[0.07] pb-4">
            {(["overview", "schedule", "tests"] as const).map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 rounded-lg text-sm font-semibold capitalize transition-all ${activeTab === tab ? "bg-violet-600/20 text-violet-300 border border-violet-500/30" : "text-slate-400 hover:text-white"}`}>
                {tab}
              </button>
            ))}
          </div>

          {activeTab === "overview" && (
            <div className="grid lg:grid-cols-3 gap-7">
              {/* Enrolled Subjects */}
              <div className="lg:col-span-2">
                <FadeIn>
                  <h2 className="text-white font-bold text-base mb-5">My Subjects & Progress</h2>
                  <div className="flex flex-col gap-4">
                    {ENROLLED.map((subj, i) => (
                      <motion.div key={subj.subject} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 hover:border-white/[0.14] transition-all">
                        <div className="flex items-center gap-4">
                          <div className="relative flex-shrink-0">
                            <ProgressRing progress={subj.progress} size={64} color={subj.color.includes("violet") ? "#6366F1" : subj.color.includes("amber") ? "#F59E0B" : "#10B981"} />
                            <div className="absolute inset-0 flex items-center justify-center text-lg">{subj.icon}</div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <h3 className="text-white font-bold text-sm">{subj.subject}</h3>
                              <span className="text-slate-400 text-xs">{subj.progress}% complete</span>
                            </div>
                            <p className="text-slate-400 text-xs mb-2">Teacher: {subj.teacher}</p>
                            <div className="w-full bg-white/[0.06] rounded-full h-1.5 mb-2">
                              <motion.div className={`h-1.5 rounded-full bg-gradient-to-r ${subj.color}`} initial={{ width: 0 }} animate={{ width: `${subj.progress}%` }} transition={{ duration: 1, delay: 0.3 + i * 0.1 }} />
                            </div>
                            <div className="flex items-center justify-between text-[10px] text-slate-500">
                              <span className="flex items-center gap-1"><Clock size={9} /> Next: {subj.nextClass}</span>
                              <span>{subj.sessions} sessions completed</span>
                            </div>
                          </div>
                          <button className="w-9 h-9 bg-violet-600/15 border border-violet-500/20 rounded-xl flex items-center justify-center text-violet-400 hover:bg-violet-600/25 transition-colors flex-shrink-0">
                            <Play size={14} fill="currentColor" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </FadeIn>

                {/* Recent Tests */}
                <FadeIn delay={0.2} className="mt-7">
                  <h2 className="text-white font-bold text-base mb-5 flex items-center gap-2"><BarChart3 size={16} className="text-violet-400" /> Recent Test Results</h2>
                  <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden">
                    {RECENT_TESTS.map((test, i) => (
                      <div key={test.name} className={`flex items-center justify-between p-4 hover:bg-white/[0.03] transition-colors ${i !== RECENT_TESTS.length - 1 ? "border-b border-white/[0.05]" : ""}`}>
                        <div>
                          <div className="text-white font-medium text-sm">{test.name}</div>
                          <div className="text-slate-500 text-xs mt-0.5">{test.date}</div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-20 bg-white/[0.06] rounded-full h-1.5">
                            <div className="h-1.5 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" style={{ width: `${test.score}%` }} />
                          </div>
                          <span className="text-white font-bold text-sm w-16 text-right">{test.score}/{test.total}</span>
                          <span className={`${test.color} font-black text-sm w-8 text-right`}>{test.grade}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </div>

              {/* Sidebar */}
              <div className="flex flex-col gap-6">
                {/* Today's Schedule */}
                <FadeIn delay={0.1}>
                  <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5">
                    <h3 className="text-white font-bold text-sm mb-4 flex items-center gap-2"><Calendar size={14} className="text-violet-400" /> This Week's Schedule</h3>
                    <div className="flex flex-col gap-2">
                      {SCHEDULE.map((s) => (
                        <div key={s.day + s.subject} className="flex items-center gap-3 p-2.5 bg-white/[0.03] rounded-xl">
                          <div className="w-8 h-8 bg-gradient-to-br from-violet-600/30 to-indigo-600/30 border border-violet-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-violet-300 text-[10px] font-bold">{s.day}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-white text-xs font-medium truncate">{s.subject}</div>
                            <div className="text-slate-500 text-[10px]">{s.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>

                {/* Achievements */}
                <FadeIn delay={0.15}>
                  <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5">
                    <h3 className="text-white font-bold text-sm mb-4 flex items-center gap-2"><Award size={14} className="text-amber-400" /> Achievements</h3>
                    <div className="grid grid-cols-3 gap-3">
                      {ACHIEVEMENTS.map((a) => (
                        <div key={a.title} className={`flex flex-col items-center gap-1 p-3 rounded-xl border transition-all ${a.earned ? "bg-amber-500/10 border-amber-500/20" : "bg-white/[0.02] border-white/[0.05] opacity-40"}`}>
                          <span className="text-2xl">{a.icon}</span>
                          <span className="text-[9px] text-center text-slate-400 leading-tight">{a.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>

                {/* Quick Actions */}
                <FadeIn delay={0.2}>
                  <div className="bg-gradient-to-br from-violet-600/15 via-[#0D1425] to-indigo-600/15 border border-violet-500/20 rounded-2xl p-5">
                    <h3 className="text-white font-bold text-sm mb-4">Quick Actions</h3>
                    <div className="flex flex-col gap-2">
                      {[["Book Extra Session", Clock], ["Download Notes", BookOpen], ["Talk to Teacher", Users], ["View All Results", BarChart3]].map(([label, Icon]: any) => (
                        <Link to="/contact" key={label} className="flex items-center justify-between p-3 bg-white/[0.04] hover:bg-white/[0.08] rounded-xl text-white text-xs font-medium transition-colors group">
                          <div className="flex items-center gap-2.5">
                            <Icon size={13} className="text-violet-400" /> {label}
                          </div>
                          <ChevronRight size={12} className="text-slate-500 group-hover:text-white transition-colors" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          )}

          {activeTab === "schedule" && (
            <FadeIn>
              <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden">
                <div className="p-5 border-b border-white/[0.07]">
                  <h2 className="text-white font-bold">Weekly Schedule</h2>
                </div>
                <div className="divide-y divide-white/[0.05]">
                  {SCHEDULE.map((s, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }} className="flex items-center justify-between p-5 hover:bg-white/[0.02] transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-violet-600/20 to-indigo-600/20 border border-violet-500/20 rounded-xl flex items-center justify-center">
                          <span className="text-violet-300 font-black text-sm">{s.day}</span>
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">{s.subject}</div>
                          <div className="text-slate-400 text-xs flex items-center gap-1 mt-0.5"><Clock size={10} /> {s.time}</div>
                        </div>
                      </div>
                      <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs px-3 py-1 rounded-full">Scheduled</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}

          {activeTab === "tests" && (
            <FadeIn>
              <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden">
                <div className="p-5 border-b border-white/[0.07] flex items-center justify-between">
                  <h2 className="text-white font-bold">All Test Results</h2>
                  <span className="text-slate-400 text-sm">Average: 79%</span>
                </div>
                <div className="divide-y divide-white/[0.05]">
                  {RECENT_TESTS.map((test, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="flex items-center justify-between p-5 hover:bg-white/[0.02] transition-colors">
                      <div>
                        <div className="text-white font-semibold text-sm">{test.name}</div>
                        <div className="text-slate-500 text-xs mt-0.5">{test.date}</div>
                      </div>
                      <div className="flex items-center gap-5">
                        <div className="text-right">
                          <div className="text-white font-bold">{test.score}/{test.total}</div>
                          <div className="text-slate-500 text-xs">{test.score}%</div>
                        </div>
                        <span className={`${test.color} font-black text-lg`}>{test.grade}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* ─── ENROLL CTA ── */}
      <section className="py-16 px-4 sm:px-6 bg-[#0A0F1E]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="bg-gradient-to-br from-violet-600/15 via-[#0D1425] to-indigo-600/15 border border-violet-500/20 rounded-3xl p-10">
              <h2 className="text-white font-black mb-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>Get Access to Your Personal Dashboard</h2>
              <p className="text-slate-400 mb-7 text-sm">Enroll at Sankalp and track your progress, scores, schedule, and achievements — all in one place.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-3.5 rounded-xl font-semibold text-sm shadow-xl shadow-violet-500/25 hover:scale-105 transition-all">
                Enroll & Get Dashboard Access
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
