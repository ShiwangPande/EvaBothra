import type { Metadata } from 'next'
import { portfolioData } from '@/lib/data'

export const metadata: Metadata = {
  title: `${portfolioData.awards.title} | Eva Bothra Portfolio`,
  description: portfolioData.awards.description,
}

export default function AwardsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  )
}


