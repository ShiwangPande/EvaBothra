// components/PortfolioImage.tsx
import { memo, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { TRANSITION_CLASSES } from '../app/constants'

interface PortfolioImageProps {
  isSelected: boolean
  hasSelection: boolean
  imageSrc: string
  altText: string
  sectionKey: string
  onClick?: () => void
}

export const PortfolioImage = memo(function PortfolioImage({
  isSelected,
  hasSelection,
  imageSrc,
  altText,
  sectionKey,
  onClick,
}: PortfolioImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  const className = `${TRANSITION_CLASSES.base} ${
    isSelected
      ? TRANSITION_CLASSES.selected
      : hasSelection
        ? TRANSITION_CLASSES.unselected
        : TRANSITION_CLASSES.hover
  }`

  return (
    <motion.div
      className={`${className} w-full max-w-[240px] aspect-[4/5] relative cursor-pointer overflow-hidden group`}
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -3 }}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-black/10 animate-pulse z-10" />
      )}

      <Image
        src={imageSrc}
        alt={altText}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
        className="object-cover border-gray-200 border-2 transition-all duration-500 group-hover:scale-105 group-hover:shadow-lg"
        onLoad={() => setIsLoading(false)}
        quality={90}
        priority={false}
      />

      {/* Overlay with better visual feedback */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
        <div className="w-full flex justify-center pb-4">
          <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-white/20">
            <p className="text-sm font-semibold text-gray-800">
              Click to explore →
            </p>
          </div>
        </div>
      </div>
      
      {/* Subtle border highlight on hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#007B78]/50 rounded-lg transition-all duration-300 pointer-events-none"></div>
    </motion.div>
  )
})