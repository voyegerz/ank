import { useState, useRef } from 'react'
import PageLayout from '../components/PageLayout'
import CommonHero from '../components/CommonHero'
import MapSection from '../components/MapSection'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Send, Briefcase, CheckCircle2, X } from 'lucide-react'

const JOBS = [
  {
    id: 1,
    title: "Industrial Automation Engineer",
    type: "Full-time",
    location: "Vadodara, India",
    description: "Lead the design and implementation of complex automation systems, including PLC programming, SCADA integration, and hardware coordination for industrial production lines.",
    requirements: [
      "Expertise in Siemens/Rockwell/Delta PLC systems",
      "Proficiency in SCADA & HMI development",
      "Knowledge of industrial networking protocols",
      "Degree in Electrical or Mechatronics Engineering"
    ]
  },
  {
    id: 2,
    title: "Web Developer",
    type: "Full-time",
    location: "Remote / Hybrid",
    description: "Craft high-performance, visually stunning web applications and digital solutions for our industrial clients and internal products using modern stacks.",
    requirements: [
      "Advanced proficiency in React & TypeScript",
      "Experience with Tailwind CSS & Framer Motion",
      "Understanding of Headless CMS & API integration",
      "Strong UI/UX design sensibilities"
    ]
  }
];

const Careers = () => {
  const [selectedPosition, setSelectedPosition] = useState("");
  const formRef = useRef<HTMLDivElement>(null);

  const handleApply = (title: string) => {
    setSelectedPosition(title);
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
        <div className="container mx-auto px-6 max-w-6xl">
           <div className="text-center mb-24 max-w-3xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tight">Our <span className="text-primary-hover">Culture</span></h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed uppercase tracking-wide text-sm">
                  At ANK, we don't just build machines; we build the future. We provide a high-performance environment where technical excellence meets creative freedom. We're always looking for unique minds who are ready to push the boundaries of what's possible.
                </p>
              </motion.div>
           </div>

           {/* Open Positions */}
           <div className="mb-32">
             <div className="flex items-center gap-4 mb-12">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Open Positions</span>
                <div className="h-px flex-1 bg-slate-100" />
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {JOBS.map((job) => (
                 <motion.div 
                   key={job.id}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="group bg-slate-50 border border-slate-100 p-10 rounded-sm hover:bg-white hover:border-primary/20 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
                 >
                   <div className="space-y-6">
                      <div className="flex justify-between items-start">
                         <div className="p-3 bg-primary/10 text-primary rounded-sm group-hover:bg-primary group-hover:text-white transition-colors">
                           <Briefcase size={20} />
                         </div>
                         <span className="text-[9px] font-black uppercase tracking-widest bg-white px-3 py-1 border border-slate-100 text-slate-400">
                           {job.type}
                         </span>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter group-hover:text-primary transition-colors">
                          {job.title}
                        </h3>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          {job.location}
                        </p>
                      </div>

                      <p className="text-sm text-slate-500 font-medium leading-relaxed">
                        {job.description}
                      </p>

                      <ul className="space-y-3">
                        {job.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-3 text-[11px] font-bold text-slate-600 uppercase tracking-tight">
                            <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                   </div>

                   <button 
                     onClick={() => handleApply(job.title)}
                     className="mt-10 inline-flex items-center gap-4 bg-slate-900 text-white group-hover:bg-primary px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all group/btn w-full justify-center"
                   >
                     Apply Now
                     <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                   </button>
                 </motion.div>
               ))}
             </div>
           </div>

           {/* Form Section */}
           <div ref={formRef} className="max-w-4xl mx-auto scroll-mt-32">
              <div className="bg-slate-50 p-12 rounded-sm border border-black/5 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-200 pb-8">
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 uppercase tracking-widest flex items-center gap-4">
                      <span className="w-12 h-px bg-primary/20" />
                      Drop Your CV
                    </h2>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">
                      Submit your application and join the ANK elite.
                    </p>
                  </div>
                  
                  <AnimatePresence>
                    {selectedPosition && (
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="bg-primary/10 border border-primary/20 px-4 py-2 flex items-center gap-3"
                      >
                        <span className="text-[10px] font-black text-primary uppercase tracking-widest">
                          Applying for: {selectedPosition}
                        </span>
                        <button 
                          onClick={() => setSelectedPosition("")}
                          className="text-primary hover:text-slate-900 transition-colors"
                        >
                          <X size={14} />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

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
                      <input 
                        type="text" 
                        className="w-full bg-white border border-black/5 px-6 py-4 rounded-sm focus:ring-1 focus:ring-primary outline-none font-bold text-slate-900 placeholder:text-slate-300 transition-all shadow-sm" 
                        placeholder="e.g. Senior PLC Engineer" 
                        value={selectedPosition}
                        onChange={(e) => setSelectedPosition(e.target.value)}
                      />
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
        </div>
      </section>

      <MapSection />
    </PageLayout>
  )
}

export default Careers
