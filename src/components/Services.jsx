import { motion } from 'framer-motion'
import { Code2, Server, LayoutGrid, Layers } from 'lucide-react'
import { services } from '../data/portfolioData'

const iconMap = {
  'Frontend Development': Code2,
  'Backend Development': Server,
  'UI/UX Design': LayoutGrid,
  'API Integration': Layers,
}

export default function Services() {
  return (
    <section id="services" className="section-container py-24">
      <div className="mx-auto max-w-5xl space-y-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.45em] text-slate-400">Services</p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">High-end services for modern digital products.</h2>
        </div>

        <div className="grid gap-6 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.title] || Code2
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: index * 0.08 }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glass transition hover:-translate-y-1 hover:border-slate-300/30"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-900 text-slate-100">
                  <Icon size={22} />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
