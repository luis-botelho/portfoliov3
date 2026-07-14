"use client"

import { motion } from "motion/react"

const groups = [
  {
    title: "Backend",
    code: "SYS.A",
    skills: [
      { name: "Node.js / NestJS", level: 94 },
      { name: "PostgreSQL", level: 90 },
      { name: "Prisma ORM", level: 88 },
      { name: "REST / GraphQL", level: 86 },
    ],
  },
  {
    title: "Frontend",
    code: "SYS.B",
    skills: [
      { name: "TypeScript", level: 95 },
      { name: "React / Next.js", level: 96 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Acessibilidade (a11y)", level: 84 },
    ],
  },
  {
    title: "Infra & Ferramentas",
    code: "SYS.C",
    skills: [
      { name: "Docker", level: 87 },
      { name: "CI / CD", level: 85 },
      { name: "Redis", level: 80 },
      { name: "Testes automatizados", level: 82 },
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
          Níveis de calibração por domínio técnico. Todos os módulos
          operacionais e em uso ativo.
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
              {group.skills.map((skill, si) => (
                <li key={skill.name}>
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="text-sm text-foreground">
                      {skill.name}
                    </span>
                    <span className="font-mono text-[0.625rem] text-primary">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary/60">
                    <motion.div
                      className="h-full rounded-full bg-primary shadow-[0_0_8px_var(--glow)]"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{
                        delay: 0.3 + gi * 0.1 + si * 0.08,
                        duration: 0.7,
                        ease: "easeOut",
                      }}
                    />
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
