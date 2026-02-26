import PageLayout from '../../components/PageLayout'
import { motion } from 'framer-motion'
import { Monitor, Code, Layout, ArrowRight, CheckCircle2 } from 'lucide-react'

const DesktopApplications = () => {
  return (
    <PageLayout>
      <section className="relative pt-40 pb-20 bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">Desktop <span className="text-indigo-500">Applications</span></h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl font-medium">Powerful desktop software for specialized industrial and business use.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter">High-Performance Software</h2>
              <div className="space-y-6">
                <CapabilityItem title="Cross-Platform Tools" desc="Building desktop apps for Windows, macOS, and Linux using modern tech." />
                <CapabilityItem title="Local Hardware Integration" desc="Software that interacts directly with local sensors, machines, and controllers." />
                <CapabilityItem title="Offline Data Management" desc="Secure, local-first data processing and storage." />
              </div>
            </div>
            <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
               <h3 className="text-xl font-black text-slate-900 mb-8 uppercase">Industrial Power</h3>
               <p className="text-slate-600 font-medium leading-relaxed mb-8">We create desktop tools that handle complex processing and local automation with ease.</p>
               <button className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-slate-900 transition-all flex items-center justify-center gap-3">Start Desktop Project <ArrowRight size={20} /></button>
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

export default DesktopApplications
