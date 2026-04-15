import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import { ArrowRight, Cpu, Zap, Monitor, Wrench } from "lucide-react";

const SUB_SERVICES = [
  {
    title: "PLC Programming",
    path: "/services/plc-programming",
    desc: "Custom logic development for all major industrial PLC platforms ensuring robust and efficient control.",
    icon: <Cpu size={24} />,
    image: "https://images.unsplash.com/photo-1518433278988-2b2f1f6c5fd5?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Panel Automation",
    path: "/services/panel-automation",
    desc: "Design and fabrication of high-quality industrial control panels, PLC/VFD panels, and distribution boards.",
    icon: <Zap size={24} />,
    image: "https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "DCS / SCADA / HMI",
    path: "/services/scada-hmi",
    desc: "Advanced industrial visualization and control systems for real-time monitoring and data management.",
    icon: <Monitor size={24} />,
    image: "https://images.unsplash.com/photo-1551288049-bbbda536ad0a?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Maintenance & Troubleshooting",
    path: "/services/maintenance-troubleshooting",
    desc: "Expert support for existing automation systems, ensuring high uptime and operational reliability.",
    icon: <Wrench size={24} />,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
  }
];

const IndustrialAutomationOverview = () => {
  return (
    <PageLayout>
      <CommonHero
        title="Industrial Automation"
        caption="Operational Excellence"
        subtitle="Intelligent control systems and automation solutions that empower your factory floor with higher productivity, safety, and real-time visibility."
        watermarkNumber="04"
      />

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    Explore Service <ArrowRight size={12} />
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
            Optimize your <span className="text-primary-hover">production lines</span>
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-4 bg-primary px-10 py-4 text-[11px] font-black uppercase tracking-widest hover:bg-primary-hover transition-all"
          >
            Consult an Automation Expert <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default IndustrialAutomationOverview;
