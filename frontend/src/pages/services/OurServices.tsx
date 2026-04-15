import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageLayout from "../../components/PageLayout";
import CommonHero from "../../components/CommonHero";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

const SERVICES_GRID = [
  {
    title: "Product Designs",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800",
    path: "/services/product-designs",
    desc: "2D & 3D CAD, FEA Analysis, Reverse Engineering",
  },
  {
    title: "Industrial Automation",
    image: "https://images.unsplash.com/photo-1518433278988-2b2f1f6c5fd5?auto=format&fit=crop&q=80&w=800",
    path: "/services/industrial-automation",
    desc: "PLC Programming, SCADA, Panel Automation",
  },
  {
    title: "Software Solutions",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    path: "/services/software-solutions",
    desc: "Web, Mobile, IoT & SaaS Development",
  },
  {
    title: "Manufacturing",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    path: "/services/manufacturing",
    desc: "Prototyping, 3D Printing, PCB Assembly",
  },
  {
    title: "Student Outreach",
    image: "https://images.unsplash.com/photo-1523240715630-9918c13bc1ad?auto=format&fit=crop&q=80&w=800",
    path: "/services/student-outreach",
    desc: "Workshops, DIY Kits, Academic Projects",
  },
  {
    title: "CAD Design",
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800",
    path: "/services/cad-design",
    desc: "High-precision 3D modeling & machine design",
  },
  {
    title: "DCS/SCADA/HMI",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536ad0a?auto=format&fit=crop&q=80&w=800",
    path: "/services/scada-hmi",
    desc: "Advanced industrial monitoring & control",
  },
  {
    title: "IoT Application",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    path: "/services/iot-application",
    desc: "Connected smart solutions for industry",
  },
];

