import { motion } from 'framer-motion'
import PageLayout from '../components/PageLayout'
import { 
  Globe, 
  Database, 
  Smartphone, 
  Cloud, 
  Settings, 
  Layers, 
  ArrowRight, 
  ShieldCheck, 
  Search, 
  ChevronRight,
  CheckCircle2,
  Code2,
  Server,
  Zap,
  Layout
} from 'lucide-react'
import { Link } from 'react-router-dom'
import softwareBg from '../assets/images/Software_dev_page_bg.png'

const SoftwareServices = () => {
  return (
    <PageLayout>
      {/* Title Hero Section */}
      <section className="relative pt-48 pb-32 bg-slate-900 overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={softwareBg} 
            alt="Software Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="relative mb-12">
              <span className="absolute -top-16 left-0 text-[6rem] md:text-[10rem] font-black text-white/5 uppercase select-none pointer-events-none tracking-normal leading-none hidden lg:block">
                Software
              </span>
              <span className="text-sm font-black text-sky-500 uppercase tracking-[0.4em] mb-4 block relative z-10">Scalable & Secure</span>
              <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-normal uppercase relative z-10">
                Development <span className="text-sky-500">Services</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl font-medium leading-relaxed mb-12">
              Rapid Software Development with Web and Mobile Apps, Cloud Solutions, & Custom Software delivered with performance and scalability.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="bg-sky-500 text-white px-10 py-5 rounded-xl font-black text-lg uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-all flex items-center gap-3 shadow-2xl">
                Get a Quote <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values / Checklist Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
            <div className="lg:w-1/2">
              <span className="text-[10px] font-black text-sky-500 tracking-[0.5em] uppercase mb-6 block">OUR APPROACH</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-normal mb-10 uppercase leading-[1.1]">
                Engineering the <span className="text-sky-500">digital</span> evolution
              </h2>
              
              <div className="space-y-6 mb-12">
                <CheckItem text="Custom-built software solutions tailored to your needs" />
                <CheckItem text="Scalable cloud architectures and API integrations" />
                <CheckItem text="Meticulous UI/UX design for superior user experience" />
                <CheckItem text="Ongoing maintenance and 24/7 technical support" />
              </div>

              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 text-xs font-black text-sky-500 uppercase tracking-widest hover:gap-4 transition-all"
              >
                Learn about our process <ChevronRight size={16} />
              </Link>
            </div>
            
            <div className="lg:w-1/2 relative">
               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl aspect-square"
               >
                  <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Software Development" />
               </motion.div>
               <div className="absolute -top-10 -left-10 w-64 h-64 bg-slate-100 -z-10 rounded-[3rem] hidden lg:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities Grid */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[10px] font-black text-sky-500 tracking-[0.5em] uppercase mb-4">Key Capabilities</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-normal leading-[1.1] uppercase">
              Our Software <span className="text-sky-500">Expertise</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             <CapabilityCard title="Web Apps" desc="Full-stack web applications built with modern frameworks and scalable backends." icon={<Globe />} />
             <CapabilityCard title="Mobile Apps" desc="Native and cross-platform mobile solutions for Android and iOS devices." icon={<Smartphone />} />
             <CapabilityCard title="Cloud & SaaS" desc="Scalable cloud infrastructure and Software-as-a-Service platform development." icon={<Cloud />} />
             <CapabilityCard title="Enterprise" desc="Custom enterprise-grade software to streamline complex business processes." icon={<Database />} />
             <CapabilityCard title="UI/UX Design" desc="User-centered design focusing on usability, accessibility, and visual impact." icon={<Layout />} />
             <CapabilityCard title="API & Systems" desc="Secure API development and seamless integration with third-party systems." icon={<Server />} />
             <CapabilityCard title="Testing & QA" desc="Rigorous quality assurance and automated testing for bug-free releases." icon={<ShieldCheck />} />
             <CapabilityCard title="Maintenance" desc="Reliable application support, updates, and performance optimization." icon={<Settings />} />
          </div>
        </div>
      </section>

      {/* Job Done Section */}
      <section className="py-0 overflow-hidden bg-white">
        <div className="flex flex-col lg:flex-row-reverse">
          <div className="lg:w-1/2 aspect-video lg:aspect-auto">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Team Work" />
          </div>
          <div className="lg:w-1/2 p-12 md:p-24 bg-slate-900 text-white flex flex-col justify-center">
            <span className="text-[10px] font-black text-sky-500 tracking-[0.5em] uppercase mb-6">WHY ANK?</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-normal mb-8 uppercase leading-[1.1]">
              Delivering <span className="text-sky-500">performance</span> at scale
            </h2>
            <p className="text-lg text-slate-400 font-medium leading-relaxed mb-10 max-w-lg">
              ANK contributes cutting-edge software solutions to the world, helping organizations address challenges related to scalability and performance.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-4 bg-sky-500 text-white px-8 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-all w-fit"
            >
              Start Developing <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex gap-4 items-start">
    <CheckCircle2 size={24} className="text-sky-500 shrink-0 mt-0.5" />
    <p className="text-lg text-slate-600 font-medium">{text}</p>
  </div>
)

const CapabilityCard = ({ title, desc, icon }: { title: string, desc: string, icon: any }) => (
  <div className="p-10 bg-white rounded-2xl border border-slate-100 hover:shadow-2xl transition-all group text-center flex flex-col items-center">
    <div className="w-14 h-14 rounded-xl bg-slate-50 text-sky-500 flex items-center justify-center mb-8 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
      {icon}
    </div>
    <h4 className="text-xl font-black text-slate-900 mb-4 tracking-normal uppercase group-hover:text-sky-500 transition-colors">{title}</h4>
    <p className="text-sm text-slate-500 leading-relaxed font-medium mb-8 line-clamp-2">{desc}</p>
    <button className="text-[10px] font-black text-sky-500 uppercase tracking-widest flex items-center gap-1 group-hover:gap-3 transition-all">
      Read More <ChevronRight size={14} />
    </button>
  </div>
)

export default SoftwareServices
