"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { portfolioData } from "@/lib/data"

// Google Fonts
import { Inter, Playfair_Display, Poppins, Lora } from 'next/font/google'
import { Card } from "@/components/ui/card"

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

/**
 * A single grid item in the carousel, can be image or video.
 */
function CarouselGridItem({
  src,
  type,
  alt,
  onOpen,
}: {
  src: string
  type: "image" | "video"
  alt: string
  onOpen: (src: string) => void
}) {
  if (type === "video") {
    return (
      <div className="relative overflow-hidden rounded-xl bg-gray-100 group hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-200">
        <video
          src={src}
          controls
          className="object-cover w-full h-full rounded-xl bg-black"
          style={{ aspectRatio: "9/14", width: "100%", height: "100%" }}
        />
        <div className="absolute inset-0 flex items-center justify-center transition bg-black/0 group-hover:bg-black/10" />
      </div>
    )
  }
  // type === "image"
  return (
    <button
      type="button"
      onClick={() => onOpen(src)}
      className="relative overflow-hidden rounded-xl bg-gray-100 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-200"
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        sizes="(max-width: 640px) 60vw, (max-width: 1024px) 30vw, (max-width: 1280px) 20vw, 15vw"
      />
    </button>
  )
}

/**
 * Image carousel that can optionally append a video as the last item (for certain ids).
 * To inject a video, just pass `video` prop with the video URL and it'll show after images.
 */
