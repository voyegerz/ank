import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  ChevronRight,
  Filter,
  LayoutGrid,
  Zap,
  BookOpen,
  Stethoscope,
  FileText,
  Wrench,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

import logo from "../assets/images/logo.svg";

// ─── Brand Colors ────────────────────────────────────────────────────────────
const ANK_PRIMARY = "#010080";

// ─── Data ─────────────────────────────────────────────────────────────────────

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
];

const ABOUT_LINKS = [
  {
    title: "Company Overview",
    icon: <FileText size={14} />,
    path: "/about/overview",
  },
  {
    title: "Case Studies",
    icon: <Wrench size={14} />,
    path: "/about/case-studies",
  },
];

const OUR_SERVICES_TABS = [
  {
    id: "prod-design",
    label: "Product Designs",
    bg: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1600",
    items: [
      {
        name: "Cad Design - 2D/3D",
        path: "/services/mechanical-engineering",
        image:
          "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "FEA Analysis",
        path: "/services/testing-qa",
        image:
          "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Reverse Engineering",
        path: "/services/reverse-engineering",
        image:
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "SPM",
        path: "/services/spm",
        image:
          "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800",
      },
    ],
  },
  {
    id: "ind-auto",
    label: "Industrial Automation",
    bg: "https://images.unsplash.com/photo-1518433278988-2b2f1f6c5fd5?auto=format&fit=crop&q=80&w=1600",
    items: [
      {
        name: "PLC Programming",
        path: "/services/process-automation",
        image:
          "https://images.unsplash.com/photo-1518433278988-2b2f1f6c5fd5?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Panel Automation",
        path: "/services/panel-automation",
        image:
          "https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "DCS/SCADA/HMI",
        path: "/services/software-automation",
        image:
          "https://images.unsplash.com/photo-1551288049-bbbda536ad0a?auto=format&fit=crop&q=80&w=800",
      },
    ],
  },
  {
    id: "soft-sol",
    label: "Software Solutions",
    bg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
    items: [
      {
        name: "Website Design",
        path: "/services/web-applications",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Application Design",
        path: "/services/desktop-applications",
        image:
          "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "SAAS",
        path: "/services/saas",
        image:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Mobile Application",
        path: "/services/mobile-applications",
        image:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Web/IoT Application",
        path: "/services/iot-applications",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Inventory Mgt.",
        path: "/services/scaling-maintenance",
        image:
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
      },
    ],
  },
  {
    id: "mfg",
    label: "Manufacturing",
    bg: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600",
    items: [
      {
        name: "Rapid Prototyping",
        path: "/services/rapid-prototyping",
        image:
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "3D Printing",
        path: "/services/fdm-3d-printing",
        image:
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "PCB Design/Manufacture",
        path: "/services/pcb-assembly",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      },
    ],
  },
  {
    id: "std-outreach",
    label: "Student Outreach",
    bg: "https://images.unsplash.com/photo-1523240715630-9918c13bc1ad?auto=format&fit=crop&q=80&w=1600",
    items: [
      {
        name: "Schools/College Projects",
        path: "/services/schools-college-projects",
        image:
          "https://images.unsplash.com/photo-1523240715630-9918c13bc1ad?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Workshops",
        path: "/services/workshops",
        image:
          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Project to Product (P2P)",
        path: "/services/project-to-product",
        image:
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "DIY Robotics Kits",
        path: "/products/courses",
        image:
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
      },
    ],
  },
];

// ─── Shared glass style ───────────────────────────────────────────────────────

const glass: React.CSSProperties = {
  background: "#ffffff",
  backdropFilter: "blur(32px) saturate(180%)",
  WebkitBackdropFilter: "blur(32px) saturate(180%)",
  border: "1px solid rgba(0,0,0,0.08)",
};

// ─── Dropdown panels ──────────────────────────────────────────────────────────

