import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import { ArrowRight, Settings2, PenTool, Search, Cpu } from "lucide-react";

const SUB_SERVICES = [
  {
    title: "CAD Design (2D & 3D)",
    path: "/services/cad-design",
    desc: "Professional 3D designing and 2D drafting services to support engineering development and manufacturing.",
    icon: <PenTool size={24} />,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "FEA Analysis",
    path: "/services/fea-analysis",
    desc: "Virtual testing and simulation to validate designs against real-world physical stresses and thermal loads.",
    icon: <Search size={24} />,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Reverse Engineering",
    path: "/services/reverse-engineering",
    desc: "Transforming physical objects into accurate digital CAD data for legacy part recovery and analysis.",
    icon: <Settings2 size={24} />,
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Special Purpose Machines",
    path: "/services/spm",
    desc: "Custom machinery solutions designed to automate unique industrial tasks and enhance productivity.",
    icon: <Cpu size={24} />,
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800"
  }
];

const ProductDesignsOverview = () => {
  return (
    <PageLayout>
      <CommonHero
        title="Product Designs"
        caption="Engineering Innovation"
        subtitle="From initial concept to production-ready documentation, we provide end-to-end product design services that bridge the gap between imagination and physical reality."
        watermarkNumber="03"
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
                    Learn More <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-10">
            Ready to bring your <span className="text-primary-hover">ideas to life?</span>
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-4 bg-primary px-10 py-4 text-[11px] font-black uppercase tracking-widest hover:bg-primary-hover transition-all"
          >
            Start a project today <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProductDesignsOverview;