function ImageCarousel({
  images,
  title,
  onOpen,
  video,
}: {
  images: string[]
  title: string
  onOpen: (src: string) => void
  video?: string
}) {
  // Add last item as a video if video is passed
  const carouselItems: { src: string; type: "image" | "video" }[] =
    video
      ? [
          ...images.map((src) => ({ src, type: "image" as const })),
          { src: video, type: "video" as const }
        ]
      : images.map((src) => ({ src, type: "image" as const }))

  // Group into slides of 4 (whether image or video)
  const slides: { src: string; type: "image" | "video" }[][] = []
  for (let i = 0; i < carouselItems.length; i += 4) {
    slides.push(carouselItems.slice(i, i + 4))
  }
  const total = slides.length

  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const groupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (carouselItems.length <= 4) return
    if (isPaused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      return
    }
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total)
    }, 4000)
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [carouselItems.length, total, isPaused])

  // stop autoplay when cursor is inside carousel
  useEffect(() => {
    const node = groupRef.current
    if (!node) return

    const handleMouseEnter = () => setIsPaused(true)
    const handleMouseLeave = () => setIsPaused(false)
    const handleFocusIn = () => setIsPaused(true)
    const handleFocusOut = () => setIsPaused(false)
    node.addEventListener("mouseenter", handleMouseEnter)
    node.addEventListener("mouseleave", handleMouseLeave)
    node.addEventListener("focusin", handleFocusIn)
    node.addEventListener("focusout", handleFocusOut)

    return () => {
      node.removeEventListener("mouseenter", handleMouseEnter)
      node.removeEventListener("mouseleave", handleMouseLeave)
      node.removeEventListener("focusin", handleFocusIn)
      node.removeEventListener("focusout", handleFocusOut)
    }
  }, [])

  const goPrev = () => setCurrent((prev) => (prev - 1 + total) % total)
  const goNext = () => setCurrent((prev) => (prev + 1) % total)

  return (
    <div className="w-full relative group" ref={groupRef} tabIndex={-1}>
      <div className="relative w-full aspect-[9/14] overflow-hidden rounded-2xl bg-gray-50">
        <div className="absolute inset-0 grid grid-cols-2 gap-2 p-2 sm:gap-2.5 sm:p-2.5">
          {(slides[current] ?? [carouselItems[0]]).map((item, i) => (
            <CarouselGridItem
              key={i}
              src={item.src}
              type={item.type}
              alt={`${title} - image ${i + 1}`}
              onOpen={item.type === "image" ? onOpen : () => {}}
            />
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

function JanamImageCarousel({
  images,
  title,
  onOpen,
}: {
  images: string[]
  title: string
  onOpen: (src: string) => void
}) {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const groupRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (images.length <= 4) return
    if (isPaused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      return
    }
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % Math.ceil(images.length / 4))
    }, 4000)
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [images, isPaused])

  useEffect(() => {
    const node = groupRef.current
    if (!node) return
    const handleMouseEnter = () => setIsPaused(true)
    const handleMouseLeave = () => setIsPaused(false)
    const handleFocusIn = () => setIsPaused(true)
    const handleFocusOut = () => setIsPaused(false)
    node.addEventListener("mouseenter", handleMouseEnter)
    node.addEventListener("mouseleave", handleMouseLeave)
    node.addEventListener("focusin", handleFocusIn)
    node.addEventListener("focusout", handleFocusOut)
    return () => {
      node.removeEventListener("mouseenter", handleMouseEnter)
      node.removeEventListener("mouseleave", handleMouseLeave)
      node.removeEventListener("focusin", handleFocusIn)
      node.removeEventListener("focusout", handleFocusOut)
    }
  }, [])

  // Group into slides of 4
  const slides: string[][] = []
  for (let i = 0; i < images.length; i += 4) {
    slides.push(images.slice(i, i + 4))
  }
  const total = slides.length

  const goPrev = () => setCurrent((prev) => (prev - 1 + total) % total)
  const goNext = () => setCurrent((prev) => (prev + 1) % total)

  return (
    <div className="w-full relative group" ref={groupRef} tabIndex={-1}>
      <div className="relative w-full aspect-[9/14] overflow-hidden rounded-xl bg-gray-50">
        <div className="absolute inset-0 grid grid-cols-2 gap-1.5 p-1.5 sm:gap-2 sm:p-2">
          {(slides[current] ?? [images[0]]).map((src, i) => (
            <button
              key={i}
              onClick={() => onOpen(src)}
              className="relative overflow-hidden rounded-lg bg-gray-100 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-200"
              style={{ minHeight: 0, minWidth: 0 }}
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
            <div key={`empty-${i}`} className="bg-gray-100 rounded-lg" />
          ))}
        </div>

        {/* Arrows */}
        {total > 1 && (
          <>
            <button
              onClick={goPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-700 shadow-md w-7 h-7 flex items-center justify-center rounded-full backdrop-blur-sm transition-all hover:scale-110"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-700 shadow-md w-7 h-7 flex items-center justify-center rounded-full backdrop-blur-sm transition-all hover:scale-110"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Dots */}
        {total > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full transition-colors duration-200 ${
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

function VideoCarousel() {
  const videos = [
    { src: "https://www.youtube-nocookie.com/embed/d3KAGsU3RqA?rel=0&modestbranding=1&controls=1&showinfo=0" },
    { src: "https://www.youtube-nocookie.com/embed/F_dkUmR9-tU?rel=0&modestbranding=1&controls=1&showinfo=0" },
    { src: "https://www.youtube-nocookie.com/embed/mfUfVLlnCC8?rel=0&modestbranding=1&controls=1&showinfo=0" },
    { src: "https://www.youtube-nocookie.com/embed/j1-eG0nUBMI?rel=0&modestbranding=1&controls=1&showinfo=0" },
  ];
  const [currentVideoIdx, setCurrentVideoIdx] = useState(0);

  function handlePrev() {
    setCurrentVideoIdx((idx) => (idx === 0 ? videos.length - 1 : idx - 1));
  }

  function handleNext() {
    setCurrentVideoIdx((idx) => (idx === videos.length - 1 ? 0 : idx + 1));
  }

  return (
    <div className="relative max-w-3xl mx-auto mt-8">
      <Card className="overflow-hidden rounded-lg shadow-sm transition">
        <div className="aspect-video bg-gray-100 flex items-center justify-center text-gray-500 relative">
          <iframe
            src={videos[currentVideoIdx].src}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-sm"
            title={`Leadership Video ${currentVideoIdx + 1}`}
          />
        </div>
      </Card>
      {/* Carousel Controls */}
      <button
        onClick={handlePrev}
        type="button"
        aria-label="Previous Video"
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white shadow-md w-10 h-10 flex items-center justify-center z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={handleNext}
        type="button"
        aria-label="Next Video"
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white shadow-md w-10 h-10 flex items-center justify-center z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <div className="flex justify-center gap-2 mt-4">
        {videos.map((_, i) => (
          <button
            key={i}
            className={`w-2.5 h-2.5 rounded-full ${i === currentVideoIdx ? "bg-blue-600" : "bg-gray-300"} transition`}
            aria-label={`Go to video ${i + 1}`}
            onClick={() => setCurrentVideoIdx(i)}
          />
        ))}
      </div>
    </div>
  );
}

// Fixed PdfCarousel for correct function/naming/labeling and proper absolute controls positioning
function PdfCarousel() {
  const pdfs = [
    { src: "https://drive.google.com/file/d/1hPMpAPniE0lTkuHK8ss66PzsbefqStBU/preview" },
    { src: "https://drive.google.com/file/d/1Nhd7HuDpsKVaxbdtdB1KvBaOOfIE8Bku/preview" },
  ];
  const [currentPdfIdx, setCurrentPdfIdx] = useState(0);

  function handlePrevPdf() {
    setCurrentPdfIdx((idx) => (idx === 0 ? pdfs.length - 1 : idx - 1));
  }

  function handleNextPdf() {
    setCurrentPdfIdx((idx) => (idx === pdfs.length - 1 ? 0 : idx + 1));
  }

  return (
    <div className="w-full flex flex-col items-center mt-2 relative">
      <div className="mb-2 text-gray-600 text-sm font-[family-name:var(--font-inter)]">
        {/* PDF instruction notice */}
        <span>Scroll inside the PDF to read all pages.</span>
      </div>
      <Card className="overflow-hidden rounded-lg shadow-sm transition w-full">
        <div className="aspect-[16/9] bg-gray-100 flex items-center justify-center text-gray-500 relative w-full">
          <iframe
            src={pdfs[currentPdfIdx].src}
            className="w-full h-[550px] rounded-md border shadow"
            style={{ minHeight: 500, maxHeight: 950 }}
            allowFullScreen
            title={`Leadership Pdf ${currentPdfIdx + 1}`}
          ></iframe>
          {/* Carousel Controls for PDF (absolute inside Card for proper overlay) */}
          {pdfs.length > 1 && (
            <>
              <button
                onClick={handlePrevPdf}
                type="button"
                aria-label="Previous PDF"
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white shadow-md w-10 h-10 flex items-center justify-center z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNextPdf}
                type="button"
                aria-label="Next PDF"
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white shadow-md w-10 h-10 flex items-center justify-center z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>
      </Card>
      {pdfs.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {pdfs.map((_, i) => (
            <button
              key={i}
              className={`w-2.5 h-2.5 rounded-full ${i === currentPdfIdx ? "bg-blue-600" : "bg-gray-300"} transition`}
              aria-label={`Go to PDF ${i + 1}`}
              onClick={() => setCurrentPdfIdx(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ExpandableDetails({ details, maxHeight = 300 }: { details: string; maxHeight?: number }) {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [showToggle, setShowToggle] = useState(false);

  useEffect(() => {
    if (contentRef.current && contentRef.current.scrollHeight > maxHeight) {
      setShowToggle(true);
    }
  }, [details, maxHeight]);

  return (
    <div className="relative pt-4 border-l-4 border-blue-100 pl-6">
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-500 ${
          expanded ? "max-h-[9999px]" : `max-h-[${maxHeight}px]`
        }`}
        style={{
          maskImage:
            !expanded && showToggle
              ? "linear-gradient(to bottom, black 80%, transparent 100%)"
              : "none",
        }}
      >
        {details.split("\n\n").map((p, i) => (
          <p
            key={i}
            className="text-base md:text-lg text-gray-700 leading-[1.8] font-normal font-[family-name:var(--font-lora)] text-justify mb-4"
          >
            {p}
          </p>
        ))}
      </div>

      {showToggle && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-blue-600 hover:text-blue-800 text-sm font-semibold inline-flex items-center gap-1 transition-all"
        >
          {expanded ? "Read less" : "Read more"}
          <svg
            className={`w-4 h-4 transform transition-transform ${
              expanded ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default function LeadershipPage() {
  const data = portfolioData.leadership
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null)

  // Map of item.id to video link for the ImageCarousel (extendable for new items)
  const imageCarouselVideoMap: Record<string, string> = {
    "teenlink": "https://res.cloudinary.com/dqv4mucxh/video/upload/v1760200070/WhatsApp_Video_2025-10-11_at_13.29.26_b316050e_es9i8m.mp4",
    "sfcc": "https://res.cloudinary.com/dqv4mucxh/video/upload/v1760200115/WhatsApp_Video_2025-10-11_at_13.25.44_d29a715c_mnpdam.mp4",
    "cortisolx": "https://res.cloudinary.com/dqv4mucxh/video/upload/v1760200124/WhatsApp_Video_2025-10-11_at_13.25.05_359cb289_jgpyvk.mp4",
    "finance-club":"https://res.cloudinary.com/dqv4mucxh/video/upload/v1760200150/WhatsApp_Video_2025-10-11_at_13.20.04_f02ff77a_wp8ebc.mp4"
    // Add more ids and videos here as needed
  }

  return (
    <main className={`min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 ${inter.variable} ${playfair.variable} ${poppins.variable} ${lora.variable}`}>
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[75vh] px-6 md:px-10 bg-white">
        <div className="max-w-4xl text-center space-y-8">
          {/* Title */}
          <FadeInSection>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-tight font-[family-name:var(--font-playfair)]">
              {data.title}
            </h1>
          </FadeInSection>
          {/* Description */}
          <FadeInSection delay={100}>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-[family-name:var(--font-inter)]">
              {data.description}
            </p>
          </FadeInSection>
          {/* Stats */}
          {data.stats && (
            <FadeInSection delay={200}>
              <div className="mt-20 pt-10 border-t border-gray-200">
                <div className="flex flex-row justify-center items-end gap-x-16 max-w-4xl mx-auto flex-nowrap overflow-x-auto">
                  {data.stats.map((s) => (
                    <div
                      key={String(s.label)}
                      className="text-center flex-shrink-0 min-w-[120px]"
                      style={{whiteSpace: 'nowrap'}}
                    >
                      <div className="text-5xl font-bold text-gray-900 mb-1 leading-tight">
                        {s.value}
                      </div>
                      <div className="text-sm text-gray-500 leading-tight">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          )}
          {/* Quote */}
          <FadeInSection delay={300}>
            <p className="mt-16 text-2xl md:text-3xl font-medium text-gray-800 font-[family-name:var(--font-playfair)] italic">
              "This is only the beginning"
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Leadership Items */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-28 pt-10 space-y-28">
        {data.items.map((item, idx) => (
          <FadeInSection key={item.id} delay={100}>
            <article className="relative">
              <div className="grid lg:grid-cols-12 gap-10 md:gap-12 items-start">
                {/* Text content - left */}
                {item.id === "jpis-science-fair" || item.id === "school-captain" ? (
                  <div className="col-span-12 space-y-6 order-2 lg:order-1 text-left">
                    <div>
                      <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors leading-[1.15] font-[family-name:var(--font-playfair)] text-left">
                        {item.title}
                      </h3>
                      {item.grade && (
                        <span className="inline-block text-sm font-semibold text-gray-700 bg-gray-100 px-4 py-2 rounded-full border border-gray-200 font-[family-name:var(--font-inter)]">
                          {item.grade}
                        </span>
                      )}
                    </div>
                    <p className="text-lg md:text-xl text-gray-700 leading-[1.8] font-normal font-[family-name:var(--font-lora)] text-left">{item.description}</p>
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
                ) : (
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

                    {item.details && <ExpandableDetails details={item.details} maxHeight={300} />}
                    {item.id ==="janam" &&(
                      <VideoCarousel />
                    )}
                  </div>
                )}
                {/* Images and/or PDF - right */}
                <div className="lg:col-span-5 flex flex-col gap-6 order-1 lg:order-2 pt-6 lg:pt-0">
                  {/* For Janam: show PDF and VideoCarousel */}
                  {item.id === "janam" && (
                    <div className="max-w-4xl w-full">
                      <div
                        className="w-full mb-12 rounded-lg border relative"
                        style={{
                          minHeight: 350,
                          maxHeight: 700,
                          overflow: "hidden",
                        }}
                      >
                        <iframe
                          src="https://www.flipbookpdf.net/web/site/a91af593e66c4fca28ebbcd0edaa10d91b3dfa0b202509.pdf.html"
                          className="w-full"
                          style={{
                            height: "100%",
                            minHeight: 350,
                            maxHeight: 700,
                            overflow: "hidden",
                          }}
                          allowFullScreen
                          title="Quick View PDF"
                          frameBorder={0}
                          scrolling="no"
                        ></iframe>
                        {/* Overlay to prevent wheel/scroll on iframe */}
                        <div
                          className="absolute inset-0"
                          style={{ pointerEvents: "none" }}
                        />
                      </div>
                      <div className="mt-3 text-gray-600 text-xs font-[family-name:var(--font-inter)] italic mb-2">
                        Tip: Click on the images below for a closer look.
                      </div>
                      <JanamImageCarousel
                        images={
                          Array.isArray(item.imageSrc)
                            ? (item.imageSrc.filter(Boolean) as string[])
                            : ([item.imageSrc].filter(Boolean) as string[])
                        }
                        title={item.title}
                        onOpen={setFullscreenImage}
                      />
                    </div>
                  )}

                  {item.id =="iris-national-science-fair-finalist" &&(
                   <div className="relative w-full h-0 overflow-hidden rounded-md" style={{ paddingTop: '56.25%' }}>
                    <div className="mb-2 text-gray-600 text-sm font-[family-name:var(--font-inter)]">
                      Scroll in the embedded presentation below to see more slides.
                    </div>
                   <iframe
                     loading="lazy"
                     className="absolute top-0 left-0 w-full  h-full border-0 rounded-md"
                     src="https://www.canva.com/design/DAGeOH86NII/X3th3VpGAFR7zZ-Fd6wuSA/view?embed"
                     allowFullScreen
                     title="IRIS Biodegradable Leather – Presentation"
                   />
                 </div>
                  )}

                  {/* Show ImageCarousel if imageSrc exists */}
                  {item.imageSrc && item.id !== "janam" && item.id !== "editorial-board" && (
                    <div className="flex flex-col items-center justify-center">
                      <div className="mb-2 text-gray-600 text-xs font-[family-name:var(--font-inter)] italic">
                        Click on the images to get a better idea.
                      </div>
                      <ImageCarousel
                        images={
                          Array.isArray(item.imageSrc)
                            ? item.imageSrc.filter(Boolean)
                            : [item.imageSrc].filter(Boolean)
                        }
                        title={item.title}
                        onOpen={setFullscreenImage}
                        // Inject video carousel for ids in imageCarouselVideoMap
                        {...(imageCarouselVideoMap[item.id]
                          ? { video: imageCarouselVideoMap[item.id] }
                          : {})}
                      />
                    </div>
                  )}

                  {/* Show Editorial Board PDF if id matches */}
                  {item.id === "editorial-board" && (
                    <div className="w-full flex flex-col items-center mt-2">
                      <PdfCarousel/>
                    </div>
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