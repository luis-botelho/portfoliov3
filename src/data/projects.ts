import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    slug: 'caminhos-de-mambucaba', name: 'Caminhos de Mambucaba', status: 'Em produção', featured: true,
    eyebrow: 'Descoberta territorial e comunidade',
    summary: 'MVP publicado para organizar experiências, iniciativas e referências de um território real.',
    problem: 'A descoberta de experiências e iniciativas comunitárias de Mambucaba estava espalhada em canais diferentes.',
    role: 'Concepção do produto, interface, modelagem do conteúdo e implementação full-stack.',
    scope: ['Catálogo de experiências', 'Navegação por território', 'Conteúdo editorial e comunitário'],
    constraints: ['Começar com escopo de MVP', 'Usar dados e imagens reais do projeto', 'Manter publicação simples'],
    architecture: 'Next.js e React renderizam a experiência; Supabase/PostgreSQL sustenta o conteúdo; Vercel publica a aplicação.',
    decisions: 'Priorizei uma descoberta direta e uma estrutura de conteúdo que pode crescer sem esconder o território atrás de efeitos visuais.',
    validation: 'Validação por uso do fluxo publicado e revisão dos principais caminhos de navegação.',
    currentState: 'MVP publicado em caminhosdemambucaba.live.', limitations: ['O produto depende da evolução e curadoria do conteúdo do território.'],
    nextSteps: ['Ampliar o catálogo', 'Aprofundar recursos de participação comunitária'],
    stack: ['Next.js', 'React', 'TypeScript', 'Supabase/PostgreSQL', 'Vercel'],
    repository: 'https://github.com/luis-botelho/instituto-platform', demo: 'https://caminhosdemambucaba.live',
    images: ['/images/hero-mambucaba.png', '/images/observatorio.png', '/images/exp-natureza.png'],
  },
  {
    slug: 'mini-kanban-veritas', name: 'Mini Kanban Veritas', status: 'MVP concluído', featured: true,
    eyebrow: 'Fluxo de trabalho e API', summary: 'MVP full-stack que transforma um CRUD em um fluxo de trabalho navegável e testável.',
    problem: 'Uma equipe precisa criar, editar, mover e excluir tarefas com previsibilidade, sem depender de estado apenas na interface.',
    role: 'Implementação do frontend e backend, desenho dos fluxos e documentação técnica.', scope: ['CRUD de tarefas', 'API REST', 'Drag-and-drop acessível', 'User Flow e Data Flow'],
    constraints: ['Persistência atual em memória', 'Manter concorrência segura com RWMutex', 'Entregar uma superfície pequena e compreensível'],
    architecture: 'React e TypeScript formam a interface; Go com Chi expõe a API REST; RWMutex protege o armazenamento em memória; Docker reproduz o ambiente.',
    decisions: 'A persistência em memória é assumida como limite do MVP, enquanto a separação entre UI, API e domínio deixa a troca futura explícita.',
    validation: 'Testes do backend, verificação dos fluxos de CRUD e revisão de acessibilidade no quadro.',
    currentState: 'MVP concluído; os dados não persistem entre reinicializações.', limitations: ['Não há banco de dados persistente nesta versão.'],
    nextSteps: ['Adicionar persistência', 'Evoluir autenticação e colaboração'], stack: ['React', 'TypeScript', 'Go', 'Chi', 'Docker'],
    repository: 'https://github.com/luis-botelho/desafio-fullstack-veritas', images: ['docs/assets/home.png', 'demo.gif', 'drag-drop.png'],
  },
  {
    slug: 'itera', name: 'Itera', status: 'Fundação', featured: true, eyebrow: 'Produto e aprendizagem',
    summary: 'Fundação do MVP web para recomendações de aprendizagem com regras claras antes de qualquer IA.',
    problem: 'Recomendações úteis precisam partir de contexto e regras explicáveis, não de uma promessa opaca de inteligência.',
    role: 'Visão de produto, definição de regras, arquitetura inicial e implementação da interface.', scope: ['Fluxos de onboarding', 'Formulários validados', 'Roadmap de produto', 'Regras auditáveis'],
    constraints: ['Recomendações ainda mockadas', 'Backend, banco e IA ainda não existem', 'Explorar a hipótese antes de ampliar o escopo'],
    architecture: 'React e TypeScript com Vite; Sass para a interface; React Hook Form e Zod para entrada e validação.',
    decisions: 'Manter regras auditáveis antes de IA reduz risco e torna o aprendizado do produto observável.', validation: 'Validação dos formulários e revisão dos fluxos de produto no frontend.',
    currentState: 'Fundação do MVP web.', limitations: ['As recomendações são mockadas; não há backend, banco ou IA.'], nextSteps: ['Validar a hipótese com usuários', 'Definir API e persistência'],
    stack: ['React', 'TypeScript', 'Vite', 'Sass', 'React Hook Form', 'Zod'], repository: 'https://github.com/luis-botelho/itera', images: ['apps/web/public/map-texture.png'],
  },
  {
    slug: 'safeanchor', name: 'SafeAnchor', status: 'Em construção', eyebrow: 'Manutenção de embarcações', summary: 'Sistema em desenvolvimento para organizar manutenção, segurança e documentação de embarcações.',
    problem: 'Informações de manutenção e documentação dispersas tornam a rotina de proprietários e pequenas frotas mais frágil.', role: 'Desenho do produto e implementação da base web e de serviços.', scope: ['Cadastro de embarcações', 'Base para histórico de manutenção', 'Arquitetura de dados'], constraints: ['Projeto ainda em desenvolvimento', 'Não afirmar disponibilidade em produção'], architecture: 'React/Vite na interface; Express nos serviços; PostgreSQL/Supabase e Prisma na persistência.', decisions: 'Começar pelo registro estruturado para que futuras alertas e rotinas tenham fonte confiável.', validation: 'Revisão da arquitetura e dos fluxos implementados no repositório.', currentState: 'Em desenvolvimento; não está em produção.', limitations: ['A experiência final e a cobertura funcional ainda estão em evolução.'], nextSteps: ['Consolidar os fluxos principais', 'Validar com usuários do domínio'], stack: ['React', 'Vite', 'Express', 'PostgreSQL/Supabase', 'Prisma'], repository: 'https://github.com/luis-botelho/safeanchor-monorepo',
  },
  {
    slug: 'lia', name: 'LIA', status: 'Fundação', eyebrow: 'Empregabilidade local', summary: 'Fundação e documentação de uma plataforma local de empregabilidade e serviços para Mambucaba.', problem: 'Conectar oportunidades, serviços e pessoas exige entender o território e suas relações antes de construir a plataforma.', role: 'Exploração de produto e documentação inicial.', scope: ['Visão de produto', 'Documentação de domínio'], constraints: ['Ainda não representa um produto em produção'], architecture: 'Fundação documental do projeto; arquitetura de implementação ainda não está comprovada.', decisions: 'Documentar o problema antes de prometer uma plataforma pronta.', validation: 'Revisão dos artefatos e do escopo no repositório.', currentState: 'Foundation/documentação.', limitations: ['Não é um produto em produção.'], nextSteps: ['Validar necessidades locais', 'Definir um MVP'], stack: ['Documentação', 'Produto'], repository: 'https://github.com/luis-botelho/liahona',
  },
  {
    slug: 'secureauth-web3', name: 'SecureAuth Web3', status: 'Laboratório', eyebrow: 'Estudo acadêmico', summary: 'Estudo acadêmico sobre autenticação e Web3.', problem: 'Investigar conceitos de identidade e autenticação em um contexto acadêmico.', role: 'Estudo e implementação experimental.', scope: ['Pesquisa técnica'], constraints: ['Não é apresentado como produto profissional'], architecture: 'Escopo experimental documentado no repositório.', decisions: 'Manter o projeto separado dos produtos principais para preservar seu contexto acadêmico.', validation: 'Leitura e execução do estudo conforme documentação do repositório.', currentState: 'Estudo acadêmico.', limitations: ['Não representa produto em produção.'], nextSteps: ['Consolidar aprendizados no arquivo de estudos'], stack: ['Web3'], repository: 'https://github.com/luis-botelho/SecureAuth-Web3',
  },
]

export const featuredProjects = projects.filter((project) => project.featured)
export const getProject = (slug: string) => projects.find((project) => project.slug === slug)
export const filterProjects = (status?: Project['status']) => status ? projects.filter((project) => project.status === status) : projects
