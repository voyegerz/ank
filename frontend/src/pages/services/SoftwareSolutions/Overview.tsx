import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import { ArrowRight, Globe, Smartphone, Cloud, Signal, ClipboardList, Layout } from "lucide-react";

const SUB_SERVICES = [
  {
    title: "Website Design",
    path: "/services/website-design",
    desc: "Professional corporate websites and web applications built for speed, conversion, and brand impact.",
    icon: <Globe size={24} />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Application Design",
    path: "/services/application-design",
    desc: "Creating intuitive user interfaces for industrial and corporate applications with seamless UI/UX.",
    icon: <Layout size={24} />,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "SAAS Development",
    path: "/services/saas",
    desc: "Building multi-tenant, cloud-native solutions that are secure, scalable, and provide continuous value.",
    icon: <Cloud size={24} />,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Mobile Application",
    path: "/services/mobile-application",
    desc: "High-performance iOS and Android applications designed for the modern mobile-first world.",
    icon: <Smartphone size={24} />,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Web / IoT Application",
    path: "/services/iot-application",
    desc: "Bridging physical assets and digital intelligence through robust industrial IoT software platforms.",
    icon: <Signal size={24} />,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Inventory Mgt. Systems",
    path: "/services/inventory-management",
    desc: "Custom intelligent stock control systems to streamline supply chains and optimize logistics.",
    icon: <ClipboardList size={24} />,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  }
];

const SoftwareSolutionsOverview = () => {
  return (
    <PageLayout>
      <CommonHero
        title="Software Solutions"
        caption="Digital Engineering"
        subtitle="Empowering your business with scalable, secure, and user-centric software that solves complex technical and operational challenges."
        watermarkNumber="05"
      />

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    Details <ArrowRight size={12} />
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
            Build the <span className="text-primary-hover">future of software</span>
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-4 bg-primary px-10 py-4 text-[11px] font-black uppercase tracking-widest hover:bg-primary-hover transition-all"
          >
            Start Digital Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default SoftwareSolutionsOverview;
