import PageLayout from '../../components/PageLayout'
import { motion } from 'framer-motion'
import { Video, Image as ImageIcon, Play, ArrowRight } from 'lucide-react'

const ImagesVideos = () => {
  return (
    <PageLayout>
      <section className="relative pt-40 pb-20 bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">Images <span className="text-indigo-500">& Videos</span></h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl font-medium">Visualizing our engineering process and manufacturing facilities.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <MediaCard type="video" title="Facility Tour 2026" />
             <MediaCard type="image" title="3D Printing Lab" />
             <MediaCard type="image" title="Team Collaboration" />
             <MediaCard type="video" title="Software Demo" />
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

const MediaCard = ({ type, title }: { type: 'image' | 'video', title: string }) => (
  <div className="relative aspect-video bg-slate-100 rounded-3xl overflow-hidden group cursor-pointer shadow-lg">
     <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
        {type === 'video' ? <Play size={64} className="text-white fill-white" /> : <ImageIcon size={64} className="text-white" />}
     </div>
     <div className="absolute bottom-0 left-0 w-full p-8 z-20">
        <h4 className="text-2xl font-black text-white uppercase tracking-tight">{title}</h4>
     </div>
  </div>
)

export default ImagesVideos
