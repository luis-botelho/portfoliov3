"use client"

import { motion } from "motion/react"
import { ChevronLeft, ChevronRight, Compass } from "lucide-react"
import type { SectionId } from "./sections-config"
import { SECTIONS } from "./sections-config"

// Angle (deg) each section sits at around the compass ring
const ANGLES: Record<SectionId, number> = {
  about: -90,
  skills: 0,
  projects: 90,
  contact: 180,
}

const RADIUS = 42 // % of the compass box for node placement

function polar(angleDeg: number, radius: number) {
  const a = (angleDeg * Math.PI) / 180
  return {
    x: 50 + radius * Math.cos(a),
    y: 50 + radius * Math.sin(a),
  }
}

export function LiahonaCompass({
  active,
  onNavigate,
}: {
  active: SectionId
  onNavigate: (id: SectionId) => void
}) {
  const activeIndex = SECTIONS.findIndex((s) => s.id === active)
  const go = (dir: -1 | 1) => {
    const next = (activeIndex + dir + SECTIONS.length) % SECTIONS.length
    onNavigate(SECTIONS[next].id)
  }

  return (
    <div className="pointer-events-auto absolute bottom-[3vh] right-[3vw] z-40 flex flex-col items-center gap-3">
      {/* Steering arrows */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Seção anterior"
          className="hud-glass grid h-8 w-8 place-items-center rounded-full text-muted-foreground transition-colors hover:text-primary"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          Liahona
        </span>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Próxima seção"
          className="hud-glass grid h-8 w-8 place-items-center rounded-full text-muted-foreground transition-colors hover:text-primary"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Compass dial */}
      <div className="relative hidden h-[9.5rem] w-[9.5rem] sm:block sm:h-[11rem] sm:w-[11rem]">
        {/* outer glow ring */}
        <div className="hud-glass absolute inset-0 rounded-full box-glow" />
        <div className="absolute inset-2 rounded-full border border-primary/25" />
        <div className="absolute inset-5 rounded-full border border-border" />

        {/* rotating sweep */}
        <div className="absolute inset-5 overflow-hidden rounded-full">
          <div className="animate-sweep h-full w-full origin-center">
            <div className="absolute left-1/2 top-0 h-1/2 w-1/2 origin-bottom-left [background:conic-gradient(from_0deg,transparent,color-mix(in_oklch,var(--glow)_35%,transparent))]" />
          </div>
        </div>

        {/* tick marks */}
        {Array.from({ length: 24 }).map((_, i) => {
          const p = polar(i * 15, 46)
          return (
            <span
              key={i}
              className="absolute h-1 w-px -translate-x-1/2 -translate-y-1/2 bg-border"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
            />
          )
        })}

        {/* needle */}
        <motion.div
          className="absolute inset-0 grid place-items-center"
          animate={{ rotate: ANGLES[active] + 90 }}
          transition={{ type: "spring", stiffness: 90, damping: 14 }}
        >
          <div className="relative flex h-[62%] w-[2px] flex-col justify-between">
            <span className="h-1/2 w-full rounded-full bg-primary shadow-[0_0_10px_var(--glow)]" />
            <span className="h-1/2 w-full rounded-full bg-muted-foreground/50" />
          </div>
        </motion.div>

        {/* center hub */}
        <div className="absolute left-1/2 top-1/2 z-10 grid h-8 w-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-primary/50 bg-card">
          <Compass className="h-4 w-4 text-primary" strokeWidth={1.75} />
        </div>

        {/* section nodes */}
        {SECTIONS.map((s) => {
          const p = polar(ANGLES[s.id], RADIUS)
          const isActive = s.id === active
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => onNavigate(s.id)}
              aria-label={`Ir para ${s.label}`}
              aria-current={isActive ? "true" : undefined}
              className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
            >
              <span
                className={`grid h-6 w-6 place-items-center rounded-full border font-mono text-[9px] transition-all ${
                  isActive
                    ? "border-primary bg-primary text-primary-foreground shadow-[0_0_12px_var(--glow)]"
                    : "border-border bg-card text-muted-foreground hover:border-primary/60 hover:text-primary"
                }`}
              >
                {s.code}
              </span>
            </button>
          )
        })}
      </div>

      {/* active label */}
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary text-glow">
        {SECTIONS[activeIndex]?.label}
      </p>
    </div>
  )
}
