import { motion } from 'framer-motion'

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#090909]"
    >
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex w-full max-w-md flex-col items-center gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center shadow-glass"
      >
        <div className="flex h-24 w-24 items-center justify-center rounded-full border border-slate-500/30 bg-white/5 text-2xl font-semibold tracking-[0.26em] text-slate-100">
          SI
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Premium Portfolio</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Launching refined experience</h2>
        </div>
        <div className="relative h-1 w-72 overflow-hidden rounded-full bg-slate-800">
          <motion.div
            animate={{ x: ['-110%', '110%'] }}
            transition={{ duration: 1.7, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-y-0 left-0 h-full w-24 rounded-full bg-gradient-to-r from-slate-300/40 via-white/40 to-slate-300/10"
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default LoadingScreen
