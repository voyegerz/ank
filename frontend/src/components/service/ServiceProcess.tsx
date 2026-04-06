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
              className={`md:p-8 p-4 flex flex-col gap-6 group bg-neutral-100/50 ${i === 0 ? "md:border-l-0" : "md:border-l border-gray-100"}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Step Number Badge */}
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-100 text-[#2d9cdb] text-[11px] font-black tracking-widest shadow-sm">
                  {item.number}
                </span>
                <div className="h-px flex-1 bg-gray-50 md:hidden" />
              </div>

              {/* Title Section */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-lg font-black text-[#1a1a1a] uppercase leading-tight tracking-tight">
                  {item.title}
                </h3>
                {/* Visual Accent */}
                <div className="w-12 h-[3px] bg-[#2d9cdb] rounded-full transition-all duration-300 group-hover:w-20" />
              </div>

              {/* Description */}
              <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed font-normal">
                {item.description}
              </p>

              {/* Functional CTA / Arrow Indicator */}
              <motion.div className="mt-auto">
                <button
                  className="w-10 h-10 rounded-full border border-gray-100 text-[#2d9cdb]
                              flex items-center justify-center
                              hover:bg-[#2d9cdb] hover:text-white hover:border-[#2d9cdb]
                              transition-all duration-300 shadow-sm"
                >
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-0.5 transition-transform duration-300"
                  />
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
