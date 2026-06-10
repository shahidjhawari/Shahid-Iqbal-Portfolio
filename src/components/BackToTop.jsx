import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 650)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) {
    return null
  }

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-[#111111]/95 text-white shadow-glass transition hover:bg-white/10"
      aria-label="Scroll back to top"
    >
      <ChevronUp size={22} />
    </button>
  )
}
