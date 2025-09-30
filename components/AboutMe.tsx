import { motion, easeInOut } from 'framer-motion'
import { portfolioData } from '@/lib/data'

const quoteVariants = {
  initial: { opacity: 0, y: 30, scale: 0.98 },
  animate: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      delay: 0.2,
      duration: 0.8,
      ease: easeInOut,
    }
  }
}

const imageVariants = {
  initial: { opacity: 0, scale: 0.96, x: 40 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    x: 0,
    transition: { duration: 0.8, delay: 0.3, ease: easeInOut }
  }
}

const textVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, delay: 0.5, ease: easeInOut }
  }
}

type AboutMeProps = {
  compact?: boolean
}

export default function AboutMe({ compact = false }: AboutMeProps) {
  const aboutData = portfolioData.about

  return (
    <section className={compact ? "py-12 bg-white relative overflow-x-clip" : "py-20 bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc] relative overflow-x-clip"}>
      {/* Decorative background shapes */}
      {/* Ultra-minimal, refined quote presentation */}
      <motion.div
  className="max-w-3xl mx-auto px-6 mb-16 relative z-10"
  variants={quoteVariants}
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
>
  <figure className="text-center">
    <blockquote>
      <p className="text-2xl md:text-4xl font-serif italic leading-relaxed text-gray-800 relative">
        <span
          className="absolute -left-6 -top-4 text-5xl text-gray-300 font-bold select-none"
          aria-hidden="true"
        >
          “
        </span>
        <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
          {aboutData.callToAction}
        </span>
        <span
          className="absolute -right-6 -bottom-4 text-5xl text-gray-300 font-bold select-none"
          aria-hidden="true"
        >
          ”
        </span>
      </p>
    </blockquote>

    <motion.figcaption
      className="mt-8 text-center text-base md:text-lg text-gray-600 font-medium tracking-wide"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <span
        className="inline-block w-10 h-px bg-gray-300 align-middle mr-3"
        aria-hidden="true"
      ></span>
      Eva Bothra
      <span
        className="inline-block w-10 h-px bg-gray-300 align-middle ml-3"
        aria-hidden="true"
      ></span>
    </motion.figcaption>
  </figure>
</motion.div>


      {/* Title Centered */}
      <motion.h2 
        className={compact ? "text-3xl md:text-4xl font-bold mb-10 text-center text-[#007B78] tracking-tight" : "text-4xl md:text-5xl font-bold mb-14 text-center text-[#007B78] drop-shadow tracking-tight"}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: easeInOut }}
        viewport={{ once: true }}
      >
        {aboutData.title}
      </motion.h2>

      {/* Main Content - Image full left, Text full right, some text below for best alignment */}
      <div className={compact ? "max-w-6xl mx-auto px-4 relative z-10" : "max-w-6xl mx-auto px-4 relative z-10"}>
        <div
          className={
            compact
              ? "flex flex-col md:flex-row gap-10 items-center"
              : "flex flex-col md:flex-row gap-16 items-start"
          }
        >
          {/* Profile Image - full left */}
          <motion.div
            className={
              compact
                ? "w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0"
                : "w-full md:w-1/2 flex justify-center md:justify-end mb-10 md:mb-0"
            }
            variants={imageVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="relative group">
              <img
                src="https://res.cloudinary.com/dqv4mucxh/image/upload/v1758997183/eva_m1yafy.jpg"
                alt="Eva Bothra Profile"
                className={
                  compact
                    ? "w-[240px] h-[320px] md:w-[320px] md:h-[420px] object-cover rounded-2xl shadow-xl border-4 border-white group-hover:scale-105 transition-transform duration-300"
                    : "w-[340px] h-[480px] object-cover rounded-2xl shadow-xl border-4 border-white group-hover:scale-105 transition-transform duration-300"
                }
                loading="lazy"
              />
              {/* Subtle overlay */}
              {!compact && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </div>
          </motion.div>
          {/* Text Content - full right */}
          <motion.div
            className={compact ? "w-full md:w-1/2" : "w-full md:w-1/2"}
            variants={textVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div>
              <p
                className={
                  compact
                    ? "text-base md:text-lg leading-relaxed mb-4 text-gray-800 text-left"
                    : "text-lg md:text-xl leading-relaxed mb-6 text-gray-800 font-light"
                }
              >
                {aboutData.description}
              </p>
              <div className="space-y-5">
                {(compact
                  ? aboutData.fullStory.split('\n\n').slice(0, 1)
                  : aboutData.fullStory.split('\n\n')
                ).map((paragraph, index) => (
                  <p
                    key={index}
                    className={
                      compact
                        ? "text-gray-700 leading-relaxed text-base text-left"
                        : "text-gray-700 leading-relaxed text-base md:text-lg"
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            {/* Education and Key Traits below on large screens, stacked on small */}
            {!compact && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm mt-10">
                <div className="bg-white/80 border border-gray-100 rounded-lg shadow-sm p-5">
                  <h3 className="font-semibold mb-2 text-[#007B78] tracking-wide">Education</h3>
                  <ul className="space-y-1 text-gray-700 list-disc list-inside">
                    <li>Stanford Mathematics Program</li>
                    <li>Harvard Ventures Tech</li>
                    <li>IB Diploma Programme</li>
                  </ul>
                </div>
                <div className="bg-white/80 border border-gray-100 rounded-lg shadow-sm p-5">
                  <h3 className="font-semibold mb-2 text-[#007B78] tracking-wide">Key Traits</h3>
                  <ul className="space-y-1 text-gray-700 list-disc list-inside">
                    <li>Grit &amp; Resilience</li>
                    <li>Anti-fragile Mindset</li>
                    <li>Wise Beyond Years</li>
                  </ul>
                </div>
              </div>
            )}
          </motion.div>
        </div>
        {/* For best alignment, show Education/Traits below on mobile if not compact */}
        {!compact && (
          <div className="block md:hidden mt-10">
            <div className="grid grid-cols-1 gap-6 text-sm">
              <div className="bg-white/80 border border-gray-100 rounded-lg shadow-sm p-5">
                <h3 className="font-semibold mb-2 text-[#007B78] tracking-wide">Education</h3>
                <ul className="space-y-1 text-gray-700 list-disc list-inside">
                  <li>Stanford Mathematics Program</li>
                  <li>Harvard Ventures Tech</li>
                  <li>IB Diploma Programme</li>
                </ul>
              </div>
              <div className="bg-white/80 border border-gray-100 rounded-lg shadow-sm p-5">
                <h3 className="font-semibold mb-2 text-[#007B78] tracking-wide">Key Traits</h3>
                <ul className="space-y-1 text-gray-700 list-disc list-inside">
                  <li>Grit &amp; Resilience</li>
                  <li>Anti-fragile Mindset</li>
                  <li>Wise Beyond Years</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}