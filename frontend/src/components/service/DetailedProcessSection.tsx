import { motion } from "framer-motion";
import { ArrowRight, Flag } from "lucide-react";

export interface ProcessStep {
  number: string;
  title: string;
  subtitle?: string;
  description: string;
  images: string[];
}

interface DetailedProcessSectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  steps: ProcessStep[];
}

const DetailedProcessSection = ({
  eyebrow = "Procedure",
  title,
  description,
  steps,
}: DetailedProcessSectionProps) => {
  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header Section */}
        <div className="mb-16 md:mb-24 text-center">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#2d9cdb]/10 border border-[#2d9cdb]/20 rounded-full text-[#2d9cdb] text-[11px] font-bold uppercase tracking-widest mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#2d9cdb] animate-pulse" />
            {eyebrow}
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-black text-[#1a1a1a] uppercase leading-none tracking-tighter mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.h2>
          {description && (
            <motion.p
              className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {description}
            </motion.p>
          )}
        </div>

        {/* Steps Section */}
        <div className="relative">
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 -translate-x-1/2 hidden md:block" />

          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative flex flex-col items-center justify-center md:mb-0`}
              >
                {/* Timeline Elements (Desktop) */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 z-20 hidden md:flex flex-col items-center">
                  {/* Primary Milestone Number */}
                  <motion.div
                    className="w-12 h-12 rounded-full bg-[#1a1a1a] border-4 border-white flex items-center justify-center text-white font-bold text-lg shadow-lg mb-8"
                    initial={{ scale: 0, rotate: -45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    {index === steps.length - 1 ? (
                      <Flag size={20} fill="currentColor" />
                    ) : (
                      step.number
                    )}
                  </motion.div>
                </div>

                {/* Content Area */}
                <div
                  className={`w-full flex ${isLeft ? "md:justify-start" : "md:justify-end"} mb-12 md:mb-[-60px]`}
                >
                  <motion.div
                    className="w-full md:w-[46%] bg-[#f4f4f4] p-8 md:p-10 border-b-[4px] border-[#2d9cdb] rounded-sm shadow-sm relative group"
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    {/* Header: Title & Subtitle */}
                    <div className="mb-6">
                      <h3 className="text-2xl md:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight mb-2 flex items-center justify-between">
                        {step.title}
                        <ArrowRight
                          className="text-[#2d9cdb] opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all"
                          size={24}
                        />
                      </h3>
                      {step.subtitle && (
                        <p className="text-[#2d9cdb] font-black uppercase text-[11px] tracking-[0.3em]">
                          {step.subtitle}
                        </p>
                      )}
                    </div>

                    <p className="text-slate-600 text-[15px] md:text-[16px] leading-relaxed mb-10 min-h-[80px]">
                      {step.description}
                    </p>

                    {/* Step Images - Compact grid */}
                    <div
                      className={`grid gap-4 ${step.images.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}
                    >
                      {step.images.map((img, i) => (
                        <div
                          key={i}
                          className="relative overflow-hidden aspect-[16/10] bg-slate-200"
                        >
                          <img
                            src={img}
                            alt={`${step.title} ${i}`}
                            className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Milestone bubble for Mobile */}
                    <div className="absolute top-4 right-4 md:hidden w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white font-bold text-xs">
                      {index === steps.length - 1 ? (
                        <Flag size={14} fill="currentColor" />
                      ) : (
                        step.number
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DetailedProcessSection;
