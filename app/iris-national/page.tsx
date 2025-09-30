"use client"

import { ExternalLink } from "lucide-react"

const stats = [
  { label: "Finalist", value: "Top 0.5% of 8,000+ applicants" },
  { label: "Material", value: "Banana Stem & Rice Husk" },
  { label: "Type", value: "Biodegradable Faux Leather" },
  { label: "Focus", value: "Sustainability & Scalability" },
]

export default function IrisNationalPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            IRIS National Science Fair <span className="font-normal text-black">– Finalist</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Selected from over 8,000 students nationwide, I presented an original prototype of biodegradable faux leather made entirely from banana stems and rice husks at the IRIS National Science Fair. The project grew from curiosity-driven experimentation in chemistry and materials science—concepts I had first explored during my IGCSE science studies, which taught me to approach problems methodically, observe carefully, and iterate constantly.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600">
            {stats.map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-gray-500">{s.label}:</span>
                <span className="font-medium text-gray-800">{s.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr,320px] gap-10 md:gap-12 items-start">
          <div className="space-y-10">
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">Project at a Glance</h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>
                  Innovation: Developed a biodegradable faux leather using agricultural waste—banana stems and rice husks.
                </li>
                <li>
                  Sustainability: 100% plant-based, non-toxic, and designed for scalability.
                </li>
                <li>
                  Approach: Combined scientific research with cost analysis and feasibility.
                </li>
                <li>
                  Recognition: Presented before a national jury; awarded Finalist status.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">My IRIS Journey</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Unlike a purely theoretical project, I moved from idea to prototype to production. I extracted fibers from banana stems, processed rice husks, and combined them using natural binders, experimenting with texture, durability, and flexibility until the material could actually function as leather. Beyond the lab, I approached the project like an entrepreneur: calculating costs, optimizing production steps, and imagining how this material could be scaled for real-world applications.
                </p>
                <p>
                  Presenting before a panel of national experts was both exhilarating and humbling. I learned that science isn’t just about invention—it’s about defending your process, explaining your choices, and translating technical complexity into clear, compelling communication. Standing there, I felt the full arc of research: curiosity, experimentation, iteration, and public engagement.
                </p>
                <p>
                  The IRIS experience was my first true intersection of science and entrepreneurship, showing me how rigorous research can be paired with practical innovation to create solutions that matter.
                </p>
              </div>
            </section>
          </div>

          <aside className="space-y-3 md:space-y-4">
            <div className="relative w-full h-0 overflow-hidden rounded-md" style={{ paddingTop: '56.25%' }}>
              <iframe
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full border-0 rounded-md"
                src="https://www.canva.com/design/DAGeOH86NII/X3th3VpGAFR7zZ-Fd6wuSA/view?embed"
                allowFullScreen
                title="IRIS Biodegradable Leather – Presentation"
              />
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <a
                href="https://www.canva.com/design/DAGeOH86NII/X3th3VpGAFR7zZ-Fd6wuSA/view?utm_content=DAGeOH86NII&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
                target="_blank"
                rel="noopener"
                className="underline hover:text-gray-800 flex items-center"
              >
                <ExternalLink className="mr-1 h-4 w-4" /> Presentation
              </a>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600 eva-font">by Eva Bothra</span>
            </div>
          
          </aside>
        </div>
      </section>
    </main>
  )
}
