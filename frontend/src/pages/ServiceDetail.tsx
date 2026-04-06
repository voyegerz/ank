import { useParams, Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, Zap } from "lucide-react";
import { SERVICES_CONTENT } from '@/data/servicesData'

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
      <section className="relative min-h-[60vh] flex items-center bg-slate-900 overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
           <img 
            src={service.image} 
            className="w-full h-full object-cover grayscale opacity-30 scale-105" 
            alt={service.title} 
          />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 md:px-16 lg:px-32 relative z-10 text-white py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-bold uppercase tracking-widest mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Service Excellence
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase mb-6 leading-[0.9]">
              {service.title.split(' ').map((word, i) => (
                <span key={i} className={i === 0 ? "block" : "text-indigo-500"}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl font-medium leading-relaxed italic border-l-4 border-indigo-500 pl-6">
              "{service.subtitle}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16 lg:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Overview & Features */}
            <div className="lg:col-span-7">
              <h2 className="text-xs font-black text-indigo-600 tracking-[0.4em] uppercase mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-indigo-600" />
                Overview
              </h2>
              <p className="text-2xl md:text-3xl text-slate-900 font-bold leading-tight mb-12">
                {service.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                {service.features.map((feature, i) => (
                  <motion.div 
                    key={i} 
                    className="flex flex-col gap-3 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/5 transition-all group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <CheckCircle2 className="text-indigo-600 shrink-0 group-hover:scale-110 transition-transform" size={28} />
                    <span className="text-lg font-bold text-slate-700 leading-snug">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Process Card */}
            <div className="lg:col-span-5 sticky top-32">
              <div className="bg-slate-900 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                {/* Decorative background element */}
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all duration-700" />
                
                <h3 className="text-2xl font-black text-white mb-12 uppercase tracking-tight flex items-center gap-4">
                  <span className="text-indigo-500">01.</span>
                  Our working process
                </h3>
                
                <div className="space-y-10 relative z-10">
                  {service.process.map((step, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-indigo-400 font-black shrink-0">
                          {i + 1}
                        </div>
                        {i < service.process.length - 1 && (
                          <div className="w-px h-full bg-slate-800 my-2" />
                        )}
                      </div>
                      <div className="pb-2">
                        <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">{step.title}</h4>
                        <p className="text-slate-400 text-sm font-medium leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 pt-10 border-t border-slate-800 relative z-10">
                  <Link to="/contact" className="group bg-indigo-600 text-white px-8 py-5 rounded-2xl font-black text-lg w-full flex items-center justify-center gap-3 hover:bg-white hover:text-slate-900 transition-all shadow-xl shadow-indigo-500/20">
                    GET STARTED <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Placeholder */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 md:px-16 lg:px-32">
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
             <div>
               <h4 className="text-xs font-black text-indigo-600 tracking-[0.4em] uppercase mb-4">Ecosystem</h4>
               <h2 className="text-4xl font-black text-slate-900 uppercase leading-none">Complementary <br /> Solutions</h2>
             </div>
             <Link to="/services" className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                Browse All Services <ArrowRight size={18} />
             </Link>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Technical Documentation", desc: "Meticulous records for your engineering projects." },
                { title: "Performance Optimization", desc: "Streamlining your industrial applications." },
                { title: "System Integration", desc: "Connecting your hardware and software." }
              ].map((item, i) => (
                <div key={i} className="p-10 bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all border border-slate-100 cursor-pointer group hover:-translate-y-2">
                   <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <Zap size={24} />
                   </div>
                   <h5 className="font-black text-xl mb-3 uppercase tracking-tight">{item.title}</h5>
                   <p className="text-slate-500 font-medium mb-8 leading-relaxed">{item.desc}</p>
                   <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm uppercase tracking-widest">
                      Learn More <ArrowRight className="group-hover:translate-x-2 transition-transform" size={16} />
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default ServiceDetail
