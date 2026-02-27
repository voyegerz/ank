import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
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
  X
} from 'lucide-react'

import logo from '../assets/images/logo.png'

// --- Data for Menus ---

const BUSINESS_UNITS = [
  { title: 'CAD Design Services', desc: 'Learn More', icon: <Star />, color: 'bg-indigo-600', textColor: 'text-white', path: '/business-units/cad-design' },
  { title: 'Software Development', desc: 'Browse all', icon: <FileCode />, color: 'bg-indigo-100', textColor: 'text-indigo-900', path: '/business-units/software-development' },
  { title: 'Manufacturing', desc: 'More resources', icon: <Settings2 />, color: 'bg-indigo-100', textColor: 'text-indigo-900', path: '/business-units/manufacturing' },
  { title: 'Embedded Systems & IoT', desc: 'Learn more', icon: <Zap />, color: 'bg-indigo-100', textColor: 'text-indigo-900', path: '/business-units/embedded-iot' },
  { title: 'Cloud Services & Scaling', desc: 'Learn more', icon: <Search />, color: 'bg-indigo-100', textColor: 'text-indigo-900', path: '/business-units/cloud-scaling' },
  { title: 'Education', desc: 'Learn more', icon: <GraduationCap />, color: 'bg-indigo-100', textColor: 'text-indigo-900', path: '/business-units/education' },
  { title: 'Engineering Consultation', desc: 'Learn more', icon: <Wrench />, color: 'bg-indigo-100', textColor: 'text-indigo-900', path: '/business-units/engineering-consultation' },
  { title: 'Industry Collaboration', desc: 'Learn more', icon: <User />, color: 'bg-indigo-100', textColor: 'text-indigo-900', path: '/business-units/industry-collaboration' },
]

const PRODUCTS = [
  { title: 'Decor Products', desc: 'Innovative solutions', icon: <Filter />, path: '/products/decor' },
  { title: 'Software Products', desc: 'Digital excellence', icon: <LayoutGrid />, path: '/products/software' },
  { title: 'Industrial Equipment', desc: 'Heavy-duty hardware', icon: <Zap />, path: '/products/industrial' },
  { title: 'Courses', desc: 'Professional training', icon: <BookOpen />, path: '/products/courses' },
  { title: 'Medical Products', desc: 'Precision engineering', icon: <Stethoscope />, path: '/products/medical' },
  { title: 'Projects & Modelling', desc: 'Bespoke designs', icon: <Brain />, path: '/products/modelling' },
]

const ABOUT_LINKS = [
  { title: 'Company Overview', icon: <FileText size={18} />, path: '/about/overview' },
  { title: 'Press & Newsroom', icon: <Newspaper size={18} />, path: '/about/press' },
  { title: 'Images & Videos', icon: <Video size={18} />, path: '/about/media' },
  { title: 'Blogs', icon: <Wrench size={18} />, path: '/about/blogs' },
  { title: 'Case Studies', icon: <Wrench size={18} />, path: '/about/case-studies' },
  { title: 'Tutorials & Ebooks', icon: <Layout size={18} />, path: '/about/resources' },
  { title: 'Whitepapers', icon: <FileText size={18} />, path: '/about/whitepapers' },
  { title: 'Support', icon: <Wrench size={18} />, path: '/about/support' },
]

