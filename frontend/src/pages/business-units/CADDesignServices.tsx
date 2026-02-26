import PageLayout from '../../components/PageLayout'
import CommonHero from '../../components/CommonHero'
import { ArrowRight } from 'lucide-react'

const CADDesignServices = () => {
  return (
    <PageLayout>
      <CommonHero 
        title="CAD Design Services" 
        subtitle="Precision-engineered 3D/2D CAD development for industrial excellence."
      />

      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Business Unit Overview</h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-10">We Provide 3D/2D CAD Mechanical design development with precision and usability and practical standards.</p>
              <div className="space-y-6">
                <CapabilityItem title="Technical Drafting" desc="ISO-standard 2D drawings for seamless manufacturing and documentation." />
                <CapabilityItem title="Mechanical Design" desc="High-accuracy 3D modeling of parts, assemblies, and complex industrial systems." />
                <CapabilityItem title="Usability Optimization" desc="Ensuring designs are not only accurate but practical for end-users." />
              </div>
            </div>
            <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
               <h3 className="text-xl font-black text-slate-900 mb-8 uppercase">Industrial Design</h3>
               <p className="text-slate-600 font-medium leading-relaxed mb-8">Our team of expert engineers uses industry-standard tools to deliver meticulous designs.</p>
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

export default CADDesignServices
