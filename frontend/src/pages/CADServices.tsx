import PageLayout from '../components/PageLayout'
import { motion } from 'framer-motion'
import { CheckCircle2, Box, PencilRuler, FileText, Settings, ArrowRight, Layers, Cpu, Star } from 'lucide-react'
import cadBg from '../assets/images/cad_page_bg.png'

const CADServices = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-slate-950 pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={cadBg} 
            alt="CAD Background" 
            className="w-full h-full object-cover opacity-50 scale-105"
          />
          <div className="absolute inset-0 bg-indigo-950/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/40 to-slate-950"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/40 text-[8px] font-black uppercase tracking-[0.6em] mb-10">
              ANK DESIGN AND AUTOMATION SOLUTIONS LLP. PROVIDING,
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tighter mb-8 uppercase">
              Accelerate Product Development with <span className="text-indigo-500">CAD Design, Engineering, 3D Modelling & Drafting Services</span>
            </h1>
            
            <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto leading-relaxed font-medium mb-12">
              Expert CAD Drafting Services tailored to your requirements - 2D and 3D drafting, modelling, and technical drawings, ensuring precision and efficiency in designs.
            </p>
            
            <div className="flex justify-center">
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all flex items-center gap-2 shadow-2xl">
                Get a Quote <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="lg:w-1/2">
              <h2 className="text-[10px] font-black text-indigo-600 tracking-[0.5em] uppercase mb-4">Overview</h2>
              <h3 className="text-4xl font-black text-slate-900 tracking-tighter mb-8 uppercase leading-tight">
                ANK Pushes the global boundaries of design engineering further & further to the future
              </h3>
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-6">
                Our team brings strong expertise in mechanical and product design engineering. The team's capabilities span from concept development, design simulation, and detailed CAD modelling to validation and manufacturing-ready documentation, along with design for additive manufacturing.
              </p>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                Our design engineering skill set covers 2D drafting, 3D modelling, reverse engineering, GD&T, complex surface modelling, model checking, and support for all major 3D printing technologies including FDM, SLA, SLS, DMLS, SLM, MJF, Binder Jetting, and other additive manufacturing processes.
              </p>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
               <div className="bg-slate-100 aspect-square rounded-[3rem] overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Eng" />
               </div>
               <div className="bg-slate-100 aspect-square rounded-[3rem] overflow-hidden mt-12">
                  <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Eng" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6 text-center mb-20">
          <h2 className="text-[10px] font-black text-indigo-600 tracking-[0.5em] uppercase mb-4">Key Capabilities</h2>
          <h3 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">Our Technical Expertise</h3>
        </div>
        
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           <CapabilityCard title="CAD Design Services" desc="CAD drafting, CAD Design for parts mechanical designs & manufacturing." icon={<Layers />} />
           <CapabilityCard title="3D Modelling, Printing" desc="3D Modelling Services for 3D CAD Design, Tool Parts, Prototypes, & 3D Printing." icon={<Box />} />
           <CapabilityCard title="Invention Design" desc="Design Help with new invention ideas, invention prototypes & inventor design." icon={<Star />} />
           <CapabilityCard title="3D Rendering" desc="HDR Rendering 3D Visualization, Furniture Rendering & 3D Product Rendering." icon={<Layers />} />
           <CapabilityCard title="Product Design" desc="Product Design for Concepts, Industrial Design & Medical Devices" icon={<Settings />} />
           <CapabilityCard title="Engineering Design" desc="Mechanical Engineering & Design, FEA, Electronics, & PCB Programming." icon={<Cpu />} />
           <CapabilityCard title="Consumer Products" desc="Electronic Devices, Furniture Design, Pet Product Development & Toy Prototypes." icon={<Box />} />
           <CapabilityCard title="Manufacturing Design" desc="DFM Design, 3D Printing, 3D Modelling, and Prototype mold Design." icon={<PencilRuler />} />
        </div>
      </section>
    </PageLayout>
  )
}

const CapabilityCard = ({ title, desc, icon }: { title: string, desc: string, icon: any }) => (
  <div className="p-10 bg-white rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all group text-center">
    <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
      {icon}
    </div>
    <h4 className="text-lg font-black text-slate-900 mb-4 tracking-tight uppercase group-hover:text-indigo-600 transition-colors">{title}</h4>
    <p className="text-xs text-slate-500 leading-relaxed font-medium mb-6">{desc}</p>
    <div className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em] flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
      Learn More <ChevronRight size={12} />
    </div>
  </div>
)

export default CADServices
