import PageLayout from '../../components/PageLayout'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Education = () => {
  return (
    <PageLayout>
      <section className="relative pt-40 pb-20 bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6"><span className="text-indigo-500">Education</span></h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl font-medium">Training the next generation with advanced additive manufacturing tools.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Technical Training</h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-10">We provide Additive manufacturing with precise 3D Printing for all types of filaments (PLA, PETG, ABS, Carbon Fiber, etc).</p>
              <div className="space-y-6">
                <CapabilityItem title="Curriculum Support" desc="Providing the hardware and expertise needed for engineering and design education." />
                <CapabilityItem title="Workshop Execution" desc="Hands-on training sessions for 3D printing and CAD modeling." />
                <CapabilityItem title="Student Projects" desc="Supporting academia with professional-grade manufacturing and design services." />
              </div>
            </div>
            <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
               <h3 className="text-xl font-black text-slate-900 mb-8 uppercase">Knowledge Sharing</h3>
               <p className="text-slate-600 font-medium leading-relaxed mb-8">We are committed to fostering technical excellence through education and training.</p>
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

export default Education
