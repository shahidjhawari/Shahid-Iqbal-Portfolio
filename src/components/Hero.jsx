import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowUpRight, Download, GitBranch, Link2, Mail } from 'lucide-react'
import { Link as ScrollLink } from 'react-scroll'
import ParticlesBackground from './ParticlesBackground'
import profileImg from '../assets/profile.png'

const socialLinks = [
  {
    icon: GitBranch,
    label: 'GitHub',
    href: 'https://github.com/shahidiqbal',
  },
  {
    icon: Link2,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shahidiqbal',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:hello@shahidiqbal.dev',
  },
]

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-24 md:pt-32 md:pb-28">
      <ParticlesBackground />

      <div className="section-container relative z-10 grid gap-16 lg:grid-cols-[1.25fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-slate-600/50 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.45em] text-slate-300">
            Premium Full Stack Portfolio
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.45em] text-slate-400">Hello, I am</p>
            <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
              Shahid Iqbal
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-lg text-slate-300 sm:text-xl">
              <span>Luxury digital products</span>
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-slate-400" />
              <span>Crafted for modern brands</span>
            </div>
          </div>

          <div className="text-lg leading-8 text-slate-300 sm:text-xl">
            <TypeAnimation
              sequence={['Full Stack Developer', 2400, 'React Architect', 2400, 'API Craftsman', 2400, 'Product-focused Engineer', 2400]}
              speed={45}
              repeat={Infinity}
              wrapper="span"
            />
          </div>

          <p className="max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            I design, build, and ship premium web platforms with dark luxury aesthetics, polished motion, and high performance.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-3 rounded-full border border-slate-600/60 bg-white/5 px-6 py-3 text-sm font-medium tracking-[0.12em] text-white transition hover:border-slate-300/50 hover:bg-white/10"
            >
              <Download size={16} />
              Download CV
            </a>
            <ScrollLink
              to="contact"
              spy
              smooth
              offset={-90}
              duration={650}
              className="inline-flex cursor-pointer items-center gap-3 rounded-full border border-slate-600/60 bg-slate-100/5 px-6 py-3 text-sm font-medium tracking-[0.12em] text-white transition hover:border-slate-300/50 hover:bg-slate-100/10"
            >
              Hire Me
              <ArrowUpRight size={16} />
            </ScrollLink>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-6">
            {socialLinks.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition hover:border-slate-300/40 hover:text-white"
                  aria-label={item.label}
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative mx-auto flex w-full max-w-xl items-center justify-center"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-1 shadow-glass max-w-[440px] w-full">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-[#111111] p-6 ring-1 ring-white/5">
              <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-100/10 to-transparent" />
              <div className="relative flex h-[320px] w-full items-center justify-center rounded-[1.5rem] border border-white/5 bg-gradient-to-br from-[#141414] via-[#0d0d0d] to-[#090909] shadow-[inset_0_0_80px_rgba(255,255,255,0.06)] sm:h-[420px]">
                <div className="absolute -left-10 top-16 h-28 w-28 rounded-full bg-slate-400/10 blur-3xl" />
                <div className="absolute -right-10 bottom-16 h-24 w-24 rounded-full bg-slate-200/5 blur-3xl" />
                <div className="relative flex h-full w-full max-w-[360px] items-center justify-center rounded-[2rem] border border-slate-400/10 bg-[#090909] p-2 shadow-[0_30px_90px_rgba(0,0,0,0.45)] sm:h-[360px]">
                  <img
                    src={profileImg}
                    alt="Shahid Iqbal profile"
                    className="h-full w-full rounded-[1.8rem] object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-[1.8rem] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_32%)]" />
                  <div className="pointer-events-none absolute inset-x-10 bottom-10 h-24 rounded-full bg-gradient-to-r from-slate-200/10 via-transparent to-slate-200/5 blur-2xl" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
