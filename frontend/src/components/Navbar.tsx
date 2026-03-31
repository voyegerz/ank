import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import {
  ChevronRight, Star, User, FileCode, Search, GraduationCap,
  Settings2, Filter, LayoutGrid, Zap, BookOpen, Stethoscope,
  Brain, FileText, Video, Newspaper, Layout, Wrench, Menu, X, ArrowUpRight
} from 'lucide-react'

import logo from '../assets/images/logo.png'

// ─── Brand Colors ────────────────────────────────────────────────────────────
const ANK_NAVY = '#002E5D'
const ANK_CYAN = '#00AEEF'

// ─── Data ─────────────────────────────────────────────────────────────────────

const BUSINESS_UNITS = [
  { title: 'CAD Design Services',       icon: <Star size={15} />,          path: '/business-units/cad-design',              featured: true },
  { title: 'Software Development',      icon: <FileCode size={15} />,      path: '/business-units/software-development' },
  { title: 'Manufacturing',             icon: <Settings2 size={15} />,     path: '/business-units/manufacturing' },
  { title: 'Embedded Systems & IoT',    icon: <Zap size={15} />,           path: '/business-units/embedded-iot' },
  { title: 'Cloud Services & Scaling',  icon: <Search size={15} />,        path: '/business-units/cloud-scaling' },
  { title: 'Education',                 icon: <GraduationCap size={15} />, path: '/business-units/education' },
  { title: 'Engineering Consultation',  icon: <Wrench size={15} />,        path: '/business-units/engineering-consultation' },
  { title: 'Industry Collaboration',    icon: <User size={15} />,          path: '/business-units/industry-collaboration' },
]

const PRODUCTS = [
  { title: 'Decor Products',        desc: 'Innovative solutions',  icon: <Filter size={15} />,      path: '/products/decor' },
  { title: 'Software Products',     desc: 'Digital excellence',    icon: <LayoutGrid size={15} />,  path: '/products/software' },
  { title: 'Industrial Equipment',  desc: 'Heavy-duty hardware',   icon: <Zap size={15} />,         path: '/products/industrial' },
  { title: 'Courses',               desc: 'Professional training', icon: <BookOpen size={15} />,    path: '/products/courses' },
  { title: 'Medical Products',      desc: 'Precision engineering', icon: <Stethoscope size={15} />, path: '/products/medical' },
  { title: 'Projects & Modelling',  desc: 'Bespoke designs',       icon: <Brain size={15} />,       path: '/products/modelling' },
]

const ABOUT_LINKS = [
  { title: 'Company Overview',   icon: <FileText size={14} />,  path: '/about/overview' },
  { title: 'Press & Newsroom',   icon: <Newspaper size={14} />, path: '/about/press' },
  { title: 'Images & Videos',    icon: <Video size={14} />,     path: '/about/media' },
  { title: 'Blogs',              icon: <Wrench size={14} />,    path: '/about/blogs' },
  { title: 'Case Studies',       icon: <Wrench size={14} />,    path: '/about/case-studies' },
  { title: 'Tutorials & Ebooks', icon: <Layout size={14} />,    path: '/about/resources' },
  { title: 'Whitepapers',        icon: <FileText size={14} />,  path: '/about/whitepapers' },
  { title: 'Support',            icon: <Wrench size={14} />,    path: '/about/support' },
]

const WHAT_WE_DO_TABS = [
  {
    id: 'prod-eng', label: 'Product Engineering',
    bg: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1600',
    items: [
      { name: 'Software Engineering',   path: '/services/software-engineering' },
      { name: 'Hardware Engineering',   path: '/services/hardware-engineering' },
      { name: 'Mechanical Engineering', path: '/services/mechanical-engineering' },
      { name: 'Testing & QA',           path: '/services/testing-qa' },
    ]
  },
  {
    id: 'mfg', label: 'Manufacturing',
    bg: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600',
    items: [
      { name: 'PCB Assembly',      path: '/services/pcb-assembly' },
      { name: 'Product Assembly',  path: '/services/product-assembly' },
      { name: 'Rapid Prototyping', path: '/services/rapid-prototyping' },
      { name: 'FDM 3D Printing',   path: '/services/fdm-3d-printing' },
    ]
  },
  {
    id: 'cloud', label: 'Cloud & Applications',
    bg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600',
    items: [
      { name: 'Web Applications',      path: '/services/web-applications' },
      { name: 'Mobile Applications',   path: '/services/mobile-applications' },
      { name: 'Desktop Applications',  path: '/services/desktop-applications' },
      { name: 'IoT Applications',      path: '/services/iot-applications' },
      { name: 'Scaling & Maintenance', path: '/services/scaling-maintenance' },
    ]
  },
  {
    id: 'automation', label: 'Production Automation',
    bg: 'https://images.unsplash.com/photo-1518433278988-2b2f1f6c5fd5?auto=format&fit=crop&q=80&w=1600',
    items: [
      { name: 'Software Automation',           path: '/services/software-automation' },
      { name: 'Process Automation',            path: '/services/process-automation' },
      { name: 'Maintenance & Troubleshooting', path: '/services/maintenance-troubleshooting' },
    ]
  },
]

