import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    slug: 'formulario-dinamico',
    cover: {
      src: '/images/projects/formulario.png',
      alt: 'Apresentação do formulário dinâmico do projeto de estudo GetNinjas',
      caption: 'Imagem de apresentação mantida no repositório do projeto.',
    },
    name: 'Formulário Dinâmico · GetNinjas',
    status: 'Laboratório',
    featured: false,
    eyebrow: 'Interface orientada por dados',
    summary:
      'Formulário por etapas gerado a partir de JSON, com validação, recuperação de erros e servidor Node.js nativo.',
    problem:
      'Criar uma interface que acompanhe mudanças nos campos sem reconstruir o formulário manualmente.',
    role: 'Desenvolvimento e documentação do projeto de estudo.',
    scope: [
      'Geração de campos a partir de JSON',
      'Wizard com avanço, retorno e progresso',
      'Validação de campos obrigatórios',
      'Testes HTTP e de validação com node:test',
    ],
    constraints: [
      'Conclusão demonstrativa, sem envio ou persistência.',
      'Testes existentes não cobrem toda a navegação no navegador.',
    ],
    architecture:
      'Node.js entrega a API e os arquivos estáticos. JavaScript interpreta o JSON e compõe os campos com APIs do DOM.',
    decisions: 'Explorar os fundamentos de HTTP, DOM e estado sem frameworks.',
    validation:
      'Revisão do código e da documentação pública em 07/09/2026. A execução deste projeto não faz parte da validação do portfólio.',
    currentState:
      'Formulário por etapas gerado a partir de JSON, com validação, recuperação de erros e servidor Node.js nativo.',
    limitations: [
      'Conclusão demonstrativa, sem envio ou persistência.',
      'Testes existentes não cobrem toda a navegação no navegador.',
    ],
    nextSteps: [
      'Evoluir a cobertura de testes e documentar as próximas entregas.',
    ],
    stack: ['JavaScript', 'Node.js', 'HTML', 'CSS', 'node:test'],
    repository: 'https://github.com/luis-botelho/frontend-challenge-solution',
    readme: {
      repository: 'luis-botelho/frontend-challenge-solution',
      branch: 'master',
      path: 'README.md',
    },
  },
  {
    slug: 'goomer-menu-api',
    name: 'Goomer Menu API',
    status: 'Em construção',
    featured: false,
    eyebrow: 'Backend e modelagem de domínio',
    summary:
      'Base de uma API de cardápio em TypeScript e Fastify, com health check e documentação de arquitetura.',
    problem:
      'Representar produtos, promoções e disponibilidade de um cardápio de restaurante.',
    role: 'Implementação da base técnica e documentação da evolução.',
    scope: [
      'Servidor Fastify com endpoint /health',
      'Configuração TypeScript',
      'Diagramas de dados e fluxos',
      'Configuração inicial do Prisma',
    ],
    constraints: [
      'CRUD, promoções e persistência ainda não implementados na branch main.',
      'Vitest está configurado, mas a árvore revisada não contém testes.',
    ],
    architecture:
      'Fastify inicializa o servidor HTTP. PostgreSQL e SQL puro estão previstos para consultas; a configuração Prisma ainda não possui entidades.',
    decisions:
      'Separar a fundação executável das regras de produtos e promoções, que serão implementadas nas próximas etapas.',
    validation:
      'Revisão do código e da documentação pública em 07/09/2026. A execução deste projeto não faz parte da validação do portfólio.',
    currentState:
      'Base de uma API de cardápio em TypeScript e Fastify, com health check e documentação de arquitetura.',
    limitations: [
      'CRUD, promoções e persistência ainda não implementados na branch main.',
      'Vitest está configurado, mas a árvore revisada não contém testes.',
    ],
    nextSteps: [
      'Evoluir a cobertura de testes e documentar as próximas entregas.',
    ],
    stack: ['TypeScript', 'Fastify', 'Node.js'],
    repository: 'https://github.com/luis-botelho/goomer-backend',
    readme: {
      repository: 'luis-botelho/goomer-backend',
      branch: 'main',
      path: 'readme.md',
    },
  },
  {
    slug: 'jogo-do-humor',
    name: 'Jogo do Humor',
    status: 'Legado',
    featured: false,
    eyebrow: 'Fundamentos web · 2021',
    summary:
      'Projeto da Blue EdTech que explora interatividade com a troca de estado visual de um personagem.',
    problem:
      'Conectar estrutura HTML, apresentação CSS e interação JavaScript em uma página pequena.',
    role: 'Desenvolvimento e documentação do projeto de estudo.',
    scope: [
      'Página estática',
      'Troca de personagem e estado visual',
      'Estilos e imagens locais',
    ],
    constraints: [
      'Projeto educacional de 2021; sem afirmação de deploy atual.',
    ],
    architecture: 'HTML, CSS e JavaScript separados, sem framework.',
    decisions:
      'Aprender manipulação da interface a partir de uma interação direta.',
    validation:
      'Revisão do código e da documentação pública em 07/09/2026. A execução deste projeto não faz parte da validação do portfólio.',
    currentState:
      'Projeto da Blue EdTech que explora interatividade com a troca de estado visual de um personagem.',
    limitations: [
      'Projeto educacional de 2021; sem afirmação de deploy atual.',
    ],
    nextSteps: [
      'Evoluir a cobertura de testes e documentar as próximas entregas.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
    repository: 'https://github.com/luis-botelho/humor',
    readme: {
      repository: 'luis-botelho/humor',
      branch: 'master',
      path: 'README.md',
    },
  },
  {
    slug: 'bluesoul',
    name: 'BlueSoul',
    status: 'Legado',
    featured: false,
    eyebrow: 'Narrativa interativa · Python',
    summary:
      'Jogo narrativo em Python com módulos de história, personagens e status, acompanhado de áudio com PyGame.',
    problem:
      'Organizar narrativa, escolhas e estado em um projeto de programação.',
    role: 'Desenvolvimento e documentação do projeto de estudo.',
    scope: [
      'Módulos de história, funções e classes',
      'Estado do jogo',
      'Recursos de áudio',
    ],
    constraints: [
      'Projeto de aprendizagem de 2021.',
      'Compatibilidade atual e execução do jogo não foram verificadas.',
    ],
    architecture:
      'Python organiza história, classes e funções; o README registra uso de PyGame, random e time.',
    decisions:
      'Dividir o jogo em módulos para exercitar lógica e organização do código.',
    validation:
      'Revisão do código e da documentação pública em 07/09/2026. A execução deste projeto não faz parte da validação do portfólio.',
    currentState:
      'Jogo narrativo em Python com módulos de história, personagens e status, acompanhado de áudio com PyGame.',
    limitations: [
      'Projeto de aprendizagem de 2021.',
      'Compatibilidade atual e execução do jogo não foram verificadas.',
    ],
    nextSteps: [
      'Evoluir a cobertura de testes e documentar as próximas entregas.',
    ],
    stack: ['Python', 'PyGame'],
    repository: 'https://github.com/luis-botelho/BlueSoul',
    readme: {
      repository: 'luis-botelho/BlueSoul',
      branch: 'main',
      path: 'README.md',
    },
  },
  {
    slug: 'caminhos-de-mambucaba',
    name: 'Caminhos de Mambucaba',
    status: 'Em produção',
    featured: true,
    eyebrow: 'Descoberta territorial e comunidade',
    summary:
      'Plataforma territorial publicada que reúne experiências, participação comunitária e dados do Observatório Mambucaba.',
    problem:
      'Experiências, iniciativas, demandas comunitárias e informações públicas de Mambucaba estavam dispersas em canais diferentes.',
    role: 'Concepção do produto, interface, modelagem do conteúdo e implementação full-stack.',
    scope: [
      'Experiências, mapa, hospedagem e roteiro personalizado',
      'Cadastro de iniciativas e demandas com protocolo',
      'Observatório, biblioteca e painéis públicos',
      'SEO técnico e redirecionamentos do site legado',
    ],
    constraints: [
      'Começar com escopo de MVP',
      'Usar dados e imagens reais do projeto',
      'Manter publicação simples',
    ],
    architecture:
      'Next.js 16 e React 19 renderizam páginas e APIs; Supabase/PostgreSQL persiste cadastros e demandas no servidor; Leaflet sustenta os mapas e a Vercel publica e monitora a aplicação.',
    decisions:
      'Priorizei descoberta direta, privacidade dos formulários e uma estrutura de conteúdo capaz de crescer sem esconder o território atrás de efeitos visuais.',
    validation:
      'Lint e build de produção, uso dos fluxos publicados e revisão dos principais caminhos de navegação.',
    currentState: 'MVP publicado em caminhosdemambucaba.live.',
    limitations: [
      'O produto depende da evolução e curadoria do conteúdo do território.',
    ],
    nextSteps: [
      'Ampliar o catálogo',
      'Aprofundar recursos de participação comunitária',
    ],
    stack: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'Leaflet',
      'Supabase/PostgreSQL',
      'Vercel',
    ],
    repository: 'https://github.com/luis-botelho/instituto-platform',
    demo: 'https://caminhosdemambucaba.live',
    readme: {
      repository: 'luis-botelho/instituto-platform',
      branch: 'main',
      path: 'README.md',
    },
    images: [
      '/images/hero-mambucaba.png',
      '/images/observatorio.png',
      '/images/exp-natureza.png',
    ],
  },
  {
    slug: 'mini-kanban-veritas',
    cover: {
      src: '/images/projects/veritas.png',
      alt: 'Interface do Mini Kanban com três colunas de tarefas',
      caption: 'Captura da interface fornecida pelo repositório do projeto.',
    },
    name: 'Mini Kanban Veritas',
    status: 'MVP concluído',
    featured: true,
    eyebrow: 'Fluxo de trabalho e API',
    summary:
      'MVP full-stack que transforma um CRUD em um fluxo de trabalho navegável e testável.',
    problem:
      'Uma equipe precisa criar, editar, mover e excluir tarefas com previsibilidade, sem depender de estado apenas na interface.',
    role: 'Implementação do frontend e backend, desenho dos fluxos e documentação técnica.',
    scope: [
      'CRUD de tarefas',
      'API REST',
      'Drag-and-drop acessível',
      'User Flow e Data Flow',
    ],
    constraints: [
      'Persistência atual em memória',
      'Manter concorrência segura com RWMutex',
      'Entregar uma superfície pequena e compreensível',
    ],
    architecture:
      'React e TypeScript formam a interface; Go com Chi expõe a API REST; RWMutex protege o armazenamento em memória; Docker reproduz o ambiente.',
    decisions:
      'A persistência em memória é assumida como limite do MVP, enquanto a separação entre UI, API e domínio deixa a troca futura explícita.',
    validation:
      'Testes do backend, verificação dos fluxos de CRUD e revisão de acessibilidade no quadro.',
    currentState:
      'MVP concluído; os dados não persistem entre reinicializações.',
    limitations: ['Não há banco de dados persistente nesta versão.'],
    nextSteps: ['Adicionar persistência', 'Evoluir autenticação e colaboração'],
    stack: ['React', 'TypeScript', 'Go', 'Chi', 'Docker'],
    repository: 'https://github.com/luis-botelho/desafio-fullstack-veritas',
    images: ['docs/assets/home.png', 'demo.gif', 'drag-drop.png'],
    readme: {
      repository: 'luis-botelho/desafio-fullstack-veritas',
      branch: 'main',
      path: 'README.md',
    },
  },
  {
    slug: 'itera',
    name: 'Itera',
    status: 'MVP concluído',
    featured: false,
    eyebrow: 'Companion para MMORPG',
    summary:
      'MVP web que compara rotas de progressão e explica o próximo passo de um personagem com regras auditáveis.',
    problem:
      'Guias de MMORPG oferecem muitas opções, mas raramente explicam qual rota combina com o personagem, o objetivo e o risco aceito naquele momento.',
    role: 'Visão de produto, definição das regras, arquitetura inicial e implementação da interface.',
    scope: [
      'Perfil de personagem e escolha de objetivo',
      'Formulários validados',
      'Comparação de três rotas',
      'Recomendações explicadas e acessíveis',
    ],
    constraints: [
      'Catálogo local pequeno, sem dados dinâmicos',
      'Backend, banco e IA ainda não existem',
      'Explorar a hipótese antes de ampliar o escopo',
    ],
    architecture:
      'React e TypeScript com Vite formam a aplicação web em um workspace pnpm; Sass cuida da interface; React Hook Form e Zod validam os dados; o Path Engine filtra elegibilidade e calcula um ranking determinístico inteiramente no navegador.',
    decisions:
      'Manter regras auditáveis antes de IA reduz risco, explica cada recomendação e permite validar a jornada antes de criar API e persistência.',
    validation:
      'O repositório inclui testes do Path Engine, comandos de lint e build e validação inline dos formulários.',
    currentState:
      'MVP web com Path Engine local: elegibilidade, pontuação e até três recomendações explicadas.',
    limitations: [
      'Catálogo local limitado; não há backend, banco, autenticação ou IA.',
    ],
    nextSteps: [
      'Validar a comparação de rotas com jogadores',
      'Definir API e persistência após validar a jornada',
    ],
    stack: [
      'React 19',
      'TypeScript',
      'Vite',
      'Sass',
      'React Hook Form',
      'Zod',
      'pnpm workspaces',
      'Docker',
    ],
    repository: 'https://github.com/luis-botelho/itera',
    images: ['apps/web/public/map-texture.png'],
    readme: {
      repository: 'luis-botelho/itera',
      branch: 'main',
      path: 'README.md',
    },
  },
  {
    slug: 'safeanchor',
    name: 'SafeAnchor',
    status: 'Em construção',
    featured: true,
    eyebrow: 'Manutenção de embarcações',
    summary:
      'Sistema em desenvolvimento para organizar embarcações, manutenções e rotinas de inspeção.',
    problem:
      'Informações de manutenção e inspeção dispersas tornam a rotina de proprietários e pequenas frotas mais frágil.',
    role: 'Desenho do produto e implementação do frontend, backend e persistência.',
    scope: [
      'CRUD e detalhes de embarcações',
      'Manutenção corretiva e preventiva',
      'Dashboard e históricos de manutenção',
      'Templates e execuções de checklists',
      'Histórico de inspeções',
      'Seed de desenvolvimento reproduzível',
    ],
    constraints: [
      'Projeto ainda em desenvolvimento',
      'Autenticação completa, gestão de documentos e academia marítima ainda não foram entregues',
      'Aplicação mobile e recursos de IA não existem nesta etapa',
      'Não afirmar disponibilidade em produção',
    ],
    architecture:
      'Frontend React 19 com Vite e arquitetura MVVM; API Node.js com Express 5 em camadas de controllers e services; PostgreSQL no Supabase com Prisma 7.',
    decisions:
      'Começar pelo registro estruturado de embarcações, manutenção e inspeções para construir uma fonte confiável antes de ampliar o produto.',
    validation:
      'Testes da API com o runner nativo do Node.js, smoke test de persistência, validação e geração do Prisma e build do frontend.',
    currentState:
      'Fluxos web de embarcações, manutenção e checklists estão em construção no repositório; o produto não está em produção.',
    limitations: [
      'A experiência final e a cobertura funcional ainda estão em evolução.',
      'A arquitetura Next.js/NestJS documentada no projeto representa uma direção futura, não a implementação atual.',
    ],
    nextSteps: [
      'Consolidar os fluxos principais',
      'Validar com usuários do domínio',
    ],
    stack: [
      'React 19',
      'Vite',
      'Node.js',
      'Express 5',
      'PostgreSQL/Supabase',
      'Prisma 7',
    ],
    repository: 'https://github.com/luis-botelho/safeanchor-monorepo',
    readme: {
      repository: 'luis-botelho/safeanchor-monorepo',
      branch: 'main',
      path: 'README.md',
    },
    cover: {
      src: '/images/projects/safeanchor-cover.svg',
      alt: 'Ilustração editorial de uma carta náutica com âncora, embarcação, rota e marcações de checklist.',
      caption:
        'Carta editorial do SafeAnchor: manutenção, inspeções e rotas organizadas em torno da embarcação.',
    },
  },
  {
    slug: 'lia',
    name: 'Liahona — LIA',
    status: 'Fundação',
    featured: true,
    eyebrow: 'Empregabilidade e serviços locais',
    summary:
      'Da necessidade local à arquitetura: visão de produto, jornadas, modelo de dados e decisões técnicas para conectar talentos e oportunidades em Mambucaba.',
    problem:
      'Conectar oportunidades, serviços e pessoas exige entender o território, suas relações de confiança e os talentos locais antes de construir uma plataforma.',
    role: 'Pesquisa, visão de produto, modelagem do domínio e documentação da Foundation.',
    scope: [
      'Visão de produto, personas e indicadores para Mambucaba',
      'Nove fluxos de usuário: cadastro, serviços, vagas, avaliações e comunicação',
      'Modelo de dados, especificação de API e dez registros de decisão arquitetural',
      'Épicos, histórias de usuário e planejamento do sprint de fundação',
      'Empregabilidade comunitária',
      'Serviços locais',
      'Confiança entre participantes',
      'Concepção de um banco de talentos',
    ],
    constraints: [
      'Ainda não existe produto em produção',
      'A stack de implementação permanece planejada, não comprovada em código de produto',
    ],
    architecture:
      'A Foundation documental foi concluída. React, React Native, Node.js, Prisma e PostgreSQL aparecem somente como arquitetura planejada para uma etapa futura.',
    decisions:
      'Documentar território, relações de confiança, oportunidades e serviços antes de prometer uma plataforma pronta.',
    validation:
      'Revisão da Foundation documental, dos artefatos de produto e do escopo registrado no repositório.',
    currentState:
      'Foundation documental concluída; ainda não existe produto em produção.',
    limitations: [
      'Não existe implementação de produto em produção.',
      'As tecnologias planejadas ainda não devem ser apresentadas como entregues.',
    ],
    nextSteps: [
      'Validar necessidades com a comunidade de Mambucaba',
      'Priorizar o primeiro recorte de empregabilidade e serviços',
      'Definir um MVP a partir das evidências locais',
    ],
    stack: ['Documentação', 'Pesquisa de produto', 'Modelagem de domínio'],
    repository: 'https://github.com/luis-botelho/liahona',
    readme: {
      repository: 'luis-botelho/liahona',
      branch: 'main',
      path: 'README.md',
    },
    cover: {
      src: '/images/projects/lia-cover.svg',
      alt: 'Ilustração editorial de caminhos ligando pessoas, oportunidades e território ao redor de uma bússola.',
      caption:
        'Mapa editorial da LIA: território, confiança, talentos e oportunidades conectados em Mambucaba.',
    },
  },
  {
    slug: 'frostycamp-home',
    name: 'FrostyCamp Home',
    status: 'Legado',
    featured: true,
    eyebrow: 'Landing page e comunidades digitais',
    summary:
      'Landing page institucional criada para apresentar a proposta, os serviços e a metodologia da FrostyCamp.',
    problem:
      'A FrostyCamp precisava comunicar sua atuação em comunidades, growth e estratégia digital por meio de uma presença web organizada e responsiva.',
    role: 'Desenvolvimento da interface, organização das seções, responsividade e integração dos componentes visuais.',
    scope: [
      'Hero e navegação responsiva',
      'Apresentação de serviços e metodologia',
      'Seção de estratégias',
      'Carrossel da equipe',
      'Interface de contato',
    ],
    constraints: [
      'Projeto desenvolvido originalmente em 2023',
      'Base Create React App preservada como legado',
      'Parte das mídias depende de serviços externos',
      'O fluxo de envio do formulário atual precisa de revisão',
    ],
    architecture:
      'SPA em React 18 com Create React App, styled-components, react-awesome-reveal e react-slick.',
    decisions:
      'Organizar a narrativa em uma landing page por seções, usando movimento para apoiar a apresentação dos serviços e da comunidade.',
    validation:
      'Revisão do código, dos componentes responsivos e dos fluxos presentes no repositório. Não há afirmação de cobertura de testes automatizados.',
    currentState:
      'Landing page de 2023 com endereço público ativo, verificado em setembro de 2026. Preservada como projeto legado; o envio do formulário ainda precisa de revisão.',
    limitations: [
      'README original ainda possui pouca documentação',
      'Mídias externas podem deixar de funcionar',
      'Fluxo de contato precisa de revisão antes de ser reutilizado',
      'Stack e dependências representam uma base legada',
    ],
    nextSteps: [
      'Melhorar o README do repositório',
      'Substituir mídias externas por assets locais',
    ],
    stack: [
      'React 18',
      'Create React App',
      'styled-components',
      'react-awesome-reveal',
      'react-slick',
      'EmailJS',
    ],
    demo: 'https://frosty-camp-home.vercel.app',
    repository: 'https://github.com/luis-botelho/frosty-camp-home',
    readme: {
      repository: 'luis-botelho/frosty-camp-home',
      branch: 'main',
      path: 'README.md',
    },
    cover: {
      src: '/images/projects/frostycamp-live.jpg',
      alt: 'Página publicada da FrostyCamp, com o título Impulsionando comunidades, conectando mundos.',
      caption:
        'Captura da landing page publicada, verificada em setembro de 2026.',
    },
  },
  {
    slug: 'secureauth-web3',
    name: 'SecureAuth Web3',
    status: 'Laboratório',
    eyebrow: 'Estudo acadêmico',
    summary: 'Estudo acadêmico sobre autenticação e Web3.',
    problem:
      'Investigar conceitos de identidade e autenticação em um contexto acadêmico.',
    role: 'Estudo e implementação experimental.',
    scope: [
      'Pesquisa técnica',
      'Backend Express com rotas de autenticação',
      'Geração de JWT e middleware de segurança',
    ],
    constraints: ['Não é apresentado como produto profissional'],
    architecture:
      'Backend Node.js e Express com JWT e middleware de segurança. A árvore revisada contém código e testes de autenticação; não contém a interface React descrita na visão do README.',
    decisions:
      'Manter o projeto separado dos produtos principais para preservar seu contexto acadêmico.',
    validation:
      'Leitura e execução do estudo conforme documentação do repositório.',
    currentState: 'Estudo acadêmico.',
    limitations: ['Não representa produto em produção.'],
    nextSteps: ['Consolidar aprendizados no arquivo de estudos'],
    stack: ['Node.js', 'Express', 'JWT', 'Web3'],
    repository: 'https://github.com/luis-botelho/SecureAuth-Web3',
  },
]

const featuredOrder = ['caminhos-de-mambucaba', 'lia', 'frostycamp-home', 'safeanchor', 'mini-kanban-veritas']
export const featuredProjects = featuredOrder.map(slug => projects.find(project => project.slug === slug)!)
export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug)
export const filterProjects = (status?: Project['status']) =>
  status ? projects.filter((project) => project.status === status) : projects
