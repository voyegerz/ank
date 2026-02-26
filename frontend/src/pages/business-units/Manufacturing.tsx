import PageLayout from '../../components/PageLayout'
import { motion } from 'framer-motion'
import {  ArrowRight} from 'lucide-react'

const Manufacturing = () => {
  return (
    <PageLayout>
      <section className="relative pt-40 pb-20 bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6"><span className="text-indigo-500">Manufacturing</span></h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl font-medium">Advanced additive manufacturing and industrial production services.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Production Capability</h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-10">We provide Additive manufacturing with precise 3D Printing for all types of filaments (PLA, PETG, ABS, Carbon Fiber, etc).</p>
              <div className="space-y-6">
                <CapabilityItem title="Additive Manufacturing" desc="Leveraging state-of-the-art 3D printing for rapid prototyping and parts." />
                <CapabilityItem title="Material Expertise" desc="Printing with a wide range of industrial and engineering filaments." />
                <CapabilityItem title="Production Readiness" desc="Moving from single prototypes to consistent low-volume production." />
              </div>
            </div>
            <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
               <h3 className="text-xl font-black text-slate-900 mb-8 uppercase">Precision Fab</h3>
               <p className="text-slate-600 font-medium leading-relaxed mb-8">We deliver high-quality manufactured parts with meticulous attention to detail.</p>
               <button className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-slate-900 transition-all flex items-center justify-center gap-3">Get Started <ArrowRight size={20} /></button>
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

export default Manufacturing
