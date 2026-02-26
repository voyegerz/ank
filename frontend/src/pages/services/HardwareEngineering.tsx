import PageLayout from '../../components/PageLayout'
import CommonHero from '../../components/CommonHero'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const HardwareEngineering = () => {
  return (
    <PageLayout>
      <CommonHero 
        title="Hardware Engineering" 
        subtitle="Designing precision-engineered electronics and hardware for complex industrial needs."
      />

      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Core Capabilities</h2>
              <div className="space-y-6">
                <CapabilityItem title="PCB Design & Layout" desc="High-density multi-layer board design with a focus on signal integrity and thermal management." />
                <CapabilityItem title="Embedded Systems Design" desc="Architecting custom controller boards and sensor interfaces for specialized applications." />
                <CapabilityItem title="Prototype Fabrication" desc="Rapid in-house production of functional hardware prototypes for early-stage validation." />
                <CapabilityItem title="DFM (Design for Manufacturing)" desc="Optimizing hardware designs for cost-effective and reliable mass production." />
              </div>
            </div>
            <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
               <h3 className="text-xl font-black text-slate-900 mb-8 uppercase">Engineering Precision</h3>
               <p className="text-slate-600 font-medium leading-relaxed mb-8">
                 From sensor integration to power electronics, our hardware team ensures every component is optimized for performance and reliability in harsh industrial environments.
               </p>
               <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-slate-700 font-bold"><CheckCircle2 className="text-indigo-600" size={20} /> Advanced EMI/EMC Analysis</li>
                  <li className="flex items-center gap-3 text-slate-700 font-bold"><CheckCircle2 className="text-indigo-600" size={20} /> Component Sourcing Support</li>
                  <li className="flex items-center gap-3 text-slate-700 font-bold"><CheckCircle2 className="text-indigo-600" size={20} /> Rigorous Hardware Testing</li>
               </ul>
               <button className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-slate-900 transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-3">
                  Get Hardware Quote <ArrowRight size={20} />
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

export default HardwareEngineering
