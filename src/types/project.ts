export type ProjectStatus = 'Em produção' | 'MVP concluído' | 'Em construção' | 'Fundação' | 'Laboratório' | 'Arquivado'

export type Project = {
  slug: string
  name: string
  status: ProjectStatus
  eyebrow: string
  summary: string
  problem: string
  role: string
  scope: string[]
  constraints: string[]
  architecture: string
  decisions: string
  validation: string
  currentState: string
  limitations: string[]
  nextSteps: string[]
  stack: string[]
  repository: string
  demo?: string
  images?: string[]
  featured?: boolean
}
