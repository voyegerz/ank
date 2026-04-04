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
    <section className="w-full bg-white py-16 px-8">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-8">
        {/* Eyebrow */}
        <motion.div
          className="flex items-center justify-center gap-1.5"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm text-gray-500 font-medium">
            {eyebrow.split(eyebrowHighlight)[0]}
          </span>
          <span className="bg-[#2d9cdb] text-white text-sm font-semibold px-2 py-0.5 leading-snug">
            {eyebrowHighlight}
          </span>
          <span className="text-sm text-gray-500 font-medium">
            {eyebrow.split(eyebrowHighlight)[1]}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="font-black text-gray-900 leading-tight"
          style={{ fontSize: "clamp(1.3rem, 3vw, 2rem)" }}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {heading}
        </motion.h2>

        {/* Buttons */}
        <motion.div
          className="flex items-center gap-10"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Primary */}
          <button
            onClick={onPrimaryClick}
            className="bg-[#2d9cdb] text-white font-semibold
                       text-sm px-8 py-4 transition-all duration-200 whitespace-nowrap
                       hover:-translate-y-1 hover:shadow-lg"
          >
            {primaryLabel}
          </button>

          {/* Secondary with arrow */}
          <button
            onClick={onSecondaryClick}
            className="bg-gray-900 text-white font-semibold
                       text-sm px-8 py-4 transition-all duration-200 whitespace-nowrap
                       flex items-center gap-2 hover:-translate-y-1 hover:shadow-lg"
          >
            {secondaryLabel}
            <ChevronRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
