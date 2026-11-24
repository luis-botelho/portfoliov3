import content from './curriculo.json'

export type CvLocale = 'pt' | 'en'

export const curriculo = content
export type CvExperience = (typeof content.experience)[number]
export type CvProject = (typeof content.projects)[number]
export type CvSkillGroup = (typeof content.skills.pt)[number]
export type CvEducation = (typeof content.education.pt)[number]
export type CvOther = (typeof content.other.pt)[number]
