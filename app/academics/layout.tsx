import type { Metadata } from 'next'
import { portfolioData } from '@/lib/data'

export const metadata: Metadata = {
  title: `${portfolioData.academics.title} | Eva Bothra Portfolio`,
  description: portfolioData.academics.description,
}

export default function AcademicsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  )
}


