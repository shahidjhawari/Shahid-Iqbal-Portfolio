import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import CustomCursor from './components/CustomCursor'
import LoadingScreen from './components/LoadingScreen'
import './index.css'

function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 1400)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <HelmetProvider>
      <Helmet>
        <title>Shahid Iqbal | Full Stack Developer</title>
        <meta
          name="description"
          content="Luxury full stack developer portfolio with premium UI, motion design, React, Tailwind CSS, and Framer Motion."
        />
      </Helmet>

      <AnimatePresence mode="wait">
        {!loaded ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative min-h-screen overflow-x-hidden bg-[#0A0A0A] text-white"
          >
            <Navbar />
            <CustomCursor />
            <main className="relative">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Services />
              <Testimonials />
              <Contact />
              <Footer />
            </main>
            <BackToTop />
            <Toaster
              position="bottom-right"
              toastOptions={{
                style: { background: '#131313', color: '#ffffff', border: '1px solid rgba(255,255,255,0.08)' },
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </HelmetProvider>
  )
}

export default App
