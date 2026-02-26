import PageLayout from '../../components/PageLayout'
import CommonHero from '../../components/CommonHero'
import { motion } from 'framer-motion'
import { ShieldCheck, Search, Zap, CheckCircle, ArrowRight, CheckCircle2 } from 'lucide-react'

const TestingQA = () => {
  return (
    <PageLayout>
      <CommonHero 
        title="Testing & QA" 
        subtitle="Ensuring every product and software solution meets the highest standards of reliability."
      />

      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Core Capabilities</h2>
              <div className="space-y-6">
                <CapabilityItem title="Automated Software Testing" desc="Comprehensive unit, integration, and end-to-end testing for all software applications." />
                <CapabilityItem title="Hardware Validation" desc="Rigorous environmental and stress testing of electronic components and mechanical parts." />
                <CapabilityItem title="Functional Verification" desc="Ensuring all system requirements are met through meticulous manual and automated checks." />
                <CapabilityItem title="Performance Benchmarking" desc="Analyzing system response times and throughput under peak load conditions." />
              </div>
            </div>
            <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
               <h3 className="text-xl font-black text-slate-900 mb-8 uppercase">Quality Guaranteed</h3>
               <p className="text-slate-600 font-medium leading-relaxed mb-8">
                 Our QA process is integrated into every stage of development, identifying potential issues early and ensuring a flawless final release.
               </p>
               <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-slate-700 font-bold"><CheckCircle2 className="text-indigo-600" size={20} /> Continuous Integration Testing</li>
                  <li className="flex items-center gap-3 text-slate-700 font-bold"><CheckCircle2 className="text-indigo-600" size={20} /> User Acceptance Testing (UAT)</li>
                  <li className="flex items-center gap-3 text-slate-700 font-bold"><CheckCircle2 className="text-indigo-600" size={20} /> Security & Penetration Testing</li>
               </ul>
               <button className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-slate-900 transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-3">
                  Start Quality Audit <ArrowRight size={20} />
               </button>
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

export default TestingQA
