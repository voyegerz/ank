import { motion } from "framer-motion";
import heroBg from "../assets/images/hero_bg.png";

interface HeroProps {
  bgImage?: string;
  title: string;
  caption: string;
  subtitle?: string;
  watermarkNumber?: string;
}

const CommonHero = ({
  bgImage = heroBg,
  title,
  caption,
  subtitle,
  watermarkNumber = "01",
}: HeroProps) => {
  // Split last word of title for accent colour
  const words = title.trim().split(" ");
  const lastWord = words.pop();
  const restOfTitle = words.join(" ");

  return (
    <section className="relative h-screen min-h-[560px] flex items-center overflow-hidden">
      {/* ── Background image ── */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
        }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.06 }}
        transition={{ duration: 8, ease: "easeOut" }}
      />

      {/* ── Blue overlay ── */}
      <div className="absolute inset-0 z-[1] bg-[#010080]/50" />

      {/* ── Subtle grid ── */}
      <motion.div
        className="absolute inset-0 z-[2]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />


      {/* ── Watermark number ── */}
      <motion.span
        className="absolute right-[-20px] bottom-[-30px] z-[3] select-none pointer-events-none
                   font-black text-white/[0.025] leading-none tracking-[-0.02em]"
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "clamp(6rem, 15vw, 12rem)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {watermarkNumber}
      </motion.span>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 w-full">
        {/* Caption - Enhanced Badge Style */}
        <motion.div
          className="inline-flex items-center gap-2.5 mb-5"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-[#7dd3f8] text-[11px] font-semibold tracking-[.12em] uppercase">
            {caption}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="font-black uppercase leading-none tracking-[.02em] text-white mb-6"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(2rem, 6vw, 4rem)",
          }}
          initial={{ opacity: 0, x: -36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
        >
          {restOfTitle && <>{restOfTitle} </>}
          <span className=" relative">
            {lastWord}
            {/* Decorative underline */}
            <motion.span
              className="absolute -bottom-2 left-0 h-1 bg-white/40 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 0.6,
                delay: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          </span>
        </motion.h1>

        {/* Subtitle - Enhanced with decorative line */}
        {subtitle && (
          <motion.div
            className="flex items-start gap-4"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="w-12 h-[2px] bg-primary mt-3 flex-shrink-0"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              style={{ originX: 0 }}
            />
            <p
              className="text-white/60 max-w-[560px] leading-[1.75] font-normal"
              style={{ fontSize: "clamp(.875rem, 1.5vw, 1rem)" }}
            >
              {subtitle}
            </p>
          </motion.div>
        )}
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CommonHero;