const WHAT_WE_DO_TABS = [
  { 
    id: 'prod-eng', 
    label: 'Product Engineering',
    items: [
      { name: 'Software Engineering', path: '/services/software-engineering', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200' },
      { name: 'Hardware Engineering', path: '/services/hardware-engineering', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200' },
      { name: 'Mechanical Engineering', path: '/services/mechanical-engineering', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200' },
      { name: 'Testing & QA', path: '/services/testing-qa', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200' }
    ]
  },
  { 
    id: 'mfg', 
    label: 'Manufacturing',
    items: [
      { name: 'PCB Assembly', path: '/services/pcb-assembly', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200' },
      { name: 'Product Assembly', path: '/services/product-assembly', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200' },
      { name: 'Rapid Prototyping', path: '/services/rapid-prototyping', image: 'https://images.unsplash.com/photo-1631034300438-e4b85770337c?auto=format&fit=crop&q=80&w=1200' },
      { name: 'FDM 3D Printing', path: '/services/fdm-3d-printing', image: 'https://images.unsplash.com/photo-1631034300438-e4b85770337c?auto=format&fit=crop&q=80&w=1200' }
    ]
  },
  { 
    id: 'cloud', 
    label: 'Cloud & Applications',
    items: [
      { name: 'Web Applications', path: '/services/web-applications', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200' },
      { name: 'Mobile Applications', path: '/services/mobile-applications', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200' },
      { name: 'Desktop Applications', path: '/services/desktop-applications', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200' },
      { name: 'IoT Applications', path: '/services/iot-applications', image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=1200' },
      { name: 'Scaling & Maintenance', path: '/services/scaling-maintenance', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200' }
    ]
  },
  { 
    id: 'automation', 
    label: 'Production Automation',
    items: [
      { name: 'Software Automation', path: '/services/software-automation', image: 'https://images.unsplash.com/photo-1518433278988-2b2f1f6c5fd5?auto=format&fit=crop&q=80&w=1200' },
      { name: 'Process Automation', path: '/services/process-automation', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200' },
      { name: 'Maintenance & Troubleshooting', path: '/services/maintenance-troubleshooting', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200' }
    ]
  }
]

// --- Sub-Components ---

const BusinessUnitsMenu = ({ onClose }: { onClose: () => void }) => (
  <div className="p-8 w-[1100px] max-w-[95vw]">
    <h3 className="text-[10px] font-black text-slate-400 mb-8 uppercase tracking-[0.3em]">Business Units</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {BUSINESS_UNITS.map((unit, i) => (
        <Link 
          key={i} 
          to={unit.path}
          onClick={onClose}
          className={`p-6 rounded-[2rem] flex items-center gap-4 cursor-pointer transition-all duration-300 group ${
            unit.color === 'bg-indigo-600' 
              ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-200' 
              : 'bg-slate-50 text-slate-900 hover:bg-indigo-600 hover:text-white hover:shadow-xl hover:shadow-indigo-100'
          }`}
        >
          <div className={`p-3 rounded-xl transition-all duration-300 ${
            unit.color === 'bg-indigo-600' 
              ? 'bg-white/20 text-white' 
              : 'bg-white text-indigo-600 shadow-sm group-hover:bg-white/20 group-hover:text-white group-hover:scale-110'
          }`}>
            {React.cloneElement(unit.icon as React.ReactElement<any>, { size: 24 })}
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-tight">{unit.title}</h4>
            <p className={`text-[10px] font-black uppercase tracking-widest flex items-center gap-1 transition-colors ${
              unit.color === 'bg-indigo-600' ? 'text-indigo-100' : 'text-slate-400 group-hover:text-indigo-100'
            }`}>
              {unit.desc} <ChevronRight size={10} />
            </p>
          </div>
        </Link>
      ))}
    </div>
  </div>
)

const ProductsMenu = ({ onClose }: { onClose: () => void }) => (
  <div className="p-8 w-[800px] max-w-[90vw]">
    <h3 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-wider">Products</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
      {PRODUCTS.map((prod, i) => (
        <Link key={i} to={prod.path} onClick={onClose} className="flex items-center gap-4 group cursor-pointer">
          <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-indigo-50 transition-colors">
            <div className="text-indigo-600">{prod.icon}</div>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors flex items-center gap-2">
              {prod.title} <ChevronRight size={14} />
            </h4>
            <p className="text-sm text-slate-500">{prod.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
)

const AboutMenu = ({ onClose }: { onClose: () => void }) => (
  <div className="p-6 w-[350px]">
    <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider px-4">About ANK</h3>
    <div className="space-y-1">
      {ABOUT_LINKS.map((link, i) => (
        <Link 
          key={i} 
          to={link.path}
          onClick={onClose}
          className={`flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition-all hover:bg-slate-50 hover:text-slate-900 text-slate-500`}
        >
          <div className={'text-slate-300'}>
            {link.icon}
          </div>
          <span className="font-medium text-sm">{link.title}</span>
        </Link>
      ))}
    </div>
  </div>
)

const WhatWeDoMenu = ({ onClose }: { onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState('prod-eng')
  const [hoveredImage, setHoveredImage] = useState<string | null>(null)

  const currentItems = WHAT_WE_DO_TABS.find(t => t.id === activeTab)?.items || []

  return (
    <div className="flex w-[1200px] max-w-[98vw] min-h-[500px] bg-slate-50 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white">
      {/* Left Sidebar */}
      <div 
        className="w-[350px] p-12 bg-indigo-50/50 flex flex-col justify-center z-10"
        onMouseEnter={() => setHoveredImage(null)}
      >
        <div className="space-y-8">
          {WHAT_WE_DO_TABS.map((tab) => (
            <div 
              key={tab.id}
              onMouseEnter={() => {
                setActiveTab(tab.id)
                setHoveredImage(null)
              }}
              className={`flex justify-between items-center cursor-pointer transition-all ${
                activeTab === tab.id ? 'text-indigo-600 font-black' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <span className="text-lg uppercase tracking-tight">{tab.label}</span>
              {activeTab === tab.id && <ChevronRight size={24} />}
            </div>
          ))}
        </div>
      </div>

      {/* Middle Content - Interactive Background */}
      <div 
        className="flex-1 p-16 bg-white flex flex-col justify-center relative overflow-hidden transition-colors duration-700"
        onMouseEnter={() => !hoveredImage && setHoveredImage(currentItems[0]?.image)}
        onMouseLeave={() => setHoveredImage(null)}
      >
        {/* Background Image Layer with Swirling/Wave Effect */}
        <AnimatePresence mode="popLayout">
          {hoveredImage && (
            <motion.div
              key={hoveredImage}
              initial={{ opacity: 0, scale: 1.15, rotate: 2, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, rotate: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.9, rotate: -2, filter: 'blur(10px)' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 z-0"
            >
              <img 
                src={hoveredImage} 
                className="w-full h-full object-cover" 
                alt="Background" 
              />
              <div className="absolute inset-0 bg-indigo-900/80 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-950 via-indigo-950/40 to-transparent"></div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 gap-8 relative z-10">
          {currentItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              onClick={onClose}
              onMouseEnter={() => setHoveredImage(item.image)}
              className={`cursor-pointer transition-all duration-500 text-xl font-bold flex items-center gap-3 group ${
                hoveredImage ? 'text-white/80 hover:text-white' : 'text-slate-500 hover:text-indigo-600'
              }`}
            >
              <motion.div 
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  hoveredImage === item.image ? 'bg-white scale-150 shadow-[0_0_10px_white]' : 'bg-indigo-600 opacity-0 group-hover:opacity-100'
                }`}
              ></motion.div>
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div 
        className="w-[300px] p-12 bg-slate-50 border-l border-slate-100 hidden xl:flex flex-col justify-center z-10"
        onMouseEnter={() => setHoveredImage(null)}
      >
        <h4 className="text-xs font-black text-slate-400 mb-10 uppercase tracking-[0.2em]">Latest Updates</h4>
        <div className="space-y-10">
          <div className="flex flex-col gap-4">
             <div className="w-20 h-20 rounded-[2rem] bg-white shadow-xl shadow-indigo-500/5 flex items-center justify-center text-indigo-600 mb-2">
                <Search size={40} />
             </div>
             <h5 className="font-black text-indigo-600 flex items-center gap-1 text-base">
                Advanced Analytics <ChevronRight size={18} />
             </h5>
             <p className="text-xs text-slate-400 leading-relaxed font-medium">
                Unlocking deep insights from your industrial data streams.
             </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const Navbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null)
  const navigate = useNavigate()

  const navItems = [
    { name: 'What we do', component: <WhatWeDoMenu onClose={() => setHoveredMenu(null)} /> },
    { name: 'Business units', component: <BusinessUnitsMenu onClose={() => setHoveredMenu(null)} /> },
    { name: 'Products', component: <ProductsMenu onClose={() => setHoveredMenu(null)} /> },
    { name: 'About ANK', component: <AboutMenu onClose={() => setHoveredMenu(null)} /> },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact us', path: '/contact' },
  ]

  return (
    <>
      <nav 
        className="fixed top-0 left-0 w-full z-[80] transition-all duration-300 bg-white/80 backdrop-blur-xl border-b border-slate-100"
        onMouseLeave={() => setHoveredMenu(null)}
      >
        <div className="container mx-auto px-6 h-20 flex justify-between items-center relative">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="ANK Logo" className="h-10 md:h-12 w-auto object-contain" />
          </Link>

          {/* Center Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <div 
                key={item.name}
                className="py-7 px-4 cursor-pointer"
                onMouseEnter={() => item.component && setHoveredMenu(item.name)}
              >
                {item.path ? (
                  <Link to={item.path} className="text-sm font-bold text-slate-700 hover:text-indigo-600 transition-colors">
                    {item.name}
                  </Link>
                ) : (
                  <button className={`text-sm font-bold transition-colors flex items-center gap-1 ${hoveredMenu === item.name ? 'text-indigo-600' : 'text-slate-700 hover:text-indigo-600'}`}>
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/contact')}
              className="hidden sm:block bg-indigo-600 text-white px-8 py-2.5 rounded-full text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
            >
              Get a Quote
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 text-slate-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Desktop Dropdown */}
          <AnimatePresence>
            {hoveredMenu && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-full left-1/2 -translate-x-1/2 z-[90] pt-2 hidden lg:block"
                onMouseEnter={() => setHoveredMenu(hoveredMenu)}
              >
                <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden">
                  {navItems.find(i => i.name === hoveredMenu)?.component}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-white z-[100] lg:hidden overflow-y-auto border-t border-slate-50 shadow-2xl"
          >
            <div className="p-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-slate-50 pb-4">
                  {item.path ? (
                    <Link 
                      to={item.path} 
                      className="text-xl font-bold text-slate-900 block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <div>
                      <button 
                        onClick={() => setExpandedMobileItem(expandedMobileItem === item.name ? null : item.name)}
                        className="text-xl font-bold text-slate-900 w-full flex justify-between items-center"
                      >
                        {item.name}
                        <motion.div
                          animate={{ rotate: expandedMobileItem === item.name ? 90 : 0 }}
                        >
                          <ChevronRight size={24} />
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {expandedMobileItem === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 pl-4 flex flex-col gap-3">
                              {item.name === 'What we do' && WHAT_WE_DO_TABS.map(tab => (
                                <div key={tab.id} className="mb-4">
                                  <h5 className="text-xs font-black text-indigo-600 uppercase tracking-widest mb-2">{tab.label}</h5>
                                  <div className="flex flex-col gap-2">
                                    {tab.items.map(subItem => (
                                      <Link 
                                        key={subItem.path} 
                                        to={subItem.path}
                                        className="text-slate-600 font-medium"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                      >
                                        {subItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                              
                              {item.name === 'Business units' && BUSINESS_UNITS.map(unit => (
                                <Link 
                                  key={unit.path} 
                                  to={unit.path}
                                  className="text-slate-600 font-medium"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {unit.title}
                                </Link>
                              ))}

                              {item.name === 'Products' && PRODUCTS.map(prod => (
                                <Link 
                                  key={prod.path} 
                                  to={prod.path}
                                  className="text-slate-600 font-medium"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {prod.title}
                                </Link>
                              ))}

                              {item.name === 'About ANK' && ABOUT_LINKS.map(link => (
                                <Link 
                                  key={link.path} 
                                  to={link.path}
                                  className="text-slate-600 font-medium"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {link.title}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              ))}
              
              <button 
                onClick={() => {
                  navigate('/contact')
                  setIsMobileMenuOpen(false)
                }}
                className="mt-4 bg-indigo-600 text-white w-full py-4 rounded-xl text-lg font-bold shadow-xl shadow-indigo-100"
              >
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
