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
    <section className="w-full bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="px-8 py-8 first:pl-0 last:pr-0 flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Number */}
              <span className="text-sm text-gray-400 font-medium tracking-wide">
                {item.number}
              </span>

              {/* Title */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 leading-snug mb-3">
                  {item.title}
                </h3>
                {/* Blue underline accent */}
                <div className="w-10 h-[2.5px] bg-[#2d9cdb]" />
              </div>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed flex-1">
                {item.description}
              </p>

              {/* Arrow button */}
              <button
                className="mt-2 w-9 h-9 rounded-full border border-[#2d9cdb] text-[#2d9cdb]
                           flex items-center justify-center
                           hover:bg-[#2d9cdb] hover:text-white
                           transition-all duration-200 group"
              >
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
