"use client"

import Image from "next/image"
import { useState } from "react"
import { portfolioData } from "@/lib/data"

// Simple carousel component
function ImageCarousel({
  images,
  altBase,
  onOpen,
}: {
  images: string[]
  altBase: string
  onOpen: (src: string) => void
  heightClass?: string
}) {
  const [current, setCurrent] = useState(0)

  if (!Array.isArray(images) || images.length === 0) return null

  return (
    <div className={`relative w-full  h-full flex-shrink-0 bg-neutral-100`}>
      <button
        className="absolute top-1/2 left-2 z-10 -translate-y-1/2 bg-white/80 hover:bg-white transition rounded-full p-1.5 shadow active:scale-95"
        style={{ display: images.length > 1 ? undefined : "none" }}
        onClick={(e) => {
          e.stopPropagation()
          setCurrent((prev) => (prev - 1 + images.length) % images.length)
        }}
        aria-label="Previous image"
        tabIndex={0}
        type="button"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="absolute top-1/2 right-2 z-10 -translate-y-1/2 bg-white/80 hover:bg-white transition rounded-full p-1.5 shadow active:scale-95"
        style={{ display: images.length > 1 ? undefined : "none" }}
        onClick={(e) => {
          e.stopPropagation()
          setCurrent((prev) => (prev + 1) % images.length)
        }}
        aria-label="Next image"
        tabIndex={0}
        type="button"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      {/* Image */}
      <button
        onClick={() => onOpen(images[current])}
        className="relative w-full h-full cursor-pointer group/image focus:outline-none"
        type="button"
        tabIndex={0}
      >
        <Image
          src={images[current]}
          alt={`${altBase} - image ${current + 1}`}
          fill
          className="object-contain transition-transform duration-300 group-hover/image:scale-[1.01]"
          sizes="(max-width: 640px) 100vw, 44vw"
        />
        <span className="absolute bottom-3 right-3 bg-white/80 text-xs font-medium px-2 py-1 rounded shadow opacity-0 group-hover/image:opacity-100 transition-opacity duration-200 flex items-center gap-1 z-20">
          🔍 Enlarge
        </span>
      </button>
      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full transition-colors duration-200 ${
                i === current ? "bg-neutral-800" : "bg-neutral-300"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function AwardsPage() {
  const data = portfolioData.awards
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null)

  return (
    <main className="max-w-5xl mx-auto px-4 md:px-8 py-14 space-y-14">
      {/* Page Header */}
      <header className="text-center space-y-3">
        <h1 className="text-4xl font-bold text-neutral-900">{data.title}</h1>
        <p className="text-neutral-500 text-lg max-w-2xl mx-auto leading-relaxed">
          {data.description}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-7">
          {data.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center bg-neutral-50 border border-neutral-200 rounded-xl py-5 shadow-sm hover:shadow transition-all duration-200"
            >
              <span className="text-2xl md:text-3xl font-bold text-neutral-800">
                {stat.value}
              </span>
              <span className="text-sm md:text-base text-neutral-600 font-medium mt-1 text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </header>

      {/* Key Awards Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-7 text-neutral-900">Key Awards</h2>
        <div className="flex flex-col gap-8">
          {data.items.map((item, idx) => (
            <article
              key={item.id}
              className="group relative flex flex-col sm:flex-row-reverse bg-white border border-neutral-100 rounded-xl shadow hover:shadow-lg transition-all duration-200 overflow-hidden w-full"
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              {/* Image or Video - Right Side */}
              {(!!item.imageSrc || !!item.images) && (
                <div className="relative w-full sm:w-[44%] h-56 sm:h-[300px] md:h-[340px] flex-shrink-0 bg-neutral-100">
                  {item.id === "health-ministry-recognition" ? (
                    // 🎥 Video (inline, no enlarge)
                    <iframe
                      loading="lazy"
                      className="absolute inset-0 w-full h-full rounded-none border-0"
                      src="https://www.canva.com/design/DAGfI0aecvg/WLz8bTZobs-t17rDqfXjmg/watch?embed"
                      allowFullScreen
                    ></iframe>
                  ) : Array.isArray(item.images) && item.images.length > 0 ? (
                    // Multiple Images: Carousel
                    <ImageCarousel
                      images={item.images}
                      altBase={item.title}
                      onOpen={setFullscreenImage}
                    />
                  ) : (
                    // Single Image
                    <button
                      onClick={() => setFullscreenImage(typeof item.imageSrc === "string" ? item.imageSrc : null)}
                      className="relative w-full h-full cursor-pointer group/image focus:outline-none"
                      type="button"
                      tabIndex={0}
                    >
                      <Image
                        src={typeof item.imageSrc === "string" ? item.imageSrc : ""}
                        alt={item.title}
                        fill
                        className="object-contain transition-transform duration-300 group-hover/image:scale-[1.01]"
                        sizes="(max-width: 640px) 100vw, 44vw"
                      />
                      <span className="absolute bottom-3 right-3 bg-white/80 text-xs font-medium px-2 py-1 rounded shadow opacity-0 group-hover/image:opacity-100 transition-opacity duration-200 flex items-center gap-1 z-20">
                        🔍 Enlarge
                      </span>
                    </button>
                  )}
                </div>
              )}

              {/* Text Content - Left Side */}
              <div className="p-5 md:p-8 flex flex-col justify-center flex-1 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg md:text-xl font-semibold text-neutral-900 leading-snug">
                    {item.title}
                  </h3>
                  {item.grade && (
                    <span className="text-xs font-medium bg-neutral-200 text-neutral-700 px-3 py-1 rounded-full">
                      {item.grade}
                    </span>
                  )}
                </div>

                <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>

                {item.achievements?.length ? (
                  <div className="flex flex-wrap gap-1.5">
                    {item.achievements.map((a) => (
                      <span
                        key={a}
                        className="text-xs font-medium bg-neutral-50 border border-neutral-200 text-neutral-700 px-2.5 py-1 rounded-full"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                ) : null}

                {item.details && (
                  <p className="text-neutral-500 text-sm border-t border-neutral-100 pt-3">
                    {item.details.split("\n\n")[0]}
                  </p>
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

                {/* {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors duration-150 group/link w-fit pt-2"
                  >
                    <span>Learn More</span>
                    <svg
                      className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-150"
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
                )} */}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 🖼 Fullscreen Image Viewer */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setFullscreenImage(null)}
        >
          <Image
            src={fullscreenImage}
            alt="Fullscreen Award"
            width={1000}
            height={1000}
            className="object-contain max-h-[90vh] w-auto rounded-lg"
          />
        </div>
      )}
    </main>
  )
}
