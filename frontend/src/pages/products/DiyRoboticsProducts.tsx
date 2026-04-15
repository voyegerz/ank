import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, CheckCircle2, ArrowRight, Cpu, Zap, ShieldCheck } from "lucide-react";
import PageLayout from "../../components/PageLayout";
import CommonHero from "../../components/CommonHero";
import Marquee from "../../components/products/Marquee";
import CTASection from "@/components/service/CTA";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  features: string[];
  complexity: "Beginner" | "Intermediate" | "Advanced";
}

const products: Product[] = [
  {
    id: 1,
    name: "Explorer-1: Basic Mobile Rover",
    category: "Mobile Robots",
    price: "$45.00",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fdec69a?auto=format&fit=crop&q=80&w=2000",
    description:
      "The perfect entry point into robotics. A two-wheeled autonomous platform that teaches the fundamentals of motor control and ultrasonic sensing.",
    features: [
      "Arduino Compatible Controller",
      "Ultrasonic Obstacle Avoidance",
      "Modular Chassis Design",
    ],
    complexity: "Beginner",
  },
  {
    id: 2,
    name: "Vision-X: Line Follower Pro",
    category: "Sensory Robots",
    price: "$65.00",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2000",
    description:
      "A high-speed competition-grade line follower kit. Features advanced PID control algorithms and a multi-sensor array for precision tracking.",
    features: ["5-Channel IR Sensor Array", "PID Control Logic", "High-Torque DC Motors"],
    complexity: "Intermediate",
  },
  {
    id: 3,
    name: "Arm-Master: 4-DOF Robotic Arm",
    category: "Manipulators",
    price: "$120.00",
    image: "https://images.unsplash.com/photo-1561144443-f546830b6d9b?auto=format&fit=crop&q=80&w=2000",
    description:
      "Learn industrial kinematics with this 4-degrees-of-freedom robotic arm. Perfect for pick-and-place experiments and learning servo coordination.",
    features: [
      "Precision Servo Motors",
      "Mechanical Gripper Included",
      "Potentiometer & App Control",
    ],
    complexity: "Intermediate",
  },
  {
    id: 4,
    name: "IoT Smart Home Hub Kit",
    category: "IoT Systems",
    price: "$85.00",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000",
    description:
      "Bridge the gap between robotics and the cloud. This kit includes various sensors and an ESP32 for building a connected monitoring system.",
    features: [
      "ESP32 Wi-Fi/Bluetooth MCU",
      "Real-time Dashboard Integration",
      "Environmental & Motion Sensors",
    ],
    complexity: "Advanced",
  },
  {
    id: 5,
    name: "Spider-Bot: Quadruped Walker",
    category: "Bionic Robots",
    price: "$150.00",
    image: "https://images.unsplash.com/photo-1558444479-c8a51bc73a48?auto=format&fit=crop&q=80&w=2000",
    description:
      "A sophisticated 8-servo walking robot that mimics biological movement. Teaches complex gait planning and balance control.",
    features: ["8 Metal Gear Servos", "Inverse Kinematics Library", "Wireless Remote Support"],
    complexity: "Advanced",
  },
];

const categories = ["All", "Mobile Robots", "Sensory Robots", "Manipulators", "IoT Systems", "Bionic Robots"];

const DiyRoboticsProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

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
        bgImage="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000"
        title="Robotics Kit Catalog"
        caption="Build Your Future"
        subtitle="Empower your learning journey with our precision-engineered DIY robotics kits. From basic rovers to advanced bionics, we have the perfect platform for every level of expertise."
        watermarkNumber="23"
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
                placeholder="Search kits..."
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

          {/* Product List */}
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
                    <div className="w-full md:w-150 aspect-[4/3] overflow-hidden rounded-sm relative shadow-2xl bg-slate-100">
                      <motion.img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute top-6 right-6 z-10 flex flex-col gap-2 items-end">
                        <span className="bg-white/90 backdrop-blur px-4 py-2 text-xs font-black tracking-tighter text-primary shadow-xl">
                          {product.price}
                        </span>
                        <span className={`px-3 py-1 text-[9px] font-black uppercase tracking-widest text-white shadow-lg ${
                          product.complexity === "Beginner" ? "bg-green-500" :
                          product.complexity === "Intermediate" ? "bg-orange-500" : "bg-red-500"
                        }`}>
                          {product.complexity}
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
                          What's Included
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
                        <button 
                          onClick={() => navigate("/contact")}
                          className="inline-flex items-center gap-4 bg-primary text-white hover:bg-slate-900 px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all group/btn"
                        >
                          Order Kit Now
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
                  No matching kits found...
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

      {/* Benefits Section */}
      <section className="bg-slate-950 py-24 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-32 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <Cpu className="text-primary-hover" size={40} />
              <h3 className="text-xl font-black uppercase tracking-tight">Pro Hardware</h3>
              <p className="text-slate-400 text-xs font-medium leading-relaxed uppercase">
                We use industry-standard components that prepare you for real-world engineering challenges.
              </p>
            </div>
            <div className="space-y-4">
              <Zap className="text-primary-hover" size={40} />
              <h3 className="text-xl font-black uppercase tracking-tight">Fast Assembly</h3>
              <p className="text-slate-400 text-xs font-medium leading-relaxed uppercase">
                Modular designs and clear documentation ensure a smooth building experience without frustration.
              </p>
            </div>
            <div className="space-y-4">
              <ShieldCheck className="text-primary-hover" size={40} />
              <h3 className="text-xl font-black uppercase tracking-tight">Expert Support</h3>
              <p className="text-slate-400 text-xs font-medium leading-relaxed uppercase">
                Access to our technical forums and documentation libraries to help you troubleshoot and innovate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="bg-slate-50 py-24">
        <div className="px-6 md:px-16 lg:px-32 mb-12">
          <div className="flex items-end justify-between">
            <div className="max-w-xl">
              <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 mb-4">
                Explore the <span className="text-primary italic">Kits</span>
              </h2>
              <p className="text-slate-500 text-xs font-medium leading-relaxed uppercase">
                A visual journey through our bionic and autonomous creations. Each kit is a milestone in your engineering education.
              </p>
            </div>
          </div>
        </div>
        <Marquee images={allImages} speed={30} />
      </section>

      <CTASection 
        eyebrow="Ready to build?" 
        eyebrowHighlight="build" 
        heading="Join thousands of students and hobbyists building the future of robotics today." 
        primaryLabel="Browse Catalog" 
        secondaryLabel="Contact Us"
        onPrimaryClick={() => {
          const el = document.getElementById('catalog-top');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onSecondaryClick={() => navigate("/contact")}
      />
    </PageLayout>
  );
};

export default DiyRoboticsProducts;
