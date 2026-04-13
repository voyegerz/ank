import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface UnitValueProps {
  category: string;
  title: string;
  description: string;
  highlights: string[];
  buttonText?: string;
  imageUrl: string;
  imageAlt?: string;
  reverse?: boolean;
}

/**
 * UnitValue Component
 * A professional 2-column layout for business unit pages.
 * Displays content on one side and a high-quality image on the other.
 */
const UnitValue = ({
  category,
  title,
  description,
  highlights,
  buttonText = "Find out more",
  imageUrl,
  imageAlt = "Business Unit Image",
  reverse = false,
}: UnitValueProps) => {
  return (
    <section className="w-full px-6 md:px-16 lg:px-32 py-10 bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* ── Content Column ── */}
        <motion.div
          className={`flex flex-col ${reverse ? "lg:order-2" : "lg:order-1"}`}
          initial={{ opacity: 0, x: reverse ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Category Tag with Highlighted First Word */}
          <div className="flex items-center mb-6">
            <motion.span
              className="bg-primary text-white font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs px-3 py-1.5 shadow-lg shadow-primary/20"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              {category.split(" ")[0]}
            </motion.span>
            {category.split(" ").length > 1 && (
              <span className="text-slate-500 font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs ml-1">
                {category.split(" ").slice(1).join(" ")}
              </span>
            )}
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-4xl lg:text-4xl font-black text-slate-900 mb-5 leading-[1.1] tracking-tight">
            {title}
          </h2>

          {/* Description */}
          <p className="text-slate-600 text-sm leading-relaxed mb-7 max-w-xl font-medium">
            {description}
          </p>

          {/* Highlights List */}
          <ul className="space-y-4 mb-8">
            {highlights.map((highlight, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              >
                <div className="mt-0.5">
                  <CheckCircle2
                    className="w-5 h-5 text-primary"
                    strokeWidth={2.5}
                  />
                </div>
                <span className="text-slate-800 font-bold text-base  leading-tight">
                  {highlight}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* Call to Action Button */}
          <motion.button
            className="group relative self-start px-8 py-4 bg-primary text-white font-black uppercase tracking-widest text-xs overflow-hidden transition-all duration-300 hover:bg-primary/90 shadow-lg shadow-primary/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">{buttonText}</span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </motion.button>
        </motion.div>

        {/* ── Image Column ── */}
        <motion.div
          className={`relative group ${reverse ? "lg:order-1" : "lg:order-2"}`}
          initial={{ opacity: 0, scale: 0.95, x: reverse ? -40 : 40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Decorative Background Elements */}
          <div className="absolute -inset-4 bg-slate-50 -z-10 rounded-2xl transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2" />
          <div className="absolute top-8 -right-8 w-14 h-14 bg-primary/10 rounded-full blur-3xl" />

          {/* Main Image Container */}
          <div className="relative aspect-[4/5] lg:aspect-[3/4] xl:aspect-auto xl:h-[450px] overflow-hidden rounded-sm shadow-xl border-4 border-white">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            {/* Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60 pointer-events-none" />
          </div>

          {/* Floating Info */}
          <motion.div
            className="absolute -bottom-8 -left-8 bg-[#010080] px-4 py-2 hidden xl:block  skew-x-[-12deg]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <div className="skew-x-[12deg]">
              <div className="text-white text-2xl font-black tracking-tighter italic">
                ANK
              </div>
              <div className="text-white  font-bold uppercase ">
                Excellence
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default UnitValue;
