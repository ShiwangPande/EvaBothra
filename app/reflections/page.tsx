"use client"

import Image from 'next/image'
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
              
              {item.imageSrc && (
                <div className="relative w-full h-64 md:h-80 rounded-md overflow-hidden border border-gray-200 mb-6">
                  <Image src={item.imageSrc} alt={item.title} fill className="object-contain" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              )}
              
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
              
              {item.link && (
                <div className="mt-6">
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 group/link"
                  >
                    <span>Read Full Article</span>
                    <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

