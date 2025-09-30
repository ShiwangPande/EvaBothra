import type { Metadata } from 'next'
import { portfolioData } from '@/lib/data'

export const metadata: Metadata = {
  title: `${portfolioData.skills.title} | Eva Bothra Portfolio`,
  description: portfolioData.skills.description,
}

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  )
}


