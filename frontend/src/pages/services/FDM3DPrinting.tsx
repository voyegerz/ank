import PageLayout from '../../components/PageLayout'
import CommonHero from '../../components/CommonHero'
import {  ArrowRight } from 'lucide-react'

const FDM3DPrinting = () => {
  return (
    <PageLayout>
      <CommonHero 
        title="FDM 3D Printing" 
        subtitle="Industrial-grade additive manufacturing for robust parts and models."
      />

      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Additive Manufacturing</h2>
              <div className="space-y-6">
                <CapabilityItem title="Material Variety" desc="Printing in PLA, PETG, ABS, Carbon Fiber, and more." />
                <CapabilityItem title="Large Format Printing" desc="Capabilities for large-scale industrial components." />
                <CapabilityItem title="High Precision" desc="Consistent accuracy and surface finish for every print." />
              </div>
            </div>
            <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
               <h3 className="text-xl font-black text-slate-900 mb-8 uppercase">Custom Solutions</h3>
               <p className="text-slate-600 font-medium leading-relaxed mb-8">We provide tailored 3D printing services for prototypes, tools, and end-use parts.</p>
               <button className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-slate-900 transition-all flex items-center justify-center gap-3">Order Prints <ArrowRight size={20} /></button>
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

export default FDM3DPrinting
