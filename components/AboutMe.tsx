import { motion, easeInOut } from 'framer-motion'
import { portfolioData } from '@/lib/data'

const quoteVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.8,
      ease: easeInOut,
    }
  }
}

export default function AboutMe() {
  const aboutData = portfolioData.about

  return (
    <div className="py-16">
      <motion.div 
        className="max-w-4xl mx-auto px-4 mb-20"
        variants={quoteVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="relative">
          {/* Decorative quote marks */}
          <span className="absolute -top-8 -left-8 text-8xl font-serif text-black/10">"</span>
          <span className="absolute -bottom-8 -right-8 text-8xl font-serif text-black/10">"</span>
          
          {/* Quote content */}
          <div className="text-center">
            <p className="text-2xl italic font-light leading-relaxed mb-6">
              {aboutData.callToAction}
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-12 bg-black/20"></div>
              <p className="text-sm uppercase tracking-widest text-black/50">Eva Bothra</p>
              <div className="h-[1px] w-12 bg-black/20"></div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-['Ayer_Poster_Web'] mb-8">{aboutData.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img 
            src="https://res.cloudinary.com/dqv4mucxh/image/upload/v1758997183/eva_m1yafy.jpg"
            alt="Eva Bothra Profile"
            className="w-full h-[600px] object-cover"
          />
          <div>
            <p className="text-lg leading-relaxed mb-6">
              {aboutData.description}
            </p>
            <div className="space-y-4">
              {aboutData.fullStory.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm mt-8">
              <div>
                <h3 className="font-medium mb-2">Education</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>Stanford Mathematics Program</li>
                  <li>Harvard Ventures Tech</li>
                  <li>IB Diploma Programme</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Key Traits</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>Grit & Resilience</li>
                  <li>Anti-fragile Mindset</li>
                  <li>Wise Beyond Years</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}