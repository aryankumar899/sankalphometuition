import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { MapPin, Phone, Mail, MessageCircle, Clock, Send, CheckCircle2, User, BookOpen } from "lucide-react";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px 0px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

function FormInput({ label, type = "text", placeholder, required = false }: { label: string; type?: string; placeholder: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-slate-300 text-sm font-medium mb-2">{label}{required && <span className="text-violet-400 ml-1">*</span>}</label>
      <input type={type} placeholder={placeholder} required={required} className="w-full bg-white/[0.04] border border-white/[0.1] text-white placeholder-slate-500 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-violet-500/60 focus:bg-white/[0.06] transition-all duration-200" />
    </div>
  );
}

function FormSelect({ label, options, required = false }: { label: string; options: string[]; required?: boolean }) {
  return (
    <div>
      <label className="block text-slate-300 text-sm font-medium mb-2">{label}{required && <span className="text-violet-400 ml-1">*</span>}</label>
      <select required={required} className="w-full bg-[#0D1425] border border-white/[0.1] text-slate-300 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-violet-500/60 transition-all duration-200 appearance-none cursor-pointer">
        <option value="">Select an option</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

export function ContactPage() {
  const [inquirySent, setInquirySent] = useState(false);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
    setTimeout(() => setInquirySent(false), 4000);
  };

  const handleFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackSent(true);
    setTimeout(() => setFeedbackSent(false), 4000);
  };

  return (
    <div>
      {/* ─── HERO ── */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060B18] via-[#08102A] to-[#060B18]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-violet-600/8 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.span initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
            Get In Touch
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="text-white font-black mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}>
            Let's Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">Learning Journey</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-slate-400 max-w-2xl mx-auto leading-relaxed text-sm">
            Book a free demo class, ask a question, or share your feedback. We typically respond within 2 hours.
          </motion.p>
        </div>
      </section>

      {/* ─── CONTACT INFO CARDS ── */}
      <section className="py-12 px-4 sm:px-6 bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: MapPin, title: "Visit Us", info: "Indrapuri Ratu Road, Ranchi, Jharkhand", sub: "Mon–Sat: 9 AM – 7 PM", color: "from-violet-500 to-indigo-600" },
              { icon: Phone, title: "Call Us", info: "+91 9431526500", sub: "+91 80000 00000", color: "from-emerald-500 to-teal-500" },
              { icon: Mail, title: "Email Us", info: "Sankalphometuition2012@gmail.com", sub: "Reply within 2 hours", color: "from-amber-500 to-orange-500" },
              { icon: MessageCircle, title: "WhatsApp", info: "+91 99431526500", sub: "Available 8 AM – 10 PM", color: "from-green-500 to-emerald-500" },
            ].map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.08}>
                <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 hover:border-white/[0.14] transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-br ${c.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <c.icon size={21} className="text-white" />
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2">{c.title}</h3>
                  <p className="text-slate-300 text-sm font-medium mb-1">{c.info}</p>
                  <p className="text-slate-500 text-xs">{c.sub}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FORMS ── */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Inquiry Form */}
  <FadeIn>
  <div className="bg-[#0B1220] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl">

    {/* HEADER */}
    <div className="p-6 border-b border-white/[0.08] bg-gradient-to-r from-white/[0.03] to-white/[0.01]">
      <h2 className="text-white font-bold text-xl flex items-center gap-2">
        📘 Book a Demo Class
      </h2>
      <p className="text-slate-400 text-sm mt-1">
        Fill the form below and we will contact you shortly
      </p>
    </div>

    {/* FORM WRAPPER */}
    <div className="relative">

      {/* TOP OVERLAY (Google purple bar hide + blend effect) */}
      <div className="absolute top-0 left-0 w-full h-12 bg-[#0B1220] z-10"></div>

      {/* GOOGLE FORM */}
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdGQvU_AJsdteBkCDtayt4FbnTwjsca4_8qhTkBUuKVfJB2XQ/viewform?embedded=true"
        className="w-full h-[1000px] sm:h-[1300px] md:h-[1600px] lg:h-[1800px] border-0"
      >
        Loading…
      </iframe>

    </div>

  </div>
</FadeIn>

            {/* Feedback Form */}
          <FadeIn delay={0.1}>
  <div className="bg-[#0B1220] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl">

    {/* HEADER */}
    <div className="p-6 border-b border-white/[0.08] bg-gradient-to-r from-white/[0.03] to-white/[0.01]">
      <h2 className="text-white font-bold text-xl flex items-center gap-2">
        💬 Share Feedback
      </h2>
      <p className="text-slate-400 text-sm mt-1">
        Help us improve our services
      </p>
    </div>

    {/* FORM WRAPPER */}
    <div className="relative">

      {/* TOP OVERLAY (hide Google header) */}
      <div className="absolute top-0 left-0 w-full h-14 z-20"></div>

      {/* GOOGLE FORM */}
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSc0rczNnGcrzJb7_gqeUukFGFIFySxZN4SRUPRHi4-RpKFd8g/viewform?embedded=true"
        className="w-full h-[900px] sm:h-[1100px] md:h-[1300px] lg:h-[1500px] border-0"
      >
        Loading…
      </iframe>

    </div>

  </div>

    <FadeIn delay={0.2}>
    <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6">
      <h3 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
        <Clock size={15} className="text-violet-400" /> Office Hours
      </h3>
      <div className="flex flex-col gap-2.5">
        {[["Monday – Friday", "9:00 AM – 7:00 PM"], ["Saturday", "9:00 AM – 5:00 PM"], ["Sunday", "10:00 AM – 2:00 PM"], ["WhatsApp Support", "8:00 AM – 10:00 PM Daily"]].map(([day, time]) => (
          <div key={day} className="flex items-center justify-between">
            <span className="text-slate-400 text-sm">{day}</span>
            <span className="text-white text-sm font-medium">{time}</span>
          </div>
        ))}
      </div>
      <div className="mt-5 pt-5 border-t border-white/[0.06]">
        <a
          href="https://wa.me/9431526500"
          className="flex items-center justify-center gap-2 bg-[#25D366]/15 border border-[#25D366]/25 text-[#25D366] hover:bg-[#25D366]/25 px-5 py-3 rounded-xl font-semibold text-sm transition-all"
        >
          <MessageCircle size={16} /> Chat on WhatsApp Now
        </a>
      </div>
    </div>
  </FadeIn>
</FadeIn>


          </div>
        </div>
      </section>

      {/* ─── MAP ── */}
      <section className="py-12 px-4 sm:px-6 bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-6">
            <h2 className="text-white font-black text-xl flex items-center gap-2"><MapPin size={20} className="text-violet-400" /> Find Us in Ranchi</h2>
            <p className="text-slate-400 text-sm mt-1">Indrapuri Ratu, Ranchi, Jharkhand – 834001</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl h-80">
              <iframe
  src="https://www.google.com/maps?q=23.3833365,85.3128511&z=15&output=embed"
  width="100%"
  height="100%"
  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Sankalp Home Tuition Location"
/>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
