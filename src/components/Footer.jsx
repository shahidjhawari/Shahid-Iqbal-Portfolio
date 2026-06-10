import { GitBranch, Link2 } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090909]/90 py-8">
      <div className="section-container flex flex-col items-center justify-between gap-6 text-center text-sm text-slate-400 sm:flex-row sm:text-left">
        <div>
          <p className="text-white">© {new Date().getFullYear()} Shahid Iqbal.</p>
          <p>Designed and developed for premium digital presence.</p>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/shahidiqbal" target="_blank" rel="noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-slate-300/40 hover:text-white">
            <GitBranch size={18} />
          </a>
          <a href="https://www.linkedin.com/in/shahidiqbal" target="_blank" rel="noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-slate-300/40 hover:text-white">
            <Link2 size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