// ─── Shared glass style ───────────────────────────────────────────────────────

const glass: React.CSSProperties = {
  background: 'rgba(255,255,255,0.96)',
  backdropFilter: 'blur(32px) saturate(180%)',
  WebkitBackdropFilter: 'blur(32px) saturate(180%)',
  border: '1px solid rgba(0,0,0,0.08)',
}

// ─── Dropdown panels ──────────────────────────────────────────────────────────

const WhatWeDoMenu = ({ onClose }: { onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState(WHAT_WE_DO_TABS[0].id)
  const current = WHAT_WE_DO_TABS.find(t => t.id === activeTab)!

  return (
    <div className="flex overflow-hidden bg-white w-full h-full min-h-[380px]" style={{ borderRadius: 4 }}>
      {/* Sidebar */}
      <div className="w-56 flex flex-col justify-center gap-0.5 p-6 border-r border-black/[0.04] bg-slate-50/80">
        <p className="text-[9px] font-black tracking-[0.25em] text-slate-400 uppercase mb-4 px-2">Services</p>
        {WHAT_WE_DO_TABS.map(tab => (
          <button
            key={tab.id}
            onMouseEnter={() => setActiveTab(tab.id)}
            className={`text-left text-[11px] font-black py-3 px-4 rounded-sm transition-all duration-200 flex items-center justify-between group uppercase tracking-wider ${
              activeTab === tab.id
                ? 'text-white shadow-md'
                : 'text-slate-500 hover:text-slate-900 hover:bg-black/[0.03]'
            }`}
            style={{ backgroundColor: activeTab === tab.id ? ANK_NAVY : 'transparent' }}
          >
            {tab.label}
            <ChevronRight
              size={11}
              className={`transition-all duration-200 ${
                activeTab === tab.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-hover:opacity-30'
              }`}
            />
          </button>
        ))}
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
            {/* Image strip with fade */}
            <div className="relative w-48 flex-shrink-0 overflow-hidden hidden md:block">
              <img
                src={current.bg}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                style={{ opacity: 0.8 }}
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to right, transparent 40%, white 100%)' }}
              />
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col justify-center px-10 py-8 gap-0 bg-white">
              <p className="text-[9px] font-black tracking-[0.25em] text-slate-400 uppercase mb-6" style={{ color: ANK_CYAN }}>{current.label}</p>
              <div className="grid grid-cols-1 gap-1">
                {current.items.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03, duration: 0.2 }}
                  >
                    <Link
                      to={item.path}
                      onClick={onClose}
                      className="group flex items-center gap-3 py-2.5 text-[15px] font-black text-slate-600 hover:text-slate-900 transition-all duration-200 uppercase tracking-tight"
                    >
                      <span className="w-0 group-hover:w-4 h-0.5 transition-all duration-300" style={{ backgroundColor: ANK_NAVY }} />
                      {item.name}
                      <ArrowUpRight
                        size={13}
                        className="ml-auto opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5 translate-x-0.5"
                        style={{ color: ANK_NAVY }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

const BusinessUnitsMenu = ({ onClose }: { onClose: () => void }) => (
  <div className="p-10 bg-white w-full h-full" style={{ borderRadius: 4 }}>
    <p className="text-[9px] font-black tracking-[0.25em] text-slate-400 uppercase mb-8 px-2">Business Units</p>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {BUSINESS_UNITS.map((unit, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.03, duration: 0.2 }}
        >
          <Link
            to={unit.path}
            onClick={onClose}
            className={`group flex items-center gap-4 p-5 border transition-all duration-200 rounded-sm h-full ${
              unit.featured
                ? 'text-white shadow-lg'
                : 'bg-slate-50 border-black/[0.04] hover:bg-white hover:border-slate-300 text-slate-600 hover:text-slate-900'
            }`}
            style={{ 
              backgroundColor: unit.featured ? ANK_NAVY : undefined,
              borderColor: unit.featured ? ANK_NAVY : undefined 
            }}
          >
            <div className={`p-2 rounded-sm flex-shrink-0 transition-all duration-200 ${
              unit.featured
                ? 'bg-white/20 text-white'
                : 'bg-white shadow-sm group-hover:bg-slate-900 group-hover:text-white'
            }`}
            style={{ 
              color: !unit.featured ? ANK_NAVY : undefined,
              backgroundColor: !unit.featured ? '#fff' : undefined,
            }}
            >
              {unit.icon}
            </div>
            <span className="text-[11px] font-black uppercase leading-tight tracking-tight">
              {unit.title}
            </span>
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
)

const ProductsMenu = ({ onClose }: { onClose: () => void }) => (
  <div className="p-10 bg-white w-full h-full" style={{ borderRadius: 4 }}>
    <p className="text-[9px] font-black tracking-[0.25em] text-slate-400 uppercase mb-8 px-2">Products</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {PRODUCTS.map((prod, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.04, duration: 0.2 }}
        >
          <Link
            to={prod.path}
            onClick={onClose}
            className="flex items-center gap-5 p-5 rounded-sm border border-black/[0.04] bg-slate-50 hover:bg-white hover:border-slate-300 transition-all duration-200 group h-full"
          >
            <div className="p-3 rounded-sm bg-white shadow-sm transition-all group-hover:text-white group-hover:bg-slate-900"
                 style={{ color: ANK_CYAN }}>
              {prod.icon}
            </div>
            <div>
              <p className="text-[13px] font-black text-slate-600 group-hover:text-slate-900 transition-colors uppercase tracking-tight">{prod.title}</p>
              <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest mt-0.5">{prod.desc}</p>
            </div>
            <ArrowUpRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-all" style={{ color: ANK_NAVY }} />
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
)

const AboutMenu = ({ onClose }: { onClose: () => void }) => (
  <div className="p-10 bg-white w-full h-full" style={{ borderRadius: 4 }}>
    <p className="text-[9px] font-black tracking-[0.25em] text-slate-400 uppercase mb-8 px-4">About ANK</p>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {ABOUT_LINKS.map((link, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.02, duration: 0.18 }}
        >
          <Link
            to={link.path}
            onClick={onClose}
            className="flex items-center gap-3 px-4 py-4 rounded-sm hover:bg-slate-50 transition-all group border border-transparent hover:border-black/[0.04]"
          >
            <div className="transition-colors group-hover:text-slate-900" style={{ color: ANK_NAVY }}>{link.icon}</div>
            <span className="text-[11px] text-slate-600 group-hover:text-slate-900 transition-colors font-black uppercase tracking-widest">{link.title}</span>
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
)

// ─── Navbar ────────────────────────────────────────────────────────────────────

const Navbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [pillGeom, setPillGeom] = useState({ x: 0, w: 0 })
  const [navBarWidth, setNavBarWidth] = useState(0)
  const navRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const navBarRef = useRef<HTMLElement | null>(null)

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    setHoveredMenu(null)
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const openMenu = (name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setHoveredMenu(name)
    const el = navRefs.current[name]
    const bar = navBarRef.current
    if (el && bar) {
      const elRect = el.getBoundingClientRect()
      const barRect = bar.getBoundingClientRect()
      setPillGeom({ x: elRect.left - barRect.left, w: elRect.width })
      setNavBarWidth(barRect.width)
    }
  }

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setHoveredMenu(null), 140)
  }

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }

  const navItems = [
    { name: 'What we do',     component: <WhatWeDoMenu    onClose={() => setHoveredMenu(null)} /> },
    { name: 'Business units', component: <BusinessUnitsMenu onClose={() => setHoveredMenu(null)} /> },
    { name: 'Products',       component: <ProductsMenu    onClose={() => setHoveredMenu(null)} /> },
    { name: 'About ANK',      component: <AboutMenu       onClose={() => setHoveredMenu(null)} /> },
    { name: 'Careers',   path: '/careers' },
    { name: 'Contact',   path: '/contact' },
  ]

  return (
    <>
      {/* ── Desktop Floating Navbar ── */}
      <div className="fixed top-0 left-0 w-full z-[80] flex justify-center items-start pt-6 pointer-events-none px-6">
        <div className="relative">
          <motion.nav
            ref={navBarRef as any}
            initial={{ y: -30, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ ...glass, borderRadius: 4, pointerEvents: 'auto' }}
            className="flex items-center gap-0.5 px-3 py-2 relative shadow-2xl shadow-black/5"
            onMouseLeave={scheduleClose}
          >
            {/* Logo */}
            <Link to="/" className="flex items-center px-4 py-1 mr-2 flex-shrink-0 transition-transform hover:scale-105">
              <img src={logo} alt="ANK" className="h-[28px] w-auto" />
            </Link>

            {/* Sliding Highlight */}
            <AnimatePresence>
              {hoveredMenu && (
                <motion.div
                  layoutId="pill-highlight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, x: pillGeom.x - 8, width: pillGeom.w + 16 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 450, damping: 36 }}
                  style={{ position: 'absolute', top: 8, bottom: 8, left: 0, borderRadius: 2, background: 'rgba(0,0,0,0.05)', pointerEvents: 'none' }}
                />
              )}
            </AnimatePresence>

            {/* Nav links */}
            <div className="hidden lg:flex items-center">
              {navItems.map(item => (
                <div
                  key={item.name}
                  ref={el => navRefs.current[item.name] = el}
                  onMouseEnter={() => item.component ? openMenu(item.name) : setHoveredMenu(null)}
                >
                  {item.path ? (
                    <Link
                      to={item.path}
                      className="px-4 py-2 text-[11px] font-black uppercase tracking-[0.15em] transition-colors duration-150 block whitespace-nowrap"
                      style={{ color: location.pathname === item.path ? ANK_NAVY : '#64748b' }}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      className="px-4 py-2 text-[11px] font-black uppercase tracking-[0.15em] transition-colors duration-150 flex items-center gap-1 whitespace-nowrap"
                      style={{ color: hoveredMenu === item.name ? ANK_NAVY : '#64748b' }}
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
            <div className="hidden lg:block w-px h-5 bg-black/[0.06] mx-2" />
            <motion.button
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-sm transition-colors whitespace-nowrap shadow-xl"
              style={{ backgroundColor: ANK_NAVY, pointerEvents: 'auto' }}
            >
              Get a quote
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden ml-4 p-2 text-slate-400 hover:text-slate-900 transition-colors"
              onClick={() => setIsMobileMenuOpen(v => !v)}
              style={{ pointerEvents: 'auto' }}
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
                exit={{ opacity: 0, y: 10, scale: 0.995, transition: { duration: 0.14 } }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  ...glass,
                  position: 'absolute',
                  top: 'calc(100% + 12px)',
                  left: 0,
                  width: navBarWidth,
                  transformOrigin: 'top center',
                  borderRadius: 4,
                  zIndex: 90,
                  pointerEvents: 'auto',
                  boxShadow: '0 40px 80px -20px rgba(0,0,0,0.12)',
                }}
                onMouseEnter={cancelClose}
                onMouseLeave={scheduleClose}
              >
                {navItems.find(i => i.name === hoveredMenu)?.component}
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
            className="fixed inset-0 z-[100] lg:hidden overflow-y-auto"
            style={{ background: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(24px)' }}
          >
            <div className="p-6 flex justify-between items-center border-b border-black/[0.04] bg-white sticky top-0 z-10">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                <img src={logo} alt="ANK" className="h-6 w-auto" />
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-400">
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
                  transition={{ delay: i * 0.05, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-black/[0.04]"
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
                        onClick={() => setExpandedMobileItem(expandedMobileItem === item.name ? null : item.name)}
                        className="flex items-center justify-between w-full py-5 text-[18px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors"
                      >
                        {item.name}
                        <motion.span
                          animate={{ rotate: expandedMobileItem === item.name ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight size={17} className="text-slate-300" />
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {expandedMobileItem === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pb-5 pl-2 flex flex-col gap-0.5">
                              {item.name === 'What we do' && WHAT_WE_DO_TABS.map(tab => (
                                <div key={tab.id} className="mb-4">
                                  <p className="text-[9px] font-black tracking-[0.22em] text-slate-400 uppercase mb-2 mt-1">{tab.label}</p>
                                  {tab.items.map(sub => (
                                    <Link key={sub.path} to={sub.path}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="block py-2 text-[13px] text-slate-500 hover:text-slate-900 font-black uppercase tracking-wider pl-2 transition-colors"
                                    >{sub.name}</Link>
                                  ))}
                                </div>
                              ))}
                              {item.name === 'Business units' && BUSINESS_UNITS.map(u => (
                                <Link key={u.path} to={u.path} onClick={() => setIsMobileMenuOpen(false)}
                                  className="py-2 text-[13px] text-slate-500 hover:text-slate-900 font-black uppercase tracking-wider pl-2 block transition-colors">{u.title}</Link>
                              ))}
                              {item.name === 'Products' && PRODUCTS.map(p => (
                                <Link key={p.path} to={p.path} onClick={() => setIsMobileMenuOpen(false)}
                                  className="py-2 text-[13px] text-slate-500 hover:text-slate-900 font-black uppercase tracking-wider pl-2 block transition-colors">{p.title}</Link>
                              ))}
                              {item.name === 'About ANK' && ABOUT_LINKS.map(a => (
                                <Link key={a.path} to={a.path} onClick={() => setIsMobileMenuOpen(false)}
                                  className="py-2 text-[13px] text-slate-500 hover:text-slate-900 font-black uppercase tracking-wider pl-2 block transition-colors">{a.title}</Link>
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
                onClick={() => { navigate('/contact'); setIsMobileMenuOpen(false) }}
                className="mt-8 w-full text-white py-4 rounded-sm text-[13px] font-black uppercase tracking-[0.2em] shadow-xl transition-colors"
                style={{ backgroundColor: ANK_NAVY }}
              >
                Get a quote
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
