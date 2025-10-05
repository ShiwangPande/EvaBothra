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
  imageSrc?: string | string[]
  images?: string[]
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

export type Testimonial = {
  id: string
  author: string
  role: string
  content: string
  imageSrc: string | null
  email: string | null
  userId: string | null
  status: 'PENDING' | 'APPROVED' | 'REJECTED'
  createdAt: Date
  updatedAt: Date
  approved: boolean
}

export type TestimonialFormData = {
  author: string
  role: string
  content: string
  imageSrc?: string
  email?: string
  status?: 'PENDING' | 'APPROVED' | 'REJECTED'
  submittedAt?: Date
}

export type ContactMessage = {
  id: string
  name: string
  email: string
  message: string
  userId: string | null
  status: 'PENDING' | 'READ' | 'REPLIED'
  createdAt: Date
  updatedAt: Date
}

export type ContactFormData = {
  name: string
  email: string
  message: string
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