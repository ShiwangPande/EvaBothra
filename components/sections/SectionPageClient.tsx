"use client"

import { useState, useEffect, use } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ArrowLeft, ChevronDown, ChevronUp, Award, TrendingUp, Clock } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Tabbar from '@/components/Tabbar'
import { portfolioData } from '@/lib/data'
import type { PortfolioItem, AcademicSubsection } from '@/lib/types'

export type SectionTheme = {
  background?: string
  heroBackground?: string
  cardBackground?: string
  border?: string
  textPrimary?: string
  textSecondary?: string
  accent?: string
  footerBackground?: string
}

const defaultTheme: Required<SectionTheme> = {
  background: 'bg-white',
  heroBackground: 'bg-gray-50',
  cardBackground: 'bg-white',
  border: 'border-gray-200',
  textPrimary: 'text-black',
  textSecondary: 'text-gray-600',
  accent: 'bg-black text-white',
  footerBackground: 'bg-black',
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

const stagger = {
  animate: {
    transition: { staggerChildren: 0.1 }
  }
}

function DetailCard({ item, theme }: { item: PortfolioItem; theme: Required<SectionTheme> }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div variants={fadeIn} className={`group relative ${theme.cardBackground} border ${theme.border} hover:border-gray-400 transition-all duration-500 overflow-hidden`} whileHover={{ y: -2 }}>
      <div className="p-8 pb-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-black"></div>
              <h3 className={`text-2xl font-light ${theme.textPrimary} leading-tight`}>{item.title}</h3>
            </div>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {item.grade && (
                <span className="flex items-center gap-2 bg-gray-50 text-gray-700 px-4 py-2 text-sm font-medium border border-gray-200">
                  {item.grade}
                </span>
              )}
              <span className="bg-black text-white px-4 py-2 text-sm font-medium tracking-wide">{item.category}</span>
            </div>
          </div>
        </div>
      </div>

      {item.imageSrc && (
        <div className="px-8 pb-6">
          <div className="relative w-full h-48 md:h-64 overflow-hidden group">
            <Image src={(Array.isArray(item.imageSrc) ? item.imageSrc[0] : item.imageSrc) || ''} alt={item.title} fill className="object-contain group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>
        </div>
      )}

      <div className="px-8 pb-6">
        <p className={`${theme.textSecondary} leading-relaxed text-base mb-8 font-light`}>{item.description}</p>
      </div>

      <div className="px-8 pb-6">
        <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Key Achievements</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {item.achievements.slice(0, 4).map((achievement, idx) => (
            <div key={idx} className="flex items-center gap-3 text-sm text-gray-700 py-2">
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              <span>{achievement}</span>
            </div>
          ))}
          {item.achievements.length > 4 && (
            <div className="flex items-center gap-3 text-sm text-gray-500 py-2">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
              <span>+{item.achievements.length - 4} more achievements</span>
            </div>
          )}
        </div>
      </div>

      <div className="px-8 pb-8">
        <div className="flex items-center gap-4">
          <motion.button onClick={() => setIsExpanded(!isExpanded)} className={`flex items-center gap-3 border border-black px-6 py-3 text-sm font-medium hover:bg-black hover:text-white transition-all duration-300 group/btn ${theme.textPrimary}`} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            {isExpanded ? (
              <>
                <ChevronUp className="w-4 h-4 group-hover/btn:rotate-180 transition-transform duration-300" />
                <span>Show Less</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 group-hover/btn:rotate-180 transition-transform duration-300" />
                <span>Read Full Story</span>
              </>
            )}
          </motion.button>
          {item.link && (
            <motion.a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-300 px-6 py-3 text-sm font-medium hover:bg-gray-50 transition-all duration-300 group/link"
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
            >
              <span>Learn More</span>
              <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.a>
          )}
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: 'easeInOut' }} className="overflow-hidden">
            <div className="px-8 pb-8 border-t border-gray-100">
              <div className="pt-8">
                <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Detailed Story</h4>
                <div className="prose prose-gray max-w-none">
                  {item.details.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className={`${theme.textSecondary} leading-relaxed mb-4 text-base font-light`}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function AcademicSubsectionCard({ title, items, icon: Icon, theme }: { title: string; items: PortfolioItem[]; icon: any; theme: Required<SectionTheme> }) {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <motion.div variants={fadeIn} className={`${theme.cardBackground} border ${theme.border} transition-all duration-500 overflow-hidden`}>
      <div className="p-8 pb-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-black text-white">
              <Icon className="w-7 h-7" />
            </div>
            <div>
              <h3 className={`text-3xl font-light ${theme.textPrimary} mb-2`}>{title}</h3>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">{items.length} {items.length === 1 ? 'Item' : 'Items'}</p>
            </div>
          </div>
          <motion.button onClick={() => setIsExpanded(!isExpanded)} className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors border border-gray-200 hover:border-gray-400 px-6 py-3" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            {isExpanded ? (<><ChevronUp className="w-5 h-5" /><span className="text-sm font-medium">Collapse</span></>) : (<><ChevronDown className="w-5 h-5" /><span className="text-sm font-medium">Explore All</span></>)}
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: 'easeInOut' }} className="overflow-hidden">
            <div className="p-8">
              <div className="space-y-8">
                {items.map((item) => (<DetailCard key={item.id} item={item} theme={theme} />))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {!isExpanded && (
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {items.slice(0, 2).map((item) => (
              <div key={item.id} className="group bg-gray-50 border border-gray-100 hover:border-gray-200 p-6 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className={`text-lg font-light ${theme.textPrimary} mb-2 group-hover:text-gray-600 transition-colors`}>{item.title}</h4>
                    <div className="flex items-center gap-2 mb-3">
                      {item.grade && (<span className="text-xs text-gray-500 font-medium">{item.grade}</span>)}
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500 font-medium">{item.category}</span>
                    </div>
                  </div>
                </div>
                <p className={`${theme.textSecondary} text-sm leading-relaxed mb-4 font-light`}>{item.description}</p>
                {item.link && (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 transition-colors duration-200 group/link"
                  >
                    <span>Learn More</span>
                    <svg className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
            {items.length > 2 && (
              <div className="bg-gray-100 border border-gray-200 p-6 flex items-center justify-center group">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-gray-600 font-medium text-lg">+</span>
                  </div>
                  <span className="text-black font-medium text-sm">{items.length - 2} more {items.length - 2 === 1 ? 'item' : 'items'}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default function SectionPageClient({ section, theme: themeInput, paramsPromise }: { section?: keyof typeof portfolioData; theme?: SectionTheme; paramsPromise?: Promise<{ section: keyof typeof portfolioData }> }) {
  const router = useRouter()
  const [data, setData] = useState<any>(null)
  const [resolvedSection, setResolvedSection] = useState<keyof typeof portfolioData | null>(section ?? null)
  const theme = { ...defaultTheme, ...(themeInput || {}) }

  useEffect(() => {
    if (!resolvedSection && paramsPromise) {
      paramsPromise.then((p) => setResolvedSection(p.section)).catch(() => setResolvedSection(null))
    }
  }, [resolvedSection, paramsPromise])

  useEffect(() => {
    if (resolvedSection && portfolioData[resolvedSection]) {
      setData(portfolioData[resolvedSection])
    }
  }, [resolvedSection])

  if (!resolvedSection || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-2 border-gray-200 mx-auto mb-6"></div>
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-black absolute top-0 left-1/2 transform -translate-x-1/2"></div>
          </div>
          <div className="text-lg text-gray-500 font-light tracking-wide">Loading...</div>
        </div>
      </div>
    )
  }

  const isAcademicSection = 'sections' in data
  const isAboutSection = 'fullStory' in data

  return (
    <motion.div initial="initial" animate="animate" exit="exit" className={`min-h-screen ${theme.background}`}>
      <motion.header variants={fadeIn} className={`border-b ${theme.border} sticky top-0 z-50 backdrop-blur-sm bg-white/95`}>
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <motion.button onClick={() => router.push('/')} whileHover={{ x: -3 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-3 text-gray-500 hover:text-black transition-all duration-300 text-sm font-medium group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="hidden sm:inline">Back to Portfolio</span>
              <span className="sm:hidden">Back</span>
            </motion.button>
            <div className="text-center">
              <h1 className={`text-2xl md:text-3xl font-light ${theme.textPrimary} mb-1`}>{data.title}</h1>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-medium">{resolvedSection}</p>
            </div>
            <div className="w-20"></div>
          </div>
        </div>
      </motion.header>

      <motion.section variants={fadeIn} transition={{ delay: 0.2 }} className={`py-24 md:py-32 ${theme.heroBackground}`}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <motion.div variants={fadeIn} transition={{ delay: 0.3 }} className="mb-8">
                <div className="w-16 h-0.5 bg-black mb-6"></div>
                <h2 className={`text-5xl md:text-6xl lg:text-7xl font-thin ${theme.textPrimary} leading-tight mb-8`}>{data.title}</h2>
                <p className={`text-xl md:text-2xl ${theme.textSecondary} leading-relaxed font-light`}>{data.description}</p>
              </motion.div>
              {data.stats && (
                <motion.div variants={fadeIn} transition={{ delay: 0.5 }} className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {data.stats.map((stat: any, index: number) => (
                    <motion.div key={String(stat.label)} variants={fadeIn} transition={{ delay: 0.6 + index * 0.1 }} className="group">
                      <div className={`text-3xl md:text-4xl font-light ${theme.textPrimary} mb-2 group-hover:text-gray-500 transition-colors duration-300`}>{stat.value}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-widest font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
            <motion.div variants={fadeIn} transition={{ delay: 0.4 }} className="order-1 lg:order-2">
              <div className="relative w-full h-80 md:h-96 lg:h-[500px] overflow-hidden group">
                <Image src={data.imageSrc} alt={data.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {isAboutSection && data.fullStory && (
        <motion.section variants={fadeIn} transition={{ delay: 0.6 }} className="py-24">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div variants={fadeIn} className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div className="w-20 h-0.5 bg-black mx-auto mb-8"></div>
                <h3 className={`text-4xl md:text-5xl font-thin ${theme.textPrimary} mb-6`}>My Story</h3>
                <p className="text-lg text-gray-500 font-light">A journey of resilience, impact, and growth</p>
              </div>
              <div className="prose prose-lg max-w-none">
                {data.fullStory.split('\n\n').map((paragraph: string, index: number) => (
                  <motion.p key={index} variants={fadeIn} transition={{ delay: 0.7 + index * 0.1 }} className={`${theme.textSecondary} leading-relaxed text-lg md:text-xl font-light mb-8`}>{paragraph}</motion.p>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>
      )}

      {isAcademicSection && data.sections && (
        <motion.section variants={stagger} className="py-24">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div variants={fadeIn} className="text-center mb-20">
              <div className="w-20 h-0.5 bg-black mx-auto mb-8"></div>
              <h3 className={`text-4xl md:text-5xl font-thin ${theme.textPrimary} mb-6`}>Detailed Breakdown</h3>
              <p className={`text-xl ${theme.textSecondary} max-w-4xl mx-auto leading-relaxed font-light`}>Explore the comprehensive details of achievements, projects, and initiatives that define excellence in {data.title.toLowerCase()}.</p>
            </motion.div>
            <div className="space-y-16">
              {Object.entries(data.sections).map(([key, section]) => {
                const typedSection = section as AcademicSubsection
                const iconMap = { academicPerformance: Award, olympiads: TrendingUp, research: Clock }
                return (
                  <AcademicSubsectionCard key={key} title={typedSection.title} items={typedSection.items} icon={iconMap[key as keyof typeof iconMap]} theme={theme} />
                )
              })}
            </div>
          </div>
        </motion.section>
      )}

      {data.items && !isAcademicSection && (
        <motion.section variants={stagger} className="py-24">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div variants={fadeIn} className="text-center mb-20">
              <div className="w-20 h-0.5 bg-black mx-auto mb-8"></div>
              <h3 className={`text-4xl md:text-5xl font-thin ${theme.textPrimary} mb-6`}>Key Highlights</h3>
              <p className={`text-xl ${theme.textSecondary} max-w-4xl mx-auto leading-relaxed font-light`}>Discover the projects, initiatives, and achievements that showcase impact and innovation.</p>
            </motion.div>
            <div className="space-y-12">
              {data.items.map((item: PortfolioItem) => (
                <DetailCard key={item.id} item={item} theme={theme} />
              ))}
            </div>
          </div>
        </motion.section>
      )}

      <motion.footer variants={fadeIn} className={`${theme.footerBackground} text-white py-24`}>
        <div className="max-w-7xl mx-auto px-8 text-center">
          <motion.div variants={fadeIn} transition={{ delay: 0.2 }} className="mb-16">
            <div className="w-20 h-0.5 bg-white mx-auto mb-8"></div>
            <h3 className="text-4xl md:text-5xl font-thin mb-6">Ready to explore more?</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">Discover other aspects of my journey and impact</p>
          </motion.div>
        </div>
      </motion.footer>

      <Tabbar />
    </motion.div>
  )
}


