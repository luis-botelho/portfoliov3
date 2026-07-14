"use client"

import { motion } from "motion/react"
import { ArrowUpRight, Briefcase, GitBranch, Mail } from "lucide-react"

const channels = [
  {
    label: "E-mail",
    value: "luis@exemplo.com",
    href: "mailto:luis@exemplo.com",
    icon: Mail,
    code: "CH.01",
  },
  {
    label: "GitHub",
    value: "github.com/luis",
    href: "https://github.com",
    icon: GitBranch,
    code: "CH.02",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/luis",
    href: "https://linkedin.com",
    icon: Briefcase,
    code: "CH.03",
  },
]

export function ContactSection() {
  return (
    <div className="flex h-full w-full flex-col justify-center px-[6vw] pb-[13vh] pt-[13vh]">
      <div className="mb-8 max-w-2xl">
        <p className="mb-2 font-mono text-[0.625rem] uppercase tracking-[0.3em] text-primary">
          04 // Contato
        </p>
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Abrir Canal de Comunicação
        </h2>
        <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
          Disponível para oportunidades full-stack, consultorias e
          colaborações. Selecione um canal para iniciar a transmissão.
        </p>
      </div>

      <div className="grid max-w-3xl gap-3 sm:grid-cols-3">
        {channels.map((ch, i) => (
          <motion.a
            key={ch.label}
            href={ch.href}
            target={ch.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1, type: "spring", stiffness: 80 }}
            className="hud-glass group flex flex-col gap-4 rounded-lg p-5 transition-all hover:border-primary/50 hover:box-glow"
          >
            <div className="flex items-center justify-between">
              <span className="grid h-10 w-10 place-items-center rounded-md border border-border bg-secondary/40 text-primary transition-colors group-hover:border-primary/60">
                <ch.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-muted-foreground">
                {ch.code}
              </span>
            </div>
            <div>
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.25em] text-muted-foreground">
                {ch.label}
              </p>
              <p className="mt-1 flex items-center gap-1 text-sm text-foreground transition-colors group-hover:text-primary">
                {ch.value}
                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
              </p>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 font-mono text-[0.625rem] uppercase tracking-[0.3em] text-muted-foreground"
      >
        Fim da transmissão // Luis — Full Stack Software Engineer
      </motion.p>
    </div>
  )
}
