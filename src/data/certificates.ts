import catalog from './certificates.json'

export const certificates = catalog
export type Certificate = (typeof certificates)[number]
export type CertificateRelation = {
  certificateId: string
  projectSlug: string
  reason: string
}

// Relações editoriais por competência; não representam certificação do produto.
export const certificateRelations: CertificateRelation[] = [
  {
    certificateId: 'dio-TOA8DRBH',
    projectSlug: 'goomer-menu-api',
    reason:
      'Documentar arquitetura (user-flow, data-flow, ERD) antes de escrever código é a prática oposta ao vibe coding sem controle — disciplina que este certificado reforça.',
  },
  {
    certificateId: 'blue-2021-frontend-tasks',
    projectSlug: 'mini-kanban-veritas',
    reason:
      'Interfaces de tarefas em React: estado, edição e organização do fluxo.',
  },
  {
    certificateId: 'blue-2021-components-usestate',
    projectSlug: 'itera',
    reason:
      'Componentes e estado em React sustentam o formulário e a comparação de rotas.',
  },
  {
    certificateId: 'blue-2021-logica',
    projectSlug: 'itera',
    reason:
      'Lógica de programação aplicada às regras de elegibilidade e ao ranking determinístico.',
  },
  {
    certificateId: 'blue-2021-backend-final',
    projectSlug: 'safeanchor',
    reason:
      'Modelagem SQL e Prisma se conectam à persistência de embarcações e manutenções.',
  },
  {
    certificateId: 'blue-2021-crud-filmes',
    projectSlug: 'safeanchor',
    reason:
      'Fundamentos de APIs com Node.js e Express presentes nos serviços do backend.',
  },
  {
    certificateId: 'blue-2021-frontend-final',
    projectSlug: 'caminhos-de-mambucaba',
    reason:
      'Composição de interfaces React aplicada à descoberta de experiências e aos formulários.',
  },
  {
    certificateId: 'dio-I5UOYPLM',
    projectSlug: 'caminhos-de-mambucaba',
    reason:
      'Formação complementar em segurança relacionada à revisão de entradas e separação entre cliente e servidor.',
  },
  {
    certificateId: 'blue-2021-frontend-final',
    projectSlug: 'frostycamp-home',
    reason:
      'Fundamentos React presentes na composição da landing page e de suas seções.',
  },
  {
    certificateId: 'dio-TOA8DRBH',
    projectSlug: 'secureauth-web3',
    reason:
      'Formação complementar em boas práticas de segurança, temática central do laboratório.',
  },
  {
    certificateId: 'blue-2021-web-db-cloud',
    projectSlug: 'formulario-dinamico',
    reason:
      'HTML, CSS e JavaScript aplicados à construção de campos e à navegação por etapas.',
  },
  {
    certificateId: 'blue-2021-backend-final',
    projectSlug: 'goomer-menu-api',
    reason:
      'Base de TypeScript, SQL e Prisma relacionada à arquitetura planejada da API.',
  },
  {
    certificateId: 'blue-2021-jogo-humor',
    projectSlug: 'jogo-do-humor',
    reason:
      'O repositório implementa a proposta de troca de humor com HTML, CSS e JavaScript descrita no curso.',
  },
  {
    certificateId: 'blue-2021-ficcao-interativa',
    projectSlug: 'bluesoul',
    reason:
      'Afinidade entre o projeto narrativo em Python e a formação em ficção interativa; a identidade da entrega não foi confirmada.',
  },
]

export const getProjectCertificates = (slug: string) =>
  certificateRelations
    .filter((relation) => relation.projectSlug === slug)
    .map((relation) => ({
      ...relation,
      certificate: certificates.find(
        (item) => item.id === relation.certificateId,
      )!,
    }))

export const formatCertificateDate = (date: string) =>
  new Intl.DateTimeFormat('pt-BR', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T12:00:00Z`))
