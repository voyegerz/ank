import PageLayout from '../../components/PageLayout'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const PressNewsroom = () => {
  return (
    <PageLayout>
      <section className="relative pt-40 pb-20 bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">Press <span className="text-indigo-500">& Newsroom</span></h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl font-medium">The latest updates, media releases, and corporate news from ANK.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             <NewsCard title="ANK Launches New IoT Platform" date="Feb 20, 2026" />
             <NewsCard title="Strategic Partnership with Global Robotics" date="Jan 15, 2026" />
             <NewsCard title="Awarded Excellence in Design 2025" date="Dec 10, 2025" />
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

const NewsCard = ({ title, date }: { title: string, date: string }) => (
  <div className="p-8 bg-slate-50 rounded-3xl border border-transparent hover:border-indigo-100 hover:bg-white hover:shadow-xl transition-all cursor-pointer group">
    <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-4 block">{date}</span>
    <h4 className="text-xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors uppercase leading-tight mb-6">{title}</h4>
    <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest group-hover:text-indigo-600 transition-colors">Read More <ArrowRight size={14} /></div>
  </div>
)

export default PressNewsroom
