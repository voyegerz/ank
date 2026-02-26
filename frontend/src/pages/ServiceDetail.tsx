import { useParams, Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import { motion } from 'framer-motion'
import { 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  Layers, 
  Globe, 
  Smartphone, 
  Settings, 
  Box, 
  Zap, 
  Search,
  Database,
  ShieldCheck,
  Code
} from 'lucide-react'

interface ServiceData {
  title: string
  subtitle: string
  description: string
  icon: any
  image: string
  features: string[]
  process: { title: string; desc: string }[]
}

const SERVICES_CONTENT: Record<string, ServiceData> = {
  'conceptual-design': {
    title: 'Conceptual Design',
    subtitle: 'Turning abstract ideas into technical reality',
    description: 'Our conceptual design phase focuses on feasibility, industrial aesthetics, and core functionality. We help you define the soul of your product before a single line of code is written or a part is manufactured.',
    icon: <Search size={48} />,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    features: ['Aesthetic and ergonomic design', 'Functional requirement analysis', 'Initial 3D sketches and mockups', 'Market viability assessment'],
    process: [
      { title: 'Brainstorming', desc: 'Collaborative ideation sessions to explore all possibilities.' },
      { title: 'Sketched Concepts', desc: 'Visualizing ideas through high-fidelity digital sketches.' },
      { title: 'Preliminary Review', desc: 'Alignment with client vision and industrial standards.' }
    ]
  },
  'web-app-dev': {
    title: 'Web Application Development',
    subtitle: 'Scalable, high-performance web platforms',
    description: 'We build enterprise-grade web applications that are responsive, secure, and built with modern tech stacks like React, Node.js, and TypeScript. Our focus is on seamless user experience and robust architecture.',
    icon: <Globe size={48} />,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    features: ['Modern React/Next.js Architecture', 'Cloud-Native Deployments', 'Real-time Data Integration', 'SEO & Performance Optimized'],
    process: [
      { title: 'Architecture Planning', desc: 'Designing scalable system diagrams and database schemas.' },
      { title: 'Agile Development', desc: 'Iterative coding with constant feedback loops.' },
      { title: 'Deployment', desc: 'Automated CI/CD pipelines to AWS or Azure.' }
    ]
  },
  'mobile-app-dev': {
    title: 'Mobile Application Services',
    subtitle: 'Native and Cross-Platform Excellence',
    description: 'Developing high-end mobile experiences for iOS and Android. Whether it is a specialized industrial tool or a consumer-facing app, we ensure native performance and pixel-perfect design.',
    icon: <Smartphone size={48} />,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
    features: ['React Native & Flutter Expertise', 'Offline-First Capabilities', 'Hardware Integration (NFC/Bluetooth)', 'Biometric Security'],
    process: [
      { title: 'UX Design', desc: 'Mobile-first user flows and wireframing.' },
      { title: 'Development', desc: 'Hybrid or Native coding based on requirements.' },
      { title: 'App Store Launch', desc: 'Full support for Google Play and App Store submission.' }
    ]
  },
    '3d-printing': {
      title: 'FDM 3D Printing',
      subtitle: 'Rapid Prototyping and Production',
      description: 'High-quality FDM 3D printing for rapid prototyping and low-volume production. We use advanced materials to ensure your parts meet industrial stress requirements.',
      icon: <Box size={48} />,
      image: 'https://images.unsplash.com/photo-1631034300438-e4b85770337c?auto=format&fit=crop&q=80&w=800',
      features: ['High-Strength Filaments', 'Large Scale Printing Capabilities', 'Meticulous Post-Processing', 'Precision Accuracy Checks'],
      process: [
        { title: 'STL Preparation', desc: 'Optimizing 3D models for the printing process.' },
        { title: 'Printing', desc: 'State-of-the-art FDM technology execution.' },
        { title: 'Quality Check', desc: 'Manual inspection and dimensional verification.' }
      ]
    },
    'feasibility-study': {
      title: 'Feasibility Study',
      subtitle: 'Validating concepts before investment',
      description: 'Our feasibility studies assess the technical, financial, and operational viability of your product ideas, ensuring a solid foundation for development.',
      icon: <ShieldCheck size={48} />,
      image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=800',
      features: ['Technical risk assessment', 'Cost-benefit analysis', 'Manufacturing constraint review', 'Regulatory compliance check'],
      process: [
        { title: 'Data Gathering', desc: 'Collecting all project requirements and constraints.' },
        { title: 'Analysis', desc: 'Deep dive into technical and economic factors.' },
        { title: 'Reporting', desc: 'Detailed viability report with clear recommendations.' }
      ]
    },
    'prototyping': {
      title: 'Prototyping',
      subtitle: 'Bringing ideas to life in physical form',
      description: 'We create high-fidelity prototypes that allow you to test form, fit, and function before moving to mass production.',
      icon: <Layers size={48} />,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
      features: ['Functional prototypes', 'Visual appearance models', 'Rapid iteration cycles', 'Material testing'],
      process: [
        { title: 'Design Finalization', desc: 'Preparing the design for prototype creation.' },
        { title: 'Fabrication', desc: 'Using 3D printing, CNC, or manual methods.' },
        { title: 'Testing', desc: 'Iterative testing and refinement.' }
      ]
    },
    'pcb-assembly': {
      title: 'PCB Assembly',
      subtitle: 'High-precision electronic manufacturing',
      description: 'Expert PCB assembly services for industrial electronics, focusing on reliability, signal integrity, and high-quality soldering.',
      icon: <Cpu size={48} />,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
      features: ['SMT and Through-hole assembly', 'Multi-layer board support', 'Rigid and flexible PCBs', 'Automated optical inspection (AOI)'],
      process: [
        { title: 'Sourcing', desc: 'Procuring high-quality electronic components.' },
        { title: 'Assembly', desc: 'Precision placement and soldering of components.' },
        { title: 'Testing', desc: 'Rigorous functional testing of the assembled boards.' }
      ]
    },
    'product-assembly': {
      title: 'Product Assembly',
      subtitle: 'End-to-end manufacturing solutions',
      description: 'Comprehensive product assembly services that transform components into finished, market-ready goods.',
      icon: <Settings size={48} />,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
      features: ['Full system integration', 'Quality control checkpoints', 'Packaging and labeling', 'Scalable production lines'],
      process: [
        { title: 'Line Setup', desc: 'Designing the optimal assembly workflow.' },
        { title: 'Assembly', desc: 'Skillful integration of all product components.' },
        { title: 'Final Inspection', desc: 'Ensuring every unit meets our strict standards.' }
      ]
    },
    'software-automation': {
      title: 'Software Automation',
      subtitle: 'Streamlining business and industrial processes',
      description: 'We develop custom software automation tools that eliminate repetitive tasks and increase operational efficiency.',
      icon: <Zap size={48} />,
      image: 'https://images.unsplash.com/photo-1518433278988-2b2f1f6c5fd5?auto=format&fit=crop&q=80&w=800',
      features: ['Robotic Process Automation (RPA)', 'Automated data processing', 'Custom workflow scripts', 'Integration with legacy systems'],
      process: [
        { title: 'Process Mapping', desc: 'Identifying bottlenecks and automation opportunities.' },
        { title: 'Tool Development', desc: 'Building custom scripts and automation engines.' },
        { title: 'Implementation', desc: 'Seamlessly integrating tools into existing workflows.' }
      ]
    },
    'iot-app-dev': {
      title: 'IoT Application Services',
      subtitle: 'Connecting devices to the digital world',
      description: 'Developing powerful IoT platforms and applications that allow for real-time monitoring and control of connected hardware.',
      icon: <Database size={48} />,
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800',
      features: ['Real-time data visualization', 'Secure device communication', 'Predictive maintenance analytics', 'Cross-platform control'],
      process: [
        { title: 'Connectivity Setup', desc: 'Establishing secure communication protocols.' },
        { title: 'Platform Development', desc: 'Building the data processing and UI layers.' },
        { title: 'Testing', desc: 'End-to-end testing with physical hardware.' }
      ]
    },
    'maintenance-troubleshooting': {
      title: 'Maintenance & Troubleshooting',
      subtitle: 'Ensuring long-term system reliability',
      description: 'We provide dedicated support for maintaining and troubleshooting industrial systems and software applications.',
      icon: <Settings size={48} />,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
      features: ['Predictive maintenance planning', 'Fast-response troubleshooting', 'System upgrades and patching', 'Continuous monitoring'],
      process: [
        { title: 'System Audit', desc: 'Regular health checks of your hardware and software.' },
        { title: 'Issue Resolution', desc: 'Rapid identification and fixing of problems.' },
        { title: 'Optimization', desc: 'Ongoing improvements to performance and reliability.' }
      ]
    },
    'rapid-prototyping': {
      title: 'Rapid Prototyping',
      subtitle: 'From CAD to physical model in record time',
      description: 'Our rapid prototyping services leverage advanced manufacturing techniques to deliver physical models quickly for testing and validation.',
      icon: <Zap size={48} />,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
      features: ['SLA/SLS 3D Printing', 'CNC Machining', 'Vacuum Casting', 'Material Selection Support'],
      process: [
        { title: 'Model Analysis', desc: 'Ensuring the design is optimized for rapid production.' },
        { title: 'Fabrication', desc: 'Executing the prototype using the best method for the part.' },
        { title: 'Fast Delivery', desc: 'Getting the prototype to you as quickly as possible.' }
      ]
    },
    'desktop-app-dev': {
      title: 'Desktop Application Services',
      subtitle: 'Powerful software for local environments',
      description: 'We build high-performance desktop applications for Windows, macOS, and Linux that require local hardware access or specialized offline processing.',
      icon: <Code size={48} />,
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
      features: ['Electron & C++ Expertise', 'Cross-Platform Compatibility', 'Hardware Integration', 'Secure Data Management'],
      process: [
        { title: 'Requirement Analysis', desc: 'Defining the specific hardware and OS needs.' },
        { title: 'Core Dev', desc: 'Building the application logic and UI.' },
        { title: 'Packaging', desc: 'Creating installers and distribution packages.' }
      ]
    },
    'scaling-maintenance': {
      title: 'Scaling & Maintenance Services',
      subtitle: 'Growing and supporting your software systems',
      description: 'As your business grows, your software needs to scale. we provide continuous maintenance and scaling services to ensure your platform keeps up.',
      icon: <Settings size={48} />,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      features: ['Auto-scaling infrastructure', 'Database optimization', 'Security patching', 'Performance monitoring'],
      process: [
        { title: 'Scaling Strategy', desc: 'Planning the infrastructure for increased load.' },
        { title: 'Execution', desc: 'Implementing vertical or horizontal scaling.' },
        { title: 'Ongoing Support', desc: 'Regular maintenance and performance tuning.' }
      ]
    },
    'process-automation': {
      title: 'Process Automation',
      subtitle: 'Optimizing industrial and business workflows',
      description: 'We integrate hardware and software to automate complex industrial processes, reducing manual labor and increasing throughput.',
      icon: <Settings size={48} />,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
      features: ['SCADA/PLC integration', 'Industrial IoT sensors', 'Automated reporting systems', 'Predictive alerts'],
      process: [
        { title: 'Audit', desc: 'Thorough review of current manual processes.' },
        { title: 'System Design', desc: 'Architecting the hardware/software automation layer.' },
        { title: 'Commissioning', desc: 'Bringing the automated system online and training staff.' }
      ]
    }
}

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>()
  const service = id ? SERVICES_CONTENT[id] : null

  if (!service) {
    return (
      <PageLayout>
        <div className="h-screen flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl font-black mb-4">Service Not Found</h1>
          <p className="text-slate-500 mb-8">The service you are looking for is currently being updated or does not exist.</p>
          <Link to="/" className="text-indigo-600 font-bold flex items-center gap-2">
            Return Home <ArrowRight size={18} />
          </Link>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <img src={service.image} className="w-full h-full object-cover grayscale" alt={service.title} />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-indigo-400 mb-6">{service.icon}</div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">{service.title}</h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl font-medium italic">"{service.subtitle}"</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="text-sm font-black text-indigo-600 tracking-[0.3em] uppercase mb-8">Overview</h2>
              <p className="text-2xl text-slate-900 font-bold leading-snug mb-10">{service.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-indigo-600 shrink-0" size={24} />
                    <span className="text-lg font-bold text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
               <h3 className="text-xl font-black text-slate-900 mb-12 uppercase">Our Working Process</h3>
               <div className="space-y-12">
                  {service.process.map((step, i) => (
                    <div key={i} className="flex gap-8 group">
                       <div className="text-3xl font-black text-slate-200 group-hover:text-indigo-600 transition-colors">0{i+1}</div>
                       <div>
                          <h4 className="text-xl font-bold text-slate-900 mb-2 uppercase">{step.title}</h4>
                          <p className="text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
               
               <div className="mt-16 pt-12 border-t border-slate-200">
                  <Link to="/contact" className="bg-indigo-600 text-white px-10 py-5 rounded-2xl font-bold text-lg w-full flex items-center justify-center gap-3 hover:bg-slate-900 transition-all shadow-xl shadow-indigo-200">
                     Request a Quote <ArrowRight size={20} />
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Placeholder */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
           <h4 className="text-xl font-black text-slate-900 mb-12 uppercase text-center">More Services in this category</h4>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* This could be dynamically filtered */}
              <div className="p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 cursor-pointer">
                 <h5 className="font-bold text-lg mb-2">Technical Documentation</h5>
                 <p className="text-sm text-slate-500 mb-4">Meticulous records for your engineering projects.</p>
                 <ArrowRight className="text-indigo-600" size={20} />
              </div>
              <div className="p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 cursor-pointer">
                 <h5 className="font-bold text-lg mb-2">Performance Optimization</h5>
                 <p className="text-sm text-slate-500 mb-4">Streamlining your industrial applications.</p>
                 <ArrowRight className="text-indigo-600" size={20} />
              </div>
              <div className="p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 cursor-pointer">
                 <h5 className="font-bold text-lg mb-2">System Integration</h5>
                 <p className="text-sm text-slate-500 mb-4">Connecting your hardware and software.</p>
                 <ArrowRight className="text-indigo-600" size={20} />
              </div>
           </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default ServiceDetail
