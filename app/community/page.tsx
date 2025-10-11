"use client"

import Image from 'next/image'
import { portfolioData } from '@/lib/data'
import { useState } from 'react'

function Carousel({
  images,
  onImageClick,
  alt,
}: {
  images: string[]
  onImageClick: (src: string) => void
  alt: string
}) {
  const [current, setCurrent] = useState(0)
  if (!images.length) return null

  const prev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1))
  }
  const next = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1))
  }

  return (
    <div
      className="relative w-full h-72 md:h-96 flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden shadow-md cursor-pointer"
      onClick={() => onImageClick(images[current])}
      tabIndex={0}
      role="button"
      aria-label={`View ${alt} image fullscreen`}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') onImageClick(images[current])
      }}
    >
      <Image
        src={images[current]}
        alt={alt}
        fill
        className="object-contain"
        sizes="(max-width: 640px) 100vw, 500px"
        priority={current === 0}
      />
      {images.length > 1 && (
        <>
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-purple-100 rounded-full p-2 shadow transition"
            onClick={prev}
            aria-label="Previous image"
            type="button"
            tabIndex={0}
          >
            <svg className="w-6 h-6 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-pink-100 rounded-full p-2 shadow transition"
            onClick={next}
            aria-label="Next image"
            type="button"
            tabIndex={0}
          >
            <svg className="w-6 h-6 text-pink-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 z-10">
            {images.map((_, i) => (
              <span
                key={i}
                className={`block w-2 h-2 rounded-full ${i === current ? 'bg-purple-600' : 'bg-gray-300'} transition`}
              />
            ))}
          </div>
        </>
      )}
      <span className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-full shadow-lg opacity-80 flex items-center gap-1 z-20">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
        </svg>
        Enlarge
      </span>
    </div>
  )
}

export default function CommunityPage() {
  const data = portfolioData.community
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-purple-50/20 to-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 bg-gradient-to-r from-purple-900 to-pink-700 bg-clip-text text-transparent leading-tight">
              {data.title}
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed max-w-4xl font-light">
              {data.description}
            </p>
          </div>
          
          {data.stats && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 pt-6">
              {data.stats.map((s, idx) => (
                <div 
                  key={String(s.label)} 
                  className="relative group bg-white border-2 border-purple-100 rounded-lg p-6 hover:border-purple-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="text-3xl md:text-4xl font-extrabold text-purple-900 mb-1">
                      {s.value}
                    </div>
                    <div className="text-sm uppercase tracking-wider text-purple-600 font-semibold">
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
      <section className="max-w-7xl mx-auto px-2 md:px-8 pb-20">
        <div className="flex flex-col gap-12">
          {data.items.map((item, idx) => {
            // Support both string and array for imageSrc
            const images: string[] = Array.isArray(item.imageSrc)
              ? item.imageSrc
              : item.imageSrc
                ? [item.imageSrc]
                : []

            return (
              <article 
                key={item.id} 
                className="group relative flex flex-col md:flex-row bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-1 w-full"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Gradient Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                {/* Content - Left Side */}
                <div className="p-7 md:p-12 flex flex-col flex-1 min-w-0">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight group-hover:text-purple-900 transition-colors break-words">
                      {item.title}
                    </h3>
                    {/* {item.grade && (
                      <span className="text-sm font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1.5 rounded-full whitespace-nowrap shadow-sm">
                        {item.grade}
                      </span>
                    )} */}
                  </div>

                  {/* Description */}
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4 flex-grow font-normal break-words">
                    {item.description}
                  </p>

                  {/* Achievements */}
                  {item.achievements?.length ? (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.achievements.map((a) => (
                        <span 
                          key={a} 
                          className="text-sm font-medium bg-gray-50 border border-gray-200 text-gray-700 px-3 py-1.5 rounded-full hover:bg-purple-50 hover:border-purple-200 hover:text-purple-700 transition-colors"
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  {/* Details */}
                  {item.details && (
                    <p className="text-base text-gray-600 leading-relaxed border-t border-gray-100 pt-4 mb-4 break-words font-light">
                      {item.details.split('\n\n')[0]}
                    </p>
                  )}

                  {/* CTA */}
                  {item.link && (
                    <div className="pt-3">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-all font-[family-name:var(--font-inter)]"
                      >
                        <span className="truncate max-w-[250px] underline decoration-blue-400 group-hover:decoration-blue-800">
                          {item.link}
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-blue-600 group-hover:text-blue-800 transition-transform group-hover:translate-x-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>


                {/* PDF takes precedence over images: show PDF (and optionally carousel) ONLY when it exists for the item */}
                {/* PDF takes precedence over images: show PDF ONLY when it exists for the item */}
                {(
                  item.id === "protecther" ||
                  item.id === "welfare-access-cards") ? (
                  <div className="max-w-4xl lg:col-span-5 my-auto order-1 lg:order-2 pt-6 lg:pt-0 overflow-y-hidden">
                    {/* {item.id === "mitrajyothi" && (
                      <iframe
                        src="/assets/mitrajyothi.pdf"
                        className="w-full h-full rounded-lg border overflow-y-hidden"
                        style={{ minHeight: 500, maxHeight: 700, width: 540 }}
                        allowFullScreen
                        title="Quick View PDF"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      />
                    )} */}

                    {(item.id === "protecther" || item.id === "welfare-access-cards") && (
                      <iframe
                        src="https://www.flipbookpdf.net/web/site/a91af593e66c4fca28ebbcd0edaa10d91b3dfa0b202509.pdf.html"
                        className="w-full h-full rounded-lg border overflow-y-hidden"
                        style={{ minHeight: 350, maxHeight: 700, width: 540 }}
                        allowFullScreen
                        title="Quick View PDF"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      />
                    )}
                  </div>
                ) : item.id === "asha-niketan" ? (
                  <div className="w-full md:w-[38%] flex items-center justify-center p-4 md:p-8">
                    <div className="w-full aspect-[9/16] max-w-xs flex items-center justify-center">
                      <iframe
                        src="https://www.youtube.com/embed/m8XAuwmksQM"
                        title="Asha Niketan Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-full rounded-xl shadow-lg border"
                      ></iframe>
                    </div>
                  </div>
                ) : (
                  images.length > 0 && (
                    <div className="w-full md:w-[38%] flex items-center justify-center p-4 md:p-8">
                      <Carousel
                        images={images}
                        onImageClick={setFullscreenImage}
                        alt={item.title}
                      />
                    </div>
                  )
                )}

                {/* Image/Carousel - Right Side */}
                {/* {images.length > 0 && (
                  <div className="w-full md:w-[38%] flex items-center justify-center p-4 md:p-8">
                    <Carousel
                      images={images}
                      onImageClick={setFullscreenImage}
                      alt={item.title}
                    />
                  </div>
                )} */}
              </article>
            )
          })}
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
            className="max-w-[95vw] max-h-[95vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </main>
  )
}