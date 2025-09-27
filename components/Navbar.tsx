"use client"

import { usePathname, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { NAV_ITEMS, ANIMATION_VARIANTS } from '@/app/constants'

const Navbar = () => {
  const pathname = usePathname()
  const router = useRouter()

  const handleNavClick = (href: string) => {
    if (href === '/') {
      router.push('/')
    } else if (pathname === '/') {
      // If we're on home page, scroll to section
      const sectionId = href.replace('/', '')
      const element = document.querySelector(`#${sectionId}`)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      } else {
        // If section doesn't exist on home, navigate to dedicated page
        router.push(href)
      }
    } else {
      // Navigate to the dedicated page
      router.push(href)
    }
  }

  const isHomePage = pathname === '/'
  const currentSection = pathname.slice(1) // Remove leading slash

  return (
    <motion.nav
      variants={ANIMATION_VARIANTS.slideUp}
      transition={{ duration: 0.5, delay: isHomePage ? 3.2 : 0.2 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <div className="bg-white/95 backdrop-blur-sm border border-black p-2 rounded-sm shadow-lg">
        <ul className="flex flex-wrap gap-2 text-xs max-w-md">
          {NAV_ITEMS.map((item) => {
            const sectionName = item.href === '/' ? '' : item.href.slice(1)
            const isActive = isHomePage 
              ? item.href === '/' 
              : currentSection === sectionName

            return (
              <motion.li
                key={item.href}
                whileHover={{ 
                  backgroundColor: "#000", 
                  color: "#fff",
                  scale: 1.05 
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick(item.href)}
                className={`px-3 py-2 cursor-pointer border transition-all duration-200 ${
                  isActive
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black border-gray-300 hover:border-black'
                }`}
              >
                <span className="whitespace-nowrap">{item.label}</span>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </motion.nav>
  )
}

export default Navbar