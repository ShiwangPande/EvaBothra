export type PortfolioStat = {
  label: string
  value: string
}

export type PortfolioItem = {
  id: string
  title: string
  description: string
  details: string
  category: string
  achievements: string[]
  grade?: string
  link?: string
  imageSrc?: string
}

export type PortfolioSection = {
  title: string
  description: string
  imageSrc: string
  stats: PortfolioStat[]
  items: PortfolioItem[]
}

export type AcademicSubsection = {
  title: string
  items: PortfolioItem[]
}

export type AcademicSection = {
  title: string
  description: string
  imageSrc: string
  stats: PortfolioStat[]
  sections: {
    academicPerformance: AcademicSubsection
    olympiads: AcademicSubsection
    research: AcademicSubsection
  }
}

export type AboutSection = {
  title: string
  description: string
  fullStory: string
  callToAction: string
  imageSrc: string
}

export type PortfolioData = {
  about: AboutSection
  academics: AcademicSection
  leadership: PortfolioSection
  community: PortfolioSection
  skills: PortfolioSection
  awards: PortfolioSection
  youtube: PortfolioSection
  reflections: PortfolioSection
  homeTiles?: HomeTile[]
}

export type HomeTile = {
  key: string
  title: string
  imageSrc: string
  href: string
  external: boolean
}


// export type PortfolioSection = 
//   | 'academics' 
//   | 'initiatives' 
//   | 'leadership' 
//   | 'professional' 
//   | 'extracurricular' 
//   | 'volunteer'
//   | 'skills'
//   | 'projects'

// export type Portfolio = {
//   [key in PortfolioSection]: PortfolioData
// }