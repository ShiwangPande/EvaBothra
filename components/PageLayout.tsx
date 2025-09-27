import { motion } from "framer-motion"
import { ReactNode } from "react"

interface PageLayoutProps {
  title: string
  subtitle?: string
  children: ReactNode
}

export function PageLayout({ title, subtitle, children }: PageLayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white p-8 max-w-7xl mx-auto"
    >
      <motion.h1 
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="text-4xl font-bold mb-4"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-gray-600 mb-8 text-lg"
        >
          {subtitle}
        </motion.p>
      )}
      {children}
    </motion.div>
  )
}