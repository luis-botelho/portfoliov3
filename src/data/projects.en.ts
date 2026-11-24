import { projects, featuredProjects, studyProjects } from './projects'
import type { Project } from '@/types/project'

type Translatable =
  | 'eyebrow'
  | 'summary'
  | 'problem'
  | 'role'
  | 'architecture'
  | 'decisions'
  | 'validation'
  | 'currentState'
type ListKey = 'scope' | 'constraints' | 'limitations' | 'stack'
type Translation = Partial<Pick<Project, Translatable | ListKey>> & {
  name?: string
  coverAlt?: string
  coverCaption?: string
}

const translations: Record<string, Translation> = {
  'caminhos-de-mambucaba': {
    eyebrow: 'Territorial platform',
    summary:
      'Territorial platform in production, with an MVP published at caminhosdemambucaba.live.',
    problem:
      'Bring the experiences, map, initiatives and requests of the Mambucaba territory together in one place.',
    role: 'Product conception, interface, content modeling and full-stack implementation.',
    scope: [
      'Experiences and map',
      'Registration of initiatives and requests with protocol numbers',
      'Export of records to text, JSON and PDF',
      'Observatory and technical SEO',
      'Redirects from the previous WordPress site',
    ],
    constraints: ['Published MVP', 'No access metrics in the case'],
    architecture:
      'Next.js 16, React 19, TypeScript, Tailwind, Leaflet and Supabase/PostgreSQL with RLS, published on Vercel.',
    decisions:
      'Keep experiences, map, registrations and the observatory in one territorial platform with its own content model.',
    validation: 'MVP published at caminhosdemambucaba.live.',
    currentState: 'Platform in production, with a published MVP.',
    limitations: ['There are no access metrics in the case.'],
    stack: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind',
      'Leaflet',
      'Supabase/PostgreSQL with RLS',
      'Vercel',
    ],
  },
  'goomer-menu-api': {
    eyebrow: 'Menu API',
    summary:
      'REST menu API with products and time-based promotions. Completed MVP, running locally and with no deployment.',
    problem: 'Represent products and time-based promotions in a menu API.',
    role: 'Implementation of the API and unit tests.',
    scope: [
      'Products and time-based promotions',
      'Plain SQL, with Prisma only for migrations',
      'TypeBox and manual transactions',
      'Layered architecture',
      'Unit tests with Vitest',
      'Docker Compose',
    ],
    constraints: ['Runs locally, with no deployment', 'No authentication', 'No pagination'],
    architecture:
      'TypeScript, Fastify, Node.js and PostgreSQL 16, with plain SQL and Prisma only for migrations.',
    decisions:
      'Keep plain SQL for operations, use Prisma only for migrations and organize the code in layers.',
    validation: 'Unit tests with Vitest.',
    currentState: 'Completed MVP, running locally and with no deployment.',
    limitations: ['No authentication.', 'No pagination.', 'No deployment.'],
    stack: [
      'TypeScript',
      'Fastify',
      'Node.js',
      'PostgreSQL 16',
      'Plain SQL',
      'Prisma (migrations)',
      'TypeBox',
      'Vitest',
      'Docker Compose',
    ],
  },
  'mini-kanban-veritas': {
    eyebrow: 'API and interface',
    summary:
      'Go API with Chi, React/TypeScript interface, Docker, backend tests and a keyboard alternative to drag-and-drop. Completed MVP.',
    problem:
      'Provide a navigable task board with an API, an interface and backend tests.',
    role: 'Implementation of the Go API and the React/TypeScript interface.',
    scope: [
      'Go API with Chi',
      'React/TypeScript interface',
      'Backend tests',
      'Docker',
      'Keyboard alternative to drag-and-drop',
    ],
    constraints: ['Completed MVP'],
    architecture: 'Go API with Chi and a React/TypeScript interface, run with Docker.',
    decisions: 'Include a keyboard alternative to drag-and-drop on the task board.',
    validation: 'Backend tests.',
    currentState: 'Completed MVP.',
    limitations: [],
    stack: ['Go', 'Chi', 'React', 'TypeScript', 'Docker'],
  },
  safeanchor: {
    eyebrow: 'Boats and inspections',
    summary:
      'System for boats, maintenance and inspections. Completed MVP, with a published web demo.',
    problem: 'Organize boats, maintenance and inspections in a web system.',
    role: 'Implementation of the interface and API, plus documented domain modeling.',
    scope: [
      'Boats, maintenance and inspections',
      'React 19 and Vite on the interface',
      'Node.js and Express 5 on the API',
      'Documented domain modeling',
      'Experimental intake agent with LangGraph, Ollama and Supabase',
    ],
    constraints: ['Completed MVP', 'Published web demo'],
    architecture:
      'React 19 and Vite interface with a Node.js and Express 5 API, plus documented domain modeling.',
    decisions:
      'Document the domain of boats, maintenance and inspections and keep the intake agent experimental.',
    validation: 'Completed MVP, with a published web demo.',
    currentState: 'Completed MVP, with a published web demo.',
    limitations: [],
    stack: [
      'React 19',
      'Vite',
      'Node.js',
      'Express 5',
      'LangGraph',
      'Ollama',
      'Supabase',
    ],
  },
  itera: {
    eyebrow: 'MMORPG companion',
    summary: 'MMORPG companion web app with auditable rules. Completed MVP.',
    problem: 'Present auditable rules in an MMORPG companion web app.',
    role: 'Implementation of the interface and rules.',
    scope: ['MMORPG companion web app', 'Auditable rules'],
    constraints: ['Completed MVP'],
    architecture: 'React 19, TypeScript, Vite and Sass.',
    decisions: 'Keep the companion rules auditable.',
    validation: 'Completed MVP.',
    currentState: 'Completed MVP.',
    limitations: [],
    stack: ['React 19', 'TypeScript', 'Vite', 'Sass'],
  },
  lia: {
    eyebrow: 'Local services',
    summary:
      'Local services platform in its foundation: documentation, domain modeling and parts of the code.',
    problem:
      'Structure a local services platform from documentation and domain modeling.',
    role: 'Documentation, domain modeling and parts of the code.',
    scope: [
      'Documentation',
      'Domain modeling',
      'Parts of the code with Fastify, Prisma, PostgreSQL, React and TanStack Query',
    ],
    constraints: ['In its foundation'],
    architecture:
      'Fastify, Prisma, PostgreSQL, React and TanStack Query appear in the code produced so far.',
    decisions: 'Start with documentation and domain modeling for the platform.',
    validation: 'Documentation, domain modeling and parts of the code.',
    currentState: 'In its foundation.',
    limitations: [],
    stack: ['Fastify', 'Prisma', 'PostgreSQL', 'React', 'TanStack Query'],
  },
  'lia-operating-system': {
    eyebrow: 'Agent architecture',
    summary:
      'Documented and paused architecture study of AI agent orchestration with n8n, Docker and PostgreSQL.',
    problem:
      'Document AI agent orchestration with GitHub Issues as the source of truth.',
    role: 'Architecture study.',
    scope: [
      'Orchestration with n8n, Docker and PostgreSQL',
      'Workers for analysis, code generation and GitOps',
      'GitHub Issues as the source of truth',
    ],
    constraints: ['Documented and paused study'],
    architecture: 'n8n, Docker and PostgreSQL, with GitHub Issues as the source of truth.',
    decisions: 'Record the architecture as a study, not as a product.',
    validation: 'Documented architecture.',
    currentState: 'Paused architecture study.',
    limitations: [],
    stack: ['n8n', 'Docker', 'PostgreSQL', 'GitHub Issues'],
  },
  'formulario-dinamico': {
    eyebrow: 'Lab',
    summary:
      'HTML, CSS and JavaScript applied to field construction and step-by-step navigation.',
    scope: ['Field construction', 'Step-by-step navigation'],
    currentState: 'Laboratory project.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    coverAlt:
      'Editorial illustration of modular fields and step-by-step navigation for the dynamic form lab',
    coverCaption: 'Editorial cover of the Formulário Dinâmico laboratory project.',
  },
  'secureauth-web3': {
    eyebrow: 'Lab',
    summary: 'Laboratory project kept among the studies.',
    currentState: 'Laboratory project.',
  },
  'frostycamp-home': {
    eyebrow: 'Legacy',
    summary: 'Legacy project.',
    currentState: 'Legacy project.',
  },
  bluesoul: {
    eyebrow: 'Legacy',
    summary: 'Legacy project.',
    currentState: 'Legacy project.',
  },
  'jogo-do-humor': {
    name: 'Mood Game',
    eyebrow: 'Legacy',
    summary: 'Legacy project.',
    currentState: 'Legacy project.',
  },
}

const textKeys: Translatable[] = [
  'eyebrow',
  'summary',
  'problem',
  'role',
  'architecture',
  'decisions',
  'validation',
  'currentState',
]
const listKeys: ListKey[] = ['scope', 'constraints', 'limitations', 'stack']

function localize(project: Project): Project {
  const translation = translations[project.slug] ?? {}
  const result: Project = { ...project, ...translation }
  for (const key of textKeys) result[key] = translation[key] ?? ''
  for (const key of listKeys) result[key] = translation[key] ?? []
  result.cover = project.cover
    ? {
        ...project.cover,
        alt:
          translation.coverAlt ??
          `${translation.name ?? project.name} — project image`,
        caption: translation.coverCaption ?? 'Project image.',
      }
    : undefined
  return result
}

export const englishProjects: Project[] = projects.map(localize)
export const englishFeaturedProjects = featuredProjects.map(localize)
export const englishStudyProjects = studyProjects.map(localize)
