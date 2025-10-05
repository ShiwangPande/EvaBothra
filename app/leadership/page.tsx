"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { portfolioData } from "@/lib/data"

function ImageCarousel({
  images,
  title,
  onOpen,
}: {
  images: string[]
  title: string
  onOpen: (src: string) => void
}) {
  const [current, setCurrent] = useState(0)

  // Auto-slide
  useEffect(() => {
    if (images.length <= 4) return
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % Math.ceil(images.length / 4))
    }, 4000)
    return () => clearInterval(id)
  }, [images])

  // Group into slides of 4
  const slides: string[][] = []
  for (let i = 0; i < images.length; i += 4) {
    slides.push(images.slice(i, i + 4))
  }
  const total = slides.length

  const goPrev = () => setCurrent((prev) => (prev - 1 + total) % total)
  const goNext = () => setCurrent((prev) => (prev + 1) % total)

  return (
    <div className="w-full relative group">
      <div className="relative w-full aspect-[9/14] overflow-hidden rounded-2xl bg-gray-100">
        <div className="absolute inset-0 grid grid-cols-2 gap-1.5 md:gap-2 p-0 md:p-1">
          {(slides[current] ?? [images[0]]).map((src, i) => (
            <button
              key={i}
              onClick={() => onOpen(src)}
              className="relative overflow-hidden rounded-lg bg-gray-100 hover:opacity-90 transition"
            >
              <Image
                src={src}
                alt={`${title} - image ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 60vw, (max-width: 1024px) 30vw, (max-width: 1280px) 20vw, 15vw"
              />
            </button>
          ))}
          {/* Fill empty cells to preserve 2×2 shape */}
          {Array.from({
            length: Math.max(0, 4 - (slides[current]?.length ?? 0)),
          }).map((_, i) => (
            <div key={`empty-${i}`} className="bg-gray-50 rounded-lg" />
          ))}
        </div>

        {/* Navigation arrows */}
        {total > 1 && (
          <>
            <button
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-sm text-gray-800 w-8 h-8 flex items-center justify-center rounded-full"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-sm text-gray-800 w-8 h-8 flex items-center justify-center rounded-full"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Dots indicator */}
        {total > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full ${
                  i === current ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  )
}

export default function LeadershipPage() {
  const data = portfolioData.leadership
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null)
  const [imageLoaded, setImageLoaded] = useState(false)
  return (
    <main className="min-h-screen bg-white">
      {/* Header section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="lg:col-span-7">
            <FadeInSection>
              <div className="space-y-7">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
              {data.title}
            </h1>
                <p className="text-lg md:text-2xl text-gray-600 max-w-2xl leading-relaxed font-light">
              {data.description}
            </p>
          {data.stats && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-100">
                    {data.stats.map((s) => (
                      <div key={String(s.label)} className="text-left">
                        <div className="text-3xl md:text-4xl font-semibold text-gray-900 mb-1">
                    {s.value}
                  </div>
                        <div className="text-xs uppercase tracking-widest text-gray-500">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          )}
              </div>
            </FadeInSection>
          </div>
          <div className="lg:col-span-5">
            <FadeInSection delay={200}>
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-xl group">
                <Image
                  src={
                    (Array.isArray(data.imageSrc)
                      ? data.imageSrc[0]
                      : data.imageSrc) || "/placeholder.jpg"
                  }
                  alt={data.title}
                  fill
                  className={`object-cover transition-all duration-700 ${imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'} group-hover:scale-105`}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  onLoad={() => setImageLoaded(true)}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Leadership Items */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-28">
        <div className="space-y-24">
          {data.items.map((item, idx) => (
            <FadeInSection key={item.id} delay={100}>
              <article className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-200 via-indigo-200 to-transparent rounded-full hidden lg:block" />
                
                <div className="grid lg:grid-cols-12 gap-10 md:gap-16 items-start">
                  <div className="lg:col-span-7 space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-3xl md:text-4xl font-light text-gray-900 hover:text-blue-600 transition-colors duration-300">
                        {item.title}
                      </h3>
                      {item.grade && (
                        <span className="inline-block text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
                          {item.grade}
                        </span>
                      )}
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed font-light">
                      {item.description}
                    </p>

                  {item.achievements?.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-4">
                        {item.achievements.map((a, i) => (
                        <span
                          key={a}
                            style={{ animationDelay: `${i * 50}ms` }}
                            className="text-sm text-gray-700 bg-gradient-to-br from-blue-50 to-indigo-50 px-4 py-2 rounded-full border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fadeIn"
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                  )}

                  {item.link && (
                    <div className="pt-2">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 text-xs uppercase tracking-wider"
                      >
                        Visit Project
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"/></svg>
                      </a>
                    </div>
                  )}

                    {item.details && (
                      <div className="pt-4 space-y-4 border-l-2 border-gray-200 pl-6">
                        {item.details
                          .split("\n\n")
                          .map((p, i) => (
                            <p
                              key={i}
                              className="text-gray-700 leading-relaxed font-light"
                            >
                              {p}
                            </p>
                          ))}
                    </div>
                  )}
                </div>

                  <div className="lg:col-span-5">
                {item.imageSrc && (
                      <ImageCarousel
                        images={
                          (Array.isArray(item.imageSrc)
                            ? item.imageSrc
                            : [item.imageSrc]
                          ).filter(Boolean) as string[]
                        }
                        title={item.title}
                      onOpen={(src) => setFullscreenImage(src)}
                      />
                    )}
                  </div>
              </div>

              {idx < data.items.length - 1 && (
                  <div className="border-t border-gray-200 mt-16 pt-8 relative">
                    <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-6 h-6 bg-white border-2 border-gray-200 rounded-full" />
                  </div>
              )}
            </article>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* Fullscreen image viewer */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md animate-fadeIn"
          onClick={() => setFullscreenImage(null)}
        >
          <button
            className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 w-12 h-12 flex items-center justify-center hover:scale-110 hover:rotate-90 transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation()
              setFullscreenImage(null)
            }}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={fullscreenImage}
            alt="Fullscreen"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-2xl shadow-2xl animate-scaleIn"
          />
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out forwards;
        }
      `}</style>
    </main>
  )
}