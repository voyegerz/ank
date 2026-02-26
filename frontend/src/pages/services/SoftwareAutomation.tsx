import PageLayout from '../../components/PageLayout'
import { motion } from 'framer-motion'
import { Zap, Code, Layout, ArrowRight, CheckCircle2 } from 'lucide-react'

const SoftwareAutomation = () => {
  return (
    <PageLayout>
      <section className="relative pt-40 pb-20 bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">Software <span className="text-indigo-500">Automation</span></h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl font-medium">Automating complex software workflows to increase business efficiency.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Workflow Efficiency</h2>
              <div className="space-y-6">
                <CapabilityItem title="Automated Scripts" desc="Custom scripts to handle repetitive data entry and processing tasks." />
                <CapabilityItem title="System Integration" desc="Connecting disparate software tools to automate cross-platform workflows." />
                <CapabilityItem title="RPA Solutions" desc="Robotic Process Automation for large-scale enterprise efficiency." />
              </div>
            </div>
            <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
               <h3 className="text-xl font-black text-slate-900 mb-8 uppercase">Reduce Manual Effort</h3>
               <p className="text-slate-600 font-medium leading-relaxed mb-8">We build automation tools that eliminate bottlenecks and free up your team for higher-value work.</p>
               <button className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-slate-900 transition-all flex items-center justify-center gap-3">Automate Now <ArrowRight size={20} /></button>
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

export default SoftwareAutomation
