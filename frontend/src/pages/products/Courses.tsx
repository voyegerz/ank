import PageLayout from '../../components/PageLayout'
import { motion } from 'framer-motion'
import { BookOpen, GraduationCap, Zap, ArrowRight } from 'lucide-react'

const Courses = () => {
  return (
    <PageLayout>
      <section className="relative pt-40 pb-20 bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6"><span className="text-indigo-500">Courses</span></h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl font-medium">Professional training in CAD design, 3D printing, and industrial automation.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Skill Development</h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-10">We provide industry-relevant training programs to empower the next generation of engineers.</p>
              <div className="space-y-6">
                <CapabilityItem title="Advanced CAD Mastery" desc="Hands-on courses in 3D modeling, drafting, and technical design." />
                <CapabilityItem title="Industrial 3D Printing" desc="Training on professional additive manufacturing hardware and materials." />
                <CapabilityItem title="Automation Logic" desc="Learning the fundamentals of PLC programming and system integration." />
              </div>
            </div>
            <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 flex flex-col justify-center">
               <img src="https://images.unsplash.com/photo-1524178232363-1fb28f74b573?auto=format&fit=crop&q=80&w=800" className="rounded-2xl mb-8 shadow-lg" alt="Courses" />
               <button className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-slate-900 transition-all flex items-center justify-center gap-3">Browse Courses <ArrowRight size={20} /></button>
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

export default Courses
