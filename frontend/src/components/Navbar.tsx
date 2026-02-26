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
  Wrench
} from 'lucide-react'

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
      { name: 'Software Engineering', path: '/services/software-engineering' },
      { name: 'Hardware Engineering', path: '/services/hardware-engineering' },
      { name: 'Mechanical Engineering', path: '/services/mechanical-engineering' },
      { name: 'Testing & QA', path: '/services/testing-qa' }
    ]
  },
  { 
    id: 'mfg', 
    label: 'Manufacturing',
    items: [
      { name: 'PCB Assembly', path: '/services/pcb-assembly' },
      { name: 'Product Assembly', path: '/services/product-assembly' },
      { name: 'Rapid Prototyping', path: '/services/rapid-prototyping' },
      { name: 'FDM 3D Printing', path: '/services/fdm-3d-printing' }
    ]
  },
  { 
    id: 'cloud', 
    label: 'Cloud & Applications',
    items: [
      { name: 'Web Applications', path: '/services/web-applications' },
      { name: 'Mobile Applications', path: '/services/mobile-applications' },
      { name: 'Desktop Applications', path: '/services/desktop-applications' },
      { name: 'IoT Applications', path: '/services/iot-applications' },
      { name: 'Scaling & Maintenance', path: '/services/scaling-maintenance' }
    ]
  },
  { 
    id: 'automation', 
    label: 'Production Automation',
    items: [
      { name: 'Software Automation', path: '/services/software-automation' },
      { name: 'Process Automation', path: '/services/process-automation' },
      { name: 'Maintenance & Troubleshooting', path: '/services/maintenance-troubleshooting' }
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
          className={`p-6 rounded-2xl flex items-center gap-4 cursor-pointer transition-all hover:shadow-lg ${unit.color || 'bg-slate-50'}`}
        >
          <div className={`p-3 rounded-xl ${unit.color === 'bg-indigo-600' ? 'bg-white/20 text-white' : 'bg-white text-indigo-600 shadow-sm'}`}>
            {unit.icon}
          </div>
          <div>
            <h4 className={`font-bold ${unit.textColor || 'text-slate-900'}`}>{unit.title}</h4>
            <p className={`text-xs flex items-center gap-1 ${unit.textColor || 'text-slate-500'}`}>
              {unit.desc} <ChevronRight size={12} />
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

  return (
    <div className="flex w-[1200px] max-w-[98vw] min-h-[500px] bg-slate-50 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white">
      <div className="w-[350px] p-12 bg-indigo-50/50 flex flex-col justify-center">
        <div className="space-y-8">
          {WHAT_WE_DO_TABS.map((tab) => (
            <div 
              key={tab.id}
              onMouseEnter={() => setActiveTab(tab.id)}
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

      <div className="flex-1 p-16 bg-white flex flex-col justify-center">
        <div className="grid grid-cols-1 gap-8">
          {WHAT_WE_DO_TABS.find(t => t.id === activeTab)?.items.map((item, i) => (
            <Link 
              key={i} 
              to={item.path}
              onClick={onClose}
              className="text-slate-500 hover:text-indigo-600 cursor-pointer transition-colors text-xl font-bold flex items-center gap-3 group"
            >
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="w-1.5 h-1.5 rounded-full bg-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"
              ></motion.div>
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="w-[300px] p-12 bg-slate-50 border-l border-slate-100 hidden xl:flex flex-col justify-center">
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
    <nav 
      className="fixed top-0 left-0 w-full z-[80] transition-all duration-300 bg-white/80 backdrop-blur-xl border-b border-slate-100"
      onMouseLeave={() => setHoveredMenu(null)}
    >
      <div className="container mx-auto px-6 h-20 flex justify-between items-center relative">
        <Link to="/" className="text-2xl font-black tracking-tighter text-slate-900">
          ANK<span className="text-indigo-600">.</span>
        </Link>

        <div className="hidden md:flex items-center space-x-2">
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
             className="bg-indigo-600 text-white px-8 py-2.5 rounded-full text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
           >
            Get a Quote
          </button>
        </div>

        <AnimatePresence>
          {hoveredMenu && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-1/2 -translate-x-1/2 z-[90] pt-2"
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
  )
}

export default Navbar
