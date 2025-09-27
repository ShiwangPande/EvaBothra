import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  X,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Calendar,
  Users,
  Award,
  TrendingUp,
  Clock,
} from "lucide-react";
import type {
  PortfolioSection,
  AboutSection,
  PortfolioItem,
  AcademicSubsection,
} from "@/lib/types";
import { KeyboardNavigation } from "./KeyboardNavigation";

interface ContentOverlayProps {
  data: PortfolioSection | AboutSection;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
}

const overlayVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const contentVariants = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -100, opacity: 0 },
};

const MinimalSummaryCard = ({ item }: { item: PortfolioItem }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white border border-gray-300 p-4 hover:border-black transition-all duration-300 group"
  >
    <div className="flex justify-between items-start mb-3">
      <div className="flex-1">
        <h4 className="text-base font-medium text-black group-hover:text-gray-600 transition-colors mb-2">
          {item.title}
        </h4>
        <div className="flex flex-wrap items-center gap-2 mb-2">
          {item.grade && (
            <span className="flex items-center gap-1 bg-gray-100 text-black px-2 py-1 text-xs border border-gray-300">
              <Calendar className="w-3 h-3" />
              {item.grade}
            </span>
          )}
          <span className="bg-black text-white px-2 py-1 text-xs">
            {item.category}
          </span>
        </div>
      </div>
      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black transition-colors p-1 border border-gray-300 hover:border-black"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      )}
    </div>
    <p className="text-gray-700 text-sm mb-3 line-clamp-2">{item.description}</p>
    <div className="flex flex-wrap gap-1">
      {item.achievements &&
        item.achievements.slice(0, 2).map((achievement, idx) => (
          <span
            key={idx}
            className="bg-gray-100 text-black px-2 py-1 text-xs border border-gray-300"
          >
            {achievement}
          </span>
        ))}
      {item.achievements && item.achievements.length > 2 && (
        <span className="text-gray-500 text-xs">
          +{item.achievements.length - 2} more
        </span>
      )}
    </div>
  </motion.div>
);

export function ContentOverlay({
  data,
  onClose,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
}: ContentOverlayProps) {
  // Type guards
  const isAboutSection = (data as AboutSection).fullStory !== undefined;
  const isAcademicSection = 'sections' in data && (data as any).sections !== undefined;
  const hasItems =
    "items" in data && Array.isArray(data.items) && data.items.length > 0;
  const hasStats =
    "stats" in data && Array.isArray(data.stats) && data.stats.length > 0;

  return (
    <motion.div
      variants={overlayVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <motion.div
        variants={contentVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="bg-white max-w-4xl w-full max-h-[80vh] overflow-y-auto relative border border-gray-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Minimal Header */}
        <div className="sticky top-0 bg-white border-b border-gray-300 p-6 flex items-center justify-between z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-medium text-black"
          >
            {data.title}
          </motion.h2>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="text-gray-600 hover:text-black transition-colors p-2 border border-gray-300 hover:border-black"
            aria-label="Close overlay"
            type="button"
          >
            <X className="w-6 h-6 stroke-[1.5]" />
          </motion.button>
        </div>

        <div className="p-6">
          {/* Minimal Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden border border-gray-300"
            >
              <img
                src={(data as any).imageSrc || "/placeholder.jpg"}
                alt={data.title}
                className="w-full aspect-[4/3] object-contain"
              />
            </motion.div>
            {/* Summary Content */}
            <div className="text-black space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gray-700 leading-relaxed text-base"
              >
                {data.description}
              </motion.p>
              {/* Minimal Stats */}
              {hasStats && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="grid grid-cols-2 gap-3"
                >
                  {(data as any).stats
                    .slice(0, 4)
                    .map(
                      (
                        stat: { label: string; value: string | ReactNode },
                        index: number
                      ) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          className="bg-white border border-gray-300 p-4 hover:border-black transition-all duration-300"
                        >
                          <div className="text-lg font-medium text-black mb-1">
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-600 uppercase tracking-wider">
                            {stat.label}
                          </div>
                        </motion.div>
                      )
                    )}
                </motion.div>
              )}
            </div>
          </div>

          {/* Minimal Content Sections */}
          <div className="space-y-6">
            {/* About Section - Brief Summary Only */}
            {isAboutSection && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-white border border-gray-300 p-6"
              >
                <h3 className="text-xl font-medium text-black mb-4 flex items-center gap-3">
                  <div className="p-2 bg-black text-white">
                    <Users className="w-5 h-5" />
                  </div>
                  About
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Brief overview - View full story on the dedicated page
                </p>
              </motion.div>
            )}

            {/* Academic Section - Brief Overview */}
            {isAcademicSection && (data as any).sections && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="space-y-4"
              >
                {Object.entries((data as any).sections).map(
                  ([key, section], sectionIndex) => {
                    const typedSection = section as AcademicSubsection;
                    return (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + sectionIndex * 0.1 }}
                        className="bg-white border border-gray-300 p-4"
                      >
                        <h3 className="text-lg font-medium text-black mb-3 flex items-center gap-2">
                          <div className="p-1 bg-black text-white">
                            {key === "academicPerformance" && (
                              <Award className="w-4 h-4" />
                            )}
                            {key === "olympiads" && (
                              <TrendingUp className="w-4 h-4" />
                            )}
                            {key === "research" && (
                              <Clock className="w-4 h-4" />
                            )}
                          </div>
                          {typedSection.title}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {typedSection.items
                            .slice(0, 4)
                            .map((item, itemIndex: number) => (
                              <MinimalSummaryCard key={item.id} item={item} />
                            ))}
                        </div>
                        {typedSection.items.length > 4 && (
                          <p className="text-gray-500 text-xs mt-3 italic">
                            +{typedSection.items.length - 4} more items - View
                            full details on the dedicated page
                          </p>
                        )}
                      </motion.div>
                    );
                  }
                )}
              </motion.div>
            )}

            {/* Regular Portfolio Items - Brief Overview */}
            {hasItems && !isAcademicSection && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-medium text-black mb-4 flex items-center gap-3">
                  <div className="p-2 bg-black text-white">
                    <Award className="w-5 h-5" />
                  </div>
                  Key Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {(data as any).items
                    .slice(0, 6)
                    .map((item: PortfolioItem, index: number) => (
                      <MinimalSummaryCard key={item.id} item={item} />
                    ))}
                </div>
                {(data as any).items.length > 6 && (
                  <p className="text-gray-500 text-xs mt-3 italic">
                    +{(data as any).items.length - 6} more items - View full
                    details on the dedicated page
                  </p>
                )}
              </motion.div>
            )}
          </div>
        </div>

        {/* Navigation arrows */}
        {hasPrev && (
          <motion.button
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black bg-white border border-gray-300 hover:border-black p-3"
            type="button"
          >
            <ArrowLeft className="w-6 h-6" />
          </motion.button>
        )}

        {hasNext && (
          <motion.button
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black bg-white border border-gray-300 hover:border-black p-3"
            type="button"
          >
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        )}

        {/* Keyboard navigation */}
        <KeyboardNavigation
          onClose={onClose}
          onNext={hasNext ? onNext : undefined}
          onPrev={hasPrev ? onPrev : undefined}
        />
      </motion.div>
    </motion.div>
  );
}