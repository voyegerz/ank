import PageLayout from '../../components/PageLayout'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const CaseStudies = () => {
  return (
    <PageLayout>
      <section className="relative pt-40 pb-20 bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-black tracking-normal uppercase mb-6">Case <span className="text-indigo-500">Studies</span></h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl font-medium">Deep dives into our most successful and challenging projects.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
               <p className="text-[10px] font-black tracking-[0.3em] text-primary uppercase mb-6">Featured Case Study</p>
               <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 uppercase leading-[0.95]">Lung <span className="text-primary-hover">Physio</span></h2>
               <div className="space-y-6 text-slate-600 font-medium leading-relaxed">
                 <p>
                   Developing a next-generation respiratory therapy device that combines precision air-flow control with real-time patient data tracking.
                 </p>
                 <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                   <h4 className="text-sm font-black text-slate-900 uppercase mb-4">The Challenge</h4>
                   <p className="text-sm">The client needed a highly precise, portable device that could monitor lung capacity and provide tactile feedback during physiotherapy sessions.</p>
                 </div>
                 <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                   <h4 className="text-sm font-black text-slate-900 uppercase mb-4">Our Solution</h4>
                   <p className="text-sm">We integrated high-sensitivity pressure sensors with a custom-built mobile application, allowing both patients and doctors to track progress in real-time.</p>
                 </div>
               </div>
             </motion.div>
             <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
               <img 
                 src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200" 
                 className="w-full h-full object-cover grayscale transition-all duration-700"
                 alt="Lung Physio Project"
               />
               <div className="absolute inset-0 bg-primary/20" />
             </motion.div>
           </div>
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
