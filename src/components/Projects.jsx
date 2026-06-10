import { motion } from 'framer-motion'
import { ArrowRight, GitBranch } from 'lucide-react'
import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="section-container py-24">
      <div className="mx-auto max-w-5xl space-y-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.45em] text-slate-400">Projects</p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">Premium digital experiences that convert.</h2>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            Each project blends polished animation, smart engineering, and a premium dark aesthetic.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-glass"
            >
              <div
                className="h-52 bg-cover bg-center"
                style={{ backgroundImage: project.gradient }}
              />
              <div className="space-y-5 p-6">
                <div className="flex items-center justify-between gap-4 text-sm uppercase tracking-[0.35em] text-slate-400">
                  <span>{project.category}</span>
                  <span className="text-slate-300">Featured</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-400">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-100/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-100/15"
                  >
                    Live Demo
                    <ArrowRight size={16} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm font-medium text-slate-300 transition hover:border-slate-300/30 hover:text-white"
                  >
                    <GitBranch size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
