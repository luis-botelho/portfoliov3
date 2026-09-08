import { siteUrl } from '@/lib/site'

export const profile = {
  name: 'Luis Fellype Botelho',
  shortName: 'Luis Botelho',
  title: 'Desenvolvedor Front-end / Full-Stack',
  location: 'Angra dos Reis, RJ · Brasil',
  email: 'luisfellypebotelho@gmail.com',
  github: 'https://github.com/luis-botelho',
  linkedin: 'https://www.linkedin.com/in/luis-botelho',
  site: siteUrl,
  resume: '/cv/luis-botelho-curriculo.pdf',
  summary:
    'Desenvolvedor com experiência como Front-end Dev. Júnior na OSF Digital em 2022 e passagem por suporte de TI. Estudante de Engenharia de Software, com projetos em React, TypeScript, Next.js, Node.js e Go. Minha trajetória em atendimento, operação de loja e apoio administrativo amplia o contexto que levo para o desenvolvimento de produtos digitais.',
  skills: [
    'React',
    'TypeScript',
    'Next.js',
    'JavaScript',
    'HTML',
    'CSS / Sass',
    'Node.js',
    'Go',
    'PostgreSQL',
    'Prisma',
    'Git',
    'Docker',
  ],
}

export type Experience = {
  company: string
  role: string
  period: string
  start: string
  end: string
  category:
    | 'Desenvolvimento'
    | 'Suporte de TI'
    | 'Operações'
    | 'Empreendedorismo'
    | 'Atendimento'
  description?: string
}

// Somente empregadores, cargos e períodos. O documento de origem não integra o repositório.
export const experience: Experience[] = [
  {
    company: 'Atuação em serviço de salão',
    role: 'Garçom',
    period: 'ago/2025–mai/2026',
    start: '2025-08',
    end: '2026-05',
    category: 'Atendimento',
    description:
      'Atendimento ao público e vivência na rotina de serviço de salão.',
  },
  {
    company: 'Iniciativa própria em turismo',
    role: 'Concepção de agência de turismo',
    period: 'jun/2022–fev/2023',
    start: '2022-06',
    end: '2023-02',
    category: 'Empreendedorismo',
    description:
      'Iniciativa encerrada na fase de concepção. O contato com o setor contribuiu para o repertório aplicado ao Caminhos de Mambucaba.',
  },
  {
    company: 'OSF Digital',
    role: 'Front-end Dev. Júnior',
    period: 'jan–jun/2022',
    start: '2022-01-05',
    end: '2022-06-23',
    category: 'Desenvolvimento',
    description:
      'Ajustes pontuais na interface e atualização do catálogo de produtos em ambiente Salesforce.',
  },
  {
    company: 'Virtua Max Comunicação',
    role: 'Técnico de apoio ao usuário de informática HD I',
    period: 'jul–dez/2021',
    start: '2021-07-20',
    end: '2021-12-20',
    category: 'Suporte de TI',
  },
  {
    company: 'Frade Spot Participações',
    role: 'Atendente Call Center',
    period: 'mai–jul/2026',
    start: '2026-05-18',
    end: '2026-07-01',
    category: 'Operações',
  },
  {
    company: 'KAL Atacado 2',
    role: 'Atendente de Loja',
    period: 'set/2024–ago/2025',
    start: '2024-09-18',
    end: '2025-08-29',
    category: 'Operações',
  },
  {
    company: 'KAL Atacado 2',
    role: 'Atendente de Loja',
    period: 'jan–mai/2024',
    start: '2024-01-15',
    end: '2024-05-24',
    category: 'Operações',
  },
  {
    company: 'Santa Rita Serviços Prestados',
    role: 'Repositor',
    period: 'out/2023',
    start: '2023-10-03',
    end: '2023-10-31',
    category: 'Operações',
  },
  {
    company: 'Poupe Areal Comércio de Alimentos',
    role: 'Encarregado de Loja',
    period: 'fev–set/2023',
    start: '2023-02-16',
    end: '2023-09-08',
    category: 'Operações',
  },
  {
    company: 'Poupe Mais Comércio de Alimentos',
    role: 'Reposição e apoio administrativo',
    period: 'mai/2018–jul/2021',
    start: '2018-05-19',
    end: '2021-07-12',
    category: 'Operações',
  },
]

export const institutionalExperience = {
  company: 'ICPT',
  role: 'Diretor financeiro',
  description: 'Atuação institucional formalizada por ata de posse e estatuto.',
}
