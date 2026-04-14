import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

export interface ServiceCarouselSectionProps {
  title: string;
  paragraphs: string[];
  bullets: string[];
  images: string[];
  buttonText: string;
  buttonLink?: string;
  reverse?: boolean; // Set to true to swap the column logic (text on left, image on right)
}

const ServiceCarouselSection: React.FC<ServiceCarouselSectionProps> = ({
  title,
  paragraphs,
  bullets,
  images,
  buttonText,
  buttonLink = "#",
  reverse = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="relative  px-6 md:px-16  lg:px-32 py-20 overflow-hidden">
      <div className="w-full  grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
        {/* CAROUSEL COLUMN */}
        <div
          className={`w-full flex flex-col ${reverse ? "lg:order-2" : "lg:order-1"}`}
        >
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-[4/3] bg-slate-100 overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 w-full h-full object-cover"
                alt={`${title} visual`}
              />
            </AnimatePresence>
          </div>

          {/* Carousel Controls */}
          {images.length > 0 && (
            <div className="flex w-full h-16 md:h-20 bg-white">
              {/* Blue Bar with Dots */}
              <div className="flex-1 bg-primary flex items-center px-8">
                <div className="flex items-center gap-3">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`h-1.5 transition-all outline-none rounded-r-md rounded-l-md ${
                        i === currentIndex
                          ? "w-6 bg-[#facc15]"
                          : "w-2 bg-white/40 hover:bg-white"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
              {/* White Arrows Box */}
              <div className="flex bg-white flex-shrink-0">
                <button
                  onClick={prevImage}
                  className="w-16 md:w-20 h-full flex items-center justify-center text-slate-900 bg-white hover:bg-slate-50 transition-colors focus:outline-none"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="w-16 md:w-20 h-full flex items-center justify-center text-slate-900 bg-white hover:bg-slate-50 transition-colors focus:outline-none"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* TEXT COLUMN */}
        <div
          className={`w-full flex flex-col justify-center ${reverse ? "lg:order-1" : "lg:order-2"} py-4 lg:py-0`}
        >
          <h2
            className="text-3xl font-black text-slate-900 mb-6"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {title}
          </h2>

          {paragraphs.length > 0 && (
            <div className="space-y-6 text-base text-slate-600 mb-8 leading-relaxed font-medium">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}

          {bullets.length > 0 && (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-sm text-slate-600 mb-10 font-medium font-sans">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Action button inside a delineated border block */}

          <Link
            to={buttonLink}
            className="inline-flex items-center justify-center px-10 py-3.5 bg-primary text-white font-bold hover:bg-primary/90 transition-colors text-sm shadow-sm"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceCarouselSection;
