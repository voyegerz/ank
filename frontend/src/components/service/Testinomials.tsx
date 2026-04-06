// Testimonials.tsx
import { motion } from "framer-motion";
import TestinomialBg from "@/assets/images/image3.png";
import ClientAvatar from "@/assets/images/client-avatar.png";

interface Testimonial {
  title: string;
  rating: number;
  review: string;
  name: string;
  company: string;
  avatar?: string;
}

interface TestimonialsProps {
  eyebrow: string;
  eyebrowHighlight: string;
  heading: string;
  watermarkText: string;
  bgImage?: string;
  testimonials: Testimonial[];
}

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5 mb-3">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill={i < count ? "#2d9cdb" : "none"}
        stroke={i < count ? "#2d9cdb" : "#6b7280"}
        strokeWidth="1.5"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
  </div>
);

const Testimonials = ({
  eyebrow,
  eyebrowHighlight,
  heading,
  watermarkText,
  bgImage,
  testimonials,
}: TestimonialsProps) => {
  return (
    <section className="w-full bg-white overflow-hidden px-32 py-10">
      {/* ── Header ── */}
      <div className="relative flex flex-col items-center text-center pt-16 pb-10 px-6 overflow-hidden">
        <span
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center select-none
                     pointer-events-none font-black text-gray-100 leading-none z-0"
          style={{ fontSize: "clamp(5rem, 18vw, 14rem)" }}
        >
          {watermarkText}
        </span>

        <motion.div
          className="relative z-10 flex items-center gap-1.5 mb-3"
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

        <motion.h2
          className="relative z-10 font-black text-gray-900 leading-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {heading}
        </motion.h2>
      </div>

      {/* ── Image band with floating cards ── */}
      <div className="relative mx-0 md:mx-8 mb-8 md:mb-10 overflow-hidden h-[600px] md:h-[400px]">
        {/* Background image */}
        <img
          src={bgImage || TestinomialBg}
          alt="Testimonials background"
          className="w-full h-full object-cover brightness-50 grayscale-[20%] "
        />

        {/* Cards — centered over the image */}
        <div className="absolute inset-0 flex items-center justify-center px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-5xl">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="bg-[#1f1f1f]/70 p-6 md:p-8 flex flex-col gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                {/* Title + stars */}
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-2 leading-snug">
                    {t.title}
                  </h3>
                  <Stars count={t.rating} />
                </div>

                {/* Review */}
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                  {t.review}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                  <img
                    src={t.avatar || ClientAvatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <p className="text-white font-bold text-sm leading-tight">
                      {t.name}
                    </p>
                    <p className="text-gray-400 text-xs mt-0.5">{t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
