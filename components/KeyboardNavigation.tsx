import { useEffect } from 'react'

interface KeyboardNavigationProps {
  onClose?: () => void
  onNext?: () => void
  onPrev?: () => void
}

export function KeyboardNavigation({ onClose, onNext, onPrev }: KeyboardNavigationProps) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      switch (e.key) {
        case 'Escape':
          onClose?.()
          break
        case 'ArrowRight':
          onNext?.()
          break
        case 'ArrowLeft':
          onPrev?.()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose, onNext, onPrev])

  return null
}