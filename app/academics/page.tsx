"use client"

import Image from 'next/image'
import { portfolioData } from '@/lib/data'
import { useEffect, useState } from 'react'

export default function AcademicsPage() {
  const data = portfolioData.academics
  const { sections } = data
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null)

  // Close on Escape and lock scroll when overlay is open
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setFullscreenImage(null)
    }
    if (fullscreenImage) {
      document.addEventListener('keydown', onKeyDown)
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.removeEventListener('keydown', onKeyDown)
        document.body.style.overflow = originalOverflow
      }
    }
  }, [fullscreenImage])

  // Helper for right-side image card
  function CardWithRightImage({ item, idx }: { item: any; idx: number }) {
    return (
      <article
        key={item.id}
        className="group relative flex flex-col md:flex-row bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-1 w-full"
        style={{ animationDelay: `${idx * 150}ms` }}
      >
        {/* Gradient Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
  
        {/* Content Section */}
        <div className="p-8 md:p-10 flex flex-col flex-1 min-w-0 justify-center">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
            <h3 className="text-2xl font-bold text-gray-900 leading-snug group-hover:text-blue-900 transition-colors">
              {item.title}
            </h3>
          </div>
  
          <p className="text-gray-600 leading-relaxed mb-4 text-base md:text-lg flex-grow">
            {item.description}
          </p>
  
          {item.achievements?.length ? (
            <div className="flex flex-wrap gap-2 mb-4">
              {item.achievements.slice(0, 6).map((a: string) => (
                <span
                  key={a}
                  className="text-xs md:text-sm font-medium bg-gray-50 border border-gray-200 text-gray-700 px-3 py-1.5 rounded-full hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors"
                >
                  {a}
                </span>
              ))}
            </div>
          ) : null}
  
          {item.details && (
            <p className="text-gray-600 leading-relaxed text-sm md:text-base border-t border-gray-100 pt-4 mb-5">
              {item.details.split('\n\n')[0]}
            </p>
          )}
  
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm md:text-base font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200 group/link w-fit"
            >
              <span>Learn More</span>
              <svg
                className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </div>
  
        {/* Image Section */}
        {item.imageSrc && (
          <div
            className="relative w-full md:w-[55%] h-[380px] md:h-[520px] flex-shrink-0 cursor-pointer group/img"
            onClick={() => setFullscreenImage(typeof item.imageSrc === 'string' ? item.imageSrc : null)}
            tabIndex={0}
            role="button"
            aria-label={`View ${item.title} image fullscreen`}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') setFullscreenImage(item.imageSrc ?? null)
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-blue-900/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Image
              src={item.imageSrc}
              alt={item.title}
              fill
              className="object-cover group-hover/img:scale-110 transition-transform duration-700 ease-out rounded-none md:rounded-r-2xl"
              sizes="(max-width: 768px) 100vw, 55vw"
              style={{ objectPosition: 'center' }}
            />
            <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-xs md:text-sm font-medium px-3 py-1.5 rounded-full shadow-lg opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center gap-1 z-20">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
              Enlarge
            </span>
          </div>
        )}
      </article>
    )
  }
  

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50/20 to-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="space-y-6">
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 bg-gradient-to-r from-blue-900 to-indigo-700 bg-clip-text text-transparent">
              {data.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
              {data.description}
            </p>
          </div>
          
          {data.stats && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 pt-4">
              {data.stats.map((s, idx) => (
                <div 
                  key={String(s.label)} 
                  className="relative group bg-white border-2 border-blue-100 rounded-lg p-4 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="text-2xl md:text-3xl font-bold text-blue-900 mb-1">
                      {s.value}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-blue-600 font-medium">
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-16 space-y-12">
        {/* Academic Performance - Full Width Cards */}
        {sections.academicPerformance && (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-5 text-gray-900">
              {sections.academicPerformance.title.replace(/^\p{Emoji_Presentation}\s*/u, '')}
            </h2>
            <div className="flex flex-col gap-6">
              {sections.academicPerformance.items.map((item, idx) => (
                <article 
                  key={item.id} 
                  className="group relative flex flex-col bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden hover:-translate-y-1 w-full"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  {/* Gradient Accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <div className="p-5 md:p-8 flex flex-col flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-snug group-hover:text-blue-900 transition-colors">
                        {item.title}
                      </h3>
                      {/* {item.grade && (
                        <span className="text-xs font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-full whitespace-nowrap shadow-sm">
                          {item.grade}
                        </span>
                      )} */}
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-3 text-sm md:text-base">{item.description}</p>
                    {item.achievements?.length ? (
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {item.achievements.slice(0, 6).map((a: string) => (
                          <span 
                            key={a} 
                            className="text-xs font-medium bg-gray-50 border border-gray-200 text-gray-700 px-2.5 py-1 rounded-full hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors"
                          >
                            {a}
                          </span>
                        ))}
                      </div>
                    ) : null}
                    {item.details && (
                      <p className="text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-3">
                        {item.details.split('\n\n')[0]}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Research - Full Width Cards with Right Images */}
        {sections.research && (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-5 text-gray-900">
              {sections.research.title.replace(/^\p{Emoji_Presentation}\s*/u, '')}
            </h2>
            <div className="flex flex-col gap-6">
              {sections.research.items.map((item, idx) => (
                <CardWithRightImage item={item} idx={idx} key={item.id} />
              ))}
            </div>
          </div>
        )}

        {/* Summer - Full Width Cards with Right Images */}
        {sections.summer && (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-5 text-gray-900">
              {sections.summer.title.replace(/^\p{Emoji_Presentation}\s*/u, '')}
            </h2>
            <div className="flex flex-col gap-6">
              {sections.summer.items.map((item, idx) => (
                <CardWithRightImage item={item} idx={idx} key={item.id} />
              ))}
            </div>
          </div>
        )}

        {/* Olympiads & Competitions - Full Width Cards */}
        {sections.olympiads && (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-5 text-gray-900">
              {sections.olympiads.title.replace(/^\p{Emoji_Presentation}\s*/u, '')}
            </h2>
            <div className="flex flex-col gap-6">
              {sections.olympiads.items.map((item, idx) => (
                <article 
                  key={item.id} 
                  className="group relative flex flex-col bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden hover:-translate-y-1 w-full"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  {/* Gradient Accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <div className="p-5 md:p-8 flex flex-col flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-snug group-hover:text-blue-900 transition-colors">
                        {item.title}
                      </h3>
                      {/* {item.grade && (
                        <span className="text-xs font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-full whitespace-nowrap shadow-sm">
                          {item.grade}
                        </span>
                      )} */}
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-3 text-sm md:text-base">{item.description}</p>
                    {item.achievements?.length ? (
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {item.achievements.map((a: string) => (
                          <span 
                            key={a} 
                            className="text-xs font-medium bg-gray-50 border border-gray-200 text-gray-700 px-2.5 py-1 rounded-full hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors"
                          >
                            {a}
                          </span>
                        ))}
                      </div>
                    ) : null}
                    {item.details && (
                      <p className="text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-3">
                        {item.details.split('\n\n')[0]}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Fullscreen Image Overlay */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setFullscreenImage(null)}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-gray-300 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200"
            onClick={e => {
              e.stopPropagation()
              setFullscreenImage(null)
            }}
            aria-label="Close fullscreen image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={fullscreenImage}
            alt="Fullscreen"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </main>
  )
}