import { motion } from "framer-motion";
import { Settings, Activity, Cpu, Wrench } from "lucide-react";

interface Service {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const defaultServices: Service[] = [
  {
    title: "Parts production",
    description: "Quickly coordinate e-business applications through revolutionary catalysts for change.",
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800",
    icon: <Settings size={24} />
  },
  {
    title: "Precision & quality",
    description: "Dramatically disseminate standardized metrics after resource-leveling processes.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    icon: <Activity size={24} />
  },
  {
    title: "Auto & aero manufacture",
    description: "Dramatically engage high-payoff infomediaries rather than client-centric imperatives.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
    icon: <Cpu size={24} />
  },
  {
    title: "Quality replacement parts",
    description: "Phosfluorescently expedite impactful supply chains via focused results.",
    image: "https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&q=80&w=800",
    icon: <Wrench size={24} />
  }
];

const UnitMoreServices = ({ services = defaultServices }: { services?: Service[] }) => {
  return (
    <section className="w-full px-6 md:px-16 lg:px-32 py-20 bg-white">
      {/* Header Section */}
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-10 h-10 bg-accent flex items-center justify-center text-white font-bold">
            <span className="text-xs">ANK</span>
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
            More from ANK
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-slate-900 uppercase mb-8 leading-none"
        >
          More services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-slate-500 max-w-2xl font-medium leading-relaxed"
        >
          Intrinsically incubate intuitive opportunities and real-time potentialities. 
          Appropriately communicate one-to-one technology after plug-and-play networks.
        </motion.p>
      </div>

      {/* Service Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div className="relative mb-12">
              <div className="aspect-4/3 overflow-hidden rounded-sm transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              {/* Overlapping Icon Box */}
              <div className="absolute -bottom-6 left-0 w-12 h-12 bg-accent flex items-center justify-center text-white shadow-xl transition-all group-hover:bg-primary z-10">
                {service.icon}
              </div>
            </div>

            <h3 className="text-xl font-black text-slate-900 uppercase mb-4 tracking-tight group-hover:text-accent transition-colors">
              {service.title}
            </h3>
            <p className="text-slate-500 text-[13px] font-medium leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default UnitMoreServices;
