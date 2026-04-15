import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import PageLayout from "../components/PageLayout";
import {
  CheckCircle2,
  Users,
  Briefcase,
  Zap,
  Globe,
  ArrowRight,
  Settings2,
  Quote,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import MapSection from "../components/MapSection";

// ─── Data ──────────────────────────────────────────────────────────────────────

const slides = [
  {
    id: 1,
    title: "Future\nEngineering",
    subtitle:
      "We turn complex engineering challenges into elegant, scalable solutions that move industries forward.",
    cta: "Get Started",
    link: "/contact",
    bg: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=2400",
  },
  {
    id: 2,
    title: "Design &\nAutomation",
    subtitle:
      "Expert services in 3D/2D CAD development, PLC & SCADA programming, and industrial automation.",
    cta: "Our Services",
    link: "/services",
    bg: "https://images.unsplash.com/photo-1581082118775-5c7c8ff6e03e?auto=format&fit=crop&q=80&w=2400",
  },
  {
    id: 3,
    title: "Make It\nPossible",
    subtitle:
      "Cutting-edge design, development and manufacturing — from concept to production-ready hardware.",
    cta: "About Us",
    link: "/about/company-overview",
    bg: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2400",
  },
  {
    id: 4,
    title: "IoT &\nEmbedded",
    subtitle:
      "Connected devices, embedded firmware, and edge intelligence — built for the real world.",
    cta: "Learn More",
    link: "/contact",
    bg: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=2400",
  },
];

const testimonials = [
  {
    quote:
      "Simply the best engineering partner we've worked with. Their team delivered beyond expectations — on time, every time.",
    author: "Michael Wright",
    role: "Bello Servicing",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
  },
  {
    quote:
      "ANK transformed our production line from concept to running in record time. The quality of engineering is unmatched.",
    author: "Daniel Huberth",
    role: "Applauz",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
  },
  {
    quote:
      "Their IoT integration for our factory floor gave us visibility we never had. Exceptional team, exceptional results.",
    author: "John Strength",
    role: "Avantage HR",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
];

const team = [
  {
    name: "Peter Trebuchet",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Sawyer Perry",
    role: "Production Lead",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Sue Martins",
    role: "Engineering Head",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Matthew Garnett",
    role: "R&D Specialist",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
  },
];

// ─── Fade-in wrapper ───────────────────────────────────────────────────────────
const FadeIn = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
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
  );
};

// ─── Section label ─────────────────────────────────────────────────────────────
const Label = ({
  children,
  color = "var(--color-primary-hover)",
}: {
  children: React.ReactNode;
  color?: string;
}) => (
  <p
    className="text-[10px] font-black tracking-[0.3em] uppercase mb-5 flex items-center gap-3 font-sans"
    style={{ color }}
  >
    <span className="w-6 h-px" style={{ backgroundColor: color }} />
    {children}
  </p>
);

// ─── 3D Glass Card ──────────────────────────────────────────────────────────
const GlassCard = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

  const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);
  const glareOpacity = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseXVal = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseYVal = (e.clientY - rect.top) / rect.height - 0.5;
    
    x.set(mouseXVal);
    y.set(mouseYVal);
    glareOpacity.set(0.6);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    glareOpacity.set(0);
  };

  return (
    <FadeIn delay={delay} className="h-full">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: "1200px",
        }}
        className={`relative h-full w-full group ${className}`}
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="h-full w-full relative"
        >
          {/* External glow */}
          <div 
            className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
            style={{
              background: "radial-gradient(circle at center, var(--color-primary-hover) 0%, transparent 80%)",
              filter: "blur(60px)",
              transform: "translateZ(-20px)",
            }}
          />

          {/* Main Card */}
          <div
            className="h-full w-full p-10 rounded-sm border border-white/40 transition-all duration-500 backdrop-blur-2xl relative overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(1,0,128,0.1)] group-hover:shadow-[0_20px_80px_rgba(125,211,248,0.2)]"
            style={{
              background: "linear-gradient(135deg, rgba(125, 211, 248, 0.15) 0%, rgba(1, 0, 128, 0.05) 50%, rgba(125, 211, 248, 0.05) 100%)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Ambient inner glow */}
            <div className="absolute inset-0 bg-radial-gradient from-white/10 to-transparent opacity-50 pointer-events-none" />

            {/* Dynamic Glare */}
            <motion.div 
              style={{
                background: `radial-gradient(circle at center, rgba(125,211,248,0.5) 0%, transparent 80%)`,
                left: glareX,
                top: glareY,
                opacity: glareOpacity,
                width: "150%",
                height: "150%",
                translateX: "-50%",
                translateY: "-50%",
              }}
              className="absolute pointer-events-none z-20 mix-blend-overlay"
            />

            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/p6.png')] z-0" />
            
            <div style={{ transform: "translateZ(50px)" }} className="relative z-10 flex flex-col h-full">
              {children}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </FadeIn>
  );
};

