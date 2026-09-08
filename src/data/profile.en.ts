import { profile, experience, institutionalExperience } from './profile'
export const englishProfile = {
  ...profile,
  title: 'Front-end / Full-stack Developer',
  location: 'Angra dos Reis, RJ · Brazil',
  resume: '/cv/luis-botelho-resume-en.pdf',
  summary:
    'Developer with experience as a Junior Front-end Developer at OSF Digital in 2022 and a background in IT support. Software Engineering student with projects in React, TypeScript, Next.js, Node.js and Go. My experience in customer service, store operations and administrative support adds business context to the digital products I build.',
}
const roles = [
  'Waiter',
  'Travel agency conception',
  'Junior Front-end Developer',
  'IT User Support Technician HD I',
  'Call Center Agent',
  'Store Assistant',
  'Store Assistant',
  'Stock Clerk',
  'Store Supervisor',
  'Stock replenishment and administrative support',
]
const descriptions: Record<number, string> = {
  0: 'Customer service and experience in day-to-day table service.',
  1: 'The initiative ended at the concept stage. Exposure to the sector contributed to the perspective applied to Caminhos de Mambucaba.',
  2: 'Small interface adjustments and product catalog updates in a Salesforce environment.',
}
export const englishExperience = experience.map((item, index) => ({
  ...item,
  role: roles[index],
  company:
    index === 0
      ? 'Table service work'
      : index === 1
        ? 'Independent tourism initiative'
        : item.company,
  period: `${new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(item.start))}–${new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(item.end))}`,
  description: descriptions[index],
}))
export const englishInstitutionalExperience = {
  ...institutionalExperience,
  role: 'Finance Director',
  description:
    'Institutional role formalized through appointment minutes and bylaws.',
}
export const englishCategory: Record<string, string> = {
  Desenvolvimento: 'Development',
  'Suporte de TI': 'IT support',
  Operações: 'Operations',
  Empreendedorismo: 'Entrepreneurship',
  Atendimento: 'Customer service',
}
