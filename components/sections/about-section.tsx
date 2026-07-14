"use client"

import { motion } from "motion/react"
import { ArrowRight, MapPin, Radio, Terminal } from "lucide-react"
import type { SectionId } from "../sections-config"

const stack = ["TypeScript", "React", "NestJS", "PostgreSQL", "Prisma"]

const readouts = [
  { label: "Experiência", value: "5+ anos" },
  { label: "Foco", value: "Full Stack" },
  { label: "Base", value: "Barcelona" },
]

export function AboutSection({
  onNavigate,
}: {
  onNavigate: (id: SectionId) => void
}) {
  return (
    <div className="flex h-full w-full items-center px-[6vw] pb-[15vh] pt-[13vh] lg:pr-[16rem]">
      <div className="grid w-full items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Left: identity */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1"
          >
            <span className="h-1.5 w-1.5 animate-blink rounded-full bg-primary" />
            <span className="font-mono text-[0.625rem] uppercase tracking-[0.3em] text-primary">
              Estação 01 // Perfil
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-sm uppercase tracking-[0.35em] text-muted-foreground"
          >
            Luis
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
            className="mt-3 text-balance text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Full Stack
            <br />
            <span className="text-primary text-glow">Software Engineer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38 }}
            className="mt-6 max-w-lg text-pretty leading-relaxed text-muted-foreground"
          >
            Projeto e opero sistemas full-stack confiáveis — do banco de dados
            à interface. Especializado em arquiteturas escaláveis com Node.js,
            React e PostgreSQL, com atenção a performance, acessibilidade e
            manutenção a longo prazo.
          </motion.p>

          {/* System status bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.46 }}
            className="mt-8 hud-glass rounded-md p-3"
          >
            <div className="mb-3 flex items-center gap-2 border-b border-border pb-2">
              <Radio className="h-3.5 w-3.5 text-primary" strokeWidth={1.75} />
              <span className="font-mono text-[0.625rem] uppercase tracking-[0.25em] text-muted-foreground">
                Status do Sistema
              </span>
              <span className="ml-auto flex items-center gap-1.5 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-primary">
                <span className="h-1.5 w-1.5 animate-blink rounded-full bg-primary" />
                Operacional
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-sm border border-border bg-secondary/40 px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-foreground transition-all duration-200 hover:border-primary/60 hover:text-primary hover:scale-[1.04]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.54 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button
              type="button"
              onClick={() => onNavigate("projects")}
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-all hover:scale-[1.02] hover:box-glow"
            >
              Ver Projetos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate("contact")}
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:border-primary/60 hover:text-primary"
            >
              <Terminal className="h-4 w-4" />
              Contato
            </button>
          </motion.div>
        </div>

        {/* Right: telemetry readout */}
        <motion.dl
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="hidden gap-3 md:grid"
        >
          {readouts.map((r, i) => (
            <div
              key={r.label}
              className="hud-glass flex items-center justify-between rounded-md px-5 py-4 transition-colors hover:border-primary/50"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <dt className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-muted-foreground">
                  {r.label}
                </dt>
              </div>
              <dd className="font-mono text-lg font-semibold text-foreground">
                {r.value}
              </dd>
            </div>
          ))}
          <div className="hud-glass flex items-center gap-2 rounded-md px-5 py-4 text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" strokeWidth={1.75} />
            <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em]">
              41.40°N // 2.17°E — Disponível para projetos
            </span>
          </div>
        </motion.dl>
      </div>
    </div>
  )
}
