import PageLayout from '../../components/PageLayout'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Support = () => {
  return (
    <PageLayout>
      <section className="relative pt-40 pb-20 bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6"><span className="text-indigo-500">Support</span></h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl font-medium">Expert technical support for all your ANK solutions.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase">Help Desk</h2>
           <p className="text-slate-600 font-medium mb-12">Submit a ticket or browse our FAQ for immediate assistance.</p>
           <div className="flex justify-center gap-6">
              <button className="bg-indigo-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-900 transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-3">Contact Support <ArrowRight size={20} /></button>
              <button className="bg-slate-100 text-slate-900 px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-3">View FAQ</button>
           </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default Support
