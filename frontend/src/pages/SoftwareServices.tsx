import PageLayout from '../components/PageLayout'
import { motion } from 'framer-motion'
import { Code2, Globe, Database, Smartphone, Zap, Cpu, Cloud, Settings, Layers, ArrowRight, ShieldCheck, Search } from 'lucide-react'
import softwareBg from '../assets/images/Software_dev_page_bg.png'

const SoftwareServices = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-slate-950 pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={softwareBg} 
            alt="Software Background" 
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
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/40 text-[8px] font-black uppercase tracking-[0.6em] mb-10">
              ANK DESIGN AND AUTOMATION SOLUTIONS LLP. PROVIDING,
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tighter mb-8 uppercase">
              Rapid Software Development with <span className="text-indigo-500">Web and Mobile Apps, Cloud Solutions, & Custom Software</span>
            </h1>
            
            <p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium mb-12">
              Custom-built software solutions including web apps, mobile apps, cloud platforms, and enterprise applications delivering performance, scalability, and security.
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
          <div className="flex flex-col lg:flex-row-reverse gap-20 items-start">
            <div className="lg:w-1/2">
              <h2 className="text-[10px] font-black text-indigo-600 tracking-[0.5em] uppercase mb-4">Overview</h2>
              <h3 className="text-4xl font-black text-slate-900 tracking-tighter mb-8 uppercase leading-tight">
                ANK Contributes cutting-edge software solutions to the world
              </h3>
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-6">
                ANK's software development team brings strong expertise in building custom, scalable, and secure software solutions. Our capabilities span from requirement analysis and solution architecture to development, testing, deployment, and ongoing support.
              </p>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                Our development skill set covers web applications, mobile applications, cloud-based platforms, enterprise software, APIs, and system integrations. With deep knowledge of modern development frameworks, databases, cloud infrastructure, and security practices, our team helps organizations address challenges related to scalability, performance, and time-to-market.
              </p>
            </div>
            <div className="lg:w-1/2 bg-slate-100 rounded-[3rem] overflow-hidden aspect-square relative shadow-2xl">
               <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Software" />
               <div className="absolute inset-0 bg-indigo-600/10 mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6 text-center mb-20">
          <h2 className="text-[10px] font-black text-indigo-600 tracking-[0.5em] uppercase mb-4">Key Capabilities</h2>
          <h3 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">Our Software Expertise</h3>
        </div>
        
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           <SoftwareCapabilityCard title="Web Application Development" desc="CAD drafting, CAD Design for parts mechanical designs & manufacturing." icon={<Globe />} />
           <SoftwareCapabilityCard title="Mobile Application Development" desc="3D Modelling Services for 3D CAD Design, Tool Parts, Prototypes, & 3D Printing." icon={<Smartphone />} />
           <SoftwareCapabilityCard title="Enterprise Application Development" desc="Design Help with new invention ideas, invention prototypes & inventor design." icon={<Database />} />
           <SoftwareCapabilityCard title="3D Rendering" desc="HDR Rendering 3D Visualization, Furniture Rendering & 3D Product Rendering." icon={<Search />} />
           <SoftwareCapabilityCard title="Cloud & SaaS Development" desc="Product Design for Concepts, Industrial Design & Medical Devices" icon={<Cloud />} />
           <SoftwareCapabilityCard title="UI/UX Design & Development" desc="Mechanical Engineering & Design, FEA, Electronics, & PCB Programming." icon={<Layers />} />
           <SoftwareCapabilityCard title="Software Testing & QA" desc="Electronic Devices, Furniture Design, Pet Product Development & Toy Prototypes." icon={<ShieldCheck />} />
           <SoftwareCapabilityCard title="Application Maintenance & Support" desc="DFM Design, 3D Printing, 3D Modelling, and Prototype mold Design." icon={<Settings />} />
        </div>
      </section>
    </PageLayout>
  )
}

const SoftwareCapabilityCard = ({ title, desc, icon }: { title: string, desc: string, icon: any }) => (
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

export default SoftwareServices
