import type { Metadata } from 'next'
import { portfolioData } from '@/lib/data'

export const metadata: Metadata = {
  title: `${portfolioData.leadership.title} | Eva Bothra Portfolio`,
  description: portfolioData.leadership.description,
}

export default function LeadershipLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  )
}


