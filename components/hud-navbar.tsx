"use client"

import { Activity, Radio, Satellite } from "lucide-react"
import type { SectionId } from "./sections-config"
import { SECTIONS } from "./sections-config"

export function HudNavbar({
  active,
  onNavigate,
}: {
  active: SectionId
  onNavigate: (id: SectionId) => void
}) {
  return (
    <header className="pointer-events-auto relative z-40 shrink-0 px-[3vw] pt-4">
      <div className="hud-glass flex items-center justify-between gap-4 rounded-md px-4 py-2.5">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="relative grid h-9 w-9 place-items-center">
            <span className="absolute inset-0 rounded-sm border border-primary/40" />
            <span className="absolute inset-0 animate-pulse-ring rounded-sm border border-primary/50" />
            <Satellite className="h-4 w-4 text-primary" strokeWidth={1.75} />
          </div>
          <div className="leading-none">
            <p className="font-mono text-sm font-medium tracking-[0.25em] text-foreground">
              LUIS<span className="text-primary">_</span>OS
            </p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Mission Control v4.1
            </p>
          </div>
        </div>

        {/* Section tabs (desktop) */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Seções">
          {SECTIONS.map((s) => {
            const isActive = s.id === active
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => onNavigate(s.id)}
                aria-current={isActive ? "page" : undefined}
                className={`group relative rounded-sm px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="mr-1.5 text-[9px] opacity-60">
                  {s.code}
                </span>
                {s.label}
                {isActive && (
                  <span className="absolute inset-x-2 -bottom-0.5 h-px bg-primary shadow-[0_0_8px_var(--glow)]" />
                )}
              </button>
            )
          })}
        </nav>

        {/* Status indicators */}
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-1.5 sm:flex">
            <Radio className="h-3.5 w-3.5 text-primary" strokeWidth={1.75} />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Uplink
            </span>
            <span className="h-1.5 w-1.5 animate-blink rounded-full bg-primary shadow-[0_0_8px_var(--glow)]" />
          </div>
          <div className="flex items-center gap-1.5">
            <Activity className="h-3.5 w-3.5 text-chart-4" strokeWidth={1.75} />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Online
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
