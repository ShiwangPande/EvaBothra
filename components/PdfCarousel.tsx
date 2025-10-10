import { useState } from "react"
import { Card } from "@/components/ui/card"

export function PdfCarousel({ pdfs }: { pdfs: string[] }) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? pdfs.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === pdfs.length - 1 ? 0 : c + 1))

  return (
    <div className="relative w-full">
      <Card className="overflow-hidden rounded-lg shadow">
        <iframe
          src={pdfs[current]}
          className="w-full rounded-md border"
          style={{ minHeight: 480, maxHeight: 700 }}
          allow="autoplay"
          title={`PDF ${current + 1}`}
        ></iframe>
      </Card>

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-3 gap-2">
        {pdfs.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition ${
              i === current ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
