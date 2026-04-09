import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Product {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface UnitProductsProps {
  products?: Product[];
}

const defaultProducts: Product[] = [
  {
    title: "Metal forming and processing",
    description:
      "Globally myordinate interactive supply chains with distinctive quality vectors. Uniquely enable accurate supply chains rather than frictionless technology.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5f649e2?auto=format&fit=crop&q=80&w=1200",
    link: "/products/industrial",
  },
  {
    title: "Precise tools and product manufacture",
    description:
      "Our precision tooling services provide high-accuracy solutions for complex industrial challenges.",
    image:
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1200",
    link: "/products/industrial",
  },
  {
    title: "Welding and laser profiling",
    description:
      "Advanced welding techniques and laser precision for durable and high-quality fabrication.",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200",
    link: "/products/industrial",
  },
  {
    title: "CNC machinery made products",
    description:
      "Top-tier CNC machining for production-ready components with extreme detail.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
    link: "/products/industrial",
  },
];

/**
 * UnitProducts Component
 * A high-end product showcase with interactive hover reveals.
 * Mimics the professional industrial aesthetic with full-height cards.
 */
const UnitProducts = ({ products = defaultProducts }: UnitProductsProps) => {
  return (
    <section className="h-[500px] w-full flex flex-col lg:flex-row bg-slate-900 my-20">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </section>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <motion.div
      className="relative flex-1 overflow-hidden group cursor-pointer border-b lg:border-b-0 lg:border-r border-white/5 last:border-0"
      initial="initial"
      whileHover="hover"
    >
      {/* Background Image */}
      <motion.img
        src={product.image}
        alt={product.title}
        className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
        variants={{
          hover: { scale: 1.1 },
        }}
      />

      {/* Dark Overlay mask */}
      <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors duration-500 z-10" />

      {/* Bottom Gradient Overlay for Title Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none z-10" />

      {/* Default Title (Visible when not hovered) */}
      <div className="absolute bottom-10 left-10 right-10 z-20 transition-all duration-300 opacity-100 translate-y-0 group-hover:opacity-0 group-hover:translate-y-5">
        <h3 className="text-2xl font-black text-white uppercase leading-tight tracking-tight drop-shadow-lg">
          {product.title}
        </h3>
      </div>

      {/* Hover Reveal Content (White Block) */}
      <motion.div
        className="absolute bottom-0 left-0 w-full lg:w-[90%] bg-white z-20 origin-bottom"
        variants={{
          initial: { height: 0, opacity: 0 },
          hover: { height: "auto", opacity: 1 },
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="p-8 md:p-12 pb-20 relative">
          <motion.div
            variants={{
              initial: { opacity: 0, x: -20 },
              hover: { opacity: 1, x: 0 },
            }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <h3 className="text-xl font-black text-slate-900 mb-6 uppercase leading-tight tracking-tight">
              {product.title}
            </h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-sm">
              {product.description}
            </p>
          </motion.div>

          {/* Icon Button */}
          <Link
            to={product.link}
            className="absolute bottom-0 right-0 w-16 h-16 bg-primary flex items-center justify-center text-white hover:bg-accent-hover transition-colors shadow-lg"
          >
            <ChevronRight size={24} />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default UnitProducts;
