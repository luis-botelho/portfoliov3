export type SectionId = "about" | "skills" | "projects" | "contact"

export const SECTIONS: { id: SectionId; label: string; code: string }[] = [
  { id: "about", label: "Sobre", code: "01" },
  { id: "skills", label: "Competências", code: "02" },
  { id: "projects", label: "Projetos", code: "03" },
  { id: "contact", label: "Contato", code: "04" },
]