const OurServicesMenu = ({ onClose }: { onClose: () => void }) => {
  const location = useLocation();
  const currentPath = location.pathname.replace(/\/$/, "");
  
  // Find the tab that contains the current active path, or default to the first one
  const initialTab = OUR_SERVICES_TABS.find(tab => 
    tab.items.some(item => item.path.replace(/\/$/, "") === currentPath)
  )?.id || OUR_SERVICES_TABS[0].id;

  const [activeTab, setActiveTab] = useState(initialTab);
  const [hoveredSubItem, setHoveredSubItem] = useState<string | null>(null);
  const current = OUR_SERVICES_TABS.find((t) => t.id === activeTab)!;

  const activeImage =
    current.items.find((item) => item.name === hoveredSubItem)?.image ||
    current.items[0].image;

  return (
    <div
      className="flex overflow-hidden bg-white w-full h-full min-h-95"
      style={{ borderRadius: 4 }}
    >
      {/* Sidebar */}
      <div className="w-56 flex flex-col justify-center gap-0.5 p-6 border-r border-black/4 bg-indigo-50/30 relative">
        <p className="text-[9px] font-black tracking-[0.25em] text-slate-400 uppercase mb-4 px-2 relative z-10">
          Services
        </p>
        <div className="relative flex flex-col gap-0.5">
          {OUR_SERVICES_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onMouseEnter={() => {
                  setActiveTab(tab.id);
                  setHoveredSubItem(null);
                }}
                className={`text-left text-[11px] font-black py-3 px-4 rounded-sm transition-all duration-300 flex items-center justify-between group uppercase tracking-wider relative z-10 ${
                  isActive ? "text-white" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {tab.label}
                <ChevronRight
                  size={11}
                  className={`transition-all duration-300 ${
                    isActive
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-2 group-hover:opacity-30"
                  }`}
                />
                {isActive && (
                  <motion.div
                    layoutId="active-tab-bg"
                    className="absolute inset-0 z-[-1] rounded-sm shadow-md"
                    style={{ backgroundColor: ANK_PRIMARY }}
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
              </button>
            );
          })}
        </div>
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
            {/* Links */}
            <div className="flex-1 flex flex-col justify-start px-8 pt-12 pb-10 gap-0 bg-white">
              <p
                className="text-[10px] font-black tracking-[0.2em] uppercase mb-6 opacity-40"
                style={{ color: ANK_PRIMARY }}
              >
                {current.label}
              </p>
              <div className="grid grid-cols-1 gap-1">
                {current.items.map((item, i) => {
                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03, duration: 0.2 }}
                      onMouseEnter={() => setHoveredSubItem(item.name)}
                    >
                      <NavLink
                        to={item.path}
                        onClick={onClose}
                        className={({ isActive }) => {
                          const active = isActive || location.pathname.replace(/\/$/, "") === item.path.replace(/\/$/, "");
                          return `group flex items-center gap-3 py-2.5 text-[14px] font-black transition-all duration-200 uppercase tracking-tight ${
                            active
                              ? "text-primary"
                              : "text-slate-600 hover:text-primary"
                          }`;
                        }}
                      >
                        {({ isActive: navActive }) => {
                          const active = navActive || location.pathname.replace(/\/$/, "") === item.path.replace(/\/$/, "");
                          return (
                            <>
                              <span
                                className={`transition-all duration-300 ${active ? "w-4" : "w-0 group-hover:w-4"} h-0.5`}
                                style={{ backgroundColor: ANK_PRIMARY }}
                              />
                              {item.name}
                              <ArrowUpRight
                                size={13}
                                className={`ml-auto transition-all -translate-y-0.5 translate-x-0.5 ${active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                                style={{ color: ANK_PRIMARY }}
                              />
                            </>
                          );
                        }}
                      </NavLink>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Dynamic Image Display */}
            <div className="w-85 border-l border-black/4 bg-slate-50 relative overflow-hidden">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={activeImage}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute inset-0"
                >
                  <img
                    src={activeImage}
                    alt=""
                    className="w-full h-full object-cover grayscale-[0.2] brightness-90"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, var(--color-primary) 0%, transparent 60%)`,
                      opacity: 0.4,
                    }}
                  />
                  <div className="absolute bottom-8 left-8 right-8">
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-[10px] font-black text-white uppercase tracking-[0.2em]"
                    >
                      {hoveredSubItem || "Featured Solution"}
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const ProductsMenu = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="p-10 bg-white w-full h-full" style={{ borderRadius: 4 }}>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
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
                className={({ isActive }) => {
                  const active = isActive || location.pathname.replace(/\/$/, "") === prod.path.replace(/\/$/, "");
                  return `group flex items-center gap-4 p-5 border transition-all duration-200 rounded-sm h-full ${
                    active
                      ? "text-white shadow-lg"
                      : "bg-slate-50 border-black/4 hover:border-primary text-slate-600 hover:text-primary"
                  }`;
                }}
                style={({ isActive }) => {
                  const active = isActive || location.pathname.replace(/\/$/, "") === prod.path.replace(/\/$/, "");
                  return {
                    backgroundColor: active ? ANK_PRIMARY : undefined,
                    borderColor: active ? ANK_PRIMARY : undefined,
                  };
                }}
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
                className={({ isActive }) => {
                  const active = isActive || location.pathname.replace(/\/$/, "") === link.path.replace(/\/$/, "");
                  return `group flex items-center gap-4 p-5 border transition-all duration-200 rounded-sm h-full ${
                    active
                      ? "text-white shadow-lg"
                      : "bg-slate-50 border-black/4 hover:border-primary text-slate-600 hover:text-primary"
                  }`;
                }}
                style={({ isActive }) => {
                  const active = isActive || location.pathname.replace(/\/$/, "") === link.path.replace(/\/$/, "");
                  return {
                    backgroundColor: active ? ANK_PRIMARY : undefined,
                    borderColor: active ? ANK_PRIMARY : undefined,
                  };
                }}
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

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show if scrolling up OR at the top of the page
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Hide if scrolling down and moved past 100px
        setIsVisible(false);
        setHoveredMenu(null); // Close any open dropdowns when hiding
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Helper to find current subpage name for subtext
  const getActiveSubtext = (menuName: string) => {
    if (menuName === "Our Services") {
      const allItems = OUR_SERVICES_TABS.flatMap((t) => t.items);
      return allItems.find((i) => i.path === location.pathname)?.name;
    }
    if (menuName === "Products") {
      return PRODUCTS.find((i) => i.path === location.pathname)?.title;
    }
    if (menuName === "About ANK") {
      return ABOUT_LINKS.find((i) => i.path === location.pathname)?.title;
    }
    return null;
  };

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
      name: "Our Services",
      component: <OurServicesMenu onClose={() => setHoveredMenu(null)} />,
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
  ];

  return (
    <>
      {/* ── Desktop Floating Navbar ── */}
      <div 
        className="fixed top-0 left-0 w-full z-80 flex justify-center items-start lg:pt-6 pointer-events-none px-0 lg:px-6 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]"
        style={{ transform: isVisible || isMobileMenuOpen ? 'translateY(0)' : 'translateY(-120%)' }}
      >
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
              <img src={logo} alt="ANK" className="h-12 w-auto" />
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
              {navItems.map((item) => {
                const activeSub = getActiveSubtext(item.name);
                return (
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
                          `px-4 py-2 text-[13px] font-black uppercase tracking-[0.15em] transition-colors duration-150 block whitespace-nowrap ${
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
                        className="px-4 py-2 flex flex-col items-start justify-center min-w-[100px] transition-colors duration-150 group"
                        style={{
                          color:
                            hoveredMenu === item.name ||
                            (item.name === "Our Services" &&
                              location.pathname.startsWith("/services/")) ||
                            (item.name === "Products" &&
                              location.pathname.startsWith("/products/")) ||
                            (item.name === "About ANK" &&
                              location.pathname.startsWith("/about/"))
                              ? ANK_PRIMARY
                              : "#64748b",
                        }}
                      >
                        <div className="flex items-center gap-1">
                          <span className="text-[13px] font-black uppercase tracking-[0.15em] whitespace-nowrap">
                            {item.name}
                          </span>
                          <motion.span
                            animate={{
                              rotate: hoveredMenu === item.name ? 90 : 0,
                            }}
                            transition={{ duration: 0.18 }}
                            className="opacity-40"
                          >
                            <ChevronRight size={11} />
                          </motion.span>
                        </div>
                        {activeSub && (
                          <motion.span
                            initial={{ opacity: 0, y: -2 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[8px] font-black uppercase tracking-[0.1em] -mt-0.5 text-left block w-full"
                            style={{ color: ANK_PRIMARY }}
                          >
                            {activeSub}
                          </motion.span>
                        )}
                      </button>
                    )}
                  </div>
                );
              })}

              {/* Contact Us CTA Button */}
              <div className="ml-2">
                <Link
                  to="/contact"
                  className="px-6 py-2 bg-primary text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-sm shadow-xl hover:bg-primary-hover transition-all inline-block whitespace-nowrap"
                >
                  Contact Us
                </Link>
              </div>
            </div>

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
              background: "#ffffff",
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
                              {item.name === "Our Services" &&
                                OUR_SERVICES_TABS.map((tab) => (
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
