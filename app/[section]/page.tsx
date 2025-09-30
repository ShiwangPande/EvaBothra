// app/[section]/page.tsx
"use client"

import SectionPageClient from '@/components/sections/SectionPageClient'
import { portfolioData } from '@/lib/data'

interface SectionPageProps {
  params: Promise<{
    section: keyof typeof portfolioData
  }>
}

export default function SectionPage({ params }: SectionPageProps) {
  return <SectionPageClient paramsPromise={params} />
}