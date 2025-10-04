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

  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] gap-10 lg:gap-16 items-start">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
              {data.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              {data.description}
            </p>
            {data.stats && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
                {data.stats.map((s) => (
                  <div key={String(s.label)} className="border border-gray-200 rounded-md p-4">
                    <div className="text-2xl md:text-3xl font-semibold text-gray-900">{s.value}</div>
                    <div className="text-xs uppercase tracking-wider text-gray-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            {/* <div className="relative w-full h-64 md:h-96 rounded-md overflow-hidden border border-gray-200">
              <Image src={data.imageSrc} alt={data.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
            </div> */}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-8 pb-24 space-y-16">
        {/* Academic Performance */}
        {sections.academicPerformance && (
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">{sections.academicPerformance.title.replace(/^\p{Emoji_Presentation}\s*/u, '')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sections.academicPerformance.items.map((item) => (
                <article key={item.id} className="border border-gray-200 rounded-lg p-6 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-medium leading-snug">{item.title}</h3>
                    {item.grade && <span className="text-xs text-gray-500 uppercase tracking-wider whitespace-nowrap">{item.grade}</span>}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  {item.achievements?.length ? (
                    <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                      {item.achievements.slice(0, 6).map((a) => (
                        <li key={a} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gray-400"></span>{a}</li>
                      ))}
                    </ul>
                  ) : null}
                  {item.details && (
                    <p className="mt-2 text-gray-700 leading-relaxed">
                      {item.details.split('\n\n')[0]}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Olympiads & Competitions */}
        {sections.olympiads && (
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">{sections.olympiads.title.replace(/^\p{Emoji_Presentation}\s*/u, '')}</h2>
            <div className="space-y-6">
              {sections.olympiads.items.map((item) => (
                <article key={item.id} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <h3 className="text-xl font-medium leading-snug">{item.title}</h3>
                    {item.grade && <span className="text-xs text-gray-500 uppercase tracking-wider whitespace-nowrap">{item.grade}</span>}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-3">{item.description}</p>
                  {item.achievements?.length ? (
                    <div className="flex flex-wrap gap-2">
                      {item.achievements.map((a) => (
                        <span key={a} className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded border border-gray-200">{a}</span>
                      ))}
                    </div>
                  ) : null}
                  {item.details && (
                    <p className="mt-3 text-gray-700 leading-relaxed">
                      {item.details.split('\n\n')[0]}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Research */}
        {sections.research && (
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">{sections.research.title.replace(/^\p{Emoji_Presentation}\s*/u, '')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sections.research.items.map((item) => (
                <article key={item.id} className="border border-gray-200 rounded-lg p-6 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-medium leading-snug">{item.title}</h3>
                    {item.grade && <span className="text-xs text-gray-500 uppercase tracking-wider whitespace-nowrap">{item.grade}</span>}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  {item.imageSrc && (
                    <div
                      className="relative w-full aspect-video max-h-64 rounded-md overflow-hidden border border-gray-200 cursor-pointer group"
                      onClick={() => setFullscreenImage(item.imageSrc ?? null)}
                      tabIndex={0}
                      role="button"
                      aria-label={`View ${item.title} image fullscreen`}
                      onKeyDown={e => {
                        if (e.key === 'Enter' || e.key === ' ') setFullscreenImage(item.imageSrc ?? null)
                      }}
                    >
                      <Image
                        src={item.imageSrc}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-200 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="absolute bottom-2 right-2 bg-white/80 text-xs px-2 py-0.5 rounded shadow">Click to enlarge</span>
                    </div>
                  )}
                  {item.achievements?.length ? (
                    <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                      {item.achievements.slice(0, 6).map((a) => (
                        <li key={a} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gray-400"></span>{a}</li>
                      ))}
                    </ul>
                  ) : null}
                  {item.details && (
                    <p className="mt-2 text-gray-700 leading-relaxed">
                      {item.details.split('\n\n')[0]}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>
        )}
      </section>
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setFullscreenImage(null)}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute top-6 right-8 text-white text-3xl font-bold z-50"
            onClick={e => {
              e.stopPropagation()
              setFullscreenImage(null)
            }}
            aria-label="Close fullscreen image"
          >
            &times;
          </button>
          <img
            src={fullscreenImage}
            alt="Fullscreen"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded shadow-lg bg-white"
          />
        </div>
      )}
    </main>
  )
}

