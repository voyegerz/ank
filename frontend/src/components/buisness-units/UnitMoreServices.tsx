import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Settings, Activity, Cpu, Wrench, ArrowRight } from "lucide-react";

interface Service {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  link: string;
}

const defaultServices: Service[] = [
  {
    title: "Parts production",
    description:
      "Quickly coordinate e-business applications through revolutionary catalysts for change.",
    image:
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800",
    icon: <Settings size={24} />,
    link: "/services/rapid-prototyping",
  },
  {
    title: "Precision & quality",
    description:
      "Dramatically disseminate standardized metrics after resource-leveling processes.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    icon: <Activity size={24} />,
    link: "/services/fea-analysis",
  },
  {
    title: "Auto & aero manufacture",
    description:
      "Dramatically engage high-payoff infomediaries rather than client-centric imperatives.",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
    icon: <Cpu size={24} />,
    link: "/services/cad-design",
  },
  {
    title: "Quality replacement parts",
    description:
      "Phosfluorescently expedite impactful supply chains via focused results.",
    image:
      "https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&q=80&w=800",
    icon: <Wrench size={24} />,
    link: "/services/pcb-design",
  },
];

const UnitMoreServices = ({
  services = defaultServices,
}: {
  services?: Service[];
}) => {
  return (
    <section className="w-full px-6 md:px-16 lg:px-32 py-20 bg-white">
      {/* Header Section */}
      <div className="mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-slate-900 uppercase mb-4 leading-none"
        >
          More services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-slate-500 max-w-2xl font-medium leading-relaxed"
        >
          Intrinsically incubate intuitive opportunities and real-time
          potentialities. Appropriately communicate one-to-one technology after
          plug-and-play networks.
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
            <div className="relative mb-5">
              <div className="aspect-4/3 overflow-hidden rounded-sm transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>

            <h3 className="text-xl font-black text-slate-900 uppercase mb-4 tracking-tight group-hover:text-accent transition-colors">
              {service.title}
            </h3>
            <p className="text-slate-500 text-[13px] font-medium leading-relaxed mb-6">
              {service.description}
            </p>

            {/* Redirect Button */}
            <Link to={service.link}>
              <motion.button
                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary group/btn transition-all duration-300"
                whileHover={{ gap: "1rem" }}
              >
                Learn More
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover/btn:translate-x-1"
                />
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default UnitMoreServices;
