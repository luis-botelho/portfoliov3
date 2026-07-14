"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Starfield } from "./starfield"
import { HudNavbar } from "./hud-navbar"
import { LiahonaCompass } from "./liahona-compass"
import { AboutSection } from "./sections/about-section"
import { SkillsSection } from "./sections/skills-section"
import { ProjectsSection } from "./sections/projects-section"
import { ContactSection } from "./sections/contact-section"
import { SECTIONS, type SectionId } from "./sections-config"

export function MissionControl() {
  const [booted, setBooted] = useState(false)
  const [active, setActive] = useState<SectionId>("about")
  const [direction, setDirection] = useState(1)

  const navigate = (id: SectionId) => {
    const from = SECTIONS.findIndex((s) => s.id === active)
    const to = SECTIONS.findIndex((s) => s.id === id)
    setDirection(to >= from ? 1 : -1)
    setActive(id)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!booted) return
      const i = SECTIONS.findIndex((s) => s.id === active)
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        navigate(SECTIONS[(i + 1) % SECTIONS.length].id)
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        navigate(SECTIONS[(i - 1 + SECTIONS.length) % SECTIONS.length].id)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, booted])

  return (
    <main className="relative h-[100dvh] w-[100vw] overflow-hidden bg-background">
      {/* backdrop layers */}
      <div className="grid-backdrop absolute inset-0" aria-hidden="true" />
      <Starfield />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, transparent 40%, color-mix(in oklch, var(--background) 70%, black) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Boot / entering-the-site 3D intro */}
      <AnimatePresence>
        {!booted && (
          <BootSequence key="boot" onEnter={() => setBooted(true)} />
        )}
      </AnimatePresence>

      {booted && (
        <>
          <HudNavbar active={active} onNavigate={navigate} />

          {/* 3D scene */}
          <div className="scene-perspective absolute inset-0">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.section
                key={active}
                custom={direction}
                initial={{ opacity: 0, scale: 1.35, z: -400, rotateX: 6 }}
                animate={{ opacity: 1, scale: 1, z: 0, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.65, z: -300 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 [transform-style:preserve-3d]"
              >
                {active === "about" && <AboutSection onNavigate={navigate} />}
                {active === "skills" && <SkillsSection />}
                {active === "projects" && <ProjectsSection />}
                {active === "contact" && <ContactSection />}
              </motion.section>
            </AnimatePresence>
          </div>

          <LiahonaCompass active={active} onNavigate={navigate} />
        </>
      )}
    </main>
  )
}

function BootSequence({ onEnter }: { onEnter: () => void }) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 1400)
    return () => clearTimeout(t)
  }, [])

  return (
    <motion.div
      className="absolute inset-0 z-50 grid place-items-center bg-background scene-perspective"
      exit={{ opacity: 0, scale: 1.6, filter: "blur(8px)" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col items-center gap-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative grid h-20 w-20 place-items-center"
        >
          <span className="absolute inset-0 rounded-full border border-primary/40" />
          <span className="absolute inset-0 animate-pulse-ring rounded-full border border-primary/60" />
          <span className="h-3 w-3 rounded-full bg-primary shadow-[0_0_18px_var(--glow)]" />
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-xs uppercase tracking-[0.4em] text-primary"
          >
            Inicializando Mission Control
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            LUIS<span className="text-primary text-glow">_OS</span>
          </motion.h1>
        </div>

        {/* progress bar */}
        <div className="h-px w-56 overflow-hidden bg-border">
          <motion.div
            className="h-full bg-primary shadow-[0_0_8px_var(--glow)]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.3, ease: "easeInOut" }}
          />
        </div>

        <AnimatePresence>
          {ready && (
            <motion.button
              type="button"
              onClick={onEnter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="group inline-flex items-center gap-2 rounded-md border border-primary/50 bg-primary/10 px-6 py-3 font-mono text-xs uppercase tracking-[0.3em] text-primary transition-transform hover:scale-[1.03] box-glow"
            >
              Entrar na Ponte
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
