import PageLayout from '../components/PageLayout'
import CommonHero from '../components/CommonHero'
import MapSection from '../components/MapSection'
import { motion } from 'framer-motion'
import { ArrowRight, Send } from 'lucide-react'

const Careers = () => {
  return (
    <PageLayout>
      <CommonHero 
        bgImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
        caption="Build the Future"
        title="Careers at ANK"
        subtitle="Join a team of elite engineers and innovators dedicated to solving the world's most complex industrial automation and software challenges."
        watermarkNumber="07"
      />

      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center mb-24">
           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
             <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tight">Our <span className="text-primary-hover">Culture</span></h2>
             <p className="text-lg text-slate-600 font-medium leading-relaxed">
               At ANK, we don't just build machines; we build the future. We provide a high-performance environment where technical excellence meets creative freedom. We're always looking for unique minds who are ready to push the boundaries of what's possible.
             </p>
           </motion.div>
        </div>

        <div className="container mx-auto px-6 max-w-4xl">
           <div className="bg-slate-50 p-12 rounded-sm border border-black/5 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
             <h2 className="text-2xl font-black text-slate-900 mb-10 uppercase tracking-widest flex items-center gap-4">
               <span className="w-12 h-px bg-primary/20" />
               Drop Your CV
             </h2>
             <form className="space-y-8 relative z-10">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-2">
                   <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                   <input type="text" className="w-full bg-white border border-black/5 px-6 py-4 rounded-sm focus:ring-1 focus:ring-primary outline-none font-bold text-slate-900 placeholder:text-slate-300 transition-all shadow-sm" placeholder="John Doe" />
                 </div>
                 <div className="space-y-2">
                   <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Phone Number</label>
                   <input type="tel" className="w-full bg-white border border-black/5 px-6 py-4 rounded-sm focus:ring-1 focus:ring-primary outline-none font-bold text-slate-900 placeholder:text-slate-300 transition-all shadow-sm" placeholder="+91 00000 00000" />
                 </div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-2">
                   <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                   <input type="email" className="w-full bg-white border border-black/5 px-6 py-4 rounded-sm focus:ring-1 focus:ring-primary outline-none font-bold text-slate-900 placeholder:text-slate-300 transition-all shadow-sm" placeholder="john@example.com" />
                 </div>
                 <div className="space-y-2">
                   <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Current Location</label>
                   <input type="text" className="w-full bg-white border border-black/5 px-6 py-4 rounded-sm focus:ring-1 focus:ring-primary outline-none font-bold text-slate-900 placeholder:text-slate-300 transition-all shadow-sm" placeholder="City, Country" />
                 </div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-2">
                   <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Position Applied For</label>
                   <input type="text" className="w-full bg-white border border-black/5 px-6 py-4 rounded-sm focus:ring-1 focus:ring-primary outline-none font-bold text-slate-900 placeholder:text-slate-300 transition-all shadow-sm" placeholder="e.g. Senior PLC Engineer" />
                 </div>
                 <div className="space-y-2">
                   <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Years of Exp</label>
                   <input type="number" className="w-full bg-white border border-black/5 px-6 py-4 rounded-sm focus:ring-1 focus:ring-primary outline-none font-bold text-slate-900 placeholder:text-slate-300 transition-all shadow-sm" placeholder="5" />
                 </div>
               </div>
               <div className="space-y-2">
                 <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Upload CV (PDF)</label>
                 <div className="relative group">
                   <input type="file" className="w-full bg-white border border-black/5 px-6 py-12 rounded-sm focus:ring-1 focus:ring-primary outline-none font-bold text-slate-400 file:hidden cursor-pointer hover:bg-slate-50 transition-colors" />
                   <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-slate-400 font-black uppercase text-[11px] tracking-widest gap-3">
                     <Send size={14} className="opacity-40" /> Click or drag to upload
                   </div>
                 </div>
               </div>
               <button className="w-full bg-primary text-white py-6 rounded-sm font-black text-[11px] uppercase tracking-[0.3em] hover:bg-primary-hover transition-all shadow-xl flex items-center justify-center gap-4">
                 Submit Application <ArrowRight size={16} />
               </button>
             </form>
           </div>
        </div>
      </section>

      <MapSection />
    </PageLayout>
  )
}

export default Careers
