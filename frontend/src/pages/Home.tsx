import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion'
import PageLayout from '../components/PageLayout'
import {
  ArrowRight, ChevronRight, Settings2, ShieldCheck, Lightbulb,
  Mail, Phone, MapPin, CheckCircle2, Users, Briefcase, Zap,
  Globe, Quote, Clock, ExternalLink, ArrowUpRight
} from 'lucide-react'
import { Link } from 'react-router-dom'

// ─── Brand Colors ────────────────────────────────────────────────────────────
const ANK_NAVY = '#002E5D'
const ANK_CYAN = '#00AEEF'

// ─── Data ──────────────────────────────────────────────────────────────────────

const slides = [
  {
    id: 1, title: "Future\nEngineering", subtitle: "We turn complex engineering challenges into elegant, scalable solutions that move industries forward.",
    cta: "Get Started", link: "/contact",
    bg: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=2400"
  },
  {
    id: 2, title: "Design &\nAutomation", subtitle: "Expert services in 3D/2D CAD development, PLC & SCADA programming, and industrial automation.",
    cta: "Our Services", link: "/services/software-engineering",
    bg: "https://images.unsplash.com/photo-1581082118775-5c7c8ff6e03e?auto=format&fit=crop&q=80&w=2400"
  },
  {
    id: 3, title: "Make It\nPossible", subtitle: "Cutting-edge design, development and manufacturing — from concept to production-ready hardware.",
    cta: "About Us", link: "/about/company-overview",
    bg: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2400"
  },
  {
    id: 4, title: "IoT &\nEmbedded", subtitle: "Connected devices, embedded firmware, and edge intelligence — built for the real world.",
    cta: "Learn More", link: "/contact",
    bg: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=2400"
  }
]

const partners = ['Siemens', 'Bosch', 'Rockwell', 'Honeywell', 'ABB', 'Schneider', 'Emerson', 'Parker']

