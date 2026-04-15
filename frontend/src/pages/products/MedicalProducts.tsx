import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, CheckCircle2, ArrowRight, Activity, Bone } from "lucide-react";
import PageLayout from "../../components/PageLayout";
import CommonHero from "../../components/CommonHero";
import Marquee from "../../components/products/Marquee";
import CTASection from "@/components/service/CTA";

// ─── Online Demo Images (Unsplash) ───────────────────────────────────────────
const IMG = {
  hero: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1920",
  patientMonitor: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=900",
  surgicalInstrument: "https://images.unsplash.com/photo-1551190822-a9ce113ac100?auto=format&fit=crop&q=80&w=900",
  diagnosticUnit: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=900",
  rehabilitationDevice: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=900",
  labEquipment: "https://images.unsplash.com/photo-1582719471384-894fbb16f461?auto=format&fit=crop&q=80&w=900",
  implantSystem: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&q=80&w=900",
  medicalEnclosure: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=900",
  wearableDevice: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=900",
};

// ─── Product Data ────────────────────────────────────────────────────────────
interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

const products: Product[] = [
  {
    id: 1,
    name: "Lung Pulmonary Function Test Device",
    category: "Diagnostics",
    price: "On Request",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=900",
    description:
      "Designed to measure and analyze lung function parameters with accuracy and reliability. It supports diagnostic and monitoring applications in medical and clinical environments. Developed with a strong focus on functional performance, usability, and dependable operation.",
    features: [
      "Lung Function Measurement",
      "Clinical Accuracy",
      "Dependable Operation",
      "Diagnostic Support",
    ],
    icon: <Activity size={16} />,
  },
  {
    id: 2,
    name: "Flexion Therapy Device",
    category: "Rehabilitation",
    price: "On Request",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=900",
    description:
      "Developed to support controlled therapeutic movement for rehabilitation and recovery applications. The design emphasizes smooth operation, safety, and consistent performance. This device reflects ANK’s capability to design application-specific medical engineering solutions.",
    features: [
      "Controlled Therapeutic Movement",
      "Smooth Operation",
      "Rehabilitation Support",
      "Consistent Performance",
    ],
    icon: <Bone size={16} />,
  },
];

const categories = [
  "All",
  "Diagnostics",
  "Rehabilitation",
];

// ─── Component ───────────────────────────────────────────────────────────────
const MedicalProducts = () => {
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
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <CommonHero
        bgImage={IMG.hero}
        title="Medical Products"
        caption="ANK Healthcare Engineering"
        subtitle="Precision-engineered medical devices, instruments, and systems built to the highest standards of safety, accuracy, and regulatory compliance."
        watermarkNumber="05"
      />

      {/* ── Product Catalog ─────────────────────────────────────────────── */}
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
                placeholder="Search devices, instruments..."
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
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="group"
                >
                  <div
                    className={`flex flex-col md:flex-row gap-12 lg:gap-20 items-center justify-center ${
                      index % 2 !== 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Image Side */}
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
                      {/* Category badge */}
                      <div className="absolute bottom-6 left-6 z-10">
                        <span className="inline-flex items-center gap-1.5 bg-primary/90 backdrop-blur text-white px-4 py-2 text-[10px] font-black uppercase tracking-widest shadow-xl">
                          {product.icon}
                          {product.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Side */}
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

      {/* ── Marquee Gallery ─────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-24">
        <div className="px-6 md:px-16 lg:px-32 mb-12">
          <div className="flex items-end justify-between">
            <div className="max-w-xl">
              <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 mb-4">
                Product{" "}
                <span className="text-primary italic">Showcase</span>
              </h2>
              <p className="text-slate-500 text-xs font-medium leading-relaxed uppercase">
                Browse our complete medical product portfolio. Every device is
                engineered with precision, validated for safety, and built for
                clinical excellence.
              </p>
            </div>
            <div className="hidden lg:block h-px flex-1 bg-slate-200 mx-12 mb-4" />
          </div>
        </div>
        <Marquee images={allImages} speed={40} />
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <CTASection
        eyebrow="Need a Custom Medical Device?"
        eyebrowHighlight="Custom"
        heading="From concept to certified product — we engineer healthcare solutions that save lives."
        primaryLabel="Get a Quote"
        secondaryLabel="Talk to an Engineer"
      />
    </PageLayout>
  );
};

export default MedicalProducts;
