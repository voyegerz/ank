import PageLayout from '../components/PageLayout'
import { motion } from 'framer-motion'
import { Target, Users, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'

const Careers = () => {
  return (
    <PageLayout>
      <section className="relative pt-40 pb-20 bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">Join The <span className="text-indigo-500">Team</span></h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl font-medium">Build the future of industrial automation with a team of unique minds.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-white text-center">
        <div className="container mx-auto px-6">
           <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter leading-tight">We're always looking for <br /> unique minds</h2>
           <p className="text-lg text-slate-500 font-medium mb-12 max-w-2xl mx-auto">ANK provides a fast-paced environment where you can tackle the most challenging engineering problems.</p>
           <button className="bg-indigo-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-900 transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-3 mx-auto">View Open Positions <ArrowRight size={20} /></button>
        </div>
      </section>
    </PageLayout>
  )
}

export default Careers
