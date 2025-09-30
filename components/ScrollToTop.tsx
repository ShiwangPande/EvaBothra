"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react" // modern arrow icon

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop
      setIsVisible(y > 300)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!isVisible) return null

  return (
    <button
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className="fixed bottom-20 right-6 z-50 
      cursor-pointer
        flex items-center justify-center
        w-12 h-12 md:w-14 md:h-14 
        rounded-full 
        bg-black text-white 
        shadow-xl border border-gray-300
        hover:bg-white hover:text-black
        transition-all duration-300 
        hover:scale-110"
    >
      <ChevronUp size={24} strokeWidth={2.5} />
    </button>
  )
}
