"use client"

import Image from 'next/image'
import { portfolioData } from '@/lib/data'

export default function AwardsPage() {
  const data = portfolioData.awards

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
                  <div key={String(s.label)} className="border border-amber-200 rounded-md p-4">
                    <div className="text-2xl md:text-3xl font-semibold text-amber-950">{s.value}</div>
                    <div className="text-xs uppercase tracking-wider text-amber-700 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            <div className="relative w-full h-64 md:h-96 rounded-md overflow-hidden border border-amber-200">
              <Image src={data.imageSrc} alt={data.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-8 pb-24 space-y-12">
        <h2 className="text-3xl md:text-4xl font-semibold">Key Awards</h2>
        <div className="space-y-6">
          {data.items.map((item) => (
            <article key={item.id} className="border border-gray-200 rounded-lg p-6">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                <h3 className="text-xl font-medium leading-snug">{item.title}</h3>
                {item.grade && <span className="text-xs text-gray-500 uppercase tracking-wider whitespace-nowrap">{item.grade}</span>}
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">{item.description}</p>
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
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Certificates</h2>
          <p className="text-gray-600 mb-8">Key recognitions and results</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <figure className="space-y-2">
              <a href="https://res.cloudinary.com/dqv4mucxh/image/upload/v1759259344/IBO-Integrated-Objective-Test_fki6bx.jpg" target="_blank" rel="noreferrer" className="block">
                <img src="https://res.cloudinary.com/dqv4mucxh/image/upload/v1759259344/IBO-Integrated-Objective-Test_fki6bx.jpg" alt="IBO Integrated Objective Test" className="w-full rounded-md border border-gray-200" />
              </a>
              <figcaption className="text-sm text-gray-700">IBO Integrated Objective Test</figcaption>
            </figure>
            <figure className="space-y-2">
              <a href="https://res.cloudinary.com/dqv4mucxh/image/upload/v1759259344/IBO-Gold-Award_mi4dci.jpg" target="_blank" rel="noreferrer" className="block">
                <img src="https://res.cloudinary.com/dqv4mucxh/image/upload/v1759259344/IBO-Gold-Award_mi4dci.jpg" alt="IBO Gold Award" className="w-full rounded-md border border-gray-200" />
              </a>
              <figcaption className="text-sm text-gray-700">IBO Gold Award</figcaption>
            </figure>
            <figure className="space-y-2">
              <a href="https://res.cloudinary.com/dqv4mucxh/image/upload/v1759259343/EAE-regional-Top_rg4nri.jpg" target="_blank" rel="noreferrer" className="block">
                <img src="https://res.cloudinary.com/dqv4mucxh/image/upload/v1759259343/EAE-regional-Top_rg4nri.jpg" alt="EAE Regional Top" className="w-full rounded-md border border-gray-200" />
              </a>
              <figcaption className="text-sm text-gray-700">EAE Regional Top</figcaption>
            </figure>
            <figure className="space-y-2">
              <a href="https://res.cloudinary.com/dqv4mucxh/image/upload/v1759259343/EAE-Highest-Distinction_elt2jy.jpg" target="_blank" rel="noreferrer" className="block">
                <img src="https://res.cloudinary.com/dqv4mucxh/image/upload/v1759259343/EAE-Highest-Distinction_elt2jy.jpg" alt="EAE Highest Distinction" className="w-full rounded-md border border-gray-200" />
              </a>
              <figcaption className="text-sm text-gray-700">EAE Highest Distinction</figcaption>
            </figure>
            <figure className="space-y-2">
              <a href="https://res.cloudinary.com/dqv4mucxh/image/upload/v1759259342/IBO-National-Team-Performance_ueaqs7.jpg" target="_blank" rel="noreferrer" className="block">
                <img src="https://res.cloudinary.com/dqv4mucxh/image/upload/v1759259342/IBO-National-Team-Performance_ueaqs7.jpg" alt="IBO National Team Performance" className="w-full rounded-md border border-gray-200" />
              </a>
              <figcaption className="text-sm text-gray-700">IBO National Team Performance</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </main>
  )
}

