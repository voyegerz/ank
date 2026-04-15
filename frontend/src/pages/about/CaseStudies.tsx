import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ArrowRight,
  Cpu,
  Activity,
  Lightbulb,
} from "lucide-react";
import PageLayout from "../../components/PageLayout";
import CommonHero from "../../components/CommonHero";
import CTASection from "@/components/service/CTA";
import { useNavigate } from "react-router-dom";

// ─── Case Study Data ────────────────────────────────────────────────────────
interface CaseStudy {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  highlights: {
    title: string;
    content: string;
  }[];
  icon: React.ReactNode;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Lung Pulmonary Device",
    category: "Medical Engineering",
    description:
      "A high-precision diagnostic instrument designed to measure and analyze respiratory parameters with clinical-grade accuracy. Our team handled everything from mechanical enclosure design to sensor integration and embedded software.",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=1200",
    icon: <Activity size={20} />,
    highlights: [
      {
        title: "The Challenge",
        content: "Developing a portable, reliable system capable of high-sensitivity pressure sensing in variable clinical environments while maintaining a user-friendly interface for medical staff.",
      },
      {
        title: "Engineering Solution",
        content: "We utilized medical-grade sensors paired with an ESP32-based core, featuring real-time data visualization on a high-contrast OLED display and secure cloud synchronization.",
      },
      {
        title: "Impact & Results",
        content: "The device reduced diagnosis time by 30% in trial clinics and provided portable respiratory monitoring for home-care patients.",
      }
    ]
  },
  {
    id: 2,
    title: "Industrial PLC Automation",
    category: "Automation",
    description:
      "A complete factory-floor overhaul for a manufacturing client, replacing legacy manual systems with a robust, networked PLC and SCADA architecture for real-time monitoring.",
    image: "https://images.unsplash.com/photo-1518433278988-2b2f1f6c5fd5?auto=format&fit=crop&q=80&w=1200",
    icon: <Cpu size={20} />,
    highlights: [
      {
        title: "The Challenge",
        content: "Modernizing a 20-year-old production line without significant downtime, ensuring all legacy machinery could communicate with modern industrial protocols.",
      },
      {
        title: "Engineering Solution",
        content: "Implemented a Siemens S7-1200 PLC backbone with a custom-designed HMI. Integrated Modbus and Profinet interfaces for seamless machine-to-machine communication.",
      },
      {
        title: "Impact & Results",
        content: " Achieved a 25% increase in production throughput and a 40% reduction in mechanical failures through proactive error logging.",
      }
    ]
  },
  {
    id: 3,
    title: "Smart Dynamic Lighting",
    category: "Digital Decor",
    description:
      "An architectural lighting installation for a premium corporate lobby, featuring kinetic elements and intelligent pattern generation based on occupancy and time of day.",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1200",
    icon: <Lightbulb size={20} />,
    highlights: [
      {
        title: "The Challenge",
        content: "Creating a large-scale artistic installation that serves a functional lighting purpose while being programmable and energy-efficient.",
      },
      {
        title: "Engineering Solution",
        content: "Developed a custom DMX-over-Ethernet control system using addressable LED arrays. Created a web-based dashboard for easy scene scheduling and intensity control.",
      },
      {
        title: "Impact & Results",
        content: "Transformed the lobby into a brand-defining landmark while reducing energy consumption by 15% compared to standard decorative lighting.",
      }
    ]
  }
];

const AccordionItem = ({ title, content, isOpen, onToggle }: { title: string; content: string; isOpen: boolean; onToggle: () => void }) => {
  return (
    <div className="border-b border-slate-100 last:border-none">
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left group transition-all"
      >
        <span className={`text-xs font-black uppercase tracking-widest ${isOpen ? 'text-primary' : 'text-slate-500 group-hover:text-slate-900'}`}>
          {title}
        </span>
        <ChevronDown 
          size={16} 
          className={`transition-transform duration-500 ${isOpen ? 'rotate-180 text-primary' : 'text-slate-300'}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-sm text-slate-500 leading-relaxed font-medium">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CaseStudies = () => {
  const [openAccordion, setOpenAccordion] = useState<{ [key: number]: number | null }>({});
  const navigate = useNavigate();

  const toggleAccordion = (caseId: number, index: number) => {
    setOpenAccordion(prev => ({
      ...prev,
      [caseId]: prev[caseId] === index ? null : index
    }));
  };

  return (
    <PageLayout>
      <CommonHero
        bgImage="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1920"
        title="Case Studies"
        caption="Engineering Excellence"
        subtitle="Explore how we solve complex real-world challenges through multidisciplinary expertise, innovative design, and robust engineering."
        watermarkNumber="07"
      />

      <section className="py-24 bg-white px-6 md:px-16 lg:px-32">
        <div className="max-w-7xl mx-auto space-y-32 md:space-y-48">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="aspect-[4/5] md:aspect-video lg:aspect-[4/5] rounded-sm overflow-hidden shadow-2xl bg-slate-100 relative">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-700" />
                </div>
                
                {/* Floating Category Badge */}
                <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-primary text-white p-8 md:p-10 shadow-2xl hidden md:block">
                   <div className="flex flex-col gap-2">
                     <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Success Story</span>
                     <h3 className="text-xl font-black uppercase tracking-tighter leading-none">{study.category}</h3>
                   </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-10">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/5 text-primary rounded-sm">
                      {study.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                      Project Archive
                    </span>
                  </div>
                  
                  <h2 className="text-4xl lg:text-5xl font-black text-slate-900 uppercase leading-[0.9] tracking-tighter">
                    {study.title}
                  </h2>
                  
                  <p className="text-slate-500 text-sm leading-relaxed font-medium uppercase tracking-wide">
                    {study.description}
                  </p>
                </div>

                {/* Highlights Accordion */}
                <div className="border-t border-slate-100 pt-2">
                  {study.highlights.map((highlight, i) => (
                    <AccordionItem
                      key={i}
                      title={highlight.title}
                      content={highlight.content}
                      isOpen={openAccordion[study.id] === i}
                      onToggle={() => toggleAccordion(study.id, i)}
                    />
                  ))}
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => navigate("/contact")}
                    className="inline-flex items-center gap-4 bg-slate-900 text-white hover:bg-primary px-10 py-5 text-[10px] font-black uppercase tracking-[0.2em] transition-all group/btn"
                  >
                    Discuss Similar Project
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover/btn:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Turn Your Ideas Into Reality"
        eyebrowHighlight="Reality"
        heading="From complex industrial problems to innovative medical devices — we engineer success."
        primaryLabel="Start Your Project"
        secondaryLabel="Technical Consultation"
        onPrimaryClick={() => navigate("/contact")}
        onSecondaryClick={() => navigate("/contact")}
      />
    </PageLayout>
  );
};

export default CaseStudies;
