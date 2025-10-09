"use client"

import { portfolioData } from "@/lib/data"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"], weight: ["400","500","600","700"], display:"swap" })

export default function ReflectionsPage() {
  const data = portfolioData.reflections

  return (
    <main className={`min-h-screen bg-gradient-to-b from-white via-amber-50/30 to-white ${inter.className}`}>
      
      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 pt-32 pb-20 text-center">
        <div className="inline-block mb-4">
          <span className="text-xs font-semibold tracking-widest uppercase text-amber-700 bg-amber-100/80 px-4 py-2 rounded-full">
            Insights & Learnings
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
          {data.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {data.description}
        </p>
      </section>

      {/* Reflections */}
      <section className="max-w-5xl mx-auto px-6 md:px-8 pb-32 space-y-16">
        {data.items.map((item, index) => (
          <article
            key={item.id}
            className="group relative bg-white backdrop-blur-sm shadow-lg hover:shadow-2xl rounded-2xl border border-gray-200/80 overflow-hidden transition-all duration-500 hover:-translate-y-2"
          >
            {/* Gradient accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            
            <div className="p-8 md:p-12">
              {/* Header */}
              <header className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    {item.category}
                  </span>
                  {item.grade && (
                    <>
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                        {item.grade}
                      </span>
                    </>
                  )}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight transition-colors duration-300 group-hover:text-amber-600">
                  {item.title}
                </h2>
              </header>

              {/* Description */}
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 font-medium">
                {item.description}
              </p>

              {/* Details */}
              <div className="space-y-5 text-gray-600 leading-relaxed mb-8 pl-4 border-l-2 border-gray-200 group-hover:border-amber-400 transition-colors duration-500">
                {item.details.split("\n\n").map((p, i) => (
                  <p key={i} className="text-base md:text-lg">
                    {p}
                  </p>
                ))}
              </div>

              {/* Achievements */}
              {item.achievements?.length > 0 && (
                <div className="mb-8 bg-gradient-to-br from-gray-50 to-amber-50/30 rounded-xl p-6 border border-gray-100">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-700 mb-4">
                    Key Achievements
                  </h3>
                  <ul className="space-y-3">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700 group/item">
                        <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 group-hover/item:scale-150 transition-transform duration-300"></span>
                        <span className="text-base md:text-lg leading-relaxed group-hover/item:text-gray-900 transition-colors duration-200">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA Link */}
              {item.link && (
                <div className="flex">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-white bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transition-all duration-300 hover:scale-105 group/btn"
                  >
                    <span>Read Full Article</span>
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
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
            </div>
          </article>
        ))}
      </section>

      {/* Bottom spacing */}
      <div className="h-20"></div>
    </main>
  )
}