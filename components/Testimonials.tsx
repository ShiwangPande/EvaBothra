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
import { Testimonial, TestimonialFormData } from '@/lib/types'
import TestimonialForm from './TestimonialForm'

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [current, setCurrent] = useState(0)
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const total = useMemo(() => testimonials.length, [testimonials])

  // Fetch testimonials on component mount
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/api/testimonials')
        if (response.ok) {
          const data = await response.json()
          setTestimonials(data)
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTestimonials()
  }, [])

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
    if (!api || testimonials.length === 0) return
    const id = setInterval(() => {
      if (!api) return
      const lastIdx = total - 1
      const next = api.selectedScrollSnap() >= lastIdx ? 0 : api.selectedScrollSnap() + 1
      api.scrollTo(next)
    }, 5000)
    return () => clearInterval(id)
  }, [api, total])

  const handleTestimonialSubmit = async (data: TestimonialFormData) => {
    const response = await fetch('/api/testimonials', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error('Failed to submit testimonial')
    }

    // Refresh testimonials
    const updatedResponse = await fetch('/api/testimonials')
    if (updatedResponse.ok) {
      const updatedData = await updatedResponse.json()
      setTestimonials(updatedData)
    }
  }

  if (isLoading) {
    return (
      <section className="py-16 bg-transparent">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading testimonials...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gray-50/50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl">Testimonials</h2>
            <p className="text-gray-600 mt-2">
              What mentors and collaborators say about working with me
            </p>
          </div>
          <TestimonialForm onTestimonialSubmit={handleTestimonialSubmit} />
        </div>

        {testimonials.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">No testimonials yet.</p>
            <TestimonialForm onTestimonialSubmit={handleTestimonialSubmit} />
          </div>
        ) : (
          <div className="relative">
            <Carousel setApi={setApi} opts={{ align: 'start', loop: true }}>
              <CarouselContent>
                {testimonials.map((t) => (
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
                          src={t.imageSrc || '/placeholder-user.jpg'}
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
        )}
      </div>
    </section>
  )
}