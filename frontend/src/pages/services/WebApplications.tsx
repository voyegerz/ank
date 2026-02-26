import PageLayout from '../../components/PageLayout'
import { motion } from 'framer-motion'
import { Globe, Code, Server, ArrowRight, CheckCircle2 } from 'lucide-react'

const WebApplications = () => {
  return (
    <PageLayout>
      <section className="relative pt-40 pb-20 bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">Web <span className="text-indigo-500">Applications</span></h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl font-medium">Scalable, high-performance web platforms for modern businesses.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Enterprise Web Solutions</h2>
              <div className="space-y-6">
                <CapabilityItem title="Modern Frontend" desc="React-based, highly responsive, and user-centric interfaces." />
                <CapabilityItem title="Robust Backend" desc="Node.js and Python architectures designed for scale and security." />
                <CapabilityItem title="API Development" desc="Seamless integration through well-documented and secure RESTful APIs." />
              </div>
            </div>
            <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
               <h3 className="text-xl font-black text-slate-900 mb-8 uppercase">Digital Transformation</h3>
               <p className="text-slate-600 font-medium leading-relaxed mb-8">We build web applications that drive engagement and streamline business workflows.</p>
               <button className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-slate-900 transition-all flex items-center justify-center gap-3">Start Web Project <ArrowRight size={20} /></button>
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

export default WebApplications
