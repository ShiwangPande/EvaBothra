// app/[section]/page.tsx
"use client"

import { useState, useEffect, use, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ExternalLink, Calendar, Award, Users, TrendingUp, Clock, ChevronDown, ChevronUp, MapPin, Globe, BookOpen, Target, Zap, Heart } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { portfolioData } from '@/lib/data'
import type { PortfolioSection, PortfolioItem, AcademicSubsection, AboutSection } from '@/lib/types'
import Image from 'next/image'
import Tabbar from '@/components/Tabbar'

interface SectionPageProps {
  params: Promise<{
    section: keyof typeof portfolioData
  }>
}

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

// Sophisticated Detail Card Component
const DetailCard = ({ item, index }: { item: PortfolioItem; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      variants={fadeIn}
      className="group relative bg-white border border-gray-200 hover:border-gray-400 transition-all duration-500 overflow-hidden"
      whileHover={{ y: -2 }}
    >
      {/* Card Header */}
      <div className="p-8 pb-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-black"></div>
              <h3 className="text-2xl font-light text-black leading-tight">
                {item.title}
              </h3>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {item.grade && (
                <span className="flex items-center gap-2 bg-gray-50 text-gray-700 px-4 py-2 text-sm font-medium border border-gray-200">
                  <Calendar className="w-4 h-4" />
                  {item.grade}
                </span>
              )}
              <span className="bg-black text-white px-4 py-2 text-sm font-medium tracking-wide">
                {item.category}
              </span>
            </div>
          </div>
          
          {item.link && (
            <motion.a
              href={item.link.startsWith('http') ? item.link : `https://${item.link}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-black transition-colors p-3 border border-gray-200 hover:border-gray-400"
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Image Display */}
      {item.imageSrc && (
        <div className="px-8 pb-6">
          <div className="relative w-full h-48 md:h-64 overflow-hidden group">
            <Image
              src={item.imageSrc}
              alt={item.title}
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>
        </div>
      )}

      {/* Description */}
      <div className="px-8 pb-6">
        <p className="text-gray-600 leading-relaxed text-base mb-8 font-light">
          {item.description}
        </p>
      </div>

      {/* Key Achievements Grid */}
      <div className="px-8 pb-6">
        <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Key Achievements</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {item.achievements.slice(0, 4).map((achievement, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 text-sm text-gray-700 py-2"
            >
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

      {/* Expand Button */}
      <div className="px-8 pb-8">
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-3 text-black border border-black px-6 py-3 text-sm font-medium hover:bg-black hover:text-white transition-all duration-300 group/btn"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
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
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 border-t border-gray-100">
              <div className="pt-8">
                <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Detailed Story</h4>
                <div className="prose prose-gray max-w-none">
                  {item.details.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-gray-700 leading-relaxed mb-4 text-base font-light">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">All Achievements</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {item.achievements.map((achievement, idx) => (
                      <div
                    key={idx}
                        className="flex items-center gap-3 text-sm text-gray-700 py-2"
                  >
                        <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                        <span>{achievement}</span>
                      </div>
                ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// Sophisticated Academic Subsection Card
const AcademicSubsectionCard = ({ title, items, icon: Icon }: { 
  title: string; 
  items: PortfolioItem[]; 
  icon: any;
}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      variants={fadeIn}
      className="bg-white border border-gray-200 hover:border-gray-400 transition-all duration-500 overflow-hidden"
    >
      {/* Section Header */}
      <div className="p-8 pb-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-black text-white group-hover:bg-gray-800 transition-colors duration-300">
              <Icon className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-3xl font-light text-black mb-2">{title}</h3>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">
                {items.length} {items.length === 1 ? 'Item' : 'Items'}
              </p>
          </div>
        </div>
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors border border-gray-200 hover:border-gray-400 px-6 py-3 group/btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-5 h-5 group-hover/btn:rotate-180 transition-transform duration-300" />
                <span className="text-sm font-medium">Collapse</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-5 h-5 group-hover/btn:rotate-180 transition-transform duration-300" />
                <span className="text-sm font-medium">Explore All</span>
              </>
            )}
        </motion.button>
        </div>
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-8">
              <div className="space-y-8">
              {items.map((item, index) => (
                  <DetailCard key={item.id} item={item} index={index} />
              ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Preview when collapsed */}
      {!isExpanded && (
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {items.slice(0, 2).map((item, index) => (
              <div key={item.id} className="group bg-gray-50 border border-gray-100 hover:border-gray-200 p-6 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-light text-black mb-2 group-hover:text-gray-600 transition-colors">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-2 mb-3">
                      {item.grade && (
                        <span className="text-xs text-gray-500 font-medium">
                          {item.grade}
                        </span>
                      )}
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500 font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4 font-light">
                  {item.description}
                </p>
                
              <div className="flex flex-wrap gap-2">
                  {item.achievements.slice(0, 3).map((achievement, idx) => (
                  <span
                    key={idx}
                      className="bg-white text-gray-700 px-3 py-1 text-xs font-medium border border-gray-200"
                  >
                    {achievement}
                  </span>
                ))}
                  {item.achievements.length > 3 && (
                    <span className="text-gray-400 text-xs px-3 py-1">
                      +{item.achievements.length - 3} more
                    </span>
                )}
              </div>
            </div>
          ))}
          {items.length > 2 && (
              <div className="bg-gray-100 border border-gray-200 p-6 flex items-center justify-center group hover:bg-gray-200 transition-colors duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-gray-600 font-medium text-lg">+</span>
                  </div>
                  <span className="text-black font-medium text-sm">
                    {items.length - 2} more {items.length - 2 === 1 ? 'item' : 'items'}
              </span>
                </div>
            </div>
          )}
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default function SectionPage({ params }: SectionPageProps) {
  const router = useRouter()
  const [data, setData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  
  const resolvedParams = use(params)

  useEffect(() => {
    if (resolvedParams.section && portfolioData[resolvedParams.section]) {
      setData(portfolioData[resolvedParams.section])
      setIsLoading(false)
    } else {
      router.push('/')
    }
  }, [resolvedParams.section, router])

  if (isLoading || !data) {
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

  const isAboutSection = 'fullStory' in data
  const isAcademicSection = 'sections' in data

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-white"
    >
      {/* Sophisticated Header */}
      <motion.header
        variants={fadeIn}
        className="border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95"
      >
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={() => router.push('/')}
              whileHover={{ x: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 text-gray-500 hover:text-black transition-all duration-300 text-sm font-medium group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="hidden sm:inline">Back to Portfolio</span>
              <span className="sm:hidden">Back</span>
            </motion.button>

            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-light text-black mb-1">{data.title}</h1>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                {resolvedParams.section}
              </p>
            </div>

            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </motion.header>

      {/* Sophisticated Hero Section */}
      <motion.section
        variants={fadeIn}
        transition={{ delay: 0.2 }}
        className="py-24 md:py-32 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <motion.div
                variants={fadeIn}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <div className="w-16 h-0.5 bg-black mb-6"></div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-thin text-black leading-tight mb-8">
                {data.title}
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                {data.description}
                </p>
              </motion.div>

              {/* Sophisticated Stats Grid */}
              {data.stats && (
                <motion.div 
                  variants={fadeIn}
                  transition={{ delay: 0.5 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                  {data.stats.map(
                    (
                      stat: { label: string | number; value: string | number | ReactNode },
                      index: number
                    ) => (
                      <motion.div
                        key={String(stat.label)}
                        variants={fadeIn}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="group"
                      >
                        <div className="text-3xl md:text-4xl font-light text-black mb-2 group-hover:text-gray-500 transition-colors duration-300">
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-500 uppercase tracking-widest font-medium">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                </motion.div>
              )}
            </div>

            {/* Hero Image */}
            <motion.div 
              variants={fadeIn}
              transition={{ delay: 0.4 }}
              className="order-1 lg:order-2"
            >
              <div className="relative w-full h-80 md:h-96 lg:h-[500px] overflow-hidden group">
                <Image
                  src={data.imageSrc}
                  alt={data.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Sophisticated About Section */}
      {isAboutSection && data.fullStory && (
        <motion.section
          variants={fadeIn}
          transition={{ delay: 0.6 }}
          className="py-24 bg-white"
        >
          <div className="max-w-7xl mx-auto px-8">
            <motion.div
              variants={fadeIn}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-16">
                <div className="w-20 h-0.5 bg-black mx-auto mb-8"></div>
                <h3 className="text-4xl md:text-5xl font-thin text-black mb-6">
                My Story
              </h3>
                <p className="text-lg text-gray-500 font-light">
                  A journey of resilience, impact, and growth
                </p>
              </div>
              
              <div className="prose prose-lg max-w-none">
                {data.fullStory.split('\n\n').map((paragraph: string, index: number) => (
                  <motion.p
                    key={index}
                    variants={fadeIn}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="text-gray-700 leading-relaxed text-lg md:text-xl font-light mb-8"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
              
              {data.callToAction && (
                <motion.div
                  variants={fadeIn}
                  transition={{ delay: 0.9 }}
                  className="mt-16 p-12 bg-black text-white text-center group hover:bg-gray-900 transition-colors duration-500"
                >
                  <div className="w-16 h-0.5 bg-white mx-auto mb-6 group-hover:w-24 transition-all duration-500"></div>
                  <p className="text-2xl md:text-3xl font-light italic leading-relaxed">
                    "{data.callToAction}"
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Sophisticated Academic Section */}
      {isAcademicSection && data.sections && (
        <motion.section
          variants={stagger}
          className="py-24 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-8">
            <motion.div
              variants={fadeIn}
              className="text-center mb-20"
            >
              <div className="w-20 h-0.5 bg-black mx-auto mb-8"></div>
              <h3 className="text-4xl md:text-5xl font-thin text-black mb-6">
                Detailed Breakdown
              </h3>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                Explore the comprehensive details of achievements, projects, and initiatives
                that define excellence in {data.title.toLowerCase()}.
              </p>
            </motion.div>

            <div className="space-y-16">
              {Object.entries(data.sections).map(([key, section], sectionIndex) => {
                const typedSection = section as AcademicSubsection;
                const iconMap = {
                  academicPerformance: Award,
                  olympiads: TrendingUp,
                  research: Clock
                };
                
                return (
                  <AcademicSubsectionCard
                    key={key}
                    title={typedSection.title}
                    items={typedSection.items}
                    icon={iconMap[key as keyof typeof iconMap]}
                  />
                );
              })}
            </div>
          </div>
        </motion.section>
      )}

      {/* Sophisticated Items Grid */}
      {data.items && !isAcademicSection && (
        <motion.section
          variants={stagger}
          className="py-24 bg-white"
        >
          <div className="max-w-7xl mx-auto px-8">
            <motion.div
              variants={fadeIn}
              className="text-center mb-20"
            >
              <div className="w-20 h-0.5 bg-black mx-auto mb-8"></div>
              <h3 className="text-4xl md:text-5xl font-thin text-black mb-6">
                Key Highlights
              </h3>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                Discover the projects, initiatives, and achievements that showcase impact and innovation.
              </p>
            </motion.div>

            <div className="space-y-12">
              {data.items.map((item: PortfolioItem, index: number) => (
                <DetailCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Sophisticated Navigation Footer */}
      <motion.footer
        variants={fadeIn}
        className="bg-black text-white py-24"
      >
        <div className="max-w-7xl mx-auto px-8 text-center">
          <motion.div
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="w-20 h-0.5 bg-white mx-auto mb-8"></div>
            <h3 className="text-4xl md:text-5xl font-thin mb-6">
            Ready to explore more?
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Discover other aspects of my journey and impact
            </p>
          </motion.div>
          
          <motion.div 
            variants={fadeIn}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {Object.keys(portfolioData).filter(key => key !== resolvedParams.section).map((key) => (
              <motion.button
                key={key}
                onClick={() => router.push(`/${key}`)}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-4 text-sm font-medium hover:bg-gray-100 transition-all duration-300 tracking-wide uppercase group"
              >
                <span className="group-hover:tracking-widest transition-all duration-300">
                {portfolioData[key as keyof typeof portfolioData].title}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.footer>
      
      {/* Tabbar Navigation */}
      <Tabbar />
    </motion.div>
  )
}