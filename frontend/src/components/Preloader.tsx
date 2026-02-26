import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 500)
          return 100
        }
        return prev + 1
      })
    }, 20)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[100] bg-primary flex flex-col items-center justify-center text-white"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-6xl font-black tracking-tighter mb-8"
      >
        ANK<span className="text-accent">.</span>
      </motion.div>
      
      <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden">
        <motion.div 
          className="absolute inset-y-0 left-0 bg-accent"
          style={{ width: `${percent}%` }}
        />
      </div>
      
      <div className="mt-4 text-[10px] uppercase tracking-[0.5em] text-white/50 font-bold">
        {percent}% Loading Excellence
      </div>
    </motion.div>
  )
}

export default Preloader
