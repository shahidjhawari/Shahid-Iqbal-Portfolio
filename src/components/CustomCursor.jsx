import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [hover, setHover] = useState(false)

  useEffect(() => {
    const handleMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }

    const handleHover = (event) => {
      const target = event.target
      const interactive = target.closest('a,button,input,textarea,select,label,[role="button"]')
      setHover(Boolean(interactive))
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseover', handleHover)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseover', handleHover)
    }
  }, [])

  return (
    <>
      <motion.div
        animate={{ x: position.x - 14, y: position.y - 14, scale: hover ? 1.6 : 1 }}
        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
        className="pointer-events-none fixed hidden h-8 w-8 rounded-full border border-slate-300/80 bg-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.12)] md:block"
        style={{ zIndex: 9999 }}
      />
      <motion.div
        animate={{ x: position.x - 30, y: position.y - 30, opacity: hover ? 0.25 : 0.12 }}
        transition={{ ease: 'easeOut', duration: 0.25 }}
        className="pointer-events-none fixed hidden h-16 w-16 rounded-full border border-slate-300/20 bg-gradient-to-br from-white/10 to-transparent md:block"
        style={{ zIndex: 9998 }}
      />
    </>
  )
}
