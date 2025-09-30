import type { Metadata } from 'next'
import { portfolioData } from '@/lib/data'

export const metadata: Metadata = {
  title: `${portfolioData.reflections.title} | Eva Bothra Portfolio`,
  description: portfolioData.reflections.description,
}

export default function ReflectionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  )
}


