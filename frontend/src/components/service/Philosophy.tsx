// PhilosophySection.tsx
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import PhilosophyImage from "@/assets/images/image.png";

interface PhilosophyItem {
  icon: React.ReactNode; // SVG or lucide icon
  label: string;
  description: string;
  progress: number; // 0–100
}

interface PhilosophySectionProps {
  eyebrow: string; // "Our" highlighted + rest e.g. "Our philosophy"
  eyebrowHighlight: string; // the highlighted word e.g. "Our"
  title: string;
  paragraphs: [string, string]; // exactly 2 columns of body text
  items: PhilosophyItem[];
  image?: string;
}

// Animated arc circle
const ProgressRing = ({
  progress,
  size = 130,
  stroke = 4,
}: {
  progress: number;
  size?: number;
  stroke?: number;
}) => {
  const ref = useRef<SVGCircleElement>(null);
  const inView = useInView(ref, { once: true });
  const [current, setCurrent] = useState(0);

  const radius = (size - stroke * 2) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const duration = 1400;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const pct = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - pct, 3);
      setCurrent(Math.round(eased * progress));
      if (pct < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [inView, progress]);

  const dashOffset = circumference - (current / 100) * circumference;

  return (
    <svg width={size} height={size} className="-rotate-90">
      {/* Track */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#e5e7eb"
        strokeWidth={stroke}
      />
      {/* Progress arc */}
      <circle
        ref={ref}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="var(--color-primary)"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={dashOffset}
        style={{ transition: "none" }}
      />
    </svg>
  );
};

const PhilosophySection = ({
  eyebrow,
  eyebrowHighlight,
  title,
  paragraphs,
  items,
  image,
}: PhilosophySectionProps) => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const eyebrowRest = eyebrow.replace(eyebrowHighlight, "").trim();

  return (
    <section
      ref={sectionRef}
      className="w-full px-6 md:px-16 lg:px-32 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 bg-[#f4f4f2]"
    >
      {/* ── Left content ── */}
      <div className="flex flex-col justify-center">
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-1.5 mb-5"
          initial={{ opacity: 0, x: -16 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-primary text-white text-sm font-semibold px-2 py-0.5 leading-snug">
            {eyebrowHighlight}
          </span>
          <span className="text-sm text-gray-500 font-medium">
            {eyebrowRest}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-2xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.1] mb-6 md:mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {title}
        </motion.h2>

        {/* Two-column paragraphs */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {paragraphs.map((p, i) => (
            <p key={i} className="text-sm text-gray-500 leading-relaxed">
              {p}
            </p>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-300 mb-10" />

        {/* Process items */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
            >
              {/* Progress ring with icon inside */}
              <div
                className="relative flex items-center justify-center"
                style={{ width: 130, height: 130 }}
              >
                <ProgressRing progress={item.progress} size={130} stroke={4} />
                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                  {item.icon}
                </div>
              </div>

              <div>
                <p className="text-base font-bold text-gray-900 mb-1">
                  {item.label}
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Right image ── */}
      <motion.div
        className="relative min-h-[300px] md:min-h-[400px] lg:min-h-[520px] order-first lg:order-last"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img
          src={image || PhilosophyImage}
          alt="Philosophy"
          className="absolute inset-0 w-full h-full object-cover rounded-lg lg:rounded-none"
        />
      </motion.div>
    </section>
  );
};

export default PhilosophySection;
