import PageLayout from '../../components/PageLayout'
import { motion } from 'framer-motion'
import {  ArrowRight } from 'lucide-react'

const MedicalProducts = () => {
  return (
    <PageLayout>
      <section className="relative pt-40 pb-20 bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">Medical <span className="text-indigo-500">Products</span></h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl font-medium">Precision-engineered hardware and devices for healthcare excellence.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Healthcare Engineering</h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-10">Our medical line combines engineering precision with health-critical requirements.</p>
              <div className="space-y-6">
                <CapabilityItem title="Exercise Devices" desc="High-end mechanical tools designed for physiotherapy and patient care." />
                <CapabilityItem title="Custom Medical Enclosures" desc="Sterile and robust housing for sensitive medical electronic components." />
                <CapabilityItem title="Precision Prototypes" desc="Validating medical device concepts before large-scale production." />
              </div>
            </div>
            <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 flex flex-col justify-center">
               <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" className="rounded-2xl mb-8 shadow-lg" alt="Medical" />
               <button className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-slate-900 transition-all flex items-center justify-center gap-3">Learn More <ArrowRight size={20} /></button>
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

export default MedicalProducts
