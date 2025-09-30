"use client"

import { portfolioData } from '@/lib/data'

export default function YoutubePage() {
  const data = portfolioData.youtube

  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">{data.title}</h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10">{data.description}</p>

        {data.stats && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mb-12">
            {data.stats.map((s) => (
              <div key={String(s.label)} className="border border-gray-200 rounded-md p-4">
                <div className="text-2xl md:text-3xl font-semibold">{s.value}</div>
                <div className="text-xs uppercase tracking-wider text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="space-y-10">
          {data.items.map((item) => (
            <article key={item.id} className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-700 mb-3">{item.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {item.achievements?.map((a) => (
                  <span key={a} className="text-xs bg-gray-50 text-gray-800 px-2.5 py-1 rounded border border-gray-200">{a}</span>
                ))}
              </div>
              {item.link && (
                <a href={item.link} target="_blank" rel="noreferrer" className="underline text-gray-700 hover:text-black text-sm">Watch channel</a>
              )}
              {item.details && (
                <p className="mt-3 text-gray-800 leading-relaxed">
                  {item.details.split('\n\n')[0]}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

