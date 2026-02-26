import PageLayout from '../../components/PageLayout'
import { motion } from 'framer-motion'
import {ArrowRight } from 'lucide-react'

const CloudScaling = () => {
  return (
    <PageLayout>
      <section className="relative pt-40 pb-20 bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">Cloud Services <br /><span className="text-indigo-500">& Scaling</span></h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl font-medium">Scaling your applications with expert managed cloud services.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Managed Cloud Solutions</h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-10">We Provide Scaling Platforms for Application with cross platform (Android/Ios/Web) Managed Services.</p>
              <div className="space-y-6">
                <CapabilityItem title="Cross-Platform Support" desc="Managed cloud backends for web, iOS, and Android applications." />
                <CapabilityItem title="Automated Scaling" desc="Systems that grow dynamically to meet fluctuating user demands." />
                <CapabilityItem title="Expert Management" desc="Full-lifecycle support and maintenance of your cloud infrastructure." />
              </div>
            </div>
            <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
               <h3 className="text-xl font-black text-slate-900 mb-8 uppercase">Digital Growth</h3>
               <p className="text-slate-600 font-medium leading-relaxed mb-8">We provide the robust cloud foundation needed for your digital expansion.</p>
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

export default CloudScaling
