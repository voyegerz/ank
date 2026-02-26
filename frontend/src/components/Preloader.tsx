import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import logo from '../assets/images/logo.png'

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
      className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center text-white"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mb-12"
      >
        <img src={logo} alt="ANK Logo" className="h-20 w-auto object-contain brightness-0 invert" />
      </motion.div>
      
      <div className="w-64 h-[2px] bg-white/10 relative overflow-hidden rounded-full">
        <motion.div 
          className="absolute inset-y-0 left-0 bg-indigo-600"
          style={{ width: `${percent}%` }}
        />
      </div>
      
      <div className="mt-6 text-[8px] uppercase tracking-[0.6em] text-white/30 font-black">
        {percent}% Innovating Excellence
      </div>
    </motion.div>
  )
}

export default Preloader
