import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="section-container py-24">
      <div className="mx-auto max-w-5xl space-y-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.45em] text-slate-400">Experience</p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">A curated career timeline of luxury product delivery.</h2>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glass">
          <div className="pointer-events-none absolute inset-y-8 left-10 hidden w-px bg-gradient-to-b from-slate-500/20 via-transparent to-slate-500/20 md:block" />
          <div className="grid gap-6">
            {experience.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative rounded-[1.75rem] border border-white/10 bg-[#101010]/90 p-6 pl-14 shadow-[inset_0_0_50px_rgba(255,255,255,0.02)]"
              >
                <div className="absolute left-0 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#141414]/90 text-slate-100">
                  <Briefcase size={18} />
                </div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">{item.year}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{item.role}</h3>
                <p className="mt-2 text-sm font-medium text-slate-300">{item.company}</p>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.summary}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
