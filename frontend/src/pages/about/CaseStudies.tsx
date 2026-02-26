import PageLayout from '../../components/PageLayout'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const CaseStudies = () => {
  return (
    <PageLayout>
      <section className="relative pt-40 pb-20 bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">Case <span className="text-indigo-500">Studies</span></h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl font-medium">Deep dives into our most successful and challenging projects.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase">Success Stories</h2>
           <p className="text-slate-500 max-w-xl mx-auto font-medium mb-12">Detailed breakdowns of how we solved complex problems for our clients.</p>
           <button className="bg-indigo-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-900 transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-3 mx-auto">Download Portfolio <ArrowRight size={20} /></button>
        </div>
      </section>
    </PageLayout>
  )
}

export default CaseStudies
