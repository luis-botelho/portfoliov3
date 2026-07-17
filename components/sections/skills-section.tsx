"use client"

import { motion } from "motion/react"

const groups = [
  {
    title: "Backend",
    code: "SYS.A",
    skills: [
      { name: "Node.js", tier: "Aprendendo" },
      { name: "Fastify", tier: "Aprendendo" },
      { name: "Prisma ORM", tier: "Aprendendo" },
      { name: "PostgreSQL", tier: "Aprendendo" },
    ],
  },
  {
    title: "Frontend",
    code: "SYS.B",
    skills: [
      { name: "TypeScript", tier: "Aprendendo" },
      { name: "React 19", tier: "Aprendendo" },
      { name: "Tailwind CSS v4", tier: "Aprendendo" },
      { name: "shadcn/ui", tier: "Aprendendo" },
    ],
  },
  {
    title: "Ferramentas & Padrões",
    code: "SYS.C",
    skills: [
      { name: "Express", tier: "Aprendendo" },
      { name: "React Router", tier: "Aprendendo" },
      { name: "Git / GitHub", tier: "Aprendendo" },
      { name: "Vite", tier: "Aprendendo" },
    ],
  },
]

export function SkillsSection() {
  return (
    <div className="flex h-full w-full flex-col justify-center px-[6vw] pb-[13vh] pt-[13vh] lg:pr-[16rem]">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 font-mono text-[0.625rem] uppercase tracking-[0.3em] text-primary">
            02 // Competências
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Leitura de Subsistemas
          </h2>
        </div>
        <p className="hidden max-w-xs text-right text-sm leading-relaxed text-muted-foreground md:block">
          Categorias de familiaridade em vez de métricas fixas. Reflete o uso
          em projetos reais e minha confiança atual em cada tecnologia.
        </p>
      </div>

      <div className="grid max-w-5xl gap-4 md:grid-cols-3">
        {groups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + gi * 0.1, type: "spring", stiffness: 80 }}
            className="hud-glass rounded-lg p-5 transition-all duration-300 hover:border-primary/50 hover:box-glow hover:scale-[1.015]"
          >
            <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
              <h3 className="font-mono text-sm font-medium uppercase tracking-[0.15em] text-foreground">
                {group.title}
              </h3>
              <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-primary">
                {group.code}
              </span>
            </div>

            <ul className="flex flex-col gap-4">
              {group.skills.map((skill) => (
                <li key={skill.name}>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm text-foreground">
                      {skill.name}
                    </span>
                    <span className="rounded-full border border-border bg-secondary/40 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.12em] text-primary">
                      {skill.tier}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
