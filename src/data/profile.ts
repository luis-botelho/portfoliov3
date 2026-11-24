import { siteUrl } from '@/lib/site'
import { curriculo } from '@/content/curriculo'

export const profile = {
  name: 'Luis Fellype Botelho',
  shortName: 'Luis Fellype Botelho',
  title: 'Desenvolvedor Full-stack Júnior',
  location: 'Angra dos Reis, RJ · Brasil',
  email: 'luisfellypebotelho@gmail.com',
  github: 'https://github.com/luis-botelho',
  linkedin: 'https://www.linkedin.com/in/luis-botelho',
  site: siteUrl,
  resume: '/cv/luis-botelho-curriculo.pdf',
  summary: curriculo.summary.pt,
  skills: [
    'TypeScript',
    'JavaScript',
    'Go',
    'SQL',
    'React',
    'Next.js',
    'HTML',
    'CSS / Sass',
    'Node.js',
    'Fastify',
    'PostgreSQL',
    'MySQL',
    'Prisma',
    'Supabase',
    'APIs REST',
    'Docker',
    'Docker Compose',
    'Git / GitHub',
    'n8n',
    'Vercel',
    'Excel / planilhas',
    'Salesforce (nível júnior: catálogo e interface)',
    'Inglês avançado',
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
    | 'Licitações'
    | 'Operações'
    | 'Empreendedorismo'
    | 'Atendimento'
  description?: string
}

// Apenas fatos do CONTEXTO. O documento de origem não integra o repositório.
export const experience: Experience[] = [
  {
    company: 'Rede Fortaco Angraluz',
    role: 'Licitações',
    period: 'desde out/2026',
    start: '2026-10-02',
    end: '2026-10-02',
    category: 'Licitações',
    description:
      'Ciclo do edital à entrega: análise de exigências, pasta padronizada, pregão e acompanhamento da entrega de materiais de construção a prefeituras.',
  },
  {
    company: 'Frade Spot Participações',
    role: 'Atendente de Call Center',
    period: '18/05/2026–01/07/2026',
    start: '2026-05-18',
    end: '2026-07-01',
    category: 'Atendimento',
    description: 'Atendimento telefônico.',
  },
  {
    company: 'Bar do Nelson',
    role: 'Garçom',
    period: 'ago/2025–mai/2026 (aprox.)',
    start: '2025-08',
    end: '2026-05',
    category: 'Atendimento',
    description:
      'Salão de restaurante e bar com alto movimento, sem carteira assinada.',
  },
  {
    company: 'KAL Atacado 2',
    role: 'Atendente de Loja (carteira B2B)',
    period: '18/09/2024–29/08/2025',
    start: '2024-09-18',
    end: '2025-08-29',
    category: 'Operações',
    description:
      'Cargo na CTPS: Atendente de Loja. Na prática, responsável pela carteira de clientes com CNPJ, com pré e pós-venda.',
  },
  {
    company: 'KAL Atacado 2',
    role: 'Atendente de Loja (carteira B2B)',
    period: '15/01/2024–24/05/2024',
    start: '2024-01-15',
    end: '2024-05-24',
    category: 'Operações',
    description:
      'Cargo na CTPS: Atendente de Loja. Na prática, responsável pela carteira de clientes com CNPJ, com pré e pós-venda.',
  },
  {
    company: 'Santa Rita Serviços Prestados',
    role: 'Repositor',
    period: '03/10/2023–31/10/2023',
    start: '2023-10-03',
    end: '2023-10-31',
    category: 'Operações',
  },
  {
    company: 'Poupe Areal Comércio de Alimentos',
    role: 'Encarregado de Loja (atuação como subgerente)',
    period: '16/02/2023–08/09/2023',
    start: '2023-02-16',
    end: '2023-09-08',
    category: 'Operações',
    description:
      'Cargo registrado na CTPS: Encarregado de Loja. Equipe, estoque, indicadores e rotina completa da loja.',
  },
  {
    company: 'Iniciativa própria em turismo',
    role: 'Concepção de agência de turismo',
    period: 'jun/2022–fev/2023',
    start: '2022-06',
    end: '2023-02',
    category: 'Empreendedorismo',
    description:
      'Empreendedorismo que não saiu da fase de concepção. O aprendizado contribuiu para o Caminhos de Mambucaba.',
  },
  {
    company: 'Poupe Mais Comércio de Alimentos',
    role: 'Repositor e Auxiliar de Escritório no CPD',
    period: '19/05/2018–12/07/2021',
    start: '2018-05-19',
    end: '2021-07-12',
    category: 'Operações',
    description:
      'Começou como Repositor e passou a atuar como Auxiliar de Escritório no Centro de Processamento de Dados, com ajustes de procedimentos e conferência de dados.',
  },
]

export const institutionalExperience = {
  company: 'ICPT (Instituto Cidadania e Políticas Territoriais)',
  role: 'Diretor Financeiro',
  period: 'Atual',
  description:
    'Gestão financeira e prestação de contas, com posse formalizada por ata e estatuto. Responsável pelas plataformas digitais do Caminhos de Mambucaba e pela articulação institucional junto à TurisAngra.',
}
