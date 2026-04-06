// CTASection.tsx
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface CTASectionProps {
  eyebrow: string;
  eyebrowHighlight: string;
  heading: string;
  primaryLabel: string;
  secondaryLabel: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

const CTASection = ({
  eyebrow,
  eyebrowHighlight,
  heading,
  primaryLabel,
  secondaryLabel,
  onPrimaryClick,
  onSecondaryClick,
}: CTASectionProps) => {
  return (
    <section className="w-full bg-white px-6 md:px-20 lg:px-32 py-16 md:py-24">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8 md:gap-12">
        {/* Eyebrow - Responsive Spacing */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-1.5"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[11px] md:text-sm text-gray-500 font-bold uppercase tracking-widest">
            {eyebrow.split(eyebrowHighlight)[0]}
          </span>
          <span className="bg-[#2d9cdb] text-white text-[10px] md:text-xs font-black px-2 py-0.5 leading-snug uppercase tracking-widest">
            {eyebrowHighlight}
          </span>
          <span className="text-[11px] md:text-sm text-gray-500 font-bold uppercase tracking-widest">
            {eyebrow.split(eyebrowHighlight)[1]}
          </span>
        </motion.div>

        {/* Heading - Responsive Scaling */}
        <motion.h2
          className="font-black text-gray-900 leading-[1.1] tracking-tight uppercase"
          style={{ fontSize: "clamp(1.5rem, 5vw, 2.5rem)" }}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {heading}
        </motion.h2>

        {/* Buttons - Mobile Stacked / Desktop Row */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-10 w-full sm:w-auto"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Primary */}
          <button
            onClick={onPrimaryClick}
            className="w-full sm:w-auto bg-[#2d9cdb] text-white font-black
                       text-[11px] md:text-[13px] px-8 py-4 uppercase tracking-widest transition-all duration-300
                       hover:-translate-y-1 hover:shadow-xl active:scale-95"
          >
            {primaryLabel}
          </button>

          {/* Secondary with arrow */}
          <button
            onClick={onSecondaryClick}
            className="w-full sm:w-auto bg-gray-900 text-white font-black
                       text-[11px] md:text-[13px] px-8 py-4 uppercase tracking-widest transition-all duration-300
                       flex items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-xl active:scale-95"
          >
            {secondaryLabel}
            <ChevronRight size={16}  />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
