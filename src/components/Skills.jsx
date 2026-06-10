import { motion } from 'framer-motion'
import { skills } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="section-container py-24">
      <div className="mx-auto max-w-5xl space-y-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.45em] text-slate-400">Skills</p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">Technical expertise with precision and polish.</h2>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            I bring a premium combination of frontend, backend, and cloud skills together to build elegant web products that run beautifully.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="group rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glass"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-lg font-semibold text-white">{skill.name}</p>
                <p className="text-sm uppercase tracking-[0.32em] text-slate-400">{skill.level}%</p>
              </div>
              <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-900">
                <div className="h-full rounded-full bg-gradient-to-r from-slate-200 via-white to-slate-400 transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                {skill.name} expertise with modern best practices, performance optimizations, and developer quality.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
