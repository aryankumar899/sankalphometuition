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
              { icon: MapPin, title: "Visit Us", info: "Lalpur Chowk, Ranchi, Jharkhand – 834001", sub: "Mon–Sat: 9 AM – 7 PM", color: "from-violet-500 to-indigo-600" },
              { icon: Phone, title: "Call Us", info: "+91 90000 00000", sub: "+91 80000 00000", color: "from-emerald-500 to-teal-500" },
              { icon: Mail, title: "Email Us", info: "info@sankalptuition.in", sub: "Reply within 2 hours", color: "from-amber-500 to-orange-500" },
              { icon: MessageCircle, title: "WhatsApp", info: "+91 90000 00000", sub: "Available 8 AM – 10 PM", color: "from-green-500 to-emerald-500" },
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
              <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center">
                    <BookOpen size={18} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-white font-black text-lg">Book a Demo / Inquiry</h2>
                    <p className="text-slate-400 text-xs">Get a free demo class booked within 24 hours</p>
                  </div>
                </div>

                {inquirySent ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                    <CheckCircle2 size={48} className="text-emerald-400 mx-auto mb-4" />
                    <h3 className="text-white font-bold text-lg mb-2">Inquiry Sent!</h3>
                    <p className="text-slate-400 text-sm">We'll contact you within 2 hours to schedule your free demo class.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleInquiry} className="flex flex-col gap-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormInput label="Student Name" placeholder="Enter student name" required />
                      <FormInput label="Parent Name" placeholder="Enter parent name" required />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormInput label="Mobile Number" type="tel" placeholder="+91 XXXXX XXXXX" required />
                      <FormInput label="Email Address" type="email" placeholder="your@email.com" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormSelect label="Class / Grade" required options={["Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12", "JEE Preparation", "NEET Preparation"]} />
                      <FormSelect label="Subject Required" required options={["Mathematics", "Science", "Physics", "Chemistry", "Biology", "English", "Social Studies", "Hindi", "Computer Science", "All Subjects"]} />
                    </div>
                    <FormSelect label="Preferred Class Type" required options={["Home Tuition (Teacher Visits Home)", "Online Live Classes", "Group Classes (Batch)"]} />
                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-2">Additional Message</label>
                      <textarea rows={3} placeholder="Any specific requirements or questions..." className="w-full bg-white/[0.04] border border-white/[0.1] text-white placeholder-slate-500 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-violet-500/60 focus:bg-white/[0.06] transition-all duration-200 resize-none" />
                    </div>
                    <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-6 py-3.5 rounded-xl font-semibold text-sm shadow-xl shadow-violet-500/25 hover:shadow-violet-500/40 transition-all">
                      <Send size={16} /> Submit Inquiry
                    </motion.button>
                  </form>
                )}
              </div>
            </FadeIn>

            {/* Feedback Form */}
            <div className="flex flex-col gap-8">
              <FadeIn delay={0.1}>
                <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-7">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                      <User size={18} className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-white font-black text-lg">Share Feedback</h2>
                      <p className="text-slate-400 text-xs">Help us serve you better</p>
                    </div>
                  </div>

                  {feedbackSent ? (
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                      <CheckCircle2 size={40} className="text-amber-400 mx-auto mb-3" />
                      <h3 className="text-white font-bold mb-1">Thank You!</h3>
                      <p className="text-slate-400 text-sm">Your feedback helps us grow and improve.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleFeedback} className="flex flex-col gap-4">
                      <FormInput label="Your Name" placeholder="Enter your name" required />
                      <FormInput label="Mobile / Email" placeholder="Contact details" required />
                      <FormSelect label="Feedback Type" options={["General Feedback", "Teacher Performance", "Service Quality", "Suggestion", "Complaint"]} />
                      <div>
                        <label className="block text-slate-300 text-sm font-medium mb-2">Your Rating</label>
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map((n) => (
                            <button key={n} type="button" className="w-10 h-10 bg-white/[0.05] border border-white/[0.1] rounded-xl text-amber-400 hover:bg-amber-500/20 hover:border-amber-500/40 transition-colors text-sm font-bold">
                              {n}★
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-slate-300 text-sm font-medium mb-2">Your Feedback</label>
                        <textarea rows={3} placeholder="Share your experience with Sankalp..." className="w-full bg-white/[0.04] border border-white/[0.1] text-white placeholder-slate-500 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-amber-500/60 transition-all duration-200 resize-none" />
                      </div>
                      <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3.5 rounded-xl font-semibold text-sm shadow-xl shadow-amber-500/25 transition-all">
                        <Send size={16} /> Submit Feedback
                      </motion.button>
                    </form>
                  )}
                </div>
              </FadeIn>

              {/* Quick Contact Chips */}
              <FadeIn delay={0.2}>
                <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6">
                  <h3 className="text-white font-bold text-sm mb-4 flex items-center gap-2"><Clock size={15} className="text-violet-400" /> Office Hours</h3>
                  <div className="flex flex-col gap-2.5">
                    {[["Monday – Friday", "9:00 AM – 7:00 PM"], ["Saturday", "9:00 AM – 5:00 PM"], ["Sunday", "10:00 AM – 2:00 PM"], ["WhatsApp Support", "8:00 AM – 10:00 PM Daily"]].map(([day, time]) => (
                      <div key={day} className="flex items-center justify-between">
                        <span className="text-slate-400 text-sm">{day}</span>
                        <span className="text-white text-sm font-medium">{time}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 pt-5 border-t border-white/[0.06]">
                    <a href="https://wa.me/919000000000" className="flex items-center justify-center gap-2 bg-[#25D366]/15 border border-[#25D366]/25 text-[#25D366] hover:bg-[#25D366]/25 px-5 py-3 rounded-xl font-semibold text-sm transition-all">
                      <MessageCircle size={16} /> Chat on WhatsApp Now
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MAP ── */}
      <section className="py-12 px-4 sm:px-6 bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-6">
            <h2 className="text-white font-black text-xl flex items-center gap-2"><MapPin size={20} className="text-violet-400" /> Find Us in Ranchi</h2>
            <p className="text-slate-400 text-sm mt-1">Lalpur Chowk, Ranchi, Jharkhand – 834001</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.1836305!2d85.3095!3d23.3441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e104aa5db7f9%3A0x2b793e3fbd!2sLalpur%2C%20Ranchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1683000000000!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Sankalp Home Tuition Location"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
