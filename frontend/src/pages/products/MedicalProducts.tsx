import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, CheckCircle2, ArrowRight, ShieldCheck, HeartPulse, Microscope, Syringe, Activity, Bone } from "lucide-react";
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
    name: "Vital-Track Pro Monitor",
    category: "Monitoring",
    price: "₹1,85,000",
    image: IMG.patientMonitor,
    description:
      "A next-generation multi-parameter patient monitoring system designed for ICU, OT, and emergency care environments. Features real-time vitals tracking with intelligent alarm prioritization and seamless EMR integration.",
    features: [
      "12-Lead ECG Display",
      "SpO₂ & EtCO₂ Tracking",
      "HL7/FHIR Data Export",
      "Touch-Enabled 15\" Panel",
    ],
    icon: <Activity size={16} />,
  },
  {
    id: 2,
    name: "SteriFlex Instrument Kit",
    category: "Surgical",
    price: "₹4,20,000",
    image: IMG.surgicalInstrument,
    description:
      "Precision-manufactured surgical instrument sets crafted from medical-grade titanium alloy. Each tool undergoes CNC machining, electro-polishing, and gamma sterilization for uncompromising surgical performance.",
    features: [
      "Titanium Alloy Construction",
      "Ergonomic Grip Design",
      "Autoclave Compatible",
      "Laser-Etched Traceability",
    ],
    icon: <Syringe size={16} />,
  },
  {
    id: 3,
    name: "DiagnoScan X200",
    category: "Diagnostics",
    price: "₹12,50,000",
    image: IMG.diagnosticUnit,
    description:
      "An advanced point-of-care diagnostic station combining AI-driven image analysis with rapid biochemical assays. Delivers lab-accurate results in under 8 minutes, transforming bedside diagnostics in rural and urban clinics alike.",
    features: [
      "AI-Powered Image Analysis",
      "8-Minute Result Cycle",
      "Cloud Sync Dashboard",
      "Multi-Panel Test Cartridge",
    ],
    icon: <Microscope size={16} />,
  },
  {
    id: 4,
    name: "RehabMotion Exo-Assist",
    category: "Rehabilitation",
    price: "₹8,75,000",
    image: IMG.rehabilitationDevice,
    description:
      "A robotic-assisted rehabilitation exoskeleton for lower-limb physiotherapy. Adaptive torque control and real-time gait analytics accelerate patient recovery while reducing therapist workload by up to 40%.",
    features: [
      "Adaptive Torque Control",
      "Real-Time Gait Analytics",
      "Lightweight Carbon Frame",
      "Wireless Therapist Console",
    ],
    icon: <Bone size={16} />,
  },
  {
    id: 5,
    name: "MicroLab S-Series Analyzer",
    category: "Laboratory",
    price: "₹6,30,000",
    image: IMG.labEquipment,
    description:
      "A fully automated benchtop hematology and biochemistry analyzer designed for mid-volume laboratories. Features self-cleaning microfluidic channels and disposable reagent cartridges for zero-contamination workflows.",
    features: [
      "Automated Sample Handling",
      "Microfluidic Channels",
      "Disposable Reagent System",
      "LIMS Integration Ready",
    ],
    icon: <Microscope size={16} />,
  },
  {
    id: 6,
    name: "OrthoMatrix Implant System",
    category: "Implants",
    price: "On Request",
    image: IMG.implantSystem,
    description:
      "A comprehensive orthopedic implant range including plates, screws, and intramedullary nails manufactured from ASTM F136 Ti-6Al-4V. All components undergo rigorous fatigue testing and are CE & FDA 510(k) compliant.",
    features: [
      "ASTM F136 Titanium",
      "CE & FDA Compliant",
      "3D-Printed Custom Options",
      "Fatigue-Tested to 10⁷ Cycles",
    ],
    icon: <Bone size={16} />,
  },
  {
    id: 7,
    name: "ShieldCore Enclosure Pro",
    category: "Enclosures",
    price: "₹2,40,000",
    image: IMG.medicalEnclosure,
    description:
      "IP67-rated custom medical enclosures engineered for sensitive electronic assemblies. Designed with EMI/RFI shielding, thermal management pathways, and tool-less panel access for field-serviceable medical devices.",
    features: [
      "IP67 Ingress Protection",
      "EMI/RFI Shielding",
      "Thermal Management Fins",
      "Tool-Less Panel Access",
    ],
    icon: <ShieldCheck size={16} />,
  },
  {
    id: 8,
    name: "PulseWear Vitals Band",
    category: "Wearables",
    price: "₹45,000",
    image: IMG.wearableDevice,
    description:
      "A clinical-grade wearable vital signs monitor for continuous remote patient monitoring. Tracks heart rate, HRV, SpO₂, skin temperature, and activity with 7-day battery life and BLE 5.3 connectivity.",
    features: [
      "Clinical-Grade PPG Sensor",
      "7-Day Battery Life",
      "BLE 5.3 + Wi-Fi",
      "HIPAA-Compliant Cloud",
    ],
    icon: <HeartPulse size={16} />,
  },
];

const categories = [
  "All",
  "Monitoring",
  "Surgical",
  "Diagnostics",
  "Rehabilitation",
  "Laboratory",
  "Implants",
  "Enclosures",
  "Wearables",
];

// ─── Stats Bar Data ──────────────────────────────────────────────────────────
const stats = [
  { value: "200+", label: "Devices Deployed" },
  { value: "ISO 13485", label: "Certified QMS" },
  { value: "50+", label: "Hospital Partners" },
  { value: "99.97%", label: "Uptime Record" },
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

      {/* ── Stats Bar ───────────────────────────────────────────────────── */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center py-10 border-r border-white/10 last:border-r-0"
            >
              <span className="text-2xl md:text-3xl font-black text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 mt-1">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

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

      {/* ── Compliance Strip ────────────────────────────────────────────── */}
      <section className="bg-slate-900 py-16 px-6 md:px-16 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-10"
          >
            <div className="flex items-center gap-4 flex-shrink-0">
              <ShieldCheck size={32} className="text-emerald-400" />
              <div>
                <h3 className="text-white font-black text-lg uppercase tracking-tight">
                  Regulatory Compliance
                </h3>
                <p className="text-slate-400 text-xs font-medium">
                  All products meet international standards
                </p>
              </div>
            </div>
            <div className="h-px flex-1 bg-slate-700 hidden md:block" />
            <div className="flex flex-wrap items-center justify-center gap-6">
              {[
                "ISO 13485",
                "CE Marked",
                "FDA 510(k)",
                "IEC 60601",
                "RoHS",
                "REACH",
              ].map((cert) => (
                <span
                  key={cert}
                  className="px-5 py-2.5 border border-slate-700 text-[10px] font-black uppercase tracking-widest text-slate-300 hover:border-emerald-400 hover:text-emerald-400 transition-colors"
                >
                  {cert}
                </span>
              ))}
            </div>
          </motion.div>
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