const solutions = [
  { title: "Power & Energy", desc: "Smart grid integration, energy management systems, and renewable infrastructure for the modern world.", icon: <Zap size={24} />, image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800" },
  { title: "Auto & Aero", desc: "Precision manufacturing, quality engineering and assembly for the automotive and aerospace sectors.", icon: <Globe size={24} />, image: "https://images.unsplash.com/photo-1539186607619-df4765be0585?auto=format&fit=crop&q=80&w=800" },
  { title: "Manufacturing", desc: "End-to-end manufacturing solutions: from rapid prototyping to full-scale production line setup.", icon: <Settings2 size={24} />, image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" },
]

const testimonials = [
  { quote: "Simply the best engineering partner we've worked with. Their team delivered beyond expectations — on time, every time.", author: "Michael Wright", role: "Bello Servicing", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" },
  { quote: "ANK transformed our production line from concept to running in record time. The quality of engineering is unmatched.", author: "Daniel Huberth", role: "Applauz", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" },
  { quote: "Their IoT integration for our factory floor gave us visibility we never had. Exceptional team, exceptional results.", author: "John Strength", role: "Avantage HR", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
]

const team = [
  { name: "Peter Trebuchet", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" },
  { name: "Sawyer Perry",    role: "Production Lead", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800" },
  { name: "Sue Martins",     role: "Engineering Head", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800" },
  { name: "Matthew Garnett", role: "R&D Specialist", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800" },
]

const news = [
  { title: "ANK named industry leader", date: "Oct 02, 2025", excerpt: "Recognized by the Engineering Excellence Awards for the third consecutive year for innovation in industrial automation.", category: "Announcements" },
  { title: "Travis Kirkpatrick appointed EU CEO", date: "Sep 26, 2025", excerpt: "Seasoned executive with 20+ years in European manufacturing brings deep regional expertise to drive expansion.", category: "News" },
  { title: "ANK volunteers for local charity", date: "Sep 17, 2025", excerpt: "Our team spent the weekend building STEM labs for under-resourced schools — because engineering begins with education.", category: "Community" },
]

const portfolio = [
  { title: "Industrial Aero Products", image: "https://images.unsplash.com/photo-1539186607619-df4765be0585?auto=format&fit=crop&q=80&w=900" },
  { title: "Tools for Industry", image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=900" },
  { title: "Berlin Railway Elements", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=900" },
  { title: "Aircraft Components", image: "https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&q=80&w=900" },
]

// ─── Shared glass style ────────────────────────────────────────────────────────
const glass: React.CSSProperties = {
  background: 'rgba(255,255,255,0.9)',
  backdropFilter: 'blur(24px) saturate(160%)',
  WebkitBackdropFilter: 'blur(24px) saturate(160%)',
  border: '1px solid rgba(0,0,0,0.05)',
}

const glassLight: React.CSSProperties = {
  background: 'rgba(255,255,255,0.5)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(0,0,0,0.05)',
}

// ─── Fade-in wrapper ───────────────────────────────────────────────────────────
const FadeIn = ({ children, delay = 0, className = '' }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── Section label ─────────────────────────────────────────────────────────────
const Label = ({ children, color = ANK_CYAN }: { children: React.ReactNode, color?: string }) => (
  <p className="text-[10px] font-black tracking-[0.3em] uppercase mb-5 flex items-center gap-3" style={{ color }}>
    <span className="w-6 h-px" style={{ backgroundColor: color }} />
    {children}
  </p>
)

// ─── Home ──────────────────────────────────────────────────────────────────────
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const heroRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const heroParallax = useTransform(scrollY, [0, 600], [0, 160])

  useEffect(() => {
    const t1 = setInterval(() => setCurrentSlide(p => (p + 1) % slides.length), 6000)
    const t2 = setInterval(() => setCurrentTestimonial(p => (p + 1) % testimonials.length), 5000)
    return () => { clearInterval(t1); clearInterval(t2) }
  }, [])

  return (
    <PageLayout>

      {/* ── 1. Hero slider ─────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] overflow-hidden bg-slate-900">
        {/* Parallax background */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <motion.div
              style={{ y: heroParallax }}
              className="absolute inset-0 scale-110"
            >
              <img
                src={slides[currentSlide].bg}
                className="w-full h-full object-cover"
                alt=""
              />
            </motion.div>
            {/* Dark gradient overlay with Navy tint */}
            <div className="absolute inset-0" style={{ background: `linear-gradient(120deg, ${ANK_NAVY}CC 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2) 100%)` }} />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)' }} />
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Slide counter */}
              <p className="text-[10px] font-black tracking-[0.35em] text-white/50 uppercase mb-8">
                {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </p>

              {/* Title */}
              <h1 className="text-[clamp(3rem,8vw,7.5rem)] font-black text-white leading-[0.9] tracking-tight mb-8 uppercase">
                {slides[currentSlide].title.split('\n').map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </h1>

              <p className="text-[16px] text-white/70 max-w-md mb-12 leading-relaxed font-medium">
                {slides[currentSlide].subtitle}
              </p>

              <Link
                to={slides[currentSlide].link}
                className="group inline-flex items-center gap-3 text-white text-[11px] font-black tracking-widest uppercase px-10 py-4 rounded-sm transition-all shadow-2xl"
                style={{ backgroundColor: ANK_CYAN }}
              >
                {slides[currentSlide].cta}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-10 left-8 md:left-16 lg:left-24 z-20 flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`transition-all duration-500 rounded-full ${currentSlide === i ? 'w-10 h-1.5' : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/50'}`}
              style={{ backgroundColor: currentSlide === i ? ANK_CYAN : undefined }}
            />
          ))}
        </div>

        {/* Vertical scroll hint */}
        <div className="absolute bottom-10 right-10 z-20 hidden md:flex flex-col items-center gap-2 text-white/25">
          <div className="w-px h-16 bg-gradient-to-b from-white/25 to-transparent" />
          <span className="text-[9px] font-black tracking-[0.3em] rotate-90 origin-center translate-y-6 uppercase">scroll</span>
        </div>
      </section>

      {/* ── 2. Feature highlights ────────────────────────────────────────────── */}
      <section className="relative z-20 bg-white border-t border-black/[0.04]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: <ShieldCheck size={22} />, title: 'Integrity', desc: 'We stand behind every project — transparent process, honest timelines, zero compromise on quality.' },
            { icon: <Settings2 size={22} />, title: 'Automation', desc: 'Smarter factories start with smarter software. We automate processes at every level of your operation.' },
            { icon: <Lightbulb size={22} />, title: 'Innovation', desc: 'From R&D to production: we combine novel thinking with field-tested engineering to solve hard problems.' },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div
                className="group p-12 border-r border-b border-black/[0.04] hover:bg-slate-50 transition-all duration-300 cursor-default h-full"
                style={i === 0 ? { borderLeft: '1px solid rgba(0,0,0,0.04)' } : {}}
              >
                <div className="w-12 h-12 rounded-sm flex items-center justify-center mb-8 shadow-sm transition-all group-hover:bg-slate-900 group-hover:text-white" 
                     style={{ ...glassLight, color: ANK_NAVY }}>
                  {item.icon}
                </div>
                <h4 className="text-[14px] font-black text-slate-900 mb-4 uppercase tracking-widest">{item.title}</h4>
                <p className="text-[13px] text-slate-500 leading-relaxed mb-8">{item.desc}</p>
                <Link to="/about" className="text-[10px] font-black tracking-widest uppercase flex items-center gap-2 transition-all hover:gap-3" style={{ color: ANK_CYAN }}>
                  Learn more <ArrowRight size={12} />
                </Link>
              </div>
            </FadeIn>
          ))}

          {/* Contact card */}
          <FadeIn delay={0.24}>
            <div className="p-12 border-b border-black/[0.04] relative overflow-hidden h-full"
              style={{ backgroundColor: ANK_NAVY, borderRight: '1px solid rgba(0,0,0,0.04)' }}
            >
              <div className="absolute -top-10 -right-10 text-[10rem] font-black text-white/[0.03] select-none pointer-events-none uppercase tracking-tight">ANK</div>
              <p className="text-[10px] font-black tracking-[0.3em] text-white/40 uppercase mb-8">Contact</p>
              <div className="space-y-6 mb-10 relative z-10">
                <div className="flex gap-4 items-start">
                  <MapPin size={16} className="text-white/40 mt-0.5 flex-shrink-0" />
                  <p className="text-[13px] text-white/70 leading-relaxed font-medium">Office S-4, 2nd Floor, Commercial Bldg, Pune, MH</p>
                </div>
                <div className="flex gap-4 items-start">
                  <Phone size={16} className="text-white/40 mt-0.5 flex-shrink-0" />
                  <p className="text-[13px] text-white/70 font-medium">+91 123 456 7890</p>
                </div>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-slate-900 text-[10px] font-black tracking-widest uppercase px-6 py-3 rounded-sm hover:bg-white/90 transition-all relative z-10">
                Contact Us <ArrowRight size={12} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 3. ANK Values ────────────────────────────────────────────────────── */}
      <section className="py-32 bg-white border-t border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            {/* Left */}
            <div className="lg:w-5/12">
              <FadeIn>
                <Label>Our Values</Label>
                <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black text-slate-900 leading-[0.95] tracking-tight mb-8 uppercase">
                  Engineering the<br /><span style={{ color: ANK_CYAN }}>best solutions</span>
                </h2>
                <p className="text-[15px] text-slate-500 mb-12 leading-relaxed max-w-md font-medium">
                  We unite global engineering talent with deep domain expertise — delivering outcomes that matter from Pune to the world.
                </p>

                {/* Quote */}
                <div className="mb-12 p-8 rounded-sm relative overflow-hidden border border-black/[0.04] bg-slate-50">
                  <Quote size={32} className="mb-6" style={{ color: ANK_CYAN, opacity: 0.2 }} />
                  <p className="text-[15px] text-slate-700 italic leading-relaxed mb-8 font-medium">
                    "As a small family company, our mission is to create the best engineering solutions and deliver them to our clients."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-sm overflow-hidden flex-shrink-0 shadow-sm">
                      <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100" alt="Peter" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-[12px] font-black text-slate-900 uppercase tracking-wide">Peter Trebuchet</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">ANK Founder</p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 pt-10 border-t border-black/[0.06]">
                  {[['1K+', 'Monthly Visits'], ['98%', 'Satisfaction'], ['4.9', 'Top Rating']].map(([val, lbl]) => (
                    <div key={lbl}>
                      <p className="text-4xl font-black text-slate-900 mb-2 tracking-tight">{val}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{lbl}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right — image grid */}
            <div className="lg:w-7/12">
              <FadeIn delay={0.15}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-6 pt-12">
                    {['https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
                      'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800'].map((src, i) => (
                      <div key={i} className={`${i === 0 ? 'aspect-[4/5]' : 'aspect-square'} overflow-hidden rounded-sm relative group shadow-2xl`}>
                        <img src={src} className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700" alt="" />
                        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors" />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-6">
                    {['https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800',
                      'https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&q=80&w=800'].map((src, i) => (
                      <div key={i} className={`${i === 0 ? 'aspect-square' : 'aspect-[4/5]'} overflow-hidden rounded-sm relative group shadow-2xl`}>
                        <img src={src} className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700" alt="" />
                        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Partners marquee ──────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-t border-black/[0.04] overflow-hidden">
        <p className="text-center text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase mb-12">Trusted by Industry Leaders</p>
        <div className="flex overflow-hidden">
          <div className="flex gap-24 animate-marquee whitespace-nowrap">
            {[...partners, ...partners].map((p, i) => (
              <span key={i} className="text-4xl font-black text-slate-200 hover:text-slate-400 uppercase tracking-widest cursor-default transition-colors select-none">
                {p}
              </span>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
          .animate-marquee { animation: marquee 40s linear infinite; }
        `}</style>
      </section>

      {/* ── 5. Numbers ───────────────────────────────────────────────────────── */}
      <section className="py-32 bg-white border-t border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="flex flex-col lg:flex-row gap-24 items-start">
            {/* Left */}
            <div className="lg:w-1/2">
              <FadeIn>
                <Label>Performance</Label>
                <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black text-slate-900 leading-[0.95] tracking-tight mb-8 uppercase">
                  Our core<br /><span style={{ color: ANK_CYAN }}>success in numbers</span>
                </h2>
                <p className="text-[15px] text-slate-500 mb-14 leading-relaxed max-w-md font-medium">
                  Consistent delivery, elite engineering and a relentless focus on outcomes — measured across every project we've shipped.
                </p>
                <div className="space-y-10 max-w-md">
                  {[['Construction', 98], ['Production', 92], ['Deadlines Met', 95]].map(([label, pct]) => (
                    <ProgressBar key={label as string} label={label as string} percentage={pct as number} />
                  ))}
                </div>
              </FadeIn>
            </div>
            {/* Right — stat grid */}
            <div className="lg:w-1/2">
              <FadeIn delay={0.15}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <Clock size={28} />, val: '24/7', label: 'Support', dark: true },
                    { icon: <Users size={28} />, val: '150+', label: 'Expert Staff', dark: false },
                    { icon: <Briefcase size={28} />, val: '500+', label: 'Projects', dark: false },
                    { icon: <Globe size={28} />, val: '12', label: 'Global Locations', dark: true },
                  ].map((s, i) => (
                    <div key={i} className="p-12 rounded-sm flex flex-col items-start gap-6 group transition-all hover:shadow-2xl" 
                         style={{ 
                           backgroundColor: s.dark ? ANK_NAVY : '#f8fafc',
                           border: '1px solid rgba(0,0,0,0.04)'
                         }}>
                      <div className="transition-colors" style={{ color: s.dark ? ANK_CYAN : ANK_NAVY }}>{s.icon}</div>
                      <div>
                        <p className="text-5xl font-black tracking-tight mb-2" style={{ color: s.dark ? 'white' : ANK_NAVY }}>{s.val}</p>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: s.dark ? 'white' : '#94a3b8', opacity: s.dark ? 0.5 : 1 }}>{s.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Solutions ─────────────────────────────────────────────────────── */}
      <section className="py-32 bg-slate-50 border-t border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <FadeIn>
                <Label>Solutions</Label>
                <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black text-slate-900 leading-[0.95] tracking-tight uppercase">
                  Expert services<br /><span style={{ color: ANK_CYAN }}>for industrial needs</span>
                </h2>
              </FadeIn>
            </div>
            <FadeIn delay={0.1}>
              <Link to="/services" className="inline-flex items-center gap-2 text-[11px] font-black tracking-widest uppercase transition-colors" style={{ color: ANK_NAVY }}>
                View all solutions <ArrowUpRight size={14} />
              </Link>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map((sol, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-sm h-[520px] cursor-pointer shadow-xl">
                  <img src={sol.image} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-1000" alt={sol.title} />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${ANK_NAVY} 0%, rgba(0,0,0,0.2) 60%, transparent 100%)` }} />

                  {/* Index */}
                  <div className="absolute top-8 right-8 text-[11px] font-black text-white/20 tracking-widest">0{i + 1}</div>

                  {/* Icon */}
                  <div className="absolute top-8 left-8 w-12 h-12 rounded-sm flex items-center justify-center text-white shadow-lg transition-all group-hover:bg-white group-hover:text-slate-900" 
                       style={{ background: ANK_CYAN }}>
                    {sol.icon}
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-10">
                    <h3 className="text-[24px] font-black text-white uppercase tracking-tight mb-4">{sol.title}</h3>
                    <p className="text-[13px] text-white/60 leading-relaxed mb-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-400 font-medium">{sol.desc}</p>
                    <Link to="/services" className="inline-flex items-center gap-2 text-[10px] font-black tracking-widest text-white/50 uppercase hover:text-white transition-colors">
                      Learn more <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Communication / We Help ───────────────────────────────────────── */}
      <section className="py-32 bg-white border-t border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            {/* Image */}
            <FadeIn className="lg:w-1/2" delay={0.1}>
              <div className="relative">
                <div className="aspect-video rounded-sm overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="" />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-8 -right-8 p-10 rounded-sm hidden md:flex flex-col justify-center items-center text-center shadow-2xl" 
                     style={{ backgroundColor: ANK_NAVY }}>
                  <p className="text-4xl font-black text-white uppercase leading-[0.9] tracking-tight">WE<br />HELP<br />YOU.</p>
                </div>
              </div>
            </FadeIn>
            {/* Text */}
            <div className="lg:w-1/2">
              <FadeIn>
                <Label>Communication</Label>
                <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black text-slate-900 leading-[0.95] tracking-tight mb-8 uppercase">
                  We help you<br /><span style={{ color: ANK_CYAN }}>communicate better</span>
                </h2>
                <p className="text-[15px] text-slate-500 mb-12 leading-relaxed font-medium">
                  From first contact to ongoing support — we embed ourselves in your engineering process and stay until the job is done right.
                </p>
                <div className="space-y-8 mb-12">
                  {[
                    ['Global Network', 'Mesh low-risk, high-yield alignments with transparent global partners.'],
                    ['Smart Strategy', 'Re-engineer revolutionary services and premium architectures for scale.'],
                  ].map(([title, desc]) => (
                    <div key={title} className="flex gap-5 group">
                      <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 bg-slate-50 text-slate-300 group-hover:bg-slate-900 group-hover:text-white transition-all shadow-sm mt-0.5">
                        <CheckCircle2 size={18} style={{ color: title === 'Global Network' ? ANK_CYAN : undefined }} />
                      </div>
                      <div>
                        <p className="text-[14px] font-black text-slate-900 mb-2 uppercase tracking-widest">{title}</p>
                        <p className="text-[13px] text-slate-500 leading-relaxed font-medium">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/about" className="inline-flex items-center gap-3 text-white text-[11px] font-black tracking-widest uppercase px-10 py-4 rounded-sm transition-all shadow-xl shadow-slate-900/10"
                      style={{ backgroundColor: ANK_NAVY }}>
                  Find out more <ArrowRight size={14} />
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Team ───────────────────────────────────────────────────────────── */}
      <section className="py-32 bg-slate-50 border-t border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <FadeIn className="text-center mb-24">
            <div className="flex justify-center"><Label>Our Team</Label></div>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black text-slate-900 leading-[0.95] tracking-tight uppercase">
              Meet our experts
            </h2>
          </FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="group relative overflow-hidden rounded-sm aspect-[3/4] shadow-xl">
                  <img src={m.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700" alt={m.name} />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${ANK_NAVY}CC 0%, transparent 60%)` }} />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="text-[16px] font-black text-white uppercase tracking-wide">{m.name}</p>
                    <p className="text-[10px] font-bold tracking-widest mt-2 uppercase" style={{ color: ANK_CYAN }}>{m.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. Testimonials ──────────────────────────────────────────────────── */}
      <section className="py-32 bg-white border-t border-black/[0.04] overflow-hidden">
        <div className="max-w-4xl mx-auto px-8 md:px-16 text-center">
          <FadeIn className="flex justify-center">
            <Label>Testimonials</Label>
          </FadeIn>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Quote size={56} className="mx-auto mb-12 opacity-[0.08]" style={{ color: ANK_NAVY }} />
              <h3 className="text-[clamp(1.5rem,3vw,2.8rem)] font-medium text-slate-700 leading-relaxed mb-16 italic font-serif">
                "{testimonials[currentTestimonial].quote}"
              </h3>
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-sm overflow-hidden border-2 shadow-xl" style={{ borderColor: ANK_CYAN }}>
                  <img src={testimonials[currentTestimonial].image} alt="" className="w-full h-full object-cover grayscale" />
                </div>
                <div>
                  <p className="text-[14px] font-black text-slate-900 uppercase tracking-widest">{testimonials[currentTestimonial].author}</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-1.5">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-3 mt-16">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentTestimonial(i)}
                className={`transition-all duration-500 rounded-full ${currentTestimonial === i ? 'w-10 h-1.5' : 'w-1.5 h-1.5 bg-slate-200 hover:bg-slate-300'}`}
                style={{ backgroundColor: currentTestimonial === i ? ANK_NAVY : undefined }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. Careers ───────────────────────────────────────────────────────── */}
      <section className="border-t border-black/[0.04] overflow-hidden flex flex-col lg:flex-row bg-slate-900" style={{ minHeight: 600 }}>
        <div className="lg:w-1/2 relative min-h-[400px]">
          <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200" className="absolute inset-0 w-full h-full object-cover grayscale opacity-60" alt="" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to right, transparent 50%, ${ANK_NAVY})` }} />
        </div>
        <div className="lg:w-1/2 py-32 px-12 lg:px-24 flex flex-col justify-center" style={{ backgroundColor: ANK_NAVY }}>
          <FadeIn>
            <Label color="white">Join Our Team</Label>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black text-white leading-[0.95] tracking-tight mb-8 uppercase">
              Join our<br /><span style={{ color: ANK_CYAN }}>expert team</span>
            </h2>
            <p className="text-[16px] text-white/60 mb-12 leading-relaxed max-w-md font-medium">
              We're always looking for unique minds and talented individuals who want to make a real difference in engineering and automation.
            </p>
            <div className="flex gap-12 mb-14">
              {[['12+', 'Positions'], ['4', 'Units']].map(([v, l]) => (
                <div key={l}>
                  <p className="text-5xl font-black text-white tracking-tight mb-2">{v}</p>
                  <p className="text-[10px] text-white/40 font-black uppercase tracking-widest">{l}</p>
                </div>
              ))}
            </div>
            <Link to="/careers" className="inline-flex items-center gap-3 bg-white text-slate-900 text-[11px] font-black tracking-widest uppercase px-10 py-4 rounded-sm hover:bg-slate-50 transition-all w-fit shadow-2xl">
              Build a career <ArrowRight size={14} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── 11. News ─────────────────────────────────────────────────────────── */}
      <section className="py-32 bg-white border-t border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
            <FadeIn>
              <Label>Insights</Label>
              <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black text-slate-900 leading-[0.95] tracking-tight uppercase">
                Latest from<br /><span style={{ color: ANK_CYAN }}>ANK news</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Link to="/about/newsroom" className="inline-flex items-center gap-2 text-[11px] font-black tracking-widest uppercase transition-colors" style={{ color: ANK_NAVY }}>
                Read all news <ArrowUpRight size={14} />
              </Link>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, i) => (
              <FadeIn key={i} delay={i * 0.09}>
                <div className="group p-10 rounded-sm h-full flex flex-col cursor-pointer bg-slate-50 border border-black/[0.03] hover:bg-white hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="px-3 py-1.5 rounded-sm text-[9px] font-black tracking-widest text-white uppercase" style={{ backgroundColor: ANK_CYAN }}>{item.category}</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase">{item.date}</span>
                  </div>
                  <h4 className="text-[18px] font-black text-slate-900 transition-colors mb-6 leading-tight uppercase tracking-tight">{item.title}</h4>
                  <p className="text-[13px] text-slate-500 leading-relaxed mb-10 flex-1 font-medium">{item.excerpt}</p>
                  <Link to="/about/newsroom" className="inline-flex items-center gap-2 text-[10px] font-black tracking-widest uppercase transition-all hover:gap-3" style={{ color: ANK_NAVY }}>
                    Read more <ArrowRight size={12} />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12. Portfolio ────────────────────────────────────────────────────── */}
      <section className="py-32 bg-slate-50 border-t border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 mb-20">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <FadeIn>
              <Label>Our Work</Label>
              <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black text-slate-900 leading-[0.95] tracking-tight uppercase">
                Recent projects
              </h2>
            </FadeIn>
          </div>
        </div>
        <div className="flex gap-6 px-8 md:px-16 lg:px-24 overflow-x-auto pb-10 no-scrollbar">
          {portfolio.map((item, i) => (
            <FadeIn key={i} delay={i * 0.07} className="flex-shrink-0">
              <div className="w-[340px] md:w-[520px] aspect-video rounded-sm overflow-hidden relative group cursor-pointer shadow-xl">
                <img src={item.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-1000" alt={item.title} />
                <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${ANK_NAVY} 0%, transparent 60%)` }} />
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <h4 className="text-[20px] font-black text-white uppercase tracking-tight translate-y-2 group-hover:translate-y-0 transition-transform duration-400">{item.title}</h4>
                  <Link to="/about/case-studies" className="inline-flex items-center gap-2 text-[10px] font-black tracking-widest text-white/60 uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-400 mt-4">
                    View project <ArrowUpRight size={12} />
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── 13. Map & Locations ───────────────────────────────────────────────── */}
      <section className="border-t border-black/[0.04] bg-white">
        <div className="relative h-[560px] overflow-hidden">
          <div className="absolute inset-0 grayscale opacity-40">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.123!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEzLjQiTiA3M8KwNTEnMjQuMSJF!5e0!3m2!1sen!2sin!4v1610000000000!5m2!1sen!2sin"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
            />
          </div>
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.4) 60%, transparent 100%)' }} />

          {/* Floating info card */}
          <div className="absolute top-1/2 left-10 lg:left-24 -translate-y-1/2 p-10 rounded-sm max-w-sm pointer-events-auto shadow-2xl bg-white border border-black/[0.04]">
            <p className="text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase mb-6">Visit HQ</p>
            <h3 className="text-[24px] font-black text-slate-900 uppercase tracking-tight mb-8">Pune, India</h3>
            <div className="space-y-6 mb-10">
              <div className="flex gap-4 items-start">
                <MapPin size={16} className="text-slate-300 mt-0.5 flex-shrink-0" style={{ color: ANK_CYAN }} />
                <p className="text-[14px] text-slate-600 leading-relaxed font-medium">Office S-4, 2nd Floor, Commercial Building, Pune MH 411001</p>
              </div>
              <div className="flex gap-4 items-center">
                <Mail size={16} className="text-slate-300 flex-shrink-0" style={{ color: ANK_CYAN }} />
                <p className="text-[14px] text-slate-600 font-medium">info@ankautomation.com</p>
              </div>
            </div>
            <button className="w-full py-4 rounded-sm text-[11px] font-black tracking-widest text-white uppercase transition-all shadow-xl"
                    style={{ backgroundColor: ANK_NAVY }}>
              Get Directions
            </button>
          </div>
        </div>

        {/* Location grid */}
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-24 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { icon: <MapPin size={18} />, city: 'Pune HQ', address: 'Commercial Bldg, Pune 411001' },
            { icon: <MapPin size={18} />, city: 'Mumbai', address: 'Tech Park, Mumbai 400001' },
            { icon: <Mail size={18} />, city: 'Email Us', address: 'info@ankautomation.com' },
            { icon: <Phone size={18} />, city: 'Call Us', address: '+91 123 456 7890' },
          ].map((loc, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <div className="group">
                <div className="w-12 h-12 rounded-sm flex items-center justify-center text-slate-300 bg-slate-50 group-hover:bg-slate-900 group-hover:text-white mb-6 transition-all shadow-sm">
                  {React.cloneElement(loc.icon as React.ReactElement, { style: { color: ANK_CYAN } })}
                </div>
                <p className="text-[14px] font-black text-slate-900 uppercase tracking-widest mb-3">{loc.city}</p>
                <p className="text-[13px] text-slate-500 leading-relaxed font-medium">{loc.address}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── 14. Final CTA ─────────────────────────────────────────────────────── */}
      <section className="py-48 bg-slate-50 border-t border-black/[0.04] text-center relative overflow-hidden">
        {/* Ambient glow with Cyan */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-[0.08]" 
               style={{ background: `radial-gradient(ellipse, ${ANK_CYAN}, transparent 70%)` }} />
        </div>
        <div className="max-w-4xl mx-auto px-8 relative z-10">
          <FadeIn>
            <p className="text-[11px] font-black tracking-[0.4em] text-slate-400 uppercase mb-10">Ready to begin?</p>
            <h2 className="text-[clamp(3.5rem,8vw,7.5rem)] font-black text-slate-900 leading-[0.85] tracking-tight mb-12 uppercase">
              Launch your<br /><span style={{ color: ANK_CYAN }}>next project.</span>
            </h2>
            <p className="text-[18px] text-slate-500 mb-16 max-w-xl mx-auto leading-relaxed font-medium">
              With a team of unique minds, your imagined idea becomes reality — without the hassle.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="group inline-flex items-center justify-center gap-3 text-white text-[11px] font-black tracking-widest uppercase px-12 py-5 rounded-sm shadow-2xl transition-all"
                    style={{ backgroundColor: ANK_NAVY }}>
                Start a project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center gap-3 text-[11px] font-black tracking-widest text-slate-900 uppercase px-12 py-5 rounded-sm border-2 border-slate-900/10 hover:border-slate-900 transition-all bg-white shadow-sm">
                Our services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </PageLayout>
  )
}

// ─── Progress bar ──────────────────────────────────────────────────────────────
const ProgressBar = ({ label, percentage }: { label: string; percentage: number }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <div ref={ref}>
      <div className="flex justify-between mb-4">
        <span className="text-[12px] font-black text-slate-900 uppercase tracking-widest">{label}</span>
        <span className="text-[12px] font-black text-slate-400">{percentage}%</span>
      </div>
      <div className="h-1.5 bg-slate-100 overflow-hidden rounded-full shadow-inner">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full"
          style={{ backgroundColor: ANK_NAVY }}
        />
      </div>
    </div>
  )
}

export default Home
