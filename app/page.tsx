"use client";

import { useState, useCallback, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LoadingScreen } from "@/components/LoadingScreen";
import { PortfolioImage } from "@/components/PortfolioImage";
import { ContentOverlay } from "@/components/ContentOverlay";
import { portfolioData } from "@/lib/data";
import { ANIMATION_VARIANTS } from "@/app/constants";
import type { PortfolioSection } from "@/lib/types";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Tabbar from "@/components/Tabbar";

// Dynamic imports
const AboutMe = dynamic(() => import("@/components/AboutMe"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const ContactForm = dynamic(() =>
  import("@/components/ContactForm").then((mod) => mod.default)
);

export default function HomePage() {
  const [selectedSectionKey, setSelectedSectionKey] = useState<
    keyof typeof portfolioData | null
  >(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("portfolio");
  const [isReady, setIsReady] = useState(false);
  const [viewMode, setViewMode] = useState<"overlay" | "navigate">("overlay");
  const router = useRouter();

  const handleClose = useCallback(() => setSelectedSectionKey(null), []);

  const handleImageClick = useCallback(
    (key: keyof typeof portfolioData) => {
      if (viewMode === "navigate") {
        router.push(`/${key}`);
      } else {
        setSelectedSectionKey((current) => (current === key ? null : key));
      }
    },
    [viewMode, router]
  );

  // Toggle between overlay and navigation modes
  const toggleViewMode = useCallback(() => {
    setViewMode((current) =>
      current === "overlay" ? "navigate" : "overlay"
    );
    setSelectedSectionKey(null); // Close any open overlay
  }, []);

  // Intersection Observer for section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setIsReady(true), 500);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const tiles = portfolioData.homeTiles ?? [];

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <motion.div
        className="min-h-screen bg-white relative"
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* Background Title */}
        <motion.div
          variants={ANIMATION_VARIANTS.fadeIn}
          transition={{ duration: 0.8, delay: 3 }}
          className="fixed inset-0 flex items-center justify-center pointer-events-none z-0"
        >
          <span className="text-[15vw] sm:text-[18vw] lg:text-[20vw] font-medium eva-font select-none leading-none">
            EVA BOTHRA
          </span>
        </motion.div>

        {/* Tagline instead of toggle */}
        {/* 
        <motion.div
          variants={ANIMATION_VARIANTS.slideUp}
          transition={{ duration: 0.5, delay: 3.8 }}
          className="fixed top-4 right-4 md:top-8 md:right-8 z-40"
        >
          <div className="bg-white border border-black px-3 py-2 md:px-4 md:py-2 text-xs md:text-sm">
            Enter into the journey of my impact.
          </div>
        </motion.div> 
        */}

        {/* Portfolio Grid */}
        <motion.section
          id="portfolio"
          variants={ANIMATION_VARIANTS.fadeIn}
          transition={{ duration: 0.8, delay: 3.5 }}
          className="min-h-screen py-20 relative z-10"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <motion.div
              variants={ANIMATION_VARIANTS.stagger}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-12"
            >
              {tiles.map((tile) => (
                <motion.div
                  key={tile.key}
                  variants={ANIMATION_VARIANTS.slideUp}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center"
                >
                  <PortfolioImage
                    isSelected={false}
                    hasSelection={false}
                    imageSrc={tile.imageSrc}
                    altText={tile.title}
                    sectionKey={tile.key}
                    href={tile.href}
                    external={tile.external}
                    enableNavigation={false}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
        {/* <Navbar/> */}

        {/* Additional Sections */}
        {isReady && (
          <Suspense fallback={null}>
            <section id="about" className="relative z-10 py-8 md:py-12">
              <AboutMe compact />
            </section>

            <section id="testimonials" className=" relative z-10 py-8 md:py-12">
              <Testimonials />
            </section>

            <section id="contact" className="relative z-10 py-8 md:py-12">
              <ContactForm />
            </section>
          </Suspense>
        )}

        {/* Content Overlay */}
        <AnimatePresence>
          {selectedSectionKey && viewMode === "overlay" && (
            <motion.div
              variants={ANIMATION_VARIANTS.fadeIn}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <ContentOverlay
                data={portfolioData[selectedSectionKey] as PortfolioSection}
                onClose={handleClose}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}