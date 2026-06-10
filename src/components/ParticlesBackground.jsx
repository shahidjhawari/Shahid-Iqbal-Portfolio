import { useCallback } from 'react'
import Particles from '@tsparticles/react'
import { loadSlim } from "@tsparticles/slim";

const options = {
  fullScreen: { enable: false },
  detectRetina: true,
  fpsLimit: 60,
  background: { color: '#0A0A0A' },
  particles: {
    number: { value: 28, density: { enable: true, area: 900 } },
    color: { value: ['#8A8A8A', '#C0C0C0', '#D9D9D9'] },
    shape: { type: 'circle' },
    opacity: { value: 0.16, random: { enable: true, minimumValue: 0.06 } },
    size: { value: { min: 1.2, max: 3.4 } },
    links: { enable: true, distance: 160, color: '#8A8A8A', opacity: 0.08, width: 1 },
    move: { enable: true, speed: 0.8, direction: 'none', outModes: 'bounce' },
  },
}

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-80">
      <Particles init={particlesInit} options={options} className="h-full w-full" />
    </div>
  )
}
