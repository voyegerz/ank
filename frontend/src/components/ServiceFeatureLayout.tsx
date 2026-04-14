import React from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export interface FeatureBoxData {
  type: "image" | "color" | "image-text";
  image?: string;
  icon?: ReactNode;
  title?: string;
  description?: string;
  className?: string; // used for custom backgrounds, text colors
}

export interface ServiceFeatureLayoutProps {
  badgeText: string;
  watermarkText?: string;
  title: ReactNode;
  description1: string;
  description2: string;
  buttonText: string;
  buttonLink?: string;
  features: FeatureBoxData[]; // Expects an array of length 4 for the 2x2 grid
  reverse?: boolean; // True to put the image/grid column on the left
}

const ServiceFeatureLayout: React.FC<ServiceFeatureLayoutProps> = ({
  badgeText,
  watermarkText,
  title,
  description1,
  description2,
  buttonText,
  buttonLink = "#",
  features,
  reverse = false,
}) => {
  return (
    <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
      <div
        className={`w-full  px-6 md:px-16 lg:px-32 py-10  grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10 items-center`}
      >
        {/* TEXT COLUMN */}
        <div
          className={`relative flex flex-col items-start justify-center  ${reverse ? "lg:order-2" : "lg:order-1"}`}
        >
          {/* Watermark ghost text */}
          {watermarkText && (
            <div
              className="absolute -top-12 lg:-top-24 -left-4 lg:-left-12 z-[0] select-none pointer-events-none text-outline-dark opacity-40 font-black uppercase tracking-tighter"
              style={{ fontSize: "clamp(6rem, 16vw, 12rem)", lineHeight: 0.8 }}
            >
              {watermarkText}
            </div>
          )}

          <div className="relative z-10 w-full pt-8 lg:pt-0">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center mb-6 text-sm font-semibold tracking-wider"
            >
              {(() => {
                const words = badgeText.trim().split(" ");
                const firstWord = words[0];
                const restOfWords = words.slice(1).join(" ");
                return (
                  <>
                    <span className="bg-primary text-white px-3 py-1 mr-3">
                      {firstWord}
                    </span>
                    {restOfWords && (
                      <span className="text-slate-500 uppercase tracking-widest">
                        {restOfWords}
                      </span>
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
              className="text-3xl md:text-3xl lg:text-4xl font-black text-slate-900 leading-[1.1] mb-8"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {title}
            </motion.h2>

            {/* Descriptions (Limited to 2 params as requested) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-slate-600 text-base  leading-relaxed mb-10 max-w-[540px] font-medium"
            >
              <p>{description1}</p>
              <p>{description2}</p>
            </motion.div>

            {/* Primary Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                to={buttonLink}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold hover:bg-primary/90 transition-colors uppercase tracking-widest text-sm"
              >
                {buttonText}
              </Link>
            </motion.div>
          </div>
        </div>

        {/* IMAGE / GRID COLUMN (2x2 grid) */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2    w-full ${reverse ? "lg:order-1" : "lg:order-2"}`}
        >
          {features.slice(0, 4).map((feature, i) => {
            // 1) Pure Image Grid Item
            if (feature.type === "image") {
              return (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                  key={i}
                  className={`relative overflow-hidden aspect-square shadow-lg ${feature.className || ""}`}
                >
                  <img
                    src={feature.image}
                    alt="Feature visual"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </motion.div>
              );
            }

            // 2) Faint background image with text overlapping Grid Item (Bottom Left in reference)
            if (feature.type === "image-text") {
              return (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                  key={i}
                  className={`relative p-6 md:p-8 flex flex-col justify-end overflow-hidden aspect-square shadow-lg ${feature.className || "text-slate-900 bg-slate-50"}`}
                >
                  {feature.image && (
                    <img
                      src={feature.image}
                      alt="Secondary visual"
                      className="absolute inset-0 w-full h-full object-cover opacity-10 "
                    />
                  )}
                  <div className="relative z-10 ">
                    {feature.icon && (
                      <div className="mb-4 text-[#eab308] *:w-10 *:h-10">
                        {feature.icon}
                      </div>
                    )}
                    <h3 className="text-xl md:text-2xl font-black mb-3">
                      {feature.title}
                    </h3>
                    <p className="opacity-80 leading-relaxed text-sm md:text-sm font-medium">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            }

            // 3) Solid Color Grid Item (Yellow or Blue in reference)
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                key={i}
                className={`p-6 md:p-8 flex flex-col justify-center aspect-square shadow-lg ${feature.className || "bg-primary text-white"}`}
              >
                <div className="relative z-10">
                  {feature.icon && (
                    <div className="mb-6 opacity-90 *:w-12 *:h-12">
                      {feature.icon}
                    </div>
                  )}
                  <h3 className="text-xl md:text-2xl font-black mb-3">
                    {feature.title}
                  </h3>
                  <p className="opacity-90 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatureLayout;
