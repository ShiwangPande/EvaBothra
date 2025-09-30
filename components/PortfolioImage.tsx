// components/PortfolioImage.tsx
import { memo, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { TRANSITION_CLASSES } from '../app/constants'

interface PortfolioImageProps {
  isSelected: boolean
  hasSelection: boolean
  imageSrc: string
  altText: string
  sectionKey: string
  onClick?: () => void
  enableNavigation?: boolean
  href?: string
  external?: boolean
}

export const PortfolioImage = memo(function PortfolioImage({
  isSelected,
  hasSelection,
  imageSrc,
  altText,
  sectionKey,
  onClick,
  enableNavigation = false,
  href,
  external
}: PortfolioImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  const handleClick = () => {
    if (href) {
      if (external) {
        window.open(href, '_blank')
      } else {
        router.push(href)
      }
    } else if (enableNavigation) {
      router.push(`/${sectionKey}`)
    } else if (onClick) {
      onClick()
    }
  }

  const className = `${TRANSITION_CLASSES.base} ${
    isSelected
      ? TRANSITION_CLASSES.selected
      : hasSelection
        ? TRANSITION_CLASSES.unselected
        : TRANSITION_CLASSES.hover
  }`

  return (
    <motion.div
      className={`${className} w-full max-w-[280px] aspect-[4/5] relative cursor-pointer overflow-hidden group`}
      onClick={handleClick}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-black/10 animate-pulse z-10" />
      )}

      <Image
        src={imageSrc}
        alt={altText}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
        className="object-cover border-black border-2 transition-transform duration-500 group-hover:scale-105"
        onLoad={() => setIsLoading(false)}
      />

      {/* Overlay with section title */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end">
        <div className="p-3 md:p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="font-['Ayer_Poster_Web'] text-sm md:text-lg leading-tight">
            {altText}
          </h3>
          {enableNavigation && (
            <p className="text-xs md:text-sm opacity-80 mt-1">Click to explore →</p>
          )}
        </div>
      </div>
    </motion.div>
  )
})