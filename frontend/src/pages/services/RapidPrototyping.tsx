import PageLayout from '../../components/PageLayout'
import CommonHero from '../../components/CommonHero'
import { ArrowRight } from 'lucide-react'

const RapidPrototyping = () => {
  return (
    <PageLayout>
      <CommonHero 
        title="Rapid Prototyping" 
        subtitle="Accelerating your design cycles with fast, functional prototypes."
      />

      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Speed to Market</h2>
              <div className="space-y-6">
                <CapabilityItem title="Functional Prototypes" desc="Prototypes that look and work like the final product." />
                <CapabilityItem title="Iterative Design Support" desc="Fast feedback loops to refine your design before mass production." />
                <CapabilityItem title="Material Variety" desc="Access to a wide range of industrial-grade materials for testing." />
              </div>
            </div>
            <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
               <h3 className="text-xl font-black text-slate-900 mb-8 uppercase">Precision Prototyping</h3>
               <p className="text-slate-600 font-medium leading-relaxed mb-8">Move from CAD to physical model in record time with our advanced prototyping tools.</p>
               <button className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-slate-900 transition-all flex items-center justify-center gap-3">Get Prototype <ArrowRight size={20} /></button>
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

export default RapidPrototyping
