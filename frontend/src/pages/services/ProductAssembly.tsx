import PageLayout from '../../components/PageLayout'
import CommonHero from '../../components/CommonHero'
import { motion } from 'framer-motion'
import { Box, Settings, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

const ProductAssembly = () => {
  return (
    <PageLayout>
      <CommonHero 
        title="Product Assembly" 
        subtitle="End-to-end integration and manufacturing services."
      />

      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Full System Integration</h2>
              <div className="space-y-6">
                <CapabilityItem title="Box Build Assembly" desc="Complete system integration including electronics, mechanicals, and enclosures." />
                <CapabilityItem title="Final Quality Testing" desc="Comprehensive functional testing before final packaging." />
                <CapabilityItem title="Supply Chain Management" desc="Full procurement and inventory management for your product line." />
              </div>
            </div>
            <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
               <h3 className="text-xl font-black text-slate-900 mb-8 uppercase">Ready for Market</h3>
               <p className="text-slate-600 font-medium leading-relaxed mb-8">We transform your components into finished, market-ready products with precision and care.</p>
               <button className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-slate-900 transition-all flex items-center justify-center gap-3">Start Assembly <ArrowRight size={20} /></button>
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

export default ProductAssembly
