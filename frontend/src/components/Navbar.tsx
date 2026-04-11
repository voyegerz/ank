import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import {
  ChevronRight,
  Star,
  User,
  FileCode,
  Search,
  GraduationCap,
  Settings2,
  Filter,
  LayoutGrid,
  Zap,
  BookOpen,
  Stethoscope,
  Brain,
  FileText,
  Video,
  Newspaper,
  Layout,
  Wrench,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

import logo from "../assets/images/logo.png";

// ─── Brand Colors ────────────────────────────────────────────────────────────
const ANK_PRIMARY = "#010080";

// ─── Data ─────────────────────────────────────────────────────────────────────

const BUSINESS_UNITS = [
  {
    title: "CAD Design Services",
    icon: <Star size={15} />,
    path: "/business-units/cad-design",
    featured: true,
  },
  {
    title: "Software Development",
    icon: <FileCode size={15} />,
    path: "/business-units/software-development",
  },
  {
    title: "Manufacturing",
    icon: <Settings2 size={15} />,
    path: "/business-units/manufacturing",
  },
  {
    title: "Embedded Systems & IoT",
    icon: <Zap size={15} />,
    path: "/business-units/embedded-iot",
  },
  {
    title: "Cloud Services & Scaling",
    icon: <Search size={15} />,
    path: "/business-units/cloud-scaling",
  },
  {
    title: "Education",
    icon: <GraduationCap size={15} />,
    path: "/business-units/education",
  },
  {
    title: "Engineering Consultation",
    icon: <Wrench size={15} />,
    path: "/business-units/engineering-consultation",
  },
  {
    title: "Industry Collaboration",
    icon: <User size={15} />,
    path: "/business-units/industry-collaboration",
  },
];

const PRODUCTS = [
  {
    title: "Decor Products",
    desc: "Innovative solutions",
    icon: <Filter size={15} />,
    path: "/products/decor",
  },
  {
    title: "Software Products",
    desc: "Digital excellence",
    icon: <LayoutGrid size={15} />,
    path: "/products/software",
  },
  {
    title: "Industrial Equipment",
    desc: "Heavy-duty hardware",
    icon: <Zap size={15} />,
    path: "/products/industrial",
  },
  {
    title: "Courses",
    desc: "Professional training",
    icon: <BookOpen size={15} />,
    path: "/products/courses",
  },
  {
    title: "Medical Products",
    desc: "Precision engineering",
    icon: <Stethoscope size={15} />,
    path: "/products/medical",
  },
  {
    title: "Projects & Modelling",
    desc: "Bespoke designs",
    icon: <Brain size={15} />,
    path: "/products/modelling",
  },
];

const ABOUT_LINKS = [
  {
    title: "Company Overview",
    icon: <FileText size={14} />,
    path: "/about/overview",
  },
  {
    title: "Press & Newsroom",
    icon: <Newspaper size={14} />,
    path: "/about/press",
  },
  { title: "Images & Videos", icon: <Video size={14} />, path: "/about/media" },
  { title: "Blogs", icon: <Wrench size={14} />, path: "/about/blogs" },
  {
    title: "Case Studies",
    icon: <Wrench size={14} />,
    path: "/about/case-studies",
  },
  {
    title: "Tutorials & Ebooks",
    icon: <Layout size={14} />,
    path: "/about/resources",
  },
  {
    title: "Whitepapers",
    icon: <FileText size={14} />,
    path: "/about/whitepapers",
  },
  { title: "Support", icon: <Wrench size={14} />, path: "/about/support" },
];

const WHAT_WE_DO_TABS = [
  {
    id: "prod-eng",
    label: "Product Engineering",
    bg: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1600",
    items: [
      { name: "Software Engineering", path: "/services/software-engineering" },
      { name: "Hardware Engineering", path: "/services/hardware-engineering" },
      {
        name: "Mechanical Engineering",
        path: "/services/mechanical-engineering",
      },
      { name: "Testing & QA", path: "/services/testing-qa" },
    ],
    news: [
      {
        title: "Advanced Analytics",
        desc: "Smarter data processing for complex hardware systems.",
        image:
          "https://images.unsplash.com/photo-1551288049-bbbda536ad0a?auto=format&fit=crop&q=80&w=400",
      },
      {
        title: "Auto Reporting",
        desc: "Automated compliance and safety reporting for factories.",
        image:
          "https://images.unsplash.com/photo-1518186239717-2e9b136758e5?auto=format&fit=crop&q=80&w=400",
      },
    ],
  },
  {
    id: "mfg",
    label: "Manufacturing",
    bg: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600",
    items: [
      { name: "PCB Assembly", path: "/services/pcb-assembly" },
      { name: "Product Assembly", path: "/services/product-assembly" },
      { name: "Rapid Prototyping", path: "/services/rapid-prototyping" },
      { name: "FDM 3D Printing", path: "/services/fdm-3d-printing" },
    ],
    news: [
      {
        title: "Precision PCB",
        desc: "Our new assembly line achieves 0.1mm accuracy.",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400",
      },
      {
        title: "3D Printing Lab",
        desc: "Expanded prototyping capabilities with 10 new printers.",
        image:
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400",
      },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & Applications",
    bg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
    items: [
      { name: "Web Applications", path: "/services/web-applications" },
      { name: "Mobile Applications", path: "/services/mobile-applications" },
      { name: "Desktop Applications", path: "/services/desktop-applications" },
      { name: "IoT Applications", path: "/services/iot-applications" },
      { name: "Scaling & Maintenance", path: "/services/scaling-maintenance" },
    ],
    news: [
      {
        title: "Cloud Scaling",
        desc: "How we handle 1M+ concurrent users for our clients.",
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400",
      },
      {
        title: "IoT Edge Pro",
        desc: "Secure local processing for industrial IoT sensors.",
        image:
          "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=400",
      },
    ],
  },
  {
    id: "automation",
    label: "Production Automation",
    bg: "https://images.unsplash.com/photo-1518433278988-2b2f1f6c5fd5?auto=format&fit=crop&q=80&w=1600",
    items: [
      { name: "Software Automation", path: "/services/software-automation" },
      { name: "Process Automation", path: "/services/process-automation" },
      {
        name: "Maintenance & Troubleshooting",
        path: "/services/maintenance-troubleshooting",
      },
    ],
    news: [
      {
        title: "Smart Factory",
        desc: "Full SCADA integration for a major automotive plant.",
        image:
          "https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&q=80&w=400",
      },
      {
        title: "Predictive Care",
        desc: "AI-based maintenance system reduced downtime by 30%.",
        image:
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=400",
      },
    ],
  },
];

// ─── Shared glass style ───────────────────────────────────────────────────────

const glass: React.CSSProperties = {
  background: "rgba(255,255,255,0.96)",
  backdropFilter: "blur(32px) saturate(180%)",
  WebkitBackdropFilter: "blur(32px) saturate(180%)",
  border: "1px solid rgba(0,0,0,0.08)",
};

// ─── Dropdown panels ──────────────────────────────────────────────────────────

const WhatWeDoMenu = ({ onClose }: { onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState(WHAT_WE_DO_TABS[0].id);
  const current = WHAT_WE_DO_TABS.find((t) => t.id === activeTab)!;

  return (
    <div
      className="flex overflow-hidden bg-white w-full h-full min-h-95"
      style={{ borderRadius: 4 }}
    >
      {/* Sidebar */}
      <div className="w-56 flex flex-col justify-center gap-0.5 p-6 border-r border-black/4 bg-indigo-50/30">
        <p className="text-[9px] font-black tracking-[0.25em] text-slate-400 uppercase mb-4 px-2">
          Services
        </p>
        {WHAT_WE_DO_TABS.map((tab) => {
          return (
            <button
              key={tab.id}
              onMouseEnter={() => setActiveTab(tab.id)}
              className={`text-left text-[11px] font-black py-3 px-4 rounded-sm transition-all duration-200 flex items-center justify-between group uppercase tracking-wider ${
                activeTab === tab.id
                  ? "text-white shadow-md"
                  : "text-slate-500 hover:text-slate-900 hover:bg-black/3"
              }`}
              style={{
                backgroundColor:
                  activeTab === tab.id ? ANK_PRIMARY : "transparent",
              }}
            >
              {tab.label}
              <ChevronRight
                size={11}
                className={`transition-all duration-200 ${
                  activeTab === tab.id
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-2 group-hover:opacity-30"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Animated content pane */}
      <div className="flex-1 relative overflow-hidden bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex"
          >
            {/* Image strip with subtle dark/grey gradient */}
            <div className="relative w-40 shrink-0 overflow-hidden hidden md:block">
              <img
                src={current.bg}
                alt=""
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-75"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, rgba(0,0,0,0.4) 0%, #f8fafc 100%)",
                }}
              />
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col justify-center px-8 py-8 gap-0 bg-slate-50">
              <p style={{ color: ANK_PRIMARY }}>{current.label}</p>
              <div className="grid grid-cols-1 gap-1">
                {current.items.map((item, i) => {
                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03, duration: 0.2 }}
                    >
                      <NavLink
                        to={item.path}
                        onClick={onClose}
                        className={({ isActive }) =>
                          `group flex items-center gap-3 py-2.5 text-[14px] font-black transition-all duration-200 uppercase tracking-tight ${
                            isActive
                              ? "text-primary"
                              : "text-slate-600 hover:text-primary"
                          }`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            <span
                              className={`transition-all duration-300 ${isActive ? "w-4" : "w-0 group-hover:w-4"} h-0.5`}
                              style={{ backgroundColor: ANK_PRIMARY }}
                            />
                            {item.name}
                            <ArrowUpRight
                              size={13}
                              className={`ml-auto transition-all -translate-y-0.5 translate-x-0.5 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                              style={{ color: ANK_PRIMARY }}
                            />
                          </>
                        )}
                      </NavLink>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* News Section */}
            <div
              className="w-72 border-l border-black/4 bg-slate-50/50 p-8 flex flex-col overflow-y-auto no-scrollbar"
              data-lenis-prevent
            >
              <p className="text-[9px] font-black tracking-[0.25em] text-slate-400 uppercase mb-6">
                Latest News
              </p>
              <div className="space-y-4">
                {current.news.map((n, i) => (
                  <motion.div
                    key={n.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                    className="group cursor-pointer bg-white p-3 rounded-sm border border-black/5 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="aspect-[16/9] rounded-sm overflow-hidden mb-3">
                      <img
                        src={n.image}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex items-center gap-1 mb-1">
                      <h5 className="text-[10px] font-black uppercase text-slate-900 group-hover:text-primary transition-colors">
                        {n.title}
                      </h5>
                      <ArrowUpRight
                        size={9}
                        className="text-slate-400 group-hover:text-primary transition-colors"
                      />
                    </div>
                    <p className="text-[9px] text-slate-500 leading-relaxed line-clamp-2">
                      {n.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const BusinessUnitsMenu = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="p-10 bg-white w-full h-full" style={{ borderRadius: 4 }}>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {BUSINESS_UNITS.map((unit, i) => {
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03, duration: 0.2 }}
            >
              <NavLink
                to={unit.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `group flex items-center gap-4 p-5 border transition-all duration-200 rounded-sm h-full ${
                    isActive
                      ? "text-white shadow-lg"
                      : "bg-slate-50 border-black/4 hover:border-primary text-slate-600 hover:text-primary"
                  }`
                }
                style={({ isActive }) => ({
                  backgroundColor: isActive ? ANK_PRIMARY : undefined,
                  borderColor: isActive ? ANK_PRIMARY : undefined,
                })}
              >
                <div>{unit.icon}</div>
                <span className="text-[11px] font-black uppercase leading-tight tracking-tight">
                  {unit.title}
                </span>
              </NavLink>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const ProductsMenu = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="p-10 bg-white w-full h-full" style={{ borderRadius: 4 }}>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {PRODUCTS.map((prod, i) => {
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03, duration: 0.2 }}
            >
              <NavLink
                to={prod.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `group flex items-center gap-4 p-5 border transition-all duration-200 rounded-sm h-full ${
                    isActive
                      ? "text-white shadow-lg"
                      : "bg-slate-50 border-black/4 hover:border-primary text-slate-600 hover:text-primary"
                  }`
                }
              >
                <div>{prod.icon}</div>
                <span className="text-[11px] font-black uppercase leading-tight tracking-tight">
                  {prod.title}
                </span>
              </NavLink>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const AboutMenu = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="p-10 bg-white w-full h-full" style={{ borderRadius: 4 }}>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {ABOUT_LINKS.map((link, i) => {
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03, duration: 0.2 }}
            >
              <NavLink
                to={link.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `group flex items-center gap-4 p-5 border transition-all duration-200 rounded-sm h-full ${
                    isActive
                      ? "text-white shadow-lg"
                      : "bg-slate-50 border-black/4 hover:border-primary text-slate-600 hover:text-primary"
                  }`
                }
                style={({ isActive }) => ({
                  backgroundColor: isActive ? ANK_PRIMARY : undefined,
                  borderColor: isActive ? ANK_PRIMARY : undefined,
                })}
              >
                <div>{link.icon}</div>
                <span className="text-[11px] font-black uppercase leading-tight tracking-tight">
                  {link.title}
                </span>
              </NavLink>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// ─── Navbar ────────────────────────────────────────────────────────────────────

const Navbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(
    null,
  );
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [pillGeom, setPillGeom] = useState({ x: 0, w: 0 });
  const [navBarWidth, setNavBarWidth] = useState(0);
  const navRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const navBarRef = useRef<HTMLElement | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setHoveredMenu(null);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const openMenu = (name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setHoveredMenu(name);
    const el = navRefs.current[name];
    const bar = navBarRef.current;
    if (el && bar) {
      const elRect = el.getBoundingClientRect();
      const barRect = bar.getBoundingClientRect();
      setPillGeom({ x: elRect.left - barRect.left, w: elRect.width });
      setNavBarWidth(barRect.width);
    }
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setHoveredMenu(null), 140);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const navItems = [
    {
      name: "What we do",
      component: <WhatWeDoMenu onClose={() => setHoveredMenu(null)} />,
    },
    {
      name: "Business units",
      component: <BusinessUnitsMenu onClose={() => setHoveredMenu(null)} />,
    },
    {
      name: "Products",
      component: <ProductsMenu onClose={() => setHoveredMenu(null)} />,
    },
    {
      name: "About ANK",
      component: <AboutMenu onClose={() => setHoveredMenu(null)} />,
    },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* ── Desktop Floating Navbar ── */}
      <div className="fixed top-0 left-0 w-full z-80 flex justify-center items-start lg:pt-6 pointer-events-none px-0 lg:px-6">
        <div className="relative w-full lg:w-auto">
          <motion.nav
            ref={navBarRef}
            initial={{ y: -30, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ ...glass, pointerEvents: "auto" }}
            className="flex items-center justify-between lg:justify-start gap-0.5 px-6 lg:px-3 py-4 lg:py-2 relative shadow-2xl shadow-black/5 rounded-none lg:rounded-sm border-x-0 lg:border-x w-full lg:w-auto"
            onMouseLeave={scheduleClose}
          >
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center px-4 py-1 mr-2 shrink-0 transition-transform hover:scale-105"
            >
              <img src={logo} alt="ANK" className="h-7 w-auto" />
            </Link>

            {/* Sliding Highlight */}
            <AnimatePresence>
              {hoveredMenu && (
                <motion.div
                  layoutId="pill-highlight"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    x: pillGeom.x - 8,
                    width: pillGeom.w + 16,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 450, damping: 36 }}
                  style={{
                    position: "absolute",
                    top: 8,
                    bottom: 8,
                    left: 0,
                    borderRadius: 2,
                    background: "rgba(0,0,0,0.05)",
                    pointerEvents: "none",
                  }}
                />
              )}
            </AnimatePresence>

            {/* Nav links */}
            <div className="hidden lg:flex items-center">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  ref={(el) => {
                    navRefs.current[item.name] = el;
                  }}
                  onMouseEnter={() =>
                    item.component ? openMenu(item.name) : setHoveredMenu(null)
                  }
                >
                  {item.path ? (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `px-4 py-2 text-[11px] font-black uppercase tracking-[0.15em] transition-colors duration-150 block whitespace-nowrap ${
                          isActive
                            ? "text-primary"
                            : "text-[#64748b] hover:text-primary"
                        }`
                      }
                      style={{ color: undefined }} // Let NavLink className handle it
                    >
                      {item.name}
                    </NavLink>
                  ) : (
                    <button
                      className="px-4 py-2 text-[11px] font-black uppercase tracking-[0.15em] transition-colors duration-150 flex items-center gap-1 whitespace-nowrap"
                      style={{
                        color:
                          hoveredMenu === item.name ||
                          (item.name === "What we do" &&
                            location.pathname.startsWith("/services/")) ||
                          (item.name === "Business units" &&
                            location.pathname.startsWith("/business-units/")) ||
                          (item.name === "Products" &&
                            location.pathname.startsWith("/products/")) ||
                          (item.name === "About ANK" &&
                            location.pathname.startsWith("/about/"))
                            ? ANK_PRIMARY
                            : "#64748b",
                      }}
                    >
                      {item.name}
                      <motion.span
                        animate={{ rotate: hoveredMenu === item.name ? 90 : 0 }}
                        transition={{ duration: 0.18 }}
                        className="opacity-40"
                      >
                        <ChevronRight size={11} />
                      </motion.span>
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Separator + CTA */}
            <div className="hidden lg:block w-px h-5 bg-black/6 mx-2" />
            <motion.button
              onClick={() => navigate("/contact")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-sm transition-colors whitespace-nowrap shadow-xl hover:bg-primary-hover"
              style={{ backgroundColor: ANK_PRIMARY, pointerEvents: "auto" }}
            >
              Get a quote
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden ml-4 p-2 text-slate-400 hover:text-slate-900 transition-colors"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              style={{ pointerEvents: "auto" }}
            >
              <Menu size={20} />
            </button>
          </motion.nav>

          {/* Fixed-Width Dropdown matching Navbar Width */}
          <AnimatePresence mode="wait">
            {hoveredMenu && (
              <motion.div
                key={hoveredMenu}
                initial={{ opacity: 0, y: 15, scale: 0.995 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{
                  opacity: 0,
                  y: 10,
                  scale: 0.995,
                  transition: { duration: 0.14 },
                }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  ...glass,
                  position: "absolute",
                  top: "calc(100% + 12px)",
                  left: 0,
                  width: navBarWidth,
                  maxHeight: "85vh",
                  overflowY: "auto",
                  transformOrigin: "top center",
                  borderRadius: 4,
                  zIndex: 90,
                  pointerEvents: "auto",
                  boxShadow: "0 40px 80px -20px rgba(0,0,0,0.12)",
                }}
                onMouseEnter={cancelClose}
                onMouseLeave={scheduleClose}
                data-lenis-prevent
              >
                {navItems.find((i) => i.name === hoveredMenu)?.component}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Mobile overlay ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0  w-screen  z-100 lg:hidden overflow-y-auto"
            data-lenis-prevent
            style={{
              background: "rgba(255,255,255,0.98)",
              backdropFilter: "blur(24px)",
            }}
          >
            <div className="p-6 flex justify-between items-center border-b border-black/4 bg-white sticky top-0 z-10">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                <img src={logo} alt="ANK" className="h-6 w-auto" />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-slate-400"
              >
                <X size={24} />
              </button>
            </div>
            <div className="px-6 pb-12 pt-4">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    delay: i * 0.05,
                    duration: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="border-b border-black/4"
                >
                  {item.path ? (
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between py-5 text-[18px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors"
                    >
                      {item.name}
                      <ArrowUpRight size={17} className="text-slate-300" />
                    </Link>
                  ) : (
                    <div>
                      <button
                        onClick={() =>
                          setExpandedMobileItem(
                            expandedMobileItem === item.name ? null : item.name,
                          )
                        }
                        className="flex items-center justify-between w-full py-5 text-[18px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors"
                      >
                        {item.name}
                        <motion.span
                          animate={{
                            rotate: expandedMobileItem === item.name ? 90 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight size={17} className="text-slate-300" />
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {expandedMobileItem === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.24,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <div className="pb-5 pl-2 flex flex-col gap-0.5">
                              {item.name === "What we do" &&
                                WHAT_WE_DO_TABS.map((tab) => (
                                  <div key={tab.id} className="mb-4">
                                    <p className="text-[9px] font-black tracking-[0.22em] text-slate-400 uppercase mb-2 mt-1">
                                      {tab.label}
                                    </p>
                                    {tab.items.map((sub) => (
                                      <Link
                                        key={sub.path}
                                        to={sub.path}
                                        onClick={() =>
                                          setIsMobileMenuOpen(false)
                                        }
                                        className="block py-2 text-[13px] text-slate-500 hover:text-slate-900 font-black uppercase tracking-wider pl-2 transition-colors"
                                      >
                                        {sub.name}
                                      </Link>
                                    ))}
                                  </div>
                                ))}
                              {item.name === "Business units" &&
                                BUSINESS_UNITS.map((u) => (
                                  <Link
                                    key={u.path}
                                    to={u.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="py-2 text-[13px] text-slate-500 hover:text-slate-900 font-black uppercase tracking-wider pl-2 block transition-colors"
                                  >
                                    {u.title}
                                  </Link>
                                ))}
                              {item.name === "Products" &&
                                PRODUCTS.map((p) => (
                                  <Link
                                    key={p.path}
                                    to={p.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="py-2 text-[13px] text-slate-500 hover:text-slate-900 font-black uppercase tracking-wider pl-2 block transition-colors"
                                  >
                                    {p.title}
                                  </Link>
                                ))}
                              {item.name === "About ANK" &&
                                ABOUT_LINKS.map((a) => (
                                  <Link
                                    key={a.path}
                                    to={a.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="py-2 text-[13px] text-slate-500 hover:text-slate-900 font-black uppercase tracking-wider pl-2 block transition-colors"
                                  >
                                    {a.title}
                                  </Link>
                                ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </motion.div>
              ))}

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.38 }}
                onClick={() => {
                  navigate("/contact");
                  setIsMobileMenuOpen(false);
                }}
                className="mt-8 w-full text-white py-4 rounded-sm text-[13px] font-black uppercase tracking-[0.2em] shadow-xl transition-colors"
                style={{ backgroundColor: ANK_PRIMARY }}
              >
                Get a quote
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
