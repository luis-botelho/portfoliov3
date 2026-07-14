"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import {
  Boxes,
  ChevronLeft,
  ChevronRight,
  Database,
  ExternalLink,
  GitBranch,
  Layers,
  Server,
  Sparkles,
} from "lucide-react"
import { SonarVisual, NeuralVisual } from "./project-visuals"

const projects = [
  {
    id: "safeanchor",
    codename: "SafeAnchor",
    dossier: "CASE STUDY // AX-01",
    tagline: "Solução de missão crítica",
    summary:
      "Plataforma de ancoragem de dados para o setor marítimo, projetada para manter a integridade das informações sob picos de tráfego e falhas de rede. Construída com NestJS e PostgreSQL via Prisma, com camada de cache em Redis.",
    stack: [
      { name: "NestJS", icon: Server },
      { name: "PostgreSQL", icon: Database },
      { name: "Prisma", icon: Boxes },
      { name: "Redis", icon: Layers },
    ],
    metrics: [
      { k: "Uptime", v: "99.98%" },
      { k: "Latência p99", v: "< 40ms" },
      { k: "Status", v: "Produção" },
    ],
    visual: "sonar" as const,
  },
  {
    id: "lia",
    codename: "LIA",
    dossier: "CASE STUDY // AX-02",
    tagline: "Mentoria potencializada por IA",
    summary:
      "Assistente de mentoria que conecta desenvolvedores a trilhas de aprendizado personalizadas. Uma rede neural adaptativa que interpreta objetivos e recomenda o próximo passo com precisão.",
    stack: [
      { name: "React", icon: Layers },
      { name: "Prisma", icon: Boxes },
      { name: "AI SDK", icon: Sparkles },
      { name: "PostgreSQL", icon: Database },
    ],
    metrics: [
      { k: "Usuários", v: "8.4k+" },
      { k: "Precisão", v: "92%" },
      { k: "Status", v: "Beta ativo" },
    ],
    visual: "neural" as const,
  },
]

export function ProjectsSection() {
  const [index, setIndex] = useState(0)
  const project = projects[index]

  const go = (dir: -1 | 1) =>
    setIndex((prev) => (prev + dir + projects.length) % projects.length)

  return (
    <div className="flex h-full w-full flex-col justify-center px-[6vw] pb-[13vh] pt-[13vh]">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 font-mono text-[0.625rem] uppercase tracking-[0.3em] text-primary">
            03 // Projetos
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Painéis de Diagnóstico
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-muted-foreground">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Projeto anterior"
            className="hud-glass grid h-9 w-9 place-items-center rounded-md text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Próximo projeto"
            className="hud-glass grid h-9 w-9 place-items-center rounded-md text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.article
          key={project.id}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="hud-glass grid overflow-hidden rounded-lg lg:grid-cols-[0.85fr_1.15fr]"
        >
          {/* Visual diagnostic panel */}
          <div className="relative min-h-[34vh] border-b border-border bg-background/40 lg:border-b-0 lg:border-r">
            {project.visual === "sonar" ? <SonarVisual /> : <NeuralVisual />}
            <div className="absolute left-4 top-4 font-mono text-[0.625rem] uppercase tracking-[0.25em] text-muted-foreground">
              {project.dossier}
            </div>
          </div>

          {/* Data panel */}
          <div className="flex flex-col justify-center gap-5 p-6 sm:p-9">
            <div>
              <p className="mb-1 font-mono text-[0.625rem] uppercase tracking-[0.3em] text-primary">
                {project.tagline}
              </p>
              <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {project.codename}
              </h3>
            </div>

            <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
              {project.summary}
            </p>

            {/* Tech specs with icons */}
            <div>
              <p className="mb-2 font-mono text-[0.625rem] uppercase tracking-[0.25em] text-muted-foreground">
                Especificações técnicas
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 rounded-sm border border-border bg-secondary/40 px-2.5 py-1.5 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-foreground transition-all duration-200 hover:border-primary/60 hover:text-primary hover:scale-[1.04]"
                  >
                    <tech.icon className="h-3.5 w-3.5 text-primary" strokeWidth={1.75} />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            <dl className="grid grid-cols-3 gap-3 border-t border-border pt-5">
              {project.metrics.map((m) => (
                <div key={m.k}>
                  <dd className="font-mono text-base font-semibold text-primary">
                    {m.v}
                  </dd>
                  <dt className="font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-muted-foreground">
                    {m.k}
                  </dt>
                </div>
              ))}
            </dl>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-all hover:scale-[1.02] hover:box-glow"
              >
                Launch Demo
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                <GitBranch className="h-4 w-4" />
                Código
              </a>
            </div>
          </div>
        </motion.article>
      </AnimatePresence>
    </div>
  )
}
