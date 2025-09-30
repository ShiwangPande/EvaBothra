"use client"

import { useEffect, useMemo, useState } from 'react'
import { Quote } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

type Testimonial = {
  id: number
  author: string
  role: string
  content: string
  imageSrc: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    author: 'Dr. Sarah Johnson',
    role: 'Stanford Mathematics Program Director',
    content:
      'An exceptional student with remarkable analytical abilities. Her dedication to the Advanced Mathematics Program was outstanding.',
    imageSrc: '/professional-headshot-of-accomplished-young-person.jpg',
  },
  {
    id: 2,
    author: 'Michael Chen',
    role: 'Tech4Bharat Mentor',
    content:
      'Demonstrated incredible leadership skills and innovative thinking in developing technological solutions for social impact.',
    imageSrc: '/person-in-business-attire--professional-portrait.jpg',
  },
  {
    id: 3,
    author: 'Priya Nair',
    role: 'SFCC Co-Lead',
    content:
      'Her clarity, ownership, and calm under pressure helped us deliver India’s largest student wellness campaign.',
    imageSrc: '/young-leader-presenting-at-tech-conference-with-au.jpg',
  },
  {
    id: 4,
    author: 'Arjun Mehta',
    role: 'Janam Partner, Aastrika',
    content:
      'Janam would not be where it is without her execution. She pairs empathy with rigor — rare and invaluable.',
    imageSrc: '/person-in-coat-standing-by-boats-on-shore--moody-l.jpg',
  },
]

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [current, setCurrent] = useState(0)
  const total = useMemo(() => TESTIMONIALS.length, [])

  useEffect(() => {
    if (!api) return
    const onSelect = () => setCurrent(api.selectedScrollSnap())
    api.on('select', onSelect)
    onSelect()
    return () => {
      api.off('select', onSelect)
    }
  }, [api])

  // Simple autoplay
  useEffect(() => {
    if (!api) return
    const id = setInterval(() => {
      if (!api) return
      const lastIdx = total - 1
      const next = api.selectedScrollSnap() >= lastIdx ? 0 : api.selectedScrollSnap() + 1
      api.scrollTo(next)
    }, 5000)
    return () => clearInterval(id)
  }, [api, total])

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-8">Testimonials</h2>
        <p className="text-center text-gray-600 mb-10">
          What mentors and collaborators say about working with me
        </p>

        <div className="relative">
          <Carousel setApi={setApi} opts={{ align: 'start', loop: true }}>
            <CarouselContent>
              {TESTIMONIALS.map((t) => (
                <CarouselItem key={t.id} className="md:basis-1/2 lg:basis-1/2">
                  <article
                    className={cn(
                      'group h-full rounded-xl border border-black/10 bg-white p-6 shadow-sm transition-all',
                      'hover:shadow-lg hover:-translate-y-1'
                    )}
                  >
                    <Quote className="text-black/20" />
                    <p className="mt-4 text-gray-700 leading-relaxed">{t.content}</p>

                    <div className="mt-6 flex items-center">
                      <img
                        src={t.imageSrc}
                        alt={t.author}
                        className="w-12 h-12 rounded-full object-cover border"
                      />
                      <div className="ml-4">
                        <p className="font-medium text-black">{t.author}</p>
                        <p className="text-sm text-gray-500">{t.role}</p>
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>

          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => api?.scrollTo(i)}
                className={cn(
                  'h-2 w-2 rounded-full transition-all',
                  i === current ? 'bg-black w-6' : 'bg-gray-300'
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}