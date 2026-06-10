import { motion } from 'framer-motion'
import { PlayCircle } from 'lucide-react'
import { youtubeChannel } from '../data/portfolioData'

export default function YouTubeChannel() {
  return (
    <section id="youtube" className="section-container py-24">
      <div className="mx-auto max-w-5xl space-y-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.45em] text-slate-400">YouTube Channel</p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">Subscribe for premium MERN and full stack tutorials.</h2>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            Join the channel for React, Node.js, Express, MongoDB, and PHP/MySQL guides that help you build polished real-world applications.
          </p>
        </div>

        <motion.a
          href={youtubeChannel.link}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-glass transition hover:-translate-y-1 hover:border-slate-400/40"
        >
          <div className="grid gap-0 sm:grid-cols-[0.9fr_1.1fr]">
            <div className="relative flex min-h-[220px] items-end overflow-hidden bg-gradient-to-br from-red-700 via-slate-900 to-slate-950 p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.12),_transparent_24%)]" />
              <div className="relative z-10 flex items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-black/40 text-white shadow-lg">
                  <PlayCircle size={36} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-200">Official channel</p>
                  <h3 className="mt-3 text-3xl font-semibold text-white">{youtubeChannel.title}</h3>
                </div>
              </div>
            </div>

            <div className="flex items-center border-t border-white/10 bg-[#0d0d0d]/80 p-8 text-slate-300 sm:border-t-0 sm:border-l sm:p-10">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Channel</p>
                <p className="mt-4 text-2xl font-semibold text-white">{youtubeChannel.handle}</p>
                <p className="mt-5 leading-7 text-slate-300">{youtubeChannel.description}</p>
                <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition group-hover:bg-white/10">
                  Visit channel
                </p>
              </div>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  )
}
