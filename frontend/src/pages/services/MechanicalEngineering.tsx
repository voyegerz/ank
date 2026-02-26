import PageLayout from '../../components/PageLayout'
import CommonHero from '../../components/CommonHero'
import { motion } from 'framer-motion'
import { Layers, Box, Settings, PencilRuler, ArrowRight, CheckCircle2 } from 'lucide-react'

const MechanicalEngineering = () => {
  return (
    <PageLayout>
      <CommonHero 
        title="Mechanical Engineering" 
        subtitle="Delivering precision 3D/2D CAD designs and mechanical solutions for industrial excellence."
      />

      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Core Capabilities</h2>
              <div className="space-y-6">
                <CapabilityItem title="Advanced 3D Modeling" desc="High-accuracy digital reconstruction and creation of complex industrial parts and assemblies." />
                <CapabilityItem title="Technical Drafting & Detailing" desc="Precise 2D drawings with full GD&T compliance for seamless manufacturing." />
                <CapabilityItem title="Design for Manufacturing (DFM)" desc="Optimizing designs to reduce production costs while maintaining high structural integrity." />
                <CapabilityItem title="FEA & Simulation" desc="Conducting thorough stress, thermal, and fluid analysis to validate design performance." />
              </div>
            </div>
            <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
               <h3 className="text-xl font-black text-slate-900 mb-8 uppercase">Industrial Grade Design</h3>
               <p className="text-slate-600 font-medium leading-relaxed mb-8">
                 We bridge the gap between imagination and production through meticulous engineering and a commitment to precision.
               </p>
               <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-slate-700 font-bold"><CheckCircle2 className="text-indigo-600" size={20} /> Multi-platform CAD Expertise</li>
                  <li className="flex items-center gap-3 text-slate-700 font-bold"><CheckCircle2 className="text-indigo-600" size={20} /> ISO Standard Compliance</li>
                  <li className="flex items-center gap-3 text-slate-700 font-bold"><CheckCircle2 className="text-indigo-600" size={20} /> Rapid Iteration & Prototyping</li>
               </ul>
               <button className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-slate-900 transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-3">
                  Consult an Engineer <ArrowRight size={20} />
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

export default MechanicalEngineering
