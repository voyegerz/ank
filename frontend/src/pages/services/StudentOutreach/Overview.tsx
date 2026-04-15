import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import { ArrowRight, GraduationCap, BookOpen, Rocket, Cpu } from "lucide-react";

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

const SUB_SERVICES = [
  {
    title: "School & College Projects",
    path: "/services/schools-college-projects",
    desc: "Technical support and high-quality components for academic engineering projects and competitions.",
    icon: <GraduationCap size={24} />,
    image: "https://images.unsplash.com/photo-1523240715630-9918c13bc1ad?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Engineering Workshops",
    path: "/services/workshops",
    desc: "Intensive hands-on training in PLC, 3D Design, and IoT for students and professionals.",
    icon: <BookOpen size={24} />,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Project to Product (P2P)",
    path: "/services/project-to-product",
    desc: "Commercializing technical innovations through professional design, manufacturing, and business mentorship.",
    icon: <Rocket size={24} />,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "DIY Robotics Kits",
    path: "/products/courses",
    desc: "Specially designed robotics and electronics kits to help students learn by building real-world applications.",
    icon: <Cpu size={24} />,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
  }
];

const StudentOutreachOverview = () => {
  return (
    <PageLayout>
      <CommonHero
        title="Student Outreach"
        caption="Nurturing Talent"
        subtitle="Empowering the next generation of engineers with the tools, knowledge, and mentorship needed to turn curiosity into technical mastery."
        watermarkNumber="07"
      />

      {/* ── 2. Featured Outreach Section ── */}
      <section className="py-24 lg:py-32 bg-slate-950 text-white relative overflow-hidden">
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

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {SUB_SERVICES.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-slate-50 rounded-sm overflow-hidden border border-black/5 hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-80"
                  />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center text-primary shadow-sm mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 uppercase mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <Link
                    to={service.path}
                    className="inline-flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-[0.2em] border-b-2 border-primary/10 hover:border-primary pb-1 transition-all"
                  >
                    Learn More <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-10">
            Inspire the <span className="text-primary-hover">innovators</span>
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-4 bg-primary px-10 py-4 text-[11px] font-black uppercase tracking-widest hover:bg-primary-hover transition-all"
          >
            Partner with us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default StudentOutreachOverview;
