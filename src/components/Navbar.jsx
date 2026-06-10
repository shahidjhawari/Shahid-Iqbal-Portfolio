import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/portfolioData'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`w-full border-b border-white/10 transition duration-500 ${
        scrolled ? 'bg-[#090909]/95 backdrop-blur-xl shadow-glass' : 'bg-transparent'
      }`}
    >
      <div className="section-container flex items-center justify-between gap-4 py-4">
        <a href="#home" className="flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-slate-200">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-base font-semibold text-slate-100">
            SI
          </span>
          <span className="font-medium text-slate-100">Shahid Iqbal</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium uppercase tracking-[0.32em] text-slate-300 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              spy
              smooth
              offset={-90}
              duration={600}
              className="cursor-pointer transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-600/70 bg-white/5 text-slate-200 md:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute inset-x-6 top-full z-40 rounded-[2rem] border border-white/10 bg-[#0d0d0d]/95 p-6 shadow-[0_35px_120px_rgba(0,0,0,0.35)] md:hidden">
          <div className="flex flex-col gap-4 text-sm uppercase tracking-[0.35em] text-slate-300">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                spy
                smooth
                offset={-90}
                duration={600}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-slate-300/20 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
