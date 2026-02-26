import PageLayout from '../../components/PageLayout'
import { motion } from 'framer-motion'

const Blogs = () => {
  return (
    <PageLayout>
      <section className="relative pt-40 pb-20 bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6"><span className="text-indigo-500">Blogs</span></h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl font-medium">Expert insights on engineering, manufacturing, and software trends.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-white text-center">
        <div className="container mx-auto px-6">
           <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase">Coming Soon</h2>
           <p className="text-slate-500 max-w-xl mx-auto font-medium">Our engineers are currently documenting their latest breakthroughs. Stay tuned for expert articles.</p>
        </div>
      </section>
    </PageLayout>
  )
}

export default Blogs