const OurServices = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <PageLayout>
      {/* ── 1. Hero Section (CommonHero) ── */}
      <CommonHero
        title="Professional Engineering Services"
        caption="Our Solutions"
        subtitle="ANK provides comprehensive engineering solutions, from precision CAD design to advanced industrial automation and custom software."
        watermarkNumber="02"
      />

      {/* ── 2. Job Done Section ── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            {/* Image Box */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="aspect-square overflow-hidden rounded-sm shadow-2xl relative border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1581082118775-5c7c8ff6e03e?auto=format&fit=crop&q=80&w=1200"
                  alt="Engineering"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Navigation Arrows Style - Primary Color */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 z-10">
                <button className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-primary transition-all rounded-full shadow-lg">
                  <ChevronRight size={20} className="rotate-180" />
                </button>
                <button className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-primary transition-all rounded-full shadow-lg">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Content Box */}
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="text-white px-3 py-1 text-[9px] font-black uppercase tracking-widest rounded-sm bg-primary">
                  Our solutions and services
                </span>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-black text-slate-900 uppercase mb-8 leading-[0.95] tracking-tight font-sans">
                ANK always gets the job done
              </h2>
              
              <p className="text-base text-slate-500 font-medium leading-relaxed mb-10 max-w-xl">
                We bridge the gap between initial concept and production reality with professional meta-services and robust industrial architectures.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Solutions for your manufacturing business",
                  "Production of bespoke tools and machines",
                  "Designing, building and testing with highest quality",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-5 h-5 rounded-full border-2 border-primary/30 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <CheckCircle2 size={12} className="text-primary group-hover:text-white" />
                    </div>
                    <span className="text-[13px] font-black uppercase tracking-tight text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-primary text-[11px] font-black uppercase tracking-[0.2em] group border-b-2 border-primary/20 hover:border-primary pb-1 transition-all"
              >
                Find out more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Services Grid ── */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-slate-100">
        {SERVICES_GRID.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="relative h-85 group overflow-hidden border border-black/[0.03] bg-slate-900"
          >
            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-40"
            />
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/60 transition-colors duration-500" />
            
            <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-lg font-black text-white uppercase tracking-tight leading-tight mb-2">
                  {service.title}
                </h3>
                <p className="text-[10px] text-white/60 font-medium uppercase tracking-wider mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {service.desc}
                </p>
              </div>

              {/* Sliding Box Animation */}
              <Link
                to={service.path}
                className="absolute bottom-0 left-0 w-full h-12 bg-primary flex items-center justify-between px-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]"
              >
                <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">View Details</span>
                <ArrowRight size={14} className="text-white" />
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

      {/* ── 3.5 More Services (Horizontal Scroll) ── */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-12">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[10px] font-black tracking-[0.4em] text-primary uppercase mb-4">
                Specialized Expertise
              </p>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 uppercase leading-none tracking-tight font-sans">
                More Services
              </h2>
            </div>
            <div className="hidden md:flex gap-2">
              <button 
                onClick={() => scroll("left")}
                className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-slate-400 group cursor-pointer hover:border-primary hover:text-primary transition-all"
              >
                <ChevronRight size={20} className="rotate-180" />
              </button>
              <button 
                onClick={() => scroll("right")}
                className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-slate-400 group cursor-pointer hover:border-primary hover:text-primary transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Area */}
        <div className="relative ml-7 lg:ml-20">
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto px-6 md:px-12 lg:px-20 pb-12 scrollbar-hide snap-x"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {[
              { name: "FEA Analysis", path: "/services/fea-analysis", category: "Product Designs" },
              { name: "Reverse Engineering", path: "/services/reverse-engineering", category: "Product Designs" },
              { name: "SPM", path: "/services/spm", category: "Product Designs" },
              { name: "PLC Programming", path: "/services/plc-programming", category: "Industrial Automation" },
              { name: "Panel Automation", path: "/services/panel-automation", category: "Industrial Automation" },
              { name: "Website Design", path: "/services/website-design", category: "Software Solutions" },
              { name: "Application Design", path: "/services/application-design", category: "Software Solutions" },
              { name: "SAAS", path: "/services/saas", category: "Software Solutions" },
              { name: "Mobile Application", path: "/services/mobile-application", category: "Software Solutions" },
              { name: "Inventory Mgt.", path: "/services/inventory-management", category: "Software Solutions" },
              { name: "Rapid Prototyping", path: "/services/rapid-prototyping", category: "Manufacturing" },
              { name: "3D Printing", path: "/services/3d-printing", category: "Manufacturing" },
              { name: "PCB Design/Manufacture", path: "/services/pcb-design", category: "Manufacturing" },
              { name: "Schools/College Projects", path: "/services/schools-college-projects", category: "Student Outreach" },
              { name: "Workshops", path: "/services/workshops", category: "Student Outreach" },
              { name: "Project to Product", path: "/services/project-to-product", category: "Student Outreach" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="min-w-[300px] md:min-w-[350px] snap-start"
              >
                <Link to={item.path} className="block group">
                  <div className="p-10 rounded-sm border border-black/5 bg-slate-50 group-hover:bg-primary transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden h-64 flex flex-col justify-between">
                    {/* Background Decorative Element */}
                    <div className="absolute -right-4 -top-4 text-8xl font-black text-black/[0.02] group-hover:text-white/5 transition-colors uppercase pointer-events-none select-none">
                      {item.name.charAt(0)}
                    </div>
                    
                    <div>
                      <p className="text-[9px] font-black tracking-[0.2em] text-primary group-hover:text-white/60 uppercase mb-4 transition-colors">
                        {item.category}
                      </p>
                      <h3 className="text-xl font-black text-slate-900 group-hover:text-white uppercase leading-tight tracking-tight transition-colors">
                        {item.name}
                      </h3>
                    </div>

                    <div className="flex items-center justify-between mt-8">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-white transition-colors">
                        Explore
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-primary group-hover:text-white border border-black/5 group-hover:border-white/20 transition-all">
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Final CTA ── */}
      <section className="py-24 lg:py-32 bg-white text-center px-6 relative overflow-hidden">
        {/* Background Highlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 rounded-full bg-primary/5 blur-3xl -z-10" />

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 uppercase leading-[1.1] mb-12 font-sans">
            ANK is always interested in new, <span className="text-primary underline decoration-primary/30 decoration-4 underline-offset-8">challenging and exciting</span> projects
          </h2>
          
          <p className="text-base text-slate-500 font-medium mb-12 max-w-2xl mx-auto">
            Our team of engineers and designers is ready to bring your vision to life with precision and innovation.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-4 bg-primary text-white text-[12px] font-black uppercase tracking-widest px-12 py-5 rounded-sm hover:bg-primary-hover transition-all shadow-2xl group"
          >
            Submit a project request 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default OurServices;
