import { useState } from 'react'

type Testimonial = {
  id: number
  author: string
  role: string
  content: string
  imageSrc: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    author: "Dr. Sarah Johnson",
    role: "Stanford Mathematics Program Director",
    content: "An exceptional student with remarkable analytical abilities. Her dedication to the Advanced Mathematics Program was outstanding.",
    imageSrc: "/professional-headshot-of-accomplished-young-person.jpg"
  },
  {
    id: 2,
    author: "Michael Chen",
    role: "Tech4Bharat Mentor",
    content: "Demonstrated incredible leadership skills and innovative thinking in developing technological solutions for social impact.",
    imageSrc: "/person-in-business-attire--professional-portrait.jpg"
  }
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-['Ayer_Poster_Web'] mb-12 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.imageSrc} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}