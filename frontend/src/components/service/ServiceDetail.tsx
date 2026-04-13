// ServiceDetail.tsx
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import defaultImage from "@/assets/images/image.png";

interface ServiceDetailProps {
  image?: string;
  caption: string;
  leftTitle: string;
  leftParagraphs: string[];
  rightTitle: string;
  rightParagraphs: string[];
  features: string[];
  ctaLabel: string;
  onCtaClick?: () => void;
}

const ServiceDetail = ({
  image,
  caption,
  leftTitle,
  leftParagraphs,
  rightTitle,
  rightParagraphs,
  features,
  ctaLabel,
  onCtaClick,
}: ServiceDetailProps) => {
  return (
    <section className="w-full mt-10 px-6 md:px-16 lg:px-32 py-16 bg-white  rounded-2xl overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[35%_1fr_1fr] min-h-[450px] gap-10">
        {/* ── Image column ── */}
        <motion.div
          className="relative overflow-hidden bg-white"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={image || defaultImage}
            alt="Service"
            className="w-full h-full  object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-primary px-6 py-5">
            <p className="text-white text-sm leading-relaxed">{caption}</p>
          </div>
        </motion.div>

        {/* ── Left text column ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 leading-snug">
            {leftTitle}
          </h3>
          {leftParagraphs.map((p, i) => (
            <p key={i} className="text-sm text-gray-500 leading-relaxed mb-3">
              {p}
            </p>
          ))}
        </motion.div>

        {/* ── Right features column ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 leading-snug">
            {rightTitle}
          </h3>
          {rightParagraphs.map((p, i) => (
            <p key={i} className="text-sm text-gray-500 leading-relaxed mb-3">
              {p}
            </p>
          ))}

          <ul className="my-5 space-y-2">
            {features.map((f, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-2.5 text-sm text-gray-500 leading-relaxed"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.07 }}
              >
                <CheckCircle2
                  size={16}
                  className="text-primary mt-0.5 shrink-0"
                />
                {f}
              </motion.li>
            ))}
          </ul>

          <button
            onClick={onCtaClick}
            className="mt-2 bg-primary hover:bg-primary-hover text-white text-sm font-semibold
                       px-6 py-2.5 rounded-lg transition-colors duration-200"
          >
            {ctaLabel}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetail;
