"use client"

import Image from 'next/image'
import { portfolioData } from '@/lib/data'

export default function CommunityPage() {
  const data = portfolioData.community

  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] gap-10 lg:gap-16 items-start">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">{data.title}</h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">{data.description}</p>
            {data.stats && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
                {data.stats.map((s) => (
                  <div key={String(s.label)} className="border border-purple-200 rounded-md p-4">
                    <div className="text-2xl md:text-3xl font-semibold text-purple-950">{s.value}</div>
                    <div className="text-xs uppercase tracking-wider text-purple-700 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            <div className="relative w-full h-64 md:h-96 rounded-md overflow-hidden border border-purple-200">
              <Image src={data.imageSrc} alt={data.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-8 pb-24 space-y-8">
        {data.items.map((item) => (
          <article key={item.id} className="border border-gray-200 rounded-lg p-6">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <h3 className="text-xl font-medium leading-snug">{item.title}</h3>
              {item.grade && <span className="text-xs text-gray-500 uppercase tracking-wider whitespace-nowrap">{item.grade}</span>}
            </div>
            <p className="text-gray-700 leading-relaxed mb-3">{item.description}</p>
            {item.imageSrc && (
              <div className="relative w-full h-56 md:h-64 rounded-md overflow-hidden border border-gray-200 mb-3">
                <Image src={item.imageSrc} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 45vw" />
              </div>
            )}
            {item.achievements?.length ? (
              <div className="flex flex-wrap gap-2 mb-3">
                {item.achievements.map((a) => (
                  <span key={a} className="text-xs bg-gray-50 text-gray-800 px-2.5 py-1 rounded border border-gray-200">{a}</span>
                ))}
              </div>
            ) : null}
            {item.details && (
              <p className="mt-2 text-gray-800 leading-relaxed">
                {item.details.split('\n\n')[0]}
              </p>
            )}
          </article>
        ))}
      </section>
    </main>
  )
}

