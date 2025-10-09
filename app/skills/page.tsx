"use client";

import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/lib/data";
import React, { useState, useEffect, useRef } from "react";
import {
  X,
  TrendingUp,
  Users,
  DollarSign,
  Briefcase,
  Sparkles,
  Award,
  Zap,
  CheckCircle2,
} from "lucide-react";

// Category Style Mappings
const categoryColors = {
  Technical:
    "from-blue-500/10 via-blue-400/5 to-purple-500/10 border-blue-400/30",
  Design:
    "from-purple-500/10 via-purple-400/5 to-pink-500/10 border-purple-400/30",
  Business:
    "from-emerald-500/10 via-emerald-400/5 to-teal-500/10 border-emerald-400/30",
  Leadership:
    "from-amber-500/10 via-amber-400/5 to-orange-500/10 border-amber-400/30",
  Impact: "from-rose-500/10 via-rose-400/5 to-red-500/10 border-rose-400/30",
  Communication:
    "from-cyan-500/10 via-cyan-400/5 to-blue-500/10 border-cyan-400/30",
} as const;

const categoryTextColors = {
  Technical: "text-blue-600",
  Design: "text-purple-600",
  Business: "text-emerald-600",
  Leadership: "text-amber-600",
  Impact: "text-rose-600",
  Communication: "text-cyan-600",
} as const;

const categoryBgGradients = {
  Technical: "from-blue-500/5 to-purple-500/5",
  Design: "from-purple-500/5 to-pink-500/5",
  Business: "from-emerald-500/5 to-teal-500/5",
  Leadership: "from-amber-500/5 to-orange-500/5",
  Impact: "from-rose-500/5 to-red-500/5",
  Communication: "from-cyan-500/5 to-blue-500/5",
} as const;

const categoryAccentColors = {
  Technical: "bg-blue-500",
  Design: "bg-purple-500",
  Business: "bg-emerald-500",
  Leadership: "bg-amber-500",
  Impact: "bg-rose-500",
  Communication: "bg-cyan-500",
} as const;

// Type definitions
type SkillItem = {
  id: string;
  title: string;
  description: string;
  category: keyof typeof categoryColors;
  grade: string;
  details: string;
  achievements: string[];
};

// Stat parsing utilities
function parseStatValue(value: string) {
  if (/^\d+\+$/.test(value)) {
    return parseInt(value.replace("+", ""), 10);
  }
  if (/^₹\d+L\+$/.test(value)) {
    return parseInt(value.replace(/[^\d]/g, ""), 10);
  }
  if (/^\d{1,3}(,\d{3})+\+$/.test(value)) {
    return parseInt(value.replace(/[^\d]/g, ""), 10);
  }
  const numStr = value.replace(/[^\d]/g, "");
  return parseInt(numStr, 10) || null;
}

function formatStatValue(original: string, value: number, animated: boolean) {
  if (!animated) return original;

  if (/^₹\d+L\+$/.test(original)) {
    return value === 0 ? original : `₹${value}L+`;
  }
  if (/^\d+\+$/.test(original)) {
    return value === 0 ? original : `${value}+`;
  }
  if (/^\d{1,3}(,\d{3})+\+$/.test(original)) {
    return value === 0 ? original : `${value.toLocaleString()}+`;
  }
  return value === 0 ? original : `${value}+`;
}

