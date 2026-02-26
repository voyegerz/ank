import PageLayout from '../../components/PageLayout'
import CommonHero from '../../components/CommonHero'
import {  ArrowRight} from 'lucide-react'

const PCBassembly = () => {
  return (
    <PageLayout>
      <CommonHero 
        title="PCB Assembly" 
        subtitle="Precision electronic manufacturing for complex industrial applications."
      />

      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Manufacturing Excellence</h2>
              <div className="space-y-6">
                <CapabilityItem title="SMT & Through-Hole" desc="State-of-the-art surface mount and through-hole assembly lines." />
                <CapabilityItem title="Multi-Layer Expertise" desc="Experience with high-density, multi-layer rigid and flex PCBs." />
                <CapabilityItem title="Quality Testing" desc="Automated Optical Inspection (AOI) and functional testing for 100% reliability." />
              </div>
            </div>
            <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
               <h3 className="text-xl font-black text-slate-900 mb-8 uppercase">Fast Turnaround</h3>
               <p className="text-slate-600 font-medium leading-relaxed mb-8">We provide rapid prototyping and full-scale production runs with industry-leading accuracy.</p>
               <button className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-slate-900 transition-all flex items-center justify-center gap-3">Request PCB Quote <ArrowRight size={20} /></button>
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

export default PCBassembly
