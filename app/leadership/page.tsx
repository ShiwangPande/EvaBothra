"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { portfolioData } from "@/lib/data"

// Google Fonts
import { Inter, Playfair_Display, Poppins, Lora } from 'next/font/google'
import { Card, CardContent } from "@/components/ui/card"

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900']
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700', '800', '900']
})

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
  weight: ['400', '500', '600', '700']
})

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
      <div className="relative w-full aspect-[9/14] overflow-hidden rounded-2xl bg-gray-50">
        <div className="absolute inset-0 grid grid-cols-2 gap-2 p-2 sm:gap-2.5 sm:p-2.5">
          {(slides[current] ?? [images[0]]).map((src, i) => (
            <button
              key={i}
              onClick={() => onOpen(src)}
              className="relative overflow-hidden rounded-xl bg-gray-100 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-200"
            >
              <Image
                src={src}
                alt={`${title} - image ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 640px) 60vw, (max-width: 1024px) 30vw, (max-width: 1280px) 20vw, 15vw"
              />
            </button>
          ))}

          {/* Fill empty slots to maintain 2×2 grid */}
          {Array.from({ length: Math.max(0, 4 - (slides[current]?.length ?? 0)) }).map((_, i) => (
            <div key={`empty-${i}`} className="bg-gray-100 rounded-xl" />
          ))}
        </div>

        {/* Arrows */}
        {total > 1 && (
          <>
            <button
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-700 shadow-md w-8 h-8 flex items-center justify-center rounded-full backdrop-blur-sm transition-all hover:scale-110"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-700 shadow-md w-8 h-8 flex items-center justify-center rounded-full backdrop-blur-sm transition-all hover:scale-110"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Dots */}
        {total > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full transition-colors duration-200 ${
                  i === current ? "bg-gray-800" : "bg-gray-300"
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

  return (
    <main className={`min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 ${inter.variable} ${playfair.variable} ${poppins.variable} ${lora.variable}`}>
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[100vh] px-6 md:px-10 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
  {/* Animated gradient orbs */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-200/40 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-indigo-200/40 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-[20%] left-[10%] w-[200px] h-[200px] bg-blue-100/30 rounded-full blur-2xl animate-bounce-slow" />
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl text-center">
    <FadeInSection>
      <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
        {data.title}
      </h1>
      <p className="text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
        {data.description}
      </p>
    </FadeInSection>

    {/* Stats */}
    {data.stats && (
      <FadeInSection delay={300}>
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-8 justify-center border-t border-gray-200 pt-10">
          {data.stats.map((s) => (
            <div key={String(s.label)} className="text-center">
              <div className="text-3xl md:text-4xl font-semibold text-gray-900 mb-1">
                {s.value}
              </div>
              <div className="text-xs uppercase tracking-widest text-gray-500">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </FadeInSection>
    )}
  </div>

  {/* Scroll indicator */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
      <div className="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-bounce" />
    </div>
  </div>
  </section>

      {/* Leadership Items */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-28 space-y-28">
        {data.items.map((item, idx) => (
          <FadeInSection key={item.id} delay={100}>
            <article className="relative">
              <div className="grid lg:grid-cols-12 gap-10 md:gap-12 items-start">
                {/* Text content - left */}
                <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
                  <div>
                    <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors leading-[1.15] font-[family-name:var(--font-playfair)]">
                      {item.title}
                    </h3>
                    {item.grade && (
                      <span className="inline-block text-sm font-semibold text-gray-700 bg-gray-100 px-4 py-2 rounded-full border border-gray-200 font-[family-name:var(--font-inter)]">
                        {item.grade}
                      </span>
                    )}
                  </div>

                  <p className="text-lg md:text-xl text-gray-700 leading-[1.8] font-normal font-[family-name:var(--font-lora)] text-justify">{item.description}</p>

                  {item.achievements?.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-4">
                      {item.achievements.map((a, i) => (
                        <span
                          key={a}
                          style={{ animationDelay: `${i * 50}ms` }}
                          className="text-sm font-medium text-gray-700 bg-gradient-to-br from-blue-50 to-indigo-50 px-4 py-2 rounded-full border border-blue-100 hover:border-blue-300 hover:shadow-sm transition-all duration-300 font-[family-name:var(--font-inter)]"
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                  )}

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

                  {item.details && (
                    <div className="pt-4 space-y-4 border-l-4 border-blue-100 pl-6">
                      {item.details.split("\n\n").map((p, i) => (
                        <p key={i} className="text-base md:text-lg text-gray-700 leading-[1.8] font-normal font-[family-name:var(--font-lora)] text-justify">
                          {p}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
                {/* Images - right */}
                {item.imageSrc && (
                  <>
                    {item.id === "janam" ? (
                      <div className="max-w-4xl  lg:col-span-5 my-auto order-1 lg:order-2 pt-6 lg:pt-0 scrollbar-hide">
                        <iframe
                          src="https://www.flipbookpdf.net/web/site/a91af593e66c4fca28ebbcd0edaa10d91b3dfa0b202509.pdf.html"
                          className="w-full h-full rounded-lg border overflow-y-hidden"
                          style={{ minHeight: 350, maxHeight: 700 }}
                          allowFullScreen
                          title="Quick View PDF"
                          frameBorder={0}
                        ></iframe>
                      </div>
                    ) : (
                      <div className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2 pt-6 lg:pt-0">
                        <ImageCarousel
                          images={
                            Array.isArray(item.imageSrc)
                              ? item.imageSrc.filter(Boolean)
                              : [item.imageSrc].filter(Boolean)
                          }
                          title={item.title}
                          onOpen={setFullscreenImage}
                        />
                      </div>
                    )}
                  </>
                )}
              </div>

              {idx < data.items.length - 1 && (
                <div className="border-t border-gray-200 mt-16 pt-8 relative">
                  <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-6 h-6 bg-white border-2 border-gray-200 rounded-full" />
                </div>
              )}
            </article>
          </FadeInSection>
        ))}
      </section>

      {/* Fullscreen Image Viewer */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setFullscreenImage(null)}
        >
          <button
            className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 w-12 h-12 flex items-center justify-center hover:scale-110 hover:rotate-90 transition-all"
            onClick={(e) => {
              e.stopPropagation()
              setFullscreenImage(null)
            }}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
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
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out forwards;
        }
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 5s ease-in-out infinite;
        }
      `}</style>
    </main>
  )
}