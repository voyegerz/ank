import { motion } from 'framer-motion'
import heroBg from '../assets/images/hero_bg.png'

interface CommonHeroProps {
  title: string
  subtitle?: string
}

const CommonHero = ({ title, subtitle }: CommonHeroProps) => {
  return (
    <section className="relative h-[60vh] flex items-center overflow-hidden bg-slate-950 pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Background" 
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-indigo-950/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter mb-6 uppercase">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed font-medium">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default CommonHero
