import { useRef, useState } from "react";
import { Link } from "react-router";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ChevronDown, MessageCircle, Phone, HelpCircle, BookOpen, Users, DollarSign, Clock, Star, Zap } from "lucide-react";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px 0px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

const FAQ_CATEGORIES = [
  {
    category: "Getting Started",
    icon: Zap,
    color: "from-violet-500 to-indigo-600",
    questions: [
      { q: "How do I book a demo class?", a: "You can book a free demo class by calling us at +91 90000 00000, sending a WhatsApp message, or filling the inquiry form on our Contact page. We'll schedule a convenient time for the demo within 24 hours." },
      { q: "Is the demo class really free?", a: "Yes, absolutely! The demo class is 100% free with no hidden charges and no obligation to enroll. It's our way of letting you experience the Sankalp teaching quality before committing." },
      { q: "How quickly can classes start after booking?", a: "Classes typically begin within 3–5 business days of booking. For urgent requests, we can often arrange sessions within 48 hours if a suitable teacher is available." },
      { q: "What areas in Ranchi do you serve for home tuition?", a: "We serve all major areas of Ranchi including Lalpur, Bariatu, Kanke Road, Doranda, Ratu Road, Harmu, Ashok Nagar, Morabadi, Hehal, and surrounding localities. Contact us if you're unsure about your area." },
    ],
  },
  {
    category: "Fees & Pricing",
    icon: DollarSign,
    color: "from-amber-500 to-orange-500",
    questions: [
      { q: "What are your monthly fees?", a: "Our fees vary based on class level, number of subjects, and session frequency. Basic plans start from ₹1,500/month for a single subject. Visit our Services page for detailed pricing, or contact us for a custom quote." },
      { q: "Are there any registration or admission fees?", a: "No, there are absolutely no registration fees or hidden admission charges. You only pay the monthly tuition fee after you're satisfied with the demo class and confirm enrollment." },
      { q: "Do you offer discounts for multiple subjects or siblings?", a: "Yes! We offer a 10% discount when enrolling in 3 or more subjects, and a 15% sibling discount for two or more children from the same family. Contact us for more details." },
      { q: "What is the payment mode? Is there EMI available?", a: "We accept cash, bank transfer (IMPS/NEFT), UPI (PhonePe, GPay, Paytm), and cheque. For premium plans, we can discuss monthly installment arrangements." },
      { q: "What is the refund policy?", a: "If you're dissatisfied with the quality of teaching after the first week, we'll either replace your teacher or offer a prorated refund. Customer satisfaction is our top priority." },
    ],
  },
  {
    category: "Teachers & Quality",
    icon: Star,
    color: "from-emerald-500 to-teal-500",
    questions: [
      { q: "How are your teachers selected?", a: "All Sankalp teachers undergo a rigorous 4-stage selection process: resume screening, subject knowledge test, demo lesson evaluation, and background verification. Less than 15% of applicants make it through." },
      { q: "Are the teachers verified and trustworthy?", a: "Yes. All teachers complete police background checks, provide ID proof, and undergo reference verification. For home tuition, we also conduct an in-person interview. Student and parent safety is our top priority." },
      { q: "Can I request a specific teacher?", a: "Absolutely! If you have a preference after the demo class, you can request that specific teacher. If your preferred teacher is unavailable in your time slot, we'll suggest the next best match." },
      { q: "What if I'm not satisfied with my assigned teacher?", a: "If you're not happy with your teacher at any point, simply inform us within 7 days. We'll arrange a replacement teacher at no extra cost, usually within 48–72 hours." },
    ],
  },
  {
    category: "Subjects & Classes",
    icon: BookOpen,
    color: "from-pink-500 to-rose-500",
    questions: [
      { q: "Which classes do you teach?", a: "We offer coaching for Class 1 through Class 12 across all major boards (CBSE, ICSE, JAC Jharkhand Board), plus specialized coaching for JEE (Mains & Advanced) and NEET." },
      { q: "Which subjects are available?", a: "We cover Mathematics, Physics, Chemistry, Biology, English, Hindi, Social Studies (History, Geography, Civics, Economics), Computer Science, and Sanskrit. For rare subjects, contact us." },
      { q: "Do you follow NCERT or school-specific textbooks?", a: "We primarily follow NCERT as the base, supplemented with school-specific textbooks and exam-focused practice material. We adapt our approach to your exact school syllabus." },
      { q: "Do you provide coaching for competitive exams?", a: "Yes! We offer dedicated coaching tracks for JEE Mains & Advanced, NEET, and State Board competitive scholarships. These are intensive programs with mock tests and dedicated mentors." },
    ],
  },
  {
    category: "Scheduling & Logistics",
    icon: Clock,
    color: "from-cyan-500 to-blue-600",
    questions: [
      { q: "How flexible are the class timings?", a: "Very flexible! We work around your school schedule. Sessions can be arranged in the morning (7–9 AM), afternoon (2–5 PM), or evening (5–9 PM). Weekend slots are also available." },
      { q: "What is the minimum duration per session?", a: "Our standard session is 1 hour. For competitive exam students (JEE/NEET), we recommend 1.5–2 hour sessions for better depth. Session duration can be customized to your needs." },
      { q: "Can I choose online classes instead of home tuition?", a: "Absolutely! We offer live online classes via Google Meet or Zoom with interactive whiteboard tools. You can also switch between home tuition and online classes as needed." },
      { q: "What if a class needs to be cancelled or rescheduled?", a: "No problem! Simply inform us at least 4 hours before the session. We'll reschedule at your convenience. Missed classes due to the teacher's absence are always made up within the same week." },
    ],
  },
  {
    category: "Study Materials",
    icon: Users,
    color: "from-indigo-500 to-violet-600",
    questions: [
      { q: "Do you provide study materials and notes?", a: "Yes! All Sankalp students receive comprehensive study notes, practice worksheets, and chapter-wise question banks prepared by our expert teachers — completely free of charge." },
      { q: "Are previous year exam papers provided?", a: "Yes, we provide previous year Board exam and competitive exam papers with solved solutions. For JEE/NEET students, we also conduct regular mock tests using actual exam-pattern papers." },
      { q: "Is there any homework or assignment support?", a: "Yes. Your assigned teacher will help with school homework, assign practice problems, and provide additional exercises for strengthening weak areas. This is included in the standard fee." },
    ],
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.04 }} className="border border-white/[0.08] rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className={`w-full flex items-center justify-between gap-4 p-5 text-left transition-all duration-200 ${open ? "bg-violet-500/10" : "bg-white/[0.02] hover:bg-white/[0.04]"}`}>
        <span className={`text-sm font-semibold leading-snug ${open ? "text-white" : "text-slate-300"}`}>{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }} className="flex-shrink-0">
          <ChevronDown size={16} className={open ? "text-violet-400" : "text-slate-500"} />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
            <div className="px-5 pb-5 pt-1 border-t border-white/[0.06]">
              <p className="text-slate-400 text-sm leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div>
      {/* ─── HERO ── */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060B18] via-[#08102A] to-[#060B18]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-violet-600/8 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.span initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
            <HelpCircle size={11} /> Frequently Asked Questions
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="text-white font-black mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}>
            Got Questions? <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">We Have Answers.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-slate-400 max-w-2xl mx-auto leading-relaxed text-sm">
            Everything you need to know about Sankalp Home Tuition — from booking and fees to teachers and study materials.
          </motion.p>
        </div>
      </section>

      {/* ─── FAQ CONTENT ── */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Category Sidebar */}
            <div className="lg:col-span-1">
              <FadeIn>
                <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-4 sticky top-24">
                  <h3 className="text-white font-bold text-sm mb-4 px-2">Categories</h3>
                  <div className="flex flex-col gap-1">
                    {FAQ_CATEGORIES.map((cat, i) => (
                      <button key={cat.category} onClick={() => setActiveCategory(i)} className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-left text-sm transition-all ${activeCategory === i ? "bg-violet-500/15 text-violet-300" : "text-slate-400 hover:text-white hover:bg-white/[0.05]"}`}>
                        <div className={`w-7 h-7 bg-gradient-to-br ${cat.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <cat.icon size={13} className="text-white" />
                        </div>
                        <span className="font-medium text-xs">{cat.category}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Questions */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div key={activeCategory} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-10 h-10 bg-gradient-to-br ${FAQ_CATEGORIES[activeCategory].color} rounded-xl flex items-center justify-center`}>
                      {(() => { const Icon = FAQ_CATEGORIES[activeCategory].icon; return <Icon size={18} className="text-white" />; })()}
                    </div>
                    <h2 className="text-white font-black text-lg">{FAQ_CATEGORIES[activeCategory].category}</h2>
                    <span className="text-slate-500 text-sm">({FAQ_CATEGORIES[activeCategory].questions.length} questions)</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    {FAQ_CATEGORIES[activeCategory].questions.map((item, i) => (
                      <FAQItem key={item.q} q={item.q} a={item.a} index={i} />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STILL HAVE QUESTIONS ── */}
      <section className="py-16 px-4 sm:px-6 bg-[#0A0F1E]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="bg-gradient-to-br from-violet-600/15 via-[#0D1425] to-indigo-600/15 border border-violet-500/20 rounded-3xl p-10">
              <HelpCircle size={40} className="text-violet-400 mx-auto mb-5" />
              <h2 className="text-white font-black mb-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>Still Have Questions?</h2>
              <p className="text-slate-400 mb-7 text-sm">Our team is available 7 days a week to answer any question you have. Don't hesitate to reach out!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+919000000000" className="flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-7 py-3.5 rounded-xl font-semibold text-sm shadow-xl shadow-violet-500/25 hover:scale-105 transition-all">
                  <Phone size={15} /> Call Us Now
                </a>
                <a href="https://wa.me/919000000000" className="flex items-center justify-center gap-2 bg-[#25D366]/15 border border-[#25D366]/25 text-[#25D366] px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-[#25D366]/25 transition-all">
                  <MessageCircle size={15} /> WhatsApp Us
                </a>
                <Link to="/contact" className="flex items-center justify-center gap-2 bg-white/[0.06] border border-white/[0.1] text-white px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/[0.1] transition-all">
                  Send a Message
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
