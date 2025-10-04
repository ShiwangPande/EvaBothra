"use client"

import { motion, Variants, easeInOut } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const letterAnimation: Variants = {
  initial: { 
    y: 400, 
    opacity: 0 
  },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      ease: easeInOut,
      duration: 1,
      delay: i * 0.08,
    },
  }),
  exit: (i: number) => ({
    y: -200,
    opacity: 0,
    transition: {
      ease: easeInOut,
      duration: 0.5,
      delay: i * 0.05,
    },
  }),
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
  const [smoothProgress, setSmoothProgress] = useState(0)
  const requestRef = useRef<number | null>(null)

  // Progress logic: fill to 100% over 2s, then hold
  useEffect(() => {
    let start: number | null = null
    let animationFrame: number

    function animateProgress(ts: number) {
      if (start === null) start = ts
      const elapsed = ts - start
      const duration = 2000 // ms
      let nextProgress = Math.min(100, (elapsed / duration) * 100)
      setProgress(nextProgress)
      if (nextProgress < 100) {
        animationFrame = requestAnimationFrame(animateProgress)
      } else {
        setProgress(100)
      }
    }

    animationFrame = requestAnimationFrame(animateProgress)
    return () => cancelAnimationFrame(animationFrame)
  }, [])

  // Smooth progress bar using lerp
  useEffect(() => {
    function lerp(a: number, b: number, t: number) {
      return a + (b - a) * t
    }
    let running = true
    function animate() {
      setSmoothProgress(prev => {
        const next = lerp(prev, progress, 0.15)
        if (Math.abs(next - progress) < 0.5) return progress
        return next
      })
      if (running && smoothProgress < 100) {
        requestRef.current = requestAnimationFrame(animate)
      }
    }
    if (progress < 100 || smoothProgress < 100) {
      running = true
      requestRef.current = requestAnimationFrame(animate)
    }
    return () => {
      running = false
      if (requestRef.current) cancelAnimationFrame(requestRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress])

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
                custom={i}
                variants={letterAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
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
                custom={i + firstName.length}
                variants={letterAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
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
            animate={{ width: `${smoothProgress}%` }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            style={{ willChange: "width" }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}