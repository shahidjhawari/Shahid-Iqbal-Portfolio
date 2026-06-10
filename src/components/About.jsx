import { motion } from 'framer-motion'
import { Award, BookOpen, Sparkles } from 'lucide-react'
import { aboutStats, aboutTimeline } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about" className="section-container relative py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
          <p className="text-sm uppercase tracking-[0.45em] text-slate-400">About Me</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Designing premium web experiences with precision and speed.</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            I build polished digital products for ambitious brands. My work blends modern frontend craft, reliable backend architecture, and intuitive UX in one cohesive package.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.1 }} className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glass">
            <div className="grid gap-6 sm:grid-cols-2">
              {aboutStats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/10 bg-[#101010]/80 p-6">
                  <p className="text-4xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-3 text-sm uppercase tracking-[0.28em] text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-[#0E0E0E]/80 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-white/5 text-slate-100">
                  <Award size={20} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">Vision-led delivery</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  I translate product strategy into clean, intuitive interfaces with consistent interaction systems.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[#0E0E0E]/80 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-white/5 text-slate-100">
                  <Sparkles size={20} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">Polished engineering</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Every UI component, motion, and API contract is built with stability, performance, and scalability in mind.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.2 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glass">
            <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-[#111111]/80 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-800 text-slate-100">
                <BookOpen size={20} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Education</p>
                <p className="mt-3 text-lg font-semibold text-white">BS Computer Science</p>
              </div>
            </div>
            <div className="mt-8 space-y-6">
              {aboutTimeline.map((item) => (
                <div key={item.year} className="rounded-3xl border border-white/10 bg-[#111111]/80 p-6">
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-400">{item.year}</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{item.company}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{item.details}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
