// ServiceProcess.tsx
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProcessItem {
  number: string; // "01", "02" ...
  title: string;
  description: string;
}

interface ServiceProcessProps {
  items: ProcessItem[];
}

const ServiceProcess = ({ items }: ServiceProcessProps) => {
  return (
    <section className="w-full bg-white px-6 md:px-20 lg:px-32 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Mobile: Vertical Stack (space-y-16) | Desktop: Grid (divide-x) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 md:gap-y-0 md:divide-x divide-gray-100">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className={`md:p-8 p-6 flex flex-col gap-6 group bg-neutral-100/50 relative ${i === 0 ? "md:border-l-0" : "md:border-l border-gray-100"}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Step Number Badge */}
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-100 text-primary text-[11px] font-black tracking-widest shadow-sm bg-white">
                  {item.number}
                </span>
                <div className="h-px flex-1 bg-gray-200 lg:hidden" />
              </div>

              {/* Directional Arrow (Desktop only - between items) */}
              {i < items.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10 items-center justify-center w-8 h-8 rounded-full bg-white border border-gray-100 shadow-sm text-primary">
                  <ArrowRight size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                </div>
              )}

              {/* Title Section */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-lg font-black text-[#1a1a1a] uppercase leading-tight tracking-tight">
                  {item.title}
                </h3>
                {/* Visual Accent */}
                <div className="w-12 h-[3px] bg-primary rounded-full transition-all duration-300 group-hover:w-24" />
              </div>

              {/* Description */}
              <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
