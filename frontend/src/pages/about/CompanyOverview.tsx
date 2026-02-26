import PageLayout from '../../components/PageLayout'
import { motion } from 'framer-motion'
import { FileText, Target, Users, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'

const CompanyOverview = () => {
  return (
    <PageLayout>
      <section className="relative pt-40 pb-20 bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">Company <span className="text-indigo-500">Overview</span></h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl font-medium">ANK DESIGN AND AUTOMATION SOLUTIONS LLP: Driving industrial innovation through engineering excellence.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Who We Are</h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-6">
                ANK is a multidisciplinary team providing cutting edge solution, design, development & manufacturing services for academia, industries, start-up's, and all individuals.
              </p>
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10">
                From mechanical design and automation to embedded and IoT systems, to Custom Application Development our team collaborates closely to ensure every project meets technical accuracy, industry relevance, and execution quality.
              </p>
              <div className="grid grid-cols-2 gap-8">
                 <StatItem label="Years of Excellence" value="15+" />
                 <StatItem label="Expert Engineers" value="50+" />
              </div>
            </div>
            <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 flex flex-col justify-center">
               <h3 className="text-xl font-black text-slate-900 mb-8 uppercase">Our Vision</h3>
               <p className="text-slate-600 font-medium leading-relaxed mb-8">To be the global leader in providing integrated engineering and software solutions that empower industries to reach their full potential.</p>
               <button className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-slate-900 transition-all flex items-center justify-center gap-3">Contact Leadership <ArrowRight size={20} /></button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

const StatItem = ({ label, value }: { label: string, value: string }) => (
  <div>
    <h4 className="text-4xl font-black text-indigo-600 mb-2">{value}</h4>
    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
  </div>
)

export default CompanyOverview