// ─── Home ──────────────────────────────────────────────────────────────────────
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 600], [0, 160]);

  useEffect(() => {
    const t1 = setInterval(
      () => setCurrentSlide((p) => (p + 1) % slides.length),
      6000,
    );
    const t2 = setInterval(
      () => setCurrentTestimonial((p) => (p + 1) % testimonials.length),
      5000,
    );
    return () => {
      clearInterval(t1);
      clearInterval(t2);
    };
  }, []);

  return (
    <PageLayout>
      {/* ── 1. Hero slider ─────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-175 overflow-hidden bg-slate-900"
      >
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
              style={{ 
                y: heroParallax,
                backgroundImage: `url(${slides[currentSlide].bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="absolute inset-0 scale-110"
            />
            {/* Theme Tint Overlay */}
            <div className="absolute inset-0 bg-primary/50" />

            {/* Dark gradient overlay for text readability */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(120deg, rgba(15, 35, 82, 0.8) 0%, rgba(15, 35, 82, 0.4) 50%, transparent 100%)`,
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)",
              }}
            />
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
              <p className="text-[10px] font-black tracking-[0.35em] text-white/50 uppercase mb-8 font-barlow">
                {String(currentSlide + 1).padStart(2, "0")} /{" "}
                {String(slides.length).padStart(2, "0")}
              </p>

              {/* Title */}
              <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-black text-white leading-[0.9] mb-8 uppercase font-sans">
                {slides[currentSlide].title.split("\n").map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h1>

              <p className="text-[14px] text-white/70 max-w-sm mb-12 leading-relaxed font-medium">
                {slides[currentSlide].subtitle}
              </p>

              <Link
                to={slides[currentSlide].link}
                className="group inline-flex items-center gap-3 text-white text-[11px] font-black tracking-widest uppercase px-10 py-4 rounded-sm transition-all shadow-2xl hover:bg-primary-hover bg-primary"
              >
                {slides[currentSlide].cta}
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
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
              className={`transition-all duration-500 rounded-full ${currentSlide === i ? "w-10 h-1.5" : "w-1.5 h-1.5 bg-white/20 hover:bg-white/50"}`}
              style={{
                backgroundColor:
                  currentSlide === i ? "var(--color-primary)" : undefined,
              }}
            />
          ))}
        </div>

        {/* Vertical scroll hint */}
        <div className="absolute bottom-10 right-10 z-20 hidden md:flex flex-col items-center gap-2 text-white/25">
          <div className="w-px h-16 bg-linear-to-b from-white/25 to-transparent" />
          <span className="text-[9px] font-black tracking-[0.3em] rotate-90 origin-center translate-y-6 uppercase">
            scroll
          </span>
        </div>
      </section>

      {/* ── 2. Our Services ─────────────────────────────────────────────────── */}
      <section id="services" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <FadeIn className="mb-20">
            <Label>Our Solutions</Label>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black text-slate-900 leading-[0.95] uppercase font-sans">
              Professional <span className="text-primary-hover">Services</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Product Designs",
                items: ["Cad Design - 2D & 3D", "FEA Analysis", "Reverse Engineering", "SPM"],
                icon: <Settings2 size={24} />,
              },
              {
                title: "Industrial Automation",
                items: ["PLC Programming", "Panel Automation", "DCS/SCADA/HMI"],
                icon: <Zap size={24} />,
              },
              {
                title: "Software Solutions",
                items: ["Website Design", "Application Design", "SAAS", "Mobile App", "Web/IoT App", "Inventory Mgt."],
                icon: <Globe size={24} />,
              },
              {
                title: "Manufacturing",
                items: ["Rapid Prototyping", "3D Printing", "PCB Design/Manufacture"],
                icon: <Briefcase size={24} />,
              },
              {
                title: "Student Outreach",
                items: ["Schools/College Projects", "Workshops", "Project to Product (P2P)", "DIY Robotics Kits"],
                icon: <Users size={24} />,
              },
            ].map((service, i) => (
              <GlassCard key={i} delay={i * 0.1}>
                <div className="w-12 h-12 bg-white/50 rounded-sm flex items-center justify-center mb-8 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 uppercase mb-6 font-sans group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-[13px] text-slate-500 font-bold uppercase tracking-tight">
                      <CheckCircle2 size={14} className="text-primary/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2.5 Our Values ─────────────────────────────────────────────────── */}
      <section className="py-32 bg-slate-50 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <FadeIn className="text-center mb-20">
            <Label>ANK Values</Label>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black text-slate-900 leading-[0.95] uppercase font-sans">
              Built on <span className="text-primary-hover">Core Principles</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Integrity",
                desc: "Honesty and transparency in all engineering processes.",
                icon: <ShieldCheck size={24} />,
              },
              {
                title: "Automation",
                desc: "Streamlining operations for maximum efficiency and growth.",
                icon: <Zap size={24} />,
              },
              {
                title: "Innovation",
                desc: "Constantly pushing the boundaries of design and automation.",
                icon: <Globe size={24} />,
              },
              {
                title: "Excellence",
                desc: "Committed to delivering high-quality, precise industrial solutions.",
                icon: <Settings2 size={24} />,
              },
            ].map((value, i) => (
              <GlassCard key={i} delay={i * 0.1}>
                <div className="w-14 h-14 bg-white/50 rounded-sm flex items-center justify-center mb-8 mx-auto group-hover:bg-primary group-hover:text-white transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-lg font-black text-slate-900 uppercase mb-4 font-sans text-center">
                  {value.title}
                </h3>
                <p className="text-[13px] text-slate-500 font-medium leading-relaxed uppercase tracking-tight text-center">
                  {value.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Student Outreach ─────────────────────────────────────────────── */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 skew-x-[-15deg] translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <Label color="var(--color-primary-hover)">Student Outreach</Label>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black text-white leading-[0.95] mb-8 uppercase font-sans">
                Are you a <span className="text-primary-hover">student?</span>
              </h2>
              <p className="text-base text-slate-400 mb-10 leading-relaxed max-w-lg font-medium">
                We believe engineering begins with education. Our student outreach programs provide hands-on experience, mentorship, and resources to help the next generation of innovators build the future.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  "Schools/College Projects",
                  "Industry Workshops",
                  "Project to Product (P2P)",
                  "DIY Robotics Kits",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[12px] font-black uppercase tracking-widest text-slate-300">
                    <span className="w-2 h-2 bg-primary-hover rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-primary text-white text-[11px] font-black tracking-widest uppercase px-12 py-5 rounded-sm hover:bg-primary-hover transition-all shadow-2xl"
              >
                Get in touch with us <ArrowRight size={16} />
              </Link>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative aspect-video rounded-sm overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200"
                  className="w-full h-full object-cover grayscale brightness-50"
                  alt="Student Outreach"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-10 bg-black/40 backdrop-blur-md border border-white/10 rounded-sm text-center">
                    <p className="text-3xl font-black text-white mb-2 uppercase font-sans">1000+</p>
                    <p className="text-[10px] text-slate-300 font-bold uppercase tracking-[0.2em]">Students Empowered</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 8. Team ───────────────────────────────────────────────────────────── */}
      <section className="py-32 bg-slate-50 border-t border-black/4">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <FadeIn className="text-center mb-24">
            <div className="flex justify-center">
              <Label>Our Team</Label>
            </div>
            <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-black text-slate-900 leading-[0.95] uppercase font-sans">
              Meet our experts
            </h2>
          </FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="group relative overflow-hidden rounded-sm aspect-3/4 shadow-xl">
                  <img
                    src={m.image}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700"
                    alt={m.name}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, var(--color-primary)CC 0%, transparent 60%)`,
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="text-[14px] font-black text-white uppercase tracking-wide font-sans">
                      {m.name}
                    </p>
                    <p className="text-[10px] font-bold tracking-widest mt-2 uppercase text-primary-hover">
                      {m.role}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. Testimonials ────────────────────────────────────────────────────── */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 relative z-10">
          <FadeIn className="text-center mb-20">
            <Label>Testimonials</Label>
            <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-black text-slate-900 leading-[0.95] uppercase font-sans">
              What our <span className="text-primary-hover">clients say</span>
            </h2>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <div className="flex justify-center mb-10 text-primary-hover/20">
                  <Quote size={80} strokeWidth={1} />
                </div>
                <p className="text-[clamp(1.1rem,2.5vw,1.8rem)] font-black text-slate-800 leading-tight mb-12 font-sans italic">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                <div className="flex items-center justify-center gap-5">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary-hover shadow-xl">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-[14px] font-black text-slate-900 uppercase tracking-widest">
                      {testimonials[currentTestimonial].author}
                    </p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-3 mt-16">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`transition-all duration-500 rounded-full ${currentTestimonial === i ? "w-8 h-1" : "w-1 h-1 bg-slate-200"}`}
                  style={{
                    backgroundColor:
                      currentTestimonial === i
                        ? "var(--color-primary)"
                        : undefined,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. Careers ───────────────────────────────────────────────────────── */}
      <section
        className="border-t border-black/4 overflow-hidden flex flex-col lg:flex-row bg-slate-900"
        style={{ minHeight: 600 }}
      >
        <div className="lg:w-1/2 relative min-h-100 bg-primary">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Theme Tint Overlay */}
          <div className="absolute inset-0 bg-primary/50" />
          
          {/* Subtle overlay to fade into the right content side */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, transparent 60%, var(--color-primary))`,
            }}
          />
        </div>
        <div className="lg:w-1/2 py-32 px-12 lg:px-24 flex flex-col justify-center bg-primary">
          <FadeIn>
            <Label color="white">Join Our Team</Label>
            <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-black text-white leading-[0.95] mb-8 uppercase font-sans">
              Join our
              <br />
              <span className="text-primary-hover">expert team</span>
            </h2>
            <p className="text-[14px] text-white/60 mb-12 leading-relaxed max-w-sm font-medium">
              We're always looking for unique minds and talented individuals who
              want to make a real difference in engineering and automation.
            </p>
            <div className="flex gap-12 mb-14">
              {[
                ["12+", "Positions"],
                ["4", "Units"],
              ].map(([v, l]) => (
                <div key={l}>
                  <p className="text-4xl font-black text-white mb-2 font-sans">
                    {v}
                  </p>
                  <p className="text-[9px] text-white/40 font-black uppercase tracking-widest">
                    {l}
                  </p>
                </div>
              ))}
            </div>
            <Link
              to="/careers"
              className="inline-flex items-center gap-3 bg-white text-slate-900 text-[11px] font-black tracking-widest uppercase px-10 py-4 rounded-sm hover:bg-slate-50 transition-all w-fit shadow-2xl"
            >
              Build a career <ArrowRight size={14} />
            </Link>
          </FadeIn>
        </div>
      </section>


      {/* ── 13. Map & Locations ───────────────────────────────────────────────── */}
      <MapSection />

      {/* ── 14. Final CTA ─────────────────────────────────────────────────────── */}
      <section className="py-48 bg-slate-50 border-t border-black/4 text-center relative overflow-hidden">
        {/* Ambient glow with Primary */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-125 rounded-full opacity-[0.08]"
            style={{
              background: `radial-gradient(ellipse, var(--color-primary-hover), transparent 70%)`,
            }}
          />
        </div>
        <div className="max-w-4xl mx-auto px-8 relative z-10">
          <FadeIn>
            <p className="text-[11px] font-black tracking-[0.4em] text-slate-400 uppercase mb-10">
              Ready to begin?
            </p>
            <h2 className="text-[clamp(2.5rem,7vw,6.5rem)] font-black text-slate-900 leading-[0.85] mb-12 uppercase font-sans">
              Launch your
              <br />
              <span className="text-primary-hover">next project.</span>
            </h2>
            <p className="text-[16px] text-slate-500 mb-16 max-w-lg mx-auto leading-relaxed font-medium">
              With a team of unique minds, your imagined idea becomes reality —
              without the hassle.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-3 text-white text-[11px] font-black tracking-widest uppercase px-12 py-5 rounded-sm shadow-2xl transition-all hover:bg-primary-hover bg-primary"
              >
                Explore Solutions{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-3 text-[11px] font-black tracking-widest text-slate-900 uppercase px-12 py-5 rounded-sm border-2 border-slate-900/10 hover:border-slate-900 transition-all bg-white shadow-sm"
              >
                Our services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
