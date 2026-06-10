import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import { certificates } from '../data/portfolioData'

export default function Certificates() {
  return (
    <section id="certificates" className="section-container py-24">
      <div className="mx-auto max-w-5xl space-y-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.45em] text-slate-400">Certificates</p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">Verified Microsoft credentials and course completion badges</h2>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            Each certificate is professionally verified through Coursera and showcases verified learning in Microsoft-backed technologies and development workflows.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <motion.a
              key={cert.link}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-glass transition hover:-translate-y-1 hover:border-slate-400/40"
            >
              <div className="flex h-40 items-end bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-6 text-white">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-800/80 shadow-lg">
                  <Award size={32} />
                </div>
                <div className="ml-5">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-400">{cert.issuer}</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">{cert.title}</h3>
                </div>
              </div>
              <div className="space-y-4 p-6">
                <p className="text-sm leading-7 text-slate-300">{cert.description}</p>
                <div className="flex items-center justify-between gap-4 text-sm font-medium text-slate-200">
                  <span className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-2 uppercase tracking-[0.25em] text-slate-400">View Certificate</span>
                  <ExternalLink size={18} className="text-slate-400 transition group-hover:text-white" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
