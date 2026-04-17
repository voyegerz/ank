import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  Target,
  Rocket,
  ShieldCheck,
  Users,
  Briefcase,
  Award,
  TrendingUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../components/PageLayout";
import CommonHero from "../../components/CommonHero";
import CTASection from "@/components/service/CTA";

// ─── 3D Glass Card Component (Shared with Home) ──────────────────────────────
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
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
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
            background:
              "radial-gradient(circle at center, var(--color-primary-hover) 0%, transparent 80%)",
            filter: "blur(60px)",
            transform: "translateZ(-20px)",
          }}
        />

        {/* Main Card */}
        <div
          className="h-full w-full p-8 md:p-10 rounded-sm border border-white/40 transition-all duration-500 backdrop-blur-2xl relative overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(1,0,128,0.1)] group-hover:shadow-[0_20px_80px_rgba(125,211,248,0.2)]"
          style={{
            background:
              "linear-gradient(135deg, rgba(125, 211, 248, 0.15) 0%, rgba(1, 0, 128, 0.05) 50%, rgba(125, 211, 248, 0.05) 100%)",
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

          <div className="relative z-10 flex flex-col h-full">{children}</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CompanyOverview = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <CommonHero
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
        title="Company Overview"
        caption="Who We Are"
        subtitle="ANK Designs & Automation Solutions LLP is an integrated engineering and technology solutions company headquartered in Vadodara, India. We operate at the intersection of engineering design, industrial automation, manufacturing support, and digital technologies."
        watermarkNumber="01"
      />

      {/* Experience Stats Bar */}
      <section className="bg-primary-hover border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          <StatItem label="Years of Experience" value="8+" />
          <StatItem label="Years of Excellence" value="15+" />
          <StatItem label="Industries Served" value="10+" />
          <StatItem label="Successful Projects" value="250+" />
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 bg-white px-6 md:px-16 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                    About the Company
                  </span>
                  <div className="h-px w-12 bg-primary/20" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 uppercase leading-[0.9] tracking-tighter">
                  Multidisciplinary <span className="text-primary italic">Expertise</span>
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed max-w-lg uppercase font-medium">
                  Established with a clear objective—to support industries and manufacturing organizations with dependable, application-oriented, and future-ready engineering solutions.
                </p>
              </div>

              <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
                <p>
                  Our role goes beyond execution; we work closely with clients as a long-term engineering partner, understanding their operational challenges, production environments, and business objectives before proposing solutions.
                </p>
                <p>
                  Every solution we deliver is developed with a strong focus on real-world industrial application, compliance with engineering standards, and long-term usability. Our multidisciplinary capabilities allow clients to access multiple services under one roof, ensuring better coordination and consistent quality.
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => navigate("/contact")}
                  className="inline-flex items-center gap-4 bg-primary text-white hover:bg-slate-900 px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all group/btn"
                >
                  Work With Us
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover/btn:translate-x-1"
                  />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square lg:aspect-[4/5] rounded-sm overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                alt="Our Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 bg-slate-50 px-6 md:px-16 lg:px-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/3" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 lg:p-16 rounded-sm shadow-xl border-t-4 border-primary space-y-8"
            >
              <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-sm">
                <Target className="text-primary" size={32} />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Our Vision</h3>
                <p className="text-slate-500 text-sm leading-relaxed uppercase font-medium">
                  To be recognized as a trusted and competent engineering partner for industries by delivering innovative, practical, and value-driven solutions.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We aim to enhance productivity, efficiency, and technological growth for our clients globally, setting new standards in engineering excellence and industrial innovation.
                </p>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-900 p-12 lg:p-16 rounded-sm shadow-xl border-t-4 border-primary-hover space-y-8 text-white"
            >
              <div className="bg-white/10 w-16 h-16 flex items-center justify-center rounded-sm">
                <Rocket className="text-white" size={32} />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-black uppercase tracking-tighter">Our Mission</h3>
                <p className="text-slate-400 text-sm leading-relaxed uppercase font-medium">
                  To empower industrial and manufacturing businesses through well-engineered, reliable, and scalable solutions.
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  We strive to achieve this by delivering technically sound designs, robust automation systems, efficient manufacturing support, and digital solutions aligned with modern industrial requirements.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white px-6 md:px-16 lg:px-32 relative overflow-hidden">
        {/* Background elements for glassmorphism pop */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Why ANK?</span>
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 uppercase tracking-tighter leading-none">
              The ANK <span className="text-primary italic">Advantage</span>
            </h2>
            <p className="text-slate-500 text-xs font-medium uppercase tracking-widest">
              ANK stands apart through its multidisciplinary expertise, practical engineering mindset, and commitment to quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <WhyItem
              delay={0.1}
              icon={<ShieldCheck size={24} />}
              title="Industrial Focus"
              desc="Strong focus on industrial and manufacturing applications with a practical engineering mindset."
            />
            <WhyItem
              delay={0.2}
              icon={<Users size={24} />}
              title="Integrated Services"
              desc="Integrated engineering, automation, manufacturing, and digital services under one roof."
            />
            <WhyItem
              delay={0.3}
              icon={<Briefcase size={24} />}
              title="End-to-End"
              desc="Full project responsibility from initial concept to final execution and commissioning."
            />
            <WhyItem
              delay={0.4}
              icon={<Award size={24} />}
              title="High Accuracy"
              desc="Emphasis on accuracy, documentation, and compliance with global engineering standards."
            />
            <WhyItem
              delay={0.5}
              icon={<TrendingUp size={24} />}
              title="Future Ready"
              desc="Scalable solutions aligned with modern industrial requirements and digital transformations."
            />
            <WhyItem
              delay={0.6}
              icon={<Award size={24} />}
              title="Transparent"
              desc="Transparent communication and professional execution in every phase of the project."
            />
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Partner with the Experts"
        eyebrowHighlight="Experts"
        heading="Ready to transform your industrial operations with ANK's engineering excellence?"
        primaryLabel="Start a Conversation"
        secondaryLabel="Contact Sales"
        onPrimaryClick={() => navigate("/contact")}
        onSecondaryClick={() => navigate("/contact")}
      />
    </PageLayout>
  );
};

const StatItem = ({ label, value }: { label: string; value: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex flex-col items-center justify-center py-10 border-r border-white/5 last:border-r-0"
  >
    <span className="text-2xl md:text-3xl font-black text-white tracking-tight">
      {value}
    </span>
    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40 mt-1 text-center px-4">
      {label}
    </span>
  </motion.div>
);

const WhyItem = ({
  icon,
  title,
  desc,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay?: number;
}) => (
  <GlassCard delay={delay}>
    <div className="text-primary transition-transform group-hover:scale-110 duration-500 mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-black text-slate-900 uppercase tracking-tighter mb-2">
      {title}
    </h3>
    <p className="text-slate-500 text-xs leading-relaxed font-medium uppercase">
      {desc}
    </p>
  </GlassCard>
);

export default CompanyOverview;
