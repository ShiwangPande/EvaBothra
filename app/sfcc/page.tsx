"use client"

import { motion } from 'framer-motion'

export default function SFCCPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-light text-black mb-6">Students for Collaborative Change – Finance Head</h1>
        <div className="mb-6">
          <a href="https://www.youtube.com/watch?v=G_ya89GaXDg" target="_blank" rel="noreferrer" className="text-blue-700 underline">
            Campaign Video
          </a>
        </div>
        <p className="text-gray-700 mb-4">
          As Finance Head for SFCC, I co-led India’s most extensive student wellness campaign: a 12-hour national livestream that attracted 1,000+ participants and raised $140,000+. My role spanned sponsor negotiations, allocation of funds, and directing operations to sustain on-ground therapy in Kota, a city where over 100,000 students prepare for competitive exams under intense pressure.
          </p>
        <p className="text-gray-700 mb-4">
          I personally coordinated workshops in hostels with psychologists Dr. Prerna Maheshwari and Dr. Pankhuri Monga, directly engaging 300 students. The funds we raised enabled us to place full-time therapists in Kota, providing free, continuous mental health support.
          </p>
        <p className="text-gray-700 mb-8">
          Being on the ground in Kota, hearing students’ silent struggles, made every sponsorship negotiation urgent and personal. For me, finance became more than numbers — it was the scaffolding for lives under strain.
          </p>
        <div className="aspect-video w-full mb-8">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/G_ya89GaXDg"
            title="SFCC Livestream"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
      </section>
    </main>
  )
}


