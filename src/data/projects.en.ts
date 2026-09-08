import { projects, featuredProjects } from './projects'
import type { Project } from '@/types/project'

type Translation = Pick<
  Project,
  | 'eyebrow'
  | 'summary'
  | 'problem'
  | 'role'
  | 'scope'
  | 'constraints'
  | 'architecture'
  | 'decisions'
  | 'validation'
  | 'currentState'
  | 'limitations'
  | 'nextSteps'
> & { name?: string; stack?: string[] }
const reviewed =
  'Public code and documentation reviewed on September 7, 2026. Running this project is outside the portfolio validation scope.'
const next = ['Expand test coverage and document upcoming deliveries.']
const study = 'Development and documentation of the learning project.'
const translations: Record<string, Translation> = {
  'formulario-dinamico': {
    name: 'Dynamic Form · GetNinjas',
    eyebrow: 'Data-driven interface',
    summary:
      'A JSON-driven, multi-step form with validation, error recovery and a native Node.js server.',
    problem:
      'Build an interface that adapts to changes in its fields without rebuilding the form by hand.',
    role: study,
    scope: [
      'JSON-driven field generation',
      'Wizard with forward, back and progress controls',
      'Required-field validation',
      'HTTP and validation tests with node:test',
    ],
    constraints: [
      'Demonstration only: no submission or persistence.',
      'Existing tests do not cover the entire browser journey.',
    ],
    architecture:
      'Node.js serves the API and static files. JavaScript interprets JSON and creates fields using DOM APIs.',
    decisions: 'Explore HTTP, DOM and state fundamentals without frameworks.',
    validation: reviewed,
    currentState:
      'A JSON-driven, multi-step form with validation, error recovery and a native Node.js server.',
    limitations: [
      'Demonstration only: no submission or persistence.',
      'Existing tests do not cover the entire browser journey.',
    ],
    nextSteps: next,
  },
  'goomer-menu-api': {
    eyebrow: 'Backend and domain modeling',
    summary:
      'The foundation of a menu API in TypeScript and Fastify, with a health check and architecture documentation.',
    problem:
      'Represent products, promotions and availability in a restaurant menu.',
    role: 'Implementation of the technical foundation and documentation of its evolution.',
    scope: [
      'Fastify server with a /health endpoint',
      'TypeScript configuration',
      'Data and flow diagrams',
      'Initial Prisma configuration',
    ],
    constraints: [
      'CRUD, promotions and persistence are not yet implemented on main.',
      'Vitest is configured, but the reviewed tree contains no tests.',
    ],
    architecture:
      'Fastify initializes the HTTP server. PostgreSQL and raw SQL are planned for queries; the Prisma configuration has no entities yet.',
    decisions:
      'Separate the runnable foundation from the product and promotion rules planned for subsequent stages.',
    validation: reviewed,
    currentState:
      'The foundation of a menu API in TypeScript and Fastify, with a health check and architecture documentation.',
    limitations: [
      'CRUD, promotions and persistence are not yet implemented on main.',
      'Vitest is configured, but the reviewed tree contains no tests.',
    ],
    nextSteps: next,
  },
  'jogo-do-humor': {
    name: 'Mood Game',
    eyebrow: 'Web fundamentals · 2021',
    summary:
      'A Blue EdTech project exploring interaction by changing a character’s visual state.',
    problem:
      'Connect HTML structure, CSS presentation and JavaScript interaction on a small page.',
    role: study,
    scope: [
      'Static page',
      'Character and visual-state changes',
      'Local styles and images',
    ],
    constraints: [
      'An educational project from 2021; no current deployment is claimed.',
    ],
    architecture: 'Separate HTML, CSS and JavaScript, without a framework.',
    decisions: 'Learn interface manipulation through direct interaction.',
    validation: reviewed,
    currentState:
      'A Blue EdTech project exploring interaction by changing a character’s visual state.',
    limitations: [
      'An educational project from 2021; no current deployment is claimed.',
    ],
    nextSteps: next,
  },
  bluesoul: {
    eyebrow: 'Interactive narrative · Python',
    summary:
      'A narrative game in Python with story, character and status modules, accompanied by audio using PyGame.',
    problem: 'Organize narrative, choices and state in a programming project.',
    role: study,
    scope: [
      'Story, function and class modules',
      'Game state',
      'Audio resources',
    ],
    constraints: [
      'A learning project from 2021.',
      'Current compatibility and game execution have not been verified.',
    ],
    architecture:
      'Python organizes the story, classes and functions; the README lists PyGame, random and time.',
    decisions:
      'Split the game into modules to practice logic and code organization.',
    validation: reviewed,
    currentState:
      'A narrative game in Python with story, character and status modules, accompanied by audio using PyGame.',
    limitations: [
      'A learning project from 2021.',
      'Current compatibility and game execution have not been verified.',
    ],
    nextSteps: next,
  },
  'caminhos-de-mambucaba': {
    eyebrow: 'Local discovery and community',
    summary:
      'A published platform bringing together local experiences, community participation and data from the Mambucaba Observatory.',
    problem:
      'Experiences, initiatives, community requests and public information about Mambucaba were scattered across different channels.',
    role: 'Product conception, interface development, content modeling and full-stack implementation.',
    scope: [
      'Experiences, map, accommodation and personalized itineraries',
      'Initiative and community-request registration with tracking numbers',
      'Observatory, library and public dashboards',
      'Technical SEO and redirects from the legacy website',
    ],
    constraints: [
      'Start with an MVP scope',
      'Use real project data and images',
      'Keep deployment simple',
    ],
    architecture:
      'Next.js 16 and React 19 render pages and APIs; Supabase/PostgreSQL stores registrations and requests on the server; Leaflet supports maps, while Vercel deploys and monitors the application.',
    decisions:
      'Prioritize direct discovery, form privacy and a content structure that can grow without hiding the community behind visual effects.',
    validation:
      'Lint and production build, use of published flows and review of the main navigation paths.',
    currentState: 'MVP published at caminhosdemambucaba.live.',
    limitations: [
      'The product depends on the continued development and curation of local content.',
    ],
    nextSteps: [
      'Expand the catalog',
      'Develop community participation features further',
    ],
  },
  'mini-kanban-veritas': {
    eyebrow: 'Workflow and API',
    summary:
      'A full-stack MVP that turns CRUD operations into a navigable, testable workflow.',
    problem:
      'A team needs to create, edit, move and delete tasks predictably, without keeping state only in the interface.',
    role: 'Frontend and backend implementation, flow design and technical documentation.',
    scope: [
      'Task CRUD',
      'REST API',
      'Accessible drag-and-drop',
      'User Flow and Data Flow',
    ],
    constraints: [
      'Current storage is in memory',
      'Keep concurrency safe with RWMutex',
      'Deliver a small, understandable feature set',
    ],
    architecture:
      'React and TypeScript power the interface; Go with Chi exposes the REST API; RWMutex protects in-memory storage; Docker reproduces the environment.',
    decisions:
      'Treat in-memory storage as an explicit MVP limitation, while separating UI, API and domain to make a future storage replacement clear.',
    validation:
      'Backend tests, CRUD flow checks and accessibility review of the board.',
    currentState: 'MVP completed; data does not survive restarts.',
    limitations: ['This version has no persistent database.'],
    nextSteps: ['Add persistence', 'Develop authentication and collaboration'],
  },
  itera: {
    eyebrow: 'MMORPG companion',
    summary:
      'A web MVP that compares progression paths and explains a character’s next step using auditable rules.',
    problem:
      'MMORPG guides offer many options but rarely explain which path matches the character, goal and acceptable risk at a given moment.',
    role: 'Product vision, rule definition, initial architecture and interface implementation.',
    scope: [
      'Character profile and goal selection',
      'Validated forms',
      'Comparison of three paths',
      'Accessible recommendations with explanations',
    ],
    constraints: [
      'Small local catalog without dynamic data',
      'No backend, database or AI yet',
      'Explore the hypothesis before expanding the scope',
    ],
    architecture:
      'React and TypeScript with Vite form the web application in a pnpm workspace; Sass styles the interface; React Hook Form and Zod validate data; the Path Engine filters eligibility and calculates a deterministic ranking entirely in the browser.',
    decisions:
      'Keep rules auditable before adding AI to reduce risk, explain recommendations and validate the journey before building an API and persistence.',
    validation:
      'The repository includes Path Engine tests, lint and build commands, and inline form validation.',
    currentState:
      'Web MVP with a local Path Engine: eligibility, scoring and up to three explained recommendations.',
    limitations: [
      'Limited local catalog; no backend, database, authentication or AI.',
    ],
    nextSteps: [
      'Validate path comparisons with players',
      'Define the API and persistence after validating the journey',
    ],
  },
  safeanchor: {
    eyebrow: 'Vessel maintenance',
    summary:
      'A system under development to organize vessels, maintenance and inspection routines.',
    problem:
      'Scattered maintenance and inspection records make operations less reliable for owners and small fleets.',
    role: 'Product design and implementation of the frontend, backend and persistence.',
    scope: [
      'Vessel CRUD and details',
      'Corrective and preventive maintenance',
      'Dashboard and maintenance histories',
      'Checklist templates and runs',
      'Inspection history',
      'Reproducible development seed',
    ],
    constraints: [
      'Project still under development',
      'Complete authentication, document management and the maritime academy have not been delivered',
      'No mobile application or AI features at this stage',
      'No production availability is claimed',
    ],
    architecture:
      'React 19 frontend with Vite and MVVM architecture; Node.js API with Express 5, controllers and services; PostgreSQL on Supabase with Prisma 7.',
    decisions:
      'Start with structured vessel, maintenance and inspection records to build a reliable source before expanding the product.',
    validation:
      'API tests with the native Node.js runner, persistence smoke test, Prisma validation and generation, and frontend build.',
    currentState:
      'Web flows for vessels, maintenance and checklists are under construction in the repository; the product is not in production.',
    limitations: [
      'The final experience and functional coverage are still evolving.',
      'The documented Next.js/NestJS architecture is a future direction, not the current implementation.',
    ],
    nextSteps: [
      'Consolidate the main flows',
      'Validate with users from the domain',
    ],
  },
  lia: {
    eyebrow: 'Local employment and services',
    summary:
      'From local needs to architecture: product vision, journeys, data modeling and technical decisions to connect talent and opportunities in Mambucaba.',
    problem:
      'Connecting opportunities, services and people requires understanding the community, its trust relationships and local talent before building a platform.',
    role: 'Research, product vision, domain modeling and foundation documentation.',
    scope: [
      'Product vision, personas and indicators for Mambucaba',
      'Nine user flows: registration, services, jobs, reviews and communication',
      'Data model, API specification and ten architecture decision records',
      'Epics, user stories and foundation sprint planning',
      'Community employment',
      'Local services',
      'Trust between participants',
      'Talent-pool conception',
    ],
    constraints: [
      'No product is in production yet',
      'The implementation stack is planned, not demonstrated in product code',
    ],
    architecture:
      'The documentation foundation is complete. React, React Native, Node.js, Prisma and PostgreSQL appear only as planned architecture for a later stage.',
    decisions:
      'Document the community, trust relationships, opportunities and services before promising a finished platform.',
    validation:
      'Review of the documentation foundation, product artifacts and scope recorded in the repository.',
    currentState:
      'Documentation foundation completed; no product is in production yet.',
    limitations: [
      'No product implementation is in production.',
      'Planned technologies must not be presented as delivered.',
    ],
    nextSteps: [
      'Validate needs with the Mambucaba community',
      'Prioritize the first employment and services scope',
      'Define an MVP based on local evidence',
    ],
    stack: ['Documentation', 'Product research', 'Domain modeling'],
  },
  'frostycamp-home': {
    eyebrow: 'Landing page and digital communities',
    summary:
      'An institutional landing page presenting FrostyCamp’s proposition, services and methodology.',
    problem:
      'FrostyCamp needed to communicate its work in communities, growth and digital strategy through an organized, responsive web presence.',
    role: 'Interface development, section organization, responsive design and visual component integration.',
    scope: [
      'Hero and responsive navigation',
      'Services and methodology presentation',
      'Strategy section',
      'Team carousel',
      'Contact interface',
    ],
    constraints: [
      'Originally developed in 2023',
      'Create React App codebase retained as a legacy project',
      'Some media depends on external services',
      'The current form submission flow needs review',
    ],
    architecture:
      'A React 18 SPA with Create React App, styled-components, react-awesome-reveal and react-slick.',
    decisions:
      'Organize the narrative as a landing page with sections, using motion to support the presentation of services and community.',
    validation:
      'Review of the code, responsive components and flows in the repository. No automated test coverage is claimed.',
    currentState:
      'A 2023 landing page with an active public URL, verified in September 2026. Retained as a legacy project; form submission still needs review.',
    limitations: [
      'The original README still has little documentation',
      'External media may stop working',
      'The contact flow needs review before reuse',
      'The stack and dependencies are a legacy codebase',
    ],
    nextSteps: [
      'Improve the repository README',
      'Replace external media with local assets',
    ],
  },
  'secureauth-web3': {
    eyebrow: 'Academic study',
    summary: 'An academic study of authentication and Web3.',
    problem:
      'Investigate identity and authentication concepts in an academic context.',
    role: 'Research and experimental implementation.',
    scope: [
      'Technical research',
      'Express backend with authentication routes',
      'JWT generation and security middleware',
    ],
    constraints: ['Not presented as a professional product'],
    architecture:
      'Node.js and Express backend with JWT and security middleware. The reviewed tree contains authentication code and tests; it does not contain the React interface described in the README vision.',
    decisions:
      'Keep this project separate from the main products to preserve its academic context.',
    validation:
      'Reading and running the study according to the repository documentation.',
    currentState: 'Academic study.',
    limitations: ['Not a product in production.'],
    nextSteps: ['Consolidate lessons in the study archive'],
  },
}
export const englishProjects: Project[] = projects.map((project) => ({
  ...project,
  ...translations[project.slug],
  cover: project.cover
    ? {
        ...project.cover,
        alt: `${translations[project.slug].name ?? project.name} — ${project.cover.src.endsWith('.svg') ? 'editorial illustration' : 'project interface'}`,
        caption:
          project.slug === 'frostycamp-home'
            ? 'Published landing page, verified in September 2026.'
            : project.cover.src.endsWith('.svg')
              ? 'Editorial illustration of the project concept.'
              : 'Project interface image.',
      }
    : undefined,
}))
export const englishFeaturedProjects = featuredProjects.map((project) =>
  englishProjects.find((item) => item.slug === project.slug)!,
)
