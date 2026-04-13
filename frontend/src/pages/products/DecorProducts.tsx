import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, CheckCircle2, ArrowRight } from "lucide-react";
import PageLayout from "../../components/PageLayout";
import CommonHero from "../../components/CommonHero";
import Marquee from "../../components/products/Marquee";

// Import local images
import flower1 from "@/assets/images/Product/Decors/flower1.jpeg";
import flower2 from "@/assets/images/Product/Decors/flower2.jpeg";
import flowerCeiling from "@/assets/images/Product/Decors/flower-ceiling-view.jpeg";
import flowerHall from "@/assets/images/Product/Decors/flower-hall-view.jpeg";
import flowerTop from "@/assets/images/Product/Decors/flowere-top-view.jpeg";
import pinkFlower from "@/assets/images/Product/Decors/pink-flower.jpeg";
import CTASection from "@/components/service/CTA";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  features: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Arctic Blossom Cluster",
    category: "Floral",
    price: "$280.00",
    image: flower1,
    description:
      "A pristine arrangement of crystalline floral elements, designed for high-end corporate lobbies and reception areas.",
    features: [
      "UV Resistant Coating",
      "Dust-Repellent Material",
      "Customizable Scale",
    ],
  },
  {
    id: 2,
    name: "Emerald Canopy System",
    category: "Greenery",
    price: "$450.00",
    image: flower2,
    description:
      "Lush, lifelike greenery modules that integrate seamlessly into ceiling architectures to create a natural, calming atmosphere.",
    features: ["Flame Retardant", "Acoustic Dampening", "Modular Installation"],
  },
  {
    id: 3,
    name: "Celestial Petal Array",
    category: "Installations",
    price: "$1,800.00",
    image: flowerCeiling,
    description:
      "A breathtaking ceiling installation that mimics the organic movement of falling petals, suspended by precision-engineered rigging.",
    features: [
      "Integrated LED Lighting",
      "Remote Motion Control",
      "Ultra-Lightweight",
    ],
  },
  {
    id: 4,
    name: "Atrium Grandeur Flora",
    category: "Architecture",
    price: "$3,200.00",
    image: flowerHall,
    description:
      "Specially curated for large-scale architectural voids, these vertical floral structures command attention and define spaces.",
    features: [
      "Structural Grade Framework",
      "Interchangeable Elements",
      "Low Maintenance",
    ],
  },
  {
    id: 5,
    name: "Geometric Symmetry Series",
    category: "Symmetry",
    price: "$190.00",
    image: flowerTop,
    description:
      "Perfectly balanced floral compositions viewed from above, highlighting the mathematical beauty of nature in design.",
    features: [
      "Perfect Radial Symmetry",
      "Modern Matte Finish",
      "Tabletop & Floor Options",
    ],
  },
  {
    id: 6,
    name: "Crimson Elegance Accent",
    category: "Accessories",
    price: "$120.00",
    image: pinkFlower,
    description:
      "Bold pink accents that provide a pop of color in minimalist professional environments, encased in premium ceramic vessels.",
    features: ["Hand-Painted Detail", "Eco-Friendly Resins", "Non-Slip Base"],
  },
];

const categories = [
  "All",
  "Floral",
  "Greenery",
  "Installations",
  "Architecture",
  "Symmetry",
  "Accessories",
];

const DecorProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const allImages = products.map((p) => p.image);

  return (
    <PageLayout>
      <CommonHero
        bgImage={flowerHall}
        title="Botanicals & Decor"
        caption="ANK Professional Collection"
        subtitle="Where nature meets precision engineering. Explore our curated range of biophilic design solutions for the modern workplace."
        watermarkNumber="04"
      />

      <section className="py-24 bg-white px-6 md:px-16 lg:px-32">
        <div className="max-w-7xl mx-auto">
          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-24">
            <div className="relative w-full lg:w-96">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-slate-50 border-none px-12 py-4 rounded-sm text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-primary outline-none transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-3 text-[10px] font-black uppercase tracking-widest transition-all ${
                    activeCategory === cat
                      ? "bg-primary text-white shadow-lg shadow-primary/20"
                      : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Detailed Product List */}
          <div className="space-y-32">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="group"
                >
                  <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center justify-center">
                    {/* Left Side: Image */}
                    <div className="w-full md:w-150 aspect-[1/1] overflow-hidden rounded-sm relative shadow-2xl bg-slate-100">
                      <motion.img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute top-6 right-6 z-10">
                        <span className="bg-white/90 backdrop-blur px-4 py-2 text-xs font-black tracking-tighter text-primary shadow-xl">
                          {product.price}
                        </span>
                      </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="w-full space-y-8">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                            {product.category}
                          </span>
                          <div className="h-px w-12 bg-primary/20" />
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 uppercase leading-[0.9] tracking-tighter">
                          {product.name}
                        </h2>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-lg">
                          {product.description}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                          Key Specifications
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                          {product.features.map((feature, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-2 text-xs font-bold text-slate-700"
                            >
                              <CheckCircle2
                                size={14}
                                className="text-primary"
                              />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4">
                        <button className="inline-flex items-center gap-4 bg-primary text-white hover:bg-slate-900 px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all group/btn">
                          Request Quotation
                          <ArrowRight
                            size={14}
                            className="transition-transform group-hover/btn:translate-x-1"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredProducts.length === 0 && (
              <div className="py-32 text-center">
                <h3 className="text-2xl font-black text-slate-200 uppercase italic">
                  No matches found for your search...
                </h3>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("All");
                  }}
                  className="mt-6 text-primary font-bold text-sm underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="bg-slate-50 py-24">
        <div className="px-6 md:px-16 lg:px-32 mb-12">
          <div className="flex items-end justify-between">
            <div className="max-w-xl">
              <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 mb-4">
                Full Collection{" "}
                <span className="text-primary italic">Gallery</span>
              </h2>
              <p className="text-slate-500 text-xs font-medium leading-relaxed uppercase">
                Browse our complete botanical series. Each piece is engineered
                for durability and aesthetic excellence in professional
                environments.
              </p>
            </div>
            <div className="hidden lg:block h-px flex-1 bg-slate-200 mx-12 mb-4" />
          </div>
        </div>
        <Marquee images={allImages} speed={40} />
      </section>
      <CTASection eyebrow={""} eyebrowHighlight={""} heading={""} primaryLabel={""} secondaryLabel={""} />
    </PageLayout>
  );
};

export default DecorProducts
