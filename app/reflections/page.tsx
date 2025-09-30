"use client"

import { portfolioData } from '@/lib/data'

export default function ReflectionsPage() {
  const data = portfolioData.reflections

  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-3xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">{data.title}</h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12">{data.description}</p>

        <div className="space-y-16">
          {data.items.map((item) => (
            <article key={item.id} className="prose prose-lg max-w-none">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">{item.title}</h2>
              <p className="text-sm text-gray-500 mb-4">{item.category}{item.grade ? ` • ${item.grade}` : ''}</p>
              <p className="text-gray-800 leading-relaxed mb-4">{item.description}</p>
              <div className="space-y-4 text-gray-800 leading-relaxed">
                {item.details.split('\n\n').map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              {item.achievements?.length ? (
                <ul className="mt-4 list-disc pl-5 text-gray-800">
                  {item.achievements.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

