'use client'

import { useState, useEffect } from 'react'

interface UseVideoBackgroundReturn {
  shouldLoadVideo: boolean
  isSlowConnection: boolean
  prefersReducedMotion: boolean
}

export function useVideoBackground(): UseVideoBackgroundReturn {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)
  const [isSlowConnection, setIsSlowConnection] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    // Check connection speed (if available)
    if ('connection' in navigator) {
      const connection = (navigator as any).connection
      const effectiveType = connection?.effectiveType

      // Only load video on 4G or WiFi
      const isFastConnection = effectiveType === '4g' || !effectiveType
      setIsSlowConnection(!isFastConnection)
      setShouldLoadVideo(isFastConnection && !mediaQuery.matches)
    } else {
      // If connection API not available, assume good connection
      setShouldLoadVideo(!mediaQuery.matches)
    }

    // Listen for changes in motion preference
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
      if (e.matches) {
        setShouldLoadVideo(false)
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return {
    shouldLoadVideo,
    isSlowConnection,
    prefersReducedMotion
  }
}
