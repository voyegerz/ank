import PageLayout from '../../components/PageLayout'
import CommonHero from '../../components/CommonHero'
import { motion } from 'framer-motion'
import { Code, Server, Shield, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'

const SoftwareEngineering = () => {
  return (
    <PageLayout>
      <CommonHero 
        title="Software Engineering" 
        subtitle="Building robust, scalable, and high-performance industrial software systems."
      />

      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Core Capabilities</h2>
              <div className="space-y-6">
                <CapabilityItem title="Custom Enterprise Solutions" desc="Tailored software designed to meet the unique challenges of your business operations." />
                <CapabilityItem title="Industrial Automation Logic" desc="Developing sophisticated algorithms for PLC, SCADA, and automated control systems." />
                <CapabilityItem title="High-Performance Backends" desc="Building reliable server-side architectures that handle massive data loads with ease." />
                <CapabilityItem title="System Integration" desc="Connecting disparate software and hardware components into a unified ecosystem." />
              </div>
            </div>
            <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
               <h3 className="text-xl font-black text-slate-900 mb-8 uppercase">Why Partner With Us?</h3>
               <p className="text-slate-600 font-medium leading-relaxed mb-8">
                 Our software engineering team combines deep domain knowledge with modern development practices to deliver solutions that are not just functional, but future-proof.
               </p>
               <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-slate-700 font-bold"><CheckCircle2 className="text-indigo-600" size={20} /> Agile Development Methodology</li>
                  <li className="flex items-center gap-3 text-slate-700 font-bold"><CheckCircle2 className="text-indigo-600" size={20} /> Rigorous Testing & QA</li>
                  <li className="flex items-center gap-3 text-slate-700 font-bold"><CheckCircle2 className="text-indigo-600" size={20} /> Security-First Architecture</li>
               </ul>
               <button className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-slate-900 transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-3">
                  Discuss Your Project <ArrowRight size={20} />
               </button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

const CapabilityItem = ({ title, desc }: { title: string, desc: string }) => (
  <div className="group">
    <h4 className="text-xl font-black text-slate-900 mb-2 uppercase group-hover:text-indigo-600 transition-colors">{title}</h4>
    <p className="text-slate-500 font-medium leading-relaxed">{desc}</p>
  </div>
)

export default SoftwareEngineering
