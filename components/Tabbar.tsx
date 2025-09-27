"use client"
import { usePathname, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { NAV_ITEMS } from '@/app/constants'
const Tabbar = () => {
    const pathname = usePathname()
    const router = useRouter()
    const slideUp = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -100, opacity: 0 }
}
    return (
        <>
          <motion.nav
          variants={slideUp}
          transition={{ duration: 0.5, delay: 3.2 }}
          className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50"
        >
            <ul className="flex flex-wrap gap-2 md:gap-3 text-sm md:text-base max-w-[90vw] md:max-w-none">
                {NAV_ITEMS.map((item) => {
                    const isActive = pathname === item.href
                    return (
                        <motion.li
                            key={item.href}
                            whileHover={{ backgroundColor: "#fff", color: "#000" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => router.push(item.href)}
                            className={`border border-black px-2 py-1 md:px-3 md:py-1 text-sm md:text-base transition-all cursor-pointer rounded ${isActive
                                    ? 'bg-black text-white'
                                    : 'bg-white text-black hover:bg-white hover:text-black'
                                }`}
                            style={{
                                backgroundColor: isActive ? "#000" : "#fff",
                                color: isActive ? "#fff" : "#000"
                            }}
                        >
                            <span className="hidden sm:inline">{item.label}</span>
                            <span className="sm:hidden">{item.label.split(' ')[0]}</span>
                        </motion.li>
                    )
                })}
            </ul>
            </motion.nav>
        </>
    );
}

export default Tabbar;