import { useRef, useState } from 'react'
import { sendForm } from '@emailjs/browser'
import { motion } from 'framer-motion'
import { Mail, MapPin, Smartphone } from 'lucide-react'
import { contactDetails } from '../data/portfolioData'
import toast from 'react-hot-toast'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contact() {
  const formRef = useRef(null)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = formRef.current
    const name = form.name.value.trim()
    const email = form.email.value.trim()
    const message = form.message.value.trim()

    if (!name || !email || !message) {
      toast.error('Please complete every field before sending.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email address.')
      return
    }

    setSubmitting(true)

    try {
      if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
        await sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
        toast.success('Message sent successfully.')
        form.reset()
      } else {
        toast('Email service not configured yet. Send a message directly to hello@shahidiqbal.dev', {
          icon: '✉️',
        })
      }
    } catch (error) {
      toast.error('Unable to send message. Please try again later.')
      console.error(error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-container py-24">
      <div className="mx-auto max-w-5xl space-y-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.45em] text-slate-400">Contact</p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">Let&apos;s create your next premium platform.</h2>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            Reach out for high-end React applications, API integrations, or full product builds with polished motion and thoughtful architecture.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            ref={formRef}
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glass"
          >
            <div className="grid gap-5">
              <label className="space-y-2 text-sm text-slate-300">
                <span className="font-semibold text-white">Name</span>
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-3xl border border-white/10 bg-[#0D0D0D] px-5 py-4 text-white outline-none transition focus:border-slate-300/40"
                />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                <span className="font-semibold text-white">Email</span>
                <input
                  name="email"
                  type="email"
                  placeholder="hello@example.com"
                  className="w-full rounded-3xl border border-white/10 bg-[#0D0D0D] px-5 py-4 text-white outline-none transition focus:border-slate-300/40"
                />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                <span className="font-semibold text-white">Message</span>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project or collaboration needs."
                  className="w-full resize-none rounded-[1.5rem] border border-white/10 bg-[#0D0D0D] px-5 py-4 text-white outline-none transition focus:border-slate-300/40"
                />
              </label>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex w-full items-center justify-center rounded-full bg-white/10 px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glass"
          >
            <div className="rounded-[1.75rem] bg-[#101010]/80 p-6 shadow-[inset_0_0_40px_rgba(255,255,255,0.04)]">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Get in touch</p>
              <h3 className="mt-4 text-3xl font-semibold text-white">Premium support and collaboration.</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Whether you need end-to-end product development, API architecture, or UI refinement, I respond quickly to serious collaboration inquiries.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-[#0D0D0D]/90 p-5">
                <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-3xl bg-slate-900 text-slate-100">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Email</p>
                  <p className="mt-2 text-base text-white">{contactDetails.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-[#0D0D0D]/90 p-5">
                <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-3xl bg-slate-900 text-slate-100">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Location</p>
                  <p className="mt-2 text-base text-white">{contactDetails.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-[#0D0D0D]/90 p-5">
                <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-3xl bg-slate-900 text-slate-100">
                  <Smartphone size={18} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Phone</p>
                  <p className="mt-2 text-base text-white">{contactDetails.phone}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
