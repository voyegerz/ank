import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import PageLayout from "../components/PageLayout";
import {
  ArrowRight,
  Settings2,
  ShieldCheck,
  Lightbulb,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Users,
  Briefcase,
  Zap,
  Globe,
  Quote,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

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
    link: "/services/software-engineering",
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

const partners = [
  "Siemens",
  "Bosch",
  "Rockwell",
  "Honeywell",
  "ABB",
  "Schneider",
  "Emerson",
  "Parker",
];

const solutions = [
  {
    title: "Power & Energy",
    desc: "Smart grid integration, energy management systems, and renewable infrastructure for the modern world.",
    icon: <Zap size={24} />,
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Auto & Aero",
    desc: "Precision manufacturing, quality engineering and assembly for the automotive and aerospace sectors.",
    icon: <Globe size={24} />,
    image:
      "https://images.unsplash.com/photo-1539186607619-df4765be0585?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Manufacturing",
    desc: "End-to-end manufacturing solutions: from rapid prototyping to full-scale production line setup.",
    icon: <Settings2 size={24} />,
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
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

const news = [
  {
    title: "ANK named industry leader",
    date: "Oct 02, 2025",
    excerpt:
      "Recognized by the Engineering Excellence Awards for the third consecutive year for innovation in industrial automation.",
    category: "Announcements",
  },
  {
    title: "Travis Kirkpatrick appointed EU CEO",
    date: "Sep 26, 2025",
    excerpt:
      "Seasoned executive with 20+ years in European manufacturing brings deep regional expertise to drive expansion.",
    category: "News",
  },
  {
    title: "ANK volunteers for local charity",
    date: "Sep 17, 2025",
    excerpt:
      "Our team spent the weekend building STEM labs for under-resourced schools — because engineering begins with education.",
    category: "Community",
  },
];

const portfolio = [
  {
    title: "Industrial Aero Products",
    image:
      "https://images.unsplash.com/photo-1539186607619-df4765be0585?auto=format&fit=crop&q=80&w=900",
  },
  {
    title: "Tools for Industry",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=900",
  },
  {
    title: "Berlin Railway Elements",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=900",
  },
  {
    title: "Aircraft Components",
    image:
      "https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&q=80&w=900",
  },
];

// ─── Shared glass style ────────────────────────────────────────────────────────

const glassLight: React.CSSProperties = {
  background: "rgba(255,255,255,0.5)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(0,0,0,0.05)",
};

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
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(120deg, var(--color-primary)CC 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2) 100%)`,
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)",
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

      {/* ── 10. Careers ───────────────────────────────────────────────────────── */}
      <section
        className="border-t border-black/4 overflow-hidden flex flex-col lg:flex-row bg-slate-900"
        style={{ minHeight: 600 }}
      >
        <div className="lg:w-1/2 relative min-h-100">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200"
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-60"
            alt=""
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, transparent 50%, var(--color-primary))`,
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


      {/* ── 12. Portfolio ────────────────────────────────────────────────────── */}
      <section className="py-32 bg-slate-50 border-t border-black/4">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 mb-20">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <FadeIn>
              <Label>Our Work</Label>
              <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-black text-slate-900 leading-[0.95] uppercase font-sans">
                Recent projects
              </h2>
            </FadeIn>
          </div>
        </div>
        <div className="flex gap-6 px-8 md:px-16 lg:px-24 overflow-x-auto pb-10 no-scrollbar">
          {portfolio.map((item, i) => (
            <FadeIn key={i} delay={i * 0.07} className="shrink-0">
              <div className="w-85 md:w-130 aspect-video rounded-sm overflow-hidden relative group cursor-pointer shadow-xl">
                <img
                  src={item.image}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-1000"
                  alt={item.title}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, var(--color-primary) 0%, transparent 60%)`,
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <h4 className="text-[18px] font-black text-white uppercase translate-y-2 group-hover:translate-y-0 transition-transform duration-400 font-sans">
                    {item.title}
                  </h4>
                  <Link
                    to="/about/case-studies"
                    className="inline-flex items-center gap-2 text-[10px] font-black tracking-widest text-white/60 uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-400 mt-4"
                  >
                    View project <ArrowUpRight size={12} />
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── 13. Map & Locations ───────────────────────────────────────────────── */}
      <section className="border-t border-black/4 bg-white">
        <div className="relative h-140 overflow-hidden">
          <div className="absolute inset-0 grayscale opacity-40">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.123!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEzLjQiTiA3M8KwNTEnMjQuMSJF!5e0!3m2!1sen!2sin!4v1610000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.4) 60%, transparent 100%)",
            }}
          />

          {/* Floating info card */}
          <div className="absolute top-1/2 left-10 lg:left-24 -translate-y-1/2 p-10 rounded-sm max-w-sm pointer-events-auto shadow-2xl bg-white border border-black/4">
            <p className="text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase mb-6">
              Visit HQ
            </p>
            <h3 className="text-[20px] font-black text-slate-900 uppercase mb-8 font-sans">
              Pune, India
            </h3>
            <div className="space-y-6 mb-10">
              <div className="flex gap-4 items-start">
                <MapPin
                  size={16}
                  className="text-slate-300 mt-0.5 shrink-0 text-primary-hover"
                />
                <p className="text-[14px] text-slate-600 leading-relaxed font-medium">
                  Office S-4, 2nd Floor, Commercial Building, Pune MH 411001
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <Mail
                  size={16}
                  className="text-slate-300 shrink-0 text-primary-hover"
                />
                <p className="text-[14px] text-slate-600 font-medium">
                  info@ankautomation.com
                </p>
              </div>
            </div>
            <button className="w-full py-4 rounded-sm text-[11px] font-black tracking-widest text-white uppercase transition-all shadow-xl bg-primary">
              Get Directions
            </button>
          </div>
        </div>

      </section>

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
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 text-white text-[11px] font-black tracking-widest uppercase px-12 py-5 rounded-sm shadow-2xl transition-all hover:bg-primary-hover bg-primary"
              >
                Start a project{" "}
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

// ─── Progress bar ──────────────────────────────────────────────────────────────
const ProgressBar = ({
  label,
  percentage,
}: {
  label: string;
  percentage: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref}>
      <div className="flex justify-between mb-4">
        <span className="text-[11px] font-black text-slate-900 uppercase tracking-widest font-sans">
          {label}
        </span>
        <span className="text-[11px] font-black text-slate-400">
          {percentage}%
        </span>
      </div>
      <div className="h-1.5 bg-slate-100 overflow-hidden rounded-full shadow-inner">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full bg-primary"
        />
      </div>
    </div>
  );
};

export default Home;
