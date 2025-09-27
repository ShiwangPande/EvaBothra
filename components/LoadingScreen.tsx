"use client"

import { motion, Variants, easeInOut } from "framer-motion"
import { useEffect, useState } from "react"

const letterAnimation: Variants = {
  initial: { 
    y: 400, 
    opacity: 0 
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: easeInOut,
      duration: 1,
    },
  },
  exit: {
    y: -200,
    opacity: 0,
    transition: {
      ease: easeInOut,
      duration: 0.5,
    },
  },
}

const containerAnimation: Variants = {
  initial: { 
    height: "100vh" 
  },
  animate: { 
    height: "0vh",
    transition: {
      duration: 1.5,
      delay: 2.5,
      ease: "easeInOut",
    },
  },
}

const lineAnimation: Variants = {
  initial: { width: "0%" },
  animate: { 
    width: "100%",
    transition: {
      duration: 1,
      delay: 0.5,
      ease: "easeInOut",
    },
  },
}

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 1
      })
    }, 20)
    return () => clearInterval(timer)
  }, [])

  const firstName = "EVA".split("")
  const lastName = "BOTHRA".split("")

  return (
    <motion.div
      variants={containerAnimation}
      initial="initial"
      animate="animate"
      className="fixed inset-0 bg-black z-50 overflow-hidden flex items-center justify-center"
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          variants={lineAnimation}
          initial="initial"
          animate="animate"
          className="absolute -top-8 h-[1px] bg-white/30 w-full"
        />

        <div className="flex gap-2 sm:gap-4 md:gap-8">
          <div className="flex">
            {firstName.map((letter, i) => (
              <motion.span
                key={`first-${letter}-${i}`}
                variants={letterAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: i * 0.1 }}
                className="text-[12vw] sm:text-[15vw] font-['Ayer_Poster_Web'] text-white inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </div>

          <div className="flex">
            {lastName.map((letter, i) => (
              <motion.span
                key={`last-${letter}-${i}`}
                variants={letterAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.3 + i * 0.1 }}
                className="text-[12vw] sm:text-[15vw] font-['Ayer_Poster_Web'] text-white inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.div
          variants={lineAnimation}
          initial="initial"
          animate="animate"
          className="absolute -bottom-8 h-[1px] bg-white/30 w-full"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          exit={{ opacity: 0 }}
          className="absolute -bottom-16 text-white/50 text-sm tracking-[0.2em]"
        >
          LOADING
        </motion.div>

        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-white/20"
        >
          <motion.div 
            className="h-full bg-white"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}