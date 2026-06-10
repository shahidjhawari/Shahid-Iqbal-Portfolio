import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'
import { testimonials } from '../data/portfolioData'

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const current = testimonials[active]

  return (
    <section id="testimonials" className="section-container py-24">
      <div className="mx-auto max-w-5xl space-y-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.45em] text-slate-400">Testimonials</p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">Trusted by product leaders and premium teams.</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glass"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-3 rounded-full bg-slate-900/70 px-4 py-2 text-sm uppercase tracking-[0.35em] text-slate-400">
                <Quote size={18} />
                Feedback
              </span>
              <div className="space-y-4">
                <p className="text-2xl leading-9 text-slate-200 sm:text-3xl">“{current.quote}”</p>
                <div>
                  <p className="text-xl font-semibold text-white">{current.name}</p>
                  <p className="text-sm text-slate-400">{current.role}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="inline-flex h-14 w-14 items-center justify-center rounded-3xl border border-white/10 bg-slate-900/80 text-slate-200 transition hover:border-slate-300/30"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="inline-flex h-14 w-14 items-center justify-center rounded-3xl border border-white/10 bg-slate-900/80 text-slate-200 transition hover:border-slate-300/30"
                aria-label="Next testimonial"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
