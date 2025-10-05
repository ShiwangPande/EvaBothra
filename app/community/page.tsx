"use client"

import Image from 'next/image'
import { portfolioData } from '@/lib/data'
import { useState } from 'react'

export default function CommunityPage() {
  const data = portfolioData.community
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-purple-50/20 to-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="space-y-6">
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 bg-gradient-to-r from-purple-900 to-pink-700 bg-clip-text text-transparent">
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
                  className="relative group bg-white border-2 border-purple-100 rounded-lg p-4 hover:border-purple-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="text-2xl md:text-3xl font-bold text-purple-900 mb-1">
                      {s.value}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-purple-600 font-medium">
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Community Cards - Full Width */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-16">
        <div className="flex flex-col gap-6">
          {data.items.map((item, idx) => (
            <article 
              key={item.id} 
              className="group relative flex flex-col sm:flex-row bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden hover:-translate-y-1 w-full"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Gradient Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              {/* Image - Left Side */}
              {item.imageSrc && (
                <div 
                  className="relative w-full sm:w-40 md:w-48 h-40 sm:h-auto flex-shrink-0 cursor-pointer group/img"
                  onClick={() => setFullscreenImage(item.imageSrc ?? null)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View ${item.title} image fullscreen`}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') setFullscreenImage(item.imageSrc ?? null)
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Image 
                    src={item.imageSrc} 
                    alt={item.title} 
                    fill 
                    className="object-cover group-hover/img:scale-110 transition-transform duration-500" 
                    sizes="(max-width: 640px) 100vw, 192px" 
                  />
                  <span className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-full shadow-lg opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center gap-1 z-20">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    Enlarge
                  </span>
                </div>
              )}

              {/* Content - Right Side */}
              <div className="p-5 md:p-6 flex flex-col flex-1">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-snug group-hover:text-purple-900 transition-colors">
                    {item.title}
                  </h3>
                  {item.grade && (
                    <span className="text-xs font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full whitespace-nowrap shadow-sm">
                      {item.grade}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-3 text-sm md:text-base flex-grow">
                  {item.description}
                </p>

                {/* Achievements */}
                {item.achievements?.length ? (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {item.achievements.map((a) => (
                      <span 
                        key={a} 
                        className="text-xs font-medium bg-gray-50 border border-gray-200 text-gray-700 px-2.5 py-1 rounded-full hover:bg-purple-50 hover:border-purple-200 hover:text-purple-700 transition-colors"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                ) : null}

                {/* Details */}
                {item.details && (
                  <p className="text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-3 mb-3">
                    {item.details.split('\n\n')[0]}
                  </p>
                )}

                {/* CTA */}
                {item.link && (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-600 hover:text-purple-800 transition-colors duration-200 group/link w-fit"
                  >
                    <span>Learn More</span>
                    <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
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