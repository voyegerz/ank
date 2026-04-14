import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Quote } from "lucide-react";

export interface ServiceExpectationLayoutProps {
  badgeText: string;
  title: React.ReactNode;
  description: string;
  bullets: string[];
  quoteText: string;
  quoteAuthor: string;
  quoteRole: string;
  bgImage?: string;
}

const ServiceExpectationLayout: React.FC<ServiceExpectationLayoutProps> = ({
  badgeText,
  title,
  description,
  bullets,
  quoteText,
  quoteAuthor,
  quoteRole,
  bgImage,
}) => {
  return (
    <section className="bg-gray-100 w-full py-16 lg:py-24 px-6 md:px-12 flex justify-center">
      <div className="w-full max-w-[1300px] bg-white flex flex-col lg:flex-row shadow-2xl overflow-hidden">
        {/* Left Side: Text and Bullets */}
        <div className="w-full lg:w-1/2 p-10 md:p-14 lg:p-16 flex flex-col justify-center bg-white">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center mb-8 text-base font-medium tracking-wide"
          >
            {(() => {
              const words = badgeText.trim().split(" ");
              const firstWord = words[0];
              const restOfWords = words.slice(1).join(" ");
              return (
                <>
                  <span className="bg-primary text-white px-3 py-1 mr-2">
                    {firstWord}
                  </span>
                  {restOfWords && (
                    <span className="text-slate-500">{restOfWords}</span>
                  )}
                </>
              );
            })()}
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl lg:text-4xl font-black text-slate-900 leading-[1.2] mb-6"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {title}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-base mb-8 max-w-md font-medium leading-relaxed"
          >
            {description}
          </motion.p>

          {/* Bullets */}
          {bullets.length > 0 && (
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3 text-sm text-slate-600 font-medium"
            >
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>{b}</span>
                </li>
              ))}
            </motion.ul>
          )}
        </div>

        {/* Right Side: Quote overlay block */}
        <div className="w-full lg:w-1/2 relative min-h-[350px] lg:min-h-full flex items-center justify-center p-8 lg:p-12 overflow-hidden bg-primary">
          {bgImage && (
            <img
              src={bgImage}
              className="absolute inset-0 w-full h-full object-cover opacity-20  scale-105"
              alt="Background"
            />
          )}

          {/* Subtle gradient overlay to ensure text readability */}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative z-10 text-center text-white max-w-xl mx-auto flex flex-col items-center"
          >
            {/* Quote Icon */}
            <div className="text-white mb-6">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
              </svg>
            </div>

            {/* Quote Text */}
            <p className="text-lg md:text-xl font-medium leading-[1.6] mb-8 w-full">
              {quoteText}
            </p>

            {/* Author */}
            <h4 className="text-base md:text-lg font-bold mb-2">
              {quoteAuthor}
            </h4>

            {/* Divider */}
            <div className="w-12 h-[3px] bg-white mb-3" />

            {/* Role */}
            <span className="text-sm opacity-90 tracking-widest font-semibold font-sans">
              {quoteRole}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceExpectationLayout;
