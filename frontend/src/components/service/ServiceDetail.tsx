import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import defaultImage from "@/assets/images/image.png";

interface ServiceDetailProps {
  image?: string;
  images?: string[];
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
  images,
  caption,
  leftTitle,
  leftParagraphs,
  rightTitle,
  rightParagraphs,
  features,
  ctaLabel,
  onCtaClick,
}: ServiceDetailProps) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const displayImages = images && images.length > 0 ? images : [image || defaultImage];

  useEffect(() => {
    if (displayImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % displayImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [displayImages]);

  const next = () => setCurrentIdx((prev) => (prev + 1) % displayImages.length);
  const prev = () => setCurrentIdx((prev) => (prev - 1 + displayImages.length) % displayImages.length);

  return (
    <section className="w-full mt-10 px-6 md:px-16 lg:px-32 py-16 bg-white rounded-2xl overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[35%_1fr_1fr] min-h-[450px] gap-10">
        {/* ── Image/Carousel column ── */}
        <motion.div
          className="relative overflow-hidden bg-slate-100 rounded-xl group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIdx}
              src={displayImages[currentIdx]}
              alt={`Service ${currentIdx}`}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
          </AnimatePresence>

          {displayImages.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-white/40"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-white/40"
              >
                <ChevronRight size={20} />
              </button>
              <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2 z-10">
                {displayImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIdx(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      i === currentIdx ? "bg-white w-4" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </>
          )}

          <div className="absolute bottom-0 left-0 right-0 bg-primary/90 backdrop-blur-sm px-6 py-5 z-10">
            <p className="text-white text-xs font-black uppercase tracking-[0.2em]">{caption}</p>
          </div>
        </motion.div>

        {/* ── Left text column ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col justify-center"
        >
          <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">
            {leftTitle}
          </h3>
          {leftParagraphs.map((p, i) => (
            <p key={i} className="text-sm text-slate-500 font-medium leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </motion.div>

        {/* ── Right features column ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">
            {rightTitle}
          </h3>
          {rightParagraphs.map((p, i) => (
            <p key={i} className="text-sm text-slate-500 font-medium leading-relaxed mb-4">
              {p}
            </p>
          ))}

          <ul className="my-6 space-y-3">
            {features.map((f, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 text-[13px] text-slate-600 font-bold uppercase tracking-tight"
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
            className="mt-4 bg-primary hover:bg-primary-hover text-white text-[11px] font-black uppercase tracking-[0.2em]
                       px-10 py-4 rounded-sm transition-all duration-300 shadow-xl shadow-primary/20 self-start"
          >
            {ctaLabel}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetail;
