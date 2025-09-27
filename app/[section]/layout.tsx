// app/[section]/layout.tsx
import type { Metadata } from 'next'
import { portfolioData } from '@/lib/data'

interface SectionLayoutProps {
  children: React.ReactNode
  params: Promise<{
    section: string
  }>
}

export async function generateStaticParams() {
  return Object.keys(portfolioData).map((section) => ({
    section: section,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ section: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const sectionData = portfolioData[resolvedParams.section as keyof typeof portfolioData]
  
  if (!sectionData) {
    return {
      title: 'Eva Bothra Portfolio',
      description: 'Comprehensive portfolio showcasing academic excellence, leadership, and social impact'
    }
  }

  return {
    title: `${sectionData.title} | Eva Bothra Portfolio`,
    description: sectionData.description,
    openGraph: {
      title: `${sectionData.title} | Eva Bothra Portfolio`,
      description: sectionData.description,
      images: sectionData.imageSrc ? [sectionData.imageSrc] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${sectionData.title} | Eva Bothra Portfolio`,
      description: sectionData.description,
      images: sectionData.imageSrc ? [sectionData.imageSrc] : [],
    }
  }
}

export default function SectionLayout({ children, params }: SectionLayoutProps) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  )
}