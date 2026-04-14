import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import logo from '../assets/images/logo.svg'

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
      className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center text-slate-900"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mb-12"
      >
        <img src={logo} alt="ANK Logo" className="h-48 md:h-64 w-auto object-contain" />
      </motion.div>
      
      <div className="w-48 h-[1px] bg-slate-100 relative overflow-hidden rounded-full">
        <motion.div 
          className="absolute inset-y-0 left-0"
          style={{ width: `${percent}%`, backgroundColor: '#010080' }}
        />
      </div>
      
      <div className="mt-6 text-[8px] uppercase tracking-[0.6em] text-slate-400 font-black">
        {percent}% Loading ...
      </div>
    </motion.div>
  )
}

export default Preloader
