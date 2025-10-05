// app/constants.ts
export const TRANSITION_CLASSES = {
  base: 'transition-all duration-700 ease-out',
  hover: 'hover:brightness-75 hover:scale-[1.02]',
  selected: 'brightness-100 scale-105 shadow-2xl z-10',
  unselected: 'brightness-50 scale-95 blur-sm'
}

export const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/academics', label: 'Academics & Research' },
  { href: '/leadership', label: 'Leadership & Activities' },
  { href: '/community', label: 'Community Impact' },
  { href: '/skills', label: 'Skills & Interests' },
  { href: '/awards', label: 'Awards & Media Recognition' },
  { href: 'https://www.youtube.com/@ReshapingSociety', label: 'YouTube' },
  { href: '/reflections', label: 'Reflections' }
]

export const SECTION_COLORS = {
  academics: '#1e40af',
  leadership: '#dc2626', 
  initiatives: '#059669',
  community: '#7c3aed',
  professional: '#ea580c',
  extracurricular: '#db2777',
  skills: '#0891b2',
  awards: '#ca8a04'
}

export const ANIMATION_VARIANTS = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  },
  slideUp: {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -100, opacity: 0 }
  },
  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
}