import { profile, experience, institutionalExperience } from './profile'
import { curriculo } from '@/content/curriculo'

export const englishProfile = {
  ...profile,
  title: 'Junior Full-stack Developer',
  location: 'Angra dos Reis, RJ, Brazil',
  resume: '/cv/luis-botelho-resume.pdf',
  summary: curriculo.summary.en,
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
    'REST APIs',
    'Docker',
    'Docker Compose',
    'Git / GitHub',
    'n8n',
    'Vercel',
    'Excel / spreadsheets',
    'Salesforce (junior level: catalog and interface)',
    'Advanced English',
  ],
}

type Translation = {
  role?: string
  company?: string
  period?: string
  description?: string
}

const translations: Record<string, Translation> = {
  'Rede Fortaco Angraluz|2026-10-02': {
    role: 'Public tenders',
    period: 'since Oct 2026',
    description:
      'Full tender cycle: notice analysis, standard file, bidding and follow-up of construction material deliveries to city governments.',
  },
  'Frade Spot Participações|2026-05-18': {
    role: 'Call Center Agent',
    period: '18 May 2026 – 01 Jul 2026',
    description: 'Telephone customer service.',
  },
  'Bar do Nelson|2025-08': {
    role: 'Waiter',
    company: 'Bar do Nelson (Ilha do Cedro)',
    period: 'approx. Aug 2025 – May 2026',
    description:
      'Busy restaurant and bar floor, with no formal employment registration.',
  },
  'KAL Atacado 2|2024-09-18': {
    role: 'Store Attendant (B2B portfolio)',
    period: '18 Sep 2024 – 29 Aug 2025',
    description:
      'Role in the work card: Store Attendant. In practice, responsible for a business client portfolio with CNPJ, covering pre-sales and after-sales.',
  },
  'KAL Atacado 2|2024-01-15': {
    role: 'Store Attendant (B2B portfolio)',
    period: '15 Jan 2024 – 24 May 2024',
    description:
      'Role in the work card: Store Attendant. In practice, responsible for a business client portfolio with CNPJ, covering pre-sales and after-sales.',
  },
  'Santa Rita Serviços Prestados|2023-10-03': {
    role: 'Stocker',
    period: '03 Oct 2023 – 31 Oct 2023',
  },
  'Poupe Areal Comércio de Alimentos|2023-02-16': {
    role: 'Store Manager (acting as assistant manager)',
    period: '16 Feb 2023 – 08 Sep 2023',
    description:
      'Role in the work card: Store Manager. Handled staff, inventory, indicators and the full store routine.',
  },
  'Iniciativa própria em turismo|2022-06': {
    role: 'Travel agency conception',
    company: 'Personal initiative',
    period: 'Jun 2022 – Feb 2023',
    description:
      'An entrepreneurial initiative that never left the concept stage. The learning contributed to Caminhos de Mambucaba.',
  },
  'OSF Digital|2022-01-05': {
    role: 'Junior Front-End Developer',
    period: '05 Jan 2022 – 23 Jun 2022',
    description:
      'Salesforce CRM environment: interface adjustments, product catalog updates and bug fixes. First formal role in technology.',
  },
  'Virtua Max Comunicação|2021-07-20': {
    role: 'IT User Support Technician (Help Desk I)',
    period: '20 Jul 2021 – 20 Dec 2021',
    description:
      'First-level support: diagnosis and resolution of issues with systems, equipment and infrastructure, with ticket logging.',
  },
  'Poupe Mais Comércio de Alimentos|2018-05-19': {
    role: 'Stocker and Office Assistant at the data processing center',
    period: '19 May 2018 – 12 Jul 2021',
    description:
      'Started as a stocker and later worked as an Office Assistant at the data processing center, adjusting procedures and checking data.',
  },
}

export const englishExperience = experience.map((item) => ({
  ...item,
  ...(translations[`${item.company}|${item.start}`] ?? {}),
}))

export const englishInstitutionalExperience = {
  ...institutionalExperience,
  role: 'Finance Director',
  period: 'Current',
  description:
    'Financial management and accountability, with appointment recorded in official minutes and bylaws. Responsible for the digital platforms of Caminhos de Mambucaba and for institutional coordination with TurisAngra.',
}

export const englishCategory: Record<string, string> = {
  Desenvolvimento: 'Development',
  'Suporte de TI': 'IT support',
  Licitações: 'Public tenders',
  Operações: 'Operations',
  Empreendedorismo: 'Entrepreneurship',
  Atendimento: 'Customer service',
}