export default function SkillsPage() {
  const { title, description, stats, items } = portfolioData.skills;

  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);
  const [counts, setCounts] = useState<Record<number, number>>({});
  const [hasAnimated, setHasAnimated] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  // Prepare stats with icons and targets
  const statsWithIcons = stats.map((stat: any, index: number) => {
    const icons = [Briefcase, DollarSign, Users, TrendingUp];
    const target = parseStatValue(stat.value);
    return { ...stat, icon: icons[index % icons.length], target };
  });

  // Animate Stats Count-Up
  useEffect(() => {
    if (!hasAnimated && statsWithIcons.length > 0) {
      const duration = 1800;
      const steps = 60;
      const interval = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;

        const newCounts: Record<number, number> = {};
        statsWithIcons.forEach((stat, index) => {
          if (stat.target === null || stat.target === undefined) {
            newCounts[index] = 0;
          } else {
            newCounts[index] = Math.min(
              Math.round(stat.target * progress),
              stat.target
            );
          }
        });

        setCounts(newCounts);

        if (step >= steps) {
          clearInterval(timer);
          setHasAnimated(true);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [hasAnimated, statsWithIcons]);

  // Body scroll lock and keyboard handling for modal
  useEffect(() => {
    if (selectedSkill) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      
      modalRef.current?.focus();

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setSelectedSkill(null);
        }
      };

      document.addEventListener("keydown", handleEscape);
      
      return () => {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [selectedSkill]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 100, y: -100 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 1.2, delay: 0.1 }}
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-100/20 to-purple-100/20 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -100, y: 100 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100/20 to-cyan-100/20 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center mb-20 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200/50 mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-indigo-600 animate-pulse" />
            <span className="text-sm font-semibold text-indigo-700">
              Professional Portfolio
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 bg-clip-text text-transparent leading-tight">
            {title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.13,
              },
            },
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {statsWithIcons.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05, boxShadow: "0 8px 32px #6366f140" }}
                className="group relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-slate-200/60 hover:shadow-2xl hover:border-indigo-300/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                tabIndex={0}
                aria-label={stat.label}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative text-center">
                  <div className="flex justify-center mb-5">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                      className="p-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100 group-hover:from-indigo-100 group-hover:to-indigo-200 transition-all duration-300 shadow-sm"
                    >
                      <Icon className="w-8 h-8 text-indigo-600" />
                    </motion.div>
                  </div>
                  <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2 min-h-[2.5rem] flex items-center justify-center">
                    {formatStatValue(
                      stat.value,
                      counts[index] || 0,
                      hasAnimated
                    )}
                  </div>
                  <div className="text-sm text-slate-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.09,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {(items as SkillItem[]).map((skill) => (
            <motion.div
              key={skill.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.045, boxShadow: "0 8px 32px #6366f140" }}
              onClick={() => setSelectedSkill(skill)}
              className={`group cursor-pointer relative bg-gradient-to-br ${
                categoryColors[skill.category]
              } backdrop-blur-sm border-2 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-[1.05] overflow-hidden focus:outline-none focus:ring-2 focus:ring-indigo-400`}
              tabIndex={0}
              aria-label={`View details for ${skill.title}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedSkill(skill);
                }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <span
                    className={`text-xs font-bold px-4 py-2 rounded-xl bg-white shadow-md ${
                      categoryTextColors[skill.category]
                    }`}
                  >
                    {skill.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-white/90 px-3 py-2 rounded-xl shadow-sm">
                    <Award className="w-3.5 h-3.5" />
                    {skill.grade}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-700 transition-colors leading-tight">
                  {skill.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {skill.description}
                </p>
                <div className="flex items-center text-sm font-semibold text-indigo-600 group-hover:gap-3 gap-2 transition-all duration-300">
                  <Zap className="w-4 h-4" />
                  <span>View Details</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

{/* Modal - Final Responsive Fix */}
{/* Modal - Robust final fix */}
<AnimatePresence>
  {selectedSkill && (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-hidden={false}>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={() => setSelectedSkill(null)}
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        aria-hidden="true"
      />

      {/* Centering wrapper: allows overlay scrolling if needed */}
      <div className="min-h-screen px-4 py-8 flex items-center justify-center">
        {/* Modal container: flex column + explicit inline maxHeight so it never exceeds viewport */}
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.96, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 8 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          tabIndex={-1}
          className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden focus:outline-none"
          style={{ maxHeight: "calc(100vh - 4rem)" }} // <- explicit, robust restriction
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedSkill(null)}
            className="absolute top-4 right-4 z-20 p-2.5 bg-white/95 hover:bg-white rounded-full 
                       shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 
                       focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-slate-700" />
          </button>

          {/* Header (non-sticky; fixed height handled by flex layout) */}
          <div
            className={`flex-shrink-0 bg-gradient-to-br ${
              categoryBgGradients[selectedSkill.category]
            } px-8 py-8 border-b border-slate-200/50`}
          >
            <div className="space-y-4 pr-12">
              <div className="flex items-center gap-3 flex-wrap">
                <span
                  className={`inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full ${
                    categoryTextColors[selectedSkill.category]
                  } bg-white shadow-md`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      categoryAccentColors[selectedSkill.category]
                    }`}
                  />
                  {selectedSkill.category}
                </span>
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/90 px-4 py-2 rounded-full shadow-md">
                  <Award className="w-4 h-4 text-amber-500" />
                  {selectedSkill.grade}
                </span>
              </div>
              <h2
                id="modal-title"
                className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight"
              >
                {selectedSkill.title}
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                {selectedSkill.description}
              </p>
            </div>
          </div>

          {/* Body (flex-1 so it fills remaining height; overflow-y-auto for internal scrolling) */}
          <div className="flex-1 overflow-y-auto px-8 py-8 space-y-8">
            {/* Overview */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                <span
                  className={`w-1.5 h-7 rounded-full ${
                    categoryAccentColors[selectedSkill.category]
                  }`}
                />
                Overview
              </h3>
              <p className="text-slate-700 text-base leading-relaxed pl-1">
                {selectedSkill.details}
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-5 pb-4">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                <span
                  className={`w-1.5 h-7 rounded-full ${
                    categoryAccentColors[selectedSkill.category]
                  }`}
                />
                Key Achievements
              </h3>
              <div className="space-y-3">
                {selectedSkill.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06, duration: 0.26 }}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 hover:bg-slate-100 
                               border border-slate-200/80 hover:border-slate-300 transition-all duration-200"
                  >
                    <CheckCircle2
                      className={`flex-shrink-0 w-5 h-5 mt-0.5 ${
                        categoryTextColors[selectedSkill.category]
                      }`}
                    />
                    <span className="text-slate-700 leading-relaxed text-base">
                      {achievement}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )}
</AnimatePresence>



    </section>
  );
}